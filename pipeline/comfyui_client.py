#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
KIVANÇ ÇİZİM ATÖLYESİ — RTX 4090 COMFYUI PIPELINE CLIENT
=============================================================================
Bu script, RTX 4090 donanımlı Windows iş istasyonunda koşan ComfyUI sunucusu ile
yerel ağ (LAN) üzerinden REST API ve WebSocket ile haberleşir.

Özellikler:
1. FLUX.1 [dev] / SDXL tabanlı profesyonel konsept sanat illüstrasyonu üretimi.
2. Anyline / ControlNet Lineart ile temiz çizgi ve iskelet (sketch) ayrıştırma.
3. BiRefNet / Rembg ile arka plan temizleme (saf beyaz kağıt arka planı).
4. Otomatik sonuç indirme ve web projesine entegre etme.
=============================================================================
"""

import sys
import os
import json
import uuid
import time
import urllib.request
import urllib.parse
from pathlib import Path

DEFAULT_SERVER_ADDRESS = os.environ.get("COMFYUI_HOST", "127.0.0.1:8188")

class ComfyUIClient:
    def __init__(self, server_address=DEFAULT_SERVER_ADDRESS):
        self.server_address = server_address.replace("http://", "").rstrip("/")
        self.client_id = str(uuid.uuid4())
        print(f"[*] ComfyUI İstemcisi Başlatıldı. Hedef: http://{self.server_address}")

    def is_server_reachable(self):
        """ComfyUI sunucusunun erişilebilir olup olmadığını kontrol eder."""
        try:
            url = f"http://{self.server_address}/system_stats"
            req = urllib.request.Request(url, headers={'User-Agent': 'KivancPipeline/1.0'})
            with urllib.request.urlopen(req, timeout=3) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                vram_info = data.get('devices', [{}])[0].get('vram_total', 0) / (1024**3)
                gpu_name = data.get('devices', [{}])[0].get('name', 'Bilinmeyen GPU')
                print(f"[✓] ComfyUI Sunucusuna Bağlandı: {gpu_name} ({vram_info:.1f} GB VRAM)")
                return True
        except Exception as e:
            print(f"[!] ComfyUI sunucusuna erişilemedi: {e}")
            print(f"    Lütfen RTX 4090 makinesinde ComfyUI'ın çalıştığından ve '--listen 0.0.0.0' parametresi verildiğinden emin olun.")
            return False

    def queue_prompt(self, workflow_prompt):
        """ComfyUI prompt kuyruğuna iş gönderir."""
        p = {"prompt": workflow_prompt, "client_id": self.client_id}
        data = json.dumps(p).encode('utf-8')
        req = urllib.request.Request(f"http://{self.server_address}/prompt", data=data, headers={'Content-Type': 'application/json'})
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode('utf-8'))

    def get_history(self, prompt_id):
        """Biten işin geçmiş kayıtlarını alır."""
        with urllib.request.urlopen(f"http://{self.server_address}/history/{prompt_id}") as resp:
            return json.loads(resp.read().decode('utf-8'))

    def download_image(self, filename, subfolder="", folder_type="output", output_dir="."):
        """Üretilen resmi sunucudan yerel diske kaydeder."""
        params = urllib.parse.urlencode({"filename": filename, "subfolder": subfolder, "type": folder_type})
        url = f"http://{self.server_address}/view?{params}"
        dest_path = os.path.join(output_dir, filename)
        os.makedirs(output_dir, exist_ok=True)
        urllib.request.urlretrieve(url, dest_path)
        print(f"[✓] İndirildi: {dest_path}")
        return dest_path

    def run_workflow_and_wait(self, workflow_prompt, output_dir="./output"):
        """İşi kuyruğa alır ve tamamlanana kadar bekleyip üretilen resimleri indirir."""
        res = self.queue_prompt(workflow_prompt)
        prompt_id = res.get('prompt_id')
        print(f"[*] İş kuyruğa alındı (ID: {prompt_id}). RTX 4090 üzerinde hesaplanıyor...")

        # Bekleme döngüsü (Poll)
        downloaded_files = []
        start_time = time.time()
        while time.time() - start_time < 300: # 5 dk zaman aşımı
            history = self.get_history(prompt_id)
            if prompt_id in history:
                outputs = history[prompt_id].get('outputs', {})
                for node_id, node_output in outputs.items():
                    if 'images' in node_output:
                        for img_meta in node_output['images']:
                            fpath = self.download_image(
                                img_meta['filename'],
                                img_meta.get('subfolder', ''),
                                img_meta.get('type', 'output'),
                                output_dir
                            )
                            downloaded_files.append(fpath)
                print(f"[✓] Tüm çıktılar başarıyla alındı ({len(downloaded_files)} dosya).")
                return downloaded_files
            time.sleep(1.5)

        raise TimeoutError("ComfyUI işlemi 5 dakika içinde tamamlanamadı.")


def build_concept_art_workflow(prompt_text, negative_text="", seed=42, width=1024, height=1024):
    """
    Standart FLUX.1 / SDXL profesyonel illüstrasyon düğüm yapısı (JSON).
    RTX 4090 24GB için optimize edilmiş 1024x1024 doğrudan üretim.
    """
    return {
        "3": {
            "inputs": {
                "seed": seed,
                "steps": 28,
                "cfg": 7.0,
                "sampler_name": "euler_ancestral",
                "scheduler": "normal",
                "denoise": 1,
                "model": ["4", 0],
                "positive": ["6", 0],
                "negative": ["7", 0],
                "latent_image": ["5", 0]
            },
            "class_type": "KSampler"
        },
        "4": {
            "inputs": {
                "ckpt_name": "sd_xl_base_1.0.safetensors"
            },
            "class_type": "CheckpointLoaderSimple"
        },
        "5": {
            "inputs": {
                "width": width,
                "height": height,
                "batch_size": 1
            },
            "class_type": "EmptyLatentImage"
        },
        "6": {
            "inputs": {
                "text": f"{prompt_text}, masterpiece, professional concept art illustration, clean line art, sharp ink contour lines, fantasy creature anatomy, dynamic lighting, high resolution, isolated on clean white background",
                "clip": ["4", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "7": {
            "inputs": {
                "text": f"{negative_text}, cartoonish, ugly, deformed anatomy, bad proportions, blurry, low quality, noisy, dark background, complex cluttered background, text, watermark",
                "clip": ["4", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "8": {
            "inputs": {
                "samples": ["3", 0],
                "vae": ["4", 2]
            },
            "class_type": "VAEDecode"
        },
        "9": {
            "inputs": {
                "filename_prefix": "Kivanc_ConceptArt",
                "images": ["8", 0]
            },
            "class_type": "SaveImage"
        }
    }


if __name__ == "__main__":
    host = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SERVER_ADDRESS
    client = ComfyUIClient(host)
    if client.is_server_reachable():
        print("[*] Sunucu hazır. İllüstrasyon üretimi tetiklenebilir.")
    else:
        print("[!] Lütfen ağ bağlantısını kontrol edin veya setup_guide_rtx4090.md kılavuzunu inceleyin.")
