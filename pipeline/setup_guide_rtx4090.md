# 🚀 RTX 4090 (24GB VRAM) COMFYUI SANAT & ÇİZİM ÜRETİM HATTI KILAVUZU

Bu kılavuz, **Kıvanç Çizim Atölyesi** için profesyonel konsept sanat illüstrasyonları, anatomik çizgi iskeletleri ve adım adım öğretim verilerini **RTX 4090 24GB VRAM** donanımlı Windows iş istasyonunda üretmek üzere tasarlanmıştır.

---

## 1. Donanım ve Model Seçim Stratejisi

RTX 4090'ın **24 GB VRAM** kapasitesi, modern difüzyon modellerinin en yüksek çözünürlükte ve en detaylı modda çalışmasına olanak tanır:

| Model | Tavsiye Edilen Kullanım | VRAM İhtiyacı | Güçlü Yönleri |
| :--- | :--- | :--- | :--- |
| **FLUX.1 [dev]** | Ana Konsept Sanatı & İllüstrasyon | ~16-20 GB | Kusursuz anatomi, zengin doku, doğal ışık ve sıfır bozulma |
| **SDXL (Juggernaut XL / RealVisXL)** | Çizgi & Çizim Kılavuzları | ~8-12 GB | ControlNet Lineart/Anyline ile mükemmel uyum |
| **ControlNet Anyline / Lineart XL** | Temiz Çizgi Çıkarma (Lineart) | ~4 GB | Renkli resimden kusursuz çini mürekkebi kontur üretimi |
| **BiRefNet (Rembg)** | Beyaz Kağıt Arka Plan Ayrıştırma | ~2 GB | Saç, tüy, pul ve kanat uçlarında kayıpsız alfa dekupe |

---

## 2. RTX 4090 Makinesinde ComfyUI Kurulumu

### Adım 1: ComfyUI ve Gerekli Eklentileri Kurun
RTX 4090 makinesinde terminali (PowerShell) açın:
```powershell
# ComfyUI dizinine gidin
cd C:\ComfyUI_windows_portable\ComfyUI\custom_nodes

# 1. ControlNet ve Çizgi Ön İşleyicileri (Anyline, Lineart, M-LSD)
git clone https://github.com/Fannovel16/comfyui_controlnet_aux.git

# 2. BiRefNet (Ultra Kaliteli Arka Plan Silme / Beyazlatma)
git clone https://github.com/ZHO-ZHO-ZHO/ComfyUI-BiRefNet-ZHO.git

# 3. ComfyUI Manager (Kolay model ve node yönetimi)
git clone https://github.com/ltdrdata/ComfyUI-Manager.git
```

### Adım 2: Gerekli Modelleri İndirin ve Dizinlere Yerleştirin
- **Checkpoint**: `FLUX.1-dev.safetensors` veya `sd_xl_base_1.0.safetensors` ➔ `ComfyUI/models/checkpoints/`
- **ControlNet**: `controlnet-anyline.safetensors` ➔ `ComfyUI/models/controlnet/`
- **BiRefNet**: `BiRefNet-general-epoch_244.pth` ➔ `ComfyUI/models/BiRefNet/`

---

## 3. Güvenli Yerel Ağ (LAN) Erişimi

RTX 4090 makinesindeki ComfyUI'ın, geliştirme bilgisayarı tarafından API üzerinden tetiklenebilmesi için:

### 1. ComfyUI'ı Yerel Ağa Açarak Başlatın:
RTX 4090 makinesinde başlatma komutuna `--listen 0.0.0.0` ekleyin:
```powershell
.\python_embeded\python.exe .\ComfyUI\main.py --listen 0.0.0.0 --port 8188 --highvram
```
> [!NOTE]
> Bu ayar yalnızca **aynı ev/ofis yerel ağı (LAN)** içindeki cihazlara erişim verir. Dış internete port açılmadığı sürece tamamen güvenlidir.

### 2. Windows Güvenlik Duvarı İzni:
RTX 4090 makinesinde yönetici PowerShell'de bir kez çalıştırın:
```powershell
New-NetFirewallRule -DisplayName "ComfyUI LAN Port 8188" -Direction Inbound -LocalPort 8188 -Protocol TCP -Action Allow
```

### 3. RTX 4090 Makinesinin Yerel IP Adresini Öğrenin:
RTX 4090 makinesinde:
```powershell
ipconfig
```
*(Örneğin: `192.168.1.50`)*

---

## 4. Geliştirme Makinesinden Otomatik Senkronizasyon

Geliştirme bilgisayarında (bu makinede) `pipeline/sync_from_rtx4090.py` scripti ile RTX 4090'daki ComfyUI'a tek komutla bağlanabilirsiniz:

```powershell
python pipeline/sync_from_rtx4090.py --host 192.168.1.50:8188 --lesson ates_ejderhasi
```

Bu komut:
1. RTX 4090 üzerinde **Master Concept Art** üretir.
2. Üretilen eseri **Anyline ControlNet** ile saf çizgiye (Lineart) çevirir.
3. Arka planı stüdyo beyazına çeker.
4. Çıkan yüksek çözünürlüklü görselleri doğrudan web projesinin `assets/images/` klasörüne aktarır.

---

## 5. Hazır Workflow Dosyaları (`pipeline/workflows/`)

1. `1_master_artwork_generation_flux_sdxl.json` — Profesyonel fantezi yaratık ve araç illüstrasyon üretimi.
2. `2_controlnet_lineart_extraction.json` — Çizgi ve kontur çıkarma iş akışı.
3. `3_birefnet_white_background_cleanup.json` — Arka plan temizleme ve kağıt kontrast optimizasyonu.
