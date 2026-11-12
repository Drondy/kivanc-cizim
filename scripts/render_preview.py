# -*- coding: utf-8 -*-
"""
Headless Chrome SVG Önizleme Aracı
Kullanım:
  python scripts/render_preview.py --batch scripts/.tmp/batch.py
  python scripts/render_preview.py --from-catalog --category sonic --last 6
"""
from __future__ import annotations
import argparse
import importlib.util
import json
import os
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Dict, List, Optional

REPO_DIR = Path(__file__).resolve().parent.parent
TMP_DIR = Path(__file__).resolve().parent / ".tmp"


def load_batch(batch_path: Path):
    if batch_path.suffix.lower() == ".json":
        with open(batch_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        if not isinstance(data, list):
            raise ValueError("JSON batch root must be a list")
        return data

    spec = importlib.util.spec_from_file_location("kivanc_batch", str(batch_path))
    if not spec or not spec.loader:
        raise RuntimeError(f"Cannot import {batch_path}")
    mod = importlib.util.module_from_spec(spec)
    sys.path.insert(0, str(batch_path.parent))
    spec.loader.exec_module(mod)

    if hasattr(mod, "DRAWINGS"):
        return list(mod.DRAWINGS)

    # Fallback: first uppercase list of dicts with 'steps'
    for attr in dir(mod):
        if attr.isupper():
            val = getattr(mod, attr)
            if isinstance(val, list) and val and isinstance(val[0], dict) and "steps" in val[0]:
                return list(val)
    raise ValueError(f"No DRAWINGS list found in {batch_path}")


def load_from_catalog(category: str | None, last: int, ids: list[str] | None):
    node_script = (
        "const fs=require('fs'),vm=require('vm');"
        "const c={};"
        "vm.runInNewContext(fs.readFileSync(process.argv[1],'utf8')+'\\nthis.DRW=DRAWINGS_DATA;',c);"
        "console.log(JSON.stringify(c.DRW));"
    )
    res = subprocess.run(
        ["node", "-e", node_script, str(REPO_DIR / "drawings.js")],
        capture_output=True,
        text=True,
        encoding="utf-8",
        check=True,
    )
    items = json.loads(res.stdout)
    if ids:
        id_set = set(ids)
        items = [d for d in items if d.get("id") in id_set]
    elif category and category != "all":
        items = [d for d in items if d.get("categoryId") == category]
    if last > 0:
        items = items[-last:]
    return items


def find_browser():
    candidates = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    raise RuntimeError("Headless screenshot için Chrome veya Edge bulunamadı.")


def render(items: list[dict], out_name: str):
    if not items:
        raise ValueError("Önizlenecek çizim bulunamadı.")

    TMP_DIR.mkdir(parents=True, exist_ok=True)
    cards = []
    for idx, d in enumerate(items, start=1):
        steps = d.get("steps", [])
        outline_inner = "".join(st.get("svg", "") for st in steps[:-1] if not st.get("image"))
        final_inner = d.get("previewSvg") or (steps[-1].get("svg", "") if steps else "")
        cards.append(
            f"""
            <div class="card">
              <div class="title">{idx}. {d.get('name', d.get('id'))} ({d.get('id')})</div>
              <div class="row">
                <div class="box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">{outline_inner}</svg></div>
                <div class="box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">{final_inner}</svg></div>
              </div>
            </div>
            """
        )

    cols = min(3, len(items))
    rows = (len(items) + cols - 1) // cols
    win_w = max(560, cols * 500 + 60)
    win_h = max(360, rows * 285 + 80)

    html = f"""<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  body {{ margin: 16px; font-family: Arial, sans-serif; background: #f8fafc; }}
  .grid {{ display: grid; grid-template-columns: repeat({cols}, 1fr); gap: 14px; }}
  .card {{ background: #fff; border: 2px solid #cbd5e1; border-radius: 12px; padding: 8px; }}
  .title {{ font-size: 13px; font-weight: bold; margin-bottom: 6px; color: #0f172a; }}
  .row {{ display: flex; gap: 6px; }}
  .box {{ width: 220px; height: 220px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff; }}
  .box svg {{ width: 100%; height: 100%; display: block; }}
</style>
</head>
<body>
<div class="grid">
{"".join(cards)}
</div>
</body>
</html>
"""
    html_path = TMP_DIR / f"{out_name}.html"
    png_path = TMP_DIR / f"{out_name}.png"
    html_path.write_text(html, encoding="utf-8")

    browser = find_browser()
    url = "file:///" + str(html_path).replace("\\", "/")
    with tempfile.TemporaryDirectory() as udir:
        cmd = [
            browser,
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            f"--user-data-dir={udir}",
            f"--window-size={win_w},{win_h}",
            f"--screenshot={png_path}",
            url,
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        print("Chrome RC:", res.returncode)
        if res.stderr:
            print(res.stderr.strip()[:300])

    print(f"Preview saved: {png_path} ({png_path.stat().st_size if png_path.exists() else 0} bytes)")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--batch", type=str, help="Python veya JSON batch dosyası")
    parser.add_argument("--from-catalog", action="store_true", help="Mevcut drawings.js üzerinden oku")
    parser.add_argument("--category", type=str, default=None, help="Kategori filtresi")
    parser.add_argument("--last", type=int, default=6, help="Son N çizimi göster")
    parser.add_argument("--ids", nargs="*", help="Belirli çizim ID'leri")
    parser.add_argument("--out", type=str, default="preview_batch", help="Çıktı dosya taban adı")
    args = parser.parse_args()

    if args.batch:
        items = load_batch(Path(args.batch).resolve())
    elif args.from_catalog:
        items = load_from_catalog(args.category, args.last, args.ids)
    else:
        parser.error("--batch veya --from-catalog belirtmelisiniz.")

    render(items, args.out)


if __name__ == "__main__":
    main()
