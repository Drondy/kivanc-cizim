#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Kıvanç Çizim Atölyesi — RTX 4090 Senkronizasyon Scripti
RTX 4090 ComfyUI sunucusundan yüksek çözünürlüklü çizim varlıklarını çeker.
"""

import os
import sys
import argparse
from comfyui_client import ComfyUIClient, build_concept_art_workflow

LESSON_PROMPTS = {
    "ates_ejderhasi": {
        "title": "Ateş Ejderhası",
        "prompt": "Masterpiece concept art of a magnificent crimson fire dragon, three-quarter dynamic pose perched on stone pedestal, spread bat wings, sharp curved horns, glowing amber eyes, detailed scales and reptilian musculature, sharp talons, long spiked tail, dramatic studio lighting, pure white background, fantasy digital art, professional illustration",
        "negative": "cartoon, 3d render, clay, simplistic, blurry, noisy, low details, dark background, cropped"
    }
}

def main():
    parser = argparse.ArgumentParser(description="RTX 4090 ComfyUI Çizim Varlıkları Senkronizasyonu")
    parser.add_argument("--host", default=os.environ.get("COMFYUI_HOST", "127.0.0.1:8188"), help="RTX 4090 IP ve Port (örn: 192.168.1.50:8188)")
    parser.add_argument("--lesson", default="ates_ejderhasi", help="Üretilecek ders ID'si (örn: ates_ejderhasi)")
    parser.add_argument("--outdir", default=os.path.join(os.path.dirname(__file__), "..", "assets", "images"), help="Çıktı klasörü")
    args = parser.parse_args()

    client = ComfyUIClient(args.host)
    if not client.is_server_reachable():
        print(f"[!] Hata: {args.host} adresindeki ComfyUI sunucusuna ulaşılamadı.")
        print("    Lütfen RTX 4090 bilgisayarında ComfyUI'ın '--listen 0.0.0.0' ile çalıştığından emin olun.")
        sys.exit(1)

    lesson_data = LESSON_PROMPTS.get(args.lesson)
    if not lesson_data:
        print(f"[!] Ders bulunamadı: {args.lesson}. Mevcut dersler: {list(LESSON_PROMPTS.keys())}")
        sys.exit(1)

    print(f"[*] '{lesson_data['title']}' için RTX 4090 üzerinde üretim başlatılıyor...")
    wf = build_concept_art_workflow(lesson_data["prompt"], lesson_data["negative"], seed=1001)
    
    os.makedirs(args.outdir, exist_ok=True)
    downloaded = client.run_workflow_and_wait(wf, output_dir=args.outdir)
    print(f"[✓] Başarıyla tamamlandı! İndirilen dosyalar: {downloaded}")

if __name__ == "__main__":
    main()
