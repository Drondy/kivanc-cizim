// ============================================================================
// KIVANÇ ÇİZİM ATÖLYESİ — PROFESSIONAL DRAWING ACADEMY
// 🟢 ÇIRAK SEVİYESİ (LEVEL 1) — DOĞAL İNSAN SESLİ MİKRO ADIM ÇİZİM SİSTEMİ
//
// Standartlar:
// - Sıfır Mavi Kılavuz: Her adım kalıcı, net ve organik siyah kontur çizgilerinden oluşur.
// - Doğal İnsan Sesi: Her adım için stüdyo kalitesinde gerçekçi Türkçe seslendirme (MP3).
// - viewBox: 0 0 600 600 (cx=300, cy=300 merkezli dengeli kompozisyon)
// - Canlı lineer gradyanlar, ışık/gölge katmanları, çift yansımalı parlak gözler
// ============================================================================

const CATEGORIES_DATA = [
  {
    "id": "all",
    "name": "Tüm Dünyalar",
    "emoji": "🎨",
    "count": 12
  },
  {
    "id": "dinozorlar",
    "name": "Dinozorlar & Ejderhalar",
    "emoji": "🐲",
    "count": 1,
    "desc": "Ateş püskürten ejderhalar ve dev dinozorlar"
  },
  {
    "id": "hayvanlar",
    "name": "Vahşi & Sevimli Hayvanlar",
    "emoji": "🦊",
    "count": 1,
    "desc": "Ormanın ve doğanın en sevimli dostları"
  },
  {
    "id": "arabalar",
    "name": "Süper Arabalar & Taşıtlar",
    "emoji": "🏎️",
    "count": 1,
    "desc": "Hızlı yarış arabaları ve güçlü makineler"
  },
  {
    "id": "deniz",
    "name": "Derin Deniz Canlıları",
    "emoji": "🐬",
    "count": 1,
    "desc": "Okyanusun derinliklerindeki sihirli canlılar"
  },
  {
    "id": "uzay",
    "name": "Uzay Gemileri & Roketler",
    "emoji": "🚀",
    "count": 1,
    "desc": "Yıldızlara ve gezegenlere uçan roketler"
  },
  {
    "id": "kahramanlar",
    "name": "Anime & Süper Kahramanlar",
    "emoji": "🥷",
    "count": 1,
    "desc": "Cesur ninjalar ve süper kahramanlar"
  }
];

const DRAWINGS_DATA = [
  {
    "id": "cirak_ates_ejderhasi",
    "categoryId": "dinozorlar",
    "name": "Sevimli Ateş Ejderhası",
    "emoji": "🐲",
    "level": 1,
    "levelName": "Çırak (Seviye 1)",
    "levelBadge": "🟢 Çırak",
    "description": "Kıvrık altın boynuzlu, büyük parlak gözlü ve kaya kaidesinde oturan kırmızı Ateş Ejderhası.",
    "materials": "1 Adet Kağıt, Kurşun Kalem ve Kırmızı, Turuncu, Sarı, Gri Boya Kalemleri",
    "welcomeText": "Sevimli Ateş Ejderhası çizmeye hazır mısın Kıvanç? Kağıdını ve boya kalemlerini hazırla, birlikte çizelim!",
    "colors": [
      {
        "name": "Ateş Kırmızısı",
        "hex": "#ef4444"
      },
      {
        "name": "Kanat Turuncusu",
        "hex": "#f97316"
      },
      {
        "name": "Altın Sarısı",
        "hex": "#facc15"
      },
      {
        "name": "Kaya Grisi",
        "hex": "#64748b"
      }
    ],
    "previewSvg": "\n      <defs>\n        <linearGradient id=\"fireDrgBody\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#ff6b4a\"/>\n          <stop offset=\"60%\" stop-color=\"#ef4444\"/>\n          <stop offset=\"100%\" stop-color=\"#991b1b\"/>\n        </linearGradient>\n        <linearGradient id=\"fireDrgBelly\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#fef08a\"/>\n          <stop offset=\"100%\" stop-color=\"#f59e0b\"/>\n        </linearGradient>\n        <linearGradient id=\"fireDrgWing\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#fde047\"/>\n          <stop offset=\"60%\" stop-color=\"#f97316\"/>\n          <stop offset=\"100%\" stop-color=\"#ea580c\"/>\n        </linearGradient>\n        <linearGradient id=\"fireDrgRock\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#94a3b8\"/>\n          <stop offset=\"100%\" stop-color=\"#334155\"/>\n        </linearGradient>\n        <linearGradient id=\"fireDrgHorn\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#fef08a\"/>\n          <stop offset=\"100%\" stop-color=\"#d97706\"/>\n        </linearGradient>\n      </defs>\n      <path d=\"M 110 515 C 160 475, 440 475, 490 515 C 450 550, 150 550, 110 515 Z\" fill=\"url(#fireDrgRock)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n      <path d=\"M 280 285 C 220 180, 120 170, 65 240 C 105 260, 130 290, 120 340 C 165 315, 205 325, 225 360 C 250 335, 275 335, 295 345 Z\" fill=\"url(#fireDrgWing)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n      <path d=\"M 195 220 L 120 340 M 235 245 L 225 360\" stroke=\"#b91c1c\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 230 450 C 130 470, 85 410, 115 355 C 125 385, 160 415, 220 410 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n      <polygon points=\"115,355 90,360 115,325 140,355\" fill=\"#f97316\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linejoin=\"round\"/>\n      <path d=\"M 285 240 C 235 285, 215 380, 240 480 L 385 480 C 405 390, 395 295, 355 240 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n      <path d=\"M 325 245 C 300 310, 300 395, 320 480 L 375 480 C 390 395, 385 310, 355 245 Z\" fill=\"url(#fireDrgBelly)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <line x1=\"308\" y1=\"295\" x2=\"380\" y2=\"295\" stroke=\"#ca8a04\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <line x1=\"305\" y1=\"340\" x2=\"385\" y2=\"340\" stroke=\"#ca8a04\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <line x1=\"306\" y1=\"385\" x2=\"384\" y2=\"385\" stroke=\"#ca8a04\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <line x1=\"310\" y1=\"430\" x2=\"380\" y2=\"430\" stroke=\"#ca8a04\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <path d=\"M 230 380 C 185 400, 190 470, 245 490 L 295 490 C 295 455, 270 400, 230 380 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n      <path d=\"M 290 335 L 285 490 L 335 490 L 335 345 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n      <path d=\"M 365 335 L 370 490 L 415 490 L 405 340 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n      <circle cx=\"295\" cy=\"490\" r=\"7\" fill=\"#fde047\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <circle cx=\"312\" cy=\"490\" r=\"7\" fill=\"#fde047\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <circle cx=\"380\" cy=\"490\" r=\"7\" fill=\"#fde047\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <circle cx=\"398\" cy=\"490\" r=\"7\" fill=\"#fde047\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <path d=\"M 265 175 C 265 105, 395 105, 415 170 C 455 180, 455 230, 410 240 C 395 265, 330 265, 295 240 C 265 225, 265 195, 265 175 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n      <path d=\"M 295 135 C 255 115, 245 75, 265 60 C 280 80, 295 100, 320 120 Z\" fill=\"url(#fireDrgHorn)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <path d=\"M 335 120 C 315 95, 315 65, 330 50 C 345 70, 355 90, 365 120 Z\" fill=\"url(#fireDrgHorn)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <ellipse cx=\"355\" cy=\"175\" rx=\"22\" ry=\"26\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n      <circle cx=\"362\" cy=\"177\" r=\"12\" fill=\"#0f172a\"/>\n      <circle cx=\"355\" cy=\"168\" r=\"6\" fill=\"#ffffff\"/>\n      <circle cx=\"367\" cy=\"183\" r=\"3\" fill=\"#ffffff\"/>\n      <path d=\"M 335 142 Q 355 132, 375 142\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n      <circle cx=\"426\" cy=\"185\" r=\"4\" fill=\"#0f172a\"/>\n      <path d=\"M 365 215 C 385 235, 420 235, 430 215 C 425 245, 385 250, 365 215 Z\" fill=\"#991b1b\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n      <polygon points=\"380,222 386,232 392,223\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <polygon points=\"410,222 415,231 420,222\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n",
    "steps": [
      {
        "title": "1. Adım: Yuvarlak Alın ve Baş Tepesi",
        "instruction": "Kağıdın üst kısmına ejderhanın yuvarlak alnını ve baş tepesini çiz.",
        "voice": "Kağıdımızın üst tarafına ejderhanın yuvarlak alnını ve baş tepesini çizelim.",
        "svg": "<path d=\"M 265 175 C 265 105, 395 105, 415 170\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_1.mp3"
      },
      {
        "title": "2. Adım: Tombul Burun ve Çene Kavisi",
        "instruction": "Alından öne doğru uzanan sevimli burun çıkıntısını ve alt çeneyi çiz.",
        "voice": "Alından öne doğru uzanan tatlı burun çıkıntısını ve alt çene kıvrımını yapalım.",
        "svg": "<path d=\"M 415 170 C 455 180, 455 230, 410 240 C 395 265, 330 265, 295 240 C 265 225, 265 195, 265 175\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_2.mp3"
      },
      {
        "title": "3. Adım: Minik Burun Deliği",
        "instruction": "Burnun hemen ucuna küçük bir burun deliği noktası koy.",
        "voice": "Burnun hemen ucuna minik bir burun deliği noktası koyalım.",
        "svg": "<circle cx=\"426\" cy=\"185\" r=\"4\" fill=\"#0f172a\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_3.mp3"
      },
      {
        "title": "4. Adım: Neşeyle Gülümseyen Ağız",
        "instruction": "Burnun altına yukarı kıvrılan mutlu bir gülümseme çizgisi ekle.",
        "voice": "Burnun altına ejderhamızın mutlu bir şekilde gülümsediği ağız çizgisini yapalım.",
        "svg": "<path d=\"M 365 215 C 385 235, 420 235, 430 215\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_4.mp3"
      },
      {
        "title": "5. Adım: İki Minik Sivri Diş",
        "instruction": "Gülümseyen ağzın içinden sarkan iki küçük sevimli diş çiz.",
        "voice": "Gülümseyen ağzın içinden sarkan iki küçük sevimli diş ekleyelim.",
        "svg": "<polygon points=\"380,222 386,232 392,223\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/><polygon points=\"410,222 415,231 420,222\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_5.mp3"
      },
      {
        "title": "6. Adım: Büyük Parlak Göz Çerçevesi",
        "instruction": "Yüzün ortasına dik duran büyük oval bir göz çerçevesi çiz.",
        "voice": "Yüzün tam ortasına kocaman, tatlı bir göz çerçevesi çizelim.",
        "svg": "<ellipse cx=\"355\" cy=\"175\" rx=\"22\" ry=\"26\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"8\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_6.mp3"
      },
      {
        "title": "7. Adım: Gözbebeği ve Parlayan İki Işık",
        "instruction": "Gözün içine siyah gözbebeği ve parlayan iki beyaz ışık noktası yap.",
        "voice": "Gözün içine siyah gözbebeğini ve parlayan iki beyaz ışık dairesini çizelim.",
        "svg": "<circle cx=\"362\" cy=\"177\" r=\"12\" fill=\"#0f172a\"/><circle cx=\"355\" cy=\"168\" r=\"6\" fill=\"#ffffff\"/><circle cx=\"367\" cy=\"183\" r=\"3\" fill=\"#ffffff\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_7.mp3"
      },
      {
        "title": "8. Adım: Sevimli Kaş Çizgisi",
        "instruction": "Gözün hemen üstüne neşeli bir kaş kıvrımı ekle.",
        "voice": "Gözün hemen üstüne neşeli bir kaş çizgisi çizelim.",
        "svg": "<path d=\"M 335 142 Q 355 132, 375 142\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_8.mp3"
      },
      {
        "title": "9. Adım: Sol Sivri Boynuz",
        "instruction": "Başın arkasından yukarı kıvrılan birinci sivri boynuzu çiz.",
        "voice": "Başın arkasından yukarı kıvrılan birinci altın boynuzumuzu çizelim.",
        "svg": "<path d=\"M 295 135 C 255 115, 245 75, 265 60 C 280 80, 295 100, 320 120 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_9.mp3"
      },
      {
        "title": "10. Adım: Sağ Sivri Boynuz",
        "instruction": "İlk boynuzun hemen yanına ikinci sivri boynuzu ekle.",
        "voice": "Şimdi yanına ikinci sivri boynuzumuzu ekleyelim.",
        "svg": "<path d=\"M 335 120 C 315 95, 315 65, 330 50 C 345 70, 355 90, 365 120 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_10.mp3"
      },
      {
        "title": "11. Adım: Yanak Yelesi Zikzakları",
        "instruction": "Yanağın sol arkasına üçlü zikzak şeklinde sevimli yele tüyleri çiz.",
        "voice": "Yanağın arkasına zikzak şeklinde tatlı bir ejderha yelesi ekleyelim.",
        "svg": "<path d=\"M 265 175 L 240 190 L 268 202 L 245 215 L 275 225\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_11.mp3"
      },
      {
        "title": "12. Adım: Boyun ve Göğüs Çizgisi",
        "instruction": "Çenenin altından göğse doğru inen yumuşak çizgiyi çiz.",
        "voice": "Çenenin altından gövdeye doğru inen boyun ve göğüs çizgisini yapalım.",
        "svg": "<path d=\"M 285 240 C 255 270, 240 320, 235 375\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_12.mp3"
      },
      {
        "title": "13. Adım: Sol Ön Bacak",
        "instruction": "Göğsün altından aşağıya, yere dik basan birinci ön bacağı çiz.",
        "voice": "Şimdi yere sağlam basan sol ön bacağımızı çizelim.",
        "svg": "<path d=\"M 290 335 L 285 490 L 335 490 L 335 345\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_13.mp3"
      },
      {
        "title": "14. Adım: Sağ Ön Bacak",
        "instruction": "Yanındaki ikinci ön bacağı da aynı şekilde yere basacak gibi çiz.",
        "voice": "Şimdi yanındaki ikinci ön bacağı çizelim.",
        "svg": "<path d=\"M 365 335 L 370 490 L 415 490 L 405 340\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_14.mp3"
      },
      {
        "title": "15. Adım: Ön Bacak Pençe Tırnakları",
        "instruction": "Ön ayakların ucuna ikişer adet minik yuvarlak pençe tırnağı ekle.",
        "voice": "Ön ayakların ucuna ikişer tane minik pençe tırnağı konduralım.",
        "svg": "<circle cx=\"295\" cy=\"490\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/><circle cx=\"312\" cy=\"490\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/><circle cx=\"380\" cy=\"490\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/><circle cx=\"398\" cy=\"490\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_15.mp3"
      },
      {
        "title": "16. Adım: Sırt Çizgisi ve Oturan Arka Bacak",
        "instruction": "Sağdan aşağı inen sırt kavisini ve sol altta oturan tombul arka bacağı çiz.",
        "voice": "Şimdi sırttan aşağı inen kavisli çizgiyi ve oturan tombul arka bacağımızı yapalım.",
        "svg": "<path d=\"M 355 240 C 395 295, 405 390, 385 480\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/><path d=\"M 230 380 C 185 400, 190 470, 245 490 L 285 490\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_16.mp3"
      },
      {
        "title": "17. Adım: Kıvrık Kuyruk ve Sivri Ok Ucu",
        "instruction": "Arkaya doğru kıvrılan kuyruğu çiz ve ucuna sivri ok ucu ekle.",
        "voice": "Arkaya kıvrılan kuyruğumuzu ve ucundaki sivri ok ucunu çizelim.",
        "svg": "<path d=\"M 230 450 C 130 470, 85 410, 115 355 C 125 385, 160 415, 220 410 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\"/><polygon points=\"115,355 90,360 115,325 140,355\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_17.mp3"
      },
      {
        "title": "18. Adım: Açılan Ateş Kanadı ve Kemikleri",
        "instruction": "Sırttan yukarıya büyük kanadı aç ve iç kemik çizgilerini birleştir.",
        "voice": "Sırttan göğe yükselen büyük ejderha kanadını ve iç kemik çizgilerini çizelim.",
        "svg": "<path d=\"M 280 285 C 220 180, 120 170, 65 240 C 105 260, 130 290, 120 340 C 165 315, 205 325, 225 360 C 250 335, 275 335, 295 345 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/><path d=\"M 195 220 L 120 340 M 235 245 L 225 360\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_18.mp3"
      },
      {
        "title": "19. Adım: Karın Zırhı Çizgileri ve Kaya Kaidesi",
        "instruction": "Göğse koruma çizgilerini ve ejderhanın oturduğu kayayı çiz.",
        "voice": "Gövdeye koruyucu karın çizgilerini ve ejderhanın oturduğu sağlam kaya kaidesini çizelim.",
        "svg": "<path d=\"M 325 245 C 300 310, 300 395, 320 480 L 375 480 C 390 395, 385 310, 355 245 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\"/><line x1=\"308\" y1=\"295\" x2=\"380\" y2=\"295\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"305\" y1=\"340\" x2=\"385\" y2=\"340\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"306\" y1=\"385\" x2=\"384\" y2=\"385\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"430\" x2=\"380\" y2=\"430\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\"/><path d=\"M 110 515 C 160 475, 440 475, 490 515 C 450 550, 150 550, 110 515 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_19.mp3"
      },
      {
        "title": "20. Adım: Canlı Renklendirme ve Işık-Gölge",
        "instruction": "Tebrikler Kıvanç! Ejderhanı en sevdiğin kırmızı ve turuncu boyalarınla canlandır!",
        "voice": "Harikasın Kıvanç! Çizimin mükemmel oldu. Şimdi ejderhanı en sevdiğin kırmızı ve turuncu boyalarınla renklendir!",
        "svg": "\n          <defs>\n            <linearGradient id=\"fireDrgBody\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#ff6b4a\"/>\n              <stop offset=\"60%\" stop-color=\"#ef4444\"/>\n              <stop offset=\"100%\" stop-color=\"#991b1b\"/>\n            </linearGradient>\n            <linearGradient id=\"fireDrgBelly\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#fef08a\"/>\n              <stop offset=\"100%\" stop-color=\"#f59e0b\"/>\n            </linearGradient>\n            <linearGradient id=\"fireDrgWing\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#fde047\"/>\n              <stop offset=\"60%\" stop-color=\"#f97316\"/>\n              <stop offset=\"100%\" stop-color=\"#ea580c\"/>\n            </linearGradient>\n            <linearGradient id=\"fireDrgRock\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#94a3b8\"/>\n              <stop offset=\"100%\" stop-color=\"#334155\"/>\n            </linearGradient>\n            <linearGradient id=\"fireDrgHorn\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#fef08a\"/>\n              <stop offset=\"100%\" stop-color=\"#d97706\"/>\n            </linearGradient>\n          </defs>\n          <path d=\"M 110 515 C 160 475, 440 475, 490 515 C 450 550, 150 550, 110 515 Z\" fill=\"url(#fireDrgRock)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n          <path d=\"M 280 285 C 220 180, 120 170, 65 240 C 105 260, 130 290, 120 340 C 165 315, 205 325, 225 360 C 250 335, 275 335, 295 345 Z\" fill=\"url(#fireDrgWing)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n          <path d=\"M 195 220 L 120 340 M 235 245 L 225 360\" stroke=\"#b91c1c\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n          <path d=\"M 230 450 C 130 470, 85 410, 115 355 C 125 385, 160 415, 220 410 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n          <polygon points=\"115,355 90,360 115,325 140,355\" fill=\"#f97316\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linejoin=\"round\"/>\n          <path d=\"M 285 240 C 235 285, 215 380, 240 480 L 385 480 C 405 390, 395 295, 355 240 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n          <path d=\"M 325 245 C 300 310, 300 395, 320 480 L 375 480 C 390 395, 385 310, 355 245 Z\" fill=\"url(#fireDrgBelly)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <line x1=\"308\" y1=\"295\" x2=\"380\" y2=\"295\" stroke=\"#ca8a04\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n          <line x1=\"305\" y1=\"340\" x2=\"385\" y2=\"340\" stroke=\"#ca8a04\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n          <line x1=\"306\" y1=\"385\" x2=\"384\" y2=\"385\" stroke=\"#ca8a04\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n          <line x1=\"310\" y1=\"430\" x2=\"380\" y2=\"430\" stroke=\"#ca8a04\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n          <path d=\"M 230 380 C 185 400, 190 470, 245 490 L 295 490 C 295 455, 270 400, 230 380 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n          <path d=\"M 290 335 L 285 490 L 335 490 L 335 345 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n          <path d=\"M 365 335 L 370 490 L 415 490 L 405 340 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n          <circle cx=\"295\" cy=\"490\" r=\"7\" fill=\"#fde047\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n          <circle cx=\"312\" cy=\"490\" r=\"7\" fill=\"#fde047\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n          <circle cx=\"380\" cy=\"490\" r=\"7\" fill=\"#fde047\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n          <circle cx=\"398\" cy=\"490\" r=\"7\" fill=\"#fde047\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n          <path d=\"M 265 175 C 265 105, 395 105, 415 170 C 455 180, 455 230, 410 240 C 395 265, 330 265, 295 240 C 265 225, 265 195, 265 175 Z\" fill=\"url(#fireDrgBody)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n          <path d=\"M 295 135 C 255 115, 245 75, 265 60 C 280 80, 295 100, 320 120 Z\" fill=\"url(#fireDrgHorn)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <path d=\"M 335 120 C 315 95, 315 65, 330 50 C 345 70, 355 90, 365 120 Z\" fill=\"url(#fireDrgHorn)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <ellipse cx=\"355\" cy=\"175\" rx=\"22\" ry=\"26\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n          <circle cx=\"362\" cy=\"177\" r=\"12\" fill=\"#0f172a\"/>\n          <circle cx=\"355\" cy=\"168\" r=\"6\" fill=\"#ffffff\"/>\n          <circle cx=\"367\" cy=\"183\" r=\"3\" fill=\"#ffffff\"/>\n          <path d=\"M 335 142 Q 355 132, 375 142\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n          <circle cx=\"426\" cy=\"185\" r=\"4\" fill=\"#0f172a\"/>\n          <path d=\"M 365 215 C 385 235, 420 235, 430 215 C 425 245, 385 250, 365 215 Z\" fill=\"#991b1b\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n          <polygon points=\"380,222 386,232 392,223\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n          <polygon points=\"410,222 415,231 420,222\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n",
        "audio": "audio/voices/cirak_ates_ejderhasi/step_20.mp3"
      }
    ],
    "welcomeAudio": "audio/voices/cirak_ates_ejderhasi/welcome.mp3"
  },
  {
    "id": "cirak_kizil_tilki",
    "categoryId": "hayvanlar",
    "name": "Zarif Kızıl Tilki",
    "emoji": "🦊",
    "level": 1,
    "levelName": "Çırak (Seviye 1)",
    "levelBadge": "🟢 Çırak",
    "description": "Kocaman pofuduk kuyruklu, dik kulaklı, siyah çorap patili ve parlak gözlü zarif Kızıl Tilki.",
    "materials": "1 Adet Kağıt, Kurşun Kalem ve Turuncu, Beyaz, Siyah, Yeşil Boya Kalemleri",
    "welcomeText": "Zarif Kızıl Tilki çizmeye hazır mısın Kıvanç? Kağıdını ve boya kalemlerini hazırla, birlikte çizelim!",
    "colors": [
      {
        "name": "Kızıl Turuncu",
        "hex": "#ea580c"
      },
      {
        "name": "Pofuduk Beyaz",
        "hex": "#ffffff"
      },
      {
        "name": "Gece Siyahı",
        "hex": "#0f172a"
      },
      {
        "name": "Çimen Yeşili",
        "hex": "#22c55e"
      }
    ],
    "previewSvg": "\n      <defs>\n        <linearGradient id=\"foxCoat\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#fb923c\"/>\n          <stop offset=\"60%\" stop-color=\"#ea580c\"/>\n          <stop offset=\"100%\" stop-color=\"#c2410c\"/>\n        </linearGradient>\n        <linearGradient id=\"foxWhite\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n          <stop offset=\"100%\" stop-color=\"#e2e8f0\"/>\n        </linearGradient>\n        <linearGradient id=\"foxGrass\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#86efac\"/>\n          <stop offset=\"100%\" stop-color=\"#15803d\"/>\n        </linearGradient>\n      </defs>\n      <ellipse cx=\"300\" cy=\"510\" rx=\"200\" ry=\"25\" fill=\"url(#foxGrass)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <path d=\"M 370 450 C 480 430, 530 330, 480 240 C 430 190, 410 270, 430 320 C 450 370, 410 470, 350 480 Z\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n      <path d=\"M 480 240 C 455 210, 430 200, 415 220 C 420 250, 440 280, 430 320 C 445 300, 470 275, 480 240 Z\" fill=\"url(#foxWhite)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <path d=\"M 245 285 C 220 350, 215 435, 240 495 L 360 495 C 380 435, 375 350, 355 285 Z\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n      <rect x=\"250\" y=\"380\" width=\"38\" height=\"115\" rx=\"16\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n      <rect x=\"312\" y=\"380\" width=\"38\" height=\"115\" rx=\"16\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n      <path d=\"M 250 460 L 250 495 L 288 495 L 288 460 Z\" fill=\"#0f172a\"/>\n      <path d=\"M 312 460 L 312 495 L 350 495 L 350 460 Z\" fill=\"#0f172a\"/>\n      <path d=\"M 260 285 C 275 340, 285 370, 300 395 C 315 370, 325 340, 340 285 Z\" fill=\"url(#foxWhite)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n      <path d=\"M 230 150 L 190 55 L 270 120 Z\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>\n      <path d=\"M 235 140 L 205 75 L 260 118 Z\" fill=\"#0f172a\"/>\n      <path d=\"M 370 150 L 410 55 L 330 120 Z\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>\n      <path d=\"M 365 140 L 395 75 L 340 118 Z\" fill=\"#0f172a\"/>\n      <path d=\"M 205 195 C 205 130, 395 130, 395 195 C 395 260, 345 300, 300 300 C 255 300, 205 260, 205 195 Z\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n      <path d=\"M 205 215 C 245 245, 280 270, 300 295 C 320 270, 355 245, 395 215 C 365 275, 335 300, 300 300 C 265 300, 235 275, 205 215 Z\" fill=\"url(#foxWhite)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <circle cx=\"258\" cy=\"205\" r=\"14\" fill=\"#0f172a\"/>\n      <circle cx=\"254\" cy=\"200\" r=\"5\" fill=\"#ffffff\"/>\n      <circle cx=\"262\" cy=\"208\" r=\"2.5\" fill=\"#ffffff\"/>\n      <circle cx=\"342\" cy=\"205\" r=\"14\" fill=\"#0f172a\"/>\n      <circle cx=\"338\" cy=\"200\" r=\"5\" fill=\"#ffffff\"/>\n      <circle cx=\"346\" cy=\"208\" r=\"2.5\" fill=\"#ffffff\"/>\n      <polygon points=\"288,272 312,272 300,285\" fill=\"#0f172a\" stroke=\"#0f172a\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n      <line x1=\"225\" y1=\"260\" x2=\"180\" y2=\"255\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <line x1=\"225\" y1=\"270\" x2=\"185\" y2=\"275\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <line x1=\"375\" y1=\"260\" x2=\"420\" y2=\"255\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <line x1=\"375\" y1=\"270\" x2=\"415\" y2=\"275\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n",
    "steps": [
      {
        "title": "1. Adım: Alın ve Baş Tepesi Çizgisi",
        "instruction": "Kağıdın üst ortasına tilkinin yuvarlak baş tepesini çiz.",
        "voice": "Kağıdımızın üst ortasına tilkinin yuvarlak baş tepesini çizelim.",
        "svg": "<path d=\"M 205 195 C 205 130, 395 130, 395 195\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_1.mp3"
      },
      {
        "title": "2. Adım: Sivri Çene ve Yanak Hatları",
        "instruction": "İki yandan aşağıya doğru inip ortada birleşen sivri tilki çenesini çiz.",
        "voice": "İki yandan aşağıya inen ve ortada birleşen o sevimli sivri çeneyi yapalım.",
        "svg": "<path d=\"M 395 195 C 395 260, 345 300, 300 300 C 255 300, 205 260, 205 195\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_2.mp3"
      },
      {
        "title": "3. Adım: Siyah Üçgen Burun Ucu",
        "instruction": "Sivri çenenin hemen ucuna küçük ters üçgen şeklinde bir burun yap.",
        "voice": "Çenenin ucuna minik siyah bir ters üçgen burun konduralım.",
        "svg": "<polygon points=\"288,272 312,272 300,285\" fill=\"#0f172a\" stroke=\"#0f172a\" stroke-width=\"3\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_3.mp3"
      },
      {
        "title": "4. Adım: Beyaz Yanak Maskesi Çizgisi",
        "instruction": "Yanakların iki yanından buruna doğru inen tüylü maske çizgisini ekle.",
        "voice": "Yanaklardan buruna doğru inen beyaz maske ayrım çizgisini yapalım.",
        "svg": "<path d=\"M 205 215 C 245 245, 280 270, 300 295 C 320 270, 355 245, 395 215\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_4.mp3"
      },
      {
        "title": "5. Adım: Sol Büyük Tilki Gözü",
        "instruction": "Yüzün sol tarafına büyük yuvarlak bir göz çiz ve içini koyult.",
        "voice": "Sol tarafa iri, parlak bir tilki gözü çizelim.",
        "svg": "<circle cx=\"258\" cy=\"205\" r=\"14\" fill=\"#0f172a\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_5.mp3"
      },
      {
        "title": "6. Adım: Sol Göz Parlayan Işıkları",
        "instruction": "Sol gözün içine biri büyük biri küçük iki beyaz ışık noktası ekle.",
        "voice": "Sol gözün içine parlayan iki tane beyaz ışık noktası koyalım.",
        "svg": "<circle cx=\"254\" cy=\"200\" r=\"5\" fill=\"#ffffff\"/><circle cx=\"262\" cy=\"208\" r=\"2.5\" fill=\"#ffffff\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_6.mp3"
      },
      {
        "title": "7. Adım: Sağ Büyük Tilki Gözü",
        "instruction": "Yüzün sağ tarafına aynı büyüklükte ikinci gözü çiz.",
        "voice": "Şimdi sağ tarafa da aynı güzellikte ikinci gözü yapalım.",
        "svg": "<circle cx=\"342\" cy=\"205\" r=\"14\" fill=\"#0f172a\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_7.mp3"
      },
      {
        "title": "8. Adım: Sağ Göz Parlayan Işıkları",
        "instruction": "Sağ gözün içine de iki beyaz parıldama ışığını ekle.",
        "voice": "Sağ gözün içine de parıldayan iki beyaz ışık noktasını çizelim.",
        "svg": "<circle cx=\"338\" cy=\"200\" r=\"5\" fill=\"#ffffff\"/><circle cx=\"346\" cy=\"208\" r=\"2.5\" fill=\"#ffffff\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_8.mp3"
      },
      {
        "title": "9. Adım: Sol Dik Tilki Kulağı",
        "instruction": "Başın sol üstünden yukarı dimdik uzanan sivri üçgen kulağı çiz.",
        "voice": "Başın sol tepesinden yukarı uzanan sivri üçgen kulağımızı yapalım.",
        "svg": "<path d=\"M 230 150 L 190 55 L 270 120 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_9.mp3"
      },
      {
        "title": "10. Adım: Sol Kulak İçi Siyahlığı",
        "instruction": "Sol kulağın içine koyu iç tüy üçgenini ekle.",
        "voice": "Sol kulağın içine siyah iç üçgenini çizelim.",
        "svg": "<path d=\"M 235 140 L 205 75 L 260 118 Z\" fill=\"#0f172a\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_10.mp3"
      },
      {
        "title": "11. Adım: Sağ Dik Tilki Kulağı",
        "instruction": "Başın sağ üstünden yukarı uzanan ikinci sivri kulağı çiz.",
        "voice": "Şimdi sağ taraftaki ikinci sivri kulağımızı çizelim.",
        "svg": "<path d=\"M 370 150 L 410 55 L 330 120 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_11.mp3"
      },
      {
        "title": "12. Adım: Sağ Kulak İçi Siyahlığı",
        "instruction": "Sağ kulağın içine de koyu iç tüy üçgenini ekle.",
        "voice": "Sağ kulağın içine de koyu üçgenini çizelim.",
        "svg": "<path d=\"M 365 140 L 395 75 L 340 118 Z\" fill=\"#0f172a\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_12.mp3"
      },
      {
        "title": "13. Adım: Beyaz Pofuduk Göğüs Bağı",
        "instruction": "Çenenin altından göğse doğru inen sivri uçlu beyaz tüy bağını çiz.",
        "voice": "Çenenin altından göğse inen pofuduk beyaz tüy çizgisini yapalım.",
        "svg": "<path d=\"M 260 285 C 275 340, 285 370, 300 395 C 315 370, 325 340, 340 285\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_13.mp3"
      },
      {
        "title": "14. Adım: Sol Ön Bacak ve Siyah Çorap Pati",
        "instruction": "Yere dik inen sol bacağı ve ucundaki siyah çorap patiyi çiz.",
        "voice": "Yere dik basan sol bacağı ve ucundaki siyah patiyi yapalım.",
        "svg": "<rect x=\"250\" y=\"380\" width=\"38\" height=\"115\" rx=\"16\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\"/><path d=\"M 250 460 L 250 495 L 288 495 L 288 460 Z\" fill=\"#0f172a\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_14.mp3"
      },
      {
        "title": "15. Adım: Sağ Ön Bacak ve Siyah Çorap Pati",
        "instruction": "Yanındaki sağ ön bacağı ve siyah patiyi de aynı şekilde çiz.",
        "voice": "Sağ ön bacağımızı ve siyah patisini de çizelim.",
        "svg": "<rect x=\"312\" y=\"380\" width=\"38\" height=\"115\" rx=\"16\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\"/><path d=\"M 312 460 L 312 495 L 350 495 L 350 460 Z\" fill=\"#0f172a\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_15.mp3"
      },
      {
        "title": "16. Adım: Gövde Sırtı ve Oturan Duruş",
        "instruction": "Gövdenin sol ve sağ dış hatlarını bacakların arkasından aşağıya birleştir.",
        "voice": "Gövdenin iki yan çizgisini aşağıya doğru birleştirelim.",
        "svg": "<path d=\"M 245 285 C 220 350, 215 435, 240 495\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/><path d=\"M 355 285 C 375 350, 380 435, 360 495\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_16.mp3"
      },
      {
        "title": "17. Adım: Kocaman Pofuduk Kuyruk Ana Hattı",
        "instruction": "Arka taraftan öne doğru dolanan dev tilki kuyruğunu çiz.",
        "voice": "Arka taraftan öne doğru kıvrılan o kocaman pofuduk kuyruğu çizelim.",
        "svg": "<path d=\"M 370 450 C 480 430, 530 330, 480 240 C 430 190, 410 270, 430 320 C 450 370, 410 470, 350 480\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_17.mp3"
      },
      {
        "title": "18. Adım: Kuyruk Ucundaki Beyaz Zikzak Ayrımı",
        "instruction": "Kuyruğun ucuna beyaz tüy ayrımını belirten zikzak kıvrımı çiz.",
        "voice": "Kuyruğun ucundaki sevimli beyaz tüy ayrımını yapalım.",
        "svg": "<path d=\"M 480 240 C 455 210, 430 200, 415 220 C 420 250, 440 280, 430 320\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_18.mp3"
      },
      {
        "title": "19. Adım: Sevimli Bıyıklar ve Çimenlik Zemin",
        "instruction": "Yanaklara ikişer bıyık çizgisi ve tilkinin bastığı yeşil çimenlik zemini çiz.",
        "voice": "Yanaklara bıyıkları ve tilkinin oturduğu çimenlik zemini çizelim.",
        "svg": "<line x1=\"225\" y1=\"260\" x2=\"180\" y2=\"255\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"225\" y1=\"270\" x2=\"185\" y2=\"275\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"375\" y1=\"260\" x2=\"420\" y2=\"255\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"375\" y1=\"270\" x2=\"415\" y2=\"275\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/><ellipse cx=\"300\" cy=\"510\" rx=\"200\" ry=\"25\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\"/>",
        "audio": "audio/voices/cirak_kizil_tilki/step_19.mp3"
      },
      {
        "title": "20. Adım: Canlı Renklendirme ve Kürk Tonları",
        "instruction": "Tebrikler Kıvanç! Tilkini canlı turuncu, beyaz ve yeşil boyalarınla renklendir!",
        "voice": "Tebrikler Kıvanç! Tilkin harika oldu! Şimdi tilkini canlı turuncu kızıl ve pofuduk beyaz boyalarınla boya!",
        "svg": "\n          <defs>\n            <linearGradient id=\"foxCoat\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#fb923c\"/>\n              <stop offset=\"60%\" stop-color=\"#ea580c\"/>\n              <stop offset=\"100%\" stop-color=\"#c2410c\"/>\n            </linearGradient>\n            <linearGradient id=\"foxWhite\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n              <stop offset=\"100%\" stop-color=\"#e2e8f0\"/>\n            </linearGradient>\n            <linearGradient id=\"foxGrass\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#86efac\"/>\n              <stop offset=\"100%\" stop-color=\"#15803d\"/>\n            </linearGradient>\n          </defs>\n          <ellipse cx=\"300\" cy=\"510\" rx=\"200\" ry=\"25\" fill=\"url(#foxGrass)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <path d=\"M 370 450 C 480 430, 530 330, 480 240 C 430 190, 410 270, 430 320 C 450 370, 410 470, 350 480 Z\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n          <path d=\"M 480 240 C 455 210, 430 200, 415 220 C 420 250, 440 280, 430 320 C 445 300, 470 275, 480 240 Z\" fill=\"url(#foxWhite)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <path d=\"M 245 285 C 220 350, 215 435, 240 495 L 360 495 C 380 435, 375 350, 355 285 Z\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n          <rect x=\"250\" y=\"380\" width=\"38\" height=\"115\" rx=\"16\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n          <rect x=\"312\" y=\"380\" width=\"38\" height=\"115\" rx=\"16\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n          <path d=\"M 250 460 L 250 495 L 288 495 L 288 460 Z\" fill=\"#0f172a\"/>\n          <path d=\"M 312 460 L 312 495 L 350 495 L 350 460 Z\" fill=\"#0f172a\"/>\n          <path d=\"M 260 285 C 275 340, 285 370, 300 395 C 315 370, 325 340, 340 285 Z\" fill=\"url(#foxWhite)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n          <path d=\"M 230 150 L 190 55 L 270 120 Z\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>\n          <path d=\"M 235 140 L 205 75 L 260 118 Z\" fill=\"#0f172a\"/>\n          <path d=\"M 370 150 L 410 55 L 330 120 Z\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>\n          <path d=\"M 365 140 L 395 75 L 340 118 Z\" fill=\"#0f172a\"/>\n          <path d=\"M 205 195 C 205 130, 395 130, 395 195 C 395 260, 345 300, 300 300 C 255 300, 205 260, 205 195 Z\" fill=\"url(#foxCoat)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n          <path d=\"M 205 215 C 245 245, 280 270, 300 295 C 320 270, 355 245, 395 215 C 365 275, 335 300, 300 300 C 265 300, 235 275, 205 215 Z\" fill=\"url(#foxWhite)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <circle cx=\"258\" cy=\"205\" r=\"14\" fill=\"#0f172a\"/>\n          <circle cx=\"254\" cy=\"200\" r=\"5\" fill=\"#ffffff\"/>\n          <circle cx=\"262\" cy=\"208\" r=\"2.5\" fill=\"#ffffff\"/>\n          <circle cx=\"342\" cy=\"205\" r=\"14\" fill=\"#0f172a\"/>\n          <circle cx=\"338\" cy=\"200\" r=\"5\" fill=\"#ffffff\"/>\n          <circle cx=\"346\" cy=\"208\" r=\"2.5\" fill=\"#ffffff\"/>\n          <polygon points=\"288,272 312,272 300,285\" fill=\"#0f172a\" stroke=\"#0f172a\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n          <line x1=\"225\" y1=\"260\" x2=\"180\" y2=\"255\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <line x1=\"225\" y1=\"270\" x2=\"185\" y2=\"275\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <line x1=\"375\" y1=\"260\" x2=\"420\" y2=\"255\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <line x1=\"375\" y1=\"270\" x2=\"415\" y2=\"275\" stroke=\"#0f172a\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n",
        "audio": "audio/voices/cirak_kizil_tilki/step_20.mp3"
      }
    ],
    "welcomeAudio": "audio/voices/cirak_kizil_tilki/welcome.mp3"
  },
  {
    "id": "cirak_yaris_arabasi",
    "categoryId": "arabalar",
    "name": "Süper Yarış Arabası Ferrari",
    "emoji": "🏎️",
    "level": 1,
    "levelName": "Çırak (Seviye 1)",
    "levelBadge": "🟢 Çırak",
    "description": "Alçak aerodinamik gövdeli, yüksek arka kanatlı, kalın yarış tekerlekli süper spor yarış arabası.",
    "materials": "1 Adet Kağıt, Kurşun Kalem ve Yarış Kırmızısı, Altın Sarısı, Asfalt Grisi Boya Kalemleri",
    "welcomeText": "Süper Yarış Arabası Ferrari çizmeye hazır mısın Kıvanç? Kağıdını ve boya kalemlerini hazırla, birlikte çizelim!",
    "colors": [
      {
        "name": "Ferrari Kırmızısı",
        "hex": "#ef4444"
      },
      {
        "name": "Yarış Sarısı",
        "hex": "#facc15"
      },
      {
        "name": "Gök Mavisi Cam",
        "hex": "#0284c7"
      },
      {
        "name": "Asfalt Grisi",
        "hex": "#334155"
      }
    ],
    "previewSvg": "\n      <defs>\n        <linearGradient id=\"carBodyRed\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n          <stop offset=\"0%\" stop-color=\"#ef4444\"/>\n          <stop offset=\"50%\" stop-color=\"#dc2626\"/>\n          <stop offset=\"100%\" stop-color=\"#991b1b\"/>\n        </linearGradient>\n        <linearGradient id=\"carGlass\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#bae6fd\"/>\n          <stop offset=\"100%\" stop-color=\"#0284c7\"/>\n        </linearGradient>\n        <linearGradient id=\"carRim\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#fef08a\"/>\n          <stop offset=\"100%\" stop-color=\"#ca8a04\"/>\n        </linearGradient>\n        <linearGradient id=\"carAsphalt\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#64748b\"/>\n          <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n        </linearGradient>\n      </defs>\n      <ellipse cx=\"300\" cy=\"480\" rx=\"230\" ry=\"20\" fill=\"url(#carAsphalt)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <path d=\"M 105 270 L 155 270 L 145 320 L 115 320 Z\" fill=\"#991b1b\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <path d=\"M 85 260 L 175 260 L 165 275 L 75 275 Z\" fill=\"#ef4444\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <path d=\"M 95 385 C 80 340, 140 310, 200 310 L 260 250 C 310 220, 390 220, 420 260 L 480 320 C 520 330, 545 360, 535 395 C 525 435, 495 440, 465 440 L 125 440 C 95 440, 90 410, 95 385 Z\" fill=\"url(#carBodyRed)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n      <path d=\"M 270 260 C 310 235, 380 235, 405 265 L 455 315 L 225 315 Z\" fill=\"url(#carGlass)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <ellipse cx=\"250\" cy=\"305\" rx=\"14\" ry=\"8\" fill=\"#ef4444\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n      <path d=\"M 490 345 L 530 365 L 505 380 Z\" fill=\"#fef08a\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n      <path d=\"M 500 355 L 520 368\" stroke=\"#ca8a04\" stroke-width=\"4\"/>\n      <path d=\"M 485 410 L 530 405 L 525 430 L 480 430 Z\" fill=\"#0f172a\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n      <path d=\"M 215 315 L 255 255 L 285 255 L 245 315 Z\" fill=\"#ffffff\" opacity=\"0.9\"/>\n      <path d=\"M 330 315 L 365 240 L 385 240 L 350 315 Z\" fill=\"#ffffff\" opacity=\"0.9\"/>\n      <circle cx=\"175\" cy=\"435\" r=\"48\" fill=\"#0f172a\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n      <circle cx=\"175\" cy=\"435\" r=\"28\" fill=\"url(#carRim)\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n      <circle cx=\"175\" cy=\"435\" r=\"10\" fill=\"#0f172a\"/>\n      <circle cx=\"435\" cy=\"435\" r=\"48\" fill=\"#0f172a\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n      <circle cx=\"435\" cy=\"435\" r=\"28\" fill=\"url(#carRim)\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n      <circle cx=\"435\" cy=\"435\" r=\"10\" fill=\"#0f172a\"/>\n",
    "steps": [
      {
        "title": "1. Adım: Ön Tampon ve Splitter Hattı",
        "instruction": "Ön tamponun en altındaki keskin yarış splitter çizgisini çiz.",
        "voice": "Arabanın ön tamponundaki yere yakın yarış splitter hattını çizelim.",
        "svg": "<path d=\"M 485 410 L 530 405 L 525 430 L 480 430 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"7\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_1.mp3"
      },
      {
        "title": "2. Adım: Burun ve Alçak Kaput Eğim Çizgisi",
        "instruction": "Ön camdan burnun ucuna kadar inen aerodinamik kaput eğrisini çiz.",
        "voice": "Ön camdan arabanın burnuna doğru inen o hızlı kaput eğrisini yapalım.",
        "svg": "<path d=\"M 420 260 L 480 320 C 520 330, 545 360, 535 395\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_2.mp3"
      },
      {
        "title": "3. Adım: Ön Damla Farlar ve İç Çizgisi",
        "instruction": "Burnun üstüne sivri damla şeklinde ön farı ve iç çizgisini çiz.",
        "voice": "Burnun üstüne o keskin, bakışları andıran yarış farını yapalım.",
        "svg": "<path d=\"M 490 345 L 530 365 L 505 380 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\"/><path d=\"M 500 355 L 520 368\" stroke=\"#0f172a\" stroke-width=\"4\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_3.mp3"
      },
      {
        "title": "4. Adım: Ön Cam ve Kabin Tavanı Yay Çizgisi",
        "instruction": "Sürücü kabininin tavanını oluşturan zarif eğriyi çiz.",
        "voice": "Kabin tavanını oluşturan yuvarlak ve hızlı yay çizgisini yapalım.",
        "svg": "<path d=\"M 260 250 C 310 220, 390 220, 420 260\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_4.mp3"
      },
      {
        "title": "5. Adım: Kabin Yan Camı ve B-Sütunu",
        "instruction": "Tavanın altındaki aerodinamik yan cam çerçevesini çiz.",
        "voice": "Tavanın altındaki renkli yan cam çerçevesini çizelim.",
        "svg": "<path d=\"M 270 260 C 310 235, 380 235, 405 265 L 455 315 L 225 315 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_5.mp3"
      },
      {
        "title": "6. Adım: Aerodinamik Yan Ayna",
        "instruction": "Ön camın köşesine yatık küçük oval bir dikiz aynası ekle.",
        "voice": "Ön camın köşesine yarış arabamızın dikiz aynasını yapalım.",
        "svg": "<ellipse cx=\"250\" cy=\"305\" rx=\"14\" ry=\"8\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_6.mp3"
      },
      {
        "title": "7. Adım: Arka Omuz ve Bagaj Hattı",
        "instruction": "Tavandan geriye doğru inen kaslı arka gövde çizgisini yap.",
        "voice": "Tavandan arabanın arkasına inen kaslı omuz çizgisini yapalım.",
        "svg": "<path d=\"M 95 385 C 80 340, 140 310, 200 310 L 260 250\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_7.mp3"
      },
      {
        "title": "8. Adım: Yan Etek (Marşpiyel) ve Kapı Çizgisi",
        "instruction": "İki tekerlek arasındaki düz taban çizgisini ve kapı dikey çizgisini ekle.",
        "voice": "İki tekerlek arasındaki düz alt marşpiyeli ve kapı çizgisini çizelim.",
        "svg": "<line x1=\"225\" y1=\"440\" x2=\"385\" y2=\"440\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/><line x1=\"285\" y1=\"315\" x2=\"285\" y2=\"435\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_8.mp3"
      },
      {
        "title": "9. Adım: Arka Tampon ve Alt Gövde Hattı",
        "instruction": "Arka gövdenin altını kapatan sağlam tampon çizgisini tamamla.",
        "voice": "Arka gövdenin altını kapatan tampon çizgisini tamamlayalım.",
        "svg": "<path d=\"M 95 385 C 90 410, 95 440, 125 440 L 175 440\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_9.mp3"
      },
      {
        "title": "10. Adım: Ön Çamurluk ve Kalın Ön Lastik",
        "instruction": "Ön tekerleğin kalın siyah dış dairesini çiz.",
        "voice": "Ön tekerleğin kalın siyah lastik çemberini çizelim.",
        "svg": "<circle cx=\"435\" cy=\"435\" r=\"48\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_10.mp3"
      },
      {
        "title": "11. Adım: Ön Tekerlek Spor Jantı ve Göbeği",
        "instruction": "Ön lastiğin içine altın renkli spor jant dairesini ve göbeğini ekle.",
        "voice": "Ön tekerleğin içine spor jant çemberini ve ortasındaki göbeği yapalım.",
        "svg": "<circle cx=\"435\" cy=\"435\" r=\"28\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\"/><circle cx=\"435\" cy=\"435\" r=\"10\" fill=\"#0f172a\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_11.mp3"
      },
      {
        "title": "12. Adım: Arka Çamurluk ve Kalın Arka Lastik",
        "instruction": "Arka tekerleğin kalın siyah dış dairesini çiz.",
        "voice": "Şimdi arkadaki kalın yarış lastiği çemberini çizelim.",
        "svg": "<circle cx=\"175\" cy=\"435\" r=\"48\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_12.mp3"
      },
      {
        "title": "13. Adım: Arka Tekerlek Spor Jantı ve Göbeği",
        "instruction": "Arka lastiğin içine de spor jant dairesini ve göbeğini ekle.",
        "voice": "Arka lastiğin içine de spor jantı ve göbeğini yapalım.",
        "svg": "<circle cx=\"175\" cy=\"435\" r=\"28\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\"/><circle cx=\"175\" cy=\"435\" r=\"10\" fill=\"#0f172a\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_13.mp3"
      },
      {
        "title": "14. Adım: Yüksek Arka GT Spoyler Ayakları",
        "instruction": "Bagajın üstünden yukarı yükselen iki spoyler ayağını çiz.",
        "voice": "Bagajın üstünden yukarı uzanan spoyler ayaklarını yapalım.",
        "svg": "<path d=\"M 105 270 L 155 270 L 145 320 L 115 320 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_14.mp3"
      },
      {
        "title": "15. Adım: Spoyler Üst Aerodinamik Kanadı",
        "instruction": "Ayakların üstüne rüzgarı kesen yatay yarış kanadını yerleştir.",
        "voice": "Spoyler ayaklarının üstüne yatay büyük yarış kanadını çizelim.",
        "svg": "<path d=\"M 85 260 L 175 260 L 165 275 L 75 275 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_15.mp3"
      },
      {
        "title": "16. Adım: Kaput ve Tavan Çift Yarış Şeritleri",
        "instruction": "Gövdenin üzerinden geçen beyaz spor yarış şeritlerini çiz.",
        "voice": "Arabanın üstünden geçen çift spor yarış şeritlerini ekleyelim.",
        "svg": "<path d=\"M 215 315 L 255 255 L 285 255 L 245 315 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\"/><path d=\"M 330 315 L 365 240 L 385 240 L 350 315 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_16.mp3"
      },
      {
        "title": "17. Adım: Asfalt Zemin ve Hızlı Yol Çizgisi",
        "instruction": "Arabanın bastığı koyu renkli asfalt zemin elipsini çiz.",
        "voice": "Arabanın lastiklerinin bastığı geniş asfalt yol çizgisini yapalım.",
        "svg": "<ellipse cx=\"300\" cy=\"480\" rx=\"230\" ry=\"20\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\"/>",
        "audio": "audio/voices/cirak_yaris_arabasi/step_17.mp3"
      },
      {
        "title": "18. Adım: Canlı Ferrari Kırmızısı Renklendirme",
        "instruction": "Muazzam bir yarış arabası oldu! Gövdeyi ateş kırmızısına, jantları sarıya boya!",
        "voice": "Süpersin Kıvanç! Yarış araban pistlere çıkmaya hazır. Şimdi arabayı alev alev Ferrari kırmızısına boya!",
        "svg": "\n          <defs>\n            <linearGradient id=\"carBodyRed\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n              <stop offset=\"0%\" stop-color=\"#ef4444\"/>\n              <stop offset=\"50%\" stop-color=\"#dc2626\"/>\n              <stop offset=\"100%\" stop-color=\"#991b1b\"/>\n            </linearGradient>\n            <linearGradient id=\"carGlass\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#bae6fd\"/>\n              <stop offset=\"100%\" stop-color=\"#0284c7\"/>\n            </linearGradient>\n            <linearGradient id=\"carRim\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#fef08a\"/>\n              <stop offset=\"100%\" stop-color=\"#ca8a04\"/>\n            </linearGradient>\n            <linearGradient id=\"carAsphalt\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#64748b\"/>\n              <stop offset=\"100%\" stop-color=\"#1e293b\"/>\n            </linearGradient>\n          </defs>\n          <ellipse cx=\"300\" cy=\"480\" rx=\"230\" ry=\"20\" fill=\"url(#carAsphalt)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <path d=\"M 105 270 L 155 270 L 145 320 L 115 320 Z\" fill=\"#991b1b\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <path d=\"M 85 260 L 175 260 L 165 275 L 75 275 Z\" fill=\"#ef4444\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <path d=\"M 95 385 C 80 340, 140 310, 200 310 L 260 250 C 310 220, 390 220, 420 260 L 480 320 C 520 330, 545 360, 535 395 C 525 435, 495 440, 465 440 L 125 440 C 95 440, 90 410, 95 385 Z\" fill=\"url(#carBodyRed)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n          <path d=\"M 270 260 C 310 235, 380 235, 405 265 L 455 315 L 225 315 Z\" fill=\"url(#carGlass)\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <ellipse cx=\"250\" cy=\"305\" rx=\"14\" ry=\"8\" fill=\"#ef4444\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n          <path d=\"M 490 345 L 530 365 L 505 380 Z\" fill=\"#fef08a\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n          <path d=\"M 500 355 L 520 368\" stroke=\"#ca8a04\" stroke-width=\"4\"/>\n          <path d=\"M 485 410 L 530 405 L 525 430 L 480 430 Z\" fill=\"#0f172a\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n          <path d=\"M 215 315 L 255 255 L 285 255 L 245 315 Z\" fill=\"#ffffff\" opacity=\"0.9\"/>\n          <path d=\"M 330 315 L 365 240 L 385 240 L 350 315 Z\" fill=\"#ffffff\" opacity=\"0.9\"/>\n          <circle cx=\"175\" cy=\"435\" r=\"48\" fill=\"#0f172a\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n          <circle cx=\"175\" cy=\"435\" r=\"28\" fill=\"url(#carRim)\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n          <circle cx=\"175\" cy=\"435\" r=\"10\" fill=\"#0f172a\"/>\n          <circle cx=\"435\" cy=\"435\" r=\"48\" fill=\"#0f172a\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n          <circle cx=\"435\" cy=\"435\" r=\"28\" fill=\"url(#carRim)\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n          <circle cx=\"435\" cy=\"435\" r=\"10\" fill=\"#0f172a\"/>\n",
        "audio": "audio/voices/cirak_yaris_arabasi/step_18.mp3"
      }
    ],
    "welcomeAudio": "audio/voices/cirak_yaris_arabasi/welcome.mp3"
  },
  {
    "id": "cirak_yunus_baligi",
    "categoryId": "deniz",
    "name": "Sevimli Yunus Balığı",
    "emoji": "🐬",
    "level": 1,
    "levelName": "Çırak (Seviye 1)",
    "levelBadge": "🟢 Çırak",
    "description": "Masmavi dalgaların üzerinden neşeyle havaya sıçrayan, şişe burunlu, parlak gözlü sevimli Yunus.",
    "materials": "1 Adet Kağıt, Kurşun Kalem ve Okyanus Mavisi, Turkuaz, Beyaz Boya Kalemleri",
    "welcomeText": "Sevimli Yunus Balığı çizmeye hazır mısın Kıvanç? Kağıdını ve boya kalemlerini hazırla, birlikte çizelim!",
    "colors": [
      {
        "name": "Okyanus Mavisi",
        "hex": "#0284c7"
      },
      {
        "name": "Açık Gökyüzü",
        "hex": "#38bdf8"
      },
      {
        "name": "Köpük Beyazı",
        "hex": "#ffffff"
      },
      {
        "name": "Turkuaz Dalga",
        "hex": "#22d3ee"
      }
    ],
    "previewSvg": "\n      <defs>\n        <linearGradient id=\"dolphinBody\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#38bdf8\"/>\n          <stop offset=\"60%\" stop-color=\"#0284c7\"/>\n          <stop offset=\"100%\" stop-color=\"#0369a1\"/>\n        </linearGradient>\n        <linearGradient id=\"dolphinBelly\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n          <stop offset=\"100%\" stop-color=\"#e0f2fe\"/>\n        </linearGradient>\n        <linearGradient id=\"oceanWaves\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#22d3ee\"/>\n          <stop offset=\"100%\" stop-color=\"#0e7490\"/>\n        </linearGradient>\n      </defs>\n      <path d=\"M 80 490 C 130 460, 180 520, 240 480 C 300 450, 350 510, 420 475 C 470 450, 520 490, 550 480 C 550 540, 80 540, 80 490 Z\" fill=\"url(#oceanWaves)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n      <circle cx=\"150\" cy=\"440\" r=\"10\" fill=\"#38bdf8\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <circle cx=\"180\" cy=\"410\" r=\"7\" fill=\"#38bdf8\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <circle cx=\"450\" cy=\"420\" r=\"9\" fill=\"#38bdf8\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <circle cx=\"475\" cy=\"445\" r=\"6\" fill=\"#38bdf8\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n      <path d=\"M 125 415 C 80 395, 55 425, 75 460 C 105 450, 125 435, 140 435 C 135 455, 125 480, 155 485 C 170 460, 155 430, 140 420 Z\" fill=\"url(#dolphinBody)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n      <path d=\"M 320 185 C 330 115, 380 125, 395 180 Z\" fill=\"url(#dolphinBody)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n      <path d=\"M 440 210 C 490 220, 520 245, 515 270 C 490 280, 455 275, 430 265 C 380 295, 340 335, 290 350 C 235 370, 190 385, 140 420 C 130 405, 130 385, 140 370 C 200 280, 265 210, 320 185 C 360 170, 410 180, 440 210 Z\" fill=\"url(#dolphinBody)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n      <path d=\"M 445 265 C 390 315, 320 340, 240 375 C 180 400, 150 415, 140 425 C 145 400, 185 370, 230 355 C 310 325, 370 295, 430 265 Z\" fill=\"url(#dolphinBelly)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n      <path d=\"M 370 285 C 390 325, 400 350, 375 355 C 365 340, 365 310, 370 285 Z\" fill=\"#0284c7\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linejoin=\"round\"/>\n      <path d=\"M 345 315 C 375 365, 360 410, 310 405 C 305 380, 320 345, 345 315 Z\" fill=\"url(#dolphinBody)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n      <ellipse cx=\"420\" cy=\"195\" rx=\"8\" ry=\"4\" fill=\"#0f172a\" transform=\"rotate(-15 420 195)\"/>\n      <circle cx=\"430\" cy=\"225\" r=\"14\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n      <circle cx=\"433\" cy=\"226\" r=\"9\" fill=\"#0f172a\"/>\n      <circle cx=\"428\" cy=\"222\" r=\"4\" fill=\"#ffffff\"/>\n      <circle cx=\"435\" cy=\"229\" r=\"2\" fill=\"#ffffff\"/>\n      <path d=\"M 418 208 Q 430 202, 442 208\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M 465 260 C 485 272, 510 265, 515 258\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n",
    "steps": [
      {
        "title": "1. Adım: Baş Alın ve Şişe Burun Konturu",
        "instruction": "Kafanın yuvarlak alnını ve öne doğru uzanan tombul şişe burnu çiz.",
        "voice": "Kaleminle yunusun yuvarlak alnını ve öne uzanan sevimli burnunu çizelim.",
        "svg": "<path d=\"M 440 210 C 490 220, 520 245, 515 270 C 490 280, 455 275, 430 265\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_1.mp3"
      },
      {
        "title": "2. Adım: Sevimli Gülümseyen Ağız Çizgisi",
        "instruction": "Burnun ucundan geriye doğru tatlı bir gülümseme çizgisi çiz.",
        "voice": "Burnun ucundan geriye doğru mutlu bir gülümseme çizgisi yapalım.",
        "svg": "<path d=\"M 465 260 C 485 272, 510 265, 515 258\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_2.mp3"
      },
      {
        "title": "3. Adım: Baş Tepesindeki Nefes Deliği (Blowhole)",
        "instruction": "Başın üstüne su püskürttüğü küçük yatay nefes deliğini yap.",
        "voice": "Başın tepesine nefes aldığı minik hava deliğini çizelim.",
        "svg": "<ellipse cx=\"420\" cy=\"195\" rx=\"8\" ry=\"4\" fill=\"#0f172a\" transform=\"rotate(-15 420 195)\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_3.mp3"
      },
      {
        "title": "4. Adım: Büyük Neşeli Yunus Gözü Çerçevesi",
        "instruction": "Yüzün ortasına neşeli büyük bir göz dairesi çiz.",
        "voice": "Yüzün ortasına neşeyle bakan büyük bir göz çerçevesi çizelim.",
        "svg": "<circle cx=\"430\" cy=\"225\" r=\"14\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"6\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_4.mp3"
      },
      {
        "title": "5. Adım: Gözbebeği ve Çift Beyaz Parlama Işığı",
        "instruction": "Gözün içine siyah gözbebeğini ve parlayan iki beyaz ışığı ekle.",
        "voice": "Gözün içine siyah gözbebeğini ve parıldayan iki beyaz ışık noktasını yapalım.",
        "svg": "<circle cx=\"433\" cy=\"226\" r=\"9\" fill=\"#0f172a\"/><circle cx=\"428\" cy=\"222\" r=\"4\" fill=\"#ffffff\"/><circle cx=\"435\" cy=\"229\" r=\"2\" fill=\"#ffffff\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_5.mp3"
      },
      {
        "title": "6. Adım: Göz Üstü Tatlı Kaş Çizgisi",
        "instruction": "Gözün üstüne hafif neşeli bir kaş yayı koy.",
        "voice": "Gözün üstüne sevimli bir kaş yayı ekleyelim.",
        "svg": "<path d=\"M 418 208 Q 430 202, 442 208\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_6.mp3"
      },
      {
        "title": "7. Adım: Geriye Doğru Kıvrılan Sırt Yüzgeci (Dorsal Fin)",
        "instruction": "Sırtın ortasından geriye kıvrılan üçgen sırt yüzgecini çiz.",
        "voice": "Sırttan geriye doğru kıvrılan o meşhur üçgen yüzgeci çizelim.",
        "svg": "<path d=\"M 320 185 C 330 115, 380 125, 395 180 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_7.mp3"
      },
      {
        "title": "8. Adım: Pürüzsüz Sırt Çizgisi",
        "instruction": "Kafadan sırt yüzgecine ve arkadaki kuyruğa kadar uzanan sırt çizgisini tamamla.",
        "voice": "Kafadan kuyruğa kadar uzanan pürüzsüz sırt çizgisini yapalım.",
        "svg": "<path d=\"M 395 180 C 420 180, 435 195, 440 210\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/><path d=\"M 320 185 C 265 210, 200 280, 140 370\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_8.mp3"
      },
      {
        "title": "9. Adım: Çene Altı ve Ön Karın Çizgisi",
        "instruction": "Çenenin altından göğse doğru inen alt kavisli çizgiyi çiz.",
        "voice": "Çenenin altından göğse doğru inen kavisli karın çizgisini çizelim.",
        "svg": "<path d=\"M 430 265 C 380 295, 340 335, 290 350\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_9.mp3"
      },
      {
        "title": "10. Adım: Büyük Ön Yan Yüzgeç (Pectoral Fin)",
        "instruction": "Gövdenin yanından aşağıya doğru uzanan büyük yan yüzgeci çiz.",
        "voice": "Gövdenin yanından aşağı uzanan kanat gibi büyük yan yüzgeci yapalım.",
        "svg": "<path d=\"M 345 315 C 375 365, 360 410, 310 405 C 305 380, 320 345, 345 315 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_10.mp3"
      },
      {
        "title": "11. Adım: Arkada Kalan İkinci Yan Yüzgeç",
        "instruction": "Gövdenin arkasında kalan diğer minik yan yüzgeci ekle.",
        "voice": "Gövdenin arkasında görünen diğer yan yüzgeci de ekleyelim.",
        "svg": "<path d=\"M 370 285 C 390 325, 400 350, 375 355 C 365 340, 365 310, 370 285 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_11.mp3"
      },
      {
        "title": "12. Adım: Alt Karın ve İnce Kuyruk Sapı",
        "instruction": "Gövdenin altını incelterek kuyruk başlangıcına kadar birleştir.",
        "voice": "Gövdenin altını incelterek kuyruğun başladığı yere kadar çizelim.",
        "svg": "<path d=\"M 290 350 C 235 370, 190 385, 140 420\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_12.mp3"
      },
      {
        "title": "13. Adım: Kuyruk Yüzgeci Sol Kanadı (Fluke Sol)",
        "instruction": "Kuyruk yüzgecinin sol yukarı kıvrılan kanadını çiz.",
        "voice": "Kuyruk yüzgecinin sola kıvrılan ilk kanadını yapalım.",
        "svg": "<path d=\"M 125 415 C 80 395, 55 425, 75 460 C 105 450, 125 435, 140 435\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_13.mp3"
      },
      {
        "title": "14. Adım: Kuyruk Yüzgeci Sağ Kanadı ve Çentik",
        "instruction": "Kuyruk yüzgecinin sağ kanadını ve ortadaki minik çentiği tamamla.",
        "voice": "Kuyruk yüzgecinin diğer kanadını ve ortasındaki çentiği tamamlayalım.",
        "svg": "<path d=\"M 140 435 C 135 455, 125 480, 155 485 C 170 460, 155 430, 140 420\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_14.mp3"
      },
      {
        "title": "15. Adım: Karın Açık Renk Ayrım Dalga Hattı",
        "instruction": "Gövde boyunca uzanan beyaz karın ayrım dalga çizgisini çiz.",
        "voice": "Gövde boyunca uzanan açık renkli karın ayrım çizgisini çizelim.",
        "svg": "<path d=\"M 445 265 C 390 315, 320 340, 240 375 C 180 400, 150 415, 140 425\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_15.mp3"
      },
      {
        "title": "16. Adım: Dalgalı Deniz Kaidesi",
        "instruction": "Yunusumuzun altındaki köpüklü okyanus dalgalarını çiz.",
        "voice": "Yunusumuzun altındaki köpüklü okyanus dalgalarını yapalım.",
        "svg": "<path d=\"M 80 490 C 130 460, 180 520, 240 480 C 300 450, 350 510, 420 475 C 470 450, 520 490, 550 480\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_16.mp3"
      },
      {
        "title": "17. Adım: Havada Sıçrayan Su Damlacıkları",
        "instruction": "Dalgaların üstüne havaya saçılan neşeli su damlası daireleri ekle.",
        "voice": "Havaya sıçrayan neşeli su damlacıklarını çizelim.",
        "svg": "<circle cx=\"150\" cy=\"440\" r=\"10\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/><circle cx=\"180\" cy=\"410\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/><circle cx=\"450\" cy=\"420\" r=\"9\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/><circle cx=\"475\" cy=\"445\" r=\"6\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"3\"/>",
        "audio": "audio/voices/cirak_yunus_baligi/step_17.mp3"
      },
      {
        "title": "18. Adım: Canlı Okyanus Renkleriyle Boyama",
        "instruction": "Harika bir deniz manzarası! Yunusunu turkuaz okyanus renkleriyle boya!",
        "voice": "Tebrikler Kıvanç! Yunusun adeta denizden fırlamış gibi canlandı. Şimdi resmini masmavi okyanus renkleriyle boya!",
        "svg": "\n          <defs>\n            <linearGradient id=\"dolphinBody\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#38bdf8\"/>\n              <stop offset=\"60%\" stop-color=\"#0284c7\"/>\n              <stop offset=\"100%\" stop-color=\"#0369a1\"/>\n            </linearGradient>\n            <linearGradient id=\"dolphinBelly\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n              <stop offset=\"100%\" stop-color=\"#e0f2fe\"/>\n            </linearGradient>\n            <linearGradient id=\"oceanWaves\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#22d3ee\"/>\n              <stop offset=\"100%\" stop-color=\"#0e7490\"/>\n            </linearGradient>\n          </defs>\n          <path d=\"M 80 490 C 130 460, 180 520, 240 480 C 300 450, 350 510, 420 475 C 470 450, 520 490, 550 480 C 550 540, 80 540, 80 490 Z\" fill=\"url(#oceanWaves)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n          <circle cx=\"150\" cy=\"440\" r=\"10\" fill=\"#38bdf8\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n          <circle cx=\"180\" cy=\"410\" r=\"7\" fill=\"#38bdf8\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n          <circle cx=\"450\" cy=\"420\" r=\"9\" fill=\"#38bdf8\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n          <circle cx=\"475\" cy=\"445\" r=\"6\" fill=\"#38bdf8\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n          <path d=\"M 125 415 C 80 395, 55 425, 75 460 C 105 450, 125 435, 140 435 C 135 455, 125 480, 155 485 C 170 460, 155 430, 140 420 Z\" fill=\"url(#dolphinBody)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n          <path d=\"M 320 185 C 330 115, 380 125, 395 180 Z\" fill=\"url(#dolphinBody)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n          <path d=\"M 440 210 C 490 220, 520 245, 515 270 C 490 280, 455 275, 430 265 C 380 295, 340 335, 290 350 C 235 370, 190 385, 140 420 C 130 405, 130 385, 140 370 C 200 280, 265 210, 320 185 C 360 170, 410 180, 440 210 Z\" fill=\"url(#dolphinBody)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n          <path d=\"M 445 265 C 390 315, 320 340, 240 375 C 180 400, 150 415, 140 425 C 145 400, 185 370, 230 355 C 310 325, 370 295, 430 265 Z\" fill=\"url(#dolphinBelly)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n          <path d=\"M 370 285 C 390 325, 400 350, 375 355 C 365 340, 365 310, 370 285 Z\" fill=\"#0284c7\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linejoin=\"round\"/>\n          <path d=\"M 345 315 C 375 365, 360 410, 310 405 C 305 380, 320 345, 345 315 Z\" fill=\"url(#dolphinBody)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n          <ellipse cx=\"420\" cy=\"195\" rx=\"8\" ry=\"4\" fill=\"#0f172a\" transform=\"rotate(-15 420 195)\"/>\n          <circle cx=\"430\" cy=\"225\" r=\"14\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n          <circle cx=\"433\" cy=\"226\" r=\"9\" fill=\"#0f172a\"/>\n          <circle cx=\"428\" cy=\"222\" r=\"4\" fill=\"#ffffff\"/>\n          <circle cx=\"435\" cy=\"229\" r=\"2\" fill=\"#ffffff\"/>\n          <path d=\"M 418 208 Q 430 202, 442 208\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n          <path d=\"M 465 260 C 485 272, 510 265, 515 258\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n",
        "audio": "audio/voices/cirak_yunus_baligi/step_18.mp3"
      }
    ],
    "welcomeAudio": "audio/voices/cirak_yunus_baligi/welcome.mp3"
  },
  {
    "id": "cirak_uzay_roketi",
    "categoryId": "uzay",
    "name": "Uzay Roketi",
    "emoji": "🚀",
    "level": 1,
    "levelName": "Çırak (Seviye 1)",
    "levelBadge": "🟢 Çırak",
    "description": "Kükreyen alevleriyle uzaya fırlayan, yuvarlak pencereli, kanatlı ve Satürn gezegenine giden Uzay Roketi.",
    "materials": "1 Adet Kağıt, Kurşun Kalem ve Roket Kırmızısı, Ateş Sarısı, Gece Mavisi Boya Kalemleri",
    "welcomeText": "Uzay Roketi çizmeye hazır mısın Kıvanç? Kağıdını ve boya kalemlerini hazırla, birlikte çizelim!",
    "colors": [
      {
        "name": "Roket Kırmızısı",
        "hex": "#ef4444"
      },
      {
        "name": "Ateş Sarısı",
        "hex": "#fde047"
      },
      {
        "name": "Uzay Grisi",
        "hex": "#64748b"
      },
      {
        "name": "Cam Mavisi",
        "hex": "#38bdf8"
      }
    ],
    "previewSvg": "\n      <defs>\n        <linearGradient id=\"rocketBody\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n          <stop offset=\"0%\" stop-color=\"#f8fafc\"/>\n          <stop offset=\"60%\" stop-color=\"#e2e8f0\"/>\n          <stop offset=\"100%\" stop-color=\"#cbd5e1\"/>\n        </linearGradient>\n        <linearGradient id=\"rocketRed\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n          <stop offset=\"0%\" stop-color=\"#ef4444\"/>\n          <stop offset=\"100%\" stop-color=\"#b91c1c\"/>\n        </linearGradient>\n        <linearGradient id=\"rocketWindow\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#38bdf8\"/>\n          <stop offset=\"100%\" stop-color=\"#0284c7\"/>\n        </linearGradient>\n        <linearGradient id=\"rocketFire\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#fef08a\"/>\n          <stop offset=\"40%\" stop-color=\"#f97316\"/>\n          <stop offset=\"100%\" stop-color=\"#dc2626\"/>\n        </linearGradient>\n      </defs>\n      <circle cx=\"120\" cy=\"180\" r=\"28\" fill=\"#eab308\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n      <ellipse cx=\"120\" cy=\"180\" rx=\"48\" ry=\"12\" fill=\"none\" stroke=\"#fef08a\" stroke-width=\"5\" transform=\"rotate(-20 120 180)\"/>\n      <polygon points=\"480,110 484,122 496,126 484,130 480,142 476,130 464,126 476,122\" fill=\"#fde047\"/>\n      <polygon points=\"180,90 183,98 191,101 183,104 180,112 177,104 169,101 177,98\" fill=\"#fde047\"/>\n      <polygon points=\"460,220 463,228 471,231 463,234 460,242 457,234 449,231 457,228\" fill=\"#fde047\"/>\n      <path d=\"M 250 465 C 240 500, 260 520, 240 550 C 270 535, 285 545, 300 580 C 315 545, 330 535, 360 550 C 340 520, 360 500, 350 465 Z\" fill=\"url(#rocketFire)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n      <path d=\"M 270 465 C 270 495, 285 510, 300 535 C 315 510, 330 495, 330 465 Z\" fill=\"#fef08a\"/>\n      <path d=\"M 260 435 L 245 465 L 355 465 L 340 435 Z\" fill=\"#334155\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n      <path d=\"M 235 340 L 140 440 L 235 440 Z\" fill=\"url(#rocketRed)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n      <path d=\"M 365 340 L 460 440 L 365 440 Z\" fill=\"url(#rocketRed)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n      <path d=\"M 235 170 C 235 170, 235 435, 235 435 L 365 435 L 365 170 C 365 170, 300 160, 235 170 Z\" fill=\"url(#rocketBody)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n      <path d=\"M 292 364 L 292 440 L 308 440 L 308 364 Z\" fill=\"url(#rocketRed)\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linejoin=\"round\"/>\n      <path d=\"M 235 170 C 265 110, 335 110, 365 170 Z\" fill=\"url(#rocketRed)\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>\n      <line x1=\"300\" y1=\"110\" x2=\"300\" y2=\"60\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n      <circle cx=\"300\" cy=\"55\" r=\"7\" fill=\"#ef4444\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n      <rect x=\"235\" y=\"340\" width=\"130\" height=\"24\" rx=\"6\" fill=\"url(#rocketRed)\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n      <circle cx=\"300\" cy=\"270\" r=\"42\" fill=\"#475569\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <circle cx=\"300\" cy=\"270\" r=\"30\" fill=\"url(#rocketWindow)\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n      <circle cx=\"290\" cy=\"260\" r=\"8\" fill=\"#ffffff\" opacity=\"0.8\"/>\n      <circle cx=\"270\" cy=\"270\" r=\"3\" fill=\"#ffffff\"/>\n      <circle cx=\"330\" cy=\"270\" r=\"3\" fill=\"#ffffff\"/>\n      <circle cx=\"300\" cy=\"240\" r=\"3\" fill=\"#ffffff\"/>\n      <circle cx=\"300\" cy=\"300\" r=\"3\" fill=\"#ffffff\"/>\n",
    "steps": [
      {
        "title": "1. Adım: Mermi Burun Konisi",
        "instruction": "Roketin tepesindeki sivri mermi burun yayını çiz.",
        "voice": "Kaleminle roketin tepesindeki yuvarlak mermi burun çizgisini yapalım.",
        "svg": "<path d=\"M 245 170 C 265 110, 335 110, 355 170\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_1.mp3"
      },
      {
        "title": "2. Adım: Sivri İletişim Anteni ve Tepesi",
        "instruction": "Burnun tam ucuna yukarı uzanan ince bir anten ve tepesine küçük bir yuvarlak koy.",
        "voice": "Burnun tepesine uzaya sinyal gönderen anteni ve ucundaki yuvarlağı çizelim.",
        "svg": "<line x1=\"300\" y1=\"110\" x2=\"300\" y2=\"60\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linecap=\"round\"/><circle cx=\"300\" cy=\"55\" r=\"7\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"5\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_2.mp3"
      },
      {
        "title": "3. Adım: Burun Başlığı Ayrım Çizgisi",
        "instruction": "Kırmızı burun konisini gövdeden ayıran yatay kavisli çizgiyi çiz.",
        "voice": "Burun başlığını gövdeden ayıran yay çizgisini yapalım.",
        "svg": "<path d=\"M 240 170 Q 300 185, 360 170\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linecap=\"round\" fill=\"none\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_3.mp3"
      },
      {
        "title": "4. Adım: Gövdenin Sol Dikey Duvarı",
        "instruction": "Gövdenin sol tarafından aşağıya dimdik inen çizgiyi çiz.",
        "voice": "Gövdenin solundan aşağıya dimdik inen yan duvarı çizelim.",
        "svg": "<line x1=\"235\" y1=\"170\" x2=\"235\" y2=\"435\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_4.mp3"
      },
      {
        "title": "5. Adım: Gövdenin Sağ Dikey Duvarı",
        "instruction": "Gövdenin sağ tarafından aşağıya inen ikinci düz çizgiyi çiz.",
        "voice": "Gövdenin sağından aşağı inen diğer duvarı da çizelim.",
        "svg": "<line x1=\"365\" y1=\"170\" x2=\"365\" y2=\"435\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_5.mp3"
      },
      {
        "title": "6. Adım: Büyük Yuvarlak Lumbuz Pencere Dış Halkası",
        "instruction": "Gövdenin tam ortasına büyük yuvarlak bir pencere dairesi çiz.",
        "voice": "Gövdenin tam ortasına astronotun baktığı kocaman yuvarlak pencereyi yapalım.",
        "svg": "<circle cx=\"300\" cy=\"270\" r=\"42\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_6.mp3"
      },
      {
        "title": "7. Adım: Pencere İç Camı ve Yansıma Parlaması",
        "instruction": "Dış halkanın içine ikinci bir cam çemberi ve parıldayan ışık yansıması çiz.",
        "voice": "Pencerenin içine cam çemberini ve parlayan beyaz ışık yansımasını çizelim.",
        "svg": "<circle cx=\"300\" cy=\"270\" r=\"30\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\"/><circle cx=\"290\" cy=\"260\" r=\"8\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"2\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_7.mp3"
      },
      {
        "title": "8. Adım: Pencere Metal Perçin Vidaları",
        "instruction": "Pencere çerçevesinin dört yanına minik metal vida noktaları koy.",
        "voice": "Pencerenin sağlam durması için dört köşesine minik vida noktaları koyalım.",
        "svg": "<circle cx=\"270\" cy=\"270\" r=\"3\" fill=\"#0f172a\"/><circle cx=\"330\" cy=\"270\" r=\"3\" fill=\"#0f172a\"/><circle cx=\"300\" cy=\"240\" r=\"3\" fill=\"#0f172a\"/><circle cx=\"300\" cy=\"300\" r=\"3\" fill=\"#0f172a\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_8.mp3"
      },
      {
        "title": "9. Adım: Gövde Yatay Görev Şeritleri",
        "instruction": "Pencerenin altına roketin kırmızı görev kuşağını çiz.",
        "voice": "Pencerenin altına roketin kırmızı görev kuşağını yapalım.",
        "svg": "<rect x=\"235\" y=\"340\" width=\"130\" height=\"24\" rx=\"6\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"7\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_9.mp3"
      },
      {
        "title": "10. Adım: Sol Aerodinamik Kanat",
        "instruction": "Gövdenin sol altından dışarı açılan sivri üçgen kanadı çiz.",
        "voice": "Sol taraftan dışarı açılan o sivri roket kanadını çizelim.",
        "svg": "<path d=\"M 235 340 L 140 440 L 235 440 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_10.mp3"
      },
      {
        "title": "11. Adım: Sağ Aerodinamik Kanat",
        "instruction": "Gövdenin sağ altından dışarı açılan ikinci sivri kanadı çiz.",
        "voice": "Şimdi sağ taraftaki ikinci sivri kanadımızı çizelim.",
        "svg": "<path d=\"M 365 340 L 460 440 L 365 440 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_11.mp3"
      },
      {
        "title": "12. Adım: Orta Denge Kanatçığı",
        "instruction": "Gövdenin tam ortasına aşağıya inen dar dikey kanatçığı ekle.",
        "voice": "Gövdenin ortasına aşağıya inen küçük orta kanatçığı yapalım.",
        "svg": "<path d=\"M 292 364 L 292 440 L 308 440 L 308 364 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_12.mp3"
      },
      {
        "title": "13. Adım: Motor Egzoz Nozulu",
        "instruction": "Roketin en altına genişleyen yamuk şeklinde motor çıkışını çiz.",
        "voice": "Roketin altından alevlerin püsküreceği motor egzozunu çizelim.",
        "svg": "<path d=\"M 260 435 L 245 465 L 355 465 L 340 435 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_13.mp3"
      },
      {
        "title": "14. Adım: Büyük Dış Roket Alevi (Zikzak)",
        "instruction": "Motordan aşağıya fışkıran sivri zikzak alev çizgilerini çiz.",
        "voice": "Motordan aşağıya fışkıran büyük zikzak alev çizgilerini yapalım.",
        "svg": "<path d=\"M 250 465 C 240 500, 260 520, 240 550 C 270 535, 285 545, 300 580 C 315 545, 330 535, 360 550 C 340 520, 360 500, 350 465 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_14.mp3"
      },
      {
        "title": "15. Adım: Sıcak İç Çekirdek Alevi",
        "instruction": "Büyük alevin içine daha sıcak sarı çekirdek alevini çiz.",
        "voice": "Alevin tam ortasına en sıcak sarı çekirdek alevini yapalım.",
        "svg": "<path d=\"M 270 465 C 270 495, 285 510, 300 535 C 315 510, 330 495, 330 465 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_15.mp3"
      },
      {
        "title": "16. Adım: Duman ve İtici Güç Püskürmeleri",
        "instruction": "Alevlerin iki yanına kıvrılan duman ve itici güç yaylarını ekle.",
        "voice": "Alevlerin iki yanına fırlayan duman çizgilerini ekleyelim.",
        "svg": "<path d=\"M 220 540 C 200 530, 180 545, 170 560\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M 380 540 C 400 530, 420 545, 430 560\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_16.mp3"
      },
      {
        "title": "17. Adım: Uzaktaki Halkalı Gezegen",
        "instruction": "Sol üst köşeye etrafında halkası olan Satürn benzeri bir gezegen çiz.",
        "voice": "Sol üst köşeye etrafında halkası dönen o güzel gezegeni yapalım.",
        "svg": "<circle cx=\"120\" cy=\"180\" r=\"28\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"6\"/><ellipse cx=\"120\" cy=\"180\" rx=\"48\" ry=\"12\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\" transform=\"rotate(-20 120 180)\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_17.mp3"
      },
      {
        "title": "18. Adım: Parlayan Dört Köşeli Yıldızlar",
        "instruction": "Uzayın boşluğuna parlayan dört köşeli sihirli yıldızlar serpiştir.",
        "voice": "Uzayın derinliklerine parlayan dört köşeli minik yıldızlar serpiştirelim.",
        "svg": "<polygon points=\"480,110 484,122 496,126 484,130 480,142 476,130 464,126 476,122\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"4\"/><polygon points=\"180,90 183,98 191,101 183,104 180,112 177,104 169,101 177,98\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"3\"/><polygon points=\"460,220 463,228 471,231 463,234 460,242 457,234 449,231 457,228\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"3\"/>",
        "audio": "audio/voices/cirak_uzay_roketi/step_18.mp3"
      },
      {
        "title": "19. Adım: Canlı Uzay Renkleriyle Boyama",
        "instruction": "3, 2, 1, Fırlat! Roketini alev kırmızısı ve sarı renklerle boya!",
        "voice": "Tebrikler Kıvanç! Roketin uzaya fırlamaya hazır! Şimdi roketini alev kırmızısı ve sarı renklerle boya!",
        "svg": "\n          <defs>\n            <linearGradient id=\"rocketBody\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n              <stop offset=\"0%\" stop-color=\"#f8fafc\"/>\n              <stop offset=\"60%\" stop-color=\"#e2e8f0\"/>\n              <stop offset=\"100%\" stop-color=\"#cbd5e1\"/>\n            </linearGradient>\n            <linearGradient id=\"rocketRed\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n              <stop offset=\"0%\" stop-color=\"#ef4444\"/>\n              <stop offset=\"100%\" stop-color=\"#b91c1c\"/>\n            </linearGradient>\n            <linearGradient id=\"rocketWindow\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#38bdf8\"/>\n              <stop offset=\"100%\" stop-color=\"#0284c7\"/>\n            </linearGradient>\n            <linearGradient id=\"rocketFire\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#fef08a\"/>\n              <stop offset=\"40%\" stop-color=\"#f97316\"/>\n              <stop offset=\"100%\" stop-color=\"#dc2626\"/>\n            </linearGradient>\n          </defs>\n          <circle cx=\"120\" cy=\"180\" r=\"28\" fill=\"#eab308\" stroke=\"#0f172a\" stroke-width=\"6\"/>\n          <ellipse cx=\"120\" cy=\"180\" rx=\"48\" ry=\"12\" fill=\"none\" stroke=\"#fef08a\" stroke-width=\"5\" transform=\"rotate(-20 120 180)\"/>\n          <polygon points=\"480,110 484,122 496,126 484,130 480,142 476,130 464,126 476,122\" fill=\"#fde047\"/>\n          <polygon points=\"180,90 183,98 191,101 183,104 180,112 177,104 169,101 177,98\" fill=\"#fde047\"/>\n          <polygon points=\"460,220 463,228 471,231 463,234 460,242 457,234 449,231 457,228\" fill=\"#fde047\"/>\n          <path d=\"M 250 465 C 240 500, 260 520, 240 550 C 270 535, 285 545, 300 580 C 315 545, 330 535, 360 550 C 340 520, 360 500, 350 465 Z\" fill=\"url(#rocketFire)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n          <path d=\"M 270 465 C 270 495, 285 510, 300 535 C 315 510, 330 495, 330 465 Z\" fill=\"#fef08a\"/>\n          <path d=\"M 260 435 L 245 465 L 355 465 L 340 435 Z\" fill=\"#334155\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n          <path d=\"M 235 340 L 140 440 L 235 440 Z\" fill=\"url(#rocketRed)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n          <path d=\"M 365 340 L 460 440 L 365 440 Z\" fill=\"url(#rocketRed)\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/>\n          <path d=\"M 235 170 C 235 170, 235 435, 235 435 L 365 435 L 365 170 C 365 170, 300 160, 235 170 Z\" fill=\"url(#rocketBody)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n          <path d=\"M 292 364 L 292 440 L 308 440 L 308 364 Z\" fill=\"url(#rocketRed)\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linejoin=\"round\"/>\n          <path d=\"M 235 170 C 265 110, 335 110, 365 170 Z\" fill=\"url(#rocketRed)\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>\n          <line x1=\"300\" y1=\"110\" x2=\"300\" y2=\"60\" stroke=\"#0f172a\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n          <circle cx=\"300\" cy=\"55\" r=\"7\" fill=\"#ef4444\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n          <rect x=\"235\" y=\"340\" width=\"130\" height=\"24\" rx=\"6\" fill=\"url(#rocketRed)\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n          <circle cx=\"300\" cy=\"270\" r=\"42\" fill=\"#475569\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <circle cx=\"300\" cy=\"270\" r=\"30\" fill=\"url(#rocketWindow)\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n          <circle cx=\"290\" cy=\"260\" r=\"8\" fill=\"#ffffff\" opacity=\"0.8\"/>\n          <circle cx=\"270\" cy=\"270\" r=\"3\" fill=\"#ffffff\"/>\n          <circle cx=\"330\" cy=\"270\" r=\"3\" fill=\"#ffffff\"/>\n          <circle cx=\"300\" cy=\"240\" r=\"3\" fill=\"#ffffff\"/>\n          <circle cx=\"300\" cy=\"300\" r=\"3\" fill=\"#ffffff\"/>\n",
        "audio": "audio/voices/cirak_uzay_roketi/step_19.mp3"
      }
    ],
    "welcomeAudio": "audio/voices/cirak_uzay_roketi/welcome.mp3"
  },
  {
    "id": "cirak_golge_ninja",
    "categoryId": "kahramanlar",
    "name": "Gölge Ninja",
    "emoji": "🥷",
    "level": 1,
    "levelName": "Çırak (Seviye 1)",
    "levelBadge": "🟢 Çırak",
    "description": "Gece gölgesi zırhlı, kırmızı bandana şeritli, sırtında katanası ve elinde yıldız shuriken tutan cesur Ninja.",
    "materials": "1 Adet Kağıt, Kurşun Kalem ve Gece Siyahı, Kırmızı, Metalik Gri Boya Kalemleri",
    "welcomeText": "Gölge Ninja çizmeye hazır mısın Kıvanç? Kağıdını ve boya kalemlerini hazırla, birlikte çizelim!",
    "colors": [
      {
        "name": "Gece Siyahı",
        "hex": "#0f172a"
      },
      {
        "name": "Bandana Kırmızısı",
        "hex": "#ef4444"
      },
      {
        "name": "Çelik Grisi",
        "hex": "#94a3b8"
      },
      {
        "name": "Ten Rengi",
        "hex": "#fed7aa"
      }
    ],
    "previewSvg": "\n      <defs>\n        <linearGradient id=\"ninjaSuit\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#334155\"/>\n          <stop offset=\"60%\" stop-color=\"#1e293b\"/>\n          <stop offset=\"100%\" stop-color=\"#0f172a\"/>\n        </linearGradient>\n        <linearGradient id=\"ninjaRed\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n          <stop offset=\"0%\" stop-color=\"#f87171\"/>\n          <stop offset=\"100%\" stop-color=\"#b91c1c\"/>\n        </linearGradient>\n        <linearGradient id=\"ninjaPlate\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#f1f5f9\"/>\n          <stop offset=\"100%\" stop-color=\"#64748b\"/>\n        </linearGradient>\n        <linearGradient id=\"ninjaSmoke\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#cbd5e1\"/>\n          <stop offset=\"100%\" stop-color=\"#475569\"/>\n        </linearGradient>\n      </defs>\n      <path d=\"M 120 515 C 160 480, 220 500, 260 485 C 300 470, 360 480, 400 485 C 440 495, 480 480, 500 515 C 450 550, 160 550, 120 515 Z\" fill=\"url(#ninjaSmoke)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n      <path d=\"M 370 190 L 450 110 L 465 125 L 385 205 Z\" fill=\"#94a3b8\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n      <rect x=\"445\" y=\"105\" width=\"25\" height=\"10\" rx=\"3\" fill=\"#ca8a04\" stroke=\"#0f172a\" stroke-width=\"4\" transform=\"rotate(-45 445 105)\"/>\n      <path d=\"M 455 100 L 490 65 L 505 80 L 470 115 Z\" fill=\"url(#ninjaRed)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n      <path d=\"M 230 170 C 180 160, 140 210, 95 200 C 130 225, 170 215, 230 190 Z\" fill=\"url(#ninjaRed)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n      <path d=\"M 230 180 C 170 190, 130 250, 85 250 C 120 270, 160 250, 230 205 Z\" fill=\"url(#ninjaRed)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n      <path d=\"M 250 280 C 230 330, 220 400, 240 485 L 360 485 C 380 400, 370 330, 350 280 Z\" fill=\"url(#ninjaSuit)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n      <rect x=\"235\" y=\"375\" width=\"130\" height=\"24\" rx=\"6\" fill=\"url(#ninjaRed)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n      <line x1=\"300\" y1=\"400\" x2=\"300\" y2=\"485\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n      <path d=\"M 240 290 L 195 345 L 230 365 L 260 320\" fill=\"url(#ninjaSuit)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n      <path d=\"M 360 290 L 405 345 L 370 365 L 340 320\" fill=\"url(#ninjaSuit)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n      <circle cx=\"195\" cy=\"355\" r=\"12\" fill=\"#fed7aa\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n      <circle cx=\"405\" cy=\"355\" r=\"12\" fill=\"#fed7aa\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n      <polygon points=\"405,335 410,350 425,355 410,360 405,375 400,360 385,355 400,350\" fill=\"#94a3b8\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n      <ellipse cx=\"300\" cy=\"180\" rx=\"75\" ry=\"70\" fill=\"url(#ninjaSuit)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n      <path d=\"M 245 165 C 245 155, 355 155, 355 165 C 355 210, 245 210, 245 165 Z\" fill=\"#fed7aa\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n      <rect x=\"240\" y=\"130\" width=\"120\" height=\"28\" rx=\"6\" fill=\"url(#ninjaPlate)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n      <circle cx=\"248\" cy=\"144\" r=\"3\" fill=\"#0f172a\"/>\n      <circle cx=\"352\" cy=\"144\" r=\"3\" fill=\"#0f172a\"/>\n      <polygon points=\"300,136 303,142 309,144 303,146 300,152 297,146 291,144 297,142\" fill=\"#0f172a\"/>\n      <path d=\"M 260 175 Q 275 165, 290 178\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n      <circle cx=\"275\" cy=\"182\" r=\"9\" fill=\"#0f172a\"/>\n      <circle cx=\"272\" cy=\"179\" r=\"3\" fill=\"#ffffff\"/>\n      <path d=\"M 340 175 Q 325 165, 310 178\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n      <circle cx=\"325\" cy=\"182\" r=\"9\" fill=\"#0f172a\"/>\n      <circle cx=\"322\" cy=\"179\" r=\"3\" fill=\"#ffffff\"/>\n",
    "steps": [
      {
        "title": "1. Adım: Maskeli Baş Kukuletası Dış Konturu",
        "instruction": "Ninjanın maskeli yuvarlak başını çiz.",
        "voice": "Ninjanın maskeli yuvarlak başını çizelim.",
        "svg": "<ellipse cx=\"300\" cy=\"180\" rx=\"75\" ry=\"70\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_1.mp3"
      },
      {
        "title": "2. Adım: Yüz Açıklığı Penceresi (Ten Alanı)",
        "instruction": "Maskenin ortasına gözlerin göründüğü yatay oval yüz açıklığını çiz.",
        "voice": "Maskenin ortasına gözlerin bakacağı yatay pencereyi çizelim.",
        "svg": "<path d=\"M 245 165 C 245 155, 355 155, 355 165 C 355 210, 245 210, 245 165 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"7\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_2.mp3"
      },
      {
        "title": "3. Adım: Alın Koruyucu Metal Plaka Çerçevesi",
        "instruction": "Alnın üstüne metal koruyucu dikdörtgen levhayı çiz.",
        "voice": "Alnın hemen üstüne metal koruyucu plaka dikdörtgenini yapalım.",
        "svg": "<rect x=\"240\" y=\"130\" width=\"120\" height=\"28\" rx=\"6\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_3.mp3"
      },
      {
        "title": "4. Adım: Plaka Köşe Vidaları ve Ninja Yıldızı Amblemi",
        "instruction": "Plakanın iki yanına vida noktaları ve tam ortasına sivri ninja amblemini çiz.",
        "voice": "Plakanın iki yanına vidaları ve tam ortasına ninjanın gizli amblemini çizelim.",
        "svg": "<circle cx=\"248\" cy=\"144\" r=\"3\" fill=\"#0f172a\"/><circle cx=\"352\" cy=\"144\" r=\"3\" fill=\"#0f172a\"/><polygon points=\"300,136 303,142 309,144 303,146 300,152 297,146 291,144 297,142\" fill=\"#0f172a\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_4.mp3"
      },
      {
        "title": "5. Adım: Sol Kararlı Anime Göz Çizgisi",
        "instruction": "Yüz açıklığının soluna keskin, cesur bir üst göz kapağı çizgisi çiz.",
        "voice": "Yüz açıklığının soluna cesur ve kararlı bir göz çizgisi yapalım.",
        "svg": "<path d=\"M 260 175 Q 275 165, 290 178\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_5.mp3"
      },
      {
        "title": "6. Adım: Sol Gözbebeği ve Parlama Işığı",
        "instruction": "Sol gözün içine koyu gözbebeği ve parlayan minik beyaz ışık noktasını koy.",
        "voice": "Sol gözün içine koyu gözbebeğini ve parlayan ışık noktasını çizelim.",
        "svg": "<circle cx=\"275\" cy=\"182\" r=\"9\" fill=\"#0f172a\"/><circle cx=\"272\" cy=\"179\" r=\"3\" fill=\"#ffffff\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_6.mp3"
      },
      {
        "title": "7. Adım: Sağ Kararlı Anime Göz Çizgisi",
        "instruction": "Yüz açıklığının sağına da aynı kararlı üst göz kapağı çizgisini çiz.",
        "voice": "Şimdi sağ tarafa da aynı kararlı göz çizgisini yapalım.",
        "svg": "<path d=\"M 340 175 Q 325 165, 310 178\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_7.mp3"
      },
      {
        "title": "8. Adım: Sağ Gözbebeği ve Parlama Işığı",
        "instruction": "Sağ gözün içine de gözbebeği ve parlayan beyaz ışığı ekle.",
        "voice": "Sağ gözün içine de gözbebeğini ve parlayan ışığı koyalım.",
        "svg": "<circle cx=\"325\" cy=\"182\" r=\"9\" fill=\"#0f172a\"/><circle cx=\"322\" cy=\"179\" r=\"3\" fill=\"#ffffff\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_8.mp3"
      },
      {
        "title": "9. Adım: Rüzgarda Uçuşan Sol Kafa Bandı Şeridi",
        "instruction": "Kafanın sol tarafından geriye doğru dalgalanan birinci kırmızı bandana şeridini çiz.",
        "voice": "Kafanın solundan rüzgarla uçuşan birinci bandana şeridini çizelim.",
        "svg": "<path d=\"M 230 170 C 180 160, 140 210, 95 200 C 130 225, 170 215, 230 190 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_9.mp3"
      },
      {
        "title": "10. Adım: Dalgalanan İkinci Bandana Şeridi",
        "instruction": "Hemen altına rüzgarla dalgalanan ikinci bandana şeridini ekle.",
        "voice": "Hemen altına rüzgarla dalgalanan ikinci kırmızı şeridi yapalım.",
        "svg": "<path d=\"M 230 180 C 170 190, 130 250, 85 250 C 120 270, 160 250, 230 205 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_10.mp3"
      },
      {
        "title": "11. Adım: Omuzlar ve Ninja Giysisi Yan Hatları",
        "instruction": "Kafanın altından aşağıya inen geniş omuzları ve gövde cübbesi hatlarını çiz.",
        "voice": "Kafanın altından aşağıya inen geniş omuzları ve gövde hatlarını çizelim.",
        "svg": "<path d=\"M 250 280 C 230 330, 220 400, 240 485 L 360 485 C 380 400, 370 330, 350 280 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"10\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_11.mp3"
      },
      {
        "title": "12. Adım: Beldeki Geniş Kırmızı Kuşak",
        "instruction": "Gövdenin tam bel kısmına yatay geniş ninja kuşağını çiz.",
        "voice": "Ninjanın beline bağlanan geniş kırmızı kuşağı yapalım.",
        "svg": "<rect x=\"235\" y=\"375\" width=\"130\" height=\"24\" rx=\"6\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_12.mp3"
      },
      {
        "title": "13. Adım: Sol Bükülü Kol ve Yumruk",
        "instruction": "Sol tarafta bükülü duran kolu ve sıkılı yumruğu çiz.",
        "voice": "Sol tarafta bükülü duran kolu ve sıkılı el yumruğunu çizelim.",
        "svg": "<path d=\"M 240 290 L 195 345 L 230 365 L 260 320\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/><circle cx=\"195\" cy=\"355\" r=\"12\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"6\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_13.mp3"
      },
      {
        "title": "14. Adım: Sağ Kol ve Eldivenli El",
        "instruction": "Sağ tarafta silah tutan bükülü kolu ve eldivenli eli çiz.",
        "voice": "Sağ taraftaki kolu ve ninja yıldızını tutan eli çizelim.",
        "svg": "<path d=\"M 360 290 L 405 345 L 370 365 L 340 320\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"9\" stroke-linejoin=\"round\"/><circle cx=\"405\" cy=\"355\" r=\"12\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"6\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_14.mp3"
      },
      {
        "title": "15. Adım: Eldeki Sivri Shuriken (Ninja Yıldızı)",
        "instruction": "Sağ elin hemen ucuna dört sivri köşeli çelik ninja yıldızını çiz.",
        "voice": "Sağ elin ucuna dört sivri köşesi olan çelik ninja yıldızını çizelim.",
        "svg": "<polygon points=\"405,335 410,350 425,355 410,360 405,375 400,360 385,355 400,350\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_15.mp3"
      },
      {
        "title": "16. Adım: Sırttan Uzanan Katana Kılıcı Kını",
        "instruction": "Sağ omzun arkasından yukarıya doğru çapraz uzanan kılıç kınını çiz.",
        "voice": "Omzun arkasından yukarı uzanan kılıç kınını çizelim.",
        "svg": "<path d=\"M 370 190 L 450 110 L 465 125 L 385 205 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_16.mp3"
      },
      {
        "title": "17. Adım: Kılıç El Siperliği ve Örgülü Kabzası",
        "instruction": "Kılıcın el siperliğini ve ucundaki tutma kabzasını tamamla.",
        "voice": "Kılıcın altın el siperliğini ve tuttuğu örgülü kabzayı çizelim.",
        "svg": "<rect x=\"445\" y=\"105\" width=\"25\" height=\"10\" rx=\"3\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"5\" transform=\"rotate(-45 445 105)\"/><path d=\"M 455 100 L 490 65 L 505 80 L 470 115 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_17.mp3"
      },
      {
        "title": "18. Adım: Ninja Bacakları Duruşu ve Ayrım Çizgisi",
        "instruction": "Bacakların ortasına dikey ayrım çizgisini çizerek sağlam duruşu tamamla.",
        "voice": "Bacakların ortasına dikey ayrım çizgisini çizerek sağlam duruşunu yapalım.",
        "svg": "<line x1=\"300\" y1=\"400\" x2=\"300\" y2=\"485\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linecap=\"round\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_18.mp3"
      },
      {
        "title": "19. Adım: Ninjanın Bastığı Gizemli Duman Bulutu",
        "instruction": "Ninjanın ayaklarının altına kıvrımlı gizemli sis dumanı bulutunu çiz.",
        "voice": "Ninjanın bastığı yere gizemli bir duman bulutu çizelim.",
        "svg": "<path d=\"M 120 515 C 160 480, 220 500, 260 485 C 300 470, 360 480, 400 485 C 440 495, 480 480, 500 515 C 450 550, 160 550, 120 515\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>",
        "audio": "audio/voices/cirak_golge_ninja/step_19.mp3"
      },
      {
        "title": "20. Adım: Canlı Gölge Ninja Renkleri",
        "instruction": "Tebrikler Kıvanç! Ninjanı gece siyahı, parlak kırmızı ve gümüş renklerle boya!",
        "voice": "Tebrikler Kıvanç! Gölge Ninjan göreve hazır! Şimdi ninjanı gece siyahı, parlak kırmızı ve gümüş renklerle boya!",
        "svg": "\n          <defs>\n            <linearGradient id=\"ninjaSuit\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#334155\"/>\n              <stop offset=\"60%\" stop-color=\"#1e293b\"/>\n              <stop offset=\"100%\" stop-color=\"#0f172a\"/>\n            </linearGradient>\n            <linearGradient id=\"ninjaRed\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n              <stop offset=\"0%\" stop-color=\"#f87171\"/>\n              <stop offset=\"100%\" stop-color=\"#b91c1c\"/>\n            </linearGradient>\n            <linearGradient id=\"ninjaPlate\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#f1f5f9\"/>\n              <stop offset=\"100%\" stop-color=\"#64748b\"/>\n            </linearGradient>\n            <linearGradient id=\"ninjaSmoke\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stop-color=\"#cbd5e1\"/>\n              <stop offset=\"100%\" stop-color=\"#475569\"/>\n            </linearGradient>\n          </defs>\n          <path d=\"M 120 515 C 160 480, 220 500, 260 485 C 300 470, 360 480, 400 485 C 440 495, 480 480, 500 515 C 450 550, 160 550, 120 515 Z\" fill=\"url(#ninjaSmoke)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n          <path d=\"M 370 190 L 450 110 L 465 125 L 385 205 Z\" fill=\"#94a3b8\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n          <rect x=\"445\" y=\"105\" width=\"25\" height=\"10\" rx=\"3\" fill=\"#ca8a04\" stroke=\"#0f172a\" stroke-width=\"4\" transform=\"rotate(-45 445 105)\"/>\n          <path d=\"M 455 100 L 490 65 L 505 80 L 470 115 Z\" fill=\"url(#ninjaRed)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n          <path d=\"M 230 170 C 180 160, 140 210, 95 200 C 130 225, 170 215, 230 190 Z\" fill=\"url(#ninjaRed)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n          <path d=\"M 230 180 C 170 190, 130 250, 85 250 C 120 270, 160 250, 230 205 Z\" fill=\"url(#ninjaRed)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n          <path d=\"M 250 280 C 230 330, 220 400, 240 485 L 360 485 C 380 400, 370 330, 350 280 Z\" fill=\"url(#ninjaSuit)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n          <rect x=\"235\" y=\"375\" width=\"130\" height=\"24\" rx=\"6\" fill=\"url(#ninjaRed)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n          <line x1=\"300\" y1=\"400\" x2=\"300\" y2=\"485\" stroke=\"#0f172a\" stroke-width=\"8\"/>\n          <path d=\"M 240 290 L 195 345 L 230 365 L 260 320\" fill=\"url(#ninjaSuit)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n          <path d=\"M 360 290 L 405 345 L 370 365 L 340 320\" fill=\"url(#ninjaSuit)\" stroke=\"#0f172a\" stroke-width=\"8\" stroke-linejoin=\"round\"/>\n          <circle cx=\"195\" cy=\"355\" r=\"12\" fill=\"#fed7aa\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n          <circle cx=\"405\" cy=\"355\" r=\"12\" fill=\"#fed7aa\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n          <polygon points=\"405,335 410,350 425,355 410,360 405,375 400,360 385,355 400,350\" fill=\"#94a3b8\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n          <ellipse cx=\"300\" cy=\"180\" rx=\"75\" ry=\"70\" fill=\"url(#ninjaSuit)\" stroke=\"#0f172a\" stroke-width=\"10\"/>\n          <path d=\"M 245 165 C 245 155, 355 155, 355 165 C 355 210, 245 210, 245 165 Z\" fill=\"#fed7aa\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n          <rect x=\"240\" y=\"130\" width=\"120\" height=\"28\" rx=\"6\" fill=\"url(#ninjaPlate)\" stroke=\"#0f172a\" stroke-width=\"7\"/>\n          <circle cx=\"248\" cy=\"144\" r=\"3\" fill=\"#0f172a\"/>\n          <circle cx=\"352\" cy=\"144\" r=\"3\" fill=\"#0f172a\"/>\n          <polygon points=\"300,136 303,142 309,144 303,146 300,152 297,146 291,144 297,142\" fill=\"#0f172a\"/>\n          <path d=\"M 260 175 Q 275 165, 290 178\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n          <circle cx=\"275\" cy=\"182\" r=\"9\" fill=\"#0f172a\"/>\n          <circle cx=\"272\" cy=\"179\" r=\"3\" fill=\"#ffffff\"/>\n          <path d=\"M 340 175 Q 325 165, 310 178\" stroke=\"#0f172a\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n          <circle cx=\"325\" cy=\"182\" r=\"9\" fill=\"#0f172a\"/>\n          <circle cx=\"322\" cy=\"179\" r=\"3\" fill=\"#ffffff\"/>\n",
        "audio": "audio/voices/cirak_golge_ninja/step_20.mp3"
      }
    ],
    "welcomeAudio": "audio/voices/cirak_golge_ninja/welcome.mp3"
  },

  // =========================================================================
  // 🟢 ÇIRAK: SEVIMLI T-REX DINOZOR
  // =========================================================================
  {
    id: "cirak_sevimli_trex",
    categoryId: "dinozorlar",
    name: "Sevimli T-Rex Dinozor",
    emoji: "\ud83e\udd96",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Sevimli ye\u015fil dinozor Rexi ile tarih \u00f6ncesine yolculuk! Yuvarlak hatlar ve ne\u015feli g\u00fcl\u00fcmseme.",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, ye\u015fil ve sar\u0131 boya kalemleri",
    welcomeText: "Merhaba K\u0131van\u00e7! Ben sevimli dinozor Rexi. Ka\u011f\u0131d\u0131n\u0131 ve boyalar\u0131n\u0131 haz\u0131rla, birlikte kocaman g\u00fcl\u00fcmseyen bir T-Rex \u00e7izece\u011fiz!",
    welcomeAudio: "audio/voices/cirak_sevimli_trex/welcome.mp3",
    colors: ["#22c55e", "#15803d", "#fef08a", "#0f172a"],
    previewSvg: `
          <defs>
            <linearGradient id="rexBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#4ade80"/>
              <stop offset="60%" stop-color="#22c55e"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
            <linearGradient id="rexBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
            <linearGradient id="rexGround" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#86efac"/>
              <stop offset="100%" stop-color="#22c55e"/>
            </linearGradient>
          </defs>
          <ellipse cx="260" cy="470" rx="190" ry="25" fill="url(#rexGround)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 215 380 C 150 400, 110 360, 80 320 C 110 380, 160 440, 215 450 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 210 220 L 195 230 L 205 245 L 190 255 L 202 270 L 188 285 L 200 300 Z" fill="#eab308" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 255 410 L 265 455 L 305 455 L 295 410 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="280" cy="457" r="4.5" fill="#fef08a" stroke="#0f172a" stroke-width="3"/>
          <circle cx="295" cy="457" r="4.5" fill="#fef08a" stroke="#0f172a" stroke-width="3"/>
          <path d="M 215 340 C 170 370, 175 435, 215 455 L 255 455 C 265 425, 255 350, 215 340 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <circle cx="210" cy="457" r="5" fill="#fef08a" stroke="#0f172a" stroke-width="3.5"/>
          <circle cx="225" cy="457" r="5" fill="#fef08a" stroke="#0f172a" stroke-width="3.5"/>
          <circle cx="240" cy="457" r="5" fill="#fef08a" stroke="#0f172a" stroke-width="3.5"/>
          <path d="M 230 190 C 200 230, 190 310, 215 380 L 255 435 C 280 380, 275 320, 255 255 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 255 255 C 275 320, 280 380, 255 435 L 225 435 C 240 375, 240 320, 235 270 Z" fill="url(#rexBelly)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 255 330 C 275 345, 275 365, 255 380 M 250 385 C 270 400, 270 420, 250 430" fill="none" stroke="#ca8a04" stroke-width="5" stroke-linecap="round"/>
          <path d="M 250 295 C 275 300, 285 290, 280 312 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 275 305 C 315 315, 325 300, 320 330 C 300 335, 280 328, 270 322 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 230 190 C 230 115, 360 110, 420 170 C 445 205, 415 245, 345 245 C 370 285, 290 295, 255 255 C 230 240, 230 210, 230 190 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 345 245 C 370 285, 290 295, 255 255 Z" fill="#991b1b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 355 245 L 365 257 L 375 245 M 385 245 L 395 257 L 405 245" fill="#ffffff" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <ellipse cx="325" cy="165" rx="26" ry="30" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <circle cx="332" cy="167" r="14" fill="#0f172a"/>
          <circle cx="326" cy="160" r="6" fill="#ffffff"/>
          <circle cx="337" cy="173" r="3" fill="#ffffff"/>
          <circle cx="415" cy="185" r="4.5" fill="#0f172a"/>
          <path d="M 300 135 Q 325 125, 350 135" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="280" cy="140" r="4" fill="#15803d"/>
          <circle cx="265" cy="155" r="3.5" fill="#15803d"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Yuvarlak Al\u0131n ve Ba\u015f Tepesi",
        instruction: "Ka\u011f\u0131d\u0131n \u00fcst k\u0131sm\u0131na dinozorun yuvarlak aln\u0131n\u0131 ve ba\u015f tepesini \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst taraf\u0131na sevimli dinozor Rexi'nin yuvarlak aln\u0131n\u0131 ve ba\u015f tepesini \u00e7izelim.",
        svg: `<path d="M 230 190 C 230 115, 360 110, 420 170" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Burun ve \u00dcst \u00c7ene",
        instruction: "Kafan\u0131n ucundan a\u015fa\u011f\u0131 do\u011fru ne\u015feli \u00fcst \u00e7eneyi k\u0131v\u0131r.",
        voice: "\u015eimdi kafan\u0131n ucundan a\u015fa\u011f\u0131 do\u011fru sevimli bir burun ve \u00fcst \u00e7ene k\u0131vr\u0131m\u0131 yapal\u0131m.",
        svg: `<path d="M 420 170 C 445 205, 415 245, 345 245" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Alt \u00c7ene ve Kocaman G\u00fcl\u00fcmseme",
        instruction: "A\u011fz\u0131n alt\u0131ndan geriye do\u011fru g\u00fclen alt \u00e7eneyi tamamla.",
        voice: "Harika! \u015eimdi a\u011fz\u0131n alt\u0131ndan geriye do\u011fru kocaman g\u00fclen alt \u00e7eneyi \u00e7izelim.",
        svg: `<path d="M 345 245 C 370 285, 290 295, 255 255" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Sevimli Dinozor Di\u015fleri",
        instruction: "A\u011fz\u0131n i\u00e7ine k\u00fc\u00e7\u00fck, dost canl\u0131s\u0131 \u00fc\u00e7gen di\u015fler ekle.",
        voice: "A\u011fz\u0131m\u0131z\u0131n i\u00e7ine k\u00fc\u00e7\u00fck ve tatl\u0131 \u00fc\u00e7gen dinozor di\u015fleri ekleyelim. Korkutucu de\u011fil, \u00e7ok sevimli!",
        svg: `<path d="M 355 245 L 365 257 L 375 245 M 385 245 L 395 257 L 405 245" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Burun Deli\u011fi ve Yanak Gamzesi",
        instruction: "Burnun ucuna k\u00fc\u00e7\u00fck bir nokta, yana\u011fa tatl\u0131 bir gamze koy.",
        voice: "Burnun ucuna minik bir burun deli\u011fi ve yana\u011f\u0131na tatl\u0131 bir gamze \u00e7izgisi kondural\u0131m.",
        svg: `<circle cx="415" cy="185" r="4.5" fill="#0f172a"/><path d="M 265 240 Q 255 250, 260 260" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: B\u00fcy\u00fck Parlak G\u00f6z Yuvarla\u011f\u0131",
        instruction: "Kafan\u0131n ortas\u0131na kocaman, merakl\u0131 bir g\u00f6z \u00e7emberi \u00e7iz.",
        voice: "\u015eimdi kafan\u0131n ortas\u0131na kocaman ve merakl\u0131 bir g\u00f6z \u00e7emberi \u00e7izelim.",
        svg: `<ellipse cx="325" cy="165" rx="26" ry="30" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: G\u00f6zbebe\u011fi ve \u00c7ifte I\u015f\u0131k Parlamas\u0131",
        instruction: "G\u00f6z\u00fcn i\u00e7ine simsiyah bir g\u00f6zbebe\u011fi ve iki tane beyaz \u0131\u015f\u0131k parlamas\u0131 ekle.",
        voice: "G\u00f6z\u00fcn i\u00e7ine siyah g\u00f6zbebe\u011fini boyayal\u0131m ve i\u00e7ine iki tane parlak beyaz \u0131\u015f\u0131k kondural\u0131m.",
        svg: `<circle cx="332" cy="167" r="14" fill="#0f172a"/><circle cx="326" cy="160" r="6" fill="#ffffff"/><circle cx="337" cy="173" r="3" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Ne\u015feli Ka\u015f ve Al\u0131n Benekleri",
        instruction: "G\u00f6z\u00fcn \u00fcst\u00fcne tatl\u0131 bir ka\u015f ve aln\u0131na \u00fc\u00e7 minik benek yap.",
        voice: "G\u00f6z\u00fcn \u00fcst\u00fcne ne\u015feli bir ka\u015f k\u0131vr\u0131m\u0131 ve aln\u0131na \u00fc\u00e7 tane sevimli dinozor bene\u011fi ekleyelim.",
        svg: `<path d="M 300 135 Q 325 125, 350 135" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><circle cx="280" cy="140" r="4" fill="#0f172a"/><circle cx="265" cy="155" r="3.5" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Ense ve S\u0131rt Hatt\u0131",
        instruction: "Kafan\u0131n arkas\u0131ndan a\u015fa\u011f\u0131 do\u011fru s\u0131rt \u00e7izgisini uzat.",
        voice: "Kafan\u0131n arkas\u0131ndan a\u015fa\u011f\u0131 do\u011fru dinozorumuzun g\u00fc\u00e7l\u00fc s\u0131rt \u00e7izgisini \u00e7izelim.",
        svg: `<path d="M 230 190 C 200 230, 190 310, 215 380" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Boyun ve Tombi\u015f Kar\u0131n",
        instruction: "\u00c7enenin alt\u0131ndan a\u015fa\u011f\u0131ya tombul g\u00f6be\u011fin \u00f6n \u00e7izgisini indir.",
        voice: "\u00c7enenin alt\u0131ndan a\u015fa\u011f\u0131 do\u011fru Rexi'nin tombul ve sevimli g\u00f6bek \u00e7izgisini indirelim.",
        svg: `<path d="M 255 255 C 275 320, 280 380, 255 435" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Minik \u00d6n Kol (Sa\u011f)",
        instruction: "T-Rex'in \u00fcnl\u00fc minicik \u00f6n kolunu \u00e7iz ve parmaklar\u0131n\u0131 ekle.",
        voice: "\u0130\u015fte T-Rex'lerin en sevimli yeri! K\u00fc\u00e7\u00fcc\u00fck \u00f6n kolunu ve minik parmaklar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 275 305 C 315 315, 325 300, 320 330 C 300 335, 280 328, 270 322" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><line x1="318" y1="318" x2="326" y2="324" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Di\u011fer \u00d6n Kol (Sol)",
        instruction: "G\u00f6vdenin arkas\u0131nda kalan di\u011fer k\u00fc\u00e7\u00fck kolu da g\u00f6ster.",
        voice: "G\u00f6vdenin di\u011fer taraf\u0131ndaki ne\u015feli k\u00fc\u00e7\u00fck kolunu da selam verir gibi ekleyelim.",
        svg: `<path d="M 250 295 C 275 300, 285 290, 280 312" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: G\u00fc\u00e7l\u00fc Arka Bacak ve But",
        instruction: "S\u0131rt\u0131n alt\u0131ndan yere do\u011fru kavisli g\u00fc\u00e7l\u00fc dinozor budunu \u00e7iz.",
        voice: "Dinozorumuzun h\u0131zl\u0131 ko\u015fmas\u0131n\u0131 sa\u011flayan g\u00fc\u00e7l\u00fc arka budunu ve dizini kavisle \u00e7izelim.",
        svg: `<path d="M 215 340 C 170 370, 175 435, 215 455" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: B\u00fcy\u00fck Ayak ve Yuvarlak Pen\u00e7eler",
        instruction: "Baca\u011f\u0131n ucuna yere basan taban\u0131 ve \u00fc\u00e7 sevimli pen\u00e7eyi yap.",
        voice: "Baca\u011f\u0131n alt\u0131na yere sa\u011flam basan geni\u015f aya\u011f\u0131n\u0131 ve \u00fc\u00e7 tane yuvarlak t\u0131rna\u011f\u0131n\u0131 yapal\u0131m.",
        svg: `<path d="M 195 455 L 255 455" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><circle cx="210" cy="457" r="5" fill="#0f172a"/><circle cx="225" cy="457" r="5" fill="#0f172a"/><circle cx="240" cy="457" r="5" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Di\u011fer Bacak ve Zemin Deste\u011fi",
        instruction: "\u00d6n taraftaki destek baca\u011f\u0131n\u0131 ve aya\u011f\u0131n\u0131 \u00e7iz.",
        voice: "\u00d6n tarafta duran di\u011fer aya\u011f\u0131n\u0131 ve t\u0131rnaklar\u0131n\u0131 da \u00e7izerek dinozorumuzu sa\u011flamca yere bast\u0131ral\u0131m.",
        svg: `<path d="M 255 410 L 265 455 L 305 455" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="280" cy="457" r="4.5" fill="#0f172a"/><circle cx="295" cy="457" r="4.5" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Yukar\u0131 K\u0131vr\u0131lan Uzun Kuyruk",
        instruction: "S\u0131rt\u0131n ucundan arkaya do\u011fru ne\u015feyle sallanan kuyru\u011fu k\u0131v\u0131r.",
        voice: "\u00c7ok iyi gidiyorsun K\u0131van\u00e7! \u015eimdi arkaya do\u011fru ne\u015feyle sallanan uzun dinozor kuyru\u011funu \u00e7izelim.",
        svg: `<path d="M 215 380 C 150 400, 110 360, 80 320 C 110 380, 160 440, 215 450" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: S\u0131rt Dikenleri ve Kar\u0131n \u00c7izgileri",
        instruction: "S\u0131rt boyunca k\u00fc\u00e7\u00fck yumu\u015fak \u00fc\u00e7genler ve kar\u0131n \u00e7izgilerini ekle.",
        voice: "S\u0131rt\u0131na sevimli k\u00fc\u00e7\u00fck dinozor dikenleri ve g\u00f6be\u011fine yumu\u015fak \u00e7izgiler ekleyerek detaylar\u0131 tamamlayal\u0131m.",
        svg: `<path d="M 210 220 L 195 230 L 205 245 L 190 255 L 202 270 L 188 285 L 200 300" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 255 330 C 275 345, 275 365, 255 380 M 250 385 C 270 400, 270 420, 250 430" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sevimli_trex/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve Tarih \u00d6ncesi Zemin",
        instruction: "Tebrikler K\u0131van\u00e7! Rexi'yi en g\u00fczel ye\u015fil ve sar\u0131 renklerinle canland\u0131r!",
        voice: "Tebrikler K\u0131van\u00e7! \u00c7izimin harika oldu. \u015eimdi Rexi'yi ye\u015fil ve sar\u0131 boyalar\u0131nla canland\u0131r\u0131p \u00e7imlerin \u00fcst\u00fcne yerle\u015ftir!",
        svg: `
          <defs>
            <linearGradient id="rexBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#4ade80"/>
              <stop offset="60%" stop-color="#22c55e"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
            <linearGradient id="rexBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
            <linearGradient id="rexGround" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#86efac"/>
              <stop offset="100%" stop-color="#22c55e"/>
            </linearGradient>
          </defs>
          <ellipse cx="260" cy="470" rx="190" ry="25" fill="url(#rexGround)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 215 380 C 150 400, 110 360, 80 320 C 110 380, 160 440, 215 450 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 210 220 L 195 230 L 205 245 L 190 255 L 202 270 L 188 285 L 200 300 Z" fill="#eab308" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 255 410 L 265 455 L 305 455 L 295 410 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="280" cy="457" r="4.5" fill="#fef08a" stroke="#0f172a" stroke-width="3"/>
          <circle cx="295" cy="457" r="4.5" fill="#fef08a" stroke="#0f172a" stroke-width="3"/>
          <path d="M 215 340 C 170 370, 175 435, 215 455 L 255 455 C 265 425, 255 350, 215 340 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <circle cx="210" cy="457" r="5" fill="#fef08a" stroke="#0f172a" stroke-width="3.5"/>
          <circle cx="225" cy="457" r="5" fill="#fef08a" stroke="#0f172a" stroke-width="3.5"/>
          <circle cx="240" cy="457" r="5" fill="#fef08a" stroke="#0f172a" stroke-width="3.5"/>
          <path d="M 230 190 C 200 230, 190 310, 215 380 L 255 435 C 280 380, 275 320, 255 255 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 255 255 C 275 320, 280 380, 255 435 L 225 435 C 240 375, 240 320, 235 270 Z" fill="url(#rexBelly)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 255 330 C 275 345, 275 365, 255 380 M 250 385 C 270 400, 270 420, 250 430" fill="none" stroke="#ca8a04" stroke-width="5" stroke-linecap="round"/>
          <path d="M 250 295 C 275 300, 285 290, 280 312 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 275 305 C 315 315, 325 300, 320 330 C 300 335, 280 328, 270 322 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 230 190 C 230 115, 360 110, 420 170 C 445 205, 415 245, 345 245 C 370 285, 290 295, 255 255 C 230 240, 230 210, 230 190 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 345 245 C 370 285, 290 295, 255 255 Z" fill="#991b1b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 355 245 L 365 257 L 375 245 M 385 245 L 395 257 L 405 245" fill="#ffffff" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <ellipse cx="325" cy="165" rx="26" ry="30" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <circle cx="332" cy="167" r="14" fill="#0f172a"/>
          <circle cx="326" cy="160" r="6" fill="#ffffff"/>
          <circle cx="337" cy="173" r="3" fill="#ffffff"/>
          <circle cx="415" cy="185" r="4.5" fill="#0f172a"/>
          <path d="M 300 135 Q 325 125, 350 135" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="280" cy="140" r="4" fill="#15803d"/>
          <circle cx="265" cy="155" r="3.5" fill="#15803d"/>
`,
        audio: "audio/voices/cirak_sevimli_trex/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🟢 ÇIRAK: SEVIMLI YAVRU ASLAN
  // =========================================================================
  {
    id: "cirak_yavru_aslan",
    categoryId: "hayvanlar",
    name: "Sevimli Yavru Aslan",
    emoji: "\ud83e\udd81",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Ormanlar\u0131n sevimli k\u00fc\u00e7\u00fck prensi yavru aslan Simbi! Pofuduk yelesi ve s\u0131cac\u0131k g\u00fcl\u00fcmsemesi.",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, sar\u0131, turuncu ve kahverengi boyalar",
    welcomeText: "Selam K\u0131van\u00e7! Ormanlar\u0131n sevimli prensi k\u00fc\u00e7\u00fck aslan Simbi burada! Haz\u0131rsan birlikte harika bir aslan \u00e7izelim!",
    welcomeAudio: "audio/voices/cirak_yavru_aslan/welcome.mp3",
    colors: ["#fbbf24", "#f59e0b", "#d97706", "#fef08a"],
    previewSvg: `
          <defs>
            <linearGradient id="lionBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fde047"/>
              <stop offset="60%" stop-color="#fbbf24"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
            <linearGradient id="lionMane" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#b45309"/>
            </linearGradient>
            <linearGradient id="lionBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef9c3"/>
              <stop offset="100%" stop-color="#fef08a"/>
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="470" rx="180" ry="22" fill="#84cc16" stroke="#0f172a" stroke-width="6"/>
          <path d="M 380 420 C 450 420, 480 360, 465 300" stroke="#f59e0b" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M 380 420 C 450 420, 480 360, 465 300" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/>
          <path d="M 465 300 C 450 270, 490 250, 490 280 C 500 300, 480 320, 465 300 Z" fill="url(#lionMane)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 215 380 C 180 410, 180 460, 240 460 L 255 460 C 255 420, 240 390, 215 380 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 385 380 C 420 410, 420 460, 360 460 L 345 460 C 345 420, 360 390, 385 380 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 350 L 245 440 C 245 460, 290 460, 290 440 L 285 375 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="260" y1="445" x2="260" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <line x1="275" y1="445" x2="275" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <path d="M 315 375 L 310 440 C 310 460, 355 460, 355 440 L 345 350 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="325" y1="445" x2="325" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <line x1="340" y1="445" x2="340" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <path d="M 270 300 C 260 340, 275 375, 300 380 C 325 375, 340 340, 330 300 Z" fill="url(#lionBelly)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 220 150 C 170 140, 150 200, 180 240 C 140 270, 160 330, 210 330 C 180 370, 240 400, 270 380 C 330 400, 360 400, 390 330 C 440 330, 460 270, 420 240 C 450 200, 430 140, 380 150 C 350 110, 250 110, 220 150 Z" fill="url(#lionMane)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 215 150 C 185 130, 190 85, 240 100 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 210 135 C 195 120, 200 98, 230 108 Z" fill="#fda4af" stroke="#0f172a" stroke-width="5"/>
          <path d="M 385 150 C 415 130, 410 85, 360 100 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 390 135 C 405 120, 400 98, 370 108 Z" fill="#fda4af" stroke="#0f172a" stroke-width="5"/>
          <path d="M 230 240 C 200 180, 220 130, 300 130 C 380 130, 400 180, 370 240 C 365 300, 235 300, 230 240 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <ellipse cx="265" cy="180" rx="18" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="268" cy="182" r="11" fill="#0f172a"/>
          <circle cx="264" cy="177" r="5" fill="#ffffff"/>
          <circle cx="272" cy="186" r="2.5" fill="#ffffff"/>
          <ellipse cx="335" cy="180" rx="18" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="332" cy="182" r="11" fill="#0f172a"/>
          <circle cx="328" cy="177" r="5" fill="#ffffff"/>
          <circle cx="336" cy="186" r="2.5" fill="#ffffff"/>
          <path d="M 250 152 Q 265 142, 280 150 M 320 150 Q 335 142, 350 152" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <ellipse cx="300" cy="250" rx="42" ry="25" fill="url(#lionBelly)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 285 215 C 290 210, 310 210, 315 215 C 315 225, 300 238, 300 238 C 300 238, 285 225, 285 215 Z" fill="#991b1b" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 300 238 L 300 252 M 300 252 C 285 268, 260 262, 255 248 M 300 252 C 315 268, 340 262, 345 248" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
          <circle cx="270" cy="245" r="2.5" fill="#0f172a"/>
          <circle cx="278" cy="248" r="2.5" fill="#0f172a"/>
          <circle cx="330" cy="245" r="2.5" fill="#0f172a"/>
          <circle cx="322" cy="248" r="2.5" fill="#0f172a"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Yuvarlak Kafa ve Al\u0131n",
        instruction: "Ka\u011f\u0131d\u0131n ortas\u0131na yavru aslan\u0131n tatl\u0131 yuvarlak kafa \u00e7izgisini yap.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n tam ortas\u0131na yavru aslan\u0131m\u0131z\u0131n tombi\u015f yuvarlak kafa hatt\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 230 240 C 200 180, 220 130, 300 130 C 380 130, 400 180, 370 240" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Tombi\u015f Yanaklar ve \u00c7ene",
        instruction: "Kafan\u0131n alt\u0131n\u0131 geni\u015f ve sevimli bir \u00e7ene kavisiyle birle\u015ftir.",
        voice: "\u015eimdi yanaklar\u0131 ve \u00e7eneyi birle\u015ftiren tombul bir g\u00fcl\u00fcmseme kasesi \u00e7izelim.",
        svg: `<path d="M 230 240 C 235 300, 365 300, 370 240" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Pofuduk Yele Bukleleri",
        instruction: "Kafan\u0131n etraf\u0131na bulut gibi puf puf yele k\u0131vr\u0131mlar\u0131 \u00e7iz.",
        voice: "Kafan\u0131n etraf\u0131na pamuk \u015feker gibi pofuduk yele bukleleri yapal\u0131m.",
        svg: `<path d="M 220 150 C 170 140, 150 200, 180 240 C 140 270, 160 330, 210 330 C 180 370, 240 400, 270 380 M 380 150 C 430 140, 450 200, 420 240 C 460 270, 440 330, 390 330 C 420 370, 360 400, 330 380" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Sol Yuvarlak Kulak",
        instruction: "Kafan\u0131n sol \u00fcst\u00fcne tatl\u0131, yuvarlak bir kulak ve i\u00e7ine k\u0131vr\u0131m ekle.",
        voice: "Kafan\u0131n sol \u00fcst k\u00f6\u015fesine yuvarlak bir kulak ve i\u00e7ine minik bir k\u0131vr\u0131m kondural\u0131m.",
        svg: `<path d="M 215 150 C 185 130, 190 85, 240 100" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 210 135 C 195 120, 200 98, 230 108" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Sa\u011f Yuvarlak Kulak",
        instruction: "Ayn\u0131 \u015fekilde sa\u011f tarafa da yuvarlak kula\u011f\u0131 \u00e7iz.",
        voice: "\u015eimdi sa\u011f tarafa da ayn\u0131 sevimli yuvarlak kula\u011f\u0131 \u00e7izelim.",
        svg: `<path d="M 385 150 C 415 130, 410 85, 360 100" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 390 135 C 405 120, 400 98, 370 108" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Sevimli Kalp Burun",
        instruction: "Y\u00fcz\u00fcn tam ortas\u0131na k\u00fc\u00e7\u00fck, tatl\u0131 bir kalp burun yerle\u015ftir.",
        voice: "Y\u00fcz\u00fcn tam ortas\u0131na k\u00fc\u00e7\u00fck ve parlak bir kalp \u015feklinde burun koyal\u0131m.",
        svg: `<path d="M 285 215 C 290 210, 310 210, 315 215 C 315 225, 300 238, 300 238 C 300 238, 285 225, 285 215 Z" fill="#0f172a" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: G\u00fclen Kedi A\u011fz\u0131",
        instruction: "Burnun alt\u0131ndan iki yana k\u0131vr\u0131lan 'W' \u015feklinde bir g\u00fcl\u00fcmseme yap.",
        voice: "Burnun alt\u0131ndan iki yana k\u0131vr\u0131lan \u00e7ok tatl\u0131 bir g\u00fcl\u00fcmseme \u00e7izgisi \u00e7izelim.",
        svg: `<path d="M 300 238 L 300 252 M 300 252 C 285 268, 260 262, 255 248 M 300 252 C 315 268, 340 262, 345 248" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Sol B\u00fcy\u00fck Parlak G\u00f6z",
        instruction: "Sol tarafa kocaman bir g\u00f6z yuvarla\u011f\u0131, siyah g\u00f6zbebe\u011fi ve beyaz par\u0131lt\u0131lar yap.",
        voice: "Sol tarafa kocaman bir g\u00f6z \u00e7izelim, i\u00e7ine siyah g\u00f6zbebe\u011fini ve par\u0131lt\u0131lar\u0131 ekleyelim.",
        svg: `<ellipse cx="265" cy="180" rx="18" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="268" cy="182" r="11" fill="#0f172a"/><circle cx="264" cy="177" r="5" fill="#ffffff"/><circle cx="272" cy="186" r="2.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Sa\u011f B\u00fcy\u00fck Parlak G\u00f6z",
        instruction: "Sa\u011f tarafa da ayn\u0131 \u015fekilde \u0131\u015f\u0131l \u0131\u015f\u0131l parlayan g\u00f6z\u00fc \u00e7iz.",
        voice: "Sa\u011f tarafa da ayn\u0131 \u0131\u015f\u0131l \u0131\u015f\u0131l g\u00f6z\u00fc kondural\u0131m, aslan\u0131m\u0131z bize cana yak\u0131n baks\u0131n!",
        svg: `<ellipse cx="335" cy="180" rx="18" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="332" cy="182" r="11" fill="#0f172a"/><circle cx="328" cy="177" r="5" fill="#ffffff"/><circle cx="336" cy="186" r="2.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: B\u0131y\u0131k Noktalar\u0131 ve Ka\u015flar",
        instruction: "Yanaklara \u00fc\u00e7er b\u0131y\u0131k noktas\u0131 ve g\u00f6zlerin \u00fcst\u00fcne ne\u015feli ka\u015flar ekle.",
        voice: "Yanaklar\u0131na \u00fc\u00e7er minik b\u0131y\u0131k noktas\u0131 ve g\u00f6zlerin \u00fcst\u00fcne sevimli ka\u015flar ekleyelim.",
        svg: `<circle cx="270" cy="245" r="2.5" fill="#0f172a"/><circle cx="278" cy="248" r="2.5" fill="#0f172a"/><circle cx="272" cy="253" r="2.5" fill="#0f172a"/><circle cx="330" cy="245" r="2.5" fill="#0f172a"/><circle cx="322" cy="248" r="2.5" fill="#0f172a"/><circle cx="328" cy="253" r="2.5" fill="#0f172a"/><path d="M 250 152 Q 265 142, 280 150 M 320 150 Q 335 142, 350 152" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Pofuduk G\u00f6\u011f\u00fcs Yelesi",
        instruction: "\u00c7enenin alt\u0131ndan g\u00f6\u011fse do\u011fru yumu\u015fak beyaz t\u00fcy k\u0131vr\u0131m\u0131n\u0131 yap.",
        voice: "\u00c7enenin alt\u0131ndan a\u015fa\u011f\u0131ya yumu\u015fac\u0131k g\u00f6\u011f\u00fcs t\u00fcylerini \u00e7izelim.",
        svg: `<path d="M 270 300 C 260 340, 275 375, 300 380 C 325 375, 340 340, 330 300" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Sol \u00d6n Bacak ve Pati",
        instruction: "A\u015fa\u011f\u0131ya d\u00fcz bir bacak ve \u00fc\u00e7 yuvarlak parmakl\u0131 sevimli pati \u00e7iz.",
        voice: "A\u015fa\u011f\u0131ya do\u011fru tombi\u015f \u00f6n baca\u011f\u0131 ve \u00fc\u00e7 parmakl\u0131 sevimli patiyi \u00e7izelim.",
        svg: `<path d="M 255 350 L 245 440 C 245 460, 290 460, 290 440 L 285 375" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><line x1="260" y1="445" x2="260" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="275" y1="445" x2="275" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Sa\u011f \u00d6n Bacak ve Pati",
        instruction: "Yan\u0131na ikinci \u00f6n baca\u011f\u0131 ve pati parmaklar\u0131n\u0131 ekle.",
        voice: "Hemen yan\u0131na ikinci \u00f6n baca\u011f\u0131 da \u00e7izelim, patileri yan yana dursun.",
        svg: `<path d="M 315 375 L 310 440 C 310 460, 355 460, 355 440 L 345 350" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><line x1="325" y1="445" x2="325" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="340" y1="445" x2="340" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Oturan Arka Bacaklar",
        instruction: "\u0130ki yana uslu uslu oturan arka bacak kavislerini \u00e7iz.",
        voice: "Harika! \u0130ki yana uslu uslu yere oturan arka bacak k\u0131vr\u0131mlar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 215 380 C 180 410, 180 460, 240 460 M 385 380 C 420 410, 420 460, 360 460" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: K\u0131vr\u0131lan Ne\u015feli Kuyruk",
        instruction: "Arka taraftan yukar\u0131ya do\u011fru k\u0131vr\u0131lan ne\u015feli bir kuyruk uzat.",
        voice: "Arka taraftan yukar\u0131 do\u011fru sallanan ne\u015feli ince kuyruk \u00e7izgisini uzatal\u0131m.",
        svg: `<path d="M 380 420 C 450 420, 480 360, 465 300" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: P\u00fcsk\u00fcll\u00fc Kuyruk Ucu",
        instruction: "Kuyru\u011fun ucuna f\u0131r\u00e7a gibi kabar\u0131k t\u00fcyl\u00fc p\u00fcsk\u00fcl\u00fc yap.",
        voice: "Kuyru\u011fun en ucuna f\u0131r\u00e7a gibi kabar\u0131k ve sevimli p\u00fcsk\u00fcl\u00fcn\u00fc ekleyelim.",
        svg: `<path d="M 465 300 C 450 270, 490 250, 490 280 C 500 300, 480 320, 465 300 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Savana \u00c7imleri ve \u00c7i\u00e7ekler",
        instruction: "Ayaklar\u0131n\u0131n alt\u0131na k\u00fc\u00e7\u00fck \u00e7im yapraklar\u0131 ekle.",
        voice: "Patilerinin alt\u0131na sevimli savana \u00e7imleri \u00e7izerek zemin detay\u0131n\u0131 olu\u015ftural\u0131m.",
        svg: `<path d="M 160 470 L 170 450 L 180 470 M 420 470 L 430 448 L 440 470 M 295 470 L 305 452 L 315 470" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_yavru_aslan/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve Alt\u0131n G\u00fcne\u015f I\u015f\u0131\u011f\u0131",
        instruction: "Tebrikler K\u0131van\u00e7! Simbi'yi s\u0131cac\u0131k alt\u0131n sar\u0131s\u0131 ve turuncu renklerinle boya!",
        voice: "Harikas\u0131n K\u0131van\u00e7! Yavru aslan\u0131m\u0131z muhte\u015fem oldu. \u015eimdi onu alt\u0131n sar\u0131s\u0131 ve bal rengi boyalar\u0131nla \u0131\u015f\u0131l \u0131\u015f\u0131l renklendir!",
        svg: `
          <defs>
            <linearGradient id="lionBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fde047"/>
              <stop offset="60%" stop-color="#fbbf24"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
            <linearGradient id="lionMane" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#b45309"/>
            </linearGradient>
            <linearGradient id="lionBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef9c3"/>
              <stop offset="100%" stop-color="#fef08a"/>
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="470" rx="180" ry="22" fill="#84cc16" stroke="#0f172a" stroke-width="6"/>
          <path d="M 380 420 C 450 420, 480 360, 465 300" stroke="#f59e0b" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M 380 420 C 450 420, 480 360, 465 300" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/>
          <path d="M 465 300 C 450 270, 490 250, 490 280 C 500 300, 480 320, 465 300 Z" fill="url(#lionMane)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 215 380 C 180 410, 180 460, 240 460 L 255 460 C 255 420, 240 390, 215 380 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 385 380 C 420 410, 420 460, 360 460 L 345 460 C 345 420, 360 390, 385 380 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 350 L 245 440 C 245 460, 290 460, 290 440 L 285 375 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="260" y1="445" x2="260" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <line x1="275" y1="445" x2="275" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <path d="M 315 375 L 310 440 C 310 460, 355 460, 355 440 L 345 350 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="325" y1="445" x2="325" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <line x1="340" y1="445" x2="340" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <path d="M 270 300 C 260 340, 275 375, 300 380 C 325 375, 340 340, 330 300 Z" fill="url(#lionBelly)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 220 150 C 170 140, 150 200, 180 240 C 140 270, 160 330, 210 330 C 180 370, 240 400, 270 380 C 330 400, 360 400, 390 330 C 440 330, 460 270, 420 240 C 450 200, 430 140, 380 150 C 350 110, 250 110, 220 150 Z" fill="url(#lionMane)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 215 150 C 185 130, 190 85, 240 100 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 210 135 C 195 120, 200 98, 230 108 Z" fill="#fda4af" stroke="#0f172a" stroke-width="5"/>
          <path d="M 385 150 C 415 130, 410 85, 360 100 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 390 135 C 405 120, 400 98, 370 108 Z" fill="#fda4af" stroke="#0f172a" stroke-width="5"/>
          <path d="M 230 240 C 200 180, 220 130, 300 130 C 380 130, 400 180, 370 240 C 365 300, 235 300, 230 240 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <ellipse cx="265" cy="180" rx="18" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="268" cy="182" r="11" fill="#0f172a"/>
          <circle cx="264" cy="177" r="5" fill="#ffffff"/>
          <circle cx="272" cy="186" r="2.5" fill="#ffffff"/>
          <ellipse cx="335" cy="180" rx="18" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="332" cy="182" r="11" fill="#0f172a"/>
          <circle cx="328" cy="177" r="5" fill="#ffffff"/>
          <circle cx="336" cy="186" r="2.5" fill="#ffffff"/>
          <path d="M 250 152 Q 265 142, 280 150 M 320 150 Q 335 142, 350 152" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <ellipse cx="300" cy="250" rx="42" ry="25" fill="url(#lionBelly)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 285 215 C 290 210, 310 210, 315 215 C 315 225, 300 238, 300 238 C 300 238, 285 225, 285 215 Z" fill="#991b1b" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 300 238 L 300 252 M 300 252 C 285 268, 260 262, 255 248 M 300 252 C 315 268, 340 262, 345 248" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
          <circle cx="270" cy="245" r="2.5" fill="#0f172a"/>
          <circle cx="278" cy="248" r="2.5" fill="#0f172a"/>
          <circle cx="330" cy="245" r="2.5" fill="#0f172a"/>
          <circle cx="322" cy="248" r="2.5" fill="#0f172a"/>
`,
        audio: "audio/voices/cirak_yavru_aslan/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🟢 ÇIRAK: DEV CANAVAR KAMYON
  // =========================================================================
  {
    id: "cirak_canavar_kamyon",
    categoryId: "arabalar",
    name: "Dev Canavar Kamyon",
    emoji: "\ud83d\udefb",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Devasa tekerlekler, g\u00fc\u00e7l\u00fc s\u00fcspansiyonlar ve alev desenleri! K\u0131van\u00e7'\u0131n s\u00fcper g\u00fc\u00e7l\u00fc Monster Truck'\u0131.",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, cetvel (iste\u011fe ba\u011fl\u0131), mavi, turuncu ve siyah boyalar",
    welcomeText: "V\u0131\u0131\u0131n v\u0131\u0131\u0131n! Merhaba K\u0131van\u00e7! Dev tekerlekli, s\u00fcper g\u00fc\u00e7l\u00fc canavar kamyonu \u00e7izmeye haz\u0131r m\u0131s\u0131n? Hadi motorlar\u0131 \u00e7al\u0131\u015ft\u0131ral\u0131m!",
    welcomeAudio: "audio/voices/cirak_canavar_kamyon/welcome.mp3",
    colors: ["#3b82f6", "#1d4ed8", "#f97316", "#1e293b"],
    previewSvg: `
          <defs>
            <linearGradient id="truckBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#60a5fa"/>
              <stop offset="50%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="truckFlame" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#fde047"/>
              <stop offset="50%" stop-color="#f97316"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
            <linearGradient id="truckTire" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <linearGradient id="truckRamp" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#b45309"/>
              <stop offset="100%" stop-color="#78350f"/>
            </linearGradient>
          </defs>
          <path d="M 50 535 Q 300 500, 560 535 L 560 560 L 50 560 Z" fill="url(#truckRamp)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 170 290 L 160 210 C 160 190, 140 190, 140 210 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="8"/>
          <line x1="255" y1="430" x2="355" y2="430" stroke="#475569" stroke-width="14" stroke-linecap="round"/>
          <line x1="255" y1="430" x2="355" y2="430" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>
          <path d="M 410 380 L 415 400 L 405 410 L 420 420 M 200 380 L 205 400 L 195 410 L 210 420" fill="none" stroke="#dc2626" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 160 350 L 450 350 L 430 380 L 180 380 Z" fill="#1e293b" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 180 290 L 100 295 L 95 350 L 515 350 L 510 300 L 430 290 L 380 220 L 220 220 Z" fill="url(#truckBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <polygon points="200,230 275,230 275,280 195,280" fill="#93c5fd" stroke="#0f172a" stroke-width="7"/>
          <polygon points="305,230 370,230 415,280 305,280" fill="#93c5fd" stroke="#0f172a" stroke-width="7"/>
          <rect x="220" y="305" width="25" height="8" rx="3" fill="#cbd5e1" stroke="#0f172a" stroke-width="4"/>
          <path d="M 230 330 C 270 330, 260 305, 300 310 C 270 315, 290 325, 320 325 C 280 335, 250 340, 230 330 Z" fill="url(#truckFlame)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <rect x="495" y="305" width="18" height="25" rx="4" fill="#fef08a" stroke="#0f172a" stroke-width="7"/>
          <line x1="450" y1="320" x2="490" y2="320" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <line x1="450" y1="335" x2="490" y2="335" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="260" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="290" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="320" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="350" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="180" cy="430" r="75" fill="url(#truckTire)" stroke="#0f172a" stroke-width="10"/>
          <circle cx="180" cy="430" r="40" fill="#e2e8f0" stroke="#0f172a" stroke-width="9"/>
          <circle cx="180" cy="430" r="18" fill="#3b82f6" stroke="#0f172a" stroke-width="7"/>
          <circle cx="430" cy="430" r="75" fill="url(#truckTire)" stroke="#0f172a" stroke-width="10"/>
          <circle cx="430" cy="430" r="40" fill="#e2e8f0" stroke="#0f172a" stroke-width="9"/>
          <circle cx="430" cy="430" r="18" fill="#3b82f6" stroke="#0f172a" stroke-width="7"/>
          <path d="M 430 355 L 430 340 M 480 375 L 492 365 M 505 430 L 520 430 M 480 485 L 492 495 M 430 505 L 430 520 M 380 485 L 368 495 M 355 430 L 340 430 M 380 375 L 368 365" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
          <path d="M 180 355 L 180 340 M 230 375 L 242 365 M 255 430 L 270 430 M 230 485 L 242 495 M 180 505 L 180 520 M 130 485 L 118 495 M 105 430 L 90 430 M 130 375 L 118 365" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
          <circle cx="70" cy="460" r="5" fill="#78350f"/>
          <circle cx="50" cy="430" r="6" fill="#78350f"/>
          <circle cx="60" cy="485" r="4" fill="#78350f"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Kabin Tavan\u0131 ve \u00d6n Cam",
        instruction: "Sayfan\u0131n \u00fcst ortas\u0131na kamyonun tavan\u0131n\u0131 ve e\u011fik \u00f6n cam \u00e7izgisini yap.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na canavar kamyonumuzun sa\u011flam tavan\u0131n\u0131 ve e\u011fik \u00f6n cam\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 220 220 L 380 220 L 430 290 L 180 290 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: G\u00fc\u00e7l\u00fc Kaput ve \u00d6n Izgara",
        instruction: "\u00d6n camdan ileriye do\u011fru g\u00fc\u00e7l\u00fc motor kaputunu ve dik \u00f6n \u0131zgaray\u0131 \u00e7iz.",
        voice: "\u00d6n camdan ileriye do\u011fru kamyonun g\u00fc\u00e7l\u00fc motor kaputunu ve dik \u00f6n \u0131zgaras\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 430 290 L 510 300 L 515 350 L 410 350" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Kamyon Kasas\u0131 ve Arka G\u00f6vde",
        instruction: "Arka tarafa do\u011fru pick-up kasas\u0131n\u0131 d\u00fcz \u00e7izgilerle uzat.",
        voice: "Kabinin arkas\u0131na do\u011fru canavar kamyonun pick-up kasas\u0131n\u0131 g\u00fc\u00e7l\u00fc \u00e7izgilerle uzatal\u0131m.",
        svg: `<path d="M 180 290 L 100 295 L 95 350 L 200 350" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Yan Camlar ve Direkler",
        instruction: "Kabin i\u00e7ine s\u00fcr\u00fcc\u00fc cam\u0131 ve arka kelebek cam\u0131n\u0131 b\u00f6lerek \u00e7iz.",
        voice: "\u015eimdi kabinin i\u00e7ine s\u00fcr\u00fcc\u00fc cam\u0131n\u0131 ve cam direklerini net \u00e7izgilerle ekleyelim.",
        svg: `<path d="M 290 220 L 290 290 M 200 230 L 275 230 L 275 280 L 195 280 Z M 305 230 L 370 230 L 415 280 L 305 280 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Kap\u0131 \u00c7izgisi ve Sa\u011flam Kol",
        instruction: "Kabin alt\u0131na kap\u0131 ayr\u0131m\u0131n\u0131 ve dikd\u00f6rtgen kap\u0131 kolunu ekle.",
        voice: "G\u00f6vdeye kap\u0131 a\u00e7\u0131lma \u00e7izgisini ve sa\u011flam bir kap\u0131 kolu dikd\u00f6rtgeni \u00e7izelim.",
        svg: `<path d="M 200 290 L 200 350 M 330 290 L 330 350" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><rect x="220" y="305" width="25" height="8" rx="3" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: G\u00fc\u00e7l\u00fc Farlar ve Izgara Izleri",
        instruction: "\u00d6n tarafa kare far ve \u0131zgara \u015feritlerini yap.",
        voice: "Kamyonun \u00f6n\u00fcne g\u00fc\u00e7l\u00fc par\u0131ldayan \u00f6n far\u0131n\u0131 ve havaland\u0131rma \u0131zgaralar\u0131n\u0131 yapal\u0131m.",
        svg: `<rect x="495" y="305" width="18" height="25" rx="4" fill="none" stroke="#0f172a" stroke-width="7"/><line x1="450" y1="320" x2="490" y2="320" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="450" y1="335" x2="490" y2="335" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Tavan Projekt\u00f6r Farlar\u0131",
        instruction: "Tavana macera i\u00e7in 4 adet yuvarlak dev projekt\u00f6r lambas\u0131 ekle.",
        voice: "Tavan demirinin \u00fcst\u00fcne geceyi ayd\u0131nlatan d\u00f6rt tane yuvarlak projekt\u00f6r lambas\u0131 \u00e7izelim.",
        svg: `<path d="M 240 220 L 240 195 L 360 195 L 360 220" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><circle cx="260" cy="195" r="12" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="290" cy="195" r="12" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="320" cy="195" r="12" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="350" cy="195" r="12" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Y\u00fcksek Canavar \u015easi Bar\u0131",
        instruction: "G\u00f6vdenin alt\u0131na tekerlekleri tutacak kal\u0131n metal \u015fasiyi \u00e7iz.",
        voice: "G\u00f6vdenin alt\u0131na o devasa tekerlekleri ta\u015f\u0131yacak \u00e7elik \u015fasi kiri\u015fini \u00e7izelim.",
        svg: `<path d="M 160 350 L 450 350 L 430 380 L 180 380 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Devasa \u00d6n Tekerlek Jant\u0131",
        instruction: "\u00d6n tarafa i\u00e7 i\u00e7e iki b\u00fcy\u00fck jant \u00e7emberi yap.",
        voice: "\u00d6n tarafa kamyonun dev jant\u0131n\u0131 belirten i\u00e7 i\u00e7e iki b\u00fcy\u00fck daire \u00e7izelim.",
        svg: `<circle cx="430" cy="430" r="40" fill="none" stroke="#0f172a" stroke-width="9"/><circle cx="430" cy="430" r="18" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: \u00d6n Lasti\u011fin Dev Di\u015fleri",
        instruction: "Jant\u0131n etraf\u0131na kocaman lastik \u00e7emberi ve derin di\u015f \u00e7izgilerini ekle.",
        voice: "Jant\u0131n etraf\u0131na dev gibi bir lastik \u00e7emberi ve kayalara t\u0131rmanan derin di\u015flerini \u00e7izelim.",
        svg: `<circle cx="430" cy="430" r="75" fill="none" stroke="#0f172a" stroke-width="10"/><path d="M 430 355 L 430 340 M 480 375 L 492 365 M 505 430 L 520 430 M 480 485 L 492 495 M 430 505 L 430 520 M 380 485 L 368 495 M 355 430 L 340 430 M 380 375 L 368 365" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Devasa Arka Tekerlek Jant\u0131",
        instruction: "Arka k\u0131sma da ayn\u0131 b\u00fcy\u00fckl\u00fckte jant \u00e7emberlerini \u00e7iz.",
        voice: "Arka tarafa da ayn\u0131 heybetli arka tekerlek jant dairelerini \u00e7izelim.",
        svg: `<circle cx="180" cy="430" r="40" fill="none" stroke="#0f172a" stroke-width="9"/><circle cx="180" cy="430" r="18" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Arka Lasti\u011fin Dev Di\u015fleri",
        instruction: "Arka lasti\u011fin de kal\u0131n kau\u00e7uk \u00e7emberini ve arazi di\u015flerini yap.",
        voice: "Arka lasti\u011fimizin de kal\u0131n di\u015flerini tamamlayal\u0131m, kamyonumuz havaya kalkmaya haz\u0131r olsun!",
        svg: `<circle cx="180" cy="430" r="75" fill="none" stroke="#0f172a" stroke-width="10"/><path d="M 180 355 L 180 340 M 230 375 L 242 365 M 255 430 L 270 430 M 230 485 L 242 495 M 180 505 L 180 520 M 130 485 L 118 495 M 105 430 L 90 430 M 130 375 L 118 365" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Kal\u0131n Amortis\u00f6r Yaylar\u0131",
        instruction: "G\u00f6vde ile tekerlekler aras\u0131na z\u0131playan dev helezon yaylar \u00e7iz.",
        voice: "Tekerleklerin \u00fcst\u00fcne z\u0131plamay\u0131 sa\u011flayan kal\u0131n amortis\u00f6r yaylar\u0131n\u0131 zigzaglarla \u00e7izelim.",
        svg: `<path d="M 410 380 L 415 400 L 405 410 L 420 420 M 200 380 L 205 400 L 195 410 L 210 420" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Yukar\u0131 K\u0131vr\u0131lan Krom Egzoz",
        instruction: "Kabinin arkas\u0131ndan yukar\u0131 do\u011fru kal\u0131n bir egzoz borusu yap.",
        voice: "Kabinin arkas\u0131ndan g\u00f6\u011fe do\u011fru k\u0131vr\u0131lan krom bir canavar egzoz borusu \u00e7izelim.",
        svg: `<path d="M 170 290 L 160 210 C 160 190, 140 190, 140 210" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Kap\u0131 \u00dcst\u00fc Haval\u0131 Alev Deseni",
        instruction: "Kamyonun kap\u0131s\u0131na r\u00fczgarda yanan alev dillerini \u00e7iz.",
        voice: "Kamyonumuza s\u00fcper yar\u0131\u015f\u00e7\u0131 havas\u0131 katan ate\u015f dillerini kap\u0131n\u0131n \u00fczerine \u00e7izelim.",
        svg: `<path d="M 230 330 C 270 330, 260 305, 300 310 C 270 315, 290 325, 320 325 C 280 335, 250 340, 230 330 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: \u00c7amurluklar ve Arka Dingil",
        instruction: "Tekerleklerin aras\u0131na kal\u0131n aks mili ve arka pa\u00e7al\u0131klar\u0131 ekle.",
        voice: "\u0130ki tekerlek aras\u0131na kal\u0131n aks milini ve arka \u00e7amurluk koruyucusunu ekleyelim.",
        svg: `<line x1="255" y1="430" x2="355" y2="430" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 95 380 L 85 410" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: U\u00e7u\u015fan Toprak Par\u00e7alar\u0131 ve Zemin",
        instruction: "Lastiklerin arkas\u0131ndan f\u0131rlayan toprak par\u00e7alar\u0131n\u0131 ve pist rampas\u0131n\u0131 yap.",
        voice: "Lastiklerin alt\u0131ndan havaya f\u0131rlayan \u00e7amur par\u00e7alar\u0131n\u0131 ve toprak rampas\u0131n\u0131 \u00e7izelim.",
        svg: `<circle cx="70" cy="460" r="5" fill="#0f172a"/><circle cx="50" cy="430" r="6" fill="#0f172a"/><circle cx="60" cy="485" r="4" fill="#0f172a"/><path d="M 60 525 Q 300 500, 550 525" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_canavar_kamyon/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve \u015eov I\u015f\u0131klar\u0131",
        instruction: "Tebrikler K\u0131van\u00e7! Canavar kamyonunu mavi metalik g\u00f6vde ve turuncu alevlerle boya!",
        voice: "Harika bir i\u015f \u00e7\u0131kard\u0131n K\u0131van\u00e7! Canavar kamyonun f\u0131rt\u0131na gibi haz\u0131r. \u015eimdi onu elektrik mavisi ve cay\u0131r cay\u0131r turuncu alevlerle renklendir!",
        svg: `
          <defs>
            <linearGradient id="truckBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#60a5fa"/>
              <stop offset="50%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="truckFlame" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#fde047"/>
              <stop offset="50%" stop-color="#f97316"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
            <linearGradient id="truckTire" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <linearGradient id="truckRamp" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#b45309"/>
              <stop offset="100%" stop-color="#78350f"/>
            </linearGradient>
          </defs>
          <path d="M 50 535 Q 300 500, 560 535 L 560 560 L 50 560 Z" fill="url(#truckRamp)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 170 290 L 160 210 C 160 190, 140 190, 140 210 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="8"/>
          <line x1="255" y1="430" x2="355" y2="430" stroke="#475569" stroke-width="14" stroke-linecap="round"/>
          <line x1="255" y1="430" x2="355" y2="430" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>
          <path d="M 410 380 L 415 400 L 405 410 L 420 420 M 200 380 L 205 400 L 195 410 L 210 420" fill="none" stroke="#dc2626" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 160 350 L 450 350 L 430 380 L 180 380 Z" fill="#1e293b" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 180 290 L 100 295 L 95 350 L 515 350 L 510 300 L 430 290 L 380 220 L 220 220 Z" fill="url(#truckBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <polygon points="200,230 275,230 275,280 195,280" fill="#93c5fd" stroke="#0f172a" stroke-width="7"/>
          <polygon points="305,230 370,230 415,280 305,280" fill="#93c5fd" stroke="#0f172a" stroke-width="7"/>
          <rect x="220" y="305" width="25" height="8" rx="3" fill="#cbd5e1" stroke="#0f172a" stroke-width="4"/>
          <path d="M 230 330 C 270 330, 260 305, 300 310 C 270 315, 290 325, 320 325 C 280 335, 250 340, 230 330 Z" fill="url(#truckFlame)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <rect x="495" y="305" width="18" height="25" rx="4" fill="#fef08a" stroke="#0f172a" stroke-width="7"/>
          <line x1="450" y1="320" x2="490" y2="320" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <line x1="450" y1="335" x2="490" y2="335" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="260" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="290" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="320" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="350" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="180" cy="430" r="75" fill="url(#truckTire)" stroke="#0f172a" stroke-width="10"/>
          <circle cx="180" cy="430" r="40" fill="#e2e8f0" stroke="#0f172a" stroke-width="9"/>
          <circle cx="180" cy="430" r="18" fill="#3b82f6" stroke="#0f172a" stroke-width="7"/>
          <circle cx="430" cy="430" r="75" fill="url(#truckTire)" stroke="#0f172a" stroke-width="10"/>
          <circle cx="430" cy="430" r="40" fill="#e2e8f0" stroke="#0f172a" stroke-width="9"/>
          <circle cx="430" cy="430" r="18" fill="#3b82f6" stroke="#0f172a" stroke-width="7"/>
          <path d="M 430 355 L 430 340 M 480 375 L 492 365 M 505 430 L 520 430 M 480 485 L 492 495 M 430 505 L 430 520 M 380 485 L 368 495 M 355 430 L 340 430 M 380 375 L 368 365" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
          <path d="M 180 355 L 180 340 M 230 375 L 242 365 M 255 430 L 270 430 M 230 485 L 242 495 M 180 505 L 180 520 M 130 485 L 118 495 M 105 430 L 90 430 M 130 375 L 118 365" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
          <circle cx="70" cy="460" r="5" fill="#78350f"/>
          <circle cx="50" cy="430" r="6" fill="#78350f"/>
          <circle cx="60" cy="485" r="4" fill="#78350f"/>
`,
        audio: "audio/voices/cirak_canavar_kamyon/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🟢 ÇIRAK: NEŞELI BEBEK KÖPEKBALIĞI
  // =========================================================================
  {
    id: "cirak_bebek_kopekbaligi",
    categoryId: "deniz",
    name: "Ne\u015feli Bebek K\u00f6pekbal\u0131\u011f\u0131",
    emoji: "\ud83e\udd88",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Okyanusun en ne\u015feli bebek k\u00f6pekbal\u0131\u011f\u0131! Sevimli y\u00fczge\u00e7leri, g\u00fclen a\u011fz\u0131 ve k\u00f6p\u00fcren dalgalar.",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, turkuaz, g\u00f6k mavisi ve beyaz boyalar",
    welcomeText: "Doo doo doo! Merhaba K\u0131van\u00e7! Okyanusun en ne\u015feli bebek k\u00f6pekbal\u0131\u011f\u0131n\u0131 \u00e7izmek i\u00e7in ka\u011f\u0131d\u0131n\u0131 ve mavi boyalar\u0131n\u0131 haz\u0131rla!",
    welcomeAudio: "audio/voices/cirak_bebek_kopekbaligi/welcome.mp3",
    colors: ["#0ea5e9", "#0284c7", "#38bdf8", "#f8fafc"],
    previewSvg: `
          <defs>
            <linearGradient id="sharkBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="60%" stop-color="#0ea5e9"/>
              <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
            <linearGradient id="sharkBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#e0f2fe"/>
            </linearGradient>
            <linearGradient id="sharkWave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#06b6d4"/>
              <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
          </defs>
          <path d="M 90 460 C 180 410, 280 470, 380 430 C 460 395, 500 440, 540 450 L 540 500 L 90 500 Z" fill="url(#sharkWave)" stroke="#0f172a" stroke-width="7" opacity="0.6"/>
          <path d="M 330 300 C 355 340, 370 330, 360 295 Z" fill="#0284c7" stroke="#0f172a" stroke-width="8"/>
          <path d="M 95 315 C 60 250, 45 230, 25 240 C 45 280, 70 305, 80 317 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 95 320 C 65 370, 50 385, 35 375 C 50 345, 70 330, 80 318 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 270 195 C 290 120, 335 110, 340 190 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 140 310 C 180 180, 350 180, 450 250 C 475 285, 435 345, 360 355 C 290 365, 210 355, 140 325 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 450 250 C 475 285, 435 345, 360 355 C 290 365, 210 355, 140 325 C 200 320, 330 310, 430 270 Z" fill="url(#sharkBelly)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 315 330 C 330 405, 270 415, 255 350 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 440 285 C 420 335, 365 335, 355 305 Z" fill="#991b1b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 375 325 C 390 315, 410 315, 415 325 Z" fill="#fda4af" stroke="#0f172a" stroke-width="5"/>
          <path d="M 430 288 L 424 298 L 418 289 M 410 291 L 404 301 L 398 292 M 390 295 L 384 305 L 378 296" fill="#ffffff" stroke="#0f172a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <ellipse cx="380" cy="235" rx="20" ry="24" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <circle cx="384" cy="237" r="12" fill="#0f172a"/>
          <circle cx="379" cy="230" r="5.5" fill="#ffffff"/>
          <circle cx="388" cy="241" r="2.8" fill="#ffffff"/>
          <path d="M 360 205 Q 380 195, 400 205" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="435" cy="245" r="3" fill="#0f172a"/>
          <circle cx="445" cy="252" r="3" fill="#0f172a"/>
          <path d="M 310 250 C 305 260, 305 270, 310 280 M 320 250 C 315 260, 315 270, 320 280 M 330 250 C 325 260, 325 270, 330 280" fill="none" stroke="#0284c7" stroke-width="5" stroke-linecap="round"/>
          <circle cx="470" cy="220" r="9" fill="#e0f2fe" stroke="#0f172a" stroke-width="5" opacity="0.8"/>
          <circle cx="495" cy="180" r="14" fill="#e0f2fe" stroke="#0f172a" stroke-width="5" opacity="0.8"/>
          <circle cx="510" cy="230" r="7" fill="#e0f2fe" stroke="#0f172a" stroke-width="4.5" opacity="0.8"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Ak\u0131c\u0131 S\u0131rt ve Kafa Kavisi",
        instruction: "Sayfan\u0131n \u00fcst k\u0131sm\u0131na kuyruktan buruna uzanan zarif bir s\u0131rt e\u011frisi \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst taraf\u0131na kuyruktan buruna do\u011fru uzanan ak\u0131c\u0131 bir s\u0131rt kavisi \u00e7izelim.",
        svg: `<path d="M 140 310 C 180 180, 350 180, 450 250" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Yuvarlak Burun ve \u00c7ene",
        instruction: "Burnun ucundan a\u015fa\u011f\u0131 do\u011fru g\u00fclen \u00e7ene k\u0131vr\u0131m\u0131n\u0131 tamamla.",
        voice: "Burnun ucundan a\u015fa\u011f\u0131ya do\u011fru sevimli tombul \u00e7ene k\u0131vr\u0131m\u0131n\u0131 yapal\u0131m.",
        svg: `<path d="M 450 250 C 475 285, 435 345, 360 355" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Kocaman G\u00fclen A\u011f\u0131z",
        instruction: "\u00c7enenin i\u00e7ine sevin\u00e7le a\u00e7\u0131lm\u0131\u015f b\u00fcy\u00fck bir hilal g\u00fcl\u00fcmsemesi \u00e7iz.",
        voice: "\u015eimdi \u00e7enenin i\u00e7ine ne\u015feyle \u015fark\u0131 s\u00f6yleyen kocaman bir hilal a\u011f\u0131z \u00e7izelim.",
        svg: `<path d="M 440 285 C 420 335, 365 335, 355 305" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Sevimli \u00c7izgi Di\u015fler",
        instruction: "A\u011fz\u0131n \u00fcst\u00fcne k\u00fc\u00e7\u00fck, dost canl\u0131s\u0131 \u00fc\u00e7gen \u00e7izgi film di\u015fleri yap.",
        voice: "A\u011fz\u0131m\u0131z\u0131n i\u00e7ine k\u00fc\u00e7\u00fck ve sevimli \u00fc\u00e7gen \u00e7izgi film di\u015fleri kondural\u0131m.",
        svg: `<path d="M 430 288 L 424 298 L 418 289 M 410 291 L 404 301 L 398 292 M 390 295 L 384 305 L 378 296" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: A\u011f\u0131z \u0130\u00e7i Dil K\u0131vr\u0131m\u0131",
        instruction: "A\u011fz\u0131n alt taraf\u0131na tatl\u0131 bir dil \u00e7izgisi koy.",
        voice: "A\u011fz\u0131n i\u00e7ine ne\u015feli k\u00fc\u00e7\u00fck bir dil k\u0131vr\u0131m\u0131 ekleyelim.",
        svg: `<path d="M 375 325 C 390 315, 410 315, 415 325" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Kocaman Parlak G\u00f6z",
        instruction: "Kafan\u0131n ortas\u0131na b\u00fcy\u00fck bir g\u00f6z, siyah g\u00f6zbebe\u011fi ve \u00e7ifte par\u0131lt\u0131 ekle.",
        voice: "Kafan\u0131n ortas\u0131na kocaman bir g\u00f6z \u00e7izelim, i\u00e7ine siyah g\u00f6zbebe\u011fini ve parlayan iki beyaz \u0131\u015f\u0131\u011f\u0131 koyal\u0131m.",
        svg: `<ellipse cx="380" cy="235" rx="20" ry="24" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="384" cy="237" r="12" fill="#0f172a"/><circle cx="379" cy="230" r="5.5" fill="#ffffff"/><circle cx="388" cy="241" r="2.8" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Ne\u015feli Ka\u015f ve Burun \u00c7illeri",
        instruction: "G\u00f6z\u00fcn \u00fcst\u00fcne merakl\u0131 bir ka\u015f ve burnun ucuna iki minik nokta yap.",
        voice: "G\u00f6z\u00fcn \u00fcst\u00fcne ne\u015feli bir ka\u015f ve burnun ucuna iki tatl\u0131 nefes deli\u011fi kondural\u0131m.",
        svg: `<path d="M 360 205 Q 380 195, 400 205" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><circle cx="435" cy="245" r="3" fill="#0f172a"/><circle cx="445" cy="252" r="3" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: \u00dcnl\u00fc S\u0131rt Y\u00fczgeci (Dorsal Fin)",
        instruction: "S\u0131rt\u0131n \u00fcst\u00fcne k\u00f6pekbal\u0131\u011f\u0131n\u0131n me\u015fhur zarif y\u00fczgecini \u00e7iz.",
        voice: "\u0130\u015fte k\u00f6pekbal\u0131\u011f\u0131n\u0131n en haval\u0131 yeri! S\u0131rt\u0131n \u00fcst\u00fcne zarif ve \u00fc\u00e7gen s\u0131rt y\u00fczgecini \u00e7izelim.",
        svg: `<path d="M 270 195 C 290 120, 335 110, 340 190" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Y\u00fczen \u00d6n Y\u00fczge\u00e7 (Sol)",
        instruction: "G\u00f6vdenin alt\u0131ndan a\u015fa\u011f\u0131 do\u011fru selam veren y\u00fczgeci k\u0131v\u0131r.",
        voice: "G\u00f6vdenin alt\u0131ndan a\u015fa\u011f\u0131ya do\u011fru bize el sallayan sevimli yan y\u00fczgeci yapal\u0131m.",
        svg: `<path d="M 315 330 C 330 405, 270 415, 255 350" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Di\u011fer Yan Y\u00fczge\u00e7 (Sa\u011f)",
        instruction: "G\u00f6vdenin arkas\u0131nda kalan di\u011fer k\u00fc\u00e7\u00fck y\u00fczgeci de ekle.",
        voice: "G\u00f6vdenin arkas\u0131nda kalan di\u011fer y\u00fczgecin ucunu da g\u00f6sterelim.",
        svg: `<path d="M 330 300 C 355 340, 370 330, 360 295" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Beyaz G\u00f6bek Ayr\u0131m \u00c7izgisi",
        instruction: "\u00c7eneden kuyru\u011fa do\u011fru uzanan g\u00f6bek ay\u0131rma hatt\u0131n\u0131 \u00e7iz.",
        voice: "\u00c7eneden kuyru\u011fa do\u011fru uzanan beyaz g\u00f6bek ay\u0131rma \u00e7izgisini yumu\u015fak bir kavisle \u00e7izelim.",
        svg: `<path d="M 360 355 C 290 365, 210 355, 140 325" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: \u0130ncelen Kuyruk G\u00f6vdesi",
        instruction: "G\u00f6vdeyi kuyruk y\u00fczgecine ba\u011flayan daralan \u00e7izgileri uzat.",
        voice: "G\u00f6vdeyi arka kuyru\u011fa ba\u011flayan ince kuyruk sap\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 140 310 L 95 315 M 140 325 L 95 320" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Kuyru\u011fun \u00dcst Hilal Kanad\u0131",
        instruction: "Kuyru\u011fun \u00fcst taraf\u0131na hilal \u015feklinde yukar\u0131 k\u0131vr\u0131lan y\u00fczgeci yap.",
        voice: "Kuyru\u011fun \u00fcst taraf\u0131na do\u011fru zarif bir hilal gibi y\u00fckselen y\u00fczgeci \u00e7izelim.",
        svg: `<path d="M 95 315 C 60 250, 45 230, 25 240 C 45 280, 70 305, 80 317" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Kuyru\u011fun Alt Hilal Kanad\u0131",
        instruction: "Kuyru\u011fun alt taraf\u0131na e\u015fle\u015fen k\u00fc\u00e7\u00fck y\u00fczgeci ekle.",
        voice: "Kuyru\u011fun alt ucunu da \u00e7izerek muhte\u015fem y\u00fcz\u00fcc\u00fc kuyru\u011fumuzu tamamlayal\u0131m.",
        svg: `<path d="M 95 320 C 65 370, 50 385, 35 375 C 50 345, 70 330, 80 318" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: \u00dc\u00e7 Sevimli Solunga\u00e7 \u00c7izgisi",
        instruction: "G\u00f6z\u00fcn arkas\u0131na su alt\u0131nda nefes almas\u0131n\u0131 sa\u011flayan 3 minik kavis koy.",
        voice: "G\u00f6z\u00fcn hemen arkas\u0131na \u00fc\u00e7 tane minik ve zarif solunga\u00e7 \u00e7izgisi kondural\u0131m.",
        svg: `<path d="M 310 250 C 305 260, 305 270, 310 280 M 320 250 C 315 260, 315 270, 320 280 M 330 250 C 325 260, 325 270, 330 280" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Y\u00fckselen Deniz Kabarc\u0131klar\u0131",
        instruction: "Burnun \u00f6n\u00fcnden yukar\u0131 do\u011fru s\u00fcz\u00fclen su kabarc\u0131\u011f\u0131 halkalar\u0131 yap.",
        voice: "Burnun \u00f6n\u00fcnden g\u00f6\u011fe do\u011fru y\u00fckselen \u015f\u0131k\u0131r \u015f\u0131k\u0131r su baloncuklar\u0131 \u00e7izelim.",
        svg: `<circle cx="470" cy="220" r="9" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="495" cy="180" r="14" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="510" cy="230" r="7" fill="none" stroke="#0f172a" stroke-width="4.5"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Alt\u0131ndan Ge\u00e7en Okyanus Dalgas\u0131",
        instruction: "K\u00f6pekbal\u0131\u011f\u0131n\u0131n alt\u0131na k\u0131vr\u0131larak akan bir deniz dalgas\u0131 \u00e7iz.",
        voice: "K\u00f6pekbal\u0131\u011f\u0131m\u0131z\u0131n alt\u0131ndan k\u0131vr\u0131larak akan mavi okyanus dalgas\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 90 460 C 180 410, 280 470, 380 430 C 460 395, 500 440, 540 450" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve I\u015f\u0131lt\u0131l\u0131 Okyanus",
        instruction: "Tebrikler K\u0131van\u00e7! Bebek k\u00f6pekbal\u0131\u011f\u0131n\u0131 en g\u00fczel mavi ve beyaz boyalar\u0131nla renklendir!",
        voice: "Harikas\u0131n K\u0131van\u00e7! Bebek k\u00f6pekbal\u0131\u011f\u0131 y\u00fczmeye haz\u0131r. \u015eimdi onu p\u0131r\u0131l p\u0131r\u0131l g\u00f6k mavisi ve bembeyaz boyalar\u0131nla canland\u0131r!",
        svg: `
          <defs>
            <linearGradient id="sharkBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="60%" stop-color="#0ea5e9"/>
              <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
            <linearGradient id="sharkBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#e0f2fe"/>
            </linearGradient>
            <linearGradient id="sharkWave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#06b6d4"/>
              <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
          </defs>
          <path d="M 90 460 C 180 410, 280 470, 380 430 C 460 395, 500 440, 540 450 L 540 500 L 90 500 Z" fill="url(#sharkWave)" stroke="#0f172a" stroke-width="7" opacity="0.6"/>
          <path d="M 330 300 C 355 340, 370 330, 360 295 Z" fill="#0284c7" stroke="#0f172a" stroke-width="8"/>
          <path d="M 95 315 C 60 250, 45 230, 25 240 C 45 280, 70 305, 80 317 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 95 320 C 65 370, 50 385, 35 375 C 50 345, 70 330, 80 318 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 270 195 C 290 120, 335 110, 340 190 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 140 310 C 180 180, 350 180, 450 250 C 475 285, 435 345, 360 355 C 290 365, 210 355, 140 325 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 450 250 C 475 285, 435 345, 360 355 C 290 365, 210 355, 140 325 C 200 320, 330 310, 430 270 Z" fill="url(#sharkBelly)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 315 330 C 330 405, 270 415, 255 350 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 440 285 C 420 335, 365 335, 355 305 Z" fill="#991b1b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 375 325 C 390 315, 410 315, 415 325 Z" fill="#fda4af" stroke="#0f172a" stroke-width="5"/>
          <path d="M 430 288 L 424 298 L 418 289 M 410 291 L 404 301 L 398 292 M 390 295 L 384 305 L 378 296" fill="#ffffff" stroke="#0f172a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <ellipse cx="380" cy="235" rx="20" ry="24" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <circle cx="384" cy="237" r="12" fill="#0f172a"/>
          <circle cx="379" cy="230" r="5.5" fill="#ffffff"/>
          <circle cx="388" cy="241" r="2.8" fill="#ffffff"/>
          <path d="M 360 205 Q 380 195, 400 205" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="435" cy="245" r="3" fill="#0f172a"/>
          <circle cx="445" cy="252" r="3" fill="#0f172a"/>
          <path d="M 310 250 C 305 260, 305 270, 310 280 M 320 250 C 315 260, 315 270, 320 280 M 330 250 C 325 260, 325 270, 330 280" fill="none" stroke="#0284c7" stroke-width="5" stroke-linecap="round"/>
          <circle cx="470" cy="220" r="9" fill="#e0f2fe" stroke="#0f172a" stroke-width="5" opacity="0.8"/>
          <circle cx="495" cy="180" r="14" fill="#e0f2fe" stroke="#0f172a" stroke-width="5" opacity="0.8"/>
          <circle cx="510" cy="230" r="7" fill="#e0f2fe" stroke="#0f172a" stroke-width="4.5" opacity="0.8"/>
`,
        audio: "audio/voices/cirak_bebek_kopekbaligi/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🟢 ÇIRAK: IŞIKLI UÇAN DAIRE & DOST UZAYLI
  // =========================================================================
  {
    id: "cirak_ucan_daire_ufo",
    categoryId: "uzay",
    name: "I\u015f\u0131kl\u0131 U\u00e7an Daire & Dost Uzayl\u0131",
    emoji: "\ud83d\udef8",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Cam fanus i\u00e7inde el sallayan sevimli uzayl\u0131, par\u0131ldayan renkli \u0131\u015f\u0131klar ve gizemli \u00e7ekim \u0131\u015f\u0131n\u0131!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, mor, ye\u015fil, sar\u0131 ve lacivert boyalar",
    welcomeText: "Bip bop! Selam K\u0131van\u00e7! Uzay\u0131n derinliklerinden gelen dost uzayl\u0131m\u0131z\u0131 ve \u0131\u015f\u0131lt\u0131l\u0131 u\u00e7an dairesini birlikte \u00e7izelim mi?",
    welcomeAudio: "audio/voices/cirak_ucan_daire_ufo/welcome.mp3",
    colors: ["#8b5cf6", "#6366f1", "#10b981", "#fbbf24"],
    previewSvg: `
          <defs>
            <linearGradient id="ufoHull" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#c084fc"/>
              <stop offset="50%" stop-color="#8b5cf6"/>
              <stop offset="100%" stop-color="#4f46e5"/>
            </linearGradient>
            <linearGradient id="ufoDome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#e0e7ff"/>
              <stop offset="100%" stop-color="#818cf8"/>
            </linearGradient>
            <linearGradient id="ufoBeam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#22c55e"/>
            </linearGradient>
            <linearGradient id="alienSkin" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#86efac"/>
              <stop offset="100%" stop-color="#16a34a"/>
            </linearGradient>
          </defs>
          <path d="M 250 375 L 140 520 L 460 520 L 350 375 Z" fill="url(#ufoBeam)" opacity="0.35"/>
          <path d="M 80 525 Q 300 500, 520 525 L 520 550 L 80 550 Z" fill="#475569" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="200" cy="530" rx="20" ry="7" fill="#334155" stroke="#0f172a" stroke-width="4"/>
          <circle cx="100" cy="110" r="28" fill="#fb923c" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="100" cy="110" rx="48" ry="12" fill="none" stroke="#fef08a" stroke-width="5"/>
          <path d="M 210 360 L 180 430 L 160 430 M 390 360 L 420 430 L 440 430 M 300 375 L 300 440 L 285 440 L 315 440" fill="none" stroke="#64748b" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 170 315 C 190 375, 410 375, 430 315 Z" fill="#312e81" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <ellipse cx="300" cy="365" rx="65" ry="16" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
          <path d="M 220 250 C 220 145, 380 145, 380 250 Z" fill="url(#ufoDome)" opacity="0.85" stroke="#0f172a" stroke-width="9"/>
          <path d="M 285 180 Q 275 155, 270 145 M 315 180 Q 325 155, 330 145" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="270" cy="142" r="8" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <circle cx="330" cy="142" r="8" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="300" cy="210" rx="35" ry="32" fill="url(#alienSkin)" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="285" cy="205" rx="11" ry="14" fill="#0f172a"/>
          <circle cx="283" cy="202" r="3.5" fill="#ffffff"/>
          <ellipse cx="315" cy="205" rx="11" ry="14" fill="#0f172a"/>
          <circle cx="311" cy="202" r="3.5" fill="#ffffff"/>
          <path d="M 292 225 Q 300 233, 308 225" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <path d="M 345 220 C 355 210, 365 215, 360 225 C 355 235, 345 230, 340 225 Z" fill="url(#alienSkin)" stroke="#0f172a" stroke-width="5"/>
          <path d="M 140 255 C 80 270, 80 300, 150 315 L 450 315 C 520 300, 520 270, 460 255 Z" fill="url(#ufoHull)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <ellipse cx="300" cy="255" rx="160" ry="30" fill="none" stroke="#0f172a" stroke-width="9"/>
          <circle cx="170" cy="285" r="9" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <circle cx="230" cy="295" r="10" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <circle cx="300" cy="300" r="11" fill="#22c55e" stroke="#0f172a" stroke-width="5"/>
          <circle cx="370" cy="295" r="10" fill="#06b6d4" stroke="#0f172a" stroke-width="5"/>
          <circle cx="430" cy="285" r="9" fill="#f97316" stroke="#0f172a" stroke-width="5"/>
          <path d="M 500 100 L 500 130 M 485 115 L 515 115" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <path d="M 120 200 L 120 220 M 110 210 L 130 210" stroke="#facc15" stroke-width="4" stroke-linecap="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: \u015eeffaf Cam Kubbe Fanus",
        instruction: "Sayfan\u0131n \u00fcst ortas\u0131na p\u00fcr\u00fczs\u00fcz bir yar\u0131m daire cam kubbe \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na u\u00e7an dairenin cam fanus kubbesini p\u00fcr\u00fczs\u00fcz bir kavisle \u00e7izelim.",
        svg: `<path d="M 220 250 C 220 145, 380 145, 380 250" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Sevimli Uzayl\u0131n\u0131n Kafas\u0131",
        instruction: "Kubbenin i\u00e7ine dost uzayl\u0131n\u0131n hafif bas\u0131k yuvarlak kafas\u0131n\u0131 yerle\u015ftir.",
        voice: "Cam fanusun i\u00e7ine sevimli uzayl\u0131 dostumuzun tatl\u0131 kafas\u0131n\u0131 \u00e7izelim.",
        svg: `<ellipse cx="300" cy="210" rx="35" ry="32" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: I\u015f\u0131kl\u0131 Uzayl\u0131 Antenleri",
        instruction: "Kafan\u0131n \u00fcst\u00fcne iki anten ve u\u00e7lar\u0131na yuvarlak \u0131\u015f\u0131kl\u0131 toplar koy.",
        voice: "Kafan\u0131n \u00fcst\u00fcne iki k\u0131vr\u0131k anten ve u\u00e7lar\u0131na \u0131\u015f\u0131l \u0131\u015f\u0131l parlayan minik k\u00fcreler \u00e7izelim.",
        svg: `<path d="M 285 180 Q 275 155, 270 145 M 315 180 Q 325 155, 330 145" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><circle cx="270" cy="142" r="8" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="330" cy="142" r="8" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: B\u00fcy\u00fck Merakl\u0131 Uzayl\u0131 G\u00f6zleri",
        instruction: "Y\u00fcz\u00fcn i\u00e7ine iki kocaman oval g\u00f6z, siyah g\u00f6zbebekleri ve par\u0131lt\u0131lar yap.",
        voice: "Y\u00fcz\u00fcne kocaman iki merakl\u0131 g\u00f6z \u00e7izelim, i\u00e7ine siyah g\u00f6zbebeklerini ve par\u0131lt\u0131lar\u0131 ekleyelim.",
        svg: `<ellipse cx="285" cy="205" rx="11" ry="14" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="286" cy="206" r="8" fill="#0f172a"/><circle cx="283" cy="202" r="3.5" fill="#ffffff"/><ellipse cx="315" cy="205" rx="11" ry="14" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="314" cy="206" r="8" fill="#0f172a"/><circle cx="311" cy="202" r="3.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Ne\u015feli G\u00fcl\u00fcmseme ve El Sallama",
        instruction: "G\u00f6zlerin alt\u0131na g\u00fclen bir a\u011f\u0131z ve cama basm\u0131\u015f el sallayan minik elini \u00e7iz.",
        voice: "Tatl\u0131 bir g\u00fcl\u00fcmseme ve bize cam\u0131n ard\u0131ndan el sallayan minik uzayl\u0131 elini yapal\u0131m.",
        svg: `<path d="M 292 225 Q 300 233, 308 225" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><path d="M 345 220 C 355 210, 365 215, 360 225 C 355 235, 345 230, 340 225" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: \u00dcst Metalik Disk \u00c7emberi",
        instruction: "Cam fanusun alt\u0131na geni\u015f yatay bir elips g\u00f6vde halkas\u0131 yap.",
        voice: "Cam fanusun taban\u0131na geni\u015f ve metalik bir elips halkas\u0131 \u00e7izelim.",
        svg: `<ellipse cx="300" cy="255" rx="160" ry="30" fill="none" stroke="#0f172a" stroke-width="10"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Geni\u015fleyen U\u00e7an Daire Kanatlar\u0131",
        instruction: "G\u00f6vdenin iki yan\u0131ndan d\u0131\u015far\u0131 ta\u015fan aerodinamik disk kanatlar\u0131n\u0131 \u00e7iz.",
        voice: "U\u00e7an dairemizin iki yan\u0131ndan uzaya do\u011fru s\u00fcz\u00fclen geni\u015f disk kanatlar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 140 255 C 80 270, 80 300, 150 315 L 450 315 C 520 300, 520 270, 460 255" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Alt G\u00f6vde G\u00f6bek E\u011frisi",
        instruction: "Kanatlar\u0131n alt\u0131n\u0131 birle\u015ftiren tombul g\u00f6bek kasesini \u00e7iz.",
        voice: "Kanatlar\u0131n alt\u0131n\u0131 birle\u015ftiren sa\u011flam g\u00f6bek yay\u0131n\u0131 kavisle \u00e7izelim.",
        svg: `<path d="M 170 315 C 190 375, 410 375, 430 315" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Merkez \u0130tici Motor \u00c7emberi",
        instruction: "G\u00f6be\u011fin tam ortas\u0131na \u0131\u015f\u0131k sa\u00e7an motor \u00e7ekirde\u011fi elipsini ekle.",
        voice: "U\u00e7an dairenin alt\u0131na enerji sa\u00e7an merkez itici motor elipsini \u00e7izelim.",
        svg: `<ellipse cx="300" cy="365" rx="65" ry="16" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: 5 Adet Yan\u0131p S\u00f6nen Renkli I\u015f\u0131k",
        instruction: "G\u00f6vde band\u0131 boyunca s\u0131rayla 5 yuvarlak sinyal lambas\u0131 yap.",
        voice: "G\u00f6vde boyunca yan\u0131p s\u00f6nen be\u015f tane sevimli renkli sinyal lambas\u0131 daireleri koyal\u0131m.",
        svg: `<circle cx="170" cy="285" r="9" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="230" cy="295" r="10" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="300" cy="300" r="11" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="370" cy="295" r="10" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="430" cy="285" r="9" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Metal G\u00f6vde Panel \u00c7izgileri",
        instruction: "U\u00e7an daireye uzay gemisi havas\u0131 katan panel b\u00f6lme \u00e7izgilerini \u00e7ek.",
        voice: "G\u00f6vdenin \u00fczerine y\u00fcksek teknoloji hissi veren metal panel \u00e7izgilerini \u00e7ekelim.",
        svg: `<path d="M 200 270 L 215 315 M 265 280 L 270 325 M 335 280 L 330 325 M 400 270 L 385 315" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: A\u00e7\u0131l\u0131r Kapan\u0131r \u0130ni\u015f Ayaklar\u0131",
        instruction: "Alttan yere do\u011fru inen 3 sa\u011flam ini\u015f aya\u011f\u0131 \u00e7iz.",
        voice: "Gezegenlere yumu\u015fak ini\u015f yapmay\u0131 sa\u011flayan \u00fc\u00e7 tane teleskopik ini\u015f aya\u011f\u0131 yapal\u0131m.",
        svg: `<path d="M 210 360 L 180 430 L 160 430 M 390 360 L 420 430 L 440 430 M 300 375 L 300 440 L 285 440 L 315 440" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Gizemli I\u015f\u0131n \u00c7ekim Konisi",
        instruction: "Motordan a\u015fa\u011f\u0131ya do\u011fru kesik \u00e7izgilerle yay\u0131lan sihirli \u0131\u015f\u0131n\u0131 \u00e7iz.",
        voice: "Motordan yere do\u011fru inen o gizemli ve sihirli \u00e7ekim \u0131\u015f\u0131n\u0131 konisini kesik \u00e7izgilerle \u00e7izelim.",
        svg: `<path d="M 250 375 L 140 520 L 460 520 L 350 375" fill="none" stroke="#0f172a" stroke-width="8" stroke-dasharray="14 10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Uzaktaki Halkal\u0131 Gezegen",
        instruction: "Sol \u00fcst k\u00f6\u015feye Sat\u00fcrn gibi halkal\u0131 bir mini gezegen ekle.",
        voice: "Sol \u00fcst k\u00f6\u015feye uzay\u0131n derinliklerindeki halkal\u0131 g\u00fczel bir gezegen kondural\u0131m.",
        svg: `<circle cx="100" cy="110" r="28" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="100" cy="110" rx="48" ry="12" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Parlayan 4 K\u00f6\u015feli Uzay Y\u0131ld\u0131zlar\u0131",
        instruction: "G\u00f6ky\u00fcz\u00fcne \u0131\u015f\u0131l \u0131\u015f\u0131l parlayan 4 u\u00e7lu y\u0131ld\u0131zlar yap.",
        voice: "U\u00e7an dairemizin etraf\u0131na p\u0131r\u0131l p\u0131r\u0131l par\u0131ldayan d\u00f6rt k\u00f6\u015feli uzay y\u0131ld\u0131zlar\u0131 serpi\u015ftirelim.",
        svg: `<path d="M 500 100 L 500 130 M 485 115 L 515 115 M 120 200 L 120 220 M 110 210 L 130 210 M 480 200 L 480 216 M 472 208 L 488 208" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Kozmik Enerji K\u0131v\u0131lc\u0131mlar\u0131",
        instruction: "I\u015f\u0131n\u0131n etraf\u0131na havada s\u00fcz\u00fclen parlak enerji noktalar\u0131 ekle.",
        voice: "I\u015f\u0131\u011f\u0131n etraf\u0131nda s\u00fcz\u00fclen par\u0131lt\u0131l\u0131 kozmik enerji noktalar\u0131n\u0131 yerle\u015ftirelim.",
        svg: `<circle cx="280" cy="400" r="4" fill="#0f172a"/><circle cx="320" cy="410" r="5" fill="#0f172a"/><circle cx="295" cy="435" r="4" fill="#0f172a"/><circle cx="315" cy="460" r="6" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Kraterli Ay Y\u00fczeyi",
        instruction: "En alta ay y\u00fczeyini ve \u00fczerinde k\u00fc\u00e7\u00fck bir krater \u00e7emberi yap.",
        voice: "En alta u\u00e7an dairemizin indi\u011fi kraterli ay zeminini \u00e7izelim.",
        svg: `<path d="M 80 525 Q 300 500, 520 525" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><ellipse cx="200" cy="530" rx="20" ry="7" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve Kozmik Par\u0131lt\u0131",
        instruction: "Tebrikler K\u0131van\u00e7! U\u00e7an daireni mor, ye\u015fil ve alt\u0131n sar\u0131s\u0131 renklerle canland\u0131r!",
        voice: "\u0130nan\u0131lmaz oldu K\u0131van\u00e7! U\u00e7an dairen uzay maceras\u0131na haz\u0131r. \u015eimdi onu fosforlu ye\u015fil, mor ve alt\u0131n sar\u0131s\u0131 boyalar\u0131nla \u0131\u015f\u0131l \u0131\u015f\u0131l renklendir!",
        svg: `
          <defs>
            <linearGradient id="ufoHull" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#c084fc"/>
              <stop offset="50%" stop-color="#8b5cf6"/>
              <stop offset="100%" stop-color="#4f46e5"/>
            </linearGradient>
            <linearGradient id="ufoDome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#e0e7ff"/>
              <stop offset="100%" stop-color="#818cf8"/>
            </linearGradient>
            <linearGradient id="ufoBeam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#22c55e"/>
            </linearGradient>
            <linearGradient id="alienSkin" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#86efac"/>
              <stop offset="100%" stop-color="#16a34a"/>
            </linearGradient>
          </defs>
          <path d="M 250 375 L 140 520 L 460 520 L 350 375 Z" fill="url(#ufoBeam)" opacity="0.35"/>
          <path d="M 80 525 Q 300 500, 520 525 L 520 550 L 80 550 Z" fill="#475569" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="200" cy="530" rx="20" ry="7" fill="#334155" stroke="#0f172a" stroke-width="4"/>
          <circle cx="100" cy="110" r="28" fill="#fb923c" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="100" cy="110" rx="48" ry="12" fill="none" stroke="#fef08a" stroke-width="5"/>
          <path d="M 210 360 L 180 430 L 160 430 M 390 360 L 420 430 L 440 430 M 300 375 L 300 440 L 285 440 L 315 440" fill="none" stroke="#64748b" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 170 315 C 190 375, 410 375, 430 315 Z" fill="#312e81" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <ellipse cx="300" cy="365" rx="65" ry="16" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
          <path d="M 220 250 C 220 145, 380 145, 380 250 Z" fill="url(#ufoDome)" opacity="0.85" stroke="#0f172a" stroke-width="9"/>
          <path d="M 285 180 Q 275 155, 270 145 M 315 180 Q 325 155, 330 145" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="270" cy="142" r="8" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <circle cx="330" cy="142" r="8" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="300" cy="210" rx="35" ry="32" fill="url(#alienSkin)" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="285" cy="205" rx="11" ry="14" fill="#0f172a"/>
          <circle cx="283" cy="202" r="3.5" fill="#ffffff"/>
          <ellipse cx="315" cy="205" rx="11" ry="14" fill="#0f172a"/>
          <circle cx="311" cy="202" r="3.5" fill="#ffffff"/>
          <path d="M 292 225 Q 300 233, 308 225" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <path d="M 345 220 C 355 210, 365 215, 360 225 C 355 235, 345 230, 340 225 Z" fill="url(#alienSkin)" stroke="#0f172a" stroke-width="5"/>
          <path d="M 140 255 C 80 270, 80 300, 150 315 L 450 315 C 520 300, 520 270, 460 255 Z" fill="url(#ufoHull)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <ellipse cx="300" cy="255" rx="160" ry="30" fill="none" stroke="#0f172a" stroke-width="9"/>
          <circle cx="170" cy="285" r="9" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <circle cx="230" cy="295" r="10" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <circle cx="300" cy="300" r="11" fill="#22c55e" stroke="#0f172a" stroke-width="5"/>
          <circle cx="370" cy="295" r="10" fill="#06b6d4" stroke="#0f172a" stroke-width="5"/>
          <circle cx="430" cy="285" r="9" fill="#f97316" stroke="#0f172a" stroke-width="5"/>
          <path d="M 500 100 L 500 130 M 485 115 L 515 115" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <path d="M 120 200 L 120 220 M 110 210 L 130 210" stroke="#facc15" stroke-width="4" stroke-linecap="round"/>
`,
        audio: "audio/voices/cirak_ucan_daire_ufo/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🟢 ÇIRAK: UÇAN SÜPER KAHRAMAN
  // =========================================================================
  {
    id: "cirak_super_kahraman",
    categoryId: "kahramanlar",
    name: "U\u00e7an S\u00fcper Kahraman",
    emoji: "\ud83e\uddb8\u200d\u2642\ufe0f",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "R\u00fczgarda dalgalanan k\u0131rm\u0131z\u0131 pelerin, alt\u0131n g\u00f6\u011f\u00fcs y\u0131ld\u0131z\u0131 ve ileri uzat\u0131lm\u0131\u015f kahraman yumru\u011fu!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, k\u0131rm\u0131z\u0131, mavi, sar\u0131 ve ten rengi boyalar",
    welcomeText: "S\u00fcper kahraman K\u0131van\u00e7 g\u00f6reve haz\u0131r! R\u00fczgarda pelerini dalgalanan, g\u00f6ky\u00fcz\u00fcnde u\u00e7an kahraman\u0131m\u0131z\u0131 \u00e7izmek i\u00e7in hemen ba\u015flayal\u0131m!",
    welcomeAudio: "audio/voices/cirak_super_kahraman/welcome.mp3",
    colors: ["#ef4444", "#3b82f6", "#fbbf24", "#f8fafc"],
    previewSvg: `
          <defs>
            <linearGradient id="heroSuit" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="60%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="heroCape" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ef4444"/>
              <stop offset="60%" stop-color="#dc2626"/>
              <stop offset="100%" stop-color="#991b1b"/>
            </linearGradient>
            <linearGradient id="heroGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
            <linearGradient id="heroSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fed7aa"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
          </defs>
          <path d="M 120 510 C 140 485, 180 485, 200 510 C 220 490, 260 490, 280 510 C 320 480, 370 480, 400 510 C 440 485, 480 490, 500 515 L 500 560 L 120 560 Z" fill="#e0f2fe" stroke="#0f172a" stroke-width="7"/>
          <path d="M 260 270 C 200 240, 150 250, 90 230 C 120 290, 110 350, 160 390 L 300 400 C 340 370, 360 330, 400 300 C 390 280, 370 260, 335 270 Z" fill="url(#heroCape)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 260 370 L 210 440 L 240 440 L 280 370 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 310 370 L 270 445 L 300 445 L 330 370 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 210 440 L 180 470 C 170 480, 185 490, 195 480 L 225 450 Z" fill="url(#heroCape)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 270 445 L 245 480 C 235 490, 250 500, 260 490 L 285 455 Z" fill="url(#heroCape)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 245 350 L 340 350 L 335 370 L 250 370 Z" fill="url(#heroGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="295" cy="360" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 265 275 L 205 310 C 195 315, 190 305, 195 298 L 245 265 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="195" cy="305" r="8" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="5"/>
          <path d="M 260 275 L 250 350 L 335 350 L 340 275 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <polygon points="295,290 299,302 311,302 301,310 305,322 295,314 285,322 289,310 279,302 291,302" fill="url(#heroGold)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 330 260 L 420 225 L 420 235 L 325 285 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <rect x="380" y="238" width="12" height="22" rx="4" fill="url(#heroGold)" stroke="#0f172a" stroke-width="5"/>
          <circle cx="440" cy="220" r="22" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 425 210 C 430 200, 450 200, 455 212 M 428 222 C 435 215, 452 215, 456 224" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <path d="M 280 250 L 275 270 L 325 270 L 320 250 Z" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 265 210 C 250 170, 350 170, 335 210 C 335 255, 265 255, 265 210 Z" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 190 C 240 140, 290 120, 320 125 C 345 115, 370 135, 355 170 C 365 175, 360 190, 345 195 Z" fill="#451a03" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 260 205 C 275 195, 295 210, 300 205 C 305 210, 325 195, 340 205 C 335 225, 315 225, 300 215 C 285 225, 265 225, 260 205 Z" fill="#1e293b" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="280" cy="210" r="7" fill="#ffffff"/>
          <circle cx="280" cy="210" r="4.5" fill="#0f172a"/>
          <circle cx="278" cy="208" r="2" fill="#ffffff"/>
          <circle cx="320" cy="210" r="7" fill="#ffffff"/>
          <circle cx="320" cy="210" r="4.5" fill="#0f172a"/>
          <circle cx="318" cy="208" r="2" fill="#ffffff"/>
          <path d="M 285 235 Q 300 248, 315 235" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <line x1="80" y1="180" x2="160" y2="180" stroke="#0ea5e9" stroke-width="6" stroke-linecap="round"/>
          <line x1="120" y1="210" x2="200" y2="210" stroke="#0ea5e9" stroke-width="5" stroke-linecap="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: G\u00fc\u00e7l\u00fc \u00c7ene ve Y\u00fcz Hatt\u0131",
        instruction: "Sayfan\u0131n ortas\u0131na s\u00fcper kahraman\u0131n g\u00fcler y\u00fczl\u00fc \u00e7ene ve yanak \u00e7izgisini yap.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n ortas\u0131na cesur kahraman\u0131m\u0131z\u0131n g\u00fcler y\u00fczl\u00fc \u00e7ene ve y\u00fcz hatt\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 265 210 C 250 170, 350 170, 335 210 C 335 255, 265 255, 265 210 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: R\u00fczgarda U\u00e7u\u015fan Haval\u0131 Sa\u00e7lar",
        instruction: "Kafan\u0131n \u00fcst\u00fcne r\u00fczgarla arkaya savrulan kahraman sa\u00e7lar\u0131n\u0131 \u00e7iz.",
        voice: "Kafan\u0131n \u00fcst\u00fcne g\u00f6ky\u00fcz\u00fcnde u\u00e7arken r\u00fczgarla dalgalanan haval\u0131 sa\u00e7 buklelerini \u00e7izelim.",
        svg: `<path d="M 255 190 C 240 140, 290 120, 320 125 C 345 115, 370 135, 355 170 C 365 175, 360 190, 345 195" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: S\u00fcper Kahraman G\u00f6z Maskesi",
        instruction: "G\u00f6z b\u00f6lgesine kanat gibi a\u00e7\u0131lan haval\u0131 bir kahraman maskesi yap.",
        voice: "Y\u00fcz\u00fcne gizli kimli\u011fini koruyan o haval\u0131 s\u00fcper kahraman maskesini \u00e7izelim.",
        svg: `<path d="M 260 205 C 275 195, 295 210, 300 205 C 305 210, 325 195, 340 205 C 335 225, 315 225, 300 215 C 285 225, 265 225, 260 205 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Maske \u0130\u00e7i I\u015f\u0131l I\u015f\u0131l G\u00f6zler",
        instruction: "Maskenin i\u00e7ine iki parlak g\u00f6zbebe\u011fi ve beyaz par\u0131lt\u0131lar yerle\u015ftir.",
        voice: "Maskenin i\u00e7ine cesurca bakan \u0131\u015f\u0131l \u0131\u015f\u0131l g\u00f6zbebeklerini ve par\u0131lt\u0131lar\u0131 ekleyelim.",
        svg: `<circle cx="280" cy="210" r="7" fill="#0f172a"/><circle cx="278" cy="208" r="2.5" fill="#ffffff"/><circle cx="320" cy="210" r="7" fill="#0f172a"/><circle cx="318" cy="208" r="2.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Kendinden Emin G\u00fcl\u00fcmseme",
        instruction: "Y\u00fcz\u00fcn alt\u0131na cesur ve ne\u015feli bir g\u00fcl\u00fcmseme \u00e7izgisi kondur.",
        voice: "\u015eimdi kahraman\u0131m\u0131za 'Ben buraday\u0131m, korkmay\u0131n!' diyen ne\u015feli bir g\u00fcl\u00fcmseme \u00e7izelim.",
        svg: `<path d="M 285 235 Q 300 248, 315 235" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Boyun ve Kost\u00fcm Yakas\u0131",
        instruction: "\u00c7enenin alt\u0131ndan omuzlara inen boyun ve k\u0131yafet yakas\u0131n\u0131 yap.",
        voice: "\u00c7enenin alt\u0131ndan a\u015fa\u011f\u0131ya boynunu ve s\u00fcper kost\u00fcm\u00fcn yakas\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 280 250 L 275 270 M 320 250 L 325 270 M 270 270 Q 300 282, 330 270" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: \u0130leri Uzat\u0131lm\u0131\u015f S\u00fcper Yumruk",
        instruction: "U\u00e7u\u015f y\u00f6n\u00fcne do\u011fru ileri uzat\u0131lm\u0131\u015f g\u00fc\u00e7l\u00fc bir yumruk \u00e7iz.",
        voice: "\u0130\u015fte u\u00e7u\u015f pozu! \u0130leriye do\u011fru uzatt\u0131\u011f\u0131 o g\u00fc\u00e7l\u00fc s\u00fcper yumru\u011funu ve parmak k\u0131vr\u0131mlar\u0131n\u0131 \u00e7izelim.",
        svg: `<circle cx="440" cy="220" r="22" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 425 210 C 430 200, 450 200, 455 212 M 428 222 C 435 215, 452 215, 456 224" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: U\u00e7an Sa\u011f Kol ve Bileklik",
        instruction: "Omuzdan yumru\u011fa uzanan kol \u00e7izgilerini ve g\u00fc\u00e7 bilekli\u011fini yap.",
        voice: "Omuzdan yumru\u011fa kadar uzanan g\u00fc\u00e7l\u00fc kolunu ve alt\u0131n g\u00fc\u00e7 bilekli\u011fini \u00e7izelim.",
        svg: `<path d="M 330 260 L 420 225 M 325 285 L 420 235" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><line x1="385" y1="238" x2="380" y2="260" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Dengeleyen Sol Kol",
        instruction: "Arkaya do\u011fru u\u00e7u\u015f dengesini sa\u011flayan di\u011fer kolu \u00e7iz.",
        voice: "Arkaya do\u011fru s\u00fcz\u00fclen ve u\u00e7u\u015f dengesini sa\u011flayan di\u011fer kolunu \u00e7izelim.",
        svg: `<path d="M 265 275 L 205 310 C 195 315, 190 305, 195 298 L 245 265" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: G\u00f6vde ve G\u00f6\u011f\u00fcsteki Alt\u0131n Y\u0131ld\u0131z",
        instruction: "Kost\u00fcm g\u00f6vdesini \u00e7iz ve g\u00f6\u011fs\u00fcne kocaman parlayan bir y\u0131ld\u0131z kondur.",
        voice: "Kahraman\u0131m\u0131z\u0131n g\u00f6vdesini \u00e7izelim ve g\u00f6\u011fs\u00fcne parlayan muhte\u015fem bir s\u00fcper y\u0131ld\u0131z amblemi yapal\u0131m.",
        svg: `<path d="M 260 275 L 250 350 L 335 350 L 340 275" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><polygon points="295,290 299,302 311,302 301,310 305,322 295,314 285,322 289,310 279,302 291,302" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Tokal\u0131 Kahraman Kemeri",
        instruction: "Bel b\u00f6lgesine alt\u0131n tokal\u0131 \u015f\u0131k bir kemer band\u0131 yap.",
        voice: "Bel b\u00f6lgesine ortas\u0131nda yuvarlak tokas\u0131 olan alt\u0131n bir kahraman kemeri \u00e7izelim.",
        svg: `<path d="M 245 350 L 340 350 L 335 370 L 250 370 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><circle cx="295" cy="360" r="10" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Dalgalanan Pelerin (Sol Kanat)",
        instruction: "Omuzdan arkaya do\u011fru r\u00fczgarda dalgalanan pelerinin sol k\u0131vr\u0131m\u0131n\u0131 yap.",
        voice: "Omuzdan arkaya do\u011fru r\u00fczgarda alev gibi dalgalanan k\u0131rm\u0131z\u0131 pelerinin sol k\u0131vr\u0131m\u0131n\u0131 yapal\u0131m.",
        svg: `<path d="M 260 270 C 200 240, 150 250, 90 230 C 120 290, 110 350, 160 390" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Dalgalanan Pelerin (Sa\u011f Kanat ve Etek)",
        instruction: "Pelerinin sa\u011f dalgas\u0131n\u0131 ve alt etek k\u0131vr\u0131m\u0131n\u0131 birle\u015ftir.",
        voice: "Pelerinin sa\u011f taraf\u0131n\u0131 ve alt dalgalar\u0131n\u0131 birle\u015ftirerek o efsane pelerini tamamlayal\u0131m.",
        svg: `<path d="M 335 270 C 370 260, 390 280, 400 300 C 360 330, 340 370, 300 400 L 160 390" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Arkaya Uzanan U\u00e7u\u015f Bacaklar\u0131",
        instruction: "Kemerin alt\u0131ndan geriye do\u011fru s\u00fcz\u00fclen aerodinamik bacaklar\u0131 \u00e7iz.",
        voice: "Kemerin alt\u0131ndan geriye do\u011fru s\u00fcper h\u0131zl\u0131 u\u00e7u\u015f bacaklar\u0131n\u0131 uzatal\u0131m.",
        svg: `<path d="M 260 370 L 210 440 M 310 370 L 270 445" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Haval\u0131 \u00c7izmeler",
        instruction: "Bacaklar\u0131n ucuna k\u0131vr\u0131ml\u0131, k\u0131rm\u0131z\u0131 s\u00fcper kahraman \u00e7izmelerini ekle.",
        voice: "Bacaklar\u0131n ucuna sivri ve haval\u0131 k\u0131rm\u0131z\u0131 s\u00fcper kahraman \u00e7izmelerini \u00e7izelim.",
        svg: `<path d="M 210 440 L 180 470 C 170 480, 185 490, 195 480 L 225 450 M 270 445 L 245 480 C 235 490, 250 500, 260 490 L 285 455" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: S\u00fcper H\u0131z R\u00fczgar \u00c7izgileri",
        instruction: "V\u00fccudun etraf\u0131na jet gibi u\u00e7tu\u011funu g\u00f6steren h\u0131z \u00e7izgileri \u00e7ek.",
        voice: "V\u00fccudun etraf\u0131na g\u00f6ky\u00fcz\u00fcn\u00fc yard\u0131\u011f\u0131n\u0131 g\u00f6steren jet h\u0131z\u0131 \u00e7izgileri \u00e7ekelim.",
        svg: `<line x1="80" y1="180" x2="160" y2="180" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="120" y1="210" x2="200" y2="210" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="60" y1="360" x2="130" y2="360" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: A\u015fa\u011f\u0131da Kalan Beyaz Bulutlar",
        instruction: "Kahraman\u0131n alt\u0131nda kalan pamuk gibi bulut k\u00fcmelerini \u00e7iz.",
        voice: "Kahraman\u0131m\u0131z\u0131n ne kadar y\u00fcksekte u\u00e7tu\u011funu g\u00f6steren pamuk bulutlar\u0131 a\u015fa\u011f\u0131ya \u00e7izelim.",
        svg: `<path d="M 120 510 C 140 485, 180 485, 200 510 C 220 490, 260 490, 280 510 C 320 480, 370 480, 400 510 C 440 485, 480 490, 500 515" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_super_kahraman/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve G\u00f6ky\u00fcz\u00fc G\u00fcne\u015fi",
        instruction: "Tebrikler K\u0131van\u00e7! Kahraman\u0131n\u0131 k\u0131rm\u0131z\u0131 pelerin, mavi kost\u00fcm ve par\u0131ldayan alt\u0131n y\u0131ld\u0131zla canland\u0131r!",
        voice: "Tebrikler s\u00fcper K\u0131van\u00e7! \u00c7izimin tek kelimeyle efsane oldu. \u015eimdi kahraman\u0131n\u0131 alev k\u0131rm\u0131z\u0131s\u0131 pelerini ve kraliyet mavisi kost\u00fcm\u00fcyle par\u0131ldat!",
        svg: `
          <defs>
            <linearGradient id="heroSuit" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="60%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="heroCape" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ef4444"/>
              <stop offset="60%" stop-color="#dc2626"/>
              <stop offset="100%" stop-color="#991b1b"/>
            </linearGradient>
            <linearGradient id="heroGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
            <linearGradient id="heroSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fed7aa"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
          </defs>
          <path d="M 120 510 C 140 485, 180 485, 200 510 C 220 490, 260 490, 280 510 C 320 480, 370 480, 400 510 C 440 485, 480 490, 500 515 L 500 560 L 120 560 Z" fill="#e0f2fe" stroke="#0f172a" stroke-width="7"/>
          <path d="M 260 270 C 200 240, 150 250, 90 230 C 120 290, 110 350, 160 390 L 300 400 C 340 370, 360 330, 400 300 C 390 280, 370 260, 335 270 Z" fill="url(#heroCape)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 260 370 L 210 440 L 240 440 L 280 370 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 310 370 L 270 445 L 300 445 L 330 370 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 210 440 L 180 470 C 170 480, 185 490, 195 480 L 225 450 Z" fill="url(#heroCape)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 270 445 L 245 480 C 235 490, 250 500, 260 490 L 285 455 Z" fill="url(#heroCape)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 245 350 L 340 350 L 335 370 L 250 370 Z" fill="url(#heroGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="295" cy="360" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 265 275 L 205 310 C 195 315, 190 305, 195 298 L 245 265 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="195" cy="305" r="8" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="5"/>
          <path d="M 260 275 L 250 350 L 335 350 L 340 275 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <polygon points="295,290 299,302 311,302 301,310 305,322 295,314 285,322 289,310 279,302 291,302" fill="url(#heroGold)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 330 260 L 420 225 L 420 235 L 325 285 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <rect x="380" y="238" width="12" height="22" rx="4" fill="url(#heroGold)" stroke="#0f172a" stroke-width="5"/>
          <circle cx="440" cy="220" r="22" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 425 210 C 430 200, 450 200, 455 212 M 428 222 C 435 215, 452 215, 456 224" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <path d="M 280 250 L 275 270 L 325 270 L 320 250 Z" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 265 210 C 250 170, 350 170, 335 210 C 335 255, 265 255, 265 210 Z" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 190 C 240 140, 290 120, 320 125 C 345 115, 370 135, 355 170 C 365 175, 360 190, 345 195 Z" fill="#451a03" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 260 205 C 275 195, 295 210, 300 205 C 305 210, 325 195, 340 205 C 335 225, 315 225, 300 215 C 285 225, 265 225, 260 205 Z" fill="#1e293b" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="280" cy="210" r="7" fill="#ffffff"/>
          <circle cx="280" cy="210" r="4.5" fill="#0f172a"/>
          <circle cx="278" cy="208" r="2" fill="#ffffff"/>
          <circle cx="320" cy="210" r="7" fill="#ffffff"/>
          <circle cx="320" cy="210" r="4.5" fill="#0f172a"/>
          <circle cx="318" cy="208" r="2" fill="#ffffff"/>
          <path d="M 285 235 Q 300 248, 315 235" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <line x1="80" y1="180" x2="160" y2="180" stroke="#0ea5e9" stroke-width="6" stroke-linecap="round"/>
          <line x1="120" y1="210" x2="200" y2="210" stroke="#0ea5e9" stroke-width="5" stroke-linecap="round"/>
`,
        audio: "audio/voices/cirak_super_kahraman/step_18.mp3"
      },
    ]
  },
];
