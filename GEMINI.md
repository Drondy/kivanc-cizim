# Kıvanç'ın Çizim Atölyesi — Çalışma Alanı Kuralları

Bu depo, 6 yaşındaki çocuklar için **tablete bakıp gerçek kağıda çizim yapmayı öğreten** statik web uygulamasıdır ([index.html](./index.html), [app.js](./app.js), [style.css](./style.css), [drawings.js](./drawings.js), [config.js](./config.js)).

- **Canlı Yayın:** `https://drondy.github.io/kivanc-cizim/` (`origin/master` → `https://github.com/Drondy/kivanc-cizim.git`)
- **Yerel Sunucu:** `ipad_icin_baslat.py` / `ipad_icin_baslat.bat` (`config.js` içindeki `SERVER_IP` / `SERVER_PORT` ayarını kullanır)
- **Windows Terminal & Git:**
  - `git` PATH'te olmayabilir; gerekirse `& "C:\Program Files\Git\cmd\git.exe"` yolunu kullan.
  - PowerShell 5.x'te `&&` yerine `;` kullan; çok satırlı karmaşık stringleri inline `-c` yerine `scripts/.tmp/` dosyası olarak çalıştır.

## Çizim & SVG Standartları

1. **Seviye ve Dil:** Tüm metinler, adım başlıkları, `instruction`, `voice`, `welcomeText` 6 yaşındaki Kıvanç için sıcak, sade ve teşvik edici Türkçe ile yazılır (`level: 1`, `levelName: "Çırak"`, `levelBadge: "🟢 Çırak"`).
2. **Sıfır Mavi Kılavuz:** Final adımı hariç hiçbir adımda `#3b82f6` geçici kılavuz çizgisi kullanma. Her adım kağıda kalıcı çizilen net `#0f172a` siyah konturlardan oluşmalıdır.
3. **Artımlı Adım Şeması (Kritik):**
   - [app.js](./app.js) içindeki `renderCurrentStep()`, `steps[0..currentStep-1]` içindeki SVG parçalarını `#layer-previous` altında üst üste biriktirir ve `steps[currentStep]` parçasını `#layer-current` içinde kalem animasyonuyla çizer.
   - Bu yüzden `1..(N-1)` adımlarının `svg` alanı `<svg ...>` etiketi **Olmadan** yalnızca o adımda yeni eklenen **artımlı SVG elemanlarını** içermelidir (`viewBox="0 0 600 600"`, merkez `(300, 300)`).
   - Son adım (`N. Adım`) ve `previewSvg` alanı birbiriyle birebir aynı canlı renkli/gradyanlı iç SVG parçası olmalıdır.
   - `<linearGradient>` / `<radialGradient>` `id` değerleri tüm [drawings.js](./drawings.js) içinde benzersiz olmalıdır.
   - Uzuv (kol/bacak/kuyruk) gibi `fill="none"` kalın çizgilerde siyah dış konturu (`#0f172a`) **önce**, daha ince renkli iç dolgu çizgisini **sonra** çiz (aksi halde uzuv tamamen siyah görünür).
4. **Renk Çipi Şeması:** Yeni eklenen tüm çizimlerde `colors` dizisi `[{"name": "Renk Adı", "hex": "#rrggbb"}]` formatında olmalıdır ([app.js](./app.js) renk çiplerini `col.name` ve `col.hex` ile oluşturur).

## Türkçe Seslendirme (MP3)

- Yapay tarayıcı TTS'i yerine `edge-tts` Python paketi ve **`tr-TR-EmelNeural`** sesi (`rate="+0%"`, `pitch="+0Hz"`) kullanılır.
- Her çizim için `audio/voices/<drawing_id>/welcome.mp3` ve `step_1.mp3` .. `step_<N>.mp3` dosyaları üretilir.

## Ekleme, Önizleme ve Doğrulama Akışı

- Yeni çizim eklerken `.agents/skills/kivanc-cizim-ekleme/SKILL.md` yönergelerini ve `scripts/` araçlarını kullan:
  1. `scripts/render_preview.py` ile kümülatif siyah kontur + renkli final SVG'yi headless Chrome PNG olarak üret ve `read_file` ile görsel doğrula (headless Chrome için `--headless=new --disable-gpu --no-sandbox --user-data-dir=<tempdir>` gereklidir).
  2. `scripts/add_drawings_tool.py` ile çizimleri doğrula, 285/190 vb. MP3'leri paralel üret ve [drawings.js](./drawings.js) içine ekle.
  3. [index.html](./index.html) içindeki `?v=...` önbellek kırıcı (cache buster) sürümünü artır.
  4. `node -c drawings.js; node -c app.js; node scripts/audit_catalog.js` çalıştırıp sıfır hata (`missingAudio: 0`, `blueGuides: 0`) görmeden commit/push yapma.
