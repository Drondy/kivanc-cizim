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
    "count": 31
  },
  {
    "id": "sonic",
    "name": "Kirpi Sonic Dünyası",
    "emoji": "💨",
    "iconSvg": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="catSRing" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fef08a"/><stop offset="50%" stop-color="#facc15"/><stop offset="100%" stop-color="#d97706"/></linearGradient><linearGradient id="catSBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#60a5fa"/><stop offset="45%" stop-color="#2563eb"/><stop offset="100%" stop-color="#1e40af"/></linearGradient><linearGradient id="catSPeach" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffedd5"/><stop offset="100%" stop-color="#fdba74"/></linearGradient></defs><circle cx="62" cy="60" r="46" fill="none" stroke="url(#catSRing)" stroke-width="11"/><circle cx="62" cy="60" r="51.5" fill="none" stroke="#0f172a" stroke-width="3.5"/><circle cx="62" cy="60" r="40.5" fill="none" stroke="#0f172a" stroke-width="3.5"/><path d="M 74 34 L 91 13 L 94 40 Z" fill="url(#catSBlue)" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/><path d="M 42 36 C 64 16, 98 28, 98 62 C 98 84, 70 96, 48 84 C 36 92, 22 97, 16 93 C 20 82, 28 74, 36 68 C 22 72, 10 73, 5 67 C 10 56, 22 48, 36 46 C 24 44, 14 41, 8 36 C 18 24, 32 24, 42 36 Z" fill="url(#catSBlue)" stroke="#0f172a" stroke-width="4.8" stroke-linejoin="round"/><path d="M 44 38 L 36 11 L 63 27 Z" fill="url(#catSBlue)" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/><path d="M 46 34 L 41 19 L 57 28 Z" fill="url(#catSPeach)" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/><path d="M 52 67 C 49 36, 73 31, 78 52 C 83 32, 101 38, 97 67 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/><ellipse cx="70" cy="54" rx="6.5" ry="10.5" fill="#22c55e" stroke="#0f172a" stroke-width="2.2"/><ellipse cx="71" cy="54" rx="3.8" ry="6.8" fill="#0f172a"/><circle cx="69" cy="49.5" r="2.2" fill="#ffffff"/><ellipse cx="87" cy="54" rx="5.5" ry="10" fill="#22c55e" stroke="#0f172a" stroke-width="2.2"/><ellipse cx="88" cy="54" rx="3.2" ry="6.4" fill="#0f172a"/><circle cx="86" cy="49.5" r="2" fill="#ffffff"/><path d="M 45 77 C 45 60, 66 60, 77 68 C 87 60, 102 62, 101 77 C 96 96, 56 97, 45 77 Z" fill="url(#catSPeach)" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/><ellipse cx="102" cy="65" rx="7" ry="4.8" fill="#0f172a" transform="rotate(-12 102 65)"/><ellipse cx="101" cy="63.5" rx="2.5" ry="1.2" fill="#ffffff" opacity="0.6" transform="rotate(-12 101 63.5)"/><path d="M 67 80 C 78 88, 89 84, 94 76" fill="none" stroke="#0f172a" stroke-width="3.8" stroke-linecap="round"/></svg>`,
    "count": 13,
    "desc": "Sonic, Süper Sonic, Tails, Knuckles, Shadow, Amy Rose, Metal Sonic, Silver, Dr. Eggman ve dahası!"
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

  // =========================================================================
  // 🟢 ÇIRAK: SEVIMLI UÇAN PTERODAKTIL
  // =========================================================================
  {
    id: "cirak_ucan_pterodaktil",
    categoryId: "dinozorlar",
    name: "Sevimli U\u00e7an Pterodaktil",
    emoji: "\ud83e\udd95",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "G\u00f6ky\u00fcz\u00fcnde ne\u015feyle s\u00fcz\u00fclen sevimli u\u00e7an dinozor Ptero! Geni\u015f kanatlar, tatl\u0131 gaga ve r\u00fczgarl\u0131 bulutlar.",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, turuncu, sar\u0131 ve a\u00e7\u0131k mavi boyalar",
    welcomeText: "Vuhuu! Merhaba K\u0131van\u00e7! Ben g\u00f6ky\u00fcz\u00fcn\u00fcn sevimli u\u00e7an dinozoru Ptero. Haz\u0131rsan kanatlar\u0131m\u0131z\u0131 a\u00e7\u0131p bulutlar\u0131n \u00fcst\u00fcnde harika bir dinozor \u00e7izelim!",
    welcomeAudio: "audio/voices/cirak_ucan_pterodaktil/welcome.mp3",
    colors: ["#f97316", "#ea580c", "#fef08a", "#0f172a"],
    previewSvg: `
          <defs>
            <linearGradient id="pteroBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fb923c"/>
              <stop offset="60%" stop-color="#f97316"/>
              <stop offset="100%" stop-color="#ea580c"/>
            </linearGradient>
            <linearGradient id="pteroWing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
            <linearGradient id="pteroBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef9c3"/>
              <stop offset="100%" stop-color="#fef08a"/>
            </linearGradient>
          </defs>
          <path d="M 120 480 C 140 455, 180 455, 200 480 C 230 460, 280 460, 300 485 C 340 465, 390 465, 420 490 C 450 475, 490 480, 510 500 L 510 550 L 120 550 Z" fill="#e0f2fe" stroke="#0f172a" stroke-width="7"/>
          <path d="M 255 330 C 190 280, 140 240, 80 230 C 100 290, 140 330, 180 340 C 210 350, 230 365, 250 360 Z" fill="url(#pteroWing)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 290 330 C 360 270, 430 230, 520 210 C 490 280, 430 330, 370 340 C 330 350, 310 370, 290 370 Z" fill="url(#pteroWing)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 260 395 C 255 425, 245 440, 255 445 M 290 395 C 295 425, 305 440, 295 445 M 275 400 L 275 425" stroke="#ea580c" stroke-width="8" stroke-linecap="round" fill="none"/>
          <path d="M 250 320 C 240 360, 240 400, 275 410 C 300 400, 305 360, 290 320 Z" fill="url(#pteroBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 260 330 C 255 360, 255 390, 275 400 C 290 390, 290 360, 280 330 Z" fill="url(#pteroBelly)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 280 200 C 240 170, 190 180, 160 170 C 200 200, 240 220, 270 230 Z" fill="url(#pteroBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 280 200 C 330 200, 390 220, 440 240 C 390 260, 330 260, 280 250 Z" fill="url(#pteroWing)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 310 235 L 420 240" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="410" cy="232" r="4" fill="#0f172a"/>
          <ellipse cx="295" cy="210" rx="20" ry="24" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <circle cx="298" cy="212" r="11" fill="#0f172a"/>
          <circle cx="294" cy="207" r="5" fill="#ffffff"/>
          <circle cx="302" cy="216" r="2.5" fill="#ffffff"/>
          <path d="M 280 185 Q 295 178, 310 188" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <line x1="200" y1="185" x2="215" y2="205" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>
          <line x1="230" y1="195" x2="245" y2="215" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Ba\u015f \u0130bi\u011fi ve \u00dcst Kafa",
        instruction: "Ka\u011f\u0131d\u0131n \u00fcst ortas\u0131na arkaya do\u011fru uzanan zarif ba\u015f ibi\u011fini \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na u\u00e7an dinozorumuzun arkaya do\u011fru uzanan zarif ba\u015f ibi\u011fini \u00e7izelim.",
        svg: `<path d="M 280 200 C 240 170, 190 180, 160 170 C 200 200, 240 220, 270 230" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Uzun ve Sevimli Gaga (\u00dcst \u00c7ene)",
        instruction: "Kafan\u0131n \u00f6n\u00fcnden ileriye do\u011fru kavisli \u00fcst gagay\u0131 uzat.",
        voice: "Kafan\u0131n \u00f6n taraf\u0131ndan ileriye do\u011fru tatl\u0131 ve kavisli \u00fcst gagay\u0131 uzatal\u0131m.",
        svg: `<path d="M 280 200 C 330 200, 390 220, 440 240" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: G\u00fclen Alt Gaga ve \u00c7ene",
        instruction: "Gagan\u0131n ucundan geriye do\u011fru ne\u015feyle a\u00e7\u0131k duran alt gagay\u0131 tamamla.",
        voice: "Gagan\u0131n ucundan geriye do\u011fru ne\u015feyle \u015fark\u0131 s\u00f6yleyen alt gagay\u0131 birle\u015ftirelim.",
        svg: `<path d="M 440 240 C 390 260, 330 260, 280 250" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Burun Deli\u011fi ve Gaga \u00c7izgisi",
        instruction: "Gagan\u0131n ortas\u0131na birle\u015fme \u00e7izgisini ve k\u00fc\u00e7\u00fck bir burun deli\u011fi koy.",
        voice: "Gagan\u0131n ortas\u0131na g\u00fcl\u00fcmseme \u00e7izgisini ve ucuna minik bir burun deli\u011fi kondural\u0131m.",
        svg: `<path d="M 310 235 L 420 240" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><circle cx="410" cy="232" r="4" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: B\u00fcy\u00fck Merakl\u0131 G\u00f6z Yuvarla\u011f\u0131",
        instruction: "Kafan\u0131n ortas\u0131na b\u00fcy\u00fck ve sevimli bir g\u00f6z \u00e7emberi \u00e7iz.",
        voice: "Kafan\u0131n ortas\u0131na merakla etraf\u0131 izleyen kocaman bir g\u00f6z yuvarla\u011f\u0131 \u00e7izelim.",
        svg: `<ellipse cx="295" cy="210" rx="20" ry="24" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: G\u00f6zbebe\u011fi ve \u00c7ifte I\u015f\u0131k Parlamas\u0131",
        instruction: "G\u00f6z\u00fcn i\u00e7ine simsiyah g\u00f6zbebe\u011fini ve parlayan iki beyaz \u0131\u015f\u0131\u011f\u0131 yap.",
        voice: "G\u00f6z\u00fcn i\u00e7ine siyah g\u00f6zbebe\u011fini ve ona ne\u015fe katan iki beyaz \u0131\u015f\u0131k parlamas\u0131n\u0131 ekleyelim.",
        svg: `<circle cx="298" cy="212" r="11" fill="#0f172a"/><circle cx="294" cy="207" r="5" fill="#ffffff"/><circle cx="302" cy="216" r="2.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Ne\u015feli Ka\u015f ve \u0130bik Deseni",
        instruction: "G\u00f6z\u00fcn \u00fcst\u00fcne tatl\u0131 bir ka\u015f ve ibi\u011fine iki k\u00fc\u00e7\u00fck s\u00fcs \u00e7izgisi ekle.",
        voice: "G\u00f6z\u00fcn \u00fcst\u00fcne tatl\u0131 bir ka\u015f ve arkadaki ibi\u011fine \u015firin dinozor \u00e7izgileri yapal\u0131m.",
        svg: `<path d="M 280 185 Q 295 178, 310 188" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/><line x1="200" y1="185" x2="215" y2="205" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="230" y1="195" x2="245" y2="215" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Zarif Boyun ve Tombi\u015f G\u00f6vde",
        instruction: "\u00c7enenin alt\u0131ndan a\u015fa\u011f\u0131ya do\u011fru k\u0131vr\u0131ml\u0131 boyun ve minik g\u00f6vdeyi \u00e7iz.",
        voice: "\u00c7enenin alt\u0131ndan a\u015fa\u011f\u0131ya do\u011fru s\u00fcz\u00fclen zarif boyun ve tombul g\u00f6vdeyi \u00e7izelim.",
        svg: `<path d="M 280 250 C 270 290, 260 320, 250 360 C 260 400, 290 420, 310 400" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Sol Kanat \u00dcst Kemi\u011fi (Geni\u015f A\u00e7\u0131lan)",
        instruction: "G\u00f6vdeden sola ve yukar\u0131ya do\u011fru dev kanat kemi\u011fini uzat.",
        voice: "G\u00f6vdeden sola do\u011fru g\u00f6ky\u00fcz\u00fcn\u00fc kucaklayan dev sol kanat kemi\u011fini uzatal\u0131m.",
        svg: `<path d="M 255 330 C 190 280, 140 240, 80 230" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Sol Kanat U\u00e7 Parmaklar\u0131",
        instruction: "Kanad\u0131n tepesine r\u00fczgar\u0131 yakalayan minik pterodaktil pen\u00e7e parmaklar\u0131n\u0131 yap.",
        voice: "Kanat ekleminin ucuna sevimli k\u00fc\u00e7\u00fck t\u0131rmanma t\u0131rnaklar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 80 230 L 70 215 M 80 230 L 85 210 M 80 230 L 98 215" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Sol Kanat Zar\u0131 Dalgalar\u0131",
        instruction: "Kanad\u0131n ucundan g\u00f6vdeye do\u011fru s\u00fcz\u00fclen dalgal\u0131 u\u00e7u\u015f zar\u0131n\u0131 \u00e7iz.",
        voice: "Kanat ucundan g\u00f6vdeye do\u011fru dalgalanan o harika u\u00e7u\u015f derisi yaylar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 80 230 C 100 290, 140 330, 180 340 C 210 350, 230 365, 250 360" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Sa\u011f Kanat \u00dcst Kemi\u011fi",
        instruction: "G\u00f6vdeden sa\u011fa ve yukar\u0131ya do\u011fru uzanan di\u011fer kanat kemi\u011fini yap.",
        voice: "\u015eimdi sa\u011f tarafa do\u011fru g\u00f6\u011fe y\u00fckselen di\u011fer g\u00fc\u00e7l\u00fc kanat kemi\u011fini \u00e7izelim.",
        svg: `<path d="M 290 330 C 360 270, 430 230, 520 210" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Sa\u011f Kanat U\u00e7 Parmaklar\u0131",
        instruction: "Sa\u011f kanad\u0131n ucuna da minik t\u0131rnaklar\u0131 ekle.",
        voice: "Sa\u011f kanat ucuna da ayn\u0131 sevimli u\u00e7u\u015f t\u0131rnaklar\u0131n\u0131 kondural\u0131m.",
        svg: `<path d="M 520 210 L 535 195 M 520 210 L 525 190 M 520 210 L 510 195" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Sa\u011f Kanat Zar\u0131 Dalgalar\u0131",
        instruction: "Sa\u011f kanat ucundan g\u00f6vdeye do\u011fru dalgal\u0131 \u00e7izgiyi birle\u015ftir.",
        voice: "Sa\u011f kanad\u0131n dalgal\u0131 yelken zar\u0131n\u0131 da g\u00f6vdeye do\u011fru zarif\u00e7e birle\u015ftirelim.",
        svg: `<path d="M 520 210 C 490 280, 430 330, 370 340 C 330 350, 310 370, 290 370" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Minik Arka Ayaklar ve Kuyruk",
        instruction: "G\u00f6vdenin alt\u0131na s\u00fcz\u00fclen iki minik ayak ve minik kuyru\u011fu \u00e7iz.",
        voice: "G\u00f6vdenin alt\u0131na u\u00e7arken arkaya sarkan minik sevimli ayaklar\u0131 ve kuyru\u011fu \u00e7izelim.",
        svg: `<path d="M 260 395 C 255 425, 245 440, 255 445 M 290 395 C 295 425, 305 440, 295 445 M 275 400 L 275 425" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Sar\u0131 Kar\u0131n \u00c7izgileri",
        instruction: "G\u00f6vdenin \u00f6n\u00fcne tatl\u0131 g\u00f6bek desenlerini ekle.",
        voice: "G\u00f6vdenin \u00f6n\u00fcne sar\u0131 tatl\u0131 dinozor g\u00f6be\u011finin \u00e7izgilerini kondural\u0131m.",
        svg: `<path d="M 265 330 Q 280 340, 290 335 M 260 355 Q 275 365, 285 360 M 262 375 Q 275 385, 285 380" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Alt\u0131nda Kalan U\u00e7u\u015f Bulutlar\u0131",
        instruction: "Ptero'nun alt\u0131nda kalan pamuk gibi r\u00fczgar bulutlar\u0131n\u0131 \u00e7iz.",
        voice: "Ptero'nun ne kadar y\u00fcksekte u\u00e7tu\u011funu g\u00f6steren pamuk gibi puf puf bulutlar\u0131 \u00e7izelim.",
        svg: `<path d="M 120 480 C 140 455, 180 455, 200 480 C 230 460, 280 460, 300 485 C 340 465, 390 465, 420 490 C 450 475, 490 480, 510 500" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve G\u00f6ky\u00fcz\u00fc I\u015f\u0131lt\u0131s\u0131",
        instruction: "Tebrikler K\u0131van\u00e7! Ptero'yu turuncu, sar\u0131 ve g\u00f6k mavisi boyalar\u0131nla canland\u0131r!",
        voice: "Muhte\u015femsin K\u0131van\u00e7! U\u00e7an dinozorumuz g\u00f6ky\u00fcz\u00fcnde s\u00fcz\u00fcl\u00fcyor. \u015eimdi onu g\u00fcne\u015f gibi s\u0131cak turuncu ve sar\u0131 renklerle canland\u0131r!",
        svg: `
          <defs>
            <linearGradient id="pteroBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fb923c"/>
              <stop offset="60%" stop-color="#f97316"/>
              <stop offset="100%" stop-color="#ea580c"/>
            </linearGradient>
            <linearGradient id="pteroWing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
            <linearGradient id="pteroBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef9c3"/>
              <stop offset="100%" stop-color="#fef08a"/>
            </linearGradient>
          </defs>
          <path d="M 120 480 C 140 455, 180 455, 200 480 C 230 460, 280 460, 300 485 C 340 465, 390 465, 420 490 C 450 475, 490 480, 510 500 L 510 550 L 120 550 Z" fill="#e0f2fe" stroke="#0f172a" stroke-width="7"/>
          <path d="M 255 330 C 190 280, 140 240, 80 230 C 100 290, 140 330, 180 340 C 210 350, 230 365, 250 360 Z" fill="url(#pteroWing)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 290 330 C 360 270, 430 230, 520 210 C 490 280, 430 330, 370 340 C 330 350, 310 370, 290 370 Z" fill="url(#pteroWing)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 260 395 C 255 425, 245 440, 255 445 M 290 395 C 295 425, 305 440, 295 445 M 275 400 L 275 425" stroke="#ea580c" stroke-width="8" stroke-linecap="round" fill="none"/>
          <path d="M 250 320 C 240 360, 240 400, 275 410 C 300 400, 305 360, 290 320 Z" fill="url(#pteroBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 260 330 C 255 360, 255 390, 275 400 C 290 390, 290 360, 280 330 Z" fill="url(#pteroBelly)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 280 200 C 240 170, 190 180, 160 170 C 200 200, 240 220, 270 230 Z" fill="url(#pteroBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 280 200 C 330 200, 390 220, 440 240 C 390 260, 330 260, 280 250 Z" fill="url(#pteroWing)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 310 235 L 420 240" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="410" cy="232" r="4" fill="#0f172a"/>
          <ellipse cx="295" cy="210" rx="20" ry="24" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <circle cx="298" cy="212" r="11" fill="#0f172a"/>
          <circle cx="294" cy="207" r="5" fill="#ffffff"/>
          <circle cx="302" cy="216" r="2.5" fill="#ffffff"/>
          <path d="M 280 185 Q 295 178, 310 188" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <line x1="200" y1="185" x2="215" y2="205" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>
          <line x1="230" y1="195" x2="245" y2="215" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>
`,
        audio: "audio/voices/cirak_ucan_pterodaktil/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🟢 ÇIRAK: TOMBIŞ SEVIMLI PANDA
  // =========================================================================
  {
    id: "cirak_tombis_panda",
    categoryId: "hayvanlar",
    name: "Tombi\u015f Sevimli Panda",
    emoji: "\ud83d\udc3c",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Yemye\u015fil taze bambusunu afiyetle yiyen tombi\u015f dev panda! Siyah g\u00f6z bantlar\u0131 ve sevimli yuvarlak kulaklar.",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, siyah, ye\u015fil ve pembe boyalar",
    welcomeText: "K\u0131t\u0131r k\u0131t\u0131r! Selam K\u0131van\u00e7! Bambu orman\u0131n\u0131n en tatl\u0131 pandas\u0131 burada. Ka\u011f\u0131d\u0131n\u0131 haz\u0131rla, birlikte kocaman tombul bir panda \u00e7izelim!",
    welcomeAudio: "audio/voices/cirak_tombis_panda/welcome.mp3",
    colors: ["#ffffff", "#1e293b", "#22c55e", "#f472b6"],
    previewSvg: `
          <defs>
            <linearGradient id="pandaDark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="60%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <linearGradient id="pandaBamboo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#86efac"/>
              <stop offset="50%" stop-color="#22c55e"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="465" rx="180" ry="20" fill="#a3e635" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="300" cy="370" rx="110" ry="100" fill="#ffffff" stroke="#0f172a" stroke-width="10"/>
          <path d="M 190 310 C 240 330, 360 330, 410 310 L 410 360 C 360 380, 240 380, 190 360 Z" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 220 280 C 180 300, 180 360, 230 365 C 260 365, 260 320, 240 285 Z" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 380 280 C 420 300, 420 360, 370 365 C 340 365, 340 320, 360 285 Z" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="200" cy="430" rx="36" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="200" cy="432" rx="18" ry="12" fill="#475569" stroke="#0f172a" stroke-width="3"/>
          <circle cx="180" cy="415" r="5" fill="#475569"/>
          <circle cx="195" cy="410" r="5" fill="#475569"/>
          <circle cx="210" cy="410" r="5" fill="#475569"/>
          <circle cx="225" cy="415" r="5" fill="#475569"/>
          <ellipse cx="400" cy="430" rx="36" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="400" cy="432" rx="18" ry="12" fill="#475569" stroke="#0f172a" stroke-width="3"/>
          <circle cx="380" cy="415" r="5" fill="#475569"/>
          <circle cx="395" cy="410" r="5" fill="#475569"/>
          <circle cx="410" cy="410" r="5" fill="#475569"/>
          <circle cx="425" cy="415" r="5" fill="#475569"/>
          <path d="M 270 410 L 330 250" stroke="url(#pandaBamboo)" stroke-width="12" stroke-linecap="round"/>
          <path d="M 270 410 L 330 250" stroke="#0f172a" stroke-width="8" stroke-linecap="round" fill="none"/>
          <path d="M 330 250 C 350 230, 370 235, 365 250 C 350 255, 340 255, 330 250 Z" fill="#22c55e" stroke="#0f172a" stroke-width="6"/>
          <circle cx="230" cy="135" r="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <circle cx="370" cy="135" r="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="300" cy="200" rx="90" ry="80" fill="#ffffff" stroke="#0f172a" stroke-width="10"/>
          <ellipse cx="260" cy="195" rx="22" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="8" transform="rotate(-15 260 195)"/>
          <circle cx="262" cy="195" r="10" fill="#0f172a"/>
          <circle cx="259" cy="190" r="4.5" fill="#ffffff"/>
          <circle cx="266" cy="198" r="2" fill="#ffffff"/>
          <ellipse cx="340" cy="195" rx="22" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="8" transform="rotate(15 340 195)"/>
          <circle cx="338" cy="195" r="10" fill="#0f172a"/>
          <circle cx="335" cy="190" r="4.5" fill="#ffffff"/>
          <circle cx="342" cy="198" r="2" fill="#ffffff"/>
          <ellipse cx="235" cy="225" rx="12" ry="8" fill="#fbcfe8" stroke="#f472b6" stroke-width="2"/>
          <ellipse cx="365" cy="225" rx="12" ry="8" fill="#fbcfe8" stroke="#f472b6" stroke-width="2"/>
          <path d="M 292 225 L 308 225 L 300 235 Z" fill="#0f172a" stroke="#0f172a" stroke-width="4"/>
          <path d="M 300 235 L 300 245 M 300 245 C 290 255, 275 252, 270 242 M 300 245 C 310 255, 325 252, 330 242" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Yuvarlak Tombul Kafa",
        instruction: "Sayfan\u0131n \u00fcst ortas\u0131na pandan\u0131n kocaman tombul kafa \u00e7emberini \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na sevimli pandam\u0131z\u0131n kocaman tombul kafa yuvarla\u011f\u0131n\u0131 \u00e7izelim.",
        svg: `<ellipse cx="300" cy="200" rx="90" ry="80" fill="none" stroke="#0f172a" stroke-width="10"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Sol Yuvarlak Siyah Kulak",
        instruction: "Kafan\u0131n sol tepesine yuvarlak tatl\u0131 bir kulak kondur.",
        voice: "Kafan\u0131n sol tepesine f\u0131nd\u0131k gibi yuvarlak bir panda kula\u011f\u0131 \u00e7izelim.",
        svg: `<circle cx="230" cy="135" r="26" fill="none" stroke="#0f172a" stroke-width="9"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Sa\u011f Yuvarlak Siyah Kulak",
        instruction: "Kafan\u0131n sa\u011f tepesine ikinci yuvarlak kula\u011f\u0131 ekle.",
        voice: "Kafan\u0131n sa\u011f tepesine de e\u015fle\u015fen ikinci sevimli kula\u011f\u0131m\u0131z\u0131 kondural\u0131m.",
        svg: `<circle cx="370" cy="135" r="26" fill="none" stroke="#0f172a" stroke-width="9"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Sol Siyah G\u00f6z Yamas\u0131 (Oval)",
        instruction: "Y\u00fcz\u00fcn soluna pandalar\u0131n \u00fcnl\u00fc e\u011fik oval g\u00f6z lekesini \u00e7iz.",
        voice: "Y\u00fcz\u00fcn sol taraf\u0131na pandalar\u0131n o me\u015fhur e\u011fik siyah g\u00f6z lekesini \u00e7izelim.",
        svg: `<ellipse cx="260" cy="195" rx="22" ry="26" fill="none" stroke="#0f172a" stroke-width="8" transform="rotate(-15 260 195)"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Sa\u011f Siyah G\u00f6z Yamas\u0131 (Oval)",
        instruction: "Y\u00fcz\u00fcn sa\u011f\u0131na da di\u011fer e\u011fik g\u00f6z lekesini yap.",
        voice: "Sa\u011f tarafa da ayn\u0131 \u015fekilde tatl\u0131 siyah g\u00f6z lekesini kondural\u0131m.",
        svg: `<ellipse cx="340" cy="195" rx="22" ry="26" fill="none" stroke="#0f172a" stroke-width="8" transform="rotate(15 340 195)"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Sol G\u00f6zbebe\u011fi ve \u00c7ifte Par\u0131lt\u0131",
        instruction: "Sol lekenin i\u00e7ine parlak siyah g\u00f6zbebe\u011fi ve beyaz par\u0131lt\u0131lar\u0131 koy.",
        voice: "Sol lekenin i\u00e7ine \u0131\u015f\u0131l \u0131\u015f\u0131l bakan g\u00f6zbebe\u011fini ve \u00e7ifte par\u0131lt\u0131s\u0131n\u0131 ekleyelim.",
        svg: `<circle cx="262" cy="195" r="10" fill="#0f172a"/><circle cx="259" cy="190" r="4.5" fill="#ffffff"/><circle cx="266" cy="198" r="2" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Sa\u011f G\u00f6zbebe\u011fi ve \u00c7ifte Par\u0131lt\u0131",
        instruction: "Sa\u011f lekenin i\u00e7ine de \u0131\u015f\u0131ldayan g\u00f6zbebe\u011fini \u00e7iz.",
        voice: "Sa\u011f lekenin i\u00e7ine de ayn\u0131 \u0131\u015f\u0131l \u0131\u015f\u0131l g\u00f6zbebe\u011fimizi yerle\u015ftirelim.",
        svg: `<circle cx="338" cy="195" r="10" fill="#0f172a"/><circle cx="335" cy="190" r="4.5" fill="#ffffff"/><circle cx="342" cy="198" r="2" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: \u00dc\u00e7gen Burun ve G\u00fclen A\u011f\u0131z",
        instruction: "\u0130ki g\u00f6z\u00fcn ortas\u0131na ters \u00fc\u00e7gen burun ve 'W' \u015feklinde tatl\u0131 bir g\u00fcl\u00fcmseme yap.",
        voice: "G\u00f6zlerin ortas\u0131na minik bir \u00fc\u00e7gen burun ve iki yana k\u0131vr\u0131lan 'W' \u015feklinde g\u00fclen a\u011f\u0131z \u00e7izelim.",
        svg: `<path d="M 292 225 L 308 225 L 300 235 Z" fill="#0f172a" stroke="#0f172a" stroke-width="4"/><path d="M 300 235 L 300 245 M 300 245 C 290 255, 275 252, 270 242 M 300 245 C 310 255, 325 252, 330 242" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Pembe Yanak Daireleri",
        instruction: "G\u00fcl\u00fcmsemesinin iki yan\u0131na sevimli pembe all\u0131k \u00e7emberleri koy.",
        voice: "Yanaklar\u0131na utanga\u00e7 ve tatl\u0131 iki all\u0131k \u00e7emberi kondural\u0131m.",
        svg: `<ellipse cx="235" cy="225" rx="12" ry="8" fill="none" stroke="#0f172a" stroke-width="4"/><ellipse cx="365" cy="225" rx="12" ry="8" fill="none" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Dev Tombul G\u00f6bek \u00c7emberi",
        instruction: "Kafan\u0131n alt\u0131ndan yere oturan kocaman beyaz g\u00f6be\u011fi \u00e7iz.",
        voice: "Kafan\u0131n alt\u0131ndan yere oturan o devasa ve yumu\u015fac\u0131k pofuduk g\u00f6be\u011fi \u00e7izelim.",
        svg: `<ellipse cx="300" cy="370" rx="110" ry="100" fill="none" stroke="#0f172a" stroke-width="10"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Sol Siyah Kol (Bambuyu Tutan)",
        instruction: "Omuzdan ileri do\u011fru k\u0131vr\u0131lan tombul siyah kolu yap.",
        voice: "Omuzdan g\u00f6\u011fse do\u011fru uzanan ve bambuyu tutan tombi\u015f sol kolu \u00e7izelim.",
        svg: `<path d="M 220 280 C 180 300, 180 360, 230 365 C 260 365, 260 320, 240 285" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Sa\u011f Siyah Kol",
        instruction: "Sa\u011f taraftan bambuya uzanan di\u011fer kolu ve pen\u00e7eyi \u00e7iz.",
        voice: "Sa\u011f taraftan lezzetli bambuyu kavrayan di\u011fer g\u00fc\u00e7l\u00fc panda kolunu \u00e7izelim.",
        svg: `<path d="M 380 280 C 420 300, 420 360, 370 365 C 340 365, 340 320, 360 285" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Taze Ye\u015fil Bambu Dal\u0131",
        instruction: "Kollar\u0131 aras\u0131ndan a\u011fz\u0131na do\u011fru uzanan bo\u011fumlu bambu sap\u0131n\u0131 \u00e7iz.",
        voice: "Kollar\u0131 aras\u0131ndan a\u011fz\u0131na uzanan \u00e7\u0131t\u0131r \u00e7\u0131t\u0131r ye\u015fil bambu kam\u0131\u015f\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 270 410 L 330 250" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><line x1="280" y1="375" x2="295" y2="380" stroke="#0f172a" stroke-width="5"/><line x1="300" y1="320" x2="315" y2="325" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Taze Bambu Yapraklar\u0131",
        instruction: "Bambunun tepesine iki leziz ye\u015fil yaprak k\u0131vr\u0131m\u0131 ekle.",
        voice: "Bambunun ucuna pandan\u0131n yemeye bay\u0131ld\u0131\u011f\u0131 sivri ye\u015fil yapraklar\u0131 ekleyelim.",
        svg: `<path d="M 330 250 C 350 230, 370 235, 365 250 C 350 255, 340 255, 330 250 Z" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 320 270 C 345 270, 360 285, 345 290 Z" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Sol Oturan Bacak ve Pati Taban\u0131",
        instruction: "G\u00f6vdenin sol alt\u0131na geni\u015f oturan baca\u011f\u0131 ve yuvarlak taban\u0131n\u0131 yap.",
        voice: "G\u00f6vdenin sol alt\u0131na ba\u011fda\u015f kurmu\u015f kocaman ayak taban\u0131n\u0131 \u00e7izelim.",
        svg: `<ellipse cx="200" cy="430" rx="36" ry="26" fill="none" stroke="#0f172a" stroke-width="9"/><ellipse cx="200" cy="432" rx="18" ry="12" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="180" cy="415" r="5" fill="#0f172a"/><circle cx="195" cy="410" r="5" fill="#0f172a"/><circle cx="210" cy="410" r="5" fill="#0f172a"/><circle cx="225" cy="415" r="5" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Sa\u011f Oturan Bacak ve Pati Taban\u0131",
        instruction: "G\u00f6vdenin sa\u011f alt\u0131na da ayn\u0131 \u015fekilde sevimli ayak taban\u0131n\u0131 ekle.",
        voice: "Sa\u011f tarafa da ayn\u0131 sevimli ayak taban\u0131n\u0131 ve minik pati parmaklar\u0131n\u0131 kondural\u0131m.",
        svg: `<ellipse cx="400" cy="430" rx="36" ry="26" fill="none" stroke="#0f172a" stroke-width="9"/><ellipse cx="400" cy="432" rx="18" ry="12" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="380" cy="415" r="5" fill="#0f172a"/><circle cx="395" cy="410" r="5" fill="#0f172a"/><circle cx="410" cy="410" r="5" fill="#0f172a"/><circle cx="425" cy="415" r="5" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Zemin \u00c7imleri ve D\u00f6k\u00fclen Yapraklar",
        instruction: "Pandan\u0131n alt\u0131na \u00e7im yapraklar\u0131 ve d\u00f6k\u00fclen bambular\u0131 \u00e7iz.",
        voice: "Pandan\u0131n alt\u0131na rahat\u00e7a oturdu\u011fu \u00e7im pufunu ve d\u00f6k\u00fclen yapraklar\u0131 ekleyelim.",
        svg: `<path d="M 130 465 C 220 445, 380 445, 470 465" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><path d="M 150 455 L 160 440 L 170 455 M 430 455 L 440 440 L 450 455" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_tombis_panda/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve Bambu Orman\u0131",
        instruction: "Tebrikler K\u0131van\u00e7! Panday\u0131 siyah-beyaz z\u0131tl\u0131\u011f\u0131 ve yemye\u015fil bambularla boya!",
        voice: "Harikas\u0131n K\u0131van\u00e7! Tombi\u015f pandam\u0131z bambusunu afiyetle yiyor. \u015eimdi onu parlak siyah, bembeyaz ve yemye\u015fil renklerle canland\u0131r!",
        svg: `
          <defs>
            <linearGradient id="pandaDark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="60%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <linearGradient id="pandaBamboo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#86efac"/>
              <stop offset="50%" stop-color="#22c55e"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="465" rx="180" ry="20" fill="#a3e635" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="300" cy="370" rx="110" ry="100" fill="#ffffff" stroke="#0f172a" stroke-width="10"/>
          <path d="M 190 310 C 240 330, 360 330, 410 310 L 410 360 C 360 380, 240 380, 190 360 Z" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 220 280 C 180 300, 180 360, 230 365 C 260 365, 260 320, 240 285 Z" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 380 280 C 420 300, 420 360, 370 365 C 340 365, 340 320, 360 285 Z" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="200" cy="430" rx="36" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="200" cy="432" rx="18" ry="12" fill="#475569" stroke="#0f172a" stroke-width="3"/>
          <circle cx="180" cy="415" r="5" fill="#475569"/>
          <circle cx="195" cy="410" r="5" fill="#475569"/>
          <circle cx="210" cy="410" r="5" fill="#475569"/>
          <circle cx="225" cy="415" r="5" fill="#475569"/>
          <ellipse cx="400" cy="430" rx="36" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="400" cy="432" rx="18" ry="12" fill="#475569" stroke="#0f172a" stroke-width="3"/>
          <circle cx="380" cy="415" r="5" fill="#475569"/>
          <circle cx="395" cy="410" r="5" fill="#475569"/>
          <circle cx="410" cy="410" r="5" fill="#475569"/>
          <circle cx="425" cy="415" r="5" fill="#475569"/>
          <path d="M 270 410 L 330 250" stroke="url(#pandaBamboo)" stroke-width="12" stroke-linecap="round"/>
          <path d="M 270 410 L 330 250" stroke="#0f172a" stroke-width="8" stroke-linecap="round" fill="none"/>
          <path d="M 330 250 C 350 230, 370 235, 365 250 C 350 255, 340 255, 330 250 Z" fill="#22c55e" stroke="#0f172a" stroke-width="6"/>
          <circle cx="230" cy="135" r="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <circle cx="370" cy="135" r="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="300" cy="200" rx="90" ry="80" fill="#ffffff" stroke="#0f172a" stroke-width="10"/>
          <ellipse cx="260" cy="195" rx="22" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="8" transform="rotate(-15 260 195)"/>
          <circle cx="262" cy="195" r="10" fill="#0f172a"/>
          <circle cx="259" cy="190" r="4.5" fill="#ffffff"/>
          <circle cx="266" cy="198" r="2" fill="#ffffff"/>
          <ellipse cx="340" cy="195" rx="22" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="8" transform="rotate(15 340 195)"/>
          <circle cx="338" cy="195" r="10" fill="#0f172a"/>
          <circle cx="335" cy="190" r="4.5" fill="#ffffff"/>
          <circle cx="342" cy="198" r="2" fill="#ffffff"/>
          <ellipse cx="235" cy="225" rx="12" ry="8" fill="#fbcfe8" stroke="#f472b6" stroke-width="2"/>
          <ellipse cx="365" cy="225" rx="12" ry="8" fill="#fbcfe8" stroke="#f472b6" stroke-width="2"/>
          <path d="M 292 225 L 308 225 L 300 235 Z" fill="#0f172a" stroke="#0f172a" stroke-width="4"/>
          <path d="M 300 235 L 300 245 M 300 245 C 290 255, 275 252, 270 242 M 300 245 C 310 255, 325 252, 330 242" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
`,
        audio: "audio/voices/cirak_tombis_panda/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🟢 ÇIRAK: CESUR İTFAIYE ARABASI
  // =========================================================================
  {
    id: "cirak_itfaiye_kamyonu",
    categoryId: "arabalar",
    name: "Cesur \u0130tfaiye Arabas\u0131",
    emoji: "\ud83d\ude92",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "D\u00f6nen kurtarma merdiveni, yan\u0131p s\u00f6nen mavi sirenler ve su hortumu! K\u0131van\u00e7'\u0131n kahraman itfaiye arac\u0131.",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, k\u0131rm\u0131z\u0131, sar\u0131, mavi ve gri boyalar",
    welcomeText: "Daa dii daa dii! Merhaba K\u0131van\u00e7! Yang\u0131nlar\u0131 s\u00f6nd\u00fcren, kedileri a\u011fa\u00e7tan kurtaran cesur itfaiye kamyonunu \u00e7izmeye haz\u0131r m\u0131s\u0131n? Sirenleri \u00e7al\u0131\u015ft\u0131ral\u0131m!",
    welcomeAudio: "audio/voices/cirak_itfaiye_kamyonu/welcome.mp3",
    colors: ["#ef4444", "#dc2626", "#facc15", "#38bdf8"],
    previewSvg: `
          <defs>
            <linearGradient id="fireTruckRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="fireLadder" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f1f5f9"/>
              <stop offset="100%" stop-color="#94a3b8"/>
            </linearGradient>
          </defs>
          <line x1="80" y1="445" x2="520" y2="445" stroke="#334155" stroke-width="10" stroke-linecap="round"/>
          <line x1="100" y1="470" x2="180" y2="470" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="240" y1="470" x2="320" y2="470" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="380" y1="470" x2="460" y2="470" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <rect x="120" y="240" width="380" height="150" rx="16" fill="url(#fireTruckRed)" stroke="#0f172a" stroke-width="10"/>
          <rect x="120" y="340" width="380" height="20" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 395 255 L 485 255 L 485 315 L 395 315 Z" fill="#93c5fd" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 330 255 L 370 255 L 370 315 L 330 315 Z" fill="#93c5fd" stroke="#0f172a" stroke-width="7"/>
          <rect x="420" y="335" width="20" height="8" rx="2" fill="#e2e8f0" stroke="#0f172a" stroke-width="4"/>
          <rect x="160" y="215" width="60" height="25" rx="4" fill="#64748b" stroke="#0f172a" stroke-width="7"/>
          <path d="M 170 215 L 360 170 M 175 200 L 365 155" stroke="url(#fireLadder)" stroke-width="10" stroke-linecap="round"/>
          <path d="M 170 215 L 360 170 M 175 200 L 365 155" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
          <line x1="200" y1="202" x2="204" y2="188" stroke="#0f172a" stroke-width="5"/>
          <line x1="235" y1="194" x2="239" y2="180" stroke="#0f172a" stroke-width="5"/>
          <line x1="270" y1="186" x2="274" y2="172" stroke="#0f172a" stroke-width="5"/>
          <line x1="305" y1="178" x2="309" y2="164" stroke="#0f172a" stroke-width="5"/>
          <line x1="340" y1="170" x2="344" y2="156" stroke="#0f172a" stroke-width="5"/>
          <rect x="415" y="222" width="22" height="18" rx="4" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>
          <rect x="445" y="222" width="22" height="18" rx="4" fill="#ef4444" stroke="#0f172a" stroke-width="6"/>
          <circle cx="490" cy="340" r="10" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="490" cy="365" r="8" fill="#f97316" stroke="#0f172a" stroke-width="5"/>
          <circle cx="230" cy="300" r="28" fill="#f59e0b" stroke="#0f172a" stroke-width="8"/>
          <circle cx="230" cy="300" r="16" fill="#b45309" stroke="#0f172a" stroke-width="6"/>
          <circle cx="420" cy="405" r="38" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="420" cy="405" r="18" fill="#e2e8f0" stroke="#0f172a" stroke-width="7"/>
          <circle cx="420" cy="405" r="4" fill="#0f172a"/>
          <circle cx="270" cy="405" r="38" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="270" cy="405" r="18" fill="#e2e8f0" stroke="#0f172a" stroke-width="7"/>
          <circle cx="270" cy="405" r="4" fill="#0f172a"/>
          <circle cx="180" cy="405" r="38" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="180" cy="405" r="18" fill="#e2e8f0" stroke="#0f172a" stroke-width="7"/>
          <circle cx="180" cy="405" r="4" fill="#0f172a"/>
          <circle cx="315" cy="315" r="5" fill="#38bdf8"/>
          <circle cx="330" cy="305" r="7" fill="#38bdf8"/>
          <circle cx="350" cy="295" r="6" fill="#38bdf8"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: B\u00fcy\u00fck Kamyon G\u00f6vdesi Dikd\u00f6rtgeni",
        instruction: "Sayfan\u0131n ortas\u0131na geni\u015f ve sa\u011flam itfaiye kamyonu ana g\u00f6vdesini \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n ortas\u0131na cesur itfaiye kamyonumuzun geni\u015f k\u0131rm\u0131z\u0131 g\u00f6vde kutusunu \u00e7izelim.",
        svg: `<rect x="120" y="240" width="380" height="150" rx="16" fill="none" stroke="#0f172a" stroke-width="10"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: S\u00fcr\u00fcc\u00fc Kabini Ayr\u0131m\u0131 ve \u00d6n Cam",
        instruction: "\u00d6n tarafa s\u00fcr\u00fcc\u00fc kabinini ay\u0131ran dik \u00e7izgiyi ve geni\u015f \u00f6n cam\u0131 \u00e7iz.",
        voice: "Kamyonun \u00f6n\u00fcne itfaiyeci amcalar\u0131n oturdu\u011fu s\u00fcr\u00fcc\u00fc cam\u0131n\u0131 ve kabin \u00e7izgisini yapal\u0131m.",
        svg: `<line x1="380" y1="240" x2="380" y2="390" stroke="#0f172a" stroke-width="8"/><path d="M 395 255 L 485 255 L 485 315 L 395 315 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Yan Kabin Cam\u0131 ve Kap\u0131",
        instruction: "Kabin yan\u0131na ikinci cam\u0131 ve kap\u0131 kolunu ekle.",
        voice: "Kabin kap\u0131s\u0131n\u0131 ve arkas\u0131ndaki yan cam\u0131 d\u00fczg\u00fcn \u00e7izgilerle ekleyelim.",
        svg: `<path d="M 330 255 L 370 255 L 370 315 L 330 315 Z" fill="none" stroke="#0f172a" stroke-width="7"/><rect x="420" y="335" width="20" height="8" rx="2" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Tavan Kurtarma Merdiveni (Taban)",
        instruction: "Kamyonun tavan\u0131na a\u00e7\u0131lan kurtarma merdiveninin taban kulesini \u00e7iz.",
        voice: "Tavan\u0131n \u00fcst\u00fcne y\u00fcksek binalara uzanan d\u00f6ner merdiven kulesini \u00e7izelim.",
        svg: `<rect x="160" y="215" width="60" height="25" rx="4" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Uzun Kurtarma Merdiveni ve Basamaklar",
        instruction: "Tavandan \u00f6ne do\u011fru uzanan \u00e7ift \u00e7ubuklu merdiveni ve basamaklar\u0131 \u00e7iz.",
        voice: "Tavandan ileri do\u011fru uzanan uzun yang\u0131n merdivenini ve t\u0131rmanma basamaklar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 170 215 L 360 170 M 175 200 L 365 155" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><line x1="200" y1="202" x2="204" y2="188" stroke="#0f172a" stroke-width="5"/><line x1="235" y1="194" x2="239" y2="180" stroke="#0f172a" stroke-width="5"/><line x1="270" y1="186" x2="274" y2="172" stroke="#0f172a" stroke-width="5"/><line x1="305" y1="178" x2="309" y2="164" stroke="#0f172a" stroke-width="5"/><line x1="340" y1="170" x2="344" y2="156" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Yan\u0131p S\u00f6nen Mavi & K\u0131rm\u0131z\u0131 Sirenler",
        instruction: "Kabin tavan\u0131na acil durum \u0131\u015f\u0131\u011f\u0131 siren lambalar\u0131n\u0131 yerle\u015ftir.",
        voice: "Kabin tavan\u0131na 'Daa dii' diye yan\u0131p s\u00f6nen yuvarlak siren lambalar\u0131n\u0131 \u00e7izelim.",
        svg: `<rect x="415" y="222" width="22" height="18" rx="4" fill="none" stroke="#0f172a" stroke-width="6"/><rect x="445" y="222" width="22" height="18" rx="4" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: \u00d6n \u00c7ift Farlar ve Tampon",
        instruction: "Kamyonun en \u00f6n\u00fcne parlak farlar\u0131 ve sa\u011flam \u00e7elik tamponu yap.",
        voice: "Kamyonun \u00f6n\u00fcne geceyi ayd\u0131nlatan farlar\u0131 ve g\u00fc\u00e7l\u00fc koruma tamponunu \u00e7izelim.",
        svg: `<circle cx="490" cy="340" r="10" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="490" cy="365" r="8" fill="none" stroke="#0f172a" stroke-width="5"/><rect x="495" y="375" width="20" height="20" rx="4" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: \u00d6n Tekerlek Yuvas\u0131 ve Jant",
        instruction: "Kabin alt\u0131na \u00f6n tekerlek oyu\u011funu ve jant \u00e7emberini \u00e7iz.",
        voice: "Kabin alt\u0131na \u00f6n tekerlek i\u00e7in yuvarlak kavis ve jant \u00e7emberini \u00e7izelim.",
        svg: `<circle cx="420" cy="405" r="38" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="420" cy="405" r="18" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Arka \u0130kiz Tekerlekler (Birinci)",
        instruction: "Arka tarafa a\u011f\u0131r y\u00fck ta\u015f\u0131yan birinci arka tekerle\u011fi yap.",
        voice: "Arka tarafa kamyonun dev su deposunu ta\u015f\u0131yan arka tekerle\u011fi \u00e7izelim.",
        svg: `<circle cx="270" cy="405" r="38" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="270" cy="405" r="18" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Arka \u0130kiz Tekerlekler (\u0130kinci)",
        instruction: "Hemen arkas\u0131na ikinci g\u00fc\u00e7l\u00fc tekerle\u011fi ekle.",
        voice: "Hemen yan\u0131na ikinci arka tekerle\u011fi de ekleyerek \u00fc\u00e7 tekerlekli s\u00fcper itfaiyemizi kural\u0131m.",
        svg: `<circle cx="180" cy="405" r="38" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="180" cy="405" r="18" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Tekerlek \u0130\u00e7i Bijon Noktalar\u0131",
        instruction: "Her \u00fc\u00e7 jant\u0131n ortas\u0131na k\u00fc\u00e7\u00fck bijon noktalar\u0131n\u0131 koy.",
        voice: "Her \u00fc\u00e7 jant\u0131n i\u00e7ine sa\u011flam demir c\u0131vata noktalar\u0131n\u0131 kondural\u0131m.",
        svg: `<circle cx="420" cy="405" r="4" fill="#0f172a"/><circle cx="270" cy="405" r="4" fill="#0f172a"/><circle cx="180" cy="405" r="4" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Rulo Su Hortumu Makaras\u0131",
        instruction: "Kamyonun g\u00f6vdesine sar\u0131l\u0131 yang\u0131n hortumunu spiral \u015feklinde \u00e7iz.",
        voice: "G\u00f6vdenin yan\u0131na alevlere su f\u0131\u015fk\u0131rtan rulo hortum \u00e7emberlerini \u00e7izelim.",
        svg: `<circle cx="230" cy="300" r="28" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="230" cy="300" r="16" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: \u0130tfaiye Su Hortumu Nozulu (Tabancas\u0131)",
        instruction: "Hortumun ucuna sar\u0131 pirin\u00e7 su s\u0131kma tabancas\u0131n\u0131 \u00e7iz.",
        voice: "Hortumun ucuna bas\u0131n\u00e7l\u0131 su s\u0131kan parlak yang\u0131n tabancas\u0131n\u0131 ekleyelim.",
        svg: `<path d="M 255 310 L 290 325 L 295 315 L 260 300" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Beyaz Yan G\u00fcvenlik \u015eeridi",
        instruction: "Kamyonun boydan boya uzanan \u015f\u0131k beyaz \u00e7izgisini \u00e7ek.",
        voice: "Kamyonumuzun boydan boya uzanan \u015f\u0131k ve haval\u0131 beyaz \u015ferit \u00e7izgisini \u00e7ekelim.",
        svg: `<line x1="120" y1="350" x2="495" y2="350" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Arka Ekipman Dolap Kollar\u0131",
        instruction: "Arka kasadaki kurtarma aletleri dolap panellerini \u00e7iz.",
        voice: "Arka kasada baltalar\u0131n ve kasklar\u0131n durdu\u011fu dolap kapaklar\u0131n\u0131 \u00e7izelim.",
        svg: `<rect x="135" y="260" width="45" height="70" rx="4" fill="none" stroke="#0f172a" stroke-width="5"/><line x1="145" y1="295" x2="165" y2="295" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: F\u0131\u015fk\u0131ran Su Damlalar\u0131",
        instruction: "Hortumun ucundan ne\u015feyle f\u0131\u015fk\u0131ran su damlac\u0131klar\u0131n\u0131 yap.",
        voice: "Hortumun ucundan g\u00f6\u011fe do\u011fru f\u0131\u015fk\u0131ran \u015f\u0131k\u0131r \u015f\u0131k\u0131r su damlac\u0131klar\u0131n\u0131 \u00e7izelim.",
        svg: `<circle cx="315" cy="315" r="5" fill="#0f172a"/><circle cx="330" cy="305" r="7" fill="#0f172a"/><circle cx="350" cy="295" r="6" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Yol Asfalt \u00c7izgileri",
        instruction: "Tekerleklerin alt\u0131na h\u0131zla ilerledi\u011fi asfalt yol \u00e7izgisini \u00e7ek.",
        voice: "Tekerleklerin alt\u0131na g\u00f6reve ko\u015fan asfalt yolu ve kesik \u015ferit \u00e7izgilerini \u00e7izelim.",
        svg: `<line x1="80" y1="445" x2="520" y2="445" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><line x1="100" y1="470" x2="180" y2="470" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="240" y1="470" x2="320" y2="470" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="380" y1="470" x2="460" y2="470" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve G\u00f6rev Alarm\u0131",
        instruction: "Tebrikler K\u0131van\u00e7! \u0130tfaiye arac\u0131n\u0131 alev k\u0131rm\u0131z\u0131s\u0131, parlak sar\u0131 ve mavi sirenlerle boya!",
        voice: "Harika bir kahramanl\u0131k \u00e7izimi oldu K\u0131van\u00e7! \u0130tfaiye kamyonun g\u00f6reve haz\u0131r. \u015eimdi onu alev k\u0131rm\u0131z\u0131s\u0131 ve mavi sirenleriyle rengarenk boya!",
        svg: `
          <defs>
            <linearGradient id="fireTruckRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="fireLadder" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f1f5f9"/>
              <stop offset="100%" stop-color="#94a3b8"/>
            </linearGradient>
          </defs>
          <line x1="80" y1="445" x2="520" y2="445" stroke="#334155" stroke-width="10" stroke-linecap="round"/>
          <line x1="100" y1="470" x2="180" y2="470" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="240" y1="470" x2="320" y2="470" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="380" y1="470" x2="460" y2="470" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <rect x="120" y="240" width="380" height="150" rx="16" fill="url(#fireTruckRed)" stroke="#0f172a" stroke-width="10"/>
          <rect x="120" y="340" width="380" height="20" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 395 255 L 485 255 L 485 315 L 395 315 Z" fill="#93c5fd" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 330 255 L 370 255 L 370 315 L 330 315 Z" fill="#93c5fd" stroke="#0f172a" stroke-width="7"/>
          <rect x="420" y="335" width="20" height="8" rx="2" fill="#e2e8f0" stroke="#0f172a" stroke-width="4"/>
          <rect x="160" y="215" width="60" height="25" rx="4" fill="#64748b" stroke="#0f172a" stroke-width="7"/>
          <path d="M 170 215 L 360 170 M 175 200 L 365 155" stroke="url(#fireLadder)" stroke-width="10" stroke-linecap="round"/>
          <path d="M 170 215 L 360 170 M 175 200 L 365 155" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
          <line x1="200" y1="202" x2="204" y2="188" stroke="#0f172a" stroke-width="5"/>
          <line x1="235" y1="194" x2="239" y2="180" stroke="#0f172a" stroke-width="5"/>
          <line x1="270" y1="186" x2="274" y2="172" stroke="#0f172a" stroke-width="5"/>
          <line x1="305" y1="178" x2="309" y2="164" stroke="#0f172a" stroke-width="5"/>
          <line x1="340" y1="170" x2="344" y2="156" stroke="#0f172a" stroke-width="5"/>
          <rect x="415" y="222" width="22" height="18" rx="4" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>
          <rect x="445" y="222" width="22" height="18" rx="4" fill="#ef4444" stroke="#0f172a" stroke-width="6"/>
          <circle cx="490" cy="340" r="10" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="490" cy="365" r="8" fill="#f97316" stroke="#0f172a" stroke-width="5"/>
          <circle cx="230" cy="300" r="28" fill="#f59e0b" stroke="#0f172a" stroke-width="8"/>
          <circle cx="230" cy="300" r="16" fill="#b45309" stroke="#0f172a" stroke-width="6"/>
          <circle cx="420" cy="405" r="38" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="420" cy="405" r="18" fill="#e2e8f0" stroke="#0f172a" stroke-width="7"/>
          <circle cx="420" cy="405" r="4" fill="#0f172a"/>
          <circle cx="270" cy="405" r="38" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="270" cy="405" r="18" fill="#e2e8f0" stroke="#0f172a" stroke-width="7"/>
          <circle cx="270" cy="405" r="4" fill="#0f172a"/>
          <circle cx="180" cy="405" r="38" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="180" cy="405" r="18" fill="#e2e8f0" stroke="#0f172a" stroke-width="7"/>
          <circle cx="180" cy="405" r="4" fill="#0f172a"/>
          <circle cx="315" cy="315" r="5" fill="#38bdf8"/>
          <circle cx="330" cy="305" r="7" fill="#38bdf8"/>
          <circle cx="350" cy="295" r="6" fill="#38bdf8"/>
`,
        audio: "audio/voices/cirak_itfaiye_kamyonu/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🟢 ÇIRAK: SEVIMLI DENIZ KAPLUMBAĞASI
  // =========================================================================
  {
    id: "cirak_deniz_kaplumbagasi",
    categoryId: "deniz",
    name: "Sevimli Deniz Kaplumba\u011fas\u0131",
    emoji: "\ud83d\udc22",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Mercan resifleri aras\u0131nda zarif\u00e7e y\u00fczen bilge ve sevimli kaplumba\u011fa Tugi! Desenli kabu\u011fu ve su kabarc\u0131klar\u0131.",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, ye\u015fil, zeytin ye\u015fili, sar\u0131 ve turkuaz boyalar",
    welcomeText: "Gluk gluk! Selam K\u0131van\u00e7! Okyanusun en tatl\u0131 y\u00fcz\u00fcc\u00fcs\u00fc sevimli deniz kaplumba\u011fas\u0131n\u0131 \u00e7izmek i\u00e7in boyalar\u0131n\u0131 haz\u0131rla!",
    welcomeAudio: "audio/voices/cirak_deniz_kaplumbagasi/welcome.mp3",
    colors: ["#10b981", "#059669", "#fef08a", "#38bdf8"],
    previewSvg: `
          <defs>
            <linearGradient id="turtleShell" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#34d399"/>
              <stop offset="50%" stop-color="#10b981"/>
              <stop offset="100%" stop-color="#047857"/>
            </linearGradient>
            <linearGradient id="turtleSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#a7f3d0"/>
              <stop offset="100%" stop-color="#34d399"/>
            </linearGradient>
            <linearGradient id="turtleBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#facc15"/>
            </linearGradient>
          </defs>
          <path d="M 80 485 Q 300 460, 520 485 L 520 520 L 80 520 Z" fill="#fde68a" stroke="#0f172a" stroke-width="7"/>
          <path d="M 340 215 C 380 160, 370 120, 320 130 C 290 140, 295 185, 305 210 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 220 230 C 190 200, 170 210, 175 225 C 180 240, 195 255, 205 260 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 195 285 L 165 290 L 195 295 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 230 340 C 210 390, 180 395, 175 375 C 170 355, 195 330, 210 325 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 370 330 C 400 400, 360 450, 310 440 C 290 435, 310 375, 330 345 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="335" cy="385" rx="8" ry="12" fill="#059669" stroke="#0f172a" stroke-width="3"/>
          <ellipse cx="350" cy="370" rx="7" ry="10" fill="#059669" stroke="#0f172a" stroke-width="3"/>
          <ellipse cx="300" cy="290" rx="110" ry="85" fill="url(#turtleShell)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 195 290 C 200 375, 400 375, 405 290 Z" fill="url(#turtleBelly)" stroke="#0f172a" stroke-width="8"/>
          <polygon points="300,240 330,255 330,290 300,305 270,290 270,255" fill="#fef08a" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="300" y1="240" x2="300" y2="208" stroke="#0f172a" stroke-width="6"/>
          <line x1="330" y1="255" x2="375" y2="235" stroke="#0f172a" stroke-width="6"/>
          <line x1="330" y1="290" x2="385" y2="305" stroke="#0f172a" stroke-width="6"/>
          <line x1="300" y1="305" x2="300" y2="350" stroke="#0f172a" stroke-width="6"/>
          <line x1="270" y1="290" x2="215" y2="305" stroke="#0f172a" stroke-width="6"/>
          <line x1="270" y1="255" x2="225" y2="235" stroke="#0f172a" stroke-width="6"/>
          <path d="M 390 250 C 420 220, 480 230, 490 270 C 490 305, 440 315, 395 295 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 490 270 C 475 285, 450 285, 445 280" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <ellipse cx="450" cy="255" rx="14" ry="16" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <circle cx="452" cy="256" r="8" fill="#0f172a"/>
          <circle cx="449" cy="252" r="3.5" fill="#ffffff"/>
          <circle cx="455" cy="259" r="1.5" fill="#ffffff"/>
          <path d="M 440 240 Q 452 235, 465 242" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <circle cx="515" cy="240" r="8" fill="#e0f2fe" stroke="#0f172a" stroke-width="4" opacity="0.8"/>
          <circle cx="535" cy="205" r="12" fill="#e0f2fe" stroke="#0f172a" stroke-width="5" opacity="0.8"/>
          <polygon points="130,440 135,452 148,452 138,460 142,472 130,464 118,472 122,460 112,452 125,452" fill="#f43f5e" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: B\u00fcy\u00fck Oval S\u0131rt Kabu\u011fu",
        instruction: "Sayfan\u0131n ortas\u0131na kaplumba\u011fan\u0131n geni\u015f kubbeli s\u0131rt kabu\u011funu \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n ortas\u0131na sevimli deniz kaplumba\u011fam\u0131z\u0131n kubbeli geni\u015f s\u0131rt kabu\u011funu \u00e7izelim.",
        svg: `<ellipse cx="300" cy="290" rx="110" ry="85" fill="none" stroke="#0f172a" stroke-width="10"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Kabuk Kenar Koruma Band\u0131",
        instruction: "Kabu\u011fun alt \u00e7evresine kalkan gibi koruyucu kenarl\u0131k \u00e7izgisini ekle.",
        voice: "Kabu\u011fun alt kenar\u0131na koruyucu zarif bir kalkan band\u0131 \u00e7izelim.",
        svg: `<path d="M 195 290 C 200 375, 400 375, 405 290" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Kabuk \u0130\u00e7i Merkez Alt\u0131gen Deseni",
        instruction: "Kabu\u011fun tam ortas\u0131na kaplumba\u011falar\u0131n \u00fcnl\u00fc alt\u0131gen desenini yerle\u015ftir.",
        voice: "Kabu\u011fun tam ortas\u0131na kaplumba\u011falar\u0131n o me\u015fhur g\u00fczel alt\u0131gen desenini \u00e7izelim.",
        svg: `<polygon points="300,240 330,255 330,290 300,305 270,290 270,255" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Yan Kabuk Desen \u00c7izgileri",
        instruction: "Merkezdeki alt\u0131genden d\u0131\u015far\u0131ya do\u011fru uzanan desen \u00e7izgilerini \u00e7ek.",
        voice: "Ortadaki alt\u0131genden kabu\u011fun kenarlar\u0131na do\u011fru uzanan desen \u00e7izgilerini \u00e7ekelim.",
        svg: `<line x1="300" y1="240" x2="300" y2="208" stroke="#0f172a" stroke-width="6"/><line x1="330" y1="255" x2="375" y2="235" stroke="#0f172a" stroke-width="6"/><line x1="330" y1="290" x2="385" y2="305" stroke="#0f172a" stroke-width="6"/><line x1="300" y1="305" x2="300" y2="350" stroke="#0f172a" stroke-width="6"/><line x1="270" y1="290" x2="215" y2="305" stroke="#0f172a" stroke-width="6"/><line x1="270" y1="255" x2="225" y2="235" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: \u0130leri Uzanan Tatl\u0131 Kafa",
        instruction: "Kabu\u011fun sa\u011f \u00f6n\u00fcnden ileri uzanan yuvarlak kafa \u00e7izgisini yap.",
        voice: "Kabu\u011fun \u00f6n taraf\u0131ndan ileriye do\u011fru uzanan tatl\u0131 kaplumba\u011fa kafas\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 390 250 C 420 220, 480 230, 490 270 C 490 305, 440 315, 395 295" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Ne\u015feli G\u00fcl\u00fcmseme ve Gaga Ucu",
        instruction: "Kafan\u0131n ucuna sevimli minik bir gaga k\u0131vr\u0131m\u0131 ve g\u00fclen a\u011f\u0131z \u00e7iz.",
        voice: "Kafan\u0131n ucuna k\u00fc\u00e7\u00fck bir kaplumba\u011fa gagas\u0131 ve ne\u015feli bir g\u00fcl\u00fcmseme kondural\u0131m.",
        svg: `<path d="M 490 270 C 475 285, 450 285, 445 280" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: B\u00fcy\u00fck Parlak Deniz G\u00f6z\u00fc",
        instruction: "Kafan\u0131n ortas\u0131na kocaman bir g\u00f6z yuvarla\u011f\u0131 ve par\u0131lt\u0131lar ekle.",
        voice: "Kafan\u0131n ortas\u0131na okyanusa sevgiyle bakan kocaman par\u0131lt\u0131l\u0131 bir g\u00f6z \u00e7izelim.",
        svg: `<ellipse cx="450" cy="255" rx="14" ry="16" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="452" cy="256" r="8" fill="#0f172a"/><circle cx="449" cy="252" r="3.5" fill="#ffffff"/><circle cx="455" cy="259" r="1.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Ba\u015f Benekleri ve Ka\u015f",
        instruction: "Aln\u0131na tatl\u0131 bir ka\u015f \u00e7izgisi ve yanak beneklerini koy.",
        voice: "G\u00f6z\u00fcn\u00fcn \u00fcst\u00fcne merakl\u0131 bir ka\u015f ve yanaklar\u0131na sevimli benekler kondural\u0131m.",
        svg: `<path d="M 440 240 Q 452 235, 465 242" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="425" cy="265" r="3" fill="#0f172a"/><circle cx="432" cy="272" r="2.5" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: B\u00fcy\u00fck \u00d6n Y\u00fczge\u00e7 (Sa\u011f / \u00d6n)",
        instruction: "Kabu\u011fun \u00f6n\u00fcnden a\u015fa\u011f\u0131ya do\u011fru s\u00fcz\u00fclen dev y\u00fczme paletini \u00e7iz.",
        voice: "Kabu\u011fun \u00f6n\u00fcnden a\u015fa\u011f\u0131ya do\u011fru s\u00fcz\u00fclen o kocaman zarif y\u00fczme paletini \u00e7izelim.",
        svg: `<path d="M 370 330 C 400 400, 360 450, 310 440 C 290 435, 310 375, 330 345" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Di\u011fer \u00d6n Y\u00fczge\u00e7 (Sol / \u00dcst)",
        instruction: "Kabu\u011fun \u00fcst taraf\u0131ndan ileriye do\u011fru a\u00e7\u0131lan di\u011fer y\u00fczgeci yap.",
        voice: "Kabu\u011fun \u00fcst taraf\u0131ndan denizi yaran di\u011fer g\u00fc\u00e7l\u00fc \u00f6n y\u00fczgeci uzatal\u0131m.",
        svg: `<path d="M 340 215 C 380 160, 370 120, 320 130 C 290 140, 295 185, 305 210" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Arka Minik Y\u00fczge\u00e7 (Sa\u011f)",
        instruction: "Kabu\u011fun arkas\u0131ndan sarkan d\u00fcmen y\u00fczgecini \u00e7iz.",
        voice: "Kabu\u011fun arkas\u0131ndan sarkan sevimli y\u00f6n d\u00fcmeni y\u00fczgecini yapal\u0131m.",
        svg: `<path d="M 230 340 C 210 390, 180 395, 175 375 C 170 355, 195 330, 210 325" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Arka Minik Y\u00fczge\u00e7 (Sol) ve Kuyruk",
        instruction: "Di\u011fer arka y\u00fczgeci ve aralar\u0131ndaki minik sivri kuyru\u011fu \u00e7iz.",
        voice: "Di\u011fer arka y\u00fczgeci ve tam ortalar\u0131ndaki tatl\u0131 minik kuyru\u011fu ekleyelim.",
        svg: `<path d="M 220 230 C 190 200, 170 210, 175 225 C 180 240, 195 255, 205 260" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><path d="M 195 285 L 165 290 L 195 295" stroke="#0f172a" stroke-width="7" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: \u00d6n Y\u00fczge\u00e7 \u00dczeri Pul Desenleri",
        instruction: "\u00d6n y\u00fczgecin \u00fczerine deniz canl\u0131lar\u0131na \u00f6zg\u00fc pul benekleri yap.",
        voice: "\u00d6n y\u00fczgecin \u00fczerine kaplumba\u011fan\u0131n o g\u00fczel pul halkalar\u0131n\u0131 ekleyelim.",
        svg: `<ellipse cx="335" cy="385" rx="8" ry="12" fill="none" stroke="#0f172a" stroke-width="4"/><ellipse cx="350" cy="370" rx="7" ry="10" fill="none" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Y\u00fckselen Su Baloncuklar\u0131",
        instruction: "Burnunun ucundan y\u00fczeye do\u011fru y\u00fckselen sevimli hava kabarc\u0131klar\u0131n\u0131 yap.",
        voice: "Burnunun ucundan y\u00fczeye do\u011fru s\u00fcz\u00fclen ne\u015feli su kabarc\u0131klar\u0131 \u00e7izelim.",
        svg: `<circle cx="515" cy="240" r="8" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="535" cy="205" r="12" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="545" cy="255" r="6" fill="none" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: A\u015fa\u011f\u0131da Y\u00fczen Deniz Y\u0131ld\u0131z\u0131",
        instruction: "Sol alt k\u00f6\u015feye deniz taban\u0131nda duran minik bir deniz y\u0131ld\u0131z\u0131 \u00e7iz.",
        voice: "Sol alt k\u00f6\u015feye resiflerin \u00fcst\u00fcnde dinlenen tatl\u0131 bir deniz y\u0131ld\u0131z\u0131 kondural\u0131m.",
        svg: `<polygon points="130,440 135,452 148,452 138,460 142,472 130,464 118,472 122,460 112,452 125,452" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Mercan Resifleri ve Deniz Yosunlar\u0131",
        instruction: "Dipte dalgalanan k\u0131vr\u0131ml\u0131 su yosunlar\u0131n\u0131 \u00e7iz.",
        voice: "Dipte su ak\u0131nt\u0131s\u0131yla sal\u0131nan ye\u015fil deniz yosunlar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 160 480 C 170 450, 150 430, 165 400" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M 180 480 C 190 460, 175 440, 185 420" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Okyanus Dip Dalga \u00c7izgisi",
        instruction: "Zeminde k\u0131vr\u0131lan tatl\u0131 deniz kumu tepesini \u00e7iz.",
        voice: "Zeminde uzanan yumu\u015fac\u0131k deniz kumu tepesini kavisle tamamlayal\u0131m.",
        svg: `<path d="M 80 485 Q 300 460, 520 485" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve Kristal Su Par\u0131lt\u0131s\u0131",
        instruction: "Tebrikler K\u0131van\u00e7! Kaplumba\u011fay\u0131 z\u00fcmr\u00fct ye\u015fili kabu\u011fu ve turkuaz okyanusla canland\u0131r!",
        voice: "\u0130nan\u0131lmaz g\u00fczel oldu K\u0131van\u00e7! Deniz kaplumba\u011fam\u0131z masmavi sularda y\u00fcz\u00fcyor. \u015eimdi onu z\u00fcmr\u00fct ye\u015fili ve sar\u0131 boyalar\u0131nla \u0131\u015f\u0131l \u0131\u015f\u0131l renklendir!",
        svg: `
          <defs>
            <linearGradient id="turtleShell" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#34d399"/>
              <stop offset="50%" stop-color="#10b981"/>
              <stop offset="100%" stop-color="#047857"/>
            </linearGradient>
            <linearGradient id="turtleSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#a7f3d0"/>
              <stop offset="100%" stop-color="#34d399"/>
            </linearGradient>
            <linearGradient id="turtleBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#facc15"/>
            </linearGradient>
          </defs>
          <path d="M 80 485 Q 300 460, 520 485 L 520 520 L 80 520 Z" fill="#fde68a" stroke="#0f172a" stroke-width="7"/>
          <path d="M 340 215 C 380 160, 370 120, 320 130 C 290 140, 295 185, 305 210 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 220 230 C 190 200, 170 210, 175 225 C 180 240, 195 255, 205 260 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 195 285 L 165 290 L 195 295 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 230 340 C 210 390, 180 395, 175 375 C 170 355, 195 330, 210 325 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 370 330 C 400 400, 360 450, 310 440 C 290 435, 310 375, 330 345 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="335" cy="385" rx="8" ry="12" fill="#059669" stroke="#0f172a" stroke-width="3"/>
          <ellipse cx="350" cy="370" rx="7" ry="10" fill="#059669" stroke="#0f172a" stroke-width="3"/>
          <ellipse cx="300" cy="290" rx="110" ry="85" fill="url(#turtleShell)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 195 290 C 200 375, 400 375, 405 290 Z" fill="url(#turtleBelly)" stroke="#0f172a" stroke-width="8"/>
          <polygon points="300,240 330,255 330,290 300,305 270,290 270,255" fill="#fef08a" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="300" y1="240" x2="300" y2="208" stroke="#0f172a" stroke-width="6"/>
          <line x1="330" y1="255" x2="375" y2="235" stroke="#0f172a" stroke-width="6"/>
          <line x1="330" y1="290" x2="385" y2="305" stroke="#0f172a" stroke-width="6"/>
          <line x1="300" y1="305" x2="300" y2="350" stroke="#0f172a" stroke-width="6"/>
          <line x1="270" y1="290" x2="215" y2="305" stroke="#0f172a" stroke-width="6"/>
          <line x1="270" y1="255" x2="225" y2="235" stroke="#0f172a" stroke-width="6"/>
          <path d="M 390 250 C 420 220, 480 230, 490 270 C 490 305, 440 315, 395 295 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 490 270 C 475 285, 450 285, 445 280" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <ellipse cx="450" cy="255" rx="14" ry="16" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <circle cx="452" cy="256" r="8" fill="#0f172a"/>
          <circle cx="449" cy="252" r="3.5" fill="#ffffff"/>
          <circle cx="455" cy="259" r="1.5" fill="#ffffff"/>
          <path d="M 440 240 Q 452 235, 465 242" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <circle cx="515" cy="240" r="8" fill="#e0f2fe" stroke="#0f172a" stroke-width="4" opacity="0.8"/>
          <circle cx="535" cy="205" r="12" fill="#e0f2fe" stroke="#0f172a" stroke-width="5" opacity="0.8"/>
          <polygon points="130,440 135,452 148,452 138,460 142,472 130,464 118,472 122,460 112,452 125,452" fill="#f43f5e" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
`,
        audio: "audio/voices/cirak_deniz_kaplumbagasi/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🟢 ÇIRAK: CESUR UZAY KAŞIFI ASTRONOT
  // =========================================================================
  {
    id: "cirak_astronot_cocuk",
    categoryId: "uzay",
    name: "Cesur Uzay Ka\u015fifi Astronot",
    emoji: "\ud83d\udc68\u200d\ud83d\ude80",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "S\u0131f\u0131r yer\u00e7ekiminde s\u00fcz\u00fclen \u00e7ocuk astronot! Parlak cam kask, oksijen s\u0131rt \u00e7antas\u0131 ve y\u0131ld\u0131zlar.",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, beyaz, lacivert, alt\u0131n sar\u0131s\u0131 ve cam mavisi boyalar",
    welcomeText: "3, 2, 1, ate\u015fle! Merhaba K\u0131van\u00e7! Uzay\u0131n sonsuzlu\u011funda s\u00fcz\u00fclen cesur bir astronot \u00e7ocuk \u00e7izmek i\u00e7in harika bir g\u00f6rev bizi bekliyor!",
    welcomeAudio: "audio/voices/cirak_astronot_cocuk/welcome.mp3",
    colors: ["#ffffff", "#3b82f6", "#facc15", "#1e1b4b"],
    previewSvg: `
          <defs>
            <linearGradient id="visorgold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#ca8a04"/>
            </linearGradient>
            <linearGradient id="astroSuit" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="70%" stop-color="#f1f5f9"/>
              <stop offset="100%" stop-color="#cbd5e1"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="140" r="22" fill="#f97316" stroke="#0f172a" stroke-width="6"/>
          <path d="M 215 350 C 180 340, 160 390, 130 380 C 100 370, 90 410, 60 400" stroke="#38bdf8" stroke-width="7" stroke-linecap="round" fill="none"/>
          <path d="M 240 285 L 215 295 L 215 375 L 240 375 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 260 380 L 235 445 L 265 445 L 290 380 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 315 380 L 335 445 L 365 445 L 345 380 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 235 445 L 205 455 C 200 465, 220 475, 245 470 L 265 445 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 335 445 L 355 470 C 380 475, 395 460, 390 450 L 365 445 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 250 285 L 240 380 L 360 380 L 350 285 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <rect x="275" y="305" width="50" height="35" rx="6" fill="#e2e8f0" stroke="#0f172a" stroke-width="6"/>
          <circle cx="290" cy="322" r="5" fill="#ef4444"/>
          <circle cx="310" cy="322" r="5" fill="#22c55e"/>
          <path d="M 350 295 C 385 285, 410 260, 420 220 L 435 240 C 430 290, 395 320, 360 330 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 420 220 C 415 195, 440 185, 450 205 C 455 215, 445 235, 435 240 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 245 305 C 205 315, 185 340, 175 365 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8"/>
          <circle cx="168" cy="375" r="14" fill="#3b82f6" stroke="#0f172a" stroke-width="7"/>
          <path d="M 255 270 Q 300 285, 345 270 L 350 285 Q 300 300, 250 285 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="300" cy="200" r="75" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="10"/>
          <rect x="372" y="185" width="12" height="30" rx="4" fill="#3b82f6" stroke="#0f172a" stroke-width="6"/>
          <line x1="378" y1="185" x2="385" y2="150" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <circle cx="386" cy="148" r="6" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="300" cy="200" rx="55" ry="45" fill="url(#visorgold)" stroke="#0f172a" stroke-width="8"/>
          <circle cx="280" cy="195" r="8" fill="#0f172a"/>
          <circle cx="278" cy="192" r="2.5" fill="#ffffff"/>
          <circle cx="320" cy="195" r="8" fill="#0f172a"/>
          <circle cx="318" cy="192" r="2.5" fill="#ffffff"/>
          <path d="M 292 215 Q 300 225, 308 215" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <path d="M 480 120 L 480 145 M 468 132 L 492 132" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: B\u00fcy\u00fck Yuvarlak Astronot Kask\u0131",
        instruction: "Sayfan\u0131n \u00fcst ortas\u0131na astronotun b\u00fcy\u00fck ve yuvarlak kask\u0131n\u0131 \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na cesur astronotumuzun kocaman yuvarlak kask\u0131n\u0131 \u00e7izelim.",
        svg: `<circle cx="300" cy="200" r="75" fill="none" stroke="#0f172a" stroke-width="10"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Parlak Cam Viz\u00f6r Alan\u0131",
        instruction: "Kask\u0131n i\u00e7ine uzay\u0131 yans\u0131tan geni\u015f oval viz\u00f6r cam\u0131n\u0131 \u00e7iz.",
        voice: "Kask\u0131n i\u00e7ine uzay\u0131n y\u0131ld\u0131zlar\u0131n\u0131 yans\u0131tan geni\u015f oval viz\u00f6r cam\u0131n\u0131 \u00e7izelim.",
        svg: `<ellipse cx="300" cy="200" rx="55" ry="45" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Viz\u00f6r \u0130\u00e7i Merakl\u0131 G\u00f6zler ve G\u00fcl\u00fcmseme",
        instruction: "Cam\u0131n ard\u0131ndan mutlu bakan iki parlak g\u00f6z ve g\u00fcl\u00fcmseme ekle.",
        voice: "Viz\u00f6r\u00fcn ard\u0131ndan bize el sallayan astronotun g\u00fclen g\u00f6zlerini ve ne\u015feli a\u011fz\u0131n\u0131 \u00e7izelim.",
        svg: `<circle cx="280" cy="195" r="8" fill="#0f172a"/><circle cx="278" cy="192" r="2.5" fill="#ffffff"/><circle cx="320" cy="195" r="8" fill="#0f172a"/><circle cx="318" cy="192" r="2.5" fill="#ffffff"/><path d="M 292 215 Q 300 225, 308 215" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Viz\u00f6r \u00dczeri I\u015f\u0131k Yans\u0131mas\u0131",
        instruction: "Viz\u00f6r cam\u0131n\u0131n sol \u00fcst\u00fcne iki parlak yans\u0131ma \u00e7izgisi \u00e7ek.",
        voice: "Cam\u0131n par\u0131ldad\u0131\u011f\u0131n\u0131 g\u00f6steren iki tatl\u0131 beyaz \u0131\u015f\u0131k yans\u0131ma \u00e7izgisi yapal\u0131m.",
        svg: `<path d="M 265 175 Q 285 168, 305 170" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/><line x1="270" y1="185" x2="285" y2="182" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Kask Kulakl\u0131k ve Anteni",
        instruction: "Kask\u0131n yan\u0131na telsiz kulakl\u0131\u011f\u0131n\u0131 ve ucunda top olan anteni \u00e7iz.",
        voice: "Kask\u0131n yan\u0131na uzay \u00fcss\u00fcyle konu\u015fmay\u0131 sa\u011flayan telsiz antenini \u00e7izelim.",
        svg: `<rect x="372" y="185" width="12" height="30" rx="4" fill="none" stroke="#0f172a" stroke-width="6"/><line x1="378" y1="185" x2="385" y2="150" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><circle cx="386" cy="148" r="6" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Kal\u0131n Uzay Giysisi Yakas\u0131",
        instruction: "Kask\u0131n alt\u0131na k\u0131yafeti ba\u011flayan kal\u0131n metal yaka halkas\u0131n\u0131 yap.",
        voice: "Kask\u0131n alt\u0131na uzay elbisesini kilitleyen kal\u0131n emniyet yakas\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 255 270 Q 300 285, 345 270 L 350 285 Q 300 300, 250 285 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Tombul Uzay Tulumu G\u00f6vdesi",
        instruction: "Yakadan a\u015fa\u011f\u0131ya s\u0131f\u0131r yer\u00e7ekiminde \u015fi\u015fkin duran tulum g\u00f6vdesini \u00e7iz.",
        voice: "Yakadan a\u015fa\u011f\u0131ya astronotun tombi\u015f beyaz uzay tulumunu \u00e7izelim.",
        svg: `<path d="M 250 285 L 240 380 L 360 380 L 350 285" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: G\u00f6\u011f\u00fcs Kontrol Paneli ve D\u00fc\u011fmeler",
        instruction: "G\u00f6\u011fs\u00fcn ortas\u0131na oksijen kontrol kutusunu ve renkli d\u00fc\u011fmelerini yap.",
        voice: "G\u00f6\u011fs\u00fcne oksijen seviyesini g\u00f6steren kontrol panelini ve renkli d\u00fc\u011fmeleri \u00e7izelim.",
        svg: `<rect x="275" y="305" width="50" height="35" rx="6" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="290" cy="322" r="5" fill="#0f172a"/><circle cx="310" cy="322" r="5" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Arkadaki Oksijen S\u0131rt \u00c7antas\u0131",
        instruction: "Astronotun s\u0131rt\u0131nda duran dikd\u00f6rtgen ya\u015fam \u00fcnitesi \u00e7antas\u0131n\u0131 \u00e7iz.",
        voice: "S\u0131rt\u0131nda uzayda nefes almas\u0131n\u0131 sa\u011flayan oksijen s\u0131rt \u00e7antas\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 240 285 L 215 295 L 215 375 L 240 375" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: El Sallayan Sa\u011f Kol (Yukar\u0131)",
        instruction: "Omuzdan yukar\u0131ya do\u011fru uzaya el sallayan kal\u0131n kolu \u00e7iz.",
        voice: "Omuzdan yukar\u0131 do\u011fru uzaya ve y\u0131ld\u0131zlara el sallayan ne\u015feli kolunu \u00e7izelim.",
        svg: `<path d="M 350 295 C 385 285, 410 260, 420 220" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/><path d="M 360 330 C 395 320, 430 290, 435 240" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Tombi\u015f Astronot Eldiveni (Sa\u011f)",
        instruction: "Kolun ucuna el sallayan kal\u0131n parmakl\u0131 astronot eldivenini ekle.",
        voice: "Kolun ucuna uzayda el sallayan tombi\u015f koruyucu eldiveni \u00e7izelim.",
        svg: `<path d="M 420 220 C 415 195, 440 185, 450 205 C 455 215, 445 235, 435 240 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 425 210 Q 415 215, 420 225" stroke="#0f172a" stroke-width="5" fill="none"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: S\u00fcz\u00fclen Sol Kol ve Eldiven",
        instruction: "Di\u011fer yana do\u011fru s\u00fcz\u00fclen sol kolu ve eldiveni yap.",
        voice: "Sol tarafa do\u011fru yer\u00e7ekimsiz ortamda serbest\u00e7e s\u00fcz\u00fclen di\u011fer kolunu \u00e7izelim.",
        svg: `<path d="M 245 305 C 205 315, 185 340, 175 365" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="168" cy="375" r="14" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Sol U\u00e7u\u015f Baca\u011f\u0131 ve K\u0131vr\u0131m\u0131",
        instruction: "Tulumun alt\u0131ndan sola do\u011fru k\u0131vr\u0131lan u\u00e7u\u015f baca\u011f\u0131n\u0131 \u00e7iz.",
        voice: "Tulumun alt\u0131ndan geriye do\u011fru s\u00fcz\u00fclen sol baca\u011f\u0131 k\u0131vr\u0131mla \u00e7izelim.",
        svg: `<path d="M 260 380 L 235 445 M 290 380 L 265 445" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Sa\u011f U\u00e7u\u015f Baca\u011f\u0131",
        instruction: "Sa\u011fa do\u011fru uzanan di\u011fer uzay baca\u011f\u0131n\u0131 yap.",
        voice: "Sa\u011f tarafa do\u011fru tatl\u0131 tatl\u0131 s\u00fcz\u00fclen di\u011fer baca\u011f\u0131 da \u00e7izelim.",
        svg: `<path d="M 315 380 L 335 445 M 345 380 L 365 445" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Kal\u0131n Uzay Botlar\u0131 (Ayakkab\u0131lar)",
        instruction: "Bacaklar\u0131n ucuna aya basan kal\u0131n tabanl\u0131 uzay botlar\u0131n\u0131 ekle.",
        voice: "Bacaklar\u0131n ucuna kraterlere basan o me\u015fhur kal\u0131n tabanl\u0131 uzay botlar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 235 445 L 205 455 C 200 465, 220 475, 245 470 L 265 445 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 335 445 L 355 470 C 380 475, 395 460, 390 450 L 365 445 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Kordon G\u00fcvenlik Halat\u0131",
        instruction: "S\u0131rt \u00e7antas\u0131ndan uzaya uzanan k\u0131vr\u0131ml\u0131 g\u00fcvenlik kordonunu \u00e7iz.",
        voice: "S\u0131rt \u00e7antas\u0131ndan uzay gemisine ba\u011flanan o k\u0131vr\u0131m k\u0131vr\u0131m g\u00fcvenlik spiralini \u00e7izelim.",
        svg: `<path d="M 215 350 C 180 340, 160 390, 130 380 C 100 370, 90 410, 60 400" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Uzay Gezegenleri ve Parlayan Y\u0131ld\u0131zlar",
        instruction: "Etraf\u0131na k\u00fc\u00e7\u00fck bir kraterli gezegen ve par\u0131ldayan y\u0131ld\u0131zlar yap.",
        voice: "Astronotumuzun etraf\u0131na minik bir k\u0131rm\u0131z\u0131 gezegen ve \u0131\u015f\u0131l \u0131\u015f\u0131l uzay y\u0131ld\u0131zlar\u0131 kondural\u0131m.",
        svg: `<circle cx="100" cy="140" r="22" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 480 120 L 480 145 M 468 132 L 492 132" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><path d="M 490 380 L 490 400 M 480 390 L 500 390" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_astronot_cocuk/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve Kozmik Derinlik",
        instruction: "Tebrikler K\u0131van\u00e7! Astronotunu alt\u0131n sar\u0131s\u0131 viz\u00f6r, mavi detaylar ve parlayan y\u0131ld\u0131zlarla boya!",
        voice: "Harikas\u0131n uzay ka\u015fifi K\u0131van\u00e7! Astronotun y\u0131ld\u0131zlar aras\u0131nda harika g\u00f6r\u00fcn\u00fcyor. \u015eimdi onu alt\u0131n viz\u00f6r\u00fc ve p\u0131r\u0131l p\u0131r\u0131l kost\u00fcm\u00fcyle renklendir!",
        svg: `
          <defs>
            <linearGradient id="visorgold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#ca8a04"/>
            </linearGradient>
            <linearGradient id="astroSuit" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="70%" stop-color="#f1f5f9"/>
              <stop offset="100%" stop-color="#cbd5e1"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="140" r="22" fill="#f97316" stroke="#0f172a" stroke-width="6"/>
          <path d="M 215 350 C 180 340, 160 390, 130 380 C 100 370, 90 410, 60 400" stroke="#38bdf8" stroke-width="7" stroke-linecap="round" fill="none"/>
          <path d="M 240 285 L 215 295 L 215 375 L 240 375 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 260 380 L 235 445 L 265 445 L 290 380 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 315 380 L 335 445 L 365 445 L 345 380 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 235 445 L 205 455 C 200 465, 220 475, 245 470 L 265 445 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 335 445 L 355 470 C 380 475, 395 460, 390 450 L 365 445 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 250 285 L 240 380 L 360 380 L 350 285 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <rect x="275" y="305" width="50" height="35" rx="6" fill="#e2e8f0" stroke="#0f172a" stroke-width="6"/>
          <circle cx="290" cy="322" r="5" fill="#ef4444"/>
          <circle cx="310" cy="322" r="5" fill="#22c55e"/>
          <path d="M 350 295 C 385 285, 410 260, 420 220 L 435 240 C 430 290, 395 320, 360 330 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 420 220 C 415 195, 440 185, 450 205 C 455 215, 445 235, 435 240 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 245 305 C 205 315, 185 340, 175 365 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8"/>
          <circle cx="168" cy="375" r="14" fill="#3b82f6" stroke="#0f172a" stroke-width="7"/>
          <path d="M 255 270 Q 300 285, 345 270 L 350 285 Q 300 300, 250 285 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="300" cy="200" r="75" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="10"/>
          <rect x="372" y="185" width="12" height="30" rx="4" fill="#3b82f6" stroke="#0f172a" stroke-width="6"/>
          <line x1="378" y1="185" x2="385" y2="150" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <circle cx="386" cy="148" r="6" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="300" cy="200" rx="55" ry="45" fill="url(#visorgold)" stroke="#0f172a" stroke-width="8"/>
          <circle cx="280" cy="195" r="8" fill="#0f172a"/>
          <circle cx="278" cy="192" r="2.5" fill="#ffffff"/>
          <circle cx="320" cy="195" r="8" fill="#0f172a"/>
          <circle cx="318" cy="192" r="2.5" fill="#ffffff"/>
          <path d="M 292 215 Q 300 225, 308 215" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <path d="M 480 120 L 480 145 M 468 132 L 492 132" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
`,
        audio: "audio/voices/cirak_astronot_cocuk/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🟢 ÇIRAK: ŞIMŞEK HIZLI KAHRAMAN
  // =========================================================================
  {
    id: "cirak_simsek_kahraman",
    categoryId: "kahramanlar",
    name: "\u015eim\u015fek H\u0131zl\u0131 Kahraman",
    emoji: "\u26a1",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "I\u015f\u0131k h\u0131z\u0131nda ko\u015fan \u015fim\u015fek kahraman! Alt\u0131n kanatl\u0131 maske, g\u00f6\u011fs\u00fcnde y\u0131ld\u0131r\u0131m amblemi ve elektrik k\u0131v\u0131lc\u0131mlar\u0131.",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, k\u0131rm\u0131z\u0131, parlak sar\u0131 ve beyaz boyalar",
    welcomeText: "F\u0131rt\u0131na gibi geldim K\u0131van\u00e7! I\u015f\u0131k h\u0131z\u0131nda ko\u015fan s\u00fcper kahraman\u0131m\u0131z\u0131 \u00e7izmek i\u00e7in kalemini haz\u0131rla, \u00e7ok h\u0131zl\u0131 ve \u00e7ok e\u011flenceli olacak!",
    welcomeAudio: "audio/voices/cirak_simsek_kahraman/welcome.mp3",
    colors: ["#ef4444", "#facc15", "#fbbf24", "#ffffff"],
    previewSvg: `
          <defs>
            <linearGradient id="flashRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
            <linearGradient id="flashGold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
          </defs>
          <path d="M 140 390 L 125 405 L 135 408 L 115 425 M 200 420 L 185 435 L 195 438 L 180 455" stroke="url(#flashGold)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <line x1="80" y1="210" x2="160" y2="210" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="100" y1="240" x2="190" y2="240" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <path d="M 270 325 L 220 375 L 175 410 L 190 415 L 235 375 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 175 410 L 140 430 C 135 440, 150 445, 170 435 L 180 415 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 310 325 L 350 380 L 385 410 L 375 420 L 335 370 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 385 410 L 420 425 C 425 435, 410 445, 385 440 L 375 420 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 275 230 L 255 315 L 335 315 L 325 230 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 315 L 285 325 L 305 315 L 335 325 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <circle cx="295" cy="270" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 298 255 L 288 270 L 298 270 L 292 285 L 305 268 L 295 268 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 325 240 L 380 230 L 420 250 L 415 260 L 370 245 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="425" cy="255" r="12" fill="url(#flashGold)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 270 245 L 220 260 L 195 290 L 190 280 L 230 250 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="190" cy="295" r="12" fill="url(#flashGold)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 270 190 C 260 140, 340 140, 330 190 C 330 230, 270 230, 270 190 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 280 185 C 280 205, 320 205, 320 185 C 320 220, 280 220, 280 185 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 292 205 Q 300 213, 308 205" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <ellipse cx="288" cy="180" rx="7" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
          <circle cx="288" cy="180" r="4.5" fill="#0f172a"/>
          <circle cx="286" cy="177" r="2" fill="#ffffff"/>
          <ellipse cx="312" cy="180" rx="7" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
          <circle cx="312" cy="180" r="4.5" fill="#0f172a"/>
          <circle cx="310" cy="177" r="2" fill="#ffffff"/>
          <path d="M 268 185 L 245 165 L 255 175 L 235 155 L 260 170 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 332 185 L 355 165 L 345 175 L 365 155 L 340 170 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Kahraman Ba\u015fl\u0131\u011f\u0131 ve \u00c7ene Hatt\u0131",
        instruction: "Sayfan\u0131n \u00fcst k\u0131sm\u0131na aerodinamik s\u00fcper kahraman maskeli kafa hatt\u0131n\u0131 \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst taraf\u0131na \u0131\u015f\u0131k h\u0131z\u0131nda ko\u015fan kahraman\u0131m\u0131z\u0131n maskeli kafa \u00e7izgisini \u00e7izelim.",
        svg: `<path d="M 270 190 C 260 140, 340 140, 330 190 C 330 230, 270 230, 270 190 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Y\u00fcz A\u00e7\u0131kl\u0131\u011f\u0131 ve G\u00fclen \u00c7ene",
        instruction: "Maskenin ortas\u0131ndaki a\u00e7\u0131k y\u00fcz alan\u0131n\u0131 ve ne\u015feli g\u00fcl\u00fcmsemeyi yap.",
        voice: "Maskenin ortas\u0131ndan g\u00fclen a\u011fz\u0131n\u0131 ve cesur \u00e7enesini \u00e7izelim.",
        svg: `<path d="M 280 185 C 280 205, 320 205, 320 185 C 320 220, 280 220, 280 185 Z" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 292 205 Q 300 213, 308 205" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: H\u0131zl\u0131 ve Cesur G\u00f6zler",
        instruction: "Maskenin i\u00e7ine \u00f6ne do\u011fru odaklanm\u0131\u015f iki parlak g\u00f6z ekle.",
        voice: "Maskenin i\u00e7ine hedefe kilitlenmi\u015f o cesur ve \u0131\u015f\u0131l \u0131\u015f\u0131l g\u00f6zleri \u00e7izelim.",
        svg: `<ellipse cx="288" cy="180" rx="7" ry="8" fill="#0f172a"/><circle cx="286" cy="177" r="2.5" fill="#ffffff"/><ellipse cx="312" cy="180" rx="7" ry="8" fill="#0f172a"/><circle cx="310" cy="177" r="2.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Maske Yan\u0131 Alt\u0131n \u015eim\u015fek Kanatlar\u0131 (Sol)",
        instruction: "Maskenin sol kula\u011f\u0131na haval\u0131 bir alt\u0131n y\u0131ld\u0131r\u0131m kanad\u0131 \u00e7iz.",
        voice: "Maskenin sol kula\u011f\u0131na r\u00fczgar\u0131 yaran alt\u0131n \u015fim\u015fek kanad\u0131n\u0131 yapal\u0131m.",
        svg: `<path d="M 268 185 L 245 165 L 255 175 L 235 155 L 260 170" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Maske Yan\u0131 Alt\u0131n \u015eim\u015fek Kanatlar\u0131 (Sa\u011f)",
        instruction: "Sa\u011f kula\u011fa da e\u015fle\u015fen alt\u0131n \u015fim\u015fek kanad\u0131n\u0131 kondur.",
        voice: "Sa\u011f kula\u011fa da ayn\u0131 h\u0131z \u015fim\u015fe\u011fi kanad\u0131n\u0131 kondural\u0131m.",
        svg: `<path d="M 332 185 L 355 165 L 345 175 L 365 155 L 340 170" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Ko\u015fan G\u00f6vde E\u011fimi",
        instruction: "\u0130leriye do\u011fru h\u0131zla ko\u015fan e\u011fik g\u00f6vde hatlar\u0131n\u0131 \u00e7iz.",
        voice: "\u0130leriye do\u011fru fi\u015fek gibi at\u0131lan ko\u015fan g\u00f6vde \u00e7izgilerini \u00e7izelim.",
        svg: `<path d="M 275 230 L 255 315 L 335 315 L 325 230" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: G\u00f6\u011f\u00fcsteki Dev \u015eim\u015fek Amblemi",
        instruction: "G\u00f6\u011fs\u00fcn tam ortas\u0131na beyaz daire ve alt\u0131n sar\u0131s\u0131 zikzak \u015fim\u015fek yap.",
        voice: "G\u00f6\u011fs\u00fcn tam ortas\u0131na kahraman\u0131n simgesi olan parlayan alt\u0131n \u015fim\u015fek amblemini \u00e7izelim.",
        svg: `<circle cx="295" cy="270" r="18" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 298 255 L 288 270 L 298 270 L 292 285 L 305 268 L 295 268 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: \u015eim\u015fek Desenli Kahraman Kemeri",
        instruction: "Bel b\u00f6lgesine zikzak \u015fim\u015fek desenli alt\u0131n kemeri \u00e7iz.",
        voice: "Beline zikzak \u015feklinde par\u0131ldayan alt\u0131n h\u0131z kemerini \u00e7izelim.",
        svg: `<path d="M 255 315 L 285 325 L 305 315 L 335 325" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: \u0130leri F\u0131rlayan Ko\u015fu Kolu (Sa\u011f)",
        instruction: "\u00d6ne do\u011fru ko\u015fan yumru\u011fu s\u0131k\u0131l\u0131 sa\u011f kolu \u00e7iz.",
        voice: "R\u00fczgar\u0131 delip ge\u00e7en \u00f6ne f\u0131rlam\u0131\u015f g\u00fc\u00e7l\u00fc ko\u015fu kolunu ve yumru\u011funu \u00e7izelim.",
        svg: `<path d="M 325 240 L 380 230 L 420 250" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="425" cy="255" r="12" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Geriye Savrulan Kol (Sol)",
        instruction: "Arkaya do\u011fru savrulan sol kolu ve yumru\u011fu yap.",
        voice: "Arkaya do\u011fru h\u0131zla savrulan sol kolu ve eldivenini \u00e7izelim.",
        svg: `<path d="M 270 245 L 220 260 L 195 290" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="190" cy="295" r="12" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Bilek \u015eim\u015fek Man\u015fetleri",
        instruction: "Her iki bile\u011fe de alt\u0131n y\u0131ld\u0131r\u0131m man\u015fetlerini ekle.",
        voice: "Bileklerine g\u00fc\u00e7 veren alt\u0131n y\u0131ld\u0131r\u0131m man\u015fetlerini kondural\u0131m.",
        svg: `<path d="M 390 230 L 398 245 L 392 248" stroke="#0f172a" stroke-width="5" fill="none"/><path d="M 215 265 L 210 278 L 218 276" stroke="#0f172a" stroke-width="5" fill="none"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: \u00d6ne Basan Ko\u015fu Baca\u011f\u0131 (Sa\u011f)",
        instruction: "\u0130leriye do\u011fru dev bir ad\u0131m atan sa\u011f \u00f6n baca\u011f\u0131 \u00e7iz.",
        voice: "\u0130leriye do\u011fru f\u0131rt\u0131na gibi ad\u0131m atan \u00f6n baca\u011f\u0131 g\u00fc\u00e7l\u00fc \u00e7izgilerle \u00e7izelim.",
        svg: `<path d="M 310 325 L 350 380 L 385 410" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: \u00d6n \u015eim\u015fek \u00c7izmesi",
        instruction: "\u00d6n baca\u011f\u0131n ucuna alt\u0131n kanatl\u0131 s\u00fcper h\u0131zl\u0131 ko\u015fu \u00e7izmesini ekle.",
        voice: "\u00d6n baca\u011f\u0131n ucuna alt\u0131n kanatl\u0131 hafif s\u00fcper ko\u015fu \u00e7izmesini \u00e7izelim.",
        svg: `<path d="M 385 410 L 420 425 C 425 435, 410 445, 385 440 L 375 420 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Arkaya Uzanan Ko\u015fu Baca\u011f\u0131 (Sol)",
        instruction: "Arkaya do\u011fru u\u00e7arcas\u0131na gerilmi\u015f sol baca\u011f\u0131 \u00e7iz.",
        voice: "Arkaya do\u011fru \u0131\u015f\u0131k h\u0131z\u0131nda gerilen di\u011fer baca\u011f\u0131 \u00e7izelim.",
        svg: `<path d="M 270 325 L 220 375 L 175 410" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Arka \u015eim\u015fek \u00c7izmesi",
        instruction: "Arka baca\u011f\u0131n ucuna yerle temas eden \u00e7izme ucunu yap.",
        voice: "Arka baca\u011f\u0131n ucuna yerden g\u00fc\u00e7 alan \u00e7izme burnunu \u00e7izelim.",
        svg: `<path d="M 175 410 L 140 430 C 135 440, 150 445, 170 435 L 180 415 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Ayak Arkas\u0131 Elektrik K\u0131v\u0131lc\u0131mlar\u0131",
        instruction: "Ko\u015farken arkas\u0131nda parlayan zigzag elektrik k\u0131v\u0131lc\u0131mlar\u0131n\u0131 yap.",
        voice: "Ayaklar\u0131n\u0131n arkas\u0131ndan havaya sa\u00e7\u0131lan parlak elektrik k\u0131v\u0131lc\u0131mlar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 140 390 L 125 405 L 135 408 L 115 425 M 200 420 L 185 435 L 195 438 L 180 455" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: H\u0131z R\u00fczgar\u0131 ve Zemin Enerjisi",
        instruction: "G\u00f6vdenin etraf\u0131na s\u00fcper h\u0131z \u00e7izgilerini \u00e7ek.",
        voice: "G\u00f6vdenin etraf\u0131na r\u00fczgar h\u0131z\u0131n\u0131 ve zemin enerjisini g\u00f6steren \u00e7izgileri \u00e7ekelim.",
        svg: `<line x1="80" y1="210" x2="160" y2="210" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="240" x2="190" y2="240" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="70" y1="340" x2="150" y2="340" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_simsek_kahraman/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme ve \u015eim\u015fek Par\u0131lt\u0131s\u0131",
        instruction: "Tebrikler K\u0131van\u00e7! \u015eim\u015fek kahraman\u0131n\u0131 parlak k\u0131rm\u0131z\u0131 ve alt\u0131n sar\u0131s\u0131 y\u0131ld\u0131r\u0131mlarla boya!",
        voice: "\u0130nan\u0131lmaz bir h\u0131z, harika bir \u00e7izim K\u0131van\u00e7! \u015eim\u015fek kahraman\u0131n f\u0131rt\u0131na gibi ko\u015fuyor. \u015eimdi onu alev k\u0131rm\u0131z\u0131s\u0131 ve alt\u0131n sar\u0131s\u0131 y\u0131ld\u0131r\u0131mlarla par\u0131ldat!",
        svg: `
          <defs>
            <linearGradient id="flashRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
            <linearGradient id="flashGold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
          </defs>
          <path d="M 140 390 L 125 405 L 135 408 L 115 425 M 200 420 L 185 435 L 195 438 L 180 455" stroke="url(#flashGold)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <line x1="80" y1="210" x2="160" y2="210" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="100" y1="240" x2="190" y2="240" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <path d="M 270 325 L 220 375 L 175 410 L 190 415 L 235 375 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 175 410 L 140 430 C 135 440, 150 445, 170 435 L 180 415 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 310 325 L 350 380 L 385 410 L 375 420 L 335 370 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 385 410 L 420 425 C 425 435, 410 445, 385 440 L 375 420 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 275 230 L 255 315 L 335 315 L 325 230 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 315 L 285 325 L 305 315 L 335 325 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <circle cx="295" cy="270" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 298 255 L 288 270 L 298 270 L 292 285 L 305 268 L 295 268 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 325 240 L 380 230 L 420 250 L 415 260 L 370 245 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="425" cy="255" r="12" fill="url(#flashGold)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 270 245 L 220 260 L 195 290 L 190 280 L 230 250 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="190" cy="295" r="12" fill="url(#flashGold)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 270 190 C 260 140, 340 140, 330 190 C 330 230, 270 230, 270 190 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 280 185 C 280 205, 320 205, 320 185 C 320 220, 280 220, 280 185 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 292 205 Q 300 213, 308 205" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <ellipse cx="288" cy="180" rx="7" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
          <circle cx="288" cy="180" r="4.5" fill="#0f172a"/>
          <circle cx="286" cy="177" r="2" fill="#ffffff"/>
          <ellipse cx="312" cy="180" rx="7" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
          <circle cx="312" cy="180" r="4.5" fill="#0f172a"/>
          <circle cx="310" cy="177" r="2" fill="#ffffff"/>
          <path d="M 268 185 L 245 165 L 255 175 L 235 155 L 260 170 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 332 185 L 355 165 L 345 175 L 365 155 L 340 170 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
`,
        audio: "audio/voices/cirak_simsek_kahraman/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🦔 KİRPİ SONİC DÜNYASI: SÜPER HIZLI KIRPI SONIC
  // =========================================================================
  {
    id: "cirak_sonic_klasik",
    categoryId: "sonic",
    name: "S\u00fcper H\u0131zl\u0131 Kirpi Sonic",
    emoji: "\ud83e\udd94",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "D\u00fcnyan\u0131n en h\u0131zl\u0131 mavi kirpisi Sonic! Arkaya savrulan mavi dikenleri, k\u0131rm\u0131z\u0131 ayakkab\u0131lar\u0131 ve alt\u0131n y\u00fcz\u00fc\u011f\u00fc!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, parlak mavi, k\u0131rm\u0131z\u0131, sar\u0131 ve ten rengi boyalar",
    welcomeText: "V\u0131zzz! Selam K\u0131van\u00e7! D\u00fcnyan\u0131n en h\u0131zl\u0131 mavi kirpisi Sonic geldi! Ka\u011f\u0131d\u0131n\u0131 ve mavi boyalar\u0131n\u0131 haz\u0131rla, alt\u0131n y\u00fcz\u00fckleri toplamaya ba\u015fl\u0131yoruz!",
    welcomeAudio: "audio/voices/cirak_sonic_klasik/welcome.mp3",
    colors: ["#2563eb", "#ef4444", "#facc15", "#fed7aa"],
    previewSvg: `
          <defs>
            <linearGradient id="sonicBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="50%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="sonicPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
            <linearGradient id="sonicRed" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="sonicGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>
          <path d="M 490 136 A 34 34 0 1 0 490 204 A 34 34 0 1 0 490 136 Z M 490 150 A 20 20 0 1 1 490 190 A 20 20 0 1 1 490 150 Z" fill="url(#sonicGold)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 75 300 L 145 300 M 65 335 L 130 335 M 95 475 L 175 475" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
          <path d="M 245 295 L 200 310 L 242 325 M 245 345 L 210 365 L 250 368 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 265 372 L 245 435 L 260 438 L 280 375 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 235 446 C 230 478, 260 488, 310 484 C 325 478, 320 454, 290 446 C 268 440, 250 440, 235 446 Z" fill="url(#sonicRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 444 L 285 482 L 298 480 L 268 443 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="252" cy="442" rx="18" ry="11" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 295 372 L 325 435 L 340 430 L 310 368 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 320 442 C 315 475, 345 485, 415 480 C 430 475, 430 450, 395 442 C 370 436, 340 436, 320 442 Z" fill="url(#sonicRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 345 440 L 385 478 L 402 476 L 365 440 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <rect x="330" y="452" width="14" height="10" rx="2" fill="url(#sonicGold)" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="335" cy="436" rx="18" ry="11" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 255 270 C 240 315, 245 365, 275 375 C 310 375, 325 320, 315 270 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="286" cy="322" rx="22" ry="34" fill="url(#sonicPeach)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="url(#sonicPeach)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="215" cy="355" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="235" cy="348" rx="16" ry="12" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="url(#sonicPeach)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="415" cy="272" rx="12" ry="18" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 425 260 C 455 245, 480 250, 485 262 C 485 275, 460 275, 445 275 C 460 285, 450 300, 430 295 C 420 290, 420 275, 425 260 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 310 125 L 335 88 L 340 140 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 240 135 C 290 110, 355 135, 360 200 C 355 245, 270 265, 225 250 C 195 262, 165 275, 135 280 C 135 260, 155 240, 190 222 C 165 228, 135 235, 105 235 C 115 210, 145 190, 185 180 C 165 175, 145 170, 115 165 C 145 135, 190 125, 245 135 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 245 140 L 235 90 L 280 122 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 248 130 L 243 105 L 268 122 Z" fill="url(#sonicPeach)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 248 212 C 242 155, 290 142, 305 182 C 320 142, 355 155, 352 212 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="288" cy="190" rx="13" ry="20" fill="#22c55e" stroke="#0f172a" stroke-width="5"/>
          <circle cx="290" cy="190" r="8" fill="#0f172a"/>
          <circle cx="286" cy="183" r="4" fill="#ffffff"/>
          <ellipse cx="332" cy="190" rx="11" ry="19" fill="#22c55e" stroke="#0f172a" stroke-width="5"/>
          <circle cx="334" cy="190" r="7" fill="#0f172a"/>
          <circle cx="330" cy="183" r="3.5" fill="#ffffff"/>
          <path d="M 225 248 C 220 210, 260 205, 300 220 C 335 205, 370 210, 365 245 C 350 278, 250 278, 225 248 Z" fill="url(#sonicPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="366" cy="216" rx="14" ry="9" fill="#0f172a" transform="rotate(-10 366 216)"/>
          <path d="M 285 245 C 310 262, 340 255, 350 238" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Yuvarlak Al\u0131n ve Ba\u015f Tepesi",
        instruction: "Ka\u011f\u0131d\u0131n \u00fcst ortas\u0131na Sonic'in yuvarlak aln\u0131n\u0131 ve ba\u015f kavisini \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na Sonic'in p\u00fcr\u00fczs\u00fcz yuvarlak aln\u0131n\u0131 ve ba\u015f kavisini \u00e7izelim.",
        svg: `<path d="M 240 135 C 290 110, 355 135, 360 200" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: \u0130ki Sivri Kirpi Kula\u011f\u0131",
        instruction: "Ba\u015f\u0131n tepesine iki \u00fc\u00e7gen \u015feklinde sivri Sonic kula\u011f\u0131 yap.",
        voice: "\u015eimdi ba\u015f\u0131n\u0131n tepesine sesleri \u00e7ok iyi duyan iki sivri \u00fc\u00e7gen kirpi kula\u011f\u0131 \u00e7izelim.",
        svg: `<path d="M 245 140 L 235 90 L 280 122 M 310 125 L 335 88 L 340 140" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 248 130 L 243 105 L 268 122" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Arkaya Uzanan \u00dcst ve Orta Dikenler",
        instruction: "Ba\u015f\u0131n arkas\u0131ndan r\u00fczgar gibi geriye uzanan iki b\u00fcy\u00fck mavi dikeni k\u0131v\u0131r.",
        voice: "\u0130\u015fte Sonic'in en haval\u0131 yeri! Arkaya do\u011fru r\u00fczgar gibi savrulan iki b\u00fcy\u00fck dikenini \u00e7izelim.",
        svg: `<path d="M 245 135 C 190 125, 145 135, 115 165 C 145 170, 170 175, 195 182" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M 185 180 C 145 190, 115 210, 105 235 C 135 235, 165 228, 195 220" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Alt Ba\u015f Dikeni",
        instruction: "Orta dikenin alt\u0131na \u00fc\u00e7\u00fcnc\u00fc k\u0131vr\u0131k dikeni ve \u00e7ene ba\u011flant\u0131s\u0131n\u0131 ekle.",
        voice: "Orta dikenin hemen alt\u0131na \u00fc\u00e7\u00fcnc\u00fc k\u0131vr\u0131k dikeni \u00e7izip kafam\u0131z\u0131n arkas\u0131n\u0131 kapatal\u0131m.",
        svg: `<path d="M 190 222 C 155 240, 135 260, 135 280 C 165 275, 195 262, 225 250" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Yanak ve A\u011f\u0131z B\u00f6lgesi (\u015eeftali Y\u00fcz)",
        instruction: "Y\u00fcz\u00fcn alt k\u0131sm\u0131na Sonic'in sevimli a\u011f\u0131z ve yanak alan\u0131n\u0131 \u00e7iz.",
        voice: "Y\u00fcz\u00fcn\u00fcn alt k\u0131sm\u0131na Sonic'in g\u00fcl\u00fcmseyen sevimli yanak ve a\u011f\u0131z b\u00f6lgesini \u00e7izelim.",
        svg: `<path d="M 225 248 C 220 210, 260 205, 300 220 C 335 205, 370 210, 365 245 C 350 278, 250 278, 225 248 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Sevimli Siyah Burun ve Haval\u0131 G\u00fcl\u00fcmseme",
        instruction: "Burnun ucuna parlak siyah oval bir burun ve yan tarafa haval\u0131 bir g\u00fcl\u00fcmseme \u00e7iz.",
        voice: "Burnun ucuna parlak siyah bir burun ve yana\u011f\u0131na \u00e7ok haval\u0131 bir Sonic g\u00fcl\u00fcmsemesi kondural\u0131m!",
        svg: `<ellipse cx="366" cy="216" rx="14" ry="9" fill="#0f172a" transform="rotate(-10 366 216)"/><path d="M 285 245 C 310 262, 340 255, 350 238" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Biti\u015fik B\u00fcy\u00fck G\u00f6z Kemeri",
        instruction: "Y\u00fcz\u00fcn \u00fcst\u00fcne Sonic'in \u00fcnl\u00fc iki yayl\u0131 biti\u015fik g\u00f6z \u00e7er\u00e7evesini yap.",
        voice: "\u015eimdi Sonic'e has o \u00fcnl\u00fc biti\u015fik b\u00fcy\u00fck g\u00f6z kemerini iki kavisle \u00e7izelim.",
        svg: `<path d="M 248 212 C 242 155, 290 142, 305 182 C 320 142, 355 155, 352 212" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Parlak Ye\u015fil G\u00f6zler ve I\u015f\u0131lt\u0131lar",
        instruction: "G\u00f6zlerin i\u00e7ine uzun oval irisleri, siyah g\u00f6zbebeklerini ve beyaz par\u0131lt\u0131lar\u0131 yerle\u015ftir.",
        voice: "\u0130\u00e7ine uzun oval g\u00f6zlerini, siyah g\u00f6zbebeklerini ve \u0131\u015f\u0131l \u0131\u015f\u0131l beyaz par\u0131lt\u0131lar\u0131n\u0131 ekleyelim.",
        svg: `<ellipse cx="288" cy="190" rx="13" ry="20" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="290" cy="190" r="8" fill="#0f172a"/><circle cx="286" cy="183" r="4" fill="#ffffff"/><ellipse cx="332" cy="190" rx="11" ry="19" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="334" cy="190" r="7" fill="#0f172a"/><circle cx="330" cy="183" r="3.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: G\u00f6vde ve Oval Kar\u0131n Deseni",
        instruction: "Ba\u015f\u0131n alt\u0131na k\u00fc\u00e7\u00fck g\u00f6vdeyi ve ortas\u0131na oval kar\u0131n \u00e7izgisini ekle.",
        voice: "Ba\u015f\u0131n\u0131n alt\u0131na k\u00fc\u00e7\u00fck \u00e7evik g\u00f6vdesini ve ortas\u0131na oval kar\u0131n dairesini \u00e7izelim.",
        svg: `<path d="M 255 270 C 240 315, 245 365, 275 375 C 310 375, 325 320, 315 270" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="286" cy="322" rx="22" ry="34" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: S\u0131rt Dikeni ve Minik Kuyruk",
        instruction: "G\u00f6vdenin arkas\u0131na bir s\u0131rt dikeni ve k\u00fc\u00e7\u00fck sivri kirpi kuyru\u011funu \u00e7iz.",
        voice: "S\u0131rt\u0131n\u0131n arkas\u0131na k\u00fc\u00e7\u00fck bir s\u0131rt dikeni ve minik sivri kirpi kuyru\u011funu ekleyelim.",
        svg: `<path d="M 245 295 L 200 310 L 242 325 M 245 345 L 210 365 L 250 368" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Belde Duran Sol Kol ve Beyaz Yumruk",
        instruction: "Sola do\u011fru k\u0131vr\u0131lan kolunu, bilek man\u015fetini ve yumruk eldivenini \u00e7iz.",
        voice: "Belinde duran haval\u0131 sol kolunu, bilek halkas\u0131n\u0131 ve beyaz yumruk eldivenini \u00e7izelim.",
        svg: `<path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="235" cy="348" rx="16" ry="12" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="215" cy="355" r="22" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: \u0130leri \u0130\u015faret Eden Sa\u011f Kol ve Eldiven",
        instruction: "Sa\u011fa do\u011fru 'Hadi ko\u015fal\u0131m!' diye i\u015faret eden elini ve b\u00fcy\u00fck eldiveni yap.",
        voice: "Sa\u011f elini ileriye do\u011fru 'Hadi yar\u0131\u015fal\u0131m!' der gibi parma\u011f\u0131yla i\u015faret ederken \u00e7izelim.",
        svg: `<path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="415" cy="272" rx="12" ry="18" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 425 260 C 455 245, 480 250, 485 262 C 485 275, 460 275, 445 275 C 460 285, 450 300, 430 295 C 420 290, 420 275, 425 260 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Sa\u011f Bacak ve Beyaz \u00c7orap Man\u015feti",
        instruction: "Sa\u011f tarafa do\u011fru ad\u0131m atan baca\u011f\u0131 ve k\u0131vr\u0131ml\u0131 \u00e7orap bilekli\u011fini \u00e7iz.",
        voice: "\u015eimdi ileri ad\u0131m atan sa\u011f baca\u011f\u0131n\u0131 ve pofuduk beyaz \u00e7orap bilekli\u011fini yapal\u0131m.",
        svg: `<path d="M 295 372 L 325 435 M 310 368 L 340 430" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="335" cy="436" rx="18" ry="11" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: K\u0131rm\u0131z\u0131-Beyaz \u015eeritli H\u0131zl\u0131 Sa\u011f Ayakkab\u0131",
        instruction: "Sonic'in me\u015fhur beyaz \u015feritli ve alt\u0131n tokal\u0131 k\u0131rm\u0131z\u0131 ko\u015fu ayakkab\u0131s\u0131n\u0131 \u00e7iz.",
        voice: "Sonic'in s\u00fcper h\u0131zl\u0131 k\u0131rm\u0131z\u0131 ayakkab\u0131s\u0131n\u0131, beyaz \u015feridini ve yan\u0131ndaki alt\u0131n tokas\u0131n\u0131 \u00e7izelim!",
        svg: `<path d="M 320 442 C 315 475, 345 485, 415 480 C 430 475, 430 450, 395 442 C 370 436, 340 436, 320 442 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 345 440 L 385 478 M 365 440 L 405 475" stroke="#0f172a" stroke-width="6"/><rect x="330" y="452" width="14" height="10" rx="2" fill="none" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Sol Bacak ve \u00c7orap Man\u015feti",
        instruction: "Di\u011fer baca\u011f\u0131 ve \u00e7orap man\u015fetini yere basarken \u00e7iz.",
        voice: "Sol baca\u011f\u0131n\u0131 ve \u00e7orap man\u015fetini de yere sa\u011flamca basarken \u00e7izelim.",
        svg: `<path d="M 265 372 L 245 435 M 280 375 L 260 438" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="252" cy="442" rx="18" ry="11" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Sol K\u0131rm\u0131z\u0131-Beyaz H\u0131zl\u0131 Ayakkab\u0131",
        instruction: "Sol ayakkab\u0131y\u0131 ve ortas\u0131ndaki beyaz h\u0131z \u015feridini tamamla.",
        voice: "Sol taraftaki h\u0131zl\u0131 k\u0131rm\u0131z\u0131 ayakkab\u0131s\u0131n\u0131 ve beyaz \u015feridini de ekleyelim.",
        svg: `<path d="M 235 446 C 230 478, 260 488, 310 484 C 325 478, 320 454, 290 446 C 268 440, 250 440, 235 446 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 255 444 L 285 482" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Alt\u0131n Y\u00fcz\u00fck ve S\u00fcper H\u0131z \u00c7izgileri",
        instruction: "Sa\u011f \u00fcst k\u00f6\u015feye b\u00fcy\u00fck bir alt\u0131n y\u00fcz\u00fck halkas\u0131 ve arkaya h\u0131z \u00e7izgileri ekle.",
        voice: "Sonic'in en sevdi\u011fi parlak alt\u0131n y\u00fcz\u00fc\u011f\u00fc ve arkas\u0131na s\u00fcper ses h\u0131z\u0131 \u00e7izgilerini ekleyelim!",
        svg: `<circle cx="490" cy="170" r="34" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="490" cy="170" r="20" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 75 300 L 145 300 M 65 335 L 130 335 M 95 475 L 175 475" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_klasik/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (Kraliyet Mavisi Sonic!)",
        instruction: "Tebrikler K\u0131van\u00e7! Kirpi Sonic'i elektrik mavisi, k\u0131rm\u0131z\u0131 ayakkab\u0131lar\u0131 ve alt\u0131n y\u00fcz\u00fc\u011f\u00fcyle renklendir!",
        voice: "S\u00fcpersin K\u0131van\u00e7! Kirpi Sonic ko\u015fmaya haz\u0131r! \u015eimdi onu parlak mavi t\u00fcyleri, ye\u015fil g\u00f6zleri ve alt\u0131n y\u00fcz\u00fc\u011f\u00fcyle \u0131\u015f\u0131l \u0131\u015f\u0131l renklendir!",
        svg: `
          <defs>
            <linearGradient id="sonicBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="50%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="sonicPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
            <linearGradient id="sonicRed" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="sonicGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>
          <path d="M 490 136 A 34 34 0 1 0 490 204 A 34 34 0 1 0 490 136 Z M 490 150 A 20 20 0 1 1 490 190 A 20 20 0 1 1 490 150 Z" fill="url(#sonicGold)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 75 300 L 145 300 M 65 335 L 130 335 M 95 475 L 175 475" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
          <path d="M 245 295 L 200 310 L 242 325 M 245 345 L 210 365 L 250 368 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 265 372 L 245 435 L 260 438 L 280 375 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 235 446 C 230 478, 260 488, 310 484 C 325 478, 320 454, 290 446 C 268 440, 250 440, 235 446 Z" fill="url(#sonicRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 444 L 285 482 L 298 480 L 268 443 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="252" cy="442" rx="18" ry="11" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 295 372 L 325 435 L 340 430 L 310 368 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 320 442 C 315 475, 345 485, 415 480 C 430 475, 430 450, 395 442 C 370 436, 340 436, 320 442 Z" fill="url(#sonicRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 345 440 L 385 478 L 402 476 L 365 440 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <rect x="330" y="452" width="14" height="10" rx="2" fill="url(#sonicGold)" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="335" cy="436" rx="18" ry="11" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 255 270 C 240 315, 245 365, 275 375 C 310 375, 325 320, 315 270 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="286" cy="322" rx="22" ry="34" fill="url(#sonicPeach)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="url(#sonicPeach)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="215" cy="355" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="235" cy="348" rx="16" ry="12" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="url(#sonicPeach)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="415" cy="272" rx="12" ry="18" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 425 260 C 455 245, 480 250, 485 262 C 485 275, 460 275, 445 275 C 460 285, 450 300, 430 295 C 420 290, 420 275, 425 260 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 310 125 L 335 88 L 340 140 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 240 135 C 290 110, 355 135, 360 200 C 355 245, 270 265, 225 250 C 195 262, 165 275, 135 280 C 135 260, 155 240, 190 222 C 165 228, 135 235, 105 235 C 115 210, 145 190, 185 180 C 165 175, 145 170, 115 165 C 145 135, 190 125, 245 135 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 245 140 L 235 90 L 280 122 Z" fill="url(#sonicBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 248 130 L 243 105 L 268 122 Z" fill="url(#sonicPeach)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 248 212 C 242 155, 290 142, 305 182 C 320 142, 355 155, 352 212 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="288" cy="190" rx="13" ry="20" fill="#22c55e" stroke="#0f172a" stroke-width="5"/>
          <circle cx="290" cy="190" r="8" fill="#0f172a"/>
          <circle cx="286" cy="183" r="4" fill="#ffffff"/>
          <ellipse cx="332" cy="190" rx="11" ry="19" fill="#22c55e" stroke="#0f172a" stroke-width="5"/>
          <circle cx="334" cy="190" r="7" fill="#0f172a"/>
          <circle cx="330" cy="183" r="3.5" fill="#ffffff"/>
          <path d="M 225 248 C 220 210, 260 205, 300 220 C 335 205, 370 210, 365 245 C 350 278, 250 278, 225 248 Z" fill="url(#sonicPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="366" cy="216" rx="14" ry="9" fill="#0f172a" transform="rotate(-10 366 216)"/>
          <path d="M 285 245 C 310 262, 340 255, 350 238" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
`,
        audio: "audio/voices/cirak_sonic_klasik/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🦔 KİRPİ SONİC DÜNYASI: ALTIN SÜPER SONIC
  // =========================================================================
  {
    id: "cirak_super_sonic",
    categoryId: "sonic",
    name: "Alt\u0131n S\u00fcper Sonic",
    emoji: "\u26a1",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Kaos Z\u00fcmr\u00fctlerinin g\u00fcc\u00fcyle alt\u0131n sar\u0131s\u0131na d\u00f6n\u00fc\u015fen S\u00fcper Sonic! Havaya dikilmi\u015f dikenler ve alt\u0131n enerji auras\u0131!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, parlak sar\u0131, alt\u0131n, k\u0131rm\u0131z\u0131 ve beyaz boyalar",
    welcomeText: "\u0130nan\u0131lmaz g\u00fc\u00e7! Merhaba K\u0131van\u00e7! Yedi Kaos Z\u00fcmr\u00fcd\u00fc ile Alt\u0131n S\u00fcper Sonic'e d\u00f6n\u00fc\u015fmeye haz\u0131r m\u0131s\u0131n? G\u00f6ky\u00fcz\u00fcnde u\u00e7an efsane Sonic'i \u00e7izelim!",
    welcomeAudio: "audio/voices/cirak_super_sonic/welcome.mp3",
    colors: ["#facc15", "#f59e0b", "#ef4444", "#ffffff"],
    previewSvg: `
          <defs>
            <linearGradient id="supGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
            <linearGradient id="supPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
            <linearGradient id="supRed" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
          </defs>
          <polygon points="100,260 125,280 115,310 85,310 75,280" fill="#22c55e" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <polygon points="100,268 115,282 108,302 92,302 85,282" fill="#86efac" stroke="#0f172a" stroke-width="3"/>
          <path d="M 110 380 L 125 360 L 118 360 L 135 340 M 490 360 L 475 340 L 485 340 L 465 320" stroke="#facc15" stroke-width="7" stroke-linecap="round" fill="none"/>
          <path d="M 272 355 L 250 405 L 275 440 L 290 435 L 270 400 L 285 355 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 260 448 C 245 480, 275 495, 315 485 C 325 475, 315 450, 290 448 Z" fill="url(#supRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <line x1="270" y1="450" x2="295" y2="482" stroke="#ffffff" stroke-width="7"/>
          <ellipse cx="275" cy="442" rx="16" ry="10" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 328 355 L 345 425 L 360 422 L 340 352 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 332 436 C 330 470, 360 480, 405 470 C 415 460, 400 436, 365 436 Z" fill="url(#supRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="348" cy="430" rx="16" ry="10" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 268 252 L 260 350 C 280 362, 320 362, 340 350 L 332 252 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="300" cy="305" rx="22" ry="34" fill="url(#supPeach)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="url(#supPeach)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="165" cy="355" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="182" cy="340" rx="12" ry="16" fill="#ffffff" stroke="#0f172a" stroke-width="7" transform="rotate(-35 182 340)"/>
          <path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="url(#supPeach)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="435" cy="355" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="418" cy="340" rx="12" ry="16" fill="#ffffff" stroke="#0f172a" stroke-width="7" transform="rotate(35 418 340)"/>
          <path d="M 240 185 L 220 140 L 265 165 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 360 185 L 380 140 L 335 165 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 275 165 C 275 110, 290 70, 300 45 C 310 70, 325 110, 325 165 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 245 170 C 210 130, 175 95, 165 75 C 190 95, 220 120, 255 155 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 355 170 C 390 130, 425 95, 435 75 C 410 95, 380 120, 345 155 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 235 205 C 185 185, 145 185, 125 175 C 155 205, 195 220, 235 225 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 365 205 C 415 185, 455 185, 475 175 C 445 205, 405 220, 365 225 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 235 215 C 235 160, 365 160, 365 215 C 365 255, 235 255, 235 215 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 245 198 C 250 165, 290 165, 300 185 C 310 165, 350 165, 355 198 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="275" cy="188" rx="10" ry="15" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
          <circle cx="275" cy="188" r="6" fill="#0f172a"/>
          <circle cx="273" cy="184" r="2.5" fill="#ffffff"/>
          <ellipse cx="325" cy="188" rx="10" ry="15" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
          <circle cx="325" cy="188" r="6" fill="#0f172a"/>
          <circle cx="323" cy="184" r="2.5" fill="#ffffff"/>
          <path d="M 238 220 C 235 198, 280 198, 300 212 C 320 198, 365 198, 362 220 C 355 258, 245 258, 238 220 Z" fill="url(#supPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="300" cy="215" rx="11" ry="8" fill="#0f172a"/>
          <path d="M 280 235 Q 305 245, 325 232" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Alt\u0131n Y\u00fcz ve \u00c7ene \u00c7emberi",
        instruction: "Sayfan\u0131n ortas\u0131na hafif\u00e7e havada s\u00fcz\u00fclen y\u00fcz kavisini \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na S\u00fcper Sonic'in yuvarlak y\u00fcz hatlar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 235 215 C 235 160, 365 160, 365 215" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_super_sonic/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: G\u00f6ky\u00fcz\u00fcne Dikilmi\u015f \u0130ki Alt\u0131n Kulak",
        instruction: "Kafan\u0131n \u00fcst\u00fcne iki sivri \u00fc\u00e7gen kulak kondur.",
        voice: "Kafan\u0131n iki yan\u0131na sivri ve dikkatli duran iki alt\u0131n kulak \u00e7izelim.",
        svg: `<path d="M 240 185 L 220 140 L 265 165 M 360 185 L 380 140 L 335 165" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_sonic/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Yukar\u0131 F\u0131rlayan Dev Orta Diken",
        instruction: "Ba\u015f\u0131n tepesinden g\u00f6ky\u00fcz\u00fcne do\u011fru \u015fahlanan en uzun alt\u0131n dikeni \u00e7iz.",
        voice: "S\u00fcper Sonic'in b\u00fct\u00fcn dikenleri havaya kalkar! Tepeden g\u00f6\u011fe y\u00fckselen dev merkez dikenini \u00e7izelim.",
        svg: `<path d="M 275 165 C 275 110, 290 70, 300 45 C 310 70, 325 110, 325 165" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_sonic/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Sol ve Sa\u011f Yukar\u0131 K\u0131vr\u0131lan Dikenler",
        instruction: "Merkez dikenin iki yan\u0131ndan \u00e7apraz yukar\u0131 a\u00e7\u0131lan g\u00fc\u00e7l\u00fc dikenleri ekle.",
        voice: "\u015eimdi yanlardan alev gibi yukar\u0131 f\u0131rlayan iki\u015fer alt\u0131n diken daha ekleyelim.",
        svg: `<path d="M 245 170 C 210 130, 175 95, 165 75 C 190 95, 220 120, 255 155" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M 355 170 C 390 130, 425 95, 435 75 C 410 95, 380 120, 345 155" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_sonic/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Yan Dikenler",
        instruction: "Kulaklar\u0131n alt\u0131ndan iki yana do\u011fru savrulan yan dikenleri tamamla.",
        voice: "Kulaklar\u0131n alt\u0131ndan iki yana yay\u0131lan enerji y\u00fckl\u00fc yan dikenlerini de \u00e7izelim.",
        svg: `<path d="M 235 205 C 185 185, 145 185, 125 175 C 155 205, 195 220, 235 225" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 365 205 C 415 185, 455 185, 475 175 C 445 205, 405 220, 365 225" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_sonic/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: G\u00fc\u00e7l\u00fc \u015eeftali A\u011f\u0131z B\u00f6lgesi",
        instruction: "Y\u00fcz\u00fcn alt\u0131na geni\u015f g\u00fcl\u00fcmseyen a\u011f\u0131z kasesini \u00e7iz.",
        voice: "Y\u00fcz\u00fcn\u00fcn alt\u0131na S\u00fcper Sonic'in kendinden emin a\u011f\u0131z ve yanak kavisini \u00e7izelim.",
        svg: `<path d="M 238 220 C 235 198, 280 198, 300 212 C 320 198, 365 198, 362 220 C 355 258, 245 258, 238 220 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_sonic/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Siyah Oval Burun ve Kararl\u0131 G\u00fcl\u00fc\u015f",
        instruction: "Ortaya k\u00fc\u00e7\u00fck siyah burun ve yana do\u011fru haval\u0131 bir g\u00fcl\u00fcmseme \u00e7iz.",
        voice: "Tam ortaya parlak siyah burnunu ve cesur g\u00fcl\u00fcmseme \u00e7izgisini koyal\u0131m.",
        svg: `<ellipse cx="300" cy="215" rx="11" ry="8" fill="#0f172a"/><path d="M 280 235 Q 305 245, 325 232" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_super_sonic/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Biti\u015fik Ka\u015f \u00c7izgisi ve Yakut G\u00f6zler",
        instruction: "Ka\u015flar\u0131n\u0131 g\u00fc\u00e7l\u00fcce \u00e7atm\u0131\u015f g\u00f6z \u00e7er\u00e7evesi ve i\u00e7ine parlayan k\u0131rm\u0131z\u0131 g\u00f6zleri yap.",
        voice: "S\u00fcper Sonic'in yakut k\u0131rm\u0131z\u0131s\u0131 parlayan cesur g\u00f6zlerini ve \u0131\u015f\u0131l \u0131\u015f\u0131l beyaz parlamalar\u0131n\u0131 \u00e7izelim!",
        svg: `<path d="M 245 198 C 250 165, 290 165, 300 185 C 310 165, 350 165, 355 198" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><ellipse cx="275" cy="188" rx="10" ry="15" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="275" cy="188" r="6" fill="#0f172a"/><circle cx="273" cy="184" r="2.5" fill="#ffffff"/><ellipse cx="325" cy="188" rx="10" ry="15" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="325" cy="188" r="6" fill="#0f172a"/><circle cx="323" cy="184" r="2.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_super_sonic/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Havada S\u00fcz\u00fclen G\u00f6vde",
        instruction: "Kafan\u0131n alt\u0131na ince uzun g\u00f6vde ve ortas\u0131na oval kar\u0131n \u015feklini \u00e7iz.",
        voice: "Kafan\u0131n alt\u0131na havada s\u00fcz\u00fclen \u00e7evik g\u00f6vdesini ve kar\u0131n desenini yapal\u0131m.",
        svg: `<path d="M 268 252 L 260 350 C 280 362, 320 362, 340 350 L 332 252" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><ellipse cx="300" cy="305" rx="22" ry="34" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_super_sonic/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Kavu\u015fturulmu\u015f veya A\u00e7\u0131lan G\u00fc\u00e7 Kollar\u0131 (Sol)",
        instruction: "Sol kolu a\u015fa\u011f\u0131dan g\u00fc\u00e7 toplarken yana do\u011fru a\u00e7arak \u00e7iz.",
        voice: "Sol kolunu etrafa alt\u0131n enerji sa\u00e7arak yana do\u011fru g\u00fc\u00e7l\u00fc bir \u015fekilde uzatal\u0131m.",
        svg: `<path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="182" cy="340" rx="12" ry="16" fill="none" stroke="#0f172a" stroke-width="7" transform="rotate(-35 182 340)"/>`,
        audio: "audio/voices/cirak_super_sonic/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Sol Yumruk Eldiven",
        instruction: "Sol kolun ucuna parlayan s\u0131k\u0131l\u0131 beyaz yumru\u011fu \u00e7iz.",
        voice: "Sol kolun ucuna beyaz s\u00fcper g\u00fc\u00e7 yumruk eldivenini kondural\u0131m.",
        svg: `<circle cx="165" cy="355" r="22" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 155 348 L 175 348 M 155 358 L 175 358" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_super_sonic/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Sa\u011f G\u00fc\u00e7 Kolu ve Yumruk",
        instruction: "Sa\u011f tarafa da enerjiyle a\u00e7\u0131lan kolu ve beyaz yumru\u011fu \u00e7iz.",
        voice: "Sa\u011f tarafa da ayn\u0131 heyecanla g\u00fc\u00e7 toplayan kolunu ve s\u0131k\u0131l\u0131 yumru\u011funu \u00e7izelim.",
        svg: `<path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="418" cy="340" rx="12" ry="16" fill="none" stroke="#0f172a" stroke-width="7" transform="rotate(35 418 340)"/><circle cx="435" cy="355" r="22" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_super_sonic/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Havada B\u00fck\u00fcl\u00fc U\u00e7u\u015f Baca\u011f\u0131 (Sol)",
        instruction: "Sol baca\u011f\u0131 havada s\u00fcz\u00fcl\u00fcr gibi hafif\u00e7e \u00f6ne b\u00fckerek \u00e7iz.",
        voice: "S\u00fcper Sonic u\u00e7uyor! Sol baca\u011f\u0131n\u0131 havada hafif\u00e7e b\u00fck\u00fclm\u00fc\u015f \u015fekilde \u00e7izelim.",
        svg: `<path d="M 272 355 L 250 405 L 275 440" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="275" cy="442" rx="16" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_super_sonic/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Sol K\u0131rm\u0131z\u0131-Alt\u0131n Ayakkab\u0131",
        instruction: "Sol baca\u011f\u0131n ucuna k\u0131rm\u0131z\u0131 ayakkab\u0131y\u0131 ve alt\u0131n tokas\u0131n\u0131 ekle.",
        voice: "Sol aya\u011f\u0131na beyaz \u015feritli k\u0131rm\u0131z\u0131 ayakkab\u0131s\u0131n\u0131 ekleyelim.",
        svg: `<path d="M 260 448 C 245 480, 275 495, 315 485 C 325 475, 315 450, 290 448 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="270" y1="450" x2="295" y2="482" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_super_sonic/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Sa\u011f Uzun U\u00e7u\u015f Baca\u011f\u0131 ve Ayakkab\u0131",
        instruction: "Sa\u011f baca\u011f\u0131 a\u015fa\u011f\u0131 do\u011fru s\u00fcz\u00fcl\u00fcrken \u00e7iz ve sa\u011f ayakkab\u0131y\u0131 tamamla.",
        voice: "Sa\u011f baca\u011f\u0131n\u0131 a\u015fa\u011f\u0131ya uzat\u0131p sa\u011f ayakkab\u0131s\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 328 355 L 345 425" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="348" cy="430" rx="16" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 332 436 C 330 470, 360 480, 405 470 C 415 460, 400 436, 365 436 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_super_sonic/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Yedi Y\u0131ld\u0131zl\u0131 Kaos Z\u00fcmr\u00fcd\u00fc",
        instruction: "Etraf\u0131na alt\u0131n enerjisini veren parlayan elmas Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc \u00e7iz.",
        voice: "Yan\u0131na ona S\u00fcper Sonic g\u00fcc\u00fc veren par\u0131l par\u0131l Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc \u00e7izelim!",
        svg: `<polygon points="100,260 125,280 115,310 85,310 75,280" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/><polygon points="100,268 115,282 108,302 92,302 85,282" fill="none" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_super_sonic/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: S\u00fcper Alt\u0131n Enerji Auras\u0131 ve \u015eim\u015fekler",
        instruction: "V\u00fccudunun etraf\u0131na parlayan y\u0131ld\u0131r\u0131m k\u0131v\u0131lc\u0131mlar\u0131 ve \u015fim\u015fek auras\u0131 ekle.",
        voice: "Etraf\u0131na g\u00f6ky\u00fcz\u00fcn\u00fc titreten alt\u0131n y\u0131ld\u0131r\u0131m k\u0131v\u0131lc\u0131mlar\u0131 ve enerji par\u0131lt\u0131lar\u0131 ekleyelim!",
        svg: `<path d="M 110 380 L 125 360 L 118 360 L 135 340 M 490 360 L 475 340 L 485 340 L 465 320 M 480 230 L 495 215 M 120 130 L 135 145" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
        audio: "audio/voices/cirak_super_sonic/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Alt\u0131n I\u015f\u0131k Patlamas\u0131 ve Canl\u0131 Boyama!",
        instruction: "Tebrikler K\u0131van\u00e7! S\u00fcper Sonic'i g\u00fcne\u015f gibi alt\u0131n sar\u0131s\u0131 ve parlayan z\u00fcmr\u00fct renklerle canland\u0131r!",
        voice: "\u0130nan\u0131lmaz oldu K\u0131van\u00e7! Alt\u0131n S\u00fcper Sonic g\u00f6ky\u00fcz\u00fcnde parl\u0131yor! \u015eimdi onu alt\u0131n sar\u0131s\u0131, yakut k\u0131rm\u0131z\u0131s\u0131 g\u00f6zleri ve parlak z\u00fcmr\u00fctlerle boya!",
        svg: `
          <defs>
            <linearGradient id="supGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
            <linearGradient id="supPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
            <linearGradient id="supRed" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
          </defs>
          <polygon points="100,260 125,280 115,310 85,310 75,280" fill="#22c55e" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <polygon points="100,268 115,282 108,302 92,302 85,282" fill="#86efac" stroke="#0f172a" stroke-width="3"/>
          <path d="M 110 380 L 125 360 L 118 360 L 135 340 M 490 360 L 475 340 L 485 340 L 465 320" stroke="#facc15" stroke-width="7" stroke-linecap="round" fill="none"/>
          <path d="M 272 355 L 250 405 L 275 440 L 290 435 L 270 400 L 285 355 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 260 448 C 245 480, 275 495, 315 485 C 325 475, 315 450, 290 448 Z" fill="url(#supRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <line x1="270" y1="450" x2="295" y2="482" stroke="#ffffff" stroke-width="7"/>
          <ellipse cx="275" cy="442" rx="16" ry="10" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 328 355 L 345 425 L 360 422 L 340 352 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 332 436 C 330 470, 360 480, 405 470 C 415 460, 400 436, 365 436 Z" fill="url(#supRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="348" cy="430" rx="16" ry="10" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 268 252 L 260 350 C 280 362, 320 362, 340 350 L 332 252 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="300" cy="305" rx="22" ry="34" fill="url(#supPeach)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="url(#supPeach)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="165" cy="355" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="182" cy="340" rx="12" ry="16" fill="#ffffff" stroke="#0f172a" stroke-width="7" transform="rotate(-35 182 340)"/>
          <path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="url(#supPeach)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="435" cy="355" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="418" cy="340" rx="12" ry="16" fill="#ffffff" stroke="#0f172a" stroke-width="7" transform="rotate(35 418 340)"/>
          <path d="M 240 185 L 220 140 L 265 165 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 360 185 L 380 140 L 335 165 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 275 165 C 275 110, 290 70, 300 45 C 310 70, 325 110, 325 165 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 245 170 C 210 130, 175 95, 165 75 C 190 95, 220 120, 255 155 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 355 170 C 390 130, 425 95, 435 75 C 410 95, 380 120, 345 155 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 235 205 C 185 185, 145 185, 125 175 C 155 205, 195 220, 235 225 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 365 205 C 415 185, 455 185, 475 175 C 445 205, 405 220, 365 225 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 235 215 C 235 160, 365 160, 365 215 C 365 255, 235 255, 235 215 Z" fill="url(#supGold)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 245 198 C 250 165, 290 165, 300 185 C 310 165, 350 165, 355 198 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="275" cy="188" rx="10" ry="15" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
          <circle cx="275" cy="188" r="6" fill="#0f172a"/>
          <circle cx="273" cy="184" r="2.5" fill="#ffffff"/>
          <ellipse cx="325" cy="188" rx="10" ry="15" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
          <circle cx="325" cy="188" r="6" fill="#0f172a"/>
          <circle cx="323" cy="184" r="2.5" fill="#ffffff"/>
          <path d="M 238 220 C 235 198, 280 198, 300 212 C 320 198, 365 198, 362 220 C 355 258, 245 258, 238 220 Z" fill="url(#supPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="300" cy="215" rx="11" ry="8" fill="#0f172a"/>
          <path d="M 280 235 Q 305 245, 325 232" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
`,
        audio: "audio/voices/cirak_super_sonic/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🦔 KİRPİ SONİC DÜNYASI: UÇAN TILKI TAILS
  // =========================================================================
  {
    id: "cirak_sonic_tails",
    categoryId: "sonic",
    name: "U\u00e7an Tilki Tails",
    emoji: "\ud83e\udd8a",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Sonic'in en iyi arkada\u015f\u0131, helikopter gibi d\u00f6nen iki kabar\u0131k kuyruklu dahi tilki Tails! Parlak mavi g\u00f6zler ve beyaz t\u00fcy yaka.",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, turuncu, sar\u0131, beyaz ve k\u0131rm\u0131z\u0131 boyalar",
    welcomeText: "Helikopter gibi u\u00e7maya haz\u0131r m\u0131s\u0131n K\u0131van\u00e7? Sonic'in en yak\u0131n dostu iki kuyruklu sevimli tilki Tails geliyor!",
    welcomeAudio: "audio/voices/cirak_sonic_tails/welcome.mp3",
    colors: ["#f97316", "#fb923c", "#ffffff", "#3b82f6"],
    previewSvg: `
          <defs>
            <linearGradient id="tailsOrange" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fbbf24"/>
              <stop offset="50%" stop-color="#f97316"/>
              <stop offset="100%" stop-color="#ea580c"/>
            </linearGradient>
            <linearGradient id="tailsWhite" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#f1f5f9"/>
            </linearGradient>
          </defs>
          <path d="M 268 335 C 180 315, 110 340, 95 400 C 125 430, 195 415, 255 370 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 140 355 C 110 370, 95 385, 95 400 C 110 415, 125 415, 140 405 L 150 385 L 130 375 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 332 335 C 420 315, 490 340, 505 400 C 475 430, 405 415, 345 370 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 460 355 C 490 370, 505 385, 505 400 C 490 415, 475 415, 460 405 L 450 385 L 470 375 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 80 370 Q 75 400, 95 425 M 520 370 Q 525 400, 505 425" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M 278 365 L 270 430 L 285 430 L 293 365 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 240 442 C 235 470, 265 480, 295 476 C 305 466, 295 442, 268 442 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 268 442 C 295 442, 305 466, 295 476 L 268 476 Z" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="268" cy="435" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 322 365 L 330 430 L 315 430 L 307 365 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 310 442 C 305 470, 335 480, 365 476 C 375 466, 365 442, 335 442 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 335 442 C 365 442, 375 466, 365 476 L 335 476 Z" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="332" cy="435" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 268 275 L 265 360 C 280 370, 320 370, 335 360 L 332 275 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 265 250 C 260 275, 285 285, 300 295 C 315 285, 340 275, 335 250 Z" fill="url(#tailsWhite)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="url(#tailsOrange)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="185" cy="200" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="195" cy="222" rx="14" ry="10" fill="#ffffff" stroke="#0f172a" stroke-width="6" transform="rotate(-30 195 222)"/>
          <path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="url(#tailsOrange)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="415" cy="355" r="19" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="403" cy="336" rx="14" ry="10" fill="#ffffff" stroke="#0f172a" stroke-width="6" transform="rotate(35 403 336)"/>
          <path d="M 248 160 L 210 100 L 275 130 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 245 148 L 224 115 L 265 132 Z" fill="#fef08a" stroke="#0f172a" stroke-width="5"/>
          <path d="M 352 160 L 390 100 L 325 130 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 355 148 L 376 115 L 335 132 Z" fill="#fef08a" stroke="#0f172a" stroke-width="5"/>
          <path d="M 245 170 C 245 120, 355 120, 355 170 L 380 190 L 365 200 L 382 215 L 355 225 C 345 255, 255 255, 245 225 L 218 215 L 235 200 L 220 190 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 285 130 L 295 100 L 305 128 M 305 128 L 320 105 L 320 132 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 245 225 C 255 255, 345 255, 355 225 C 335 210, 310 210, 300 220 C 290 210, 265 210, 245 225 Z" fill="url(#tailsWhite)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="275" cy="185" rx="16" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <ellipse cx="277" cy="187" rx="11" ry="15" fill="#38bdf8"/>
          <circle cx="278" cy="187" r="7" fill="#0f172a"/>
          <circle cx="274" cy="180" r="4" fill="#ffffff"/>
          <ellipse cx="325" cy="185" rx="16" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <ellipse cx="323" cy="187" rx="11" ry="15" fill="#38bdf8"/>
          <circle cx="322" cy="187" r="7" fill="#0f172a"/>
          <circle cx="318" cy="180" r="4" fill="#ffffff"/>
          <circle cx="300" cy="218" r="6" fill="#0f172a"/>
          <path d="M 285 234 Q 300 245, 315 234" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Sevimli Al\u0131n ve K\u00e2k\u00fcl Tutamlar\u0131",
        instruction: "Sayfan\u0131n \u00fcst ortas\u0131na yuvarlak ba\u015f tepesini ve aln\u0131ndan \u00e7\u0131kan 3 sevimli t\u00fcy k\u00e2k\u00fcl\u00fcn\u00fc \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na Tails'in tatl\u0131 aln\u0131n\u0131 ve ba\u015f\u0131ndaki \u00fc\u00e7 sevimli sa\u00e7 tutam\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 245 170 C 245 120, 355 120, 355 170" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 285 130 L 295 100 L 305 128 M 305 128 L 320 105 L 320 132" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: B\u00fcy\u00fck Tilki Kulaklar\u0131 (Sol ve Sa\u011f)",
        instruction: "Kafan\u0131n iki yan\u0131na sevimli \u00fc\u00e7gen tilki kulaklar\u0131n\u0131 ve i\u00e7 \u00e7izgilerini ekle.",
        voice: "\u015eimdi iki yana sevimli b\u00fcy\u00fck tilki kulaklar\u0131n\u0131 ve i\u00e7 kulak \u00fc\u00e7genlerini \u00e7izelim.",
        svg: `<path d="M 248 160 L 210 100 L 275 130 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 245 148 L 224 115 L 265 132 Z" fill="none" stroke="#0f172a" stroke-width="5"/><path d="M 352 160 L 390 100 L 325 130 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 355 148 L 376 115 L 335 132 Z" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Sivri T\u00fcy Yanaklar\u0131 (Sol ve Sa\u011f)",
        instruction: "Tails'in y\u00fcz\u00fcn\u00fcn iki yan\u0131nda pofuduk tilki t\u00fcy\u00fc \u00e7\u0131k\u0131nt\u0131lar\u0131 vard\u0131r; yanaklara iki\u015fer t\u00fcy \u00e7iz.",
        voice: "Tails'in yanaklar\u0131nda tatl\u0131 tilki t\u00fcy\u00fc tutamlar\u0131 vard\u0131r! \u0130ki yana pofuduk yanak t\u00fcyleri yapal\u0131m.",
        svg: `<path d="M 245 170 L 220 190 L 235 200 L 218 215 L 245 225" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 355 170 L 380 190 L 365 200 L 382 215 L 355 225" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Beyaz Yanak \u00c7enesi ve G\u00fcl\u00fcmseme",
        instruction: "Alt y\u00fcz\u00fc kapatan g\u00fcl\u00fcmseyen beyaz \u00e7ene yay\u0131n\u0131 yap.",
        voice: "Alt y\u00fcz\u00fc kapatan tombul beyaz yanak yay\u0131n\u0131 ve tatl\u0131 g\u00fcl\u00fcmseme \u00e7izgisini \u00e7izelim.",
        svg: `<path d="M 245 225 C 255 255, 345 255, 355 225 C 335 210, 310 210, 300 220 C 290 210, 265 210, 245 225 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 285 234 Q 300 245, 315 234" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Minik D\u00fc\u011fme Burun",
        instruction: "Ortaya k\u00fc\u00e7\u00fck, parlak siyah bir tilki burnu koy.",
        voice: "Y\u00fcz\u00fcn tam ortas\u0131na d\u00fc\u011fme gibi sevimli bir siyah burun kondural\u0131m.",
        svg: `<circle cx="300" cy="218" r="6" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Sol B\u00fcy\u00fck Parlak Mavi G\u00f6z",
        instruction: "Sol tarafa kocaman oval g\u00f6z, g\u00f6zbebe\u011fi ve par\u0131lt\u0131lar \u00e7iz.",
        voice: "Sol tarafa kocaman oval g\u00f6z\u00fcn\u00fc \u00e7izip i\u00e7ine \u0131\u015f\u0131l \u0131\u015f\u0131l beyaz par\u0131lt\u0131lar koyal\u0131m.",
        svg: `<ellipse cx="275" cy="185" rx="16" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="278" cy="187" r="9" fill="#0f172a"/><circle cx="274" cy="180" r="4" fill="#ffffff"/><circle cx="281" cy="191" r="2" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Sa\u011f B\u00fcy\u00fck Parlak Mavi G\u00f6z",
        instruction: "Sa\u011f tarafa da ayn\u0131 sevimli g\u00f6z\u00fc yerle\u015ftir.",
        voice: "Sa\u011f tarafa da ayn\u0131 s\u0131cak ve dost canl\u0131s\u0131 g\u00f6z\u00fc \u00e7izelim.",
        svg: `<ellipse cx="325" cy="185" rx="16" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="322" cy="187" r="9" fill="#0f172a"/><circle cx="318" cy="180" r="4" fill="#ffffff"/><circle cx="325" cy="191" r="2" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Pofuduk Beyaz G\u00f6\u011f\u00fcs Yelesi",
        instruction: "Boynun alt\u0131na t\u00fcy t\u00fcy kabar\u0131k g\u00f6\u011f\u00fcs yelesini yap.",
        voice: "Boynunun alt\u0131na kabar\u0131k bembeyaz g\u00f6\u011f\u00fcs t\u00fcylerini puf puf \u00e7izelim.",
        svg: `<path d="M 265 250 C 260 275, 285 285, 300 295 C 315 285, 340 275, 335 250" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Tombi\u015f G\u00f6vde",
        instruction: "G\u00f6\u011f\u00fcs yelesinin alt\u0131na k\u00fc\u00e7\u00fck tilki g\u00f6vdesini indir.",
        voice: "G\u00f6\u011f\u00fcs yelesinin alt\u0131na \u00e7evik ve sevimli g\u00f6vde \u00e7izgilerini indirelim.",
        svg: `<path d="M 268 275 L 265 360 C 280 370, 320 370, 335 360 L 332 275" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Sol Kol ve El Sallayan Beyaz Eldiven",
        instruction: "Sola do\u011fru ne\u015feyle el sallayan kolunu ve b\u00fcy\u00fck beyaz eldiveni \u00e7iz.",
        voice: "Sol kolunu havaya kald\u0131r\u0131p bize ne\u015feyle el sallarken \u00e7izelim!",
        svg: `<path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="195" cy="222" rx="14" ry="10" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-30 195 222)"/><circle cx="185" cy="200" r="20" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Sa\u011f Kol ve Beyaz Yumruk",
        instruction: "Sa\u011f tarafa dengeleyen sa\u011f kolunu ve yumruk eldiveni yap.",
        voice: "Sa\u011f kolunu da u\u00e7u\u015f dengesini sa\u011flarken yana a\u00e7arak \u00e7izelim.",
        svg: `<path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="403" cy="336" rx="14" ry="10" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(35 403 336)"/><circle cx="415" cy="355" r="19" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Sol Bacak ve \u0130ki Renkli Ayakkab\u0131",
        instruction: "Sol baca\u011f\u0131 ve burun ucu k\u0131rm\u0131z\u0131, arkas\u0131 beyaz olan Tails ayakkab\u0131s\u0131n\u0131 \u00e7iz.",
        voice: "Sol baca\u011f\u0131n\u0131 ve yar\u0131s\u0131 k\u0131rm\u0131z\u0131 yar\u0131s\u0131 beyaz o \u00fcnl\u00fc Tails ayakkab\u0131s\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 278 365 L 270 430" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="268" cy="435" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 240 442 C 235 470, 265 480, 295 476 C 305 466, 295 442, 268 442 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="268" y1="442" x2="268" y2="478" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Sa\u011f Bacak ve \u0130ki Renkli Ayakkab\u0131",
        instruction: "Sa\u011f baca\u011f\u0131 ve ikinci spor ayakkab\u0131s\u0131n\u0131 ekle.",
        voice: "Sa\u011f baca\u011f\u0131n\u0131 ve di\u011fer ayakkab\u0131s\u0131n\u0131 da \u00e7izelim.",
        svg: `<path d="M 322 365 L 330 430" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="332" cy="435" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 310 442 C 305 470, 335 480, 365 476 C 375 466, 365 442, 335 442 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="335" y1="442" x2="335" y2="478" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Birinci Dev Pofuduk Tilki Kuyru\u011fu (Sol)",
        instruction: "Tails'in arkas\u0131ndan sola do\u011fru a\u00e7\u0131lan kocaman kabar\u0131k kuyru\u011fu yap.",
        voice: "\u0130\u015fte Tails'in en me\u015fhur \u00f6zelli\u011fi! Sola do\u011fru a\u00e7\u0131lan dev gibi kabar\u0131k birinci kuyru\u011funu \u00e7izelim!",
        svg: `<path d="M 268 335 C 180 315, 110 340, 95 400 C 125 430, 195 415, 255 370" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Birinci Kuyru\u011fun Beyaz Ucu",
        instruction: "Sol kuyru\u011fun ucuna zigzagl\u0131 t\u00fcy ayr\u0131m \u00e7izgisini yap.",
        voice: "Kuyru\u011fun ucundaki yumu\u015fak beyaz t\u00fcy desenini zikzakla ay\u0131ral\u0131m.",
        svg: `<path d="M 140 355 L 130 375 L 150 385 L 140 405" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: \u0130kinci Dev Pofuduk Tilki Kuyru\u011fu (Sa\u011f)",
        instruction: "Sa\u011fa do\u011fru u\u00e7u\u015f pervanesi gibi a\u00e7\u0131lan ikinci b\u00fcy\u00fck kuyru\u011fu \u00e7iz ve ucuna zikzak ekle.",
        voice: "\u015eimdi sa\u011f tarafa do\u011fru a\u00e7\u0131lan ikinci muhte\u015fem tilki kuyru\u011funu ve beyaz ucunu \u00e7izelim!",
        svg: `<path d="M 332 335 C 420 315, 490 340, 505 400 C 475 430, 405 415, 345 370" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M 460 355 L 470 375 L 450 385 L 460 405" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Helikopter D\u00f6n\u00fc\u015f R\u00fczgar \u00c7izgileri",
        instruction: "Kuyruklar\u0131n arkas\u0131nda helikopter gibi d\u00f6nd\u00fc\u011f\u00fcn\u00fc g\u00f6steren h\u0131z halkalar\u0131 yap.",
        voice: "Kuyruklar\u0131n\u0131n etraf\u0131na f\u0131r\u0131l f\u0131r\u0131l d\u00f6n\u00fcp u\u00e7tu\u011funu g\u00f6steren r\u00fczgar halkalar\u0131 \u00e7izelim!",
        svg: `<path d="M 80 370 Q 75 400, 95 425 M 520 370 Q 525 400, 505 425" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_tails/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (S\u0131cac\u0131k Tilki Turuncusu!)",
        instruction: "Tebrikler K\u0131van\u00e7! Tails'i s\u0131cak portakal turuncusu, kar beyaz\u0131 kuyruk u\u00e7lar\u0131 ve g\u00f6k mavisi g\u00f6zlerle boya!",
        voice: "Harikas\u0131n K\u0131van\u00e7! U\u00e7an sevimli tilki Tails haz\u0131r! \u015eimdi onu s\u0131cac\u0131k portakal rengi, beyaz kuyruk u\u00e7lar\u0131 ve masmavi g\u00f6zleriyle boya!",
        svg: `
          <defs>
            <linearGradient id="tailsOrange" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fbbf24"/>
              <stop offset="50%" stop-color="#f97316"/>
              <stop offset="100%" stop-color="#ea580c"/>
            </linearGradient>
            <linearGradient id="tailsWhite" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#f1f5f9"/>
            </linearGradient>
          </defs>
          <path d="M 268 335 C 180 315, 110 340, 95 400 C 125 430, 195 415, 255 370 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 140 355 C 110 370, 95 385, 95 400 C 110 415, 125 415, 140 405 L 150 385 L 130 375 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 332 335 C 420 315, 490 340, 505 400 C 475 430, 405 415, 345 370 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 460 355 C 490 370, 505 385, 505 400 C 490 415, 475 415, 460 405 L 450 385 L 470 375 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 80 370 Q 75 400, 95 425 M 520 370 Q 525 400, 505 425" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M 278 365 L 270 430 L 285 430 L 293 365 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 240 442 C 235 470, 265 480, 295 476 C 305 466, 295 442, 268 442 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 268 442 C 295 442, 305 466, 295 476 L 268 476 Z" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="268" cy="435" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 322 365 L 330 430 L 315 430 L 307 365 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 310 442 C 305 470, 335 480, 365 476 C 375 466, 365 442, 335 442 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 335 442 C 365 442, 375 466, 365 476 L 335 476 Z" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="332" cy="435" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 268 275 L 265 360 C 280 370, 320 370, 335 360 L 332 275 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 265 250 C 260 275, 285 285, 300 295 C 315 285, 340 275, 335 250 Z" fill="url(#tailsWhite)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="url(#tailsOrange)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="185" cy="200" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="195" cy="222" rx="14" ry="10" fill="#ffffff" stroke="#0f172a" stroke-width="6" transform="rotate(-30 195 222)"/>
          <path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="url(#tailsOrange)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="415" cy="355" r="19" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="403" cy="336" rx="14" ry="10" fill="#ffffff" stroke="#0f172a" stroke-width="6" transform="rotate(35 403 336)"/>
          <path d="M 248 160 L 210 100 L 275 130 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 245 148 L 224 115 L 265 132 Z" fill="#fef08a" stroke="#0f172a" stroke-width="5"/>
          <path d="M 352 160 L 390 100 L 325 130 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 355 148 L 376 115 L 335 132 Z" fill="#fef08a" stroke="#0f172a" stroke-width="5"/>
          <path d="M 245 170 C 245 120, 355 120, 355 170 L 380 190 L 365 200 L 382 215 L 355 225 C 345 255, 255 255, 245 225 L 218 215 L 235 200 L 220 190 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 285 130 L 295 100 L 305 128 M 305 128 L 320 105 L 320 132 Z" fill="url(#tailsOrange)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 245 225 C 255 255, 345 255, 355 225 C 335 210, 310 210, 300 220 C 290 210, 265 210, 245 225 Z" fill="url(#tailsWhite)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="275" cy="185" rx="16" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <ellipse cx="277" cy="187" rx="11" ry="15" fill="#38bdf8"/>
          <circle cx="278" cy="187" r="7" fill="#0f172a"/>
          <circle cx="274" cy="180" r="4" fill="#ffffff"/>
          <ellipse cx="325" cy="185" rx="16" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <ellipse cx="323" cy="187" rx="11" ry="15" fill="#38bdf8"/>
          <circle cx="322" cy="187" r="7" fill="#0f172a"/>
          <circle cx="318" cy="180" r="4" fill="#ffffff"/>
          <circle cx="300" cy="218" r="6" fill="#0f172a"/>
          <path d="M 285 234 Q 300 245, 315 234" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
`,
        audio: "audio/voices/cirak_sonic_tails/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🦔 KİRPİ SONİC DÜNYASI: GÜÇLÜ KIZIL KNUCKLES
  // =========================================================================
  {
    id: "cirak_sonic_knuckles",
    categoryId: "sonic",
    name: "G\u00fc\u00e7l\u00fc K\u0131z\u0131l Knuckles",
    emoji: "\ud83e\udd4a",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Kaya gibi g\u00fc\u00e7l\u00fc yumruklar\u0131yla Knuckles! K\u0131rm\u0131z\u0131 \u00f6rg\u00fcl\u00fc dikenleri, g\u00f6\u011fs\u00fcndeki beyaz hilal ve boks eldiveni dikenleri!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, k\u0131z\u0131l k\u0131rm\u0131z\u0131, mor, ye\u015fil ve sar\u0131 boyalar",
    welcomeText: "G\u00fcmb\u00fcr g\u00fcmb\u00fcr! Merhaba K\u0131van\u00e7! Dev yumruklu, s\u00fcper g\u00fc\u00e7l\u00fc k\u0131rm\u0131z\u0131 Knuckles'\u0131 \u00e7izmeye haz\u0131r m\u0131s\u0131n? Haydi yumruklar\u0131 haz\u0131rlayal\u0131m!",
    welcomeAudio: "audio/voices/cirak_sonic_knuckles/welcome.mp3",
    colors: ["#dc2626", "#ef4444", "#ffffff", "#22c55e"],
    previewSvg: `
          <defs>
            <linearGradient id="knuxRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="knuxPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
          </defs>
          <path d="M 345 340 L 385 320 L 370 345 L 405 335" fill="none" stroke="#ef4444" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 345 340 L 385 320 L 370 345 L 405 335" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 140 490 L 460 490" stroke="#64748b" stroke-width="10" stroke-linecap="round"/>
          <path d="M 272 365 L 258 430 L 275 430 L 288 365 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 328 365 L 342 430 L 325 430 L 312 365 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 225 442 C 215 478, 250 488, 285 485 C 295 475, 288 442, 260 442 Z" fill="#dc2626" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 225 460 L 290 460 L 288 475 L 222 475 Z" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <path d="M 225 475 L 288 475 L 285 485 L 235 485 Z" fill="#22c55e" stroke="#0f172a" stroke-width="4"/>
          <rect x="238" y="446" width="22" height="12" rx="3" fill="#cbd5e1" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="255" cy="435" rx="20" ry="11" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 340 442 C 312 442, 305 475, 315 485 C 350 488, 385 478, 375 442 Z" fill="#dc2626" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 310 460 L 378 460 L 376 475 L 312 475 Z" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <path d="M 312 475 L 376 475 L 365 485 L 315 485 Z" fill="#22c55e" stroke="#0f172a" stroke-width="4"/>
          <rect x="340" y="446" width="22" height="12" rx="3" fill="#cbd5e1" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="345" cy="435" rx="20" ry="11" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 262 242 L 252 355 C 275 370, 325 370, 348 355 L 338 242 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 272 260 C 285 278, 315 278, 328 260 C 315 290, 285 290, 272 260 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 258 260 L 210 310" stroke="#0f172a" stroke-width="19" stroke-linecap="round"/>
          <path d="M 258 260 L 210 310" stroke="url(#knuxRed)" stroke-width="10" stroke-linecap="round"/>
          <circle cx="185" cy="335" r="28" fill="#ffffff" stroke="#0f172a" stroke-width="9"/>
          <path d="M 165 352 L 152 372 L 175 362 M 185 362 L 185 382 L 198 362" fill="#e2e8f0" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 342 260 L 390 310" stroke="#0f172a" stroke-width="19" stroke-linecap="round"/>
          <path d="M 342 260 L 390 310" stroke="url(#knuxRed)" stroke-width="10" stroke-linecap="round"/>
          <circle cx="415" cy="335" r="28" fill="#ffffff" stroke="#0f172a" stroke-width="9"/>
          <path d="M 435 352 L 448 372 L 425 362 M 415 362 L 415 382 L 402 362" fill="#e2e8f0" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 260 140 C 210 140, 185 180, 190 250 C 205 260, 225 250, 235 225 C 240 255, 235 280, 215 290 C 200 285, 195 265, 205 235 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 340 140 C 390 140, 415 180, 410 250 C 395 260, 375 250, 365 225 C 360 255, 365 280, 385 290 C 400 285, 405 265, 395 235 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 155 C 275 115, 325 115, 345 155 C 360 205, 240 205, 255 155 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 255 186 C 255 155, 292 155, 300 175 C 308 155, 345 155, 345 186 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="278" cy="176" rx="9" ry="13" fill="#a855f7" stroke="#0f172a" stroke-width="4"/>
          <circle cx="278" cy="177" r="5" fill="#0f172a"/>
          <circle cx="276" cy="174" r="2" fill="#ffffff"/>
          <ellipse cx="322" cy="176" rx="9" ry="13" fill="#a855f7" stroke="#0f172a" stroke-width="4"/>
          <circle cx="322" cy="177" r="5" fill="#0f172a"/>
          <circle cx="320" cy="174" r="2" fill="#ffffff"/>
          <path d="M 248 205 C 250 185, 285 190, 300 202 C 315 190, 350 185, 352 205 C 345 245, 255 245, 248 205 Z" fill="url(#knuxPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="300" cy="202" rx="10" ry="7" fill="#0f172a"/>
          <path d="M 282 222 Q 302 228, 320 220" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: G\u00fc\u00e7l\u00fc Ba\u015f ve Al\u0131n \u00c7izgisi",
        instruction: "Sayfan\u0131n \u00fcst ortas\u0131na yuvarlak tepe ve kavisli ka\u015f \u00e7izgisini yap.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na Knuckles'\u0131n g\u00fc\u00e7l\u00fc yuvarlak ba\u015f tepesini \u00e7izelim.",
        svg: `<path d="M 255 155 C 275 115, 325 115, 345 155" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: \u0130ki Yana Sarkan Kal\u0131n K\u0131rm\u0131z\u0131 \u00d6rg\u00fc Dikenler (Sol)",
        instruction: "Ba\u015f\u0131n sol yan\u0131ndan omuzlar\u0131na do\u011fru d\u00f6k\u00fclen iki kal\u0131n sark\u0131k dikeni \u00e7iz.",
        voice: "Knuckles'\u0131n sa\u00e7lar\u0131 \u00f6rg\u00fc gibi a\u015fa\u011f\u0131ya sarkar! Sol tarafa kal\u0131n ve k\u0131vr\u0131ml\u0131 dikenlerini \u00e7izelim.",
        svg: `<path d="M 260 140 C 210 140, 185 180, 190 250 C 205 260, 225 250, 235 225 M 205 235 C 195 265, 200 285, 215 290 C 235 280, 240 255, 248 235" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: \u0130ki Yana Sarkan Kal\u0131n Dikenler (Sa\u011f)",
        instruction: "Sa\u011f tarafa da ayn\u0131 g\u00fc\u00e7te a\u015fa\u011f\u0131ya d\u00f6k\u00fclen iki sark\u0131k diken yap.",
        voice: "Sa\u011f tarafa da ayn\u0131 g\u00fc\u00e7l\u00fc g\u00f6r\u00fcn\u00fcm\u00fc veren d\u00f6k\u00fcml\u00fc k\u0131z\u0131l dikenlerini yapal\u0131m.",
        svg: `<path d="M 340 140 C 390 140, 415 180, 410 250 C 395 260, 375 250, 365 225 M 395 235 C 405 265, 400 285, 385 290 C 365 280, 360 255, 352 235" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Geni\u015f G\u00fcl\u00fcmseyen A\u011f\u0131z B\u00f6lgesi",
        instruction: "Y\u00fcz\u00fcn alt\u0131na geni\u015f, biraz sivri u\u00e7lu \u015feftali y\u00fcz b\u00f6lgesini \u00e7iz.",
        voice: "Y\u00fcz\u00fcn\u00fcn alt k\u0131sm\u0131na geni\u015f ve hafif sivri burunlu a\u011f\u0131z b\u00f6lgesini \u00e7izelim.",
        svg: `<path d="M 248 205 C 250 185, 285 190, 300 202 C 315 190, 350 185, 352 205 C 345 245, 255 245, 248 205 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Siyah \u00dc\u00e7genimsi Burun ve Cesur A\u011f\u0131z",
        instruction: "Ortaya k\u00fc\u00e7\u00fck bir siyah burun ve kararl\u0131 bir g\u00fcl\u00fc\u015f kondur.",
        voice: "Burnunu ve kendine g\u00fcvenen cesur g\u00fcl\u00fcmseme \u00e7izgisini koyal\u0131m.",
        svg: `<ellipse cx="300" cy="202" rx="10" ry="7" fill="#0f172a"/><path d="M 282 222 Q 302 228, 320 220" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Biti\u015fik Ka\u015f Kemeri ve Mor G\u00f6zler",
        instruction: "\u00c7at\u0131k g\u00fc\u00e7l\u00fc g\u00f6z kemerini, g\u00f6z bebeklerini ve beyaz par\u0131lt\u0131lar\u0131 \u00e7iz.",
        voice: "\u015eimdi keskin bak\u0131\u015fl\u0131 g\u00f6z \u00e7er\u00e7evesini, g\u00f6z bebeklerini ve par\u0131lt\u0131lar\u0131n\u0131 ekleyelim.",
        svg: `<path d="M 255 186 C 255 155, 292 155, 300 175 C 308 155, 345 155, 345 186" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><ellipse cx="278" cy="176" rx="9" ry="13" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="278" cy="177" r="5" fill="#0f172a"/><circle cx="276" cy="174" r="2" fill="#ffffff"/><ellipse cx="322" cy="176" rx="9" ry="13" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="322" cy="177" r="5" fill="#0f172a"/><circle cx="320" cy="174" r="2" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: G\u00fc\u00e7l\u00fc G\u00f6vde ve \u00dcnl\u00fc Beyaz Hilal Amblemi",
        instruction: "G\u00f6vdeyi \u00e7izip g\u00f6\u011fs\u00fcn \u00fcst\u00fcne Knuckles'\u0131n \u00fcnl\u00fc beyaz ay hilalini yerle\u015ftir.",
        voice: "G\u00f6vdesini \u00e7izelim ve g\u00f6\u011fs\u00fcne Knuckles'\u0131n me\u015fhur beyaz hilal i\u015faretini kondural\u0131m!",
        svg: `<path d="M 262 242 L 252 355 C 275 370, 325 370, 348 355 L 338 242" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 272 260 C 285 278, 315 278, 328 260 C 315 290, 285 290, 272 260 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: \u0130ki Yana A\u00e7\u0131lan G\u00fc\u00e7l\u00fc Kollar",
        instruction: "Omuzlardan boks eldivenlerine uzanan kasl\u0131 kollar\u0131 \u00e7iz.",
        voice: "Omuzlar\u0131ndan a\u015fa\u011f\u0131 do\u011fru haz\u0131r duru\u015fta uzanan g\u00fc\u00e7l\u00fc kollar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 258 260 L 210 310 M 342 260 L 390 310" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Dev Sol Boks Eldiveni ve \u0130ki Keskin Dikeni",
        instruction: "Sol eline b\u00fcy\u00fck beyaz eldiven ve \u00f6n taraf\u0131na iki sivri diken ekle.",
        voice: "\u0130\u015fte Knuckles'\u0131n \u00fcnl\u00fc dikenli dev eldiveni! Sol eline b\u00fcy\u00fck eldiveni ve iki sivri yumruk dikenini \u00e7izelim!",
        svg: `<circle cx="185" cy="335" r="28" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 165 352 L 152 372 L 175 362 M 185 362 L 185 382 L 198 362" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Dev Sa\u011f Boks Eldiveni ve \u0130ki Keskin Dikeni",
        instruction: "Sa\u011f eline de e\u015fle\u015fen b\u00fcy\u00fck beyaz eldiven ve iki diken yap.",
        voice: "Sa\u011f eline de ayn\u0131 b\u00fcy\u00fckl\u00fckte dev boks eldivenini ve iki sivri dikenini ekleyelim.",
        svg: `<circle cx="415" cy="335" r="28" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 435 352 L 448 372 L 425 362 M 415 362 L 415 382 L 402 362" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Sa\u011flam Bacaklar (Sol ve Sa\u011f)",
        instruction: "Yere sa\u011flam basan iki g\u00fc\u00e7l\u00fc bacak \u00e7iz.",
        voice: "Yere kaya gibi sa\u011flam basan g\u00fc\u00e7l\u00fc bacaklar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 272 365 L 258 430 M 328 365 L 342 430" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Kal\u0131n \u00c7orap Man\u015fetleri",
        instruction: "Her iki baca\u011f\u0131n bile\u011fine beyaz kal\u0131n \u00e7orap halkas\u0131 \u00e7iz.",
        voice: "Ayak bileklerine pofuduk \u00e7orap halkalar\u0131n\u0131 kondural\u0131m.",
        svg: `<ellipse cx="255" cy="435" rx="20" ry="11" fill="none" stroke="#0f172a" stroke-width="7"/><ellipse cx="345" cy="435" rx="20" ry="11" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: \u00dcnl\u00fc Lego Tasar\u0131ml\u0131 Sol Ayakkab\u0131",
        instruction: "Sol aya\u011fa k\u0131rm\u0131z\u0131, ye\u015fil ve sar\u0131 detaylar\u0131 olan b\u00fcy\u00fck Knuckles ayakkab\u0131s\u0131n\u0131 \u00e7iz.",
        voice: "\u015eimdi Knuckles'\u0131n \u00fcnl\u00fc renkli ayakkab\u0131lar\u0131n\u0131 ve \u00fcst\u00fcndeki metal plakas\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 225 442 C 215 478, 250 488, 285 485 C 295 475, 288 442, 260 442 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><rect x="238" y="446" width="22" height="12" rx="3" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Sa\u011f Renkli Ayakkab\u0131 ve Plakas\u0131",
        instruction: "Sa\u011f aya\u011fa da ayn\u0131 sa\u011flam ayakkab\u0131y\u0131 ve \u00fcst plakas\u0131n\u0131 yap.",
        voice: "Sa\u011f taraftaki b\u00fcy\u00fck ayakkab\u0131s\u0131n\u0131 ve metal plakas\u0131n\u0131 da tamamlayal\u0131m.",
        svg: `<path d="M 340 442 C 312 442, 305 475, 315 485 C 350 488, 385 478, 375 442 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><rect x="340" y="446" width="22" height="12" rx="3" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Zikzakl\u0131 Kuyruk (Arkada)",
        instruction: "Sa\u011f taraftan bacaklar\u0131n arkas\u0131nda beliren \u015fim\u015fek zikzakl\u0131 ekidne kuyru\u011funu \u00e7iz.",
        voice: "Arkada kalan zikzakl\u0131 sevimli ekidne kuyru\u011funu da unutmayal\u0131m!",
        svg: `<path d="M 345 340 L 385 320 L 370 345 L 405 335" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: K\u0131r\u0131lan Kaya Par\u00e7alar\u0131",
        instruction: "Ayaklar\u0131n\u0131n yan\u0131na s\u00fcper yumruk g\u00fcc\u00fcyle \u00e7atlam\u0131\u015f zemin kayalar\u0131n\u0131 ekle.",
        voice: "Ayaklar\u0131n\u0131n alt\u0131na Knuckles'\u0131n g\u00fcc\u00fcyle par\u00e7alanan kayalar\u0131 \u00e7izelim!",
        svg: `<path d="M 140 490 L 180 485 L 220 492 M 380 492 L 420 484 L 460 490" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><polygon points="150,475 165,465 175,478" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: B\u00fcy\u00fck Ana Z\u00fcmr\u00fct (Master Emerald) I\u015f\u0131lt\u0131s\u0131",
        instruction: "Arka taraftaki havaya parlayan g\u00fc\u00e7 \u00e7izgilerini ekle.",
        voice: "Yumruklar\u0131n yan\u0131na g\u00fc\u00e7 \u015foku \u00e7izgileri ekleyerek heyecan\u0131 art\u0131ral\u0131m!",
        svg: `<path d="M 135 330 L 115 315 M 130 350 L 105 350 M 465 330 L 485 315 M 470 350 L 495 350" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_knuckles/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (Ate\u015f K\u0131z\u0131l\u0131 Knuckles!)",
        instruction: "Tebrikler K\u0131van\u00e7! Knuckles'\u0131 parlak k\u0131z\u0131l k\u0131rm\u0131z\u0131, ye\u015fil-k\u0131rm\u0131z\u0131 ayakkab\u0131lar\u0131 ve beyaz hilaliyle boya!",
        voice: "\u00c7ok g\u00fc\u00e7l\u00fc oldu K\u0131van\u00e7! Knuckles t\u00fcm g\u00fcc\u00fcyle kar\u015f\u0131m\u0131zda! \u015eimdi onu ate\u015f k\u0131rm\u0131z\u0131s\u0131 t\u00fcyleri ve renkli ayakkab\u0131lar\u0131yla canland\u0131r!",
        svg: `
          <defs>
            <linearGradient id="knuxRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="knuxPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
          </defs>
          <path d="M 345 340 L 385 320 L 370 345 L 405 335" fill="none" stroke="#ef4444" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 345 340 L 385 320 L 370 345 L 405 335" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 140 490 L 460 490" stroke="#64748b" stroke-width="10" stroke-linecap="round"/>
          <path d="M 272 365 L 258 430 L 275 430 L 288 365 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 328 365 L 342 430 L 325 430 L 312 365 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 225 442 C 215 478, 250 488, 285 485 C 295 475, 288 442, 260 442 Z" fill="#dc2626" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 225 460 L 290 460 L 288 475 L 222 475 Z" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <path d="M 225 475 L 288 475 L 285 485 L 235 485 Z" fill="#22c55e" stroke="#0f172a" stroke-width="4"/>
          <rect x="238" y="446" width="22" height="12" rx="3" fill="#cbd5e1" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="255" cy="435" rx="20" ry="11" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 340 442 C 312 442, 305 475, 315 485 C 350 488, 385 478, 375 442 Z" fill="#dc2626" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 310 460 L 378 460 L 376 475 L 312 475 Z" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <path d="M 312 475 L 376 475 L 365 485 L 315 485 Z" fill="#22c55e" stroke="#0f172a" stroke-width="4"/>
          <rect x="340" y="446" width="22" height="12" rx="3" fill="#cbd5e1" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="345" cy="435" rx="20" ry="11" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 262 242 L 252 355 C 275 370, 325 370, 348 355 L 338 242 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 272 260 C 285 278, 315 278, 328 260 C 315 290, 285 290, 272 260 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 258 260 L 210 310" stroke="#0f172a" stroke-width="19" stroke-linecap="round"/>
          <path d="M 258 260 L 210 310" stroke="url(#knuxRed)" stroke-width="10" stroke-linecap="round"/>
          <circle cx="185" cy="335" r="28" fill="#ffffff" stroke="#0f172a" stroke-width="9"/>
          <path d="M 165 352 L 152 372 L 175 362 M 185 362 L 185 382 L 198 362" fill="#e2e8f0" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 342 260 L 390 310" stroke="#0f172a" stroke-width="19" stroke-linecap="round"/>
          <path d="M 342 260 L 390 310" stroke="url(#knuxRed)" stroke-width="10" stroke-linecap="round"/>
          <circle cx="415" cy="335" r="28" fill="#ffffff" stroke="#0f172a" stroke-width="9"/>
          <path d="M 435 352 L 448 372 L 425 362 M 415 362 L 415 382 L 402 362" fill="#e2e8f0" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 260 140 C 210 140, 185 180, 190 250 C 205 260, 225 250, 235 225 C 240 255, 235 280, 215 290 C 200 285, 195 265, 205 235 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 340 140 C 390 140, 415 180, 410 250 C 395 260, 375 250, 365 225 C 360 255, 365 280, 385 290 C 400 285, 405 265, 395 235 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 155 C 275 115, 325 115, 345 155 C 360 205, 240 205, 255 155 Z" fill="url(#knuxRed)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 255 186 C 255 155, 292 155, 300 175 C 308 155, 345 155, 345 186 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="278" cy="176" rx="9" ry="13" fill="#a855f7" stroke="#0f172a" stroke-width="4"/>
          <circle cx="278" cy="177" r="5" fill="#0f172a"/>
          <circle cx="276" cy="174" r="2" fill="#ffffff"/>
          <ellipse cx="322" cy="176" rx="9" ry="13" fill="#a855f7" stroke="#0f172a" stroke-width="4"/>
          <circle cx="322" cy="177" r="5" fill="#0f172a"/>
          <circle cx="320" cy="174" r="2" fill="#ffffff"/>
          <path d="M 248 205 C 250 185, 285 190, 300 202 C 315 190, 350 185, 352 205 C 345 245, 255 245, 248 205 Z" fill="url(#knuxPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="300" cy="202" rx="10" ry="7" fill="#0f172a"/>
          <path d="M 282 222 Q 302 228, 320 220" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
`,
        audio: "audio/voices/cirak_sonic_knuckles/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // 🦔 KİRPİ SONİC DÜNYASI: GÖLGE KIRPI SHADOW
  // =========================================================================
  {
    id: "cirak_sonic_shadow",
    categoryId: "sonic",
    name: "G\u00f6lge Kirpi Shadow",
    emoji: "\ud83c\udf11",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Siyah ve ate\u015f k\u0131rm\u0131z\u0131s\u0131 \u00e7izgileriyle karizmatik kirpi Shadow! Ate\u015f p\u00fcsk\u00fcrten jet kaykay ayakkab\u0131lar\u0131 ve beyaz g\u00f6\u011f\u00fcs t\u00fcy\u00fc!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, koyu siyah, ate\u015f k\u0131rm\u0131z\u0131s\u0131, turuncu ve beyaz boyalar",
    welcomeText: "Karanl\u0131\u011f\u0131n h\u0131z\u0131! Selam K\u0131van\u00e7! Jet ayakkab\u0131lar\u0131yla kayan, siyah ve k\u0131rm\u0131z\u0131 \u00e7izgili efsane Shadow'u \u00e7izmeye haz\u0131r m\u0131s\u0131n?",
    welcomeAudio: "audio/voices/cirak_sonic_shadow/welcome.mp3",
    colors: ["#1e293b", "#ef4444", "#f97316", "#ffffff"],
    previewSvg: `
          <defs>
            <linearGradient id="shadBlack" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="50%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <linearGradient id="shadRed" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="shadFlame" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#f97316"/>
            </linearGradient>
            <linearGradient id="shadPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
          </defs>
          <path d="M 80 520 Q 300 505, 520 520" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
          <circle cx="105" cy="235" r="24" fill="#ef4444" stroke="#0f172a" stroke-width="6" opacity="0.8"/>
          <path d="M 225 485 L 210 510 L 235 495 L 250 515 L 265 485 Z" fill="url(#shadFlame)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 365 480 L 380 510 L 395 490 L 415 510 L 405 478 Z" fill="url(#shadFlame)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 278 362 L 245 425 L 262 428 L 292 362 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 322 362 L 360 422 L 342 425 L 308 362 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 215 440 C 205 475, 240 488, 285 480 C 295 470, 285 440, 250 440 Z" fill="#ffffff" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 215 468 L 285 464 L 285 480 L 225 480 Z" fill="url(#shadRed)" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="242" cy="432" rx="18" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="7"/>
          <path d="M 340 436 C 330 472, 365 484, 415 475 C 425 462, 405 436, 370 436 Z" fill="#ffffff" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 342 464 L 415 462 L 415 475 L 348 475 Z" fill="url(#shadRed)" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="362" cy="428" rx="18" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="7"/>
          <path d="M 268 255 L 260 355 C 280 368, 320 368, 340 355 L 332 255 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 270 245 C 275 268, 285 262, 300 282 C 315 262, 325 268, 330 245 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 265 265 L 205 295" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 265 265 L 205 295" stroke="#334155" stroke-width="9" stroke-linecap="round"/>
          <circle cx="170" cy="312" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <rect x="188" y="288" width="16" height="22" rx="4" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(-25 196 299)"/>
          <path d="M 335 265 L 395 295" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 335 265 L 395 295" stroke="#334155" stroke-width="9" stroke-linecap="round"/>
          <circle cx="430" cy="312" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <rect x="396" y="288" width="16" height="22" rx="4" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(25 404 299)"/>
          <path d="M 248 155 L 225 100 L 275 130 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 352 155 L 375 100 L 325 130 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 242 150 C 185 130, 145 105, 115 110 C 145 140, 180 165, 225 180 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 358 150 C 415 130, 455 105, 485 110 C 455 140, 420 165, 375 180 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 225 185 C 180 190, 145 190, 120 205 C 155 215, 195 215, 235 215 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 375 185 C 420 190, 455 190, 480 205 C 445 215, 405 215, 365 215 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 145 125 C 175 140, 200 155, 235 162 M 455 125 C 425 140, 400 155, 365 162" stroke="#ef4444" stroke-width="10" stroke-linecap="round" fill="none"/>
          <path d="M 240 165 C 260 120, 340 120, 360 165 C 370 215, 230 215, 240 165 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 245 192 C 252 162, 290 162, 300 182 C 310 162, 348 162, 355 192 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="276" cy="182" rx="10" ry="14" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
          <circle cx="276" cy="182" r="6" fill="#0f172a"/>
          <circle cx="274" cy="178" r="2.5" fill="#ffffff"/>
          <ellipse cx="324" cy="182" rx="10" ry="14" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
          <circle cx="324" cy="182" r="6" fill="#0f172a"/>
          <circle cx="322" cy="178" r="2.5" fill="#ffffff"/>
          <path d="M 240 210 C 242 190, 282 190, 300 202 C 318 190, 358 190, 360 210 C 350 250, 250 250, 240 210 Z" fill="url(#shadPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="300" cy="202" rx="10" ry="7" fill="#0f172a"/>
          <path d="M 285 224 Q 305 232, 322 222" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Al\u0131n ve \u0130ki Sivri Kulak",
        instruction: "Ka\u011f\u0131d\u0131n \u00fcst ortas\u0131na ba\u015f\u0131n yuvarlak \u00e7izgisini ve iki sivri kulak \u00fc\u00e7genini \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na Shadow'un g\u00fc\u00e7l\u00fc ba\u015f tepesini ve iki sivri kula\u011f\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 240 165 C 260 120, 340 120, 360 165" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 248 155 L 225 100 L 275 130 M 352 155 L 375 100 L 325 130" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Yukar\u0131 K\u0131vr\u0131lan \u00dcst Dikenler (Sol ve Sa\u011f)",
        instruction: "Shadow'un dikenleri yanlara do\u011fru yukar\u0131 k\u0131vr\u0131l\u0131r! \u0130ki yana a\u00e7\u0131lan \u00fcst dikenleri yap.",
        voice: "Shadow'un haval\u0131 dikenleri kanat gibi yukar\u0131 k\u0131vr\u0131l\u0131r! \u0130ki yan\u0131ndan uzanan \u00fcst dikenleri \u00e7izelim.",
        svg: `<path d="M 242 150 C 185 130, 145 105, 115 110 C 145 140, 180 165, 225 180" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M 358 150 C 415 130, 455 105, 485 110 C 455 140, 420 165, 375 180" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Alt Dikenler ve K\u0131rm\u0131z\u0131 \u015eerit \u00c7izgileri",
        instruction: "Alt dikenleri \u00e7izip her bir dikenin ortas\u0131na Shadow'un \u00fcnl\u00fc k\u0131rm\u0131z\u0131 \u00e7izgi s\u0131n\u0131rlar\u0131n\u0131 ekle.",
        voice: "Alt dikenlerini \u00e7izelim ve i\u00e7lerine Shadow'un o me\u015fhur ate\u015f k\u0131rm\u0131z\u0131s\u0131 \u015feritlerini ay\u0131ral\u0131m.",
        svg: `<path d="M 225 185 C 180 190, 145 190, 120 205 C 155 215, 195 215, 235 215" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 375 185 C 420 190, 455 190, 480 205 C 445 215, 405 215, 365 215" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 145 125 C 175 140, 200 155, 235 162 M 455 125 C 425 140, 400 155, 365 162" stroke="#0f172a" stroke-width="5" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: \u015eeftali Y\u00fcz ve Kararl\u0131 A\u011f\u0131z",
        instruction: "Alt y\u00fcz\u00fc \u00e7izip ortas\u0131na ciddi ve haval\u0131 Shadow g\u00fcl\u00fc\u015f\u00fcn\u00fc kondur.",
        voice: "Alt y\u00fcz kavisini \u00e7izelim ve ortas\u0131na karizmatik Shadow g\u00fcl\u00fcmsemesini kondural\u0131m.",
        svg: `<path d="M 240 210 C 242 190, 282 190, 300 202 C 318 190, 358 190, 360 210 C 350 250, 250 250, 240 210 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><ellipse cx="300" cy="202" rx="10" ry="7" fill="#0f172a"/><path d="M 285 224 Q 305 232, 322 222" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Keskin Ka\u015fl\u0131 K\u0131rm\u0131z\u0131 G\u00f6zler",
        instruction: "Shadow'un \u00fcnl\u00fc k\u0131rm\u0131z\u0131 s\u00fcrmeli g\u00f6z kemerini ve i\u00e7indeki keskin g\u00f6zleri \u00e7iz.",
        voice: "\u015eimdi ka\u015flar\u0131n\u0131 hafif\u00e7e \u00e7atm\u0131\u015f haval\u0131 g\u00f6z \u00e7er\u00e7evesini, g\u00f6z bebeklerini ve beyaz par\u0131lt\u0131lar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 245 192 C 252 162, 290 162, 300 182 C 310 162, 348 162, 355 192" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><ellipse cx="276" cy="182" rx="10" ry="14" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="276" cy="182" r="6" fill="#0f172a"/><circle cx="274" cy="178" r="2.5" fill="#ffffff"/><ellipse cx="324" cy="182" rx="10" ry="14" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="324" cy="182" r="6" fill="#0f172a"/><circle cx="322" cy="178" r="2.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: G\u00f6\u011f\u00fcsteki Kabar\u0131k Beyaz T\u00fcy",
        instruction: "Boynun alt\u0131na 3 u\u00e7lu kar beyaz\u0131 kabar\u0131k g\u00f6\u011f\u00fcs t\u00fcy\u00fcn\u00fc \u00e7iz.",
        voice: "Shadow'un g\u00f6\u011fs\u00fcnde pofuduk beyaz bir t\u00fcy tutam\u0131 bulunur! \u00dc\u00e7 u\u00e7lu kabar\u0131k g\u00f6\u011f\u00fcs t\u00fcy\u00fcn\u00fc \u00e7izelim.",
        svg: `<path d="M 270 245 C 275 268, 285 262, 300 282 C 315 262, 325 268, 330 245" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Siyah G\u00f6vde",
        instruction: "G\u00f6vde \u00e7izgilerini a\u015fa\u011f\u0131ya do\u011fru tamamla.",
        voice: "G\u00f6\u011f\u00fcs t\u00fcy\u00fcn\u00fcn alt\u0131na \u00e7evik siyah g\u00f6vdesini indirelim.",
        svg: `<path d="M 268 255 L 260 355 C 280 368, 320 368, 340 355 L 332 255" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Alt\u0131n Bilezikli Sol Kol (Kaykay Pozu)",
        instruction: "Sola do\u011fru dengeleyen kolunu ve bile\u011findeki kal\u0131n alt\u0131n h\u0131z bilezi\u011fini \u00e7iz.",
        voice: "Sol kolunu kayarken denge kurar gibi a\u00e7al\u0131m ve bile\u011fine kal\u0131n alt\u0131n g\u00fc\u00e7 bilezi\u011fini \u00e7izelim.",
        svg: `<path d="M 265 265 L 205 295" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><rect x="188" y="288" width="16" height="22" rx="4" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-25 196 299)"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Sol Beyaz Yumruk Eldiven",
        instruction: "Sol bilezi\u011fin ucuna k\u0131rm\u0131z\u0131 \u00e7izgili beyaz eldivenini yap.",
        voice: "Bilezi\u011fin ucuna siyah parmak \u00e7izgili beyaz eldivenini kondural\u0131m.",
        svg: `<circle cx="170" cy="312" r="20" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Alt\u0131n Bilezikli Sa\u011f Kol ve Yumruk",
        instruction: "Sa\u011f kolu da g\u00fc\u00e7 toplar gibi b\u00fck\u00fcp alt\u0131n bilezi\u011fini ve eldivenini ekle.",
        voice: "Sa\u011f kolunu da haz\u0131r pozisyonda b\u00fck\u00fcp alt\u0131n g\u00fc\u00e7 bilezi\u011fini ve eldivenini \u00e7izelim.",
        svg: `<path d="M 335 265 L 395 295" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><rect x="396" y="288" width="16" height="22" rx="4" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(25 404 299)"/><circle cx="430" cy="312" r="20" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: H\u0131zla Kayan Sol Bacak",
        instruction: "\u00d6ne do\u011fru uzanm\u0131\u015f kayan baca\u011f\u0131 ve alt\u0131n bilek halkas\u0131n\u0131 \u00e7iz.",
        voice: "Shadow ayakkab\u0131lar\u0131yla roket gibi kayar! \u0130leriye uzanan sol baca\u011f\u0131n\u0131 ve bilek halkas\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 278 362 L 245 425" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="242" cy="432" rx="18" ry="10" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: K\u0131rm\u0131z\u0131-Siyah Jet Ayakkab\u0131s\u0131 (Sol)",
        instruction: "Sol aya\u011fa kal\u0131n tabanl\u0131 haval\u0131 jet kaykay botunu yap.",
        voice: "Sol aya\u011f\u0131na \u00f6zel roket jetli b\u00fcy\u00fck Shadow ayakkab\u0131s\u0131n\u0131 \u00e7izelim!",
        svg: `<path d="M 215 440 C 205 475, 240 488, 285 480 C 295 470, 285 440, 250 440 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="220" y1="468" x2="282" y2="465" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Arkaya Gerilmi\u015f Sa\u011f Bacak",
        instruction: "Arkaya do\u011fru a\u00e7\u0131lan sa\u011f baca\u011f\u0131 ve bilek halkas\u0131n\u0131 \u00e7iz.",
        voice: "Arkadan itme g\u00fcc\u00fc veren sa\u011f baca\u011f\u0131n\u0131 ve bilek halkas\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 322 362 L 360 422" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="362" cy="428" rx="18" ry="10" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Sa\u011f Jet Ayakkab\u0131s\u0131",
        instruction: "Sa\u011f aya\u011fa da y\u00fcksek h\u0131zl\u0131 roket ayakkab\u0131s\u0131n\u0131 ekle.",
        voice: "Sa\u011f aya\u011f\u0131na da ate\u015f p\u00fcsk\u00fcrtmeye haz\u0131r di\u011fer jet ayakkab\u0131s\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 340 436 C 330 472, 365 484, 415 475 C 425 462, 405 436, 370 436 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="342" y1="464" x2="410" y2="462" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Ayakkab\u0131 Alt\u0131 Roket Alevleri",
        instruction: "Her iki ayakkab\u0131n\u0131n alt\u0131ndan f\u0131\u015fk\u0131ran hararetli jet alevlerini \u00e7iz.",
        voice: "\u0130\u015fte en haval\u0131 k\u0131s\u0131m! Jet ayakkab\u0131lar\u0131n\u0131n alt\u0131ndan f\u0131\u015fk\u0131ran s\u00fcper ate\u015f dillerini \u00e7izelim!",
        svg: `<path d="M 225 485 L 210 510 L 235 495 L 250 515 L 265 485 M 365 480 L 380 510 L 395 490 L 415 510 L 405 478" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Kaos Kontrol Enerji Halkas\u0131",
        instruction: "Yana parlayan bir k\u0131rm\u0131z\u0131-alt\u0131n kaos enerji halkas\u0131 ekle.",
        voice: "Yan\u0131na 'Kaos Kontrol' g\u00fcc\u00fcn\u00fc simgeleyen par\u0131lt\u0131l\u0131 h\u0131z \u00e7izgileri ekleyelim.",
        svg: `<circle cx="105" cy="235" r="24" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 105 200 L 105 185 M 105 285 L 105 270 M 70 235 L 55 235 M 155 235 L 140 235" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Kaykay Zemin \u00c7izgisi",
        instruction: "Alevlerin alt\u0131ndan h\u0131zla kayd\u0131\u011f\u0131 g\u00f6lgeli zemin \u00e7izgisini \u00e7ek.",
        voice: "Alt\u0131na roket h\u0131z\u0131yla kayd\u0131\u011f\u0131 pist \u00e7izgisini \u00e7ekelim.",
        svg: `<path d="M 80 520 Q 300 505, 520 520" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_shadow/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (Karanl\u0131k \u015eim\u015fek Shadow!)",
        instruction: "Tebrikler K\u0131van\u00e7! Shadow'u simsiyah k\u00fcrk\u00fc, ate\u015f k\u0131rm\u0131z\u0131s\u0131 \u015feritleri ve jet alevleriyle boya!",
        voice: "Efsane oldu K\u0131van\u00e7! G\u00f6lge kirpi Shadow jet gibi kaymaya haz\u0131r! \u015eimdi onu gece siyah\u0131, ate\u015f k\u0131rm\u0131z\u0131s\u0131 ve alt\u0131n alevlerle renklendir!",
        svg: `
          <defs>
            <linearGradient id="shadBlack" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="50%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <linearGradient id="shadRed" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="shadFlame" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#f97316"/>
            </linearGradient>
            <linearGradient id="shadPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
          </defs>
          <path d="M 80 520 Q 300 505, 520 520" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
          <circle cx="105" cy="235" r="24" fill="#ef4444" stroke="#0f172a" stroke-width="6" opacity="0.8"/>
          <path d="M 225 485 L 210 510 L 235 495 L 250 515 L 265 485 Z" fill="url(#shadFlame)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 365 480 L 380 510 L 395 490 L 415 510 L 405 478 Z" fill="url(#shadFlame)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 278 362 L 245 425 L 262 428 L 292 362 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 322 362 L 360 422 L 342 425 L 308 362 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 215 440 C 205 475, 240 488, 285 480 C 295 470, 285 440, 250 440 Z" fill="#ffffff" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 215 468 L 285 464 L 285 480 L 225 480 Z" fill="url(#shadRed)" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="242" cy="432" rx="18" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="7"/>
          <path d="M 340 436 C 330 472, 365 484, 415 475 C 425 462, 405 436, 370 436 Z" fill="#ffffff" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 342 464 L 415 462 L 415 475 L 348 475 Z" fill="url(#shadRed)" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="362" cy="428" rx="18" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="7"/>
          <path d="M 268 255 L 260 355 C 280 368, 320 368, 340 355 L 332 255 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 270 245 C 275 268, 285 262, 300 282 C 315 262, 325 268, 330 245 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 265 265 L 205 295" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 265 265 L 205 295" stroke="#334155" stroke-width="9" stroke-linecap="round"/>
          <circle cx="170" cy="312" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <rect x="188" y="288" width="16" height="22" rx="4" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(-25 196 299)"/>
          <path d="M 335 265 L 395 295" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 335 265 L 395 295" stroke="#334155" stroke-width="9" stroke-linecap="round"/>
          <circle cx="430" cy="312" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <rect x="396" y="288" width="16" height="22" rx="4" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(25 404 299)"/>
          <path d="M 248 155 L 225 100 L 275 130 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 352 155 L 375 100 L 325 130 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 242 150 C 185 130, 145 105, 115 110 C 145 140, 180 165, 225 180 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 358 150 C 415 130, 455 105, 485 110 C 455 140, 420 165, 375 180 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 225 185 C 180 190, 145 190, 120 205 C 155 215, 195 215, 235 215 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 375 185 C 420 190, 455 190, 480 205 C 445 215, 405 215, 365 215 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 145 125 C 175 140, 200 155, 235 162 M 455 125 C 425 140, 400 155, 365 162" stroke="#ef4444" stroke-width="10" stroke-linecap="round" fill="none"/>
          <path d="M 240 165 C 260 120, 340 120, 360 165 C 370 215, 230 215, 240 165 Z" fill="url(#shadBlack)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 245 192 C 252 162, 290 162, 300 182 C 310 162, 348 162, 355 192 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="276" cy="182" rx="10" ry="14" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
          <circle cx="276" cy="182" r="6" fill="#0f172a"/>
          <circle cx="274" cy="178" r="2.5" fill="#ffffff"/>
          <ellipse cx="324" cy="182" rx="10" ry="14" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
          <circle cx="324" cy="182" r="6" fill="#0f172a"/>
          <circle cx="322" cy="178" r="2.5" fill="#ffffff"/>
          <path d="M 240 210 C 242 190, 282 190, 300 202 C 318 190, 358 190, 360 210 C 350 250, 250 250, 240 210 Z" fill="url(#shadPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="300" cy="202" rx="10" ry="7" fill="#0f172a"/>
          <path d="M 285 224 Q 305 232, 322 222" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
`,
        audio: "audio/voices/cirak_sonic_shadow/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // ⚡ KİRPİ SONİC DÜNYASI: SEVIMLI AMY ROSE
  // =========================================================================
  {
    id: "cirak_sonic_amy",
    categoryId: "sonic",
    name: "Sevimli Amy Rose",
    emoji: "\ud83d\udc96",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Pembe kirpi Amy Rose ve dev Piko-Piko \u00e7ekici! K\u0131rm\u0131z\u0131 tac\u0131, elbisesi ve kirpikli kocaman ye\u015fil g\u00f6zleri!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, pembe, k\u0131rm\u0131z\u0131, sar\u0131 ve ye\u015fil boyalar",
    welcomeText: "Ya\u015fas\u0131n! Selam K\u0131van\u00e7! Sonic'in ne\u015feli ve cesur arkada\u015f\u0131 pembe kirpi Amy Rose burada! Dev Piko \u00e7ekiciyle birlikte harika bir Amy \u00e7izelim!",
    welcomeAudio: "audio/voices/cirak_sonic_amy/welcome.mp3",
    colors: ["#f472b6", "#ef4444", "#facc15", "#22c55e"],
    previewSvg: `
          <defs>
            <linearGradient id="amyPink" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f9a8d4"/>
              <stop offset="50%" stop-color="#f472b6"/>
              <stop offset="100%" stop-color="#db2777"/>
            </linearGradient>
            <linearGradient id="amyRed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
            <linearGradient id="amyPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
          </defs>
          <path d="M 190 492 Q 310 482, 420 492" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
          <path d="M 460 155 C 455 142, 438 142, 438 158 C 438 172, 460 185, 460 185 C 460 185, 482 172, 482 158 C 482 142, 465 142, 460 155 Z" fill="#f43f5e" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 185 95 L 185 112 M 177 104 L 193 104" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <line x1="158" y1="365" x2="178" y2="175" stroke="#ca8a04" stroke-width="11" stroke-linecap="round"/>
          <line x1="158" y1="365" x2="178" y2="175" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
          <g transform="rotate(6 178 151)">
            <rect x="115" y="122" width="126" height="58" rx="16" fill="#ef4444" stroke="#0f172a" stroke-width="9"/>
            <rect x="142" y="122" width="72" height="58" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
            <rect x="165" y="122" width="26" height="58" fill="#22c55e" stroke="#0f172a" stroke-width="4"/>
          </g>
          <path d="M 270 385 L 265 435 L 278 435 L 284 385 Z" fill="url(#amyPeach)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 235 446 C 232 476, 258 485, 295 480 C 304 472, 294 446, 266 446 Z" fill="url(#amyRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <line x1="264" y1="446" x2="264" y2="482" stroke="#ffffff" stroke-width="7"/>
          <ellipse cx="264" cy="440" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 310 385 L 328 430 L 340 426 L 322 383 Z" fill="url(#amyPeach)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 315 440 C 312 470, 345 482, 382 474 C 390 462, 375 438, 340 438 Z" fill="url(#amyRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <line x1="342" y1="439" x2="348" y2="476" stroke="#ffffff" stroke-width="7"/>
          <ellipse cx="330" cy="435" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 256 268 C 228 282, 205 292, 185 282" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 256 268 C 228 282, 205 292, 185 282" fill="none" stroke="url(#amyPeach)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="182" cy="282" rx="9" ry="14" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(20 182 282)"/>
          <circle cx="168" cy="278" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 322 268 C 355 270, 382 252, 396 232" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 322 268 C 355 270, 382 252, 396 232" fill="none" stroke="url(#amyPeach)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="400" cy="226" rx="13" ry="9" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(-35 400 226)"/>
          <circle cx="412" cy="208" r="19" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 262 256 L 254 318 L 228 378 C 265 392, 318 392, 352 378 L 324 318 L 316 256 Z" fill="url(#amyRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 234 364 C 268 378, 315 378, 346 364 L 352 378 C 318 392, 265 392, 228 378 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 262 256 Q 289 272, 316 256 Z" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 300 124 L 354 82 L 338 150 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 226 176 C 185 190, 175 235, 198 258 C 215 262, 228 248, 232 232 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 192 228 C 175 245, 185 272, 208 272 C 222 268, 230 255, 235 245 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 344 176 C 375 192, 380 232, 358 252 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 225 180 C 230 115, 340 115, 345 180 C 350 220, 230 225, 225 180 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 234 150 L 214 82 L 272 124 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 238 138 L 226 102 L 260 124 Z" fill="url(#amyPeach)" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 232 152 Q 285 130, 338 152 L 342 168 Q 285 146, 228 168 Z" fill="url(#amyRed)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 244 208 C 242 162, 284 156, 294 186 C 306 156, 344 162, 342 208 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="278" cy="190" rx="11" ry="17" fill="#22c55e" stroke="#0f172a" stroke-width="4"/>
          <circle cx="280" cy="190" r="7" fill="#0f172a"/>
          <circle cx="276" cy="184" r="3.5" fill="#ffffff"/>
          <ellipse cx="320" cy="190" rx="10" ry="16" fill="#22c55e" stroke="#0f172a" stroke-width="4"/>
          <circle cx="322" cy="190" r="6.5" fill="#0f172a"/>
          <circle cx="318" cy="184" r="3" fill="#ffffff"/>
          <path d="M 245 178 L 232 170 M 242 188 L 229 184 M 340 178 L 352 170 M 342 188 L 354 184" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>
          <path d="M 268 158 C 268 175, 282 182, 290 172 C 296 184, 312 180, 310 160 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 232 225 C 232 198, 272 200, 292 214 C 312 200, 352 198, 350 226 C 340 260, 244 260, 232 225 Z" fill="url(#amyPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="322" cy="212" rx="9" ry="6.5" fill="#0f172a"/>
          <path d="M 278 232 C 296 248, 322 246, 330 230" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Yuvarlak Ba\u015f ve K\u0131rm\u0131z\u0131 Ta\u00e7 \u00c7izgisi",
        instruction: "Ka\u011f\u0131d\u0131n \u00fcst ortas\u0131na Amy'nin yuvarlak ba\u015f tepesini ve ba\u015f\u0131ndaki \u015f\u0131k k\u0131rm\u0131z\u0131 tac\u0131 \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na Amy Rose'un yuvarlak aln\u0131n\u0131 ve sa\u00e7\u0131ndaki k\u0131rm\u0131z\u0131 ta\u00e7 band\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 225 180 C 230 115, 340 115, 345 180" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 232 152 Q 285 130, 338 152 M 228 168 Q 285 146, 342 168" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: \u0130ki Tatl\u0131 Sivri Kulak",
        instruction: "Tac\u0131n \u00fcst\u00fcnden iki yana \u00e7\u0131kan sivri pembe kirpi kulaklar\u0131n\u0131 yap.",
        voice: "Tac\u0131n \u00fcst k\u0131sm\u0131na iki sevimli \u00fc\u00e7gen kirpi kula\u011f\u0131 ve i\u00e7 \u00fc\u00e7genlerini \u00e7izelim.",
        svg: `<path d="M 234 150 L 214 82 L 272 124 M 300 124 L 354 82 L 338 150" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 238 138 L 226 102 L 260 124" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: K\u00fct Pembe Diken Sa\u00e7lar\u0131 (Sol ve Sa\u011f)",
        instruction: "Amy'nin a\u015fa\u011f\u0131 do\u011fru k\u0131vr\u0131lan tatl\u0131 pembe sa\u00e7 buklelerini iki yana \u00e7iz.",
        voice: "Amy'nin yanaklar\u0131n\u0131n iki yan\u0131ndan a\u015fa\u011f\u0131ya yumu\u015fak\u00e7a k\u0131vr\u0131lan pembe sa\u00e7 buklelerini \u00e7izelim.",
        svg: `<path d="M 226 176 C 185 190, 175 235, 198 258 C 215 262, 228 248, 232 232" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M 192 228 C 175 245, 185 272, 208 272 C 222 268, 230 255, 235 245" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 344 176 C 375 192, 380 232, 358 252" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Sevimli Al\u0131n K\u00e2k\u00fclleri",
        instruction: "Aln\u0131n\u0131n tam ortas\u0131ndan g\u00f6zlerinin \u00fcst\u00fcne sarkan iki \u015firin pembe tutam\u0131 ekle.",
        voice: "Aln\u0131n\u0131n ortas\u0131ndan g\u00f6zlerinin \u00fcst\u00fcne uzanan iki tatl\u0131 sa\u00e7 tutam\u0131n\u0131 ekleyelim.",
        svg: `<path d="M 268 158 C 268 175, 282 182, 290 172 C 296 184, 312 180, 310 160" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: G\u00fclen A\u011f\u0131z B\u00f6lgesi ve K\u00fc\u00e7\u00fck Burun",
        instruction: "Y\u00fcz\u00fcn alt\u0131na yumu\u015fak a\u011f\u0131z yanak b\u00f6lgesini, minik siyah burnu ve ne\u015feli g\u00fcl\u00fc\u015f\u00fc \u00e7iz.",
        voice: "Y\u00fcz\u00fcn\u00fcn alt\u0131na g\u00fcler y\u00fczl\u00fc yanak kavisi, minik siyah burun ve mutlu g\u00fcl\u00fcmsemesini \u00e7izelim.",
        svg: `<path d="M 232 225 C 232 198, 272 200, 292 214 C 312 200, 352 198, 350 226 C 340 260, 244 260, 232 225 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><ellipse cx="322" cy="212" rx="9" ry="6.5" fill="#0f172a"/><path d="M 278 232 C 296 248, 322 246, 330 230" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: B\u00fcy\u00fck Biti\u015fik G\u00f6z Kemeri",
        instruction: "G\u00f6zlerin d\u0131\u015f \u00e7er\u00e7evesini \u00e7izin ve d\u0131\u015f k\u00f6\u015felere iki\u015fer tatl\u0131 kirpik ekleyin.",
        voice: "Amy'nin kocaman biti\u015fik g\u00f6z kemerini \u00e7izelim ve yanlar\u0131na iki\u015fer zarif kirpik ekleyelim!",
        svg: `<path d="M 244 208 C 242 162, 284 156, 294 186 C 306 156, 344 162, 342 208" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><path d="M 245 178 L 232 170 M 242 188 L 229 184 M 340 178 L 352 170 M 342 188 L 354 184" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Parlak Ye\u015fil G\u00f6zler ve I\u015f\u0131lt\u0131lar",
        instruction: "G\u00f6zlerin i\u00e7ine uzun ye\u015fil irisleri, siyah g\u00f6zbebeklerini ve parlak beyaz \u0131\u015f\u0131klar\u0131 koy.",
        voice: "\u0130\u00e7ine parlak ye\u015fil g\u00f6z bebeklerini ve \u0131\u015f\u0131l \u0131\u015f\u0131l beyaz par\u0131lt\u0131lar\u0131 kondural\u0131m.",
        svg: `<ellipse cx="278" cy="190" rx="11" ry="17" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="280" cy="190" r="7" fill="#0f172a"/><circle cx="276" cy="184" r="3.5" fill="#ffffff"/><ellipse cx="320" cy="190" rx="10" ry="16" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="322" cy="190" r="6.5" fill="#0f172a"/><circle cx="318" cy="184" r="3" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: K\u0131rm\u0131z\u0131 Kolsuz Elbise \u00dcst\u00fc ve Yaka",
        instruction: "\u00c7enenin alt\u0131na beyaz yakal\u0131 sevimli k\u0131rm\u0131z\u0131 elbise g\u00f6vdesini \u00e7iz.",
        voice: "\u015eimdi \u00e7enesinin alt\u0131na beyaz yakal\u0131 \u00e7ok \u015f\u0131k k\u0131rm\u0131z\u0131 elbisesini \u00e7izmeye ba\u015flayal\u0131m.",
        svg: `<path d="M 262 256 L 254 318 L 324 318 L 316 256 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 262 256 Q 289 272, 316 256" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Kabar\u0131k Klo\u015f Etek ve Beyaz \u015eerit",
        instruction: "Belden a\u015fa\u011f\u0131ya do\u011fru \u00e7an gibi a\u00e7\u0131lan ete\u011fi ve alt\u0131ndaki beyaz etek kenar\u0131n\u0131 yap.",
        voice: "Belinden a\u015fa\u011f\u0131 do\u011fru zarif\u00e7e a\u00e7\u0131lan ete\u011fini ve alt\u0131ndaki beyaz \u015feridi \u00e7izelim.",
        svg: `<path d="M 254 318 L 228 378 C 265 392, 318 392, 352 378 L 324 318" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 234 364 C 268 378, 315 378, 346 364" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Sol Kol ve Alt\u0131n Bilezik",
        instruction: "Sol tarafa do\u011fru \u00e7ekici tutmaya uzanan kolu ve alt\u0131n bilezi\u011fi yap.",
        voice: "Sol kolunu Piko \u00e7ekicini tutmak \u00fczere yana uzatal\u0131m ve alt\u0131n bilezi\u011fini \u00e7izelim.",
        svg: `<path d="M 256 268 C 228 282, 205 292, 185 282" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="182" cy="282" rx="9" ry="14" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(20 182 282)"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Sol Eldiven ve B\u00fcy\u00fck Piko-Piko \u00c7ekici Sap\u0131",
        instruction: "Sola eldiveni \u00e7iz ve i\u00e7inden yukar\u0131 uzanan uzun \u00e7eki\u00e7 sap\u0131n\u0131 \u00e7ek.",
        voice: "Eline beyaz eldivenini ve elinde tuttu\u011fu dev Piko-Piko \u00e7ekicinin uzun sap\u0131n\u0131 \u00e7izelim!",
        svg: `<circle cx="168" cy="278" r="18" fill="none" stroke="#0f172a" stroke-width="8"/><line x1="158" y1="365" x2="178" y2="175" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Dev Piko-Piko \u00c7eki\u00e7 Ba\u015fl\u0131\u011f\u0131!",
        instruction: "Sap\u0131n tepesine b\u00fcy\u00fck, silindir \u015feklinde k\u0131rm\u0131z\u0131-sar\u0131 dev oyuncak \u00e7ekici \u00e7iz.",
        voice: "Sap\u0131n tepesine Amy'nin \u00fcnl\u00fc k\u0131rm\u0131z\u0131 ve sar\u0131 kocaman Piko-Piko \u00e7eki\u00e7 ba\u015fl\u0131\u011f\u0131n\u0131 \u00e7izelim!",
        svg: `<rect x="115" y="122" width="126" height="58" rx="16" fill="none" stroke="#0f172a" stroke-width="9" transform="rotate(6 178 151)"/><line x1="145" y1="120" x2="140" y2="178" stroke="#0f172a" stroke-width="6"/><line x1="210" y1="126" x2="205" y2="184" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Sa\u011f El Sallayan Kol ve Eldiven",
        instruction: "Sa\u011f tarafa do\u011fru ne\u015feyle el sallayan kolunu, alt\u0131n bilezi\u011fini ve eldivenini ekle.",
        voice: "Sa\u011f kolunu da bize ne\u015feyle el sallarken \u00e7izelim ve alt\u0131n bilezi\u011fini koyal\u0131m.",
        svg: `<path d="M 322 268 C 355 270, 382 252, 396 232" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="400" cy="226" rx="13" ry="9" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-35 400 226)"/><circle cx="412" cy="208" r="19" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Sol Bacak ve \u015e\u0131k K\u0131rm\u0131z\u0131 \u00c7izme",
        instruction: "Ete\u011fin alt\u0131ndan inen sol baca\u011f\u0131, beyaz \u00e7orap bile\u011fini ve k\u0131rm\u0131z\u0131-beyaz \u00e7izmeyi \u00e7iz.",
        voice: "Ete\u011fin alt\u0131ndan inen zarif sol baca\u011f\u0131n\u0131 ve ortas\u0131nda beyaz \u015feridi olan k\u0131rm\u0131z\u0131 \u00e7izmesini yapal\u0131m.",
        svg: `<path d="M 270 385 L 265 435" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="264" cy="440" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 235 446 C 232 476, 258 485, 295 480 C 304 472, 294 446, 266 446 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="264" y1="446" x2="264" y2="482" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Ne\u015feli Sa\u011f Bacak ve K\u0131rm\u0131z\u0131 \u00c7izme",
        instruction: "Sa\u011fa do\u011fru hafif\u00e7e kald\u0131r\u0131lm\u0131\u015f ne\u015feli di\u011fer baca\u011f\u0131 ve \u00e7izmeyi yap.",
        voice: "Sa\u011f baca\u011f\u0131n\u0131 da keyifle ad\u0131m atar gibi \u00e7izelim ve di\u011fer \u00e7izmesini ekleyelim.",
        svg: `<path d="M 310 385 L 328 430" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="330" cy="435" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 315 440 C 312 470, 345 482, 382 474 C 390 462, 375 438, 340 438 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="342" y1="439" x2="348" y2="476" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Sevimli Kalp S\u00fcslemeleri",
        instruction: "Havaya iki tane tatl\u0131 kalp simgesi \u00e7izerek Amy'nin sevgisini g\u00f6ster.",
        voice: "Sa\u011f tarafa Amy'nin tatl\u0131l\u0131\u011f\u0131n\u0131 g\u00f6steren iki sevimli kalp simgesi kondural\u0131m!",
        svg: `<path d="M 460 155 C 455 142, 438 142, 438 158 C 438 172, 460 185, 460 185 C 460 185, 482 172, 482 158 C 482 142, 465 142, 460 155 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: \u00c7eki\u00e7 I\u015f\u0131lt\u0131lar\u0131 ve Zemin \u00c7izgisi",
        instruction: "\u00c7ekicin etraf\u0131na par\u0131lt\u0131 y\u0131ld\u0131zlar\u0131 ve ayaklar\u0131n alt\u0131na zemin g\u00f6lgesi \u00e7ek.",
        voice: "\u00c7ekicin tepesine y\u0131ld\u0131z par\u0131lt\u0131lar\u0131 ve ayaklar\u0131n\u0131n alt\u0131na yumu\u015fak zemin \u00e7izgisi ekleyelim.",
        svg: `<path d="M 185 95 L 185 112 M 177 104 L 193 104" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><path d="M 190 492 Q 310 482, 420 492" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_amy/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (\u015eeker Pembe Amy Rose!)",
        instruction: "Tebrikler K\u0131van\u00e7! Amy Rose'u \u015feker pembesi, k\u0131rm\u0131z\u0131 elbisesi ve sar\u0131-k\u0131rm\u0131z\u0131 Piko \u00e7ekiciyle boya!",
        voice: "Harikas\u0131n K\u0131van\u00e7! Amy Rose ve dev Piko \u00e7ekici muhte\u015fem oldu! \u015eimdi onu \u015feker pembesi, parlak k\u0131rm\u0131z\u0131 ve alt\u0131n sar\u0131s\u0131 boyalar\u0131nla renklendir!",
        svg: `
          <defs>
            <linearGradient id="amyPink" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f9a8d4"/>
              <stop offset="50%" stop-color="#f472b6"/>
              <stop offset="100%" stop-color="#db2777"/>
            </linearGradient>
            <linearGradient id="amyRed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
            <linearGradient id="amyPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
          </defs>
          <path d="M 190 492 Q 310 482, 420 492" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
          <path d="M 460 155 C 455 142, 438 142, 438 158 C 438 172, 460 185, 460 185 C 460 185, 482 172, 482 158 C 482 142, 465 142, 460 155 Z" fill="#f43f5e" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 185 95 L 185 112 M 177 104 L 193 104" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <line x1="158" y1="365" x2="178" y2="175" stroke="#ca8a04" stroke-width="11" stroke-linecap="round"/>
          <line x1="158" y1="365" x2="178" y2="175" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
          <g transform="rotate(6 178 151)">
            <rect x="115" y="122" width="126" height="58" rx="16" fill="#ef4444" stroke="#0f172a" stroke-width="9"/>
            <rect x="142" y="122" width="72" height="58" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
            <rect x="165" y="122" width="26" height="58" fill="#22c55e" stroke="#0f172a" stroke-width="4"/>
          </g>
          <path d="M 270 385 L 265 435 L 278 435 L 284 385 Z" fill="url(#amyPeach)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 235 446 C 232 476, 258 485, 295 480 C 304 472, 294 446, 266 446 Z" fill="url(#amyRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <line x1="264" y1="446" x2="264" y2="482" stroke="#ffffff" stroke-width="7"/>
          <ellipse cx="264" cy="440" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 310 385 L 328 430 L 340 426 L 322 383 Z" fill="url(#amyPeach)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 315 440 C 312 470, 345 482, 382 474 C 390 462, 375 438, 340 438 Z" fill="url(#amyRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <line x1="342" y1="439" x2="348" y2="476" stroke="#ffffff" stroke-width="7"/>
          <ellipse cx="330" cy="435" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 256 268 C 228 282, 205 292, 185 282" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 256 268 C 228 282, 205 292, 185 282" fill="none" stroke="url(#amyPeach)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="182" cy="282" rx="9" ry="14" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(20 182 282)"/>
          <circle cx="168" cy="278" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 322 268 C 355 270, 382 252, 396 232" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 322 268 C 355 270, 382 252, 396 232" fill="none" stroke="url(#amyPeach)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="400" cy="226" rx="13" ry="9" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(-35 400 226)"/>
          <circle cx="412" cy="208" r="19" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 262 256 L 254 318 L 228 378 C 265 392, 318 392, 352 378 L 324 318 L 316 256 Z" fill="url(#amyRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 234 364 C 268 378, 315 378, 346 364 L 352 378 C 318 392, 265 392, 228 378 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 262 256 Q 289 272, 316 256 Z" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 300 124 L 354 82 L 338 150 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 226 176 C 185 190, 175 235, 198 258 C 215 262, 228 248, 232 232 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 192 228 C 175 245, 185 272, 208 272 C 222 268, 230 255, 235 245 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 344 176 C 375 192, 380 232, 358 252 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 225 180 C 230 115, 340 115, 345 180 C 350 220, 230 225, 225 180 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 234 150 L 214 82 L 272 124 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 238 138 L 226 102 L 260 124 Z" fill="url(#amyPeach)" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 232 152 Q 285 130, 338 152 L 342 168 Q 285 146, 228 168 Z" fill="url(#amyRed)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 244 208 C 242 162, 284 156, 294 186 C 306 156, 344 162, 342 208 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="278" cy="190" rx="11" ry="17" fill="#22c55e" stroke="#0f172a" stroke-width="4"/>
          <circle cx="280" cy="190" r="7" fill="#0f172a"/>
          <circle cx="276" cy="184" r="3.5" fill="#ffffff"/>
          <ellipse cx="320" cy="190" rx="10" ry="16" fill="#22c55e" stroke="#0f172a" stroke-width="4"/>
          <circle cx="322" cy="190" r="6.5" fill="#0f172a"/>
          <circle cx="318" cy="184" r="3" fill="#ffffff"/>
          <path d="M 245 178 L 232 170 M 242 188 L 229 184 M 340 178 L 352 170 M 342 188 L 354 184" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>
          <path d="M 268 158 C 268 175, 282 182, 290 172 C 296 184, 312 180, 310 160 Z" fill="url(#amyPink)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 232 225 C 232 198, 272 200, 292 214 C 312 200, 352 198, 350 226 C 340 260, 244 260, 232 225 Z" fill="url(#amyPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="322" cy="212" rx="9" ry="6.5" fill="#0f172a"/>
          <path d="M 278 232 C 296 248, 322 246, 330 230" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>
`,
        audio: "audio/voices/cirak_sonic_amy/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // ⚡ KİRPİ SONİC DÜNYASI: ROBOT KIRPI METAL SONIC
  // =========================================================================
  {
    id: "cirak_sonic_metal",
    categoryId: "sonic",
    name: "Robot Kirpi Metal Sonic",
    emoji: "\ud83e\udd16",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Dr. Eggman'\u0131n yapt\u0131\u011f\u0131 s\u00fcper h\u0131zl\u0131 mavi robot kirpi Metal Sonic! Parlayan k\u0131rm\u0131z\u0131 dijital g\u00f6zler ve g\u00f6\u011f\u00fcs roket t\u00fcrbini!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, metalik lacivert, gri, k\u0131rm\u0131z\u0131 ve sar\u0131 boyalar",
    welcomeText: "Bip b\u0131p! Merhaba K\u0131van\u00e7! Sonic kadar h\u0131zl\u0131 u\u00e7abilen haval\u0131 robot kirpi Metal Sonic'i \u00e7izmeye haz\u0131r m\u0131s\u0131n? Haydi robot z\u0131rh\u0131n\u0131 \u00e7izelim!",
    welcomeAudio: "audio/voices/cirak_sonic_metal/welcome.mp3",
    colors: ["#1e40af", "#64748b", "#ef4444", "#facc15"],
    previewSvg: `
          <defs>
            <linearGradient id="metalBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="50%" stop-color="#1d4ed8"/>
              <stop offset="100%" stop-color="#1e3a8a"/>
            </linearGradient>
            <linearGradient id="metalSilver" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f1f5f9"/>
              <stop offset="50%" stop-color="#94a3b8"/>
              <stop offset="100%" stop-color="#475569"/>
            </linearGradient>
          </defs>
          <line x1="75" y1="295" x2="150" y2="295" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
          <line x1="85" y1="340" x2="170" y2="340" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
          <path d="M 470 155 L 455 175 L 470 175 L 452 198 M 115 390 L 132 375 L 122 372 L 140 355" stroke="#facc15" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <path d="M 210 295 L 170 305 L 195 312 L 175 322 L 212 318 Z" fill="#f97316" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 248 278 L 210 290 L 215 322 L 246 318 Z" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 268 368 L 245 435 L 260 438 L 282 368 Z" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 225 442 C 222 475, 252 485, 302 478 C 312 468, 304 444, 275 440 Z" fill="#dc2626" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="248" y1="442" x2="275" y2="478" stroke="#e2e8f0" stroke-width="7"/>
          <path d="M 298 368 L 325 430 L 338 426 L 312 366 Z" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 315 436 C 312 470, 345 482, 412 475 C 425 466, 418 442, 385 436 C 362 432, 335 432, 315 436 Z" fill="#dc2626" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="342" y1="435" x2="378" y2="474" stroke="#e2e8f0" stroke-width="7"/>
          <path d="M 255 264 L 245 352 C 275 372, 315 372, 325 352 L 320 264 Z" fill="url(#metalBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="288" cy="312" r="24" fill="#1e293b" stroke="#0f172a" stroke-width="8"/>
          <circle cx="288" cy="312" r="14" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <circle cx="288" cy="312" r="6" fill="#ef4444"/>
          <path d="M 252 278 C 228 292, 222 325, 240 342" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 252 278 C 228 292, 222 325, 240 342" fill="none" stroke="url(#metalSilver)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="255" cy="272" rx="14" ry="10" fill="#dc2626" stroke="#0f172a" stroke-width="6"/>
          <circle cx="235" cy="355" r="17" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 222 365 L 210 382 M 234 370 L 228 388 M 246 368 L 246 385" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>
          <path d="M 320 278 C 352 280, 385 275, 412 268" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 320 278 C 352 280, 385 275, 412 268" fill="none" stroke="url(#metalSilver)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="320" cy="272" rx="14" ry="10" fill="#dc2626" stroke="#0f172a" stroke-width="6"/>
          <circle cx="426" cy="268" r="17" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 440 258 L 462 252 M 443 268 L 466 268 M 440 278 L 460 284" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>
          <path d="M 310 124 L 342 88 L 336 142 Z" fill="url(#metalBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 240 135 C 290 112, 352 135, 355 192 L 328 265 L 225 245 L 135 268 L 192 218 L 105 222 L 195 178 L 118 158 Z" fill="url(#metalBlue)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 242 142 L 228 86 L 278 124 Z" fill="url(#metalBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 285 124 L 305 162 L 320 128 Z" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 245 208 C 245 160, 348 160, 348 208 Z" fill="#0f172a" stroke="#0f172a" stroke-width="7"/>
          <polygon points="274,198 296,178 294,202" fill="#ef4444" stroke="#fef08a" stroke-width="2" stroke-linejoin="round"/>
          <polygon points="318,198 338,178 335,202" fill="#ef4444" stroke="#fef08a" stroke-width="2" stroke-linejoin="round"/>
          <path d="M 225 242 L 245 208 L 355 210 L 368 228 L 328 265 L 250 264 Z" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 355 210 L 378 214 L 365 228 Z" fill="#1e293b" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Metal Kask Aln\u0131 ve Al\u0131n Fin \u015eeridi",
        instruction: "Sayfan\u0131n \u00fcst ortas\u0131na keskin robot kask aln\u0131n\u0131 ve ortadaki metal al\u0131n \u015feridini \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na Metal Sonic'in keskin robot kask\u0131n\u0131 ve ortas\u0131ndaki al\u0131n \u015feridini \u00e7izelim.",
        svg: `<path d="M 240 135 C 290 112, 352 135, 355 192" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 285 124 L 305 162 L 320 128" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Sivri Metal Robot Kulaklar\u0131",
        instruction: "Kafan\u0131n \u00fcst\u00fcne \u00fc\u00e7gen \u015feklinde iki keskin metal robot kula\u011f\u0131 ekle.",
        voice: "\u015eimdi kask\u0131n tepesine sivri ve k\u00f6\u015feli iki metal robot kula\u011f\u0131 \u00e7izelim.",
        svg: `<path d="M 242 142 L 228 86 L 278 124 M 310 124 L 342 88 L 336 142" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Arkaya Uzanan Keskin Metal Dikenler",
        instruction: "Ba\u015f\u0131n arkas\u0131ndan r\u00fczgar\u0131 yaran 3 tane keskin z\u0131rhl\u0131 robot dikeni \u00e7iz.",
        voice: "Ba\u015f\u0131n\u0131n arkas\u0131ndan geriye do\u011fru b\u0131\u00e7ak gibi uzanan \u00fc\u00e7 keskin metal dikenini \u00e7izelim.",
        svg: `<path d="M 240 135 L 118 158 L 195 178 L 105 222 L 192 218 L 135 268 L 225 245" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Metalik G\u00fcm\u00fc\u015f Y\u00fcz Maskesi ve Burun",
        instruction: "Alt y\u00fcz\u00fc kapatan g\u00fcm\u00fc\u015f \u00e7ene plakas\u0131n\u0131 ve sivri robot burnunu yap.",
        voice: "Alt y\u00fcz\u00fc kapatan parlak g\u00fcm\u00fc\u015f metal y\u00fcz plakas\u0131n\u0131 ve sivri robot burnunu \u00e7izelim.",
        svg: `<path d="M 225 242 L 245 208 L 355 210 L 368 228 L 328 265 L 250 264 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 355 210 L 378 214 L 365 228" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Siyah Ekran Viz\u00f6r\u00fc ve Parlayan K\u0131rm\u0131z\u0131 G\u00f6zler",
        instruction: "G\u00f6z bo\u015flu\u011funun i\u00e7ine k\u0131z\u0131l LED \u0131\u015f\u0131k sa\u00e7an iki robot g\u00f6z\u00fcn\u00fc ekle.",
        voice: "Kask\u0131n i\u00e7ine siyah ekran\u0131 ve \u00fczerinde yanan parlak k\u0131rm\u0131z\u0131 dijital robot g\u00f6zlerini yapal\u0131m!",
        svg: `<path d="M 245 208 C 245 160, 348 160, 348 208" fill="none" stroke="#0f172a" stroke-width="8"/><polygon points="274,198 296,178 294,202" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/><polygon points="318,198 338,178 335,202" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Yanak Yan\u0131ndaki Metal Kanat\u00e7\u0131klar",
        instruction: "Yana\u011f\u0131n\u0131n kenar\u0131na aerodinamik metal kanat\u00e7\u0131k \u00e7izgisi \u00e7ek.",
        voice: "Yana\u011f\u0131n\u0131n yan\u0131na h\u0131zl\u0131 u\u00e7u\u015f i\u00e7in metal yanak kanat\u00e7\u0131\u011f\u0131n\u0131 \u00e7izelim.",
        svg: `<polygon points="220,218 250,215 245,235 215,245" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Z\u0131rhl\u0131 Robot G\u00f6vdesi",
        instruction: "Ba\u015f\u0131n alt\u0131na daralan g\u00fc\u00e7l\u00fc robot z\u0131rh g\u00f6vdesini \u00e7iz.",
        voice: "Ba\u015f\u0131n alt\u0131na daralan sa\u011flam mavi metal robot g\u00f6vdesini \u00e7izelim.",
        svg: `<path d="M 255 264 L 245 352 C 275 372, 315 372, 325 352 L 320 264" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: G\u00f6\u011f\u00fcsteki Jet T\u00fcrbin Motoru (Reakt\u00f6r)",
        instruction: "G\u00f6\u011fs\u00fcn ortas\u0131na b\u00fcy\u00fck bir daire ve i\u00e7ine sar\u0131 enerji t\u00fcrbini \u00e7iz.",
        voice: "\u0130\u015fte Metal Sonic'in g\u00fc\u00e7 kayna\u011f\u0131! G\u00f6\u011fs\u00fcne yuvarlak enerji t\u00fcrbinini \u00e7izelim!",
        svg: `<circle cx="288" cy="312" r="24" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="288" cy="312" r="10" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: S\u0131rt\u0131ndaki S\u0131rt Roketi ve Alevleri",
        instruction: "S\u0131rt\u0131n\u0131n arkas\u0131na u\u00e7mas\u0131n\u0131 sa\u011flayan roket motoru ve alevleri ekle.",
        voice: "S\u0131rt\u0131n\u0131n arkas\u0131na jet h\u0131z\u0131yla u\u00e7mas\u0131n\u0131 sa\u011flayan s\u0131rt roketini ve alevini \u00e7izelim.",
        svg: `<path d="M 248 278 L 210 290 L 215 322 L 246 318" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><path d="M 210 295 L 170 305 L 195 312 L 175 322 L 212 318" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Metal Bo\u011fumlu Sol Kol ve Pen\u00e7eler",
        instruction: "Sol tarafa bo\u011fumlu metal robot kolunu ve 3 keskin robot pen\u00e7esini \u00e7iz.",
        voice: "Sol taraf\u0131na metal bo\u011fumlu robot kolunu ve sivri robot pen\u00e7elerini \u00e7izelim.",
        svg: `<path d="M 252 278 C 228 292, 222 325, 240 342" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><circle cx="235" cy="355" r="17" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 222 365 L 210 382 M 234 370 L 228 388 M 246 368 L 246 385" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: \u0130leri Uzanan Metal Sa\u011f Kol ve Pen\u00e7e",
        instruction: "Sa\u011f tarafa ileri uzanan bo\u011fumlu kolu, bilek halkas\u0131n\u0131 ve metal pen\u00e7eleri ekle.",
        voice: "Sa\u011f tarafa ileri uzanan g\u00fc\u00e7l\u00fc metal kolunu ve sivri pen\u00e7elerini ekleyelim.",
        svg: `<path d="M 320 278 C 352 280, 385 275, 412 268" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><circle cx="426" cy="268" r="17" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 440 258 L 462 252 M 443 268 L 466 268 M 440 278 L 460 284" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Sa\u011f Metal Bacak ve K\u0131rm\u0131z\u0131 Robot Ayakkab\u0131s\u0131",
        instruction: "\u0130leri uzanm\u0131\u015f g\u00fcm\u00fc\u015f baca\u011f\u0131 ve sivri u\u00e7lu k\u0131rm\u0131z\u0131 robot botunu \u00e7iz.",
        voice: "\u00d6ne uzanan metal robot baca\u011f\u0131n\u0131 ve h\u0131z \u015feritli k\u0131rm\u0131z\u0131 robot ayakkab\u0131s\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 298 368 L 325 430" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 315 436 C 312 470, 345 482, 412 475 C 425 466, 418 442, 385 436 C 362 432, 335 432, 315 436 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="342" y1="435" x2="378" y2="474" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Sol Metal Bacak ve Robot Ayakkab\u0131s\u0131",
        instruction: "Di\u011fer metal baca\u011f\u0131 ve sol robot botunu ekle.",
        voice: "Sol taraftaki metal baca\u011f\u0131n\u0131 ve di\u011fer robot ayakkab\u0131s\u0131n\u0131 da tamamlayal\u0131m.",
        svg: `<path d="M 268 368 L 245 435" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 225 442 C 222 475, 252 485, 302 478 C 312 468, 304 444, 275 440 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="248" y1="442" x2="275" y2="478" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Eklem Vidalar\u0131 ve Z\u0131rh \u00c7izgileri",
        instruction: "Kol ve bacak eklemlerine robot vida yuvarlaklar\u0131 ekle.",
        voice: "Eklem yerlerine robotumuzun metal eklem halkalar\u0131n\u0131 ekleyelim.",
        svg: `<circle cx="288" cy="312" r="24" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="372" cy="276" r="6" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="312" cy="400" r="6" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="256" cy="402" r="6" fill="none" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Elektrik \u015eim\u015fek K\u0131v\u0131lc\u0131mlar\u0131",
        instruction: "Metal Sonic'in etraf\u0131na y\u00fcksek voltajl\u0131 zikzak \u015fim\u015fek \u00e7izgileri \u00e7iz.",
        voice: "Robotumuzun etraf\u0131na s\u00fcper h\u0131z\u0131ndan \u00e7\u0131kan elektrik \u015fim\u015fekleri \u00e7izelim!",
        svg: `<path d="M 470 155 L 455 175 L 470 175 L 452 198 M 115 390 L 132 375 L 122 372 L 140 355" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Omuz Z\u0131rh Plakalar\u0131",
        instruction: "Omuzlar\u0131n \u00fcst\u00fcne koruyucu robot omuzluklar\u0131 yerle\u015ftir.",
        voice: "Omuzlar\u0131na haval\u0131 k\u0131rm\u0131z\u0131-lacivert z\u0131rh korumalar\u0131n\u0131 ekleyelim.",
        svg: `<ellipse cx="255" cy="272" rx="14" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="320" cy="272" rx="14" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: U\u00e7u\u015f H\u0131z \u00c7izgileri ve Zemin",
        instruction: "Arkaya do\u011fru s\u00fcz\u00fclen jet \u00e7izgilerini \u00e7ek.",
        voice: "Arkas\u0131na s\u00fcper h\u0131zla u\u00e7tu\u011funu g\u00f6steren metalik h\u0131z \u00e7izgilerini \u00e7ekelim.",
        svg: `<line x1="75" y1="295" x2="150" y2="295" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="85" y1="340" x2="170" y2="340" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_metal/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (Krom Lacivert Metal Sonic!)",
        instruction: "Tebrikler K\u0131van\u00e7! Metal Sonic'i parlak metalik lacivert, g\u00fcm\u00fc\u015f gri ve yanan k\u0131rm\u0131z\u0131 LED g\u00f6zlerle renklendir!",
        voice: "Muhte\u015fem oldu K\u0131van\u00e7! Robot kirpi Metal Sonic u\u00e7u\u015fa haz\u0131r! \u015eimdi onu metalik lacivert, parlak g\u00fcm\u00fc\u015f ve yanan k\u0131rm\u0131z\u0131 g\u00f6zleriyle boya!",
        svg: `
          <defs>
            <linearGradient id="metalBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="50%" stop-color="#1d4ed8"/>
              <stop offset="100%" stop-color="#1e3a8a"/>
            </linearGradient>
            <linearGradient id="metalSilver" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f1f5f9"/>
              <stop offset="50%" stop-color="#94a3b8"/>
              <stop offset="100%" stop-color="#475569"/>
            </linearGradient>
          </defs>
          <line x1="75" y1="295" x2="150" y2="295" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
          <line x1="85" y1="340" x2="170" y2="340" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
          <path d="M 470 155 L 455 175 L 470 175 L 452 198 M 115 390 L 132 375 L 122 372 L 140 355" stroke="#facc15" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <path d="M 210 295 L 170 305 L 195 312 L 175 322 L 212 318 Z" fill="#f97316" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 248 278 L 210 290 L 215 322 L 246 318 Z" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 268 368 L 245 435 L 260 438 L 282 368 Z" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 225 442 C 222 475, 252 485, 302 478 C 312 468, 304 444, 275 440 Z" fill="#dc2626" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="248" y1="442" x2="275" y2="478" stroke="#e2e8f0" stroke-width="7"/>
          <path d="M 298 368 L 325 430 L 338 426 L 312 366 Z" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 315 436 C 312 470, 345 482, 412 475 C 425 466, 418 442, 385 436 C 362 432, 335 432, 315 436 Z" fill="#dc2626" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="342" y1="435" x2="378" y2="474" stroke="#e2e8f0" stroke-width="7"/>
          <path d="M 255 264 L 245 352 C 275 372, 315 372, 325 352 L 320 264 Z" fill="url(#metalBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="288" cy="312" r="24" fill="#1e293b" stroke="#0f172a" stroke-width="8"/>
          <circle cx="288" cy="312" r="14" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <circle cx="288" cy="312" r="6" fill="#ef4444"/>
          <path d="M 252 278 C 228 292, 222 325, 240 342" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 252 278 C 228 292, 222 325, 240 342" fill="none" stroke="url(#metalSilver)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="255" cy="272" rx="14" ry="10" fill="#dc2626" stroke="#0f172a" stroke-width="6"/>
          <circle cx="235" cy="355" r="17" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 222 365 L 210 382 M 234 370 L 228 388 M 246 368 L 246 385" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>
          <path d="M 320 278 C 352 280, 385 275, 412 268" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 320 278 C 352 280, 385 275, 412 268" fill="none" stroke="url(#metalSilver)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="320" cy="272" rx="14" ry="10" fill="#dc2626" stroke="#0f172a" stroke-width="6"/>
          <circle cx="426" cy="268" r="17" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 440 258 L 462 252 M 443 268 L 466 268 M 440 278 L 460 284" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>
          <path d="M 310 124 L 342 88 L 336 142 Z" fill="url(#metalBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 240 135 C 290 112, 352 135, 355 192 L 328 265 L 225 245 L 135 268 L 192 218 L 105 222 L 195 178 L 118 158 Z" fill="url(#metalBlue)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 242 142 L 228 86 L 278 124 Z" fill="url(#metalBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 285 124 L 305 162 L 320 128 Z" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 245 208 C 245 160, 348 160, 348 208 Z" fill="#0f172a" stroke="#0f172a" stroke-width="7"/>
          <polygon points="274,198 296,178 294,202" fill="#ef4444" stroke="#fef08a" stroke-width="2" stroke-linejoin="round"/>
          <polygon points="318,198 338,178 335,202" fill="#ef4444" stroke="#fef08a" stroke-width="2" stroke-linejoin="round"/>
          <path d="M 225 242 L 245 208 L 355 210 L 368 228 L 328 265 L 250 264 Z" fill="url(#metalSilver)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 355 210 L 378 214 L 365 228 Z" fill="#1e293b" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
`,
        audio: "audio/voices/cirak_sonic_metal/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // ⚡ KİRPİ SONİC DÜNYASI: GÜMÜŞ KIRPI SILVER
  // =========================================================================
  {
    id: "cirak_sonic_silver",
    categoryId: "sonic",
    name: "G\u00fcm\u00fc\u015f Kirpi Silver",
    emoji: "\ud83e\udd0d",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Gelecekten gelen g\u00fcm\u00fc\u015f kirpi Silver! Aln\u0131ndaki 5 sivri ta\u00e7 dikeni, kabar\u0131k beyaz g\u00f6\u011f\u00fcs k\u00fcrk\u00fc ve turkuaz psi\u015fik enerjisi!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, g\u00fcm\u00fc\u015f gri, turkuaz, alt\u0131n sar\u0131s\u0131 ve koyu lacivert boyalar",
    welcomeText: "S\u00fcper g\u00fc\u00e7ler! Merhaba K\u0131van\u00e7! D\u00fc\u015f\u00fcnce g\u00fcc\u00fcyle e\u015fyalar\u0131 u\u00e7urabilen haval\u0131 g\u00fcm\u00fc\u015f kirpi Silver'\u0131 \u00e7izmeye haz\u0131r m\u0131s\u0131n? Haydi ba\u015flayal\u0131m!",
    welcomeAudio: "audio/voices/cirak_sonic_silver/welcome.mp3",
    colors: ["#e2e8f0", "#06b6d4", "#f59e0b", "#0f766e"],
    previewSvg: `
          <defs>
            <linearGradient id="silFur" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="55%" stop-color="#e2e8f0"/>
              <stop offset="100%" stop-color="#94a3b8"/>
            </linearGradient>
            <linearGradient id="silPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
            <linearGradient id="silTeal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#2dd4bf"/>
              <stop offset="100%" stop-color="#0f766e"/>
            </linearGradient>
          </defs>
          <circle cx="495" cy="245" r="38" fill="#22d3ee" opacity="0.25"/>
          <circle cx="495" cy="245" r="24" fill="none" stroke="#06b6d4" stroke-width="6" stroke-dasharray="10 6"/>
          <polygon points="485,180 508,172 518,192 496,200" fill="#64748b" stroke="#06b6d4" stroke-width="5" stroke-linejoin="round"/>
          <polygon points="520,295 542,288 548,308 528,312" fill="#64748b" stroke="#06b6d4" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 480 355 L 480 375 M 470 365 L 490 365 M 140 275 L 140 292 M 131 283 L 149 283" stroke="#06b6d4" stroke-width="5" stroke-linecap="round"/>
          <path d="M 258 338 L 222 346 L 255 358 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 278 360 L 258 432 L 274 434 L 292 360 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 225 446 C 222 478, 252 488, 302 482 C 312 470, 302 446, 275 444 Z" fill="#1e293b" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 446 L 275 446 L 275 482 L 255 482 Z" fill="url(#silTeal)" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="256" cy="438" rx="18" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
          <path d="M 312 358 C 325 390, 345 415, 348 438 L 362 435 C 358 408, 338 384, 324 355 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 332 448 C 328 478, 358 488, 412 480 C 425 470, 415 446, 378 446 Z" fill="#1e293b" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 355 446 L 375 446 L 375 482 L 355 482 Z" fill="url(#silTeal)" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="348" cy="442" rx="18" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
          <path d="M 265 272 C 252 315, 258 358, 296 364 C 330 358, 336 315, 325 272 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 255 242 C 250 265, 268 275, 280 288 C 292 298, 305 298, 315 288 C 328 275, 342 265, 338 242 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 262 276 C 232 292, 212 318, 200 335" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 262 276 C 232 292, 212 318, 200 335" fill="none" stroke="url(#silFur)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="178" cy="356" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="195" cy="340" rx="14" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(-40 195 340)"/>
          <path d="M 326 276 C 362 282, 395 275, 422 262" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 326 276 C 362 282, 395 275, 422 262" fill="none" stroke="url(#silFur)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="426" cy="260" rx="10" ry="15" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(-15 426 260)"/>
          <path d="M 435 248 C 460 232, 480 245, 472 265 C 482 275, 472 292, 452 285 L 434 272 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="452" cy="265" r="7" fill="#06b6d4" stroke="#0f172a" stroke-width="4"/>
          <path d="M 235 198 C 195 192, 165 202, 152 218 C 180 225, 212 222, 238 220 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 355 198 C 395 192, 425 202, 438 218 C 410 225, 378 222, 352 220 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 236 168 L 210 135 L 250 148 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 355 168 L 382 135 L 342 148 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 272 150 L 252 75 L 292 135 L 302 58 L 315 135 L 350 82 L 328 152 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 285 162 C 250 135, 200 105, 168 100 C 195 130, 225 150, 252 175 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 310 162 C 345 135, 395 105, 425 100 C 398 130, 368 150, 342 175 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 240 205 C 240 148, 352 148, 355 205 C 350 238, 244 238, 240 205 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 248 202 C 250 165, 290 165, 298 186 C 306 165, 346 165, 346 202 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="278" cy="188" rx="10" ry="15" fill="#f59e0b" stroke="#0f172a" stroke-width="4"/>
          <circle cx="279" cy="188" r="6" fill="#0f172a"/>
          <circle cx="276" cy="183" r="2.5" fill="#ffffff"/>
          <ellipse cx="322" cy="188" rx="9" ry="14" fill="#f59e0b" stroke="#0f172a" stroke-width="4"/>
          <circle cx="323" cy="188" r="5.5" fill="#0f172a"/>
          <circle cx="320" cy="183" r="2" fill="#ffffff"/>
          <path d="M 240 215 C 242 195, 282 198, 298 210 C 315 198, 354 195, 354 218 C 344 252, 250 252, 240 215 Z" fill="url(#silPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="320" cy="208" rx="9" ry="6.5" fill="#0f172a"/>
          <path d="M 280 230 Q 305 240, 326 226" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Ba\u015f ve \u00c7ene Kavisi",
        instruction: "Sayfan\u0131n \u00fcst ortas\u0131na Silver'\u0131n yuvarlak kafa \u00e7izgisini yap.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na g\u00fcm\u00fc\u015f kirpi Silver'\u0131n yuvarlak kafa hatt\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 240 205 C 240 148, 352 148, 355 205" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Al\u0131ndan \u00c7\u0131kan 2 B\u00fcy\u00fck \u00d6n Ta\u00e7 Dikeni",
        instruction: "Silver'\u0131n aln\u0131ndan iki yana yaprak gibi f\u0131rlayan \u00fcnl\u00fc b\u00fcy\u00fck dikenlerini \u00e7iz.",
        voice: "Silver'\u0131n aln\u0131nda \u00e7ok haval\u0131 y\u0131ld\u0131z \u015feklinde dikenler vard\u0131r! \u0130ki yana a\u00e7\u0131lan b\u00fcy\u00fck \u00f6n dikenlerini \u00e7izelim.",
        svg: `<path d="M 285 162 C 250 135, 200 105, 168 100 C 195 130, 225 150, 252 175 M 310 162 C 345 135, 395 105, 425 100 C 398 130, 368 150, 342 175" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Yukar\u0131 Y\u00fckselen 3 Orta Diken ve Kulaklar",
        instruction: "\u0130ki dikenin tam aras\u0131na yukar\u0131 bakan 3 ta\u00e7 dikeni ve iki kulak \u00fc\u00e7geni \u00e7iz.",
        voice: "Ortas\u0131na yukar\u0131 bakan \u00fc\u00e7 ta\u00e7 dikeni ve iki yan\u0131na sivri g\u00fcm\u00fc\u015f kulaklar\u0131n\u0131 ekleyelim.",
        svg: `<path d="M 272 150 L 252 75 L 292 135 L 302 58 L 315 135 L 350 82 L 328 152" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 236 168 L 210 135 L 250 148 M 355 168 L 382 135 L 342 148" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Alt G\u00fcm\u00fc\u015f Yanak ve Arka Dikenler",
        instruction: "Ba\u015f\u0131n yanlar\u0131ndan arkaya ta\u015fan yumu\u015fak g\u00fcm\u00fc\u015f dikenleri tamamla.",
        voice: "Yanlardan arkaya do\u011fru k\u0131vr\u0131lan g\u00fcm\u00fc\u015f dikenlerini \u00e7izip ba\u015f\u0131n\u0131 tamamlayal\u0131m.",
        svg: `<path d="M 235 198 C 195 192, 165 202, 152 218 C 180 225, 212 222, 238 220 M 355 198 C 395 192, 425 202, 438 218 C 410 225, 378 222, 352 220" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: \u015eeftali Y\u00fcz ve \u00d6zg\u00fcvenli G\u00fcl\u00fcmseme",
        instruction: "Alt y\u00fcz\u00fc kapatan yanak yay\u0131n\u0131, siyah burnu ve haval\u0131 g\u00fcl\u00fc\u015f\u00fc \u00e7iz.",
        voice: "Alt y\u00fcz\u00fcne g\u00fcl\u00fcmseyen \u015feftali yanak b\u00f6lgesini, minik burnu ve kararl\u0131 g\u00fcl\u00fc\u015f\u00fcn\u00fc \u00e7izelim.",
        svg: `<path d="M 240 215 C 242 195, 282 198, 298 210 C 315 198, 354 195, 354 218 C 344 252, 250 252, 240 215 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><ellipse cx="320" cy="208" rx="9" ry="6.5" fill="#0f172a"/><path d="M 280 230 Q 305 240, 326 226" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Biti\u015fik G\u00f6z Kemeri ve Alt\u0131n G\u00f6zler",
        instruction: "Silver'\u0131n keskin g\u00f6z \u00e7er\u00e7evesini ve i\u00e7ine parlayan alt\u0131n-kehribar g\u00f6zlerini ekle.",
        voice: "G\u00f6z \u00e7er\u00e7evesini ve i\u00e7ine \u0131\u015f\u0131l \u0131\u015f\u0131l alt\u0131n rengi parlayan keskin g\u00f6zlerini yapal\u0131m.",
        svg: `<path d="M 248 202 C 250 165, 290 165, 298 186 C 306 165, 346 165, 346 202" fill="none" stroke="#0f172a" stroke-width="8"/><ellipse cx="278" cy="188" rx="10" ry="15" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="279" cy="188" r="6" fill="#0f172a"/><circle cx="276" cy="183" r="2.5" fill="#ffffff"/><ellipse cx="322" cy="188" rx="9" ry="14" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="323" cy="188" r="5.5" fill="#0f172a"/><circle cx="320" cy="183" r="2" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Pofuduk Kar Beyaz\u0131 G\u00f6\u011f\u00fcs K\u00fcrk\u00fc",
        instruction: "Boynun alt\u0131na Silver'\u0131n me\u015fhur kabar\u0131k t\u00fcy yakas\u0131n\u0131 zikzaklarla \u00e7iz.",
        voice: "\u0130\u015fte Silver'\u0131n imza detay\u0131! G\u00f6\u011fs\u00fcne pamuk gibi kabar\u0131k beyaz t\u00fcy yakas\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 255 242 C 250 265, 268 275, 280 288 C 292 298, 305 298, 315 288 C 328 275, 342 265, 338 242" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Zarif Havada S\u00fcz\u00fclen G\u00f6vde",
        instruction: "G\u00f6\u011f\u00fcs t\u00fcy\u00fcn\u00fcn alt\u0131na \u00e7evik g\u00fcm\u00fc\u015f g\u00f6vdesini \u00e7iz.",
        voice: "G\u00f6\u011f\u00fcs k\u00fcrk\u00fcn\u00fcn alt\u0131na havada s\u00fcz\u00fclen \u00e7evik g\u00fcm\u00fc\u015f g\u00f6vdesini yapal\u0131m.",
        svg: `<path d="M 265 272 C 252 315, 258 358, 296 364 C 330 358, 336 315, 325 272" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: \u0130leri Uzanan Telekinetik Sa\u011f Kol ve Eldiven",
        instruction: "Sa\u011f tarafa zihin g\u00fcc\u00fc kullan\u0131rken a\u00e7t\u0131\u011f\u0131 elini ve alt\u0131n bilezik halkas\u0131n\u0131 \u00e7iz.",
        voice: "Sa\u011f kolunu psi\u015fik g\u00fc\u00e7 kullan\u0131rken ileriye do\u011fru a\u00e7al\u0131m ve alt\u0131n bilezi\u011fini \u00e7izelim.",
        svg: `<path d="M 326 276 C 362 282, 395 275, 422 262" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="426" cy="260" rx="10" ry="15" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-15 426 260)"/><path d="M 435 248 C 460 232, 480 245, 472 265 C 482 275, 472 292, 452 285 L 434 272 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Elden \u00c7\u0131kan Turkuaz Psi\u015fik Enerji Halkalar\u0131",
        instruction: "Avucunun ortas\u0131na yuvarlak enerji i\u015fareti ve etraf\u0131na dalgalanan psi\u015fik aura \u00e7iz.",
        voice: "Eldiveninin ortas\u0131na g\u00fc\u00e7 sembol\u00fcn\u00fc ve etraf\u0131na parlayan turkuaz psi\u015fik dalgalar\u0131 \u00e7izelim!",
        svg: `<circle cx="452" cy="265" r="7" fill="none" stroke="#0f172a" stroke-width="4.5"/><circle cx="495" cy="245" r="24" fill="none" stroke="#0f172a" stroke-width="5" stroke-dasharray="10 6"/><circle cx="495" cy="245" r="38" fill="none" stroke="#0f172a" stroke-width="4" stroke-dasharray="12 8"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Havada Duran Sol Kol ve Eldiven",
        instruction: "Sola do\u011fru s\u00fcz\u00fclen sol kolunu, bilek halkas\u0131n\u0131 ve a\u00e7\u0131k eldivenini ekle.",
        voice: "Sol kolunu da u\u00e7u\u015f dengesi i\u00e7in yana do\u011fru a\u00e7al\u0131m.",
        svg: `<path d="M 262 276 C 232 292, 212 318, 200 335" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="195" cy="340" rx="14" ry="10" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-40 195 340)"/><circle cx="178" cy="356" r="18" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: B\u00fck\u00fcl\u00fc U\u00e7an Sa\u011f Bacak ve Bilek Halkas\u0131",
        instruction: "Havada hafif\u00e7e b\u00fck\u00fcl\u00fc duran sa\u011f baca\u011f\u0131n\u0131 ve alt\u0131n bilekli\u011fini \u00e7iz.",
        voice: "Sa\u011f baca\u011f\u0131n\u0131 havada s\u00fcz\u00fcl\u00fcr gibi hafif\u00e7e k\u0131v\u0131r\u0131p bilek halkas\u0131n\u0131 ekleyelim.",
        svg: `<path d="M 312 358 C 325 390, 345 415, 348 438" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="348" cy="442" rx="18" ry="10" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Gelece\u011fin Haval\u0131 Sa\u011f Botu",
        instruction: "Bile\u011fin alt\u0131na turkuaz ve alt\u0131n \u015feritli f\u00fct\u00fcristik sa\u011f botunu \u00e7iz.",
        voice: "Sa\u011f aya\u011f\u0131na f\u00fct\u00fcristik ye\u015fil-mavi \u015feritli Silver ayakkab\u0131s\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 332 448 C 328 478, 358 488, 412 480 C 425 470, 415 446, 378 446 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="358" y1="448" x2="358" y2="482" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Uzun Sol Bacak ve Botu",
        instruction: "A\u015fa\u011f\u0131 do\u011fru s\u00fcz\u00fclen sol baca\u011f\u0131 ve sol Silver botunu ekle.",
        voice: "Sol baca\u011f\u0131n\u0131 ve di\u011fer haval\u0131 botunu da tamamlayal\u0131m.",
        svg: `<path d="M 278 360 L 258 432" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="256" cy="438" rx="18" ry="10" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 225 446 C 222 478, 252 488, 302 482 C 312 470, 302 446, 275 444 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="258" y1="446" x2="258" y2="482" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Telekinezi ile U\u00e7an Kayalar",
        instruction: "Silver'\u0131n d\u00fc\u015f\u00fcnce g\u00fcc\u00fcyle havada u\u00e7urdu\u011fu k\u00fc\u00e7\u00fck ta\u015flar\u0131 sa\u011fa \u00e7iz.",
        voice: "Silver zihin g\u00fcc\u00fcyle ta\u015flar\u0131 u\u00e7urur! Sa\u011f tarafa havada s\u00fcz\u00fclen minik kayalar \u00e7izelim.",
        svg: `<polygon points="485,180 508,172 518,192 496,200" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/><polygon points="520,295 542,288 548,308 528,312" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Sivri Kuyruk",
        instruction: "Arka taraftan \u00e7\u0131kan k\u0131sa sivri g\u00fcm\u00fc\u015f kirpi kuyru\u011funu yap.",
        voice: "Arkadaki k\u0131sa sivri kirpi kuyru\u011funu da ekleyelim.",
        svg: `<path d="M 258 338 L 222 346 L 255 358" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Parlayan Psi\u015fik I\u015f\u0131lt\u0131lar",
        instruction: "Etraf\u0131na y\u0131ld\u0131z \u015feklinde parlayan telekinetik \u0131\u015f\u0131klar yerle\u015ftir.",
        voice: "Etraf\u0131na par\u0131l par\u0131l parlayan d\u00f6rt k\u00f6\u015feli g\u00fc\u00e7 y\u0131ld\u0131zlar\u0131 kondural\u0131m.",
        svg: `<path d="M 480 355 L 480 375 M 470 365 L 490 365 M 140 275 L 140 292 M 131 283 L 149 283" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_silver/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (Parlak G\u00fcm\u00fc\u015f ve Turkuaz G\u00fc\u00e7!)",
        instruction: "Tebrikler K\u0131van\u00e7! Silver'\u0131 kar beyaz\u0131-g\u00fcm\u00fc\u015f t\u00fcyler ve \u0131\u015f\u0131l \u0131\u015f\u0131l turkuaz psi\u015fik enerjiyle renklendir!",
        voice: "Harikas\u0131n K\u0131van\u00e7! G\u00fcm\u00fc\u015f kirpi Silver gelece\u011fi kurtarmaya haz\u0131r! \u015eimdi onu parlak g\u00fcm\u00fc\u015f, alt\u0131n g\u00f6zler ve \u0131\u015f\u0131ldayan turkuaz enerjisiyle boya!",
        svg: `
          <defs>
            <linearGradient id="silFur" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="55%" stop-color="#e2e8f0"/>
              <stop offset="100%" stop-color="#94a3b8"/>
            </linearGradient>
            <linearGradient id="silPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
            <linearGradient id="silTeal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#2dd4bf"/>
              <stop offset="100%" stop-color="#0f766e"/>
            </linearGradient>
          </defs>
          <circle cx="495" cy="245" r="38" fill="#22d3ee" opacity="0.25"/>
          <circle cx="495" cy="245" r="24" fill="none" stroke="#06b6d4" stroke-width="6" stroke-dasharray="10 6"/>
          <polygon points="485,180 508,172 518,192 496,200" fill="#64748b" stroke="#06b6d4" stroke-width="5" stroke-linejoin="round"/>
          <polygon points="520,295 542,288 548,308 528,312" fill="#64748b" stroke="#06b6d4" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 480 355 L 480 375 M 470 365 L 490 365 M 140 275 L 140 292 M 131 283 L 149 283" stroke="#06b6d4" stroke-width="5" stroke-linecap="round"/>
          <path d="M 258 338 L 222 346 L 255 358 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 278 360 L 258 432 L 274 434 L 292 360 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 225 446 C 222 478, 252 488, 302 482 C 312 470, 302 446, 275 444 Z" fill="#1e293b" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 446 L 275 446 L 275 482 L 255 482 Z" fill="url(#silTeal)" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="256" cy="438" rx="18" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
          <path d="M 312 358 C 325 390, 345 415, 348 438 L 362 435 C 358 408, 338 384, 324 355 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 332 448 C 328 478, 358 488, 412 480 C 425 470, 415 446, 378 446 Z" fill="#1e293b" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 355 446 L 375 446 L 375 482 L 355 482 Z" fill="url(#silTeal)" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="348" cy="442" rx="18" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
          <path d="M 265 272 C 252 315, 258 358, 296 364 C 330 358, 336 315, 325 272 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 255 242 C 250 265, 268 275, 280 288 C 292 298, 305 298, 315 288 C 328 275, 342 265, 338 242 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 262 276 C 232 292, 212 318, 200 335" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 262 276 C 232 292, 212 318, 200 335" fill="none" stroke="url(#silFur)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="178" cy="356" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="195" cy="340" rx="14" ry="10" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(-40 195 340)"/>
          <path d="M 326 276 C 362 282, 395 275, 422 262" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 326 276 C 362 282, 395 275, 422 262" fill="none" stroke="url(#silFur)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="426" cy="260" rx="10" ry="15" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(-15 426 260)"/>
          <path d="M 435 248 C 460 232, 480 245, 472 265 C 482 275, 472 292, 452 285 L 434 272 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="452" cy="265" r="7" fill="#06b6d4" stroke="#0f172a" stroke-width="4"/>
          <path d="M 235 198 C 195 192, 165 202, 152 218 C 180 225, 212 222, 238 220 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 355 198 C 395 192, 425 202, 438 218 C 410 225, 378 222, 352 220 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 236 168 L 210 135 L 250 148 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 355 168 L 382 135 L 342 148 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 272 150 L 252 75 L 292 135 L 302 58 L 315 135 L 350 82 L 328 152 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 285 162 C 250 135, 200 105, 168 100 C 195 130, 225 150, 252 175 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 310 162 C 345 135, 395 105, 425 100 C 398 130, 368 150, 342 175 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 240 205 C 240 148, 352 148, 355 205 C 350 238, 244 238, 240 205 Z" fill="url(#silFur)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 248 202 C 250 165, 290 165, 298 186 C 306 165, 346 165, 346 202 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="278" cy="188" rx="10" ry="15" fill="#f59e0b" stroke="#0f172a" stroke-width="4"/>
          <circle cx="279" cy="188" r="6" fill="#0f172a"/>
          <circle cx="276" cy="183" r="2.5" fill="#ffffff"/>
          <ellipse cx="322" cy="188" rx="9" ry="14" fill="#f59e0b" stroke="#0f172a" stroke-width="4"/>
          <circle cx="323" cy="188" r="5.5" fill="#0f172a"/>
          <circle cx="320" cy="183" r="2" fill="#ffffff"/>
          <path d="M 240 215 C 242 195, 282 198, 298 210 C 315 198, 354 195, 354 218 C 344 252, 250 252, 240 215 Z" fill="url(#silPeach)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="320" cy="208" rx="9" ry="6.5" fill="#0f172a"/>
          <path d="M 280 230 Q 305 240, 326 226" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>
`,
        audio: "audio/voices/cirak_sonic_silver/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // ⚡ KİRPİ SONİC DÜNYASI: KOMIK DOKTOR EGGMAN
  // =========================================================================
  {
    id: "cirak_sonic_eggman",
    categoryId: "sonic",
    name: "Komik Doktor Eggman",
    emoji: "\ud83e\udd5a",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Sonic'in komik k\u00f6t\u00fc dahisi Doktor Eggman! Yumurta gibi g\u00f6vdesi, dev b\u0131y\u0131klar\u0131, mavi g\u00f6zl\u00fckleri ve k\u0131rm\u0131z\u0131 ceketi!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, k\u0131rm\u0131z\u0131, sar\u0131, kahverengi, mavi ve ten rengi boyalar",
    welcomeText: "Haha haha! Selam K\u0131van\u00e7! D\u00fcnyan\u0131n en komik k\u00f6t\u00fcs\u00fc, yumurta v\u00fccutlu ve dev b\u0131y\u0131kl\u0131 Doktor Eggman geldi! B\u0131y\u0131klar\u0131n\u0131 \u00e7izmeye haz\u0131r m\u0131s\u0131n?",
    welcomeAudio: "audio/voices/cirak_sonic_eggman/welcome.mp3",
    colors: ["#ef4444", "#facc15", "#78350f", "#38bdf8"],
    previewSvg: `
          <defs>
            <linearGradient id="eggRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#991b1b"/>
            </linearGradient>
            <linearGradient id="eggPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
          </defs>
          <path d="M 160 500 Q 300 492, 440 500" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
          <circle cx="495" cy="145" r="16" fill="#94a3b8" stroke="#0f172a" stroke-width="6"/>
          <circle cx="495" cy="145" r="6" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <path d="M 275 395 L 268 465 M 325 395 L 332 465" stroke="#1e293b" stroke-width="11" stroke-linecap="round"/>
          <path d="M 255 462 L 230 482 C 228 492, 245 495, 278 488 L 278 462 Z" fill="#1e293b" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 322 462 L 322 488 C 355 495, 372 492, 370 482 L 345 462 Z" fill="#1e293b" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 235 370 L 222 415 L 258 405 M 365 370 L 378 415 L 342 405 Z" fill="url(#eggRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 222 275 C 195 295, 190 335, 205 360" fill="none" stroke="#0f172a" stroke-width="20" stroke-linecap="round"/>
          <path d="M 222 275 C 195 295, 190 335, 205 360" fill="none" stroke="#dc2626" stroke-width="11" stroke-linecap="round"/>
          <ellipse cx="206" cy="366" rx="14" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <circle cx="212" cy="382" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 378 275 C 415 280, 442 260, 452 235" fill="none" stroke="#0f172a" stroke-width="20" stroke-linecap="round"/>
          <path d="M 378 275 C 415 280, 442 260, 452 235" fill="none" stroke="#dc2626" stroke-width="11" stroke-linecap="round"/>
          <ellipse cx="455" cy="228" rx="14" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6" transform="rotate(-35 455 228)"/>
          <circle cx="468" cy="208" r="19" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 468 188 L 468 168" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
          <ellipse cx="300" cy="308" rx="84" ry="88" fill="url(#eggRed)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 262 232 L 285 385 L 315 385 L 338 232 Z" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
          <line x1="300" y1="225" x2="300" y2="395" stroke="#0f172a" stroke-width="5"/>
          <rect x="255" y="295" width="16" height="8" rx="2" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <rect x="329" y="295" width="16" height="8" rx="2" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <rect x="258" y="330" width="16" height="8" rx="2" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <rect x="326" y="330" width="16" height="8" rx="2" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="300" cy="175" rx="46" ry="44" fill="url(#eggPeach)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="282" cy="145" rx="13" ry="10" fill="#22c55e" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="318" cy="145" rx="13" ry="10" fill="#22c55e" stroke="#0f172a" stroke-width="6"/>
          <circle cx="280" cy="175" r="15" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>
          <circle cx="320" cy="175" r="15" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>
          <circle cx="275" cy="170" r="4" fill="#ffffff"/>
          <circle cx="315" cy="170" r="4" fill="#ffffff"/>
          <line x1="295" y1="175" x2="305" y2="175" stroke="#0f172a" stroke-width="5"/>
          <path d="M 280 218 Q 300 232, 320 218" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <path d="M 295 195 C 260 185, 200 182, 165 202 L 195 208 L 160 222 L 200 224 L 175 238 C 215 235, 265 225, 295 212 Z" fill="#92400e" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 305 195 C 340 185, 400 182, 435 202 L 405 208 L 440 222 L 400 224 L 425 238 C 385 235, 335 225, 305 212 Z" fill="#92400e" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="300" cy="186" r="11" fill="#f87171" stroke="#0f172a" stroke-width="5"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Parlak Kel Yumurta Kafa",
        instruction: "Sayfan\u0131n \u00fcst ortas\u0131na Doktor Eggman'\u0131n yuvarlak kel kafa \u00e7emberini \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na Doktor Eggman'\u0131n parlak yuvarlak ba\u015f\u0131n\u0131 \u00e7izelim.",
        svg: `<ellipse cx="300" cy="175" rx="46" ry="44" fill="none" stroke="#0f172a" stroke-width="9"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Al\u0131n \u00dczeri Pilot G\u00f6zl\u00fckleri (Koruma G\u00f6zl\u00fc\u011f\u00fc)",
        instruction: "Aln\u0131na tak\u0131l\u0131 duran ye\u015fil caml\u0131 iki k\u00fc\u00e7\u00fck oval koruma g\u00f6zl\u00fc\u011f\u00fcn\u00fc yap.",
        voice: "Aln\u0131na tak\u0131l\u0131 duran o haval\u0131 iki k\u00fc\u00e7\u00fck oval pilot g\u00f6zl\u00fc\u011f\u00fcn\u00fc \u00e7izelim.",
        svg: `<ellipse cx="282" cy="145" rx="13" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="318" cy="145" rx="13" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/><line x1="254" y1="145" x2="269" y2="145" stroke="#0f172a" stroke-width="5"/><line x1="331" y1="145" x2="346" y2="145" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Yuvarlak Mavi G\u00fcne\u015f G\u00f6zl\u00fc\u011f\u00fc",
        instruction: "G\u00f6zlerinin \u00fcst\u00fcne tam daire \u015feklinde yuvarlak mavi caml\u0131 g\u00f6zl\u00fcklerini \u00e7iz.",
        voice: "G\u00f6zlerinin \u00fczerine \u00fcnl\u00fc yuvarlak mavi caml\u0131 g\u00f6zl\u00fcklerini ekleyelim.",
        svg: `<circle cx="280" cy="175" r="15" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="320" cy="175" r="15" fill="none" stroke="#0f172a" stroke-width="6"/><line x1="295" y1="175" x2="305" y2="175" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Tombul Yuvarlak Burun",
        instruction: "\u0130ki g\u00f6zl\u00fc\u011f\u00fcn ortas\u0131na ve biraz alt\u0131na tombi\u015f k\u0131rm\u0131z\u0131 bir burun ekle.",
        voice: "Tam ortaya iki g\u00f6zl\u00fc\u011f\u00fcn alt\u0131na tombul ve sevimli bir burun yuvarla\u011f\u0131 \u00e7izelim.",
        svg: `<circle cx="300" cy="186" r="11" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: DEV Z\u0130KZAKLI DEVASA BIYIKLAR (Sol Taraf)",
        instruction: "Burnun alt\u0131ndan sola do\u011fru dev dikenler gibi uzanan kahverengi b\u0131y\u0131\u011f\u0131 \u00e7iz.",
        voice: "\u0130\u015fte Doktor Eggman'\u0131n en komik yeri! Sola do\u011fru dev gibi uzanan dikenli b\u0131y\u0131\u011f\u0131n\u0131 \u00e7izelim!",
        svg: `<path d="M 295 195 C 260 185, 200 182, 165 202 L 195 208 L 160 222 L 200 224 L 175 238 C 215 235, 265 225, 295 212" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: DEV Z\u0130KZAKLI DEVASA BIYIKLAR (Sa\u011f Taraf)",
        instruction: "Sa\u011fa do\u011fru da ayn\u0131 b\u00fcy\u00fckl\u00fckte g\u00fcr ve sivri b\u0131y\u0131k kanad\u0131n\u0131 yap.",
        voice: "Sa\u011f tarafa da ayn\u0131 devasa zikzakl\u0131 b\u0131y\u0131k kanad\u0131n\u0131 \u00e7izelim, \u00e7ok haval\u0131 oldu!",
        svg: `<path d="M 305 195 C 340 185, 400 182, 435 202 L 405 208 L 440 222 L 400 224 L 425 238 C 385 235, 335 225, 305 212" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: B\u0131y\u0131\u011f\u0131n Alt\u0131ndaki Kocaman S\u0131r\u0131t\u0131\u015f",
        instruction: "B\u0131y\u0131klar\u0131n alt\u0131ndan g\u00f6r\u00fcnen ne\u015feli geni\u015f g\u00fcl\u00fcmseme a\u011fz\u0131n\u0131 ekle.",
        voice: "B\u0131y\u0131klar\u0131n hemen alt\u0131na 'Plan\u0131m haz\u0131r!' diyen komik s\u0131r\u0131t\u0131\u015f a\u011fz\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 280 218 Q 300 232, 320 218" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Yumurta \u015eekilli Dev K\u0131rm\u0131z\u0131 Ceket G\u00f6vdesi",
        instruction: "Kafan\u0131n alt\u0131ndan a\u015fa\u011f\u0131ya dev bir yumurta gibi yuvarlak g\u00f6vde \u00e7iz.",
        voice: "Ad\u0131 \u00fcst\u00fcnde Eggman! \u015eimdi yumurta gibi kocaman yuvarlak k\u0131rm\u0131z\u0131 ceket g\u00f6vdesini \u00e7izelim.",
        svg: `<ellipse cx="300" cy="308" rx="84" ry="88" fill="none" stroke="#0f172a" stroke-width="10"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Sar\u0131 Ceket \u015eeritleri ve D\u00fc\u011fmeler",
        instruction: "Ceketin \u00f6n k\u0131sm\u0131na V \u015feklinde sar\u0131 yaka panellerini ve alt\u0131n d\u00fc\u011fmeleri yap.",
        voice: "Ceketinin \u00f6n\u00fcne sar\u0131 \u00e7izgili s\u00fcper \u015feritler ve iki yan\u0131na alt\u0131n d\u00fc\u011fmeler ekleyelim.",
        svg: `<path d="M 262 232 L 285 385 M 338 232 L 315 385" stroke="#0f172a" stroke-width="6"/><rect x="255" y="295" width="16" height="8" rx="2" fill="none" stroke="#0f172a" stroke-width="5"/><rect x="329" y="295" width="16" height="8" rx="2" fill="none" stroke="#0f172a" stroke-width="5"/><rect x="258" y="330" width="16" height="8" rx="2" fill="none" stroke="#0f172a" stroke-width="5"/><rect x="326" y="330" width="16" height="8" rx="2" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Sol Kol ve Beyaz Man\u015fet",
        instruction: "Ceketin sol yan\u0131ndan a\u015fa\u011f\u0131 sarkan kolunu ve beyaz kol man\u015fetini \u00e7iz.",
        voice: "Sol yan\u0131ndan beline do\u011fru inen k\u0131rm\u0131z\u0131 ceket kolunu ve beyaz man\u015fetini \u00e7izelim.",
        svg: `<path d="M 222 275 C 195 295, 190 335, 205 360" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><ellipse cx="206" cy="366" rx="14" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="212" cy="382" r="18" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Sa\u011f Kol ve \u0130\u015faret Eden B\u00fcy\u00fck Eldiven",
        instruction: "Sa\u011f kolu havaya 'Aha!' diye parma\u011f\u0131n\u0131 kald\u0131rm\u0131\u015f ne\u015feli pozda \u00e7iz.",
        voice: "Sa\u011f elini 'Harika bir fikrim var!' der gibi havaya kald\u0131rm\u0131\u015f eldivenli pozda \u00e7izelim!",
        svg: `<path d="M 378 275 C 415 280, 442 260, 452 235" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><ellipse cx="455" cy="228" rx="14" ry="9" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-35 455 228)"/><circle cx="468" cy="208" r="19" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 468 188 L 468 168" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Ceketin Alt Etek U\u00e7lar\u0131",
        instruction: "G\u00f6vdenin alt\u0131ndan iki yana sarkan uzun ceket eteklerini \u00e7iz.",
        voice: "K\u0131rm\u0131z\u0131 ceketinin alt\u0131ndan iki yana a\u00e7\u0131lan uzun ceket kuyruklar\u0131n\u0131 ekleyelim.",
        svg: `<path d="M 235 370 L 222 415 L 258 405 M 365 370 L 378 415 L 342 405" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Uzun \u0130nce Siyah Bacaklar",
        instruction: "Dev yuvarlak g\u00f6vdesine komik bir tezat yapan uzun ince bacaklar\u0131n\u0131 \u00e7iz.",
        voice: "Doktor Eggman'\u0131n ince uzun komik siyah bacaklar\u0131n\u0131 yere indirelim.",
        svg: `<path d="M 275 395 L 268 465 M 325 395 L 332 465" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: \u015e\u0131k Sol ve Sa\u011f \u00c7izme Botlar\u0131",
        instruction: "\u0130nce bacaklar\u0131n\u0131n ucuna uzun k\u0131rm\u0131z\u0131-siyah Eggman \u00e7izmelerini yap.",
        voice: "Ayaklar\u0131na parlak uzun \u00e7izmelerini \u00e7izip sa\u011flamca yere bast\u0131ral\u0131m.",
        svg: `<path d="M 255 462 L 230 482 C 228 492, 245 495, 278 488 L 278 462 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 322 462 L 322 488 C 355 495, 372 492, 370 482 L 345 462 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Kafa Tepesi I\u015f\u0131lt\u0131s\u0131",
        instruction: "Kel kafas\u0131n\u0131n parlad\u0131\u011f\u0131n\u0131 g\u00f6steren k\u00fc\u00e7\u00fck bir par\u0131lt\u0131 kavis \u00e7iz.",
        voice: "Kel ba\u015f\u0131n\u0131n parlad\u0131\u011f\u0131n\u0131 g\u00f6steren \u015firin bir \u0131\u015f\u0131k par\u0131lt\u0131s\u0131 koyal\u0131m!",
        svg: `<path d="M 285 135 Q 300 132, 312 135" stroke="#0f172a" stroke-width="4" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Fikir Ampul\u00fc veya Di\u015fli \u00c7ark",
        instruction: "Elindeki parma\u011f\u0131n\u0131n yan\u0131na icat yapt\u0131\u011f\u0131n\u0131 g\u00f6steren k\u00fc\u00e7\u00fck bir robot di\u015fli \u00e7ark\u0131 \u00e7iz.",
        voice: "Sa\u011f \u00fcst k\u00f6\u015feye onun dahi bir robot mucidi oldu\u011funu g\u00f6steren di\u015fli \u00e7ark \u00e7izelim.",
        svg: `<circle cx="495" cy="145" r="16" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="495" cy="145" r="6" fill="none" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Zemin G\u00f6lgesi \u00c7izgisi",
        instruction: "\u00c7izmelerinin alt\u0131na d\u00fcz laboratuvar zemini \u00e7iz.",
        voice: "Ayaklar\u0131n\u0131n alt\u0131na gizli laboratuvar zemini \u00e7izgisini \u00e7ekelim.",
        svg: `<path d="M 160 500 Q 300 492, 440 500" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_eggman/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (K\u0131rm\u0131z\u0131 Ceket ve Dev B\u0131y\u0131k!)",
        instruction: "Tebrikler K\u0131van\u00e7! Doktor Eggman'\u0131 parlak k\u0131rm\u0131z\u0131 ceket, sar\u0131 d\u00fc\u011fmeler ve mavi g\u00f6zl\u00fcklerle renklendir!",
        voice: "Haha harika oldu K\u0131van\u00e7! Komik Doktor Eggman kar\u015f\u0131m\u0131zda duruyor! \u015eimdi onu parlak k\u0131rm\u0131z\u0131 ceketi, kahverengi b\u0131y\u0131klar\u0131 ve mavi g\u00f6zl\u00fckleriyle boya!",
        svg: `
          <defs>
            <linearGradient id="eggRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#991b1b"/>
            </linearGradient>
            <linearGradient id="eggPeach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffedd5"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
          </defs>
          <path d="M 160 500 Q 300 492, 440 500" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
          <circle cx="495" cy="145" r="16" fill="#94a3b8" stroke="#0f172a" stroke-width="6"/>
          <circle cx="495" cy="145" r="6" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <path d="M 275 395 L 268 465 M 325 395 L 332 465" stroke="#1e293b" stroke-width="11" stroke-linecap="round"/>
          <path d="M 255 462 L 230 482 C 228 492, 245 495, 278 488 L 278 462 Z" fill="#1e293b" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 322 462 L 322 488 C 355 495, 372 492, 370 482 L 345 462 Z" fill="#1e293b" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 235 370 L 222 415 L 258 405 M 365 370 L 378 415 L 342 405 Z" fill="url(#eggRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 222 275 C 195 295, 190 335, 205 360" fill="none" stroke="#0f172a" stroke-width="20" stroke-linecap="round"/>
          <path d="M 222 275 C 195 295, 190 335, 205 360" fill="none" stroke="#dc2626" stroke-width="11" stroke-linecap="round"/>
          <ellipse cx="206" cy="366" rx="14" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <circle cx="212" cy="382" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 378 275 C 415 280, 442 260, 452 235" fill="none" stroke="#0f172a" stroke-width="20" stroke-linecap="round"/>
          <path d="M 378 275 C 415 280, 442 260, 452 235" fill="none" stroke="#dc2626" stroke-width="11" stroke-linecap="round"/>
          <ellipse cx="455" cy="228" rx="14" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6" transform="rotate(-35 455 228)"/>
          <circle cx="468" cy="208" r="19" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 468 188 L 468 168" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
          <ellipse cx="300" cy="308" rx="84" ry="88" fill="url(#eggRed)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 262 232 L 285 385 L 315 385 L 338 232 Z" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
          <line x1="300" y1="225" x2="300" y2="395" stroke="#0f172a" stroke-width="5"/>
          <rect x="255" y="295" width="16" height="8" rx="2" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <rect x="329" y="295" width="16" height="8" rx="2" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <rect x="258" y="330" width="16" height="8" rx="2" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <rect x="326" y="330" width="16" height="8" rx="2" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="300" cy="175" rx="46" ry="44" fill="url(#eggPeach)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="282" cy="145" rx="13" ry="10" fill="#22c55e" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="318" cy="145" rx="13" ry="10" fill="#22c55e" stroke="#0f172a" stroke-width="6"/>
          <circle cx="280" cy="175" r="15" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>
          <circle cx="320" cy="175" r="15" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>
          <circle cx="275" cy="170" r="4" fill="#ffffff"/>
          <circle cx="315" cy="170" r="4" fill="#ffffff"/>
          <line x1="295" y1="175" x2="305" y2="175" stroke="#0f172a" stroke-width="5"/>
          <path d="M 280 218 Q 300 232, 320 218" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <path d="M 295 195 C 260 185, 200 182, 165 202 L 195 208 L 160 222 L 200 224 L 175 238 C 215 235, 265 225, 295 212 Z" fill="#92400e" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 305 195 C 340 185, 400 182, 435 202 L 405 208 L 440 222 L 400 224 L 425 238 C 385 235, 335 225, 305 212 Z" fill="#92400e" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="300" cy="186" r="11" fill="#f87171" stroke="#0f172a" stroke-width="5"/>
`,
        audio: "audio/voices/cirak_sonic_eggman/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // ⚡ KİRPİ SONİC DÜNYASI: SEVIMLI BEBEK CHAO
  // =========================================================================
  {
    id: "cirak_sonic_chao",
    categoryId: "sonic",
    name: "Sevimli Bebek Chao",
    emoji: "\ud83d\udca7",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Sonic d\u00fcnyas\u0131n\u0131n minicik tatl\u0131 bebe\u011fi Chao! Ba\u015f\u0131n\u0131n \u00fcst\u00fcndeki sihirli sar\u0131 top, sevimli kanatlar\u0131 ve kocaman parlayan g\u00f6zleri!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, a\u00e7\u0131k mavi, alt\u0131n sar\u0131s\u0131 ve pembe boyalar",
    welcomeText: "Chao chao! Merhaba K\u0131van\u00e7! Sonic d\u00fcnyas\u0131n\u0131n en tatl\u0131 minik bebe\u011fi Chao ile tan\u0131\u015f! Kocaman yuvarlak g\u00f6zleri ve minik kanatlar\u0131yla harika bir \u00e7izim bizi bekliyor!",
    welcomeAudio: "audio/voices/cirak_sonic_chao/welcome.mp3",
    colors: ["#38bdf8", "#7dd3fc", "#facc15", "#f472b6"],
    previewSvg: `
          <defs>
            <linearGradient id="chaoBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#bae6fd"/>
              <stop offset="50%" stop-color="#38bdf8"/>
              <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
            <linearGradient id="chaoGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
          </defs>
          <path d="M 145 357 A 28 28 0 1 0 145 413 A 28 28 0 1 0 145 357 Z M 145 370 A 15 15 0 1 1 145 400 A 15 15 0 1 1 145 370 Z" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 355 82 L 355 102 M 345 92 L 365 92 M 245 85 L 245 105 M 235 95 L 255 95" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <path d="M 248 312 C 202 275, 185 315, 222 335 Z" fill="#f43f5e" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 352 312 C 398 275, 415 315, 378 335 Z" fill="#f43f5e" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="265" cy="398" rx="22" ry="16" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="9" transform="rotate(-15 265 398)"/>
          <ellipse cx="335" cy="398" rx="22" ry="16" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="9" transform="rotate(15 335 398)"/>
          <path d="M 262 268 C 235 305, 240 375, 300 378 C 360 375, 365 305, 338 268 Z" fill="url(#chaoBlue)" stroke="#0f172a" stroke-width="10"/>
          <ellipse cx="300" cy="328" rx="28" ry="30" fill="#fef9c3" stroke="#0f172a" stroke-width="6"/>
          <path d="M 252 292 C 218 285, 198 302, 206 322 C 215 335, 236 325, 248 318 Z" fill="url(#chaoBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 222 292 C 208 295, 202 310, 206 322 C 212 328, 220 326, 224 322 Z" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="4"/>
          <path d="M 348 292 C 382 285, 402 302, 394 322 C 385 335, 364 325, 352 318 Z" fill="url(#chaoBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 378 292 C 392 295, 398 310, 394 322 C 388 328, 380 326, 376 322 Z" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="4"/>
          <circle cx="300" cy="86" r="18" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 225 225 C 215 160, 275 145, 300 118 C 325 145, 385 160, 375 225 C 370 272, 230 272, 225 225 Z" fill="url(#chaoBlue)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <ellipse cx="268" cy="206" rx="16" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="270" cy="206" r="11" fill="#0f172a"/>
          <circle cx="266" cy="198" r="5" fill="#ffffff"/>
          <circle cx="274" cy="210" r="2.5" fill="#ffffff"/>
          <ellipse cx="332" cy="206" rx="16" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="330" cy="206" r="11" fill="#0f172a"/>
          <circle cx="326" cy="198" r="5" fill="#ffffff"/>
          <circle cx="334" cy="210" r="2.5" fill="#ffffff"/>
          <ellipse cx="242" cy="226" rx="10" ry="6" fill="#fda4af"/>
          <ellipse cx="358" cy="226" rx="10" ry="6" fill="#fda4af"/>
          <path d="M 288 232 Q 300 242, 312 232" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Damla \u015eekilli Tombul Kafa",
        instruction: "Sayfan\u0131n ortas\u0131na sevimli bir su damlas\u0131 gibi yuvarlak Chao kafas\u0131 \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n \u00fcst ortas\u0131na Bebek Chao'nun tombul damla \u015feklindeki tatl\u0131 kafas\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 225 225 C 215 160, 275 145, 300 118 C 325 145, 385 160, 375 225 C 370 272, 230 272, 225 225 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Ba\u015f\u0131n \u00dcst\u00fcnde U\u00e7an Sihirli Alt\u0131n Top",
        instruction: "Kafas\u0131n\u0131n tam \u00fcst\u00fcnde havada s\u00fcz\u00fclen yuvarlak parlak duygu topunu yap.",
        voice: "Kafas\u0131n\u0131n tam \u00fcst\u00fcnde havada s\u00fcz\u00fclen sevimli sihirli topu \u00e7izelim!",
        svg: `<circle cx="300" cy="86" r="18" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Sol Kocaman Parlak G\u00f6z",
        instruction: "Y\u00fcz\u00fcn sol taraf\u0131na devasa parlak bir g\u00f6z ve \u00e7ifte \u0131\u015f\u0131k parlamas\u0131 \u00e7iz.",
        voice: "Y\u00fcz\u00fcn\u00fcn sol taraf\u0131na \u00e7ok sevimli kocaman bir g\u00f6z ve i\u00e7ine iki par\u0131lt\u0131 ekleyelim.",
        svg: `<ellipse cx="268" cy="206" rx="16" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="270" cy="206" r="11" fill="#0f172a"/><circle cx="266" cy="198" r="5" fill="#ffffff"/><circle cx="274" cy="210" r="2.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Sa\u011f Kocaman Parlak G\u00f6z",
        instruction: "Sa\u011f tarafa da ayn\u0131 kocaman parlak g\u00f6z\u00fc yerle\u015ftir.",
        voice: "Sa\u011f tarafa da ayn\u0131 tatl\u0131 par\u0131lt\u0131l\u0131 g\u00f6z\u00fc \u00e7izelim!",
        svg: `<ellipse cx="332" cy="206" rx="16" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="330" cy="206" r="11" fill="#0f172a"/><circle cx="326" cy="198" r="5" fill="#ffffff"/><circle cx="334" cy="210" r="2.5" fill="#ffffff"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Tatl\u0131 G\u00fcl\u00fcmseme ve Pembe Yanaklar",
        instruction: "G\u00f6zlerin ortas\u0131na kedi g\u00fcl\u00fcmsemesi ve yanaklar\u0131na pembe all\u0131k ovali ekle.",
        voice: "Y\u00fcz\u00fcne sevimli bir g\u00fcl\u00fcmseme ve iki yana pembe utanga\u00e7 yanak daireleri kondural\u0131m.",
        svg: `<path d="M 288 232 Q 300 242, 312 232" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/><ellipse cx="242" cy="226" rx="10" ry="6" fill="none" stroke="#0f172a" stroke-width="4"/><ellipse cx="358" cy="226" rx="10" ry="6" fill="none" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Armut \u015eeklinde Tombi\u015f G\u00f6bek",
        instruction: "Ba\u015f\u0131n alt\u0131na yumu\u015fak tombul bir bebek g\u00f6vdesi \u00e7iz.",
        voice: "Ba\u015f\u0131n\u0131n alt\u0131na k\u00fc\u00e7\u00fck, tombul ve \u00e7ok sevimli g\u00f6vdesini \u00e7izelim.",
        svg: `<path d="M 262 268 C 235 305, 240 375, 300 378 C 360 375, 365 305, 338 268" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: G\u00f6bekteki Krem Desen Ovali",
        instruction: "G\u00f6be\u011finin tam ortas\u0131na \u015firin yumu\u015fak bir oval g\u00f6bek lekesi ekle.",
        voice: "G\u00f6be\u011finin tam ortas\u0131na b\u00fcy\u00fck bir oval g\u00f6bek deseni yapal\u0131m.",
        svg: `<ellipse cx="300" cy="328" rx="28" ry="30" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Boyun Band\u0131 / Papyon S\u00fcs\u00fc",
        instruction: "Boynunun \u00f6n\u00fcne tatl\u0131 sar\u0131 g\u00f6\u011f\u00fcs yamas\u0131 k\u0131vr\u0131m\u0131n\u0131 ekle.",
        voice: "Boynunun \u00f6n taraf\u0131na minik yumu\u015fak g\u00f6\u011f\u00fcs \u00e7izgisini \u00e7izelim.",
        svg: `<path d="M 272 272 Q 300 288, 328 272" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Ne\u015feyle A\u00e7\u0131lan Sol Kol",
        instruction: "Sol tarafa do\u011fru tombul ve k\u00fct bir kol \u00e7iz, ucunu ay\u0131r.",
        voice: "Sol taraf\u0131na do\u011fru el sallar gibi a\u00e7\u0131lan k\u0131sa tombul kolunu \u00e7izelim.",
        svg: `<path d="M 252 292 C 218 285, 198 302, 206 322 C 215 335, 236 325, 248 318" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 218 296 Q 225 310, 222 325" stroke="#0f172a" stroke-width="5" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Ne\u015feyle A\u00e7\u0131lan Sa\u011f Kol",
        instruction: "Sa\u011f tarafa da e\u015fle\u015fen tombi\u015f kolu ve sar\u0131 el ucu \u00e7izgisini ekle.",
        voice: "Sa\u011f tarafa da ayn\u0131 tatl\u0131 k\u0131sa kolunu \u00e7izelim.",
        svg: `<path d="M 348 292 C 382 285, 402 302, 394 322 C 385 335, 364 325, 352 318" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 382 296 Q 375 310, 378 325" stroke="#0f172a" stroke-width="5" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Sol Tombi\u015f Ayak",
        instruction: "G\u00f6vdenin sol alt\u0131na yuvarlak sevimli aya\u011f\u0131n\u0131 \u00e7iz ve ayak ucunu b\u00f6l.",
        voice: "Alt\u0131na havada s\u00fcz\u00fclen minik ve tombul sol aya\u011f\u0131n\u0131 yapal\u0131m.",
        svg: `<ellipse cx="265" cy="398" rx="22" ry="16" fill="none" stroke="#0f172a" stroke-width="9" transform="rotate(-15 265 398)"/><path d="M 255 385 L 258 412" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Sa\u011f Tombi\u015f Ayak",
        instruction: "Sa\u011f alt\u0131na da e\u015fle\u015fen tombul aya\u011f\u0131n\u0131 \u00e7iz.",
        voice: "Sa\u011f tarafa da ayn\u0131 tombul sa\u011f aya\u011f\u0131n\u0131 ekleyelim.",
        svg: `<ellipse cx="335" cy="398" rx="22" ry="16" fill="none" stroke="#0f172a" stroke-width="9" transform="rotate(15 335 398)"/><path d="M 345 385 L 342 412" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Minik Melek Kanad\u0131 (Sol)",
        instruction: "S\u0131rt\u0131n\u0131n sol yan\u0131na tatl\u0131 bir yuvarlak bebek melek kanad\u0131 \u00e7iz.",
        voice: "S\u0131rt\u0131na u\u00e7abilmesi i\u00e7in sevimli k\u00fc\u00e7\u00fck melek kanad\u0131 \u00e7izelim!",
        svg: `<path d="M 248 312 C 202 275, 185 315, 222 335" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Minik Melek Kanad\u0131 (Sa\u011f)",
        instruction: "Sa\u011f yan\u0131na da k\u00fc\u00e7\u00fck kanad\u0131 \u00e7iz.",
        voice: "Sa\u011f s\u0131rt\u0131na da e\u015fle\u015fen di\u011fer kanad\u0131n\u0131 kondural\u0131m.",
        svg: `<path d="M 352 312 C 398 275, 415 315, 378 335" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Tatl\u0131 Kuyruk Ucu",
        instruction: "Alt\u0131na minik yuvarlak bir bebek kuyru\u011fu ekle.",
        voice: "G\u00f6vdenin arkas\u0131na minik nokta kuyru\u011funu kondural\u0131m.",
        svg: `<circle cx="300" cy="382" r="9" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Yan\u0131ndaki Parlayan Alt\u0131n Y\u00fcz\u00fck",
        instruction: "Bebek Chao'nun yan\u0131na onunla oynad\u0131\u011f\u0131 b\u00fcy\u00fck bir Alt\u0131n Y\u00fcz\u00fck \u00e7iz.",
        voice: "Bebek Chao'nun yan\u0131na oynamas\u0131 i\u00e7in parlak bir Sonic Alt\u0131n Y\u00fcz\u00fc\u011f\u00fc \u00e7izelim!",
        svg: `<circle cx="145" cy="385" r="28" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="145" cy="385" r="15" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: U\u00e7an Kalpler ve Y\u0131ld\u0131z Par\u0131lt\u0131lar\u0131",
        instruction: "Sihirli topun etraf\u0131na ne\u015fe y\u0131ld\u0131zlar\u0131 \u00e7iz.",
        voice: "Sihirli alt\u0131n topunun etraf\u0131na p\u0131r\u0131l p\u0131r\u0131l par\u0131lt\u0131 y\u0131ld\u0131zlar\u0131 ekleyelim.",
        svg: `<path d="M 355 82 L 355 102 M 345 92 L 365 92 M 245 85 L 245 105 M 235 95 L 255 95" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_chao/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (\u015eeker Mavisi Bebek Chao!)",
        instruction: "Tebrikler K\u0131van\u00e7! Bebek Chao'yu g\u00f6k mavisi, alt\u0131n sar\u0131 topu ve pembe yanaklar\u0131yla canland\u0131r!",
        voice: "\u00c7ok \u015firin oldu K\u0131van\u00e7! Bebek Chao s\u00fcz\u00fcl\u00fcyor! \u015eimdi onu g\u00f6k mavisi, alt\u0131n sar\u0131s\u0131 el-ayak u\u00e7lar\u0131 ve pembe yanaklar\u0131yla \u0131\u015f\u0131l \u0131\u015f\u0131l boya!",
        svg: `
          <defs>
            <linearGradient id="chaoBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#bae6fd"/>
              <stop offset="50%" stop-color="#38bdf8"/>
              <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
            <linearGradient id="chaoGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
          </defs>
          <path d="M 145 357 A 28 28 0 1 0 145 413 A 28 28 0 1 0 145 357 Z M 145 370 A 15 15 0 1 1 145 400 A 15 15 0 1 1 145 370 Z" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 355 82 L 355 102 M 345 92 L 365 92 M 245 85 L 245 105 M 235 95 L 255 95" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <path d="M 248 312 C 202 275, 185 315, 222 335 Z" fill="#f43f5e" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 352 312 C 398 275, 415 315, 378 335 Z" fill="#f43f5e" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="265" cy="398" rx="22" ry="16" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="9" transform="rotate(-15 265 398)"/>
          <ellipse cx="335" cy="398" rx="22" ry="16" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="9" transform="rotate(15 335 398)"/>
          <path d="M 262 268 C 235 305, 240 375, 300 378 C 360 375, 365 305, 338 268 Z" fill="url(#chaoBlue)" stroke="#0f172a" stroke-width="10"/>
          <ellipse cx="300" cy="328" rx="28" ry="30" fill="#fef9c3" stroke="#0f172a" stroke-width="6"/>
          <path d="M 252 292 C 218 285, 198 302, 206 322 C 215 335, 236 325, 248 318 Z" fill="url(#chaoBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 222 292 C 208 295, 202 310, 206 322 C 212 328, 220 326, 224 322 Z" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="4"/>
          <path d="M 348 292 C 382 285, 402 302, 394 322 C 385 335, 364 325, 352 318 Z" fill="url(#chaoBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 378 292 C 392 295, 398 310, 394 322 C 388 328, 380 326, 376 322 Z" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="4"/>
          <circle cx="300" cy="86" r="18" fill="url(#chaoGold)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 225 225 C 215 160, 275 145, 300 118 C 325 145, 385 160, 375 225 C 370 272, 230 272, 225 225 Z" fill="url(#chaoBlue)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <ellipse cx="268" cy="206" rx="16" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="270" cy="206" r="11" fill="#0f172a"/>
          <circle cx="266" cy="198" r="5" fill="#ffffff"/>
          <circle cx="274" cy="210" r="2.5" fill="#ffffff"/>
          <ellipse cx="332" cy="206" rx="16" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="330" cy="206" r="11" fill="#0f172a"/>
          <circle cx="326" cy="198" r="5" fill="#ffffff"/>
          <circle cx="334" cy="210" r="2.5" fill="#ffffff"/>
          <ellipse cx="242" cy="226" rx="10" ry="6" fill="#fda4af"/>
          <ellipse cx="358" cy="226" rx="10" ry="6" fill="#fda4af"/>
          <path d="M 288 232 Q 300 242, 312 232" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>
`,
        audio: "audio/voices/cirak_sonic_chao/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // ⚡ KİRPİ SONİC DÜNYASI: SPIN DASH TOPU SONIC
  // =========================================================================
  {
    id: "cirak_sonic_spindash",
    categoryId: "sonic",
    name: "Spin Dash Topu Sonic",
    emoji: "\ud83c\udf00",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Sonic'in durdurulamaz s\u00fcper d\u00f6nen top sald\u0131r\u0131s\u0131! Dikenli enerji \u00e7ark\u0131, toz bulutlar\u0131 ve s\u0131\u00e7rayan alt\u0131n y\u00fcz\u00fckler!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, parlak mavi, cam g\u00f6be\u011fi, ye\u015fil, kahverengi ve alt\u0131n boyalar",
    welcomeText: "Z\u0131\u0131\u0131\u0131rrt! Merhaba K\u0131van\u00e7! Sonic'in en h\u0131zl\u0131 sald\u0131r\u0131s\u0131 olan d\u00f6nen Spin Dash topunu \u00e7izmeye haz\u0131r m\u0131s\u0131n? F\u0131rt\u0131na gibi d\u00f6nece\u011fiz!",
    welcomeAudio: "audio/voices/cirak_sonic_spindash/welcome.mp3",
    colors: ["#2563eb", "#38bdf8", "#facc15", "#22c55e"],
    previewSvg: `
          <defs>
            <linearGradient id="spinBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#60a5fa"/>
              <stop offset="50%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1e40af"/>
            </linearGradient>
            <linearGradient id="spinGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>
          <path d="M 55 455 Q 300 438, 545 455 L 545 515 L 55 515 Z" fill="#b45309" stroke="#0f172a" stroke-width="6"/>
          <path d="M 120 450 L 120 515 L 160 515 L 160 448 Z" fill="#d97706" opacity="0.6"/>
          <path d="M 200 446 L 200 515 L 240 515 L 240 445 Z" fill="#d97706" opacity="0.6"/>
          <path d="M 280 444 L 280 515 L 320 515 L 320 444 Z" fill="#d97706" opacity="0.6"/>
          <path d="M 360 444 L 360 515 L 400 515 L 400 446 Z" fill="#d97706" opacity="0.6"/>
          <path d="M 440 448 L 440 515 L 480 515 L 480 450 Z" fill="#d97706" opacity="0.6"/>
          <path d="M 55 435 Q 300 418, 545 435 L 545 455 Q 300 438, 55 455 Z" fill="#22c55e" stroke="#0f172a" stroke-width="7"/>
          <line x1="90" y1="432" x2="90" y2="405" stroke="#15803d" stroke-width="5"/>
          <circle cx="90" cy="396" r="8" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <line x1="75" y1="220" x2="175" y2="220" stroke="#38bdf8" stroke-width="7" stroke-linecap="round"/>
          <line x1="55" y1="265" x2="150" y2="265" stroke="#38bdf8" stroke-width="7" stroke-linecap="round"/>
          <path d="M 215 390 C 180 395, 165 375, 175 355 C 145 358, 125 332, 145 312 C 122 308, 118 282, 142 272 C 175 265, 225 330, 215 390 Z" fill="#f8fafc" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="105" cy="365" r="14" fill="#f8fafc" stroke="#0f172a" stroke-width="7"/>
          <circle cx="75" cy="345" r="9" fill="#f8fafc" stroke="#0f172a" stroke-width="6"/>
          <path d="M 285 204 L 255 152 L 320 198 L 322 142 L 352 204 L 385 160 L 382 222 L 435 215 L 402 265 L 452 285 L 395 318 L 428 362 L 365 352 L 358 408 L 315 370 L 275 405 L 270 355 L 222 365 L 245 312 L 202 288 L 240 258 L 208 212 L 265 218 Z" fill="url(#spinBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="320" cy="285" r="82" fill="url(#spinBlue)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 265 265 C 285 230, 355 230, 375 270 C 385 310, 345 350, 295 340" fill="none" stroke="#93c5fd" stroke-width="8" stroke-linecap="round"/>
          <path d="M 290 285 C 300 265, 340 265, 345 290" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>
          <path d="M 235 190 C 175 230, 175 355, 255 395" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
          <path d="M 435 190 Q 470 250, 445 315" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M 505 317 A 28 28 0 1 0 505 373 A 28 28 0 1 0 505 317 Z M 505 330 A 15 15 0 1 1 505 360 A 15 15 0 1 1 505 330 Z" fill="url(#spinGold)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 515 223 A 22 22 0 1 0 515 267 A 22 22 0 1 0 515 223 Z M 515 234 A 11 11 0 1 1 515 256 A 11 11 0 1 1 515 234 Z" fill="url(#spinGold)" stroke="#0f172a" stroke-width="5"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: B\u00fcy\u00fck D\u00f6nen Merkez \u00c7ember",
        instruction: "Sayfan\u0131n ortas\u0131na Sonic'in d\u00f6nen top g\u00f6vdesi i\u00e7in b\u00fcy\u00fck bir daire \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n tam ortas\u0131na Sonic'in f\u0131rt\u0131na gibi d\u00f6nen kocaman top g\u00f6vdesi dairesini \u00e7izelim.",
        svg: `<circle cx="320" cy="285" r="85" fill="none" stroke="#0f172a" stroke-width="10"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: \u00dcstten F\u0131\u015fk\u0131ran D\u00f6nen Dikenler",
        instruction: "\u00c7emberin \u00fcst k\u0131sm\u0131ndan r\u00fczgar y\u00f6n\u00fcnde geriye e\u011filmi\u015f 3 sivri diken yap.",
        voice: "\u00c7emberin \u00fcst k\u0131sm\u0131ndan f\u0131r\u0131l f\u0131r\u0131l d\u00f6nd\u00fc\u011f\u00fcn\u00fc g\u00f6steren sivri dikenlerini \u00e7izelim!",
        svg: `<path d="M 285 204 L 255 152 L 320 198 L 322 142 L 352 204 L 385 160 L 382 222" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Yanlardan ve Alttan \u00c7\u0131kan Testere Dikenleri",
        instruction: "Dairenin sa\u011f\u0131na, alt\u0131na ve soluna da d\u00f6nen keskin dikenleri tamamla.",
        voice: "\u015eimdi dairenin sa\u011f\u0131ndan ve alt\u0131ndan d\u00f6nen testere gibi keskin dikenlerini tamamlayal\u0131m.",
        svg: `<path d="M 382 222 L 435 215 L 402 265 L 452 285 L 395 318 L 428 362 L 365 352" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Arka Taraf\u0131n Dikenleri",
        instruction: "Dairenin sol alt ve sol \u00fcst taraf\u0131ndaki son dikenleri ekle.",
        voice: "Sol taraftaki son d\u00f6nen dikenleri de ekleyip h\u0131z \u00e7ark\u0131m\u0131z\u0131 tamamlayal\u0131m.",
        svg: `<path d="M 365 352 L 358 408 L 315 370 L 275 405 L 270 355 L 222 365 L 245 312 L 202 288 L 240 258 L 208 212 L 265 218" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: \u0130\u00e7indeki H\u0131zl\u0131 D\u00f6nme Halkalar\u0131",
        instruction: "Dairenin i\u00e7ine d\u00f6n\u00fc\u015f h\u0131z\u0131n\u0131 g\u00f6steren i\u00e7 i\u00e7e k\u0131vr\u0131ml\u0131 yay \u00e7izgileri \u00e7ek.",
        voice: "Topun \u00e7ok h\u0131zl\u0131 d\u00f6nd\u00fc\u011f\u00fcn\u00fc g\u00f6stermek i\u00e7in i\u00e7ine sarmal hareket halkalar\u0131 \u00e7izelim.",
        svg: `<path d="M 265 265 C 285 230, 355 230, 375 270 C 385 310, 345 350, 295 340" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><path d="M 290 285 C 300 265, 340 265, 345 290" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: K\u0131vr\u0131lan H\u0131z \u0130zi (Swoosh)",
        instruction: "Topun etraf\u0131nda \u0131\u015f\u0131ldayan uzun k\u0131vr\u0131ml\u0131 enerji \u015feridini yap.",
        voice: "Topun etraf\u0131n\u0131 saran \u015f\u0131k bir h\u0131z \u015feridi yay\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 235 190 C 175 230, 175 355, 255 395" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Arkadan F\u0131rlayan Toz Bulutlar\u0131 (B\u00fcy\u00fck)",
        instruction: "Topun sol arkas\u0131na tekerleklerin kald\u0131rd\u0131\u011f\u0131 kabar\u0131k h\u0131z toz bulutunu \u00e7iz.",
        voice: "Yeri kaz\u0131y\u0131p f\u0131rlad\u0131\u011f\u0131 i\u00e7in arkas\u0131ndan \u00e7\u0131kan pofuduk toz bulutlar\u0131n\u0131 \u00e7izelim!",
        svg: `<path d="M 215 390 C 180 395, 165 375, 175 355 C 145 358, 125 332, 145 312 C 122 308, 118 282, 142 272" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Minik Toz Topaklar\u0131",
        instruction: "B\u00fcy\u00fck bulutun arkas\u0131na havaya s\u0131\u00e7ram\u0131\u015f iki minik toz yuvarla\u011f\u0131 ekle.",
        voice: "Arkaya do\u011fru s\u0131\u00e7rayan iki minik beyaz toz baloncu\u011fu daha yapal\u0131m.",
        svg: `<circle cx="105" cy="365" r="14" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="75" cy="345" r="9" fill="none" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: U\u00e7u\u015fan Elektrik K\u0131v\u0131lc\u0131mlar\u0131",
        instruction: "D\u00f6nen topun etraf\u0131na f\u0131rlayan 3 sivri k\u0131v\u0131lc\u0131m y\u0131ld\u0131z\u0131 \u00e7iz.",
        voice: "S\u00fcrt\u00fcnmeden f\u0131rlayan \u00fc\u00e7 tane sivri mavi elektrik k\u0131v\u0131lc\u0131m\u0131 ekleyelim.",
        svg: `<path d="M 215 170 L 185 155 M 445 175 L 472 158 M 475 290 L 510 288" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: \u0130leri F\u0131rlayan R\u00fczgar \u00c7izgileri",
        instruction: "Sa\u011fa do\u011fru h\u0131zla f\u0131rlad\u0131\u011f\u0131n\u0131 g\u00f6steren paralel r\u00fczgar \u00e7izgileri yap.",
        voice: "Sol taraftan sa\u011fa do\u011fru h\u0131zla u\u00e7tu\u011funu g\u00f6steren uzun \u015ferit \u00e7izgilerini \u00e7ekelim.",
        svg: `<line x1="75" y1="220" x2="175" y2="220" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><line x1="55" y1="265" x2="150" y2="265" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Green Hill \u00c7im Zemini (\u00dcst \u00c7izgi)",
        instruction: "Alt tarafa \u00fcnl\u00fc Green Hill ye\u015fil \u00e7imen zeminini dalgal\u0131 \u00e7iz.",
        voice: "Alt\u0131na Sonic'in me\u015fhur Green Hill ye\u015fil \u00e7imen pistini \u00e7izelim!",
        svg: `<path d="M 55 435 Q 300 418, 545 435" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Green Hill Damal\u0131 Toprak Kareleri",
        instruction: "\u00c7imenin alt\u0131na Green Hill'in klasik kareli damal\u0131 toprak desenini \u00e7iz.",
        voice: "\u00c7imenin alt\u0131na Green Hill'in \u00fcnl\u00fc kareli damal\u0131 toprak \u00e7izgilerini \u00e7ekelim!",
        svg: `<path d="M 55 455 Q 300 438, 545 455" stroke="#0f172a" stroke-width="6" fill="none"/><line x1="120" y1="450" x2="120" y2="510" stroke="#0f172a" stroke-width="5"/><line x1="200" y1="446" x2="200" y2="510" stroke="#0f172a" stroke-width="5"/><line x1="280" y1="444" x2="280" y2="510" stroke="#0f172a" stroke-width="5"/><line x1="360" y1="444" x2="360" y2="510" stroke="#0f172a" stroke-width="5"/><line x1="440" y1="448" x2="440" y2="510" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Birinci Alt\u0131n Y\u00fcz\u00fck (\u00d6nde)",
        instruction: "Sa\u011f tarafa Sonic'in yakalamak \u00fczere oldu\u011fu b\u00fcy\u00fck bir alt\u0131n y\u00fcz\u00fck \u00e7iz.",
        voice: "\u00d6n\u00fcne yakalamak \u00fczere oldu\u011fu parlak bir Alt\u0131n Y\u00fcz\u00fck kondural\u0131m!",
        svg: `<circle cx="505" cy="345" r="28" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="505" cy="345" r="15" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: \u0130kinci K\u00fc\u00e7\u00fck Alt\u0131n Y\u00fcz\u00fck",
        instruction: "\u00dcst\u00fcne daha k\u00fc\u00e7\u00fck ikinci bir alt\u0131n y\u00fcz\u00fck halkas\u0131 yap.",
        voice: "Biraz \u00fcst\u00fcne ikinci bir Alt\u0131n Y\u00fcz\u00fck daha ekleyelim.",
        svg: `<circle cx="515" cy="245" r="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="515" cy="245" r="11" fill="none" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Ayak \u0130zi / Top S\u00fcrt\u00fcnme I\u015f\u0131\u011f\u0131",
        instruction: "Topun yere de\u011fdi\u011fi yere k\u00fc\u00e7\u00fck f\u0131rlayan kum k\u0131v\u0131lc\u0131mlar\u0131 \u00e7iz.",
        voice: "Topun yere de\u011fdi\u011fi noktaya h\u0131z k\u0131v\u0131lc\u0131mlar\u0131 ekleyelim.",
        svg: `<circle cx="385" cy="415" r="4" fill="#0f172a"/><circle cx="408" cy="405" r="5" fill="#0f172a"/><circle cx="425" cy="418" r="3.5" fill="#0f172a"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: D\u0131\u015f \u015eok Dalgas\u0131 Yaylar\u0131",
        instruction: "D\u00f6nen topun sa\u011f\u0131na \u015fok dalgas\u0131 yar\u0131m ay \u00e7izgisi \u00e7ek.",
        voice: "\u00d6n taraf\u0131na havay\u0131 yard\u0131\u011f\u0131n\u0131 g\u00f6steren iki yay \u00e7izgisi ekleyelim.",
        svg: `<path d="M 435 190 Q 470 250, 445 315" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Palmiye Yapra\u011f\u0131 veya \u00c7i\u00e7ek",
        instruction: "\u00c7imlerin sol kenar\u0131na Green Hill'in me\u015fhur sevimli \u00e7i\u00e7e\u011fini ekle.",
        voice: "\u00c7imlerin kenar\u0131na tatl\u0131 bir Green Hill \u00e7i\u00e7e\u011fi yapal\u0131m.",
        svg: `<line x1="90" y1="432" x2="90" y2="405" stroke="#0f172a" stroke-width="5"/><circle cx="90" cy="396" r="8" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_spindash/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (\u015eim\u015fek Mavisi Spin Dash & Green Hill!)",
        instruction: "Tebrikler K\u0131van\u00e7! D\u00f6nen Spin Dash'i elektrik mavisi, Green Hill'i ye\u015fil-kahverengi ve y\u00fcz\u00fckleri alt\u0131n sar\u0131s\u0131 boya!",
        voice: "\u0130nan\u0131lmaz h\u0131zl\u0131 oldu K\u0131van\u00e7! Spin Dash Sonic yeri g\u00f6\u011f\u00fc inletiyor! \u015eimdi onu parlak mavi, ye\u015fil \u00e7imler ve alt\u0131n y\u00fcz\u00fcklerle canland\u0131r!",
        svg: `
          <defs>
            <linearGradient id="spinBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#60a5fa"/>
              <stop offset="50%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1e40af"/>
            </linearGradient>
            <linearGradient id="spinGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>
          <path d="M 55 455 Q 300 438, 545 455 L 545 515 L 55 515 Z" fill="#b45309" stroke="#0f172a" stroke-width="6"/>
          <path d="M 120 450 L 120 515 L 160 515 L 160 448 Z" fill="#d97706" opacity="0.6"/>
          <path d="M 200 446 L 200 515 L 240 515 L 240 445 Z" fill="#d97706" opacity="0.6"/>
          <path d="M 280 444 L 280 515 L 320 515 L 320 444 Z" fill="#d97706" opacity="0.6"/>
          <path d="M 360 444 L 360 515 L 400 515 L 400 446 Z" fill="#d97706" opacity="0.6"/>
          <path d="M 440 448 L 440 515 L 480 515 L 480 450 Z" fill="#d97706" opacity="0.6"/>
          <path d="M 55 435 Q 300 418, 545 435 L 545 455 Q 300 438, 55 455 Z" fill="#22c55e" stroke="#0f172a" stroke-width="7"/>
          <line x1="90" y1="432" x2="90" y2="405" stroke="#15803d" stroke-width="5"/>
          <circle cx="90" cy="396" r="8" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <line x1="75" y1="220" x2="175" y2="220" stroke="#38bdf8" stroke-width="7" stroke-linecap="round"/>
          <line x1="55" y1="265" x2="150" y2="265" stroke="#38bdf8" stroke-width="7" stroke-linecap="round"/>
          <path d="M 215 390 C 180 395, 165 375, 175 355 C 145 358, 125 332, 145 312 C 122 308, 118 282, 142 272 C 175 265, 225 330, 215 390 Z" fill="#f8fafc" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="105" cy="365" r="14" fill="#f8fafc" stroke="#0f172a" stroke-width="7"/>
          <circle cx="75" cy="345" r="9" fill="#f8fafc" stroke="#0f172a" stroke-width="6"/>
          <path d="M 285 204 L 255 152 L 320 198 L 322 142 L 352 204 L 385 160 L 382 222 L 435 215 L 402 265 L 452 285 L 395 318 L 428 362 L 365 352 L 358 408 L 315 370 L 275 405 L 270 355 L 222 365 L 245 312 L 202 288 L 240 258 L 208 212 L 265 218 Z" fill="url(#spinBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="320" cy="285" r="82" fill="url(#spinBlue)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 265 265 C 285 230, 355 230, 375 270 C 385 310, 345 350, 295 340" fill="none" stroke="#93c5fd" stroke-width="8" stroke-linecap="round"/>
          <path d="M 290 285 C 300 265, 340 265, 345 290" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>
          <path d="M 235 190 C 175 230, 175 355, 255 395" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
          <path d="M 435 190 Q 470 250, 445 315" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M 505 317 A 28 28 0 1 0 505 373 A 28 28 0 1 0 505 317 Z M 505 330 A 15 15 0 1 1 505 360 A 15 15 0 1 1 505 330 Z" fill="url(#spinGold)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 515 223 A 22 22 0 1 0 515 267 A 22 22 0 1 0 515 223 Z M 515 234 A 11 11 0 1 1 515 256 A 11 11 0 1 1 515 234 Z" fill="url(#spinGold)" stroke="#0f172a" stroke-width="5"/>
`,
        audio: "audio/voices/cirak_sonic_spindash/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // ⚡ KİRPİ SONİC DÜNYASI: SONIC YARIŞ ARABASI
  // =========================================================================
  {
    id: "cirak_sonic_arabasi",
    categoryId: "sonic",
    name: "Sonic Yar\u0131\u015f Arabas\u0131",
    emoji: "\ud83c\udfce\ufe0f",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "Sonic'in mavi turbo spor arabas\u0131 Speed Star! Direksiyonda g\u00fcl\u00fcmseyen Sonic, alt\u0131n y\u0131ld\u0131zl\u0131 kaput ve roket egzozu!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, kobalt mavisi, alt\u0131n sar\u0131s\u0131, beyaz ve k\u0131rm\u0131z\u0131 boyalar",
    welcomeText: "V\u0131\u0131\u0131\u0131n v\u0131\u0131\u0131n! Merhaba K\u0131van\u00e7! Sonic'in s\u00fcper h\u0131zl\u0131 mavi yar\u0131\u015f arabas\u0131 Speed Star ile b\u00fcy\u00fck yar\u0131\u015fa kat\u0131lmaya haz\u0131r m\u0131s\u0131n?",
    welcomeAudio: "audio/voices/cirak_sonic_arabasi/welcome.mp3",
    colors: ["#2563eb", "#ffffff", "#facc15", "#ef4444"],
    previewSvg: `
          <defs>
            <linearGradient id="carSonicBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#60a5fa"/>
              <stop offset="50%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1e40af"/>
            </linearGradient>
            <linearGradient id="carGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>
          <line x1="45" y1="438" x2="555" y2="438" stroke="#334155" stroke-width="10" stroke-linecap="round"/>
          <line x1="80" y1="460" x2="170" y2="460" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="250" y1="460" x2="350" y2="460" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="430" y1="460" x2="520" y2="460" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="80" y1="195" x2="155" y2="195" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
          <line x1="65" y1="225" x2="140" y2="225" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
          <path d="M 85 342 L 35 335 L 55 348 L 28 355 L 58 362 L 42 372 L 85 360 Z" fill="#f97316" stroke="#facc15" stroke-width="4" stroke-linejoin="round"/>
          <rect x="85" y="340" width="25" height="22" rx="4" fill="#64748b" stroke="#0f172a" stroke-width="7"/>
          <path d="M 248 210 C 275 185, 322 202, 320 245 C 300 265, 255 262, 232 252 C 205 260, 180 262, 165 255 C 185 245, 200 238, 212 232 C 185 232, 168 228, 160 220 C 182 212, 202 208, 222 208 C 202 195, 192 185, 185 178 C 208 182, 232 192, 248 210 Z" fill="url(#carSonicBlue)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 246 205 L 236 172 L 266 192 Z" fill="url(#carSonicBlue)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 255 238 C 254 208, 285 206, 295 224 C 304 208, 320 212, 318 238 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <circle cx="282" cy="225" r="5.5" fill="#0f172a"/>
          <circle cx="280" cy="223" r="2" fill="#ffffff"/>
          <circle cx="308" cy="225" r="5" fill="#0f172a"/>
          <circle cx="306" cy="223" r="1.8" fill="#ffffff"/>
          <path d="M 248 250 C 252 236, 305 234, 320 245 C 312 268, 260 266, 248 250 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="322" cy="240" rx="8" ry="5.5" fill="#0f172a"/>
          <path d="M 272 252 Q 295 260, 308 250" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <path d="M 335 295 L 302 252 L 265 252 L 250 298 Z" fill="#93c5fd" opacity="0.65" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="304" cy="276" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 145 315 L 125 255 L 70 250 L 95 288 L 125 292 L 130 315 Z" fill="url(#carGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 330 295 C 390 295, 470 310, 515 345 L 480 370 L 110 370 L 105 320 L 220 300 Z" fill="url(#carSonicBlue)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 150 332 L 465 336 L 465 348 L 150 344 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <path d="M 465 370 L 525 362 L 515 345 Z" fill="#ef4444" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <polygon points="335,315 340,327 352,327 342,334 346,346 335,338 324,346 328,334 318,327 330,327" fill="url(#carGold)" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 455 322 L 490 330 L 478 338 L 452 332 Z" fill="#fef08a" stroke="#0f172a" stroke-width="5"/>
          <circle cx="170" cy="382" r="54" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="170" cy="382" r="29" fill="url(#carGold)" stroke="#0f172a" stroke-width="7"/>
          <circle cx="170" cy="382" r="14" fill="#1e293b" stroke="#0f172a" stroke-width="5"/>
          <circle cx="425" cy="382" r="52" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="425" cy="382" r="28" fill="url(#carGold)" stroke="#0f172a" stroke-width="7"/>
          <circle cx="425" cy="382" r="14" fill="#1e293b" stroke="#0f172a" stroke-width="5"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Arac\u0131n Aerodinamik Burun ve Kaput Hatt\u0131",
        instruction: "Sayfan\u0131n ortas\u0131na sa\u011fa bakan h\u0131zl\u0131 spor araban\u0131n burun ve \u00fcst kaput \u00e7izgisini yap.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n ortas\u0131na Speed Star yar\u0131\u015f arabam\u0131z\u0131n sivri \u00f6n burnunu ve kaput \u00e7izgisini \u00e7izelim.",
        svg: `<path d="M 330 295 C 390 295, 470 310, 515 345 L 480 370 L 110 370 L 105 320 L 220 300" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: R\u00fczgar K\u0131ran \u00d6n R\u00fczgarl\u0131k ve Yan \u015eerit",
        instruction: "\u00d6n tampon ucuna h\u0131z kanat\u00e7\u0131\u011f\u0131 ve kap\u0131ya boydan boya \u015ferit \u00e7ek.",
        voice: "\u00d6n tampona r\u00fczgar\u0131 yaran spoyler kanad\u0131 ve yan tarafa beyaz yar\u0131\u015f \u015feridi \u00e7izelim.",
        svg: `<path d="M 465 370 L 525 362 L 515 345" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="150" y1="338" x2="465" y2="342" stroke="#0f172a" stroke-width="6"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Arka Kanatl\u0131 Dev Alt\u0131n Spoyler",
        instruction: "Arac\u0131n arkas\u0131na y\u00fcksek ve haval\u0131 yar\u0131\u015f spoylerini \u00e7iz.",
        voice: "Arka k\u0131sm\u0131na h\u0131z\u0131 kontrol eden y\u00fcksek yar\u0131\u015f arabas\u0131 kanat spoylerini \u00e7izelim!",
        svg: `<path d="M 145 315 L 125 255 L 70 250 L 95 288 L 125 292 L 130 315" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: \u00d6n \u00c7er\u00e7eveli Yar\u0131\u015f Cam\u0131 (Kokpit)",
        instruction: "Kaputun arkas\u0131na \u015feffaf spor araba \u00f6n cam\u0131n\u0131 yerle\u015ftir.",
        voice: "Kaputun arkas\u0131na Sonic'i r\u00fczgardan koruyan yat\u0131k \u00f6n cam\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 335 295 L 302 252 L 265 252 L 250 298" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Kokpitteki Kirpi Sonic'in Ba\u015f\u0131 ve Dikenleri",
        instruction: "Cam\u0131n arkas\u0131na ba\u015f\u0131n\u0131 \u00e7\u0131karm\u0131\u015f s\u00fcren Sonic'in yuvarlak kafas\u0131n\u0131 ve arkaya savrulan dikenlerini \u00e7iz!",
        voice: "\u0130\u015fte s\u00fcr\u00fcc\u00fc! Kokpitin i\u00e7ine ba\u015f\u0131 d\u0131\u015far\u0131 bakan Kirpi Sonic'in kafas\u0131n\u0131 ve arkaya u\u00e7u\u015fan dikenlerini \u00e7izelim!",
        svg: `<path d="M 248 210 C 275 185, 322 202, 320 245 C 300 265, 255 262, 232 252 C 205 260, 180 262, 165 255 C 185 245, 200 238, 212 232 C 185 232, 168 228, 160 220 C 182 212, 202 208, 222 208 C 202 195, 192 185, 185 178 C 208 182, 232 192, 248 210 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Sonic'in Kula\u011f\u0131, B\u00fcy\u00fck G\u00f6z\u00fc ve Burnu",
        instruction: "Sonic'e sivri kulak, kararl\u0131 yar\u0131\u015f g\u00f6z\u00fc, siyah burun ve g\u00fcl\u00fcmseme yap.",
        voice: "Sonic'e kula\u011f\u0131n\u0131, yola bakan kararl\u0131 ye\u015fil g\u00f6z\u00fcn\u00fc, siyah burnunu ve g\u00fcl\u00fcmsemesini yapal\u0131m.",
        svg: `<path d="M 246 205 L 236 172 L 266 192" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><path d="M 255 238 C 254 208, 285 206, 295 224 C 304 208, 320 212, 318 238" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="322" cy="240" rx="8" ry="5.5" fill="#0f172a"/><circle cx="282" cy="225" r="5" fill="#0f172a"/><circle cx="308" cy="225" r="4.5" fill="#0f172a"/><path d="M 272 252 Q 295 260, 308 250" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Direksiyon ve Beyaz S\u00fcr\u00fcc\u00fc Eldiveni",
        instruction: "Cam\u0131n i\u00e7ine direksiyon simidini ve tutan beyaz Sonic eldivenini ekle.",
        voice: "Ellerini \u00f6ne uzat\u0131p yar\u0131\u015f direksiyonunu tutan beyaz Sonic eldivenini \u00e7izelim.",
        svg: `<line x1="292" y1="265" x2="310" y2="292" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><circle cx="304" cy="276" r="14" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Dev \u00d6n Tekerlek ve Alt\u0131n Y\u00fcz\u00fck Jant\u0131",
        instruction: "Kaputun alt\u0131na kocaman \u00f6n lasti\u011fi ve i\u00e7inde parlayan alt\u0131n y\u00fcz\u00fck jant\u0131n\u0131 \u00e7iz.",
        voice: "\u00d6n k\u0131sma b\u00fcy\u00fck yar\u0131\u015f lasti\u011fini ve ortas\u0131na alt\u0131n y\u00fcz\u00fck \u015feklinde parlak jant \u00e7izelim!",
        svg: `<circle cx="425" cy="382" r="52" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="425" cy="382" r="28" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="425" cy="382" r="14" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Dev Arka Tekerlek ve Alt\u0131n Y\u00fcz\u00fck Jant\u0131",
        instruction: "Arka tarafa da ayn\u0131 b\u00fcy\u00fck tekerle\u011fi ve alt\u0131n y\u00fcz\u00fck jant\u0131n\u0131 yap.",
        voice: "Arka k\u0131sma da ayn\u0131 g\u00fc\u00e7l\u00fc arka tekerle\u011fi ve alt\u0131n jant\u0131n\u0131 ekleyelim.",
        svg: `<circle cx="170" cy="382" r="54" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="170" cy="382" r="29" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="170" cy="382" r="14" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Kaput \u00dczeri Alt\u0131n Y\u0131ld\u0131z Amblemi",
        instruction: "Araban\u0131n yan \u00f6n kap\u0131s\u0131na Speed Star'\u0131n \u00fcnl\u00fc y\u0131ld\u0131z amblemini yap.",
        voice: "Kap\u0131n\u0131n \u00f6n\u00fcne Speed Star arabas\u0131n\u0131n \u00fcnl\u00fc alt\u0131n y\u0131ld\u0131z amblemini \u00e7izelim.",
        svg: `<polygon points="335,315 340,327 352,327 342,334 346,346 335,338 324,346 328,334 318,327 330,327" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Parlak Far ve Hava Giri\u015fleri",
        instruction: "\u00d6n tarafa keskin yar\u0131\u015f far\u0131n\u0131 ve yan hava \u0131zgaras\u0131n\u0131 \u00e7iz.",
        voice: "\u00d6n burnuna parlak yar\u0131\u015f far\u0131n\u0131 ve yan motor hava \u0131zgaras\u0131n\u0131 yapal\u0131m.",
        svg: `<path d="M 455 322 L 490 330 L 478 338 L 452 332 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/><path d="M 248 322 L 285 322 M 252 332 L 288 332" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Turbo Egzoz Borusu",
        instruction: "Araban\u0131n arkas\u0131ndan \u00e7\u0131kan geni\u015f turbo egzoz \u00e7\u0131k\u0131\u015f\u0131n\u0131 ekle.",
        voice: "Arka tarafa s\u00fcper h\u0131z kazand\u0131ran kal\u0131n turbo egzoz borusunu \u00e7izelim.",
        svg: `<rect x="85" y="340" width="25" height="22" rx="4" fill="none" stroke="#0f172a" stroke-width="7"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Egzozdan F\u0131\u015fk\u0131ran Mavi-Turuncu Alevler",
        instruction: "Egzozdan arkaya do\u011fru uzanan b\u00fcy\u00fck turbo roket ate\u015fini \u00e7iz.",
        voice: "Egzozdan g\u00fcr\u00fclt\u00fcyle f\u0131\u015fk\u0131ran turbo ate\u015f dillerini \u00e7izelim!",
        svg: `<path d="M 85 342 L 35 335 L 55 348 L 28 355 L 58 362 L 42 372 L 85 360" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Jant Kollar\u0131",
        instruction: "Her iki tekerlek jant\u0131n\u0131n i\u00e7ine y\u0131ld\u0131z \u015feklinde kollar \u00e7iz.",
        voice: "Tekerlek jantlar\u0131n\u0131n i\u00e7ine haval\u0131 yar\u0131\u015f kollar\u0131n\u0131 \u00e7izelim.",
        svg: `<line x1="425" y1="354" x2="425" y2="368" stroke="#0f172a" stroke-width="5"/><line x1="425" y1="396" x2="425" y2="410" stroke="#0f172a" stroke-width="5"/><line x1="170" y1="353" x2="170" y2="368" stroke="#0f172a" stroke-width="5"/><line x1="170" y1="396" x2="170" y2="411" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: \u00d6n Kaportaya Kanat \u00c7izgileri",
        instruction: "Kaput kenarlar\u0131na dinamik r\u00fczgar hatlar\u0131 ekle.",
        voice: "Arac\u0131n \u00fcst\u00fcne parlak yar\u0131\u015f \u015feridi kenar \u00e7izgisi ekleyelim.",
        svg: `<line x1="340" y1="305" x2="430" y2="318" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: R\u00fczgar H\u0131z \u00c7izgileri",
        instruction: "Sonic'in kafas\u0131n\u0131n ve spoylerin arkas\u0131na jet h\u0131z \u00e7izgileri \u00e7ek.",
        voice: "Sonic'in r\u00fczgar gibi ge\u00e7ti\u011fini g\u00f6steren h\u0131z \u00e7izgilerini arkaya \u00e7ekelim.",
        svg: `<line x1="80" y1="195" x2="155" y2="195" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="65" y1="225" x2="140" y2="225" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Yar\u0131\u015f Pisti Asfalt\u0131 ve Biti\u015f \u00c7izgisi",
        instruction: "Tekerleklerin alt\u0131na d\u00fcmd\u00fcz h\u0131zl\u0131 yar\u0131\u015f pistini \u00e7iz.",
        voice: "Tekerleklerin alt\u0131na Sonic'in rekor k\u0131rd\u0131\u011f\u0131 asfalt yar\u0131\u015f pistini \u00e7izelim.",
        svg: `<line x1="45" y1="438" x2="555" y2="438" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><line x1="80" y1="460" x2="170" y2="460" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="250" y1="460" x2="350" y2="460" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="430" y1="460" x2="520" y2="460" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_arabasi/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (Kobalt Mavisi Speed Star!)",
        instruction: "Tebrikler K\u0131van\u00e7! Sonic'in yar\u0131\u015f arabas\u0131n\u0131 parlak mavi, alt\u0131n y\u0131ld\u0131z ve roket alevleriyle renklendir!",
        voice: "\u0130nan\u0131lmaz haval\u0131 oldu K\u0131van\u00e7! Sonic'in s\u00fcper yar\u0131\u015f arabas\u0131 birinci olmaya haz\u0131r! \u015eimdi onu kobalt mavisi ve alt\u0131n jantlarla boya!",
        svg: `
          <defs>
            <linearGradient id="carSonicBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#60a5fa"/>
              <stop offset="50%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1e40af"/>
            </linearGradient>
            <linearGradient id="carGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>
          <line x1="45" y1="438" x2="555" y2="438" stroke="#334155" stroke-width="10" stroke-linecap="round"/>
          <line x1="80" y1="460" x2="170" y2="460" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="250" y1="460" x2="350" y2="460" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="430" y1="460" x2="520" y2="460" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="80" y1="195" x2="155" y2="195" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
          <line x1="65" y1="225" x2="140" y2="225" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
          <path d="M 85 342 L 35 335 L 55 348 L 28 355 L 58 362 L 42 372 L 85 360 Z" fill="#f97316" stroke="#facc15" stroke-width="4" stroke-linejoin="round"/>
          <rect x="85" y="340" width="25" height="22" rx="4" fill="#64748b" stroke="#0f172a" stroke-width="7"/>
          <path d="M 248 210 C 275 185, 322 202, 320 245 C 300 265, 255 262, 232 252 C 205 260, 180 262, 165 255 C 185 245, 200 238, 212 232 C 185 232, 168 228, 160 220 C 182 212, 202 208, 222 208 C 202 195, 192 185, 185 178 C 208 182, 232 192, 248 210 Z" fill="url(#carSonicBlue)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 246 205 L 236 172 L 266 192 Z" fill="url(#carSonicBlue)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 255 238 C 254 208, 285 206, 295 224 C 304 208, 320 212, 318 238 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <circle cx="282" cy="225" r="5.5" fill="#0f172a"/>
          <circle cx="280" cy="223" r="2" fill="#ffffff"/>
          <circle cx="308" cy="225" r="5" fill="#0f172a"/>
          <circle cx="306" cy="223" r="1.8" fill="#ffffff"/>
          <path d="M 248 250 C 252 236, 305 234, 320 245 C 312 268, 260 266, 248 250 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="322" cy="240" rx="8" ry="5.5" fill="#0f172a"/>
          <path d="M 272 252 Q 295 260, 308 250" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <path d="M 335 295 L 302 252 L 265 252 L 250 298 Z" fill="#93c5fd" opacity="0.65" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="304" cy="276" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 145 315 L 125 255 L 70 250 L 95 288 L 125 292 L 130 315 Z" fill="url(#carGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 330 295 C 390 295, 470 310, 515 345 L 480 370 L 110 370 L 105 320 L 220 300 Z" fill="url(#carSonicBlue)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 150 332 L 465 336 L 465 348 L 150 344 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <path d="M 465 370 L 525 362 L 515 345 Z" fill="#ef4444" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <polygon points="335,315 340,327 352,327 342,334 346,346 335,338 324,346 328,334 318,327 330,327" fill="url(#carGold)" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 455 322 L 490 330 L 478 338 L 452 332 Z" fill="#fef08a" stroke="#0f172a" stroke-width="5"/>
          <circle cx="170" cy="382" r="54" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="170" cy="382" r="29" fill="url(#carGold)" stroke="#0f172a" stroke-width="7"/>
          <circle cx="170" cy="382" r="14" fill="#1e293b" stroke="#0f172a" stroke-width="5"/>
          <circle cx="425" cy="382" r="52" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="425" cy="382" r="28" fill="url(#carGold)" stroke="#0f172a" stroke-width="7"/>
          <circle cx="425" cy="382" r="14" fill="#1e293b" stroke="#0f172a" stroke-width="5"/>
`,
        audio: "audio/voices/cirak_sonic_arabasi/step_18.mp3"
      },
    ]
  },

  // =========================================================================
  // ⚡ KİRPİ SONİC DÜNYASI: 7 KAOS ZÜMRÜDÜ VE YÜZÜKLER
  // =========================================================================
  {
    id: "cirak_sonic_zumrutler",
    categoryId: "sonic",
    name: "7 Kaos Z\u00fcmr\u00fcd\u00fc ve Y\u00fcz\u00fckler",
    emoji: "\ud83d\udc8e",
    level: 1,
    levelName: "\u00c7\u0131rak",
    levelBadge: "\ud83d\udfe2 \u00c7\u0131rak",
    description: "S\u00fcper Sonic g\u00fcc\u00fcn\u00fc veren g\u00f6kku\u015fa\u011f\u0131 renkli 7 Kaos Z\u00fcmr\u00fcd\u00fc, ortadaki dev Ana Z\u00fcmr\u00fct ve parlayan Alt\u0131n Y\u00fcz\u00fckler!",
    materials: "Resim ka\u011f\u0131d\u0131, kur\u015fun kalem, silgi, ye\u015fil, k\u0131rm\u0131z\u0131, mavi, sar\u0131, mor, turkuaz boyalar",
    welcomeText: "Kaos g\u00fcc\u00fc! Merhaba K\u0131van\u00e7! Sonic'in en de\u011ferli hazinelerini, rengarenk yedi Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc ve Alt\u0131n Y\u00fcz\u00fckleri birlikte \u00e7izmeye haz\u0131r m\u0131s\u0131n?",
    welcomeAudio: "audio/voices/cirak_sonic_zumrutler/welcome.mp3",
    colors: ["#22c55e", "#ef4444", "#3b82f6", "#facc15"],
    previewSvg: `
          <defs>
            <linearGradient id="masterEm" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#86efac"/>
              <stop offset="45%" stop-color="#22c55e"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
            <linearGradient id="ringGoldEm" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>
          <path d="M 300 280 L 300 230 M 265 288 L 235 245 M 335 288 L 365 245" stroke="#4ade80" stroke-width="5" stroke-dasharray="10 8" stroke-linecap="round"/>
          <path d="M 248 220 L 248 242 M 237 231 L 259 231 M 355 220 L 355 242 M 344 231 L 366 231 M 300 175 L 300 198 M 289 186 L 311 186" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <rect x="115" y="478" width="370" height="32" rx="6" fill="#64748b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 165 445 L 270 445 L 300 460 L 330 445 L 435 445 L 455 478 L 145 478 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <polygon points="240,295 360,295 405,345 300,455 195,345" fill="url(#masterEm)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <polygon points="265,315 335,315 355,345 245,345" fill="#bbf7d0" opacity="0.7" stroke="#0f172a" stroke-width="5"/>
          <path d="M 195 345 L 405 345 M 245 345 L 300 455 L 355 345 M 240 295 L 265 315 M 360 295 L 335 315" stroke="#0f172a" stroke-width="5" fill="none"/>
          <polygon points="282,92 318,92 332,110 300,144 268,110" fill="#ef4444" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="268" y1="110" x2="332" y2="110" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <polygon points="182,124 218,124 232,142 200,176 168,142" fill="#3b82f6" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="168" y1="142" x2="232" y2="142" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <polygon points="382,124 418,124 432,142 400,176 368,142" fill="#facc15" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="368" y1="142" x2="432" y2="142" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <polygon points="108,195 144,195 158,213 126,247 94,213" fill="#06b6d4" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="94" y1="213" x2="158" y2="213" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <polygon points="456,195 492,195 506,213 474,247 442,213" fill="#a855f7" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="442" y1="213" x2="506" y2="213" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <polygon points="88,288 124,288 138,306 106,340 74,306" fill="#e2e8f0" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="74" y1="306" x2="138" y2="306" stroke="#ffffff" stroke-width="4"/>
          <polygon points="476,288 512,288 526,306 494,340 462,306" fill="#22c55e" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="462" y1="306" x2="526" y2="306" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <path d="M 110 376 A 32 32 0 1 0 110 440 A 32 32 0 1 0 110 376 Z M 110 390 A 18 18 0 1 1 110 426 A 18 18 0 1 1 110 390 Z" fill="url(#ringGoldEm)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 490 376 A 32 32 0 1 0 490 440 A 32 32 0 1 0 490 376 Z M 490 390 A 18 18 0 1 1 490 426 A 18 18 0 1 1 490 390 Z" fill="url(#ringGoldEm)" stroke="#0f172a" stroke-width="6"/>
`,
    steps: [
      {
        title: "1. Ad\u0131m: Dev Ana Z\u00fcmr\u00fct\u00fcn \u00dcst Elmas Kenar\u0131",
        instruction: "Sayfan\u0131n orta alt\u0131na dev ye\u015fil Ana Z\u00fcmr\u00fct\u00fcn \u00fcst d\u00fcz tepesini ve yan omuzlar\u0131n\u0131 \u00e7iz.",
        voice: "Ka\u011f\u0131d\u0131m\u0131z\u0131n orta alt\u0131na dev ye\u015fil Ana Z\u00fcmr\u00fct\u00fcn keskin elmas tepesini \u00e7izelim.",
        svg: `<polygon points="240,295 360,295 405,345 195,345" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_1.mp3"
      },
      {
        title: "2. Ad\u0131m: Dev Ana Z\u00fcmr\u00fct\u00fcn Alt Elmas \u00dc\u00e7geni",
        instruction: "Omuzlar\u0131n alt\u0131n\u0131 a\u015fa\u011f\u0131 do\u011fru dev bir kristal ucuyla birle\u015ftir.",
        voice: "\u015eimdi elmas tepenin alt\u0131n\u0131 a\u015fa\u011f\u0131ya do\u011fru b\u00fcy\u00fck bir kristal \u00fc\u00e7geniyle birle\u015ftirelim.",
        svg: `<polygon points="195,345 405,345 300,455" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_2.mp3"
      },
      {
        title: "3. Ad\u0131m: Ana Z\u00fcmr\u00fct\u00fcn Parlayan \u0130\u00e7 Kristal Y\u00fczeyleri",
        instruction: "\u0130\u00e7ine elmas gibi parlamas\u0131 i\u00e7in keskin kristal kesim \u00e7izgilerini \u00e7iz.",
        voice: "\u0130\u00e7ine ger\u00e7ek m\u00fccevher gibi parlamas\u0131 i\u00e7in kristal kesim \u00e7izgilerini ekleyelim.",
        svg: `<polygon points="265,315 335,315 355,345 245,345" fill="none" stroke="#0f172a" stroke-width="5"/><path d="M 245 345 L 300 455 L 355 345 M 240 295 L 265 315 M 360 295 L 335 315" stroke="#0f172a" stroke-width="5" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_3.mp3"
      },
      {
        title: "4. Ad\u0131m: Ana Z\u00fcmr\u00fct\u00fcn Antik Ta\u015f Suna\u011f\u0131 (1. Basamak)",
        instruction: "Z\u00fcmr\u00fct\u00fcn oturdu\u011fu tarihi ta\u015f sunak basama\u011f\u0131n\u0131 \u00e7iz.",
        voice: "Alt\u0131na b\u00fcy\u00fck Ana Z\u00fcmr\u00fct\u00fcn durdu\u011fu antik ta\u015f basama\u011f\u0131 \u00e7izelim.",
        svg: `<path d="M 165 445 L 270 445 L 300 460 L 330 445 L 435 445 L 455 478 L 145 478 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_4.mp3"
      },
      {
        title: "5. Ad\u0131m: Alt Geni\u015f Ta\u015f Basamak",
        instruction: "Suna\u011f\u0131n alt\u0131na daha geni\u015f ikinci tarihi basama\u011f\u0131 ekle.",
        voice: "Alt\u0131na daha geni\u015f ikinci basama\u011f\u0131n\u0131 ekleyelim.",
        svg: `<rect x="115" y="478" width="370" height="32" rx="6" fill="none" stroke="#0f172a" stroke-width="8"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_5.mp3"
      },
      {
        title: "6. Ad\u0131m: Tepe Ortadaki K\u0131rm\u0131z\u0131 Kaos Z\u00fcmr\u00fcd\u00fc",
        instruction: "B\u00fcy\u00fck z\u00fcmr\u00fct\u00fcn tam \u00fcst tepesine u\u00e7an k\u0131rm\u0131z\u0131 Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc \u00e7iz.",
        voice: "\u015eimdi \u00fcstte yar\u0131m daire \u015feklinde s\u00fcz\u00fclen 6 Kaos Z\u00fcmr\u00fcd\u00fcne ba\u015flayal\u0131m! \u0130lk olarak en tepeye K\u0131rm\u0131z\u0131 Z\u00fcmr\u00fcd\u00fc \u00e7izelim.",
        svg: `<polygon points="282,92 318,92 332,110 300,144 268,110" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="268" y1="110" x2="332" y2="110" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_6.mp3"
      },
      {
        title: "7. Ad\u0131m: Sol \u00dcstteki Mavi Kaos Z\u00fcmr\u00fcd\u00fc",
        instruction: "Sol \u00fcst tarafa s\u00fcz\u00fclen Mavi Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc yap.",
        voice: "Sol \u00fcst tarafa Mavi Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc \u00e7izelim.",
        svg: `<polygon points="182,124 218,124 232,142 200,176 168,142" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="168" y1="142" x2="232" y2="142" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_7.mp3"
      },
      {
        title: "8. Ad\u0131m: Sa\u011f \u00dcstteki Sar\u0131 Kaos Z\u00fcmr\u00fcd\u00fc",
        instruction: "Sa\u011f \u00fcst tarafa parlayan Sar\u0131 Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc ekle.",
        voice: "Sa\u011f \u00fcst tarafa parlayan Sar\u0131 Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc \u00e7izelim.",
        svg: `<polygon points="382,124 418,124 432,142 400,176 368,142" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="368" y1="142" x2="432" y2="142" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_8.mp3"
      },
      {
        title: "9. Ad\u0131m: Sol Yandaki Turkuaz Kaos Z\u00fcmr\u00fcd\u00fc",
        instruction: "Daha a\u015fa\u011f\u0131da sola do\u011fru s\u00fcz\u00fclen Turkuaz Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc \u00e7iz.",
        voice: "Sol yana Turkuaz renkli d\u00f6rd\u00fcnc\u00fc Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc yapal\u0131m.",
        svg: `<polygon points="108,195 144,195 158,213 126,247 94,213" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="94" y1="213" x2="158" y2="213" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_9.mp3"
      },
      {
        title: "10. Ad\u0131m: Sa\u011f Yandaki Mor Kaos Z\u00fcmr\u00fcd\u00fc",
        instruction: "Sa\u011f yana s\u00fcz\u00fclen Mor Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc ekle.",
        voice: "Sa\u011f yana Mor renkli be\u015finci Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc yapal\u0131m.",
        svg: `<polygon points="456,195 492,195 506,213 474,247 442,213" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="442" y1="213" x2="506" y2="213" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_10.mp3"
      },
      {
        title: "11. Ad\u0131m: Sol Alttaki Parlak Beyaz Kaos Z\u00fcmr\u00fcd\u00fc",
        instruction: "Sol alt k\u00f6\u015feye yedinci beyaz-g\u00fcm\u00fc\u015f Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc \u00e7iz.",
        voice: "Sol alt tarafa g\u00fcm\u00fc\u015f beyaz\u0131 alt\u0131nc\u0131 k\u00fc\u00e7\u00fck Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc \u00e7izelim.",
        svg: `<polygon points="88,288 124,288 138,306 106,340 74,306" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="74" y1="306" x2="138" y2="306" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_11.mp3"
      },
      {
        title: "12. Ad\u0131m: Sa\u011fdaki Parlak Ye\u015fil Kaos Z\u00fcmr\u00fcd\u00fc",
        instruction: "Sa\u011f alt tarafa da parlak ye\u015fil Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc yerle\u015ftir.",
        voice: "Sa\u011f tarafa da parlak ye\u015fil Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc yerle\u015ftirip yedili tak\u0131m\u0131 tamamlayal\u0131m!",
        svg: `<polygon points="476,288 512,288 526,306 494,340 462,306" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="462" y1="306" x2="526" y2="306" stroke="#0f172a" stroke-width="4"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_12.mp3"
      },
      {
        title: "13. Ad\u0131m: Sol Yanda D\u00f6nen B\u00fcy\u00fck Alt\u0131n Y\u00fcz\u00fck",
        instruction: "Sol tarafa kocaman bir Sonic Alt\u0131n Y\u00fcz\u00fc\u011f\u00fc \u00e7iz.",
        voice: "\u015eimdi Suna\u011f\u0131n sol yan\u0131na Sonic'in b\u00fcy\u00fck Alt\u0131n Y\u00fcz\u00fc\u011f\u00fcn\u00fc \u00e7izelim!",
        svg: `<circle cx="110" cy="408" r="32" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="110" cy="408" r="18" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_13.mp3"
      },
      {
        title: "14. Ad\u0131m: Sa\u011f Yanda D\u00f6nen B\u00fcy\u00fck Alt\u0131n Y\u00fcz\u00fck",
        instruction: "Sa\u011f tarafa da ayn\u0131 \u015fekilde parlayan bir Alt\u0131n Y\u00fcz\u00fck ekle.",
        voice: "Sa\u011f yan\u0131na da ikinci kocaman Alt\u0131n Y\u00fcz\u00fc\u011f\u00fcm\u00fcz\u00fc \u00e7izelim.",
        svg: `<circle cx="490" cy="408" r="32" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="490" cy="408" r="18" fill="none" stroke="#0f172a" stroke-width="5"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_14.mp3"
      },
      {
        title: "15. Ad\u0131m: Z\u00fcmr\u00fctlerin \u0130\u00e7 Kesim \u00c7izgileri",
        instruction: "K\u00fc\u00e7\u00fck z\u00fcmr\u00fctlerin i\u00e7ine iki\u015fer elmas \u00e7izgisi \u00e7ekerek parlat.",
        voice: "K\u00fc\u00e7\u00fck z\u00fcmr\u00fctlerin i\u00e7ine keskin elmas yans\u0131malar\u0131n\u0131 \u00e7izelim.",
        svg: `<path d="M 288 110 L 300 144 L 312 110 M 188 142 L 200 176 L 212 142 M 388 142 L 400 176 L 412 142" stroke="#0f172a" stroke-width="4" fill="none"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_15.mp3"
      },
      {
        title: "16. Ad\u0131m: Enerji I\u015f\u0131n\u0131 Ba\u011flant\u0131lar\u0131",
        instruction: "Ana z\u00fcmr\u00fctten k\u00fc\u00e7\u00fck z\u00fcmr\u00fctlere uzanan enerji \u00e7izgileri \u00e7ek.",
        voice: "Ortadaki Ana Z\u00fcmr\u00fctten yukar\u0131daki z\u00fcmr\u00fctlere \u0131\u015f\u0131k \u00e7izgileri \u00e7\u0131karal\u0131m.",
        svg: `<path d="M 300 280 L 300 230 M 265 288 L 235 245 M 335 288 L 365 245" stroke="#0f172a" stroke-width="5" stroke-dasharray="10 8" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_16.mp3"
      },
      {
        title: "17. Ad\u0131m: Parlayan M\u00fccevher Y\u0131ld\u0131zlar\u0131",
        instruction: "Etraf\u0131na \u0131\u015f\u0131l \u0131\u015f\u0131l 4 k\u00f6\u015feli parlama y\u0131ld\u0131zlar\u0131 yap.",
        voice: "Z\u00fcmr\u00fctlerin parlad\u0131\u011f\u0131n\u0131 g\u00f6steren d\u00f6rt k\u00f6\u015feli y\u0131ld\u0131z \u0131\u015f\u0131klar\u0131 kondural\u0131m!",
        svg: `<path d="M 248 220 L 248 242 M 237 231 L 259 231 M 355 220 L 355 242 M 344 231 L 366 231 M 300 175 L 300 198 M 289 186 L 311 186" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_17.mp3"
      },
      {
        title: "18. Ad\u0131m: Canl\u0131 Renklendirme (G\u00f6kku\u015fa\u011f\u0131 Kaos G\u00fcc\u00fc!)",
        instruction: "Tebrikler K\u0131van\u00e7! 7 Kaos Z\u00fcmr\u00fcd\u00fcn\u00fc g\u00f6kku\u015fa\u011f\u0131 renkleriyle, Ana Z\u00fcmr\u00fct\u00fc z\u00fcmr\u00fct ye\u015filiyle boya!",
        voice: "Muhte\u015fem bir hazine oldu K\u0131van\u00e7! B\u00fct\u00fcn Kaos Z\u00fcmr\u00fctleri ve Alt\u0131n Y\u00fcz\u00fckler senin oldu! \u015eimdi onlar\u0131 g\u00f6kku\u015fa\u011f\u0131 gibi rengarenk boya!",
        svg: `
          <defs>
            <linearGradient id="masterEm" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#86efac"/>
              <stop offset="45%" stop-color="#22c55e"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
            <linearGradient id="ringGoldEm" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>
          <path d="M 300 280 L 300 230 M 265 288 L 235 245 M 335 288 L 365 245" stroke="#4ade80" stroke-width="5" stroke-dasharray="10 8" stroke-linecap="round"/>
          <path d="M 248 220 L 248 242 M 237 231 L 259 231 M 355 220 L 355 242 M 344 231 L 366 231 M 300 175 L 300 198 M 289 186 L 311 186" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <rect x="115" y="478" width="370" height="32" rx="6" fill="#64748b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 165 445 L 270 445 L 300 460 L 330 445 L 435 445 L 455 478 L 145 478 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <polygon points="240,295 360,295 405,345 300,455 195,345" fill="url(#masterEm)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <polygon points="265,315 335,315 355,345 245,345" fill="#bbf7d0" opacity="0.7" stroke="#0f172a" stroke-width="5"/>
          <path d="M 195 345 L 405 345 M 245 345 L 300 455 L 355 345 M 240 295 L 265 315 M 360 295 L 335 315" stroke="#0f172a" stroke-width="5" fill="none"/>
          <polygon points="282,92 318,92 332,110 300,144 268,110" fill="#ef4444" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="268" y1="110" x2="332" y2="110" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <polygon points="182,124 218,124 232,142 200,176 168,142" fill="#3b82f6" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="168" y1="142" x2="232" y2="142" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <polygon points="382,124 418,124 432,142 400,176 368,142" fill="#facc15" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="368" y1="142" x2="432" y2="142" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <polygon points="108,195 144,195 158,213 126,247 94,213" fill="#06b6d4" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="94" y1="213" x2="158" y2="213" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <polygon points="456,195 492,195 506,213 474,247 442,213" fill="#a855f7" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="442" y1="213" x2="506" y2="213" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <polygon points="88,288 124,288 138,306 106,340 74,306" fill="#e2e8f0" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="74" y1="306" x2="138" y2="306" stroke="#ffffff" stroke-width="4"/>
          <polygon points="476,288 512,288 526,306 494,340 462,306" fill="#22c55e" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="462" y1="306" x2="526" y2="306" stroke="#ffffff" stroke-width="4" opacity="0.7"/>
          <path d="M 110 376 A 32 32 0 1 0 110 440 A 32 32 0 1 0 110 376 Z M 110 390 A 18 18 0 1 1 110 426 A 18 18 0 1 1 110 390 Z" fill="url(#ringGoldEm)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 490 376 A 32 32 0 1 0 490 440 A 32 32 0 1 0 490 376 Z M 490 390 A 18 18 0 1 1 490 426 A 18 18 0 1 1 490 390 Z" fill="url(#ringGoldEm)" stroke="#0f172a" stroke-width="6"/>
`,
        audio: "audio/voices/cirak_sonic_zumrutler/step_18.mp3"
      },
    ]
  },
];
