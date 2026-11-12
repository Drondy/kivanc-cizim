# -*- coding: utf-8 -*-
"""
Normalize 15 new Sonic drawings (P1 + P2 + P3), generate 285 Turkish MP3 voices
via edge-tts (tr-TR-EmelNeural), and update C:/Users/osman/OneDrive/Masaüstü/kivanc/drawings.js.
"""
import argparse
import asyncio
import json
import os
import re
import sys

import edge_tts

SCRATCH_DIR = r"C:\Users\osman\.gemini\antigravity\brain\1e7ef026-ce53-45d2-aa8b-07792b52ac20\scratch"
REPO_DIR = r"C:\Users\osman\OneDrive\Masaüstü\kivanc"
DRAWINGS_JS = os.path.join(REPO_DIR, "drawings.js")
VOICES_ROOT = os.path.join(REPO_DIR, "audio", "voices")

sys.path.insert(0, SCRATCH_DIR)
from sonic_15_p1 import SONIC_15_P1
from sonic_15_p2 import SONIC_15_P2
from sonic_15_p3 import SONIC_15_P3

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


def normalize_drawings():
    raw = SONIC_15_P1 + SONIC_15_P2 + SONIC_15_P3
    assert len(raw) == 15, f"Expected 15 drawings, got {len(raw)}"

    seen_ids = set()
    missing_hexes = set()
    grad_ids = []
    normalized = []

    for d in raw:
        did = d["id"]
        assert did not in seen_ids, f"Duplicate drawing id: {did}"
        seen_ids.add(did)

        steps = d["steps"]
        assert len(steps) == 18, f"{did} has {len(steps)} steps (expected 18)"

        norm_steps = []
        for idx, st in enumerate(steps, start=1):
            svg = st["svg"].strip()
            assert "<svg" not in svg.lower(), f"{did} step {idx} contains <svg>"
            if idx < 18:
                assert "#3b82f6" not in svg.lower(), (
                    f"{did} step {idx} contains blue guide #3b82f6"
                )
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
        grad_ids.extend(re.findall(r'id="([^"]+)"', last_svg))

        norm_colors = []
        for col in d["colors"]:
            if isinstance(col, dict):
                norm_colors.append(col)
            else:
                low = col.lower()
                if low not in HEX_COLOR_NAMES:
                    missing_hexes.add(low)
                norm_colors.append(
                    {"name": HEX_COLOR_NAMES.get(low, col), "hex": col}
                )

        normalized.append(
            {
                "id": did,
                "categoryId": "sonic",
                "name": d["name"],
                "emoji": d["emoji"],
                "level": 1,
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

    return normalized, missing_hexes, grad_ids


async def synth_one(sem, text, out_path):
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
        return "cached"
    async with sem:
        last_err = None
        for attempt in range(1, 5):
            try:
                comm = edge_tts.Communicate(
                    text, VOICE_NAME, rate="+0%", pitch="+0Hz"
                )
                await comm.save(out_path)
                if os.path.getsize(out_path) > 500:
                    return "generated"
            except Exception as exc:
                last_err = exc
                await asyncio.sleep(0.8 * attempt)
        raise RuntimeError(f"Failed TTS for {out_path}: {last_err}")


async def generate_all_audio(drawings):
    sem = asyncio.Semaphore(6)
    tasks = []
    for d in drawings:
        did = d["id"]
        tasks.append(
            synth_one(
                sem,
                d["welcomeText"],
                os.path.join(VOICES_ROOT, did, "welcome.mp3"),
            )
        )
        for idx, st in enumerate(d["steps"], start=1):
            tasks.append(
                synth_one(
                    sem,
                    st["voice"],
                    os.path.join(VOICES_ROOT, did, f"step_{idx}.mp3"),
                )
            )
    results = await asyncio.gather(*tasks)
    gen_cnt = sum(1 for r in results if r == "generated")
    cache_cnt = sum(1 for r in results if r == "cached")
    print(f"Audio summary: total={len(results)}, generated={gen_cnt}, cached={cache_cnt}")


def update_drawings_js(drawings):
    with open(DRAWINGS_JS, "r", encoding="utf-8") as f:
        content = f.read()

    for d in drawings:
        if f'"{d["id"]}"' in content or f'id: "{d["id"]}"' in content:
            raise RuntimeError(f"Drawing {d['id']} already exists in drawings.js!")

    assert '"count": 41' in content, 'Expected "count": 41 in drawings.js'
    assert '"count": 23' in content, 'Expected "count": 23 in drawings.js'
    old_desc = '"23 efsane Sonic karakteri, aracı, robotu ve Kaos Zümrütleri!"'
    assert old_desc in content, f"Expected {old_desc} in drawings.js"

    content = content.replace('"count": 41', '"count": 56', 1)
    content = content.replace('"count": 23', '"count": 38', 1)
    content = content.replace(
        old_desc,
        '"38 efsane Sonic karakteri, aracı, robotu, bossları ve bölgeleri!"',
        1,
    )

    stripped = content.rstrip()
    assert stripped.endswith("];"), "Expected drawings.js to end with ];"
    prefix = stripped[:-2].rstrip()
    if not prefix.endswith(","):
        prefix += ","

    formatted_chunks = []
    for d in drawings:
        dumped = json.dumps(d, ensure_ascii=False, indent=2)
        indented = "\n".join("  " + line for line in dumped.splitlines())
        formatted_chunks.append(indented)

    new_content = prefix + "\n" + ",\n".join(formatted_chunks) + "\n];\n"
    with open(DRAWINGS_JS, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Updated drawings.js successfully (+{len(drawings)} drawings).")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--check-only", action="store_true")
    args = parser.parse_args()

    drawings, missing_hexes, grad_ids = normalize_drawings()
    with open(DRAWINGS_JS, "r", encoding="utf-8") as f:
        existing_js = f.read()
    existing_grad_ids = set(re.findall(r'id="([^"]+)"', existing_js))
    colliding = [gid for gid in grad_ids if gid in existing_grad_ids]
    internal_dups = [gid for gid in set(grad_ids) if grad_ids.count(gid) > 1]

    print(f"Normalized: {len(drawings)} drawings, {sum(len(d['steps']) for d in drawings)} steps")
    print(f"Missing hex names: {sorted(missing_hexes)}")
    print(f"Internal grad ID dups: {internal_dups}")
    print(f"Existing drawings.js grad ID collisions: {colliding}")

    if missing_hexes or colliding or internal_dups:
        print("Fix warnings above before applying!")
        if args.check_only:
            sys.exit(1)

    if args.check_only:
        print("Check-only passed cleanly!")
        return

    asyncio.run(generate_all_audio(drawings))
    update_drawings_js(drawings)


if __name__ == "__main__":
    main()
