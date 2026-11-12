# -*- coding: utf-8 -*-
"""
Kıvanç'ın Çizim Atölyesi — Yeniden Kullanılabilir Çizim & Türkçe Ses Ekleme Aracı
Kullanım:
  python scripts/add_drawings_tool.py --batch scripts/.tmp/batch_yeni.py --check-only
  python scripts/add_drawings_tool.py --batch scripts/.tmp/batch_yeni.py
"""
from __future__ import annotations
import argparse
import asyncio
import importlib.util
import json
import re
import sys
from pathlib import Path
from typing import Dict, List

import edge_tts

REPO_DIR = Path(__file__).resolve().parent.parent
DRAWINGS_JS = REPO_DIR / "drawings.js"
VOICES_ROOT = REPO_DIR / "audio" / "voices"
VOICE_NAME = "tr-TR-EmelNeural"

HEX_COLOR_NAMES = {
    "#9333ea": "Ninja Moru",
    "#facc15": "Altın Sarısı",
    "#22c55e": "Timsah Yeşili",
    "#94a3b8": "Çelik Grisi",
    "#16a34a": "Zümrüt Yeşili",
    "#f97316": "Canlı Turuncu",
    "#f59e0b": "Kehribar Sarısı",
    "#1e293b": "Gece Siyahı",
    "#7dd3fc": "Kanat Mavisi",
    "#ea580c": "Kızıl Turuncu",
    "#ffffff": "Parlak Beyaz",
    "#38bdf8": "Gökyüzü Mavisi",
    "#1e3a8a": "Gece Laciverti",
    "#ef4444": "Parlak Kırmızı",
    "#fef08a": "Ay Sarısı",
    "#eab308": "Süper Altın",
    "#64748b": "Koyu Gri",
    "#3b82f6": "Elektrik Mavisi",
    "#ec4899": "Kalp Pembesi",
    "#0f172a": "Koyu Siyah",
    "#cbd5e1": "Açık Gri",
    "#dc2626": "Kırmızı",
    "#2563eb": "Sonic Mavisi",
    "#b91c1c": "Zırh Kırmızısı",
    "#4ade80": "Çimen Yeşili",
    "#d97706": "Toprak Turuncusu",
    "#bae6fd": "Bulut Mavisi",
    "#fb923c": "Tilki Turuncusu",
    "#78350f": "Kahverengi",
    "#f43f5e": "Gül Kırmızısı",
    "#a855f7": "Parlak Mor",
    "#60a5fa": "Açık Mavi",
    "#f87171": "Mercan Kırmızısı",
    "#06b6d4": "Turkuaz",
    "#4f46e5": "Çivit Mavisi",
    "#334155": "Kömür Grisi",
    "#475569": "Antrasit Gri",
    "#e2e8f0": "Gümüş Beyazı",
}


def load_batch(batch_path: Path) -> list[dict]:
    if batch_path.suffix.lower() == ".json":
        with open(batch_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        if not isinstance(data, list):
            raise ValueError("JSON batch root must be a list")
        return data

    spec = importlib.util.spec_from_file_location("kivanc_add_batch", str(batch_path))
    if not spec or not spec.loader:
        raise RuntimeError(f"Cannot import {batch_path}")
    mod = importlib.util.module_from_spec(spec)
    sys.path.insert(0, str(batch_path.parent))
    spec.loader.exec_module(mod)

    if hasattr(mod, "DRAWINGS"):
        return list(mod.DRAWINGS)
    for attr in dir(mod):
        if attr.isupper():
            val = getattr(mod, attr)
            if isinstance(val, list) and val and isinstance(val[0], dict) and "steps" in val[0]:
                return list(val)
    raise ValueError(f"No DRAWINGS list found in {batch_path}")


def normalize_and_validate(raw: list[dict], existing_js: str):
    if not raw:
        raise ValueError("Batch boş.")

    seen_ids = set()
    existing_grad_ids = set(re.findall(r'id="([^"]+)"', existing_js))
    batch_grad_ids = []
    missing_hexes = set()
    normalized = []

    for d in raw:
        did = d["id"]
        if did in seen_ids:
            raise ValueError(f"Batch içinde yinelenen id: {did}")
        if f'"{did}"' in existing_js or f'id: "{did}"' in existing_js:
            raise ValueError(f"'{did}' zaten drawings.js içinde mevcut!")
        seen_ids.add(did)

        steps = d["steps"]
        if len(steps) < 3:
            raise ValueError(f"'{did}' en az 3 adım içermelidir.")

        norm_steps = []
        for idx, st in enumerate(steps, start=1):
            svg = st["svg"].strip()
            if "<svg" in svg.lower():
                raise ValueError(f"{did} adım {idx} içinde <svg> etiketi olmamalı")
            if idx < len(steps) and "#3b82f6" in svg.lower():
                raise ValueError(f"{did} adım {idx} içinde yasaklı mavi kılavuz (#3b82f6) var")
            norm_steps.append(
                {
                    "title": st["title"],
                    "instruction": st["instruction"],
                    "voice": st["voice"],
                    "svg": svg,
                    "audio": f"audio/voices/{did}/step_{idx}.mp3",
                }
            )

        last_svg = norm_steps[-1]["svg"]
        batch_grad_ids.extend(re.findall(r'id="([^"]+)"', last_svg))

        norm_colors = []
        for col in d.get("colors", []):
            if isinstance(col, dict) and "name" in col and "hex" in col:
                norm_colors.append(col)
            else:
                low = str(col).lower()
                if low not in HEX_COLOR_NAMES:
                    missing_hexes.add(low)
                norm_colors.append({"name": HEX_COLOR_NAMES.get(low, str(col)), "hex": str(col)})

        normalized.append(
            {
                "id": did,
                "categoryId": d["categoryId"],
                "name": d["name"],
                "emoji": d["emoji"],
                "level": d.get("level", 1),
                "levelName": d.get("levelName", "Çırak"),
                "levelBadge": d.get("levelBadge", "🟢 Çırak"),
                "description": d["description"],
                "materials": d["materials"],
                "welcomeText": d["welcomeText"],
                "welcomeAudio": f"audio/voices/{did}/welcome.mp3",
                "colors": norm_colors,
                "previewSvg": last_svg,
                "steps": norm_steps,
            }
        )

    internal_dups = [g for g in set(batch_grad_ids) if batch_grad_ids.count(g) > 1]
    colliding = [g for g in batch_grad_ids if g in existing_grad_ids]
    return normalized, sorted(missing_hexes), internal_dups, colliding


async def synth_one(sem, text: str, out_path: Path):
    out_path.parent.mkdir(parents=True, exist_ok=True)
    if out_path.exists() and out_path.stat().st_size > 1000:
        return "cached"
    async with sem:
        last_err = None
        for attempt in range(1, 5):
            try:
                comm = edge_tts.Communicate(text, VOICE_NAME, rate="+0%", pitch="+0Hz")
                await comm.save(str(out_path))
                if out_path.exists() and out_path.stat().st_size > 500:
                    return "generated"
            except Exception as exc:
                last_err = exc
                await asyncio.sleep(0.8 * attempt)
        raise RuntimeError(f"TTS başarısız: {out_path} ({last_err})")


async def generate_audio(drawings: list[dict]):
    sem = asyncio.Semaphore(6)
    tasks = []
    for d in drawings:
        did = d["id"]
        tasks.append(synth_one(sem, d["welcomeText"], VOICES_ROOT / did / "welcome.mp3"))
        for idx, st in enumerate(d["steps"], start=1):
            tasks.append(synth_one(sem, st["voice"], VOICES_ROOT / did / f"step_{idx}.mp3"))
    results = await asyncio.gather(*tasks)
    print(
        f"Audio summary: total={len(results)}, "
        f"generated={results.count('generated')}, cached={results.count('cached')}"
    )


def update_category_counts(content: str, added_by_cat: dict[str, int], total_added: int) -> str:
    def replace_cat_count(text: str, cat_id: str, delta: int) -> str:
        pattern = rf'("id"\s*:\s*"{re.escape(cat_id)}"[\s\S]*?"count"\s*:\s*)(\d+)'
        m = re.search(pattern, text)
        if not m:
            return text
        old_val = int(m.group(2))
        new_val = old_val + delta
        return text[: m.start(2)] + str(new_val) + text[m.end(2) :]

    content = replace_cat_count(content, "all", total_added)
    for cat_id, delta in added_by_cat.items():
        content = replace_cat_count(content, cat_id, delta)
    return content


def append_to_drawings_js(drawings: list[dict]):
    content = DRAWINGS_JS.read_text(encoding="utf-8")
    added_by_cat: dict[str, int] = {}
    for d in drawings:
        added_by_cat[d["categoryId"]] = added_by_cat.get(d["categoryId"], 0) + 1

    content = update_category_counts(content, added_by_cat, len(drawings))

    stripped = content.rstrip()
    if not stripped.endswith("];"):
        raise RuntimeError("drawings.js sonu '];' ile bitmiyor!")
    prefix = stripped[:-2].rstrip()
    if not prefix.endswith(","):
        prefix += ","

    formatted_chunks = []
    for d in drawings:
        dumped = json.dumps(d, ensure_ascii=False, indent=2)
        formatted_chunks.append("\n".join("  " + line for line in dumped.splitlines()))

    new_content = prefix + "\n" + ",\n".join(formatted_chunks) + "\n];\n"
    DRAWINGS_JS.write_text(new_content, encoding="utf-8")
    print(f"drawings.js güncellendi (+{len(drawings)} çizim).")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--batch", required=True, type=str, help="Python veya JSON batch dosyası")
    parser.add_argument("--check-only", action="store_true", help="Ses/dosya yazmadan yalnızca doğrula")
    args = parser.parse_args()

    raw = load_batch(Path(args.batch).resolve())
    existing_js = DRAWINGS_JS.read_text(encoding="utf-8")
    drawings, missing_hexes, internal_dups, colliding = normalize_and_validate(raw, existing_js)

    print(f"Validated: {len(drawings)} drawings, {sum(len(d['steps']) for d in drawings)} steps")
    print(f"Missing color names: {missing_hexes}")
    print(f"Internal gradient ID dups: {internal_dups}")
    print(f"Colliding gradient IDs in drawings.js: {colliding}")

    if missing_hexes or internal_dups or colliding:
        print("Yukarıdaki uyarıları düzeltin!")
        sys.exit(1)

    if args.check_only:
        print("Check-only passed cleanly!")
        return

    asyncio.run(generate_audio(drawings))
    append_to_drawings_js(drawings)
    print("Hatırlatma: index.html içindeki '?v=...' cache buster sürümünü artırıp `node scripts/audit_catalog.js` çalıştırın.")


if __name__ == "__main__":
    main()
