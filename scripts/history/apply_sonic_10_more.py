# -*- coding: utf-8 -*-
"""
Generates 190 studio-quality MP3 voice files concurrently (tr-TR-EmelNeural)
for 10 new Kirpi Sonic Universe drawings (13 -> 23 drawings in Sonic, 31 -> 41 total)
and updates drawings.js safely.
"""

import os
import sys
import json
import asyncio
import edge_tts

sys.path.insert(0, os.path.dirname(__file__))
from sonic_10_part1 import PART1_DRAWINGS
from sonic_10_part2 import PART2_DRAWINGS

ALL_NEW_10 = PART1_DRAWINGS + PART2_DRAWINGS

OUTPUT_DIR = r"C:\Users\osman\OneDrive\Masaüstü\kivanc"
VOICE_NAME = "tr-TR-EmelNeural"
AUDIO_DIR = os.path.join(OUTPUT_DIR, "audio", "voices")
DRAWINGS_JS = os.path.join(OUTPUT_DIR, "drawings.js")

async def generate_voice(sem, text, filepath):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 1000:
        return False
    async with sem:
        for attempt in range(4):
            try:
                communicator = edge_tts.Communicate(text, VOICE_NAME, rate="+0%", pitch="+0Hz")
                await communicator.save(filepath)
                return True
            except Exception as e:
                if attempt == 3:
                    raise
                await asyncio.sleep(1.5 * (attempt + 1))
    return False

async def main():
    print(f"Generating 190 studio human voices ({VOICE_NAME}) concurrently for 10 new Sonic drawings...")
    sem = asyncio.Semaphore(6)
    tasks = []

    for d in ALL_NEW_10:
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

    # Update 'all' count (31 -> 41) and 'sonic' count (13 -> 23)
    content = content.replace('"count": 31', '"count": 41', 1)
    content = content.replace('"count": 13', '"count": 23', 1)
    content = content.replace(
        '"desc": "Sonic, Süper Sonic, Tails, Knuckles, Shadow, Amy Rose, Metal Sonic, Silver, Dr. Eggman ve dahası!"',
        '"desc": "23 efsane Sonic karakteri, aracı, robotu ve Kaos Zümrütleri!"',
        1
    )

    new_drawings_js = ""
    for d in ALL_NEW_10:
        if f'id: "{d["id"]}"' in content or f"id: '{d['id']}'" in content:
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

    print("Successfully updated drawings.js with 10 new Sonic drawings (23 Sonic, 41 total)!")

if __name__ == "__main__":
    asyncio.run(main())
