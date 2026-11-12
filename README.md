# 🎨 Kıvanç'ın Çizim Atölyesi

6 yaşındaki çocuklar için özel olarak tasarlanmış, **tablete bakıp gerçek kağıda çizim yapmayı öğreten** interaktif adım adım çizim asistanı.

---

## 🚀 Nasıl Başlatılır?

### 1. Yol (En Kolayı - Çift Tıkla):
Klasördeki **`ipad_icin_baslat.bat`** dosyasına çift tıklayın.
- Otomatik olarak yerel sunucuyu açar.
- Bilgisayarınızda ve iPad'de kullanabileceğiniz bağlantıyı ekrana getirir.

### 2. Yol (Doğrudan Tarayıcıda):
**`index.html`** dosyasına çift tıklayarak bilgisayarınızda anında çalıştırabilirsiniz.

---

## 📱 iPad'de Nasıl Kullanılır?

1. Bilgisayarınız ve iPad'iniz **aynı ev Wi-Fi ağına** bağlı olsun.
2. `ipad_icin_baslat.bat` çalıştıktan sonra iPad'deki **Safari** tarayıcısını açın.
3. Adres çubuğuna şunu yazın (veya ekrandaki QR kodu iPad kamerasıyla taratın):
   ```
   http://192.168.1.6:8080
   ```
4. **Tam Ekran Gerçek iPad Uygulaması Yapmak İçin (Çok Önemli İpucu):**
   - Safari'deki **Paylaş (Share)** simgesine dokunun (kare içinden yukarı ok çıkan simge).
   - Menüden **"Ana Ekrana Ekle" (Add to Home Screen)** seçeneğini seçin.
   - Artık iPad'in masaüstünde bir uygulama ikonu olacak ve açtığınızda adres çubuğu olmadan tam ekran çalışacaktır!

---

## ✨ Özellikler

- **56 Farklı Zengin Çizim (🟢 Çırak Seviyesi):**
  - 💨 **Kirpi Sonic Dünyası (38 çizim):** Sonic, Tails, Knuckles, Amy, Shadow, Super Sonic, Hyper Sonic, Robotnik Eggman, Espio, Vector, Charmy, Jet, Tikal, Werehog, Nine, Motobug, Buzz Bomber, Ölüm Yumurtası Robotu, Green Hill ve daha fazlası
  - 🐲 **Dinozorlar & Ejderhalar (3 çizim)**
  - 🦊 **Vahşi & Sevimli Hayvanlar (3 çizim)**
  - 🏎️ **Süper Arabalar & Taşıtlar (3 çizim)**
  - 🐬 **Derin Deniz Canlıları (3 çizim)**
  - 🚀 **Uzay Gemileri & Roketler (3 çizim)**
  - 🥷 **Anime & Süper Kahramanlar (3 çizim)**
- **Tamamlanan Çizim İşaretlemesi:** Bitirilen kartlar `localStorage` üzerinden kurdele ve rozetlerle işaretlenir.
- **Sıfır Mavi Kılavuz & Akıllı Kalem Animasyonu:** Her adım kağıda doğrudan çizilebilen kalıcı siyah konturlar gösterir ve kalem ucunu takip ettirir.
- **Kıvanç İçin Dev Kontrol Butonları:**
  - 🟢 **Çizdim! Sıradaki Adım** (Büyük yeşil buton)
  - 🔄 **Tekrar Çiz** (Anlamadıysa adımı baştan yavaşça gösterir)
  - ⏮️ **Bir Geri** (Önceki adıma döner)
- **⏱️ Otomatik Sayaç Modu (Eller Kağıttayken):**
  - İsterse 15 saniyelik sayaç açılır; Kıvanç tablete hiç dokunmadan çizdikçe sistem kendisi sıradaki adıma geçer.
- **🗣️ Stüdyo Kalitesinde Doğal Türkçe Seslendirme:**
  - Tüm karşılama ve adım anlatımları `tr-TR-EmelNeural` insan sesi (MP3) olarak doğrudan oynatılır (*"Şimdi kağıdın ortasına kocaman bir daire çizelim!"*).
- **🖍️ Boya Kalemi Rehberi & Bitiş Kutlaması:**
  - Kullanılacak boya kalemlerini gösterir; çizim bitince konfetiler eşliğinde canlı renkli boyama aşamasını açar.

---

## 🛠️ Geliştirici & Antigravity Çalışma Düzeni

- **Kural & Skill:** [GEMINI.md](./GEMINI.md) ve [.agents/skills/kivanc-cizim-ekleme/SKILL.md](./.agents/skills/kivanc-cizim-ekleme/SKILL.md)
- **Yeni Çizim Önizleme:** `python scripts/render_preview.py --batch <dosya.py>` (veya mevcut katalogdan `--from-catalog --category sonic --last 6`)
- **Çizim & Ses Ekleme:** `python scripts/add_drawings_tool.py --batch <dosya.py>`
- **Tam Katalog Denetimi:** `node scripts/audit_catalog.js`
