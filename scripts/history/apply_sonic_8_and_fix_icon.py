# -*- coding: utf-8 -*-
"""
Generates 152 studio-quality MP3 voice files concurrently (tr-TR-EmelNeural)
for the 8 new Kirpi Sonic drawings, fixes existing 5 Sonic arm stroke orders,
installs the custom Kirpi Sonic Vector Category Icon (replacing brown hedgehog emoji),
and updates drawings.js with all 13 Sonic drawings (total 31 drawings across 7 categories).
"""

import os
import sys
import json
import asyncio
import edge_tts

sys.path.insert(0, os.path.dirname(__file__))
from sonic_new8_data import SONIC_CAT_ICON_SVG, NEW_SONIC_8

OUTPUT_DIR = r"C:\Users\osman\OneDrive\Masaüstü\kivanc"
VOICE_NAME = "tr-TR-EmelNeural"
AUDIO_DIR = os.path.join(OUTPUT_DIR, "audio", "voices")
DRAWINGS_JS = os.path.join(OUTPUT_DIR, "drawings.js")

async def generate_voice(sem, text, filepath):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 1000:
        return False
    async with sem:
        for attempt in range(3):
            try:
                communicator = edge_tts.Communicate(text, VOICE_NAME, rate="+0%", pitch="+0Hz")
                await communicator.save(filepath)
                return True
            except Exception as e:
                if attempt == 2:
                    raise
                await asyncio.sleep(1.5)
    return False

async def main():
    print(f"Generating studio human voices ({VOICE_NAME}) concurrently for 8 new Kirpi Sonic drawings...")
    sem = asyncio.Semaphore(6)
    tasks = []

    for d in NEW_SONIC_8:
        d_id = d["id"]
        os.makedirs(os.path.join(AUDIO_DIR, d_id), exist_ok=True)
        w_path = os.path.join(OUTPUT_DIR, d["welcomeAudio"].replace("/", os.sep))
        tasks.append(generate_voice(sem, d["welcomeText"], w_path))

        for s in d["steps"]:
            s_num = s["title"].split(".")[0]
            s_audio = f"audio/voices/{d_id}/step_{s_num}.mp3"
            s["audio"] = s_audio
            s_path = os.path.join(OUTPUT_DIR, s_audio.replace("/", os.sep))
            tasks.append(generate_voice(sem, s["voice"], s_path))

    results = await asyncio.gather(*tasks)
    print(f"Completed voice generation: {len(tasks)} total files verified ({sum(1 for r in results if r)} newly generated)!")

    # Load drawings.js
    with open(DRAWINGS_JS, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Update 'all' count (23 -> 31) and 'sonic' category block
    content = content.replace('"count": 23', '"count": 31', 1)

    old_sonic_cat = '''  {
    "id": "sonic",
    "name": "Kirpi Sonic Dünyası",
    "emoji": "🦔",
    "count": 5,
    "desc": "Süper hızlı Sonic, Altın Süper Sonic, Tails, Knuckles ve Shadow!"
  },'''
    old_sonic_cat_crlf = old_sonic_cat.replace("\n", "\r\n")

    new_sonic_cat = f'''  {{
    "id": "sonic",
    "name": "Kirpi Sonic Dünyası",
    "emoji": "💨",
    "iconSvg": `{SONIC_CAT_ICON_SVG}`,
    "count": 13,
    "desc": "Sonic, Süper Sonic, Tails, Knuckles, Shadow, Amy Rose, Metal Sonic, Silver, Dr. Eggman ve dahası!"
  }},'''

    if old_sonic_cat_crlf in content:
        content = content.replace(old_sonic_cat_crlf, new_sonic_cat.replace("\n", "\r\n"), 1)
    elif old_sonic_cat in content:
        content = content.replace(old_sonic_cat, new_sonic_cat, 1)
    else:
        raise Exception("Could not locate sonic category block in drawings.js")

    # 2. Replace brown hedgehog emoji on cirak_sonic_klasik with 💨
    content = content.replace('id: "cirak_sonic_klasik",\r\n    categoryId: "sonic",\r\n    name: "Süper Hızlı Kirpi Sonic",\r\n    emoji: "\\ud83e\\udd94",',
                              'id: "cirak_sonic_klasik",\r\n    categoryId: "sonic",\r\n    name: "Süper Hızlı Kirpi Sonic",\r\n    emoji: "💨",')
    content = content.replace('id: "cirak_sonic_klasik",\n    categoryId: "sonic",\n    name: "Süper Hızlı Kirpi Sonic",\n    emoji: "\\ud83e\\udd94",',
                              'id: "cirak_sonic_klasik",\n    categoryId: "sonic",\n    name: "Süper Hızlı Kirpi Sonic",\n    emoji: "💨",')
    content = content.replace('emoji: "🦔",', 'emoji: "💨",')

    # 3. Fix arm stroke order on existing 5 Sonic drawings (#0f172a outer stroke FIRST, colored stroke ON TOP!)
    arm_fixes = [
        # cirak_sonic_klasik left & right arms
        (
            '<path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="url(#sonicPeach)" stroke-width="14" stroke-linecap="round"/>\n          <path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>',
            '<path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>\n          <path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="url(#sonicPeach)" stroke-width="9" stroke-linecap="round"/>'
        ),
        (
            '<path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="url(#sonicPeach)" stroke-width="14" stroke-linecap="round"/>\n          <path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>',
            '<path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>\n          <path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="url(#sonicPeach)" stroke-width="9" stroke-linecap="round"/>'
        ),
        # cirak_super_sonic arms
        (
            '<path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="url(#supPeach)" stroke-width="14" stroke-linecap="round"/>\n          <path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>',
            '<path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>\n          <path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="url(#supPeach)" stroke-width="9" stroke-linecap="round"/>'
        ),
        (
            '<path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="url(#supPeach)" stroke-width="14" stroke-linecap="round"/>\n          <path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>',
            '<path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>\n          <path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="url(#supPeach)" stroke-width="9" stroke-linecap="round"/>'
        ),
        # cirak_sonic_tails arms
        (
            '<path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="url(#tailsOrange)" stroke-width="14" stroke-linecap="round"/>\n          <path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>',
            '<path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>\n          <path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="url(#tailsOrange)" stroke-width="9" stroke-linecap="round"/>'
        ),
        (
            '<path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="url(#tailsOrange)" stroke-width="14" stroke-linecap="round"/>\n          <path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>',
            '<path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>\n          <path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="url(#tailsOrange)" stroke-width="9" stroke-linecap="round"/>'
        ),
        # cirak_sonic_knuckles arms
        (
            '<path d="M 258 260 L 210 310" stroke="url(#knuxRed)" stroke-width="16" stroke-linecap="round"/>\n          <path d="M 258 260 L 210 310" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>',
            '<path d="M 258 260 L 210 310" stroke="#0f172a" stroke-width="19" stroke-linecap="round"/>\n          <path d="M 258 260 L 210 310" stroke="url(#knuxRed)" stroke-width="10" stroke-linecap="round"/>'
        ),
        (
            '<path d="M 342 260 L 390 310" stroke="url(#knuxRed)" stroke-width="16" stroke-linecap="round"/>\n          <path d="M 342 260 L 390 310" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>',
            '<path d="M 342 260 L 390 310" stroke="#0f172a" stroke-width="19" stroke-linecap="round"/>\n          <path d="M 342 260 L 390 310" stroke="url(#knuxRed)" stroke-width="10" stroke-linecap="round"/>'
        ),
        # cirak_sonic_shadow arms
        (
            '<path d="M 265 265 L 205 295" stroke="url(#shadBlack)" stroke-width="14" stroke-linecap="round"/>\n          <path d="M 265 265 L 205 295" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>',
            '<path d="M 265 265 L 205 295" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>\n          <path d="M 265 265 L 205 295" stroke="#334155" stroke-width="9" stroke-linecap="round"/>'
        ),
        (
            '<path d="M 335 265 L 395 295" stroke="url(#shadBlack)" stroke-width="14" stroke-linecap="round"/>\n          <path d="M 335 265 L 395 295" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>',
            '<path d="M 335 265 L 395 295" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>\n          <path d="M 335 265 L 395 295" stroke="#334155" stroke-width="9" stroke-linecap="round"/>'
        ),
    ]

    for old, new in arm_fixes:
        old_crlf = old.replace("\n", "\r\n")
        new_crlf = new.replace("\n", "\r\n")
        content = content.replace(old_crlf, new_crlf)
        content = content.replace(old, new)

    # 4. Append 8 new Sonic drawings to DRAWINGS_DATA
    new_drawings_js = ""
    for d in NEW_SONIC_8:
        if f'id: "{d["id"]}"' in content or f'id: \'{d["id"]}\'' in content:
            print(f"Drawing {d['id']} already exists, skipping.")
            continue
        new_drawings_js += f"""
  // =========================================================================
  // ⚡ KİRPİ SONİC DÜNYASI: {d['name'].upper()}
  // =========================================================================
  {{
    id: {json.dumps(d['id'])},
    categoryId: {json.dumps(d['categoryId'])},
    name: {json.dumps(d['name'])},
    emoji: {json.dumps(d['emoji'])},
    level: {d['level']},
    levelName: {json.dumps(d['levelName'])},
    levelBadge: {json.dumps(d['levelBadge'])},
    description: {json.dumps(d['description'])},
    materials: {json.dumps(d['materials'])},
    welcomeText: {json.dumps(d['welcomeText'])},
    welcomeAudio: {json.dumps(d['welcomeAudio'])},
    colors: {json.dumps(d['colors'])},
    previewSvg: `{d['steps'][-1]['svg']}`,
    steps: [
"""
        for s in d['steps']:
            new_drawings_js += f"""      {{
        title: {json.dumps(s['title'])},
        instruction: {json.dumps(s['instruction'])},
        voice: {json.dumps(s['voice'])},
        svg: `{s['svg']}`,
        audio: {json.dumps(s['audio'])}
      }},
"""
        new_drawings_js += """    ]
  },
"""

    if new_drawings_js:
        last_bracket_idx = content.rfind("];")
        if last_bracket_idx == -1:
            raise Exception("Could not find closing `];` of DRAWINGS_DATA")
        prefix = content[:last_bracket_idx].rstrip()
        if not prefix.endswith(","):
            prefix += ","
        content = prefix + "\n" + new_drawings_js + content[last_bracket_idx:]

    with open(DRAWINGS_JS, "w", encoding="utf-8") as f:
        f.write(content)

    print("Successfully updated drawings.js with Kirpi Sonic iconSvg, arm fixes, and 8 new drawings (total 31 drawings)!")

if __name__ == "__main__":
    asyncio.run(main())
