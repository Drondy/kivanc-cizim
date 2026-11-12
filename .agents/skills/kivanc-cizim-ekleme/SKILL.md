---
name: kivanc-cizim-ekleme
description: >-
  Use when adding new step-by-step drawings, updating Sonic/other categories, generating tr-TR-EmelNeural voiceovers, visually verifying SVGs, or auditing Kivanc Cizim Atolyesi.
---

# Kıvanç'ın Çizim Atölyesi — Çizim Ekleme & Doğrulama Rehberi

Yeni çizimler eklerken, sesleri üretirken ve GitHub Pages'e yayınlarken bu sırayı izle.

## 1. Veri Modülü Hazırla

`scripts/.tmp/batch_yeni.py` (veya benzeri geçici bir Python dosyası) içinde `DRAWINGS = [...]` listesi oluştur. Her öğe şu şemaya uymalıdır:

- `id`: Benzersiz slug (ör. `"cirak_sonic_yeni_karakter"`)
- `categoryId`: `"sonic"`, `"dinozorlar"`, `"hayvanlar"`, `"arabalar"`, `"deniz"`, `"uzay"` veya `"kahramanlar"`
- `name`, `emoji`, `level` (`1`), `levelName` (`"Çırak"`), `levelBadge` (`"🟢 Çırak"`), `description`, `materials`, `welcomeText`
- `colors`: `[{"name": "Sonic Mavisi", "hex": "#2563eb"}, ...]`
- `steps`: Önerilen 18 adım (`1..17` adım yalnızca yeni eklenen `#0f172a` artımlı konturlar, `18`. adım canlı renkli/gradyanlı final). Hiçbir adımda `<svg>` kök etiketi veya `#3b82f6` mavi kılavuz bulunmaz.

> Referans örnekler için [scripts/history/sonic_15_p3.py](../../../scripts/history/sonic_15_p3.py) dosyasına bakabilirsin.

## 2. Headless Chrome ile Görsel Önizleme Al

Çizimleri `drawings.js` içine yazmadan önce adım birikimini ve renkli finali PNG olarak kontrol et:

```powershell
python scripts/render_preview.py --batch scripts/.tmp/batch_yeni.py
```

Çıktı `scripts/.tmp/preview_batch.png` dosyasına kaydedilir. `read_file` ile görseli açıp kulak, yüz, uzuv kontur sırası (siyah önce, renk sonra), oran ve çakışma kontrollerini yap.

## 3. Sesleri Üret ve `drawings.js` Dosyasını Güncelle

Görsel onaylandıktan sonra:

```powershell
python scripts/add_drawings_tool.py --batch scripts/.tmp/batch_yeni.py --check-only
python scripts/add_drawings_tool.py --batch scripts/.tmp/batch_yeni.py
```

Bu araç:
- Şemayı, benzersiz ID'leri ve `<linearGradient>` çakışmalarını denetler.
- `edge-tts` (`tr-TR-EmelNeural`, `asyncio.Semaphore(6)`) ile tüm `welcome.mp3` ve `step_*.mp3` dosyalarını `audio/voices/<id>/` altına üretir.
- `drawings.js` içindeki `CATEGORIES_DATA` (`all` ve ilgili kategori `count`) değerlerini güncelleyip yeni çizimleri `DRAWINGS_DATA` sonuna ekler.

## 4. Önbellek Kırıcı (Cache Buster) & Bütünlük Denetimi

1. `index.html` içindeki `?v=YYYYMMDD_N` sorgu eklerini (`style.css`, `config.js`, `drawings.js`, `app.js`) bir artır.
2. İstersen `README.md` içindeki toplam çizim sayısını güncelle.
3. Sözdizimi ve bütünlük testlerini çalıştır:

```powershell
node -c drawings.js; node -c app.js; node scripts/audit_catalog.js
```

Tüm sayaçların tuttuğunu, `missingAudio === 0` ve `blueGuides === 0` olduğunu doğrula.

## 5. Git Commit & Push

```powershell
& "C:\Program Files\Git\cmd\git.exe" status --short
& "C:\Program Files\Git\cmd\git.exe" add -A; & "C:\Program Files\Git\cmd\git.exe" commit -m "Yeni cizimler eklendi"; & "C:\Program Files\Git\cmd\git.exe" push origin master
```
