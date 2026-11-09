// KIVANÇ ÇİZİM ATÖLYESİ — PROFESSIONAL DRAWING ACADEMY
// Kapsamlı ve Pedagojik Profesyonel Çizim Veritabanı
// Seviyeler:
// 1 = 🟢 ÇIRAK (Temiz geometri, kılavuz iskelet çizgileri, harika bitmiş illüstrasyon)
// 2 = 🟡 RESSAM (Anatomik hacim, oran-orantı, gövde kasları ve ince detaylar)
// 3 = 🔴 USTA SANATÇI (Konsept sanat kalitesi, dinamik kompozisyon, profesyonel gölgelendirme ve zengin doku)

const CATEGORIES_DATA = [
  { id: "all", name: "Tüm Çizimler", emoji: "✨", count: 18 },
  { id: "hayvanlar", name: "Vahşi & Sevimli Hayvanlar", emoji: "🦁", count: 4 },
  { id: "arabalar", name: "Süper Arabalar & Taşıtlar", emoji: "🏎️", count: 3 },
  { id: "dinozorlar", name: "Dinozorlar & Ejderhalar", emoji: "🦖", count: 6 },
  { id: "deniz", name: "Derin Deniz Canlıları", emoji: "🌊", count: 2 },
  { id: "uzay", name: "Uzay Gemileri & Mecha", emoji: "🚀", count: 2 },
  { id: "kahramanlar", name: "Anime & Kahramanlar", emoji: "🥷", count: 2 }
];

const DRAWINGS_DATA = [
  // =========================================================================
  // PILOT GERCEK RESIMLI DERS: ATES EJDERHASI (SEVIYE 1: CIRAK)
  // =========================================================================
  {
    id: "ates_ejderhasi_gercek",
    categoryId: "dinozorlar",
    name: "Ateş Ejderhası",
    emoji: "🐲",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Adım adım gerçek çizim dersleriyle sevimli Ateş Ejderhası.",
    materials: "Kağıt, Kurşun Kalem, Silgi ve Kırmızı, Turuncu, Sarı Boyalar",
    colors: [
      { name: "Ateş Kırmızısı", hex: "#ef4444" },
      { name: "Kanat Turuncusu", hex: "#f97316" },
      { name: "Altın Sarısı", hex: "#facc15" }
    ],
    previewImage: "img/ejderha_final.jpg",
    previewSvg: `<image href="img/ejderha_final.jpg" x="0" y="0" width="600" height="600"/>`,
    steps: [
      {
        title: "1. Adım: Kafa ve Gövde Kılavuzu",
        instruction: "Kalemini hiç bastırmadan kafa için bir yumurta, gövde için bir armut ve kuyruk çizgisi çiz.",
        voice: "Önce kalemini hiç bastırmadan kafa için bir yumurta, altına gövde için tombul bir armut ve kuyruk çizgisi çizelim.",
        image: "img/ejderha_1.jpg"
      },
      {
        title: "2. Adım: Kafa, Ağız ve Boynuzlar",
        instruction: "Mavi kafa yuvarlağının üzerinden geçerek burnunu, gülümseyen ağzını ve boynuzlarını çiz.",
        voice: "Şimdi mavi kafa yuvarlağının üzerinden geçerek ejderhamızın sevimli burnunu, ağzını ve boynuzlarını çizelim.",
        image: "img/ejderha_2.jpg"
      },
      {
        title: "3. Adım: Büyük Parlak Gözler",
        instruction: "Kocaman parlak gözünü, burun deliğini ve boynuz halkalarını ekle.",
        voice: "Kocaman parlak bir göz çizelim, içine ışık yuvarlakları bırakmayı unutma!",
        image: "img/ejderha_3.jpg"
      },
      {
        title: "4. Adım: Boyun ve Ön Bacaklar",
        instruction: "Boynundan aşağı inerek göğsünü ve yere sağlam basan iki ön bacağını çiz.",
        voice: "Boynundan aşağı doğru inerek göğsünü ve yere basan iki sevimli ön bacağını çizelim.",
        image: "img/ejderha_4.jpg"
      },
      {
        title: "5. Adım: Arka Bacak ve Ok Uçlu Kuyruk",
        instruction: "Oturur pozisyondaki arka bacağını, sırt dikenlerini ve ok uçlu kuyruğunu tamamla.",
        voice: "Oturur pozisyondaki arka bacağını ve üçgen ok uçlu kıvrık kuyruğunu tamamlayalım.",
        image: "img/ejderha_5.jpg"
      },
      {
        title: "6. Adım: Açılan Kanatlar",
        instruction: "Sırtından yukarı doğru büyük bir kanat aç ve içindeki parmak çizgilerini birleştir.",
        voice: "Sırtından yukarı doğru büyük bir kanat açalım. Artık mavi kılavuz çizgileri silebilirsin!",
        image: "img/ejderha_6.jpg"
      },
      {
        title: "7. Adım: Karın Zırhı, Pullar ve Kaya",
        instruction: "Karnındaki yatay çizgileri, omuzlarındaki benekleri ve altındaki kayayı çiz.",
        voice: "Karnına yatay zırh çizgilerini, beneklerini ve altındaki kayayı ekleyelim.",
        image: "img/ejderha_7.jpg"
      },
      {
        title: "8. Adım: Renklendirme Zamanı!",
        instruction: "Gövdesini kırmızıya, karnını ve kanatlarını sarı ve turuncuya boya!",
        voice: "Harika iş çıkardın Kıvanç! Şimdi ejderhamızı kırmızı, sarı ve turuncuya boyayabilirsin!",
        image: "img/ejderha_final.jpg"
      }
    ]
  },
  // =========================================================================
  // 1. ZARİF KIZIL TİLKİ (SEVİYE 1: ÇIRAK)
  // =========================================================================
  {
    id: "tilki_zarif",
    categoryId: "hayvanlar",
    name: "Zarif Kızıl Tilki",
    emoji: "🦊",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Temel geometrik daireler ve üçgenlerden inşa edilen, koca pofuduk kuyruklu asil bir kızıl tilki.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Turuncu-Siyah Boya Kalemleri",
    colors: [
      { name: "Kızıl Turuncu", hex: "#ea580c" },
      { name: "Kar Beyazı", hex: "#f8fafc" },
      { name: "Burun Siyahı", hex: "#0f172a" }
    ],
    previewSvg: `
      <circle cx="300" cy="200" r="90" fill="#ea580c" opacity="0.3"/>
      <path d="M 230 150 L 190 60 L 270 120 Z" fill="#ea580c" stroke="#0f172a" stroke-width="12" stroke-linejoin="round"/>
      <path d="M 370 150 L 410 60 L 330 120 Z" fill="#ea580c" stroke="#0f172a" stroke-width="12" stroke-linejoin="round"/>
      <path d="M 210 200 C 210 140, 390 140, 390 200 C 390 260, 340 300, 300 300 C 260 300, 210 260, 210 200 Z" fill="#ea580c" stroke="#0f172a" stroke-width="14"/>
      <path d="M 210 220 C 250 250, 280 270, 300 295 C 320 270, 350 250, 390 220 C 360 280, 330 300, 300 300 C 270 300, 240 280, 210 220 Z" fill="#f8fafc"/>
      <circle cx="260" cy="205" r="10" fill="#0f172a"/><circle cx="340" cy="205" r="10" fill="#0f172a"/>
      <polygon points="290,265 310,265 300,278" fill="#0f172a"/>
      <path d="M 250 295 C 230 360, 220 440, 240 500 L 360 500 C 380 440, 370 360, 350 295" fill="#ea580c" stroke="#0f172a" stroke-width="14"/>
      <path d="M 370 440 C 470 420, 520 320, 470 240 C 430 200, 420 280, 440 330 C 460 370, 410 470, 360 480 Z" fill="#ea580c" stroke="#0f172a" stroke-width="14"/>
      <path d="M 470 240 C 430 200, 420 280, 440 330 C 460 300, 455 260, 470 240 Z" fill="#f8fafc"/>
    `,
    steps: [
      {
        title: "1. Adım: Hafif Kılavuz Çemberi",
        instruction: "Kağıdının üst ortasına hafifçe bastırarak kafayı belirleyecek yuvarlak bir kılavuz çember çiz.",
        voice: "İlk olarak kağıdının ortasına kafasını oluşturacak hafif bir çember çiziyoruz.",
        svg: `<circle cx="300" cy="200" r="90" fill="none" stroke="#3b82f6" stroke-width="8" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Sivri Tilki Kulakları",
        instruction: "Kılavuz çemberin tepesine yukarı doğru uzanan iki büyük üçgen kulak ekle.",
        voice: "Şimdi kafanın üzerine yukarıya bakan iki sivri kulak çiziyoruz.",
        svg: `<path d="M 230 150 L 190 60 L 270 120 Z" fill="none" stroke="#0f172a" stroke-width="14" stroke-linejoin="round"/><path d="M 370 150 L 410 60 L 330 120 Z" fill="none" stroke="#0f172a" stroke-width="14" stroke-linejoin="round"/>`
      },
      {
        title: "3. Adım: Sevimli Sivri Çene ve Yanak Hatları",
        instruction: "Kafanın altını sivrilterek tilki burnuna doğru inen zarif çene çizgisini çiz.",
        voice: "Kafanın altını sivrilterek tilkinin burnuna doğru inen çene çizgisini yapalım.",
        svg: `<path d="M 210 200 C 210 140, 390 140, 390 200 C 390 260, 340 300, 300 300 C 260 300, 210 260, 210 200 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "4. Adım: Badem Gözler ve Üçgen Burun",
        instruction: "Yüze iki parıldayan badem göz, minik üçgen burun ve yanaklardaki beyaz kürk ayrımını ekle.",
        voice: "Harika! Şimdi iki parıldayan göz, minik bir burun ve yanak çizgilerini çiziyoruz.",
        svg: `<circle cx="260" cy="205" r="10" fill="#0f172a"/><circle cx="263" cy="202" r="3" fill="#ffffff"/><circle cx="340" cy="205" r="10" fill="#0f172a"/><circle cx="343" cy="202" r="3" fill="#ffffff"/><polygon points="290,265 310,265 300,278" fill="#0f172a"/><path d="M 210 220 C 250 250, 280 270, 300 295 C 320 270, 350 250, 390 220" fill="none" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "5. Adım: Oturan Gövde ve Ön Bacaklar",
        instruction: "Çenenin altından aşağıya doğru inen oturan gövdeyi ve yere basan ön patilerini çiz.",
        voice: "Çenenin altından aşağıya doğru tilkimizin gövdesini ve ön patilerini çizelim.",
        svg: `<path d="M 250 295 C 230 360, 220 440, 240 500 L 360 500 C 380 440, 370 360, 350 295" fill="none" stroke="#0f172a" stroke-width="14"/><line x1="300" y1="380" x2="300" y2="500" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "6. Adım: Devasa Pofuduk Tilki Kuyruğu",
        instruction: "Gövdenin yanından arkaya doğru kıvrılan kocaman ucu beyaz pofuduk kuyruğu tamamla.",
        voice: "Son dokunuş! Tilkimizin o meşhur kocaman pofuduk kuyruğunu çizip bitiriyoruz.",
        svg: `<path d="M 370 440 C 470 420, 520 320, 470 240 C 430 200, 420 280, 440 330 C 460 370, 410 470, 360 480 Z" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 450 260 Q 430 280, 450 310" stroke="#0f172a" stroke-width="10" fill="none"/>`
      }
    ]
  },

  // =========================================================================
  // 2. KLASİK VOSVOS (SEVİYE 1: ÇIRAK)
  // =========================================================================
  {
    id: "araba_klasik_vosvos",
    categoryId: "arabalar",
    name: "Klasik Sevimli Vosvos (Beetle)",
    emoji: "🚗",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Net geometrik yarım dairelerden kurulan, nostaljik yuvarlak farlı şık bir klasik vosvos.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Renkli Boya Kalemleri",
    colors: [
      { name: "Canlı Kırmızı", hex: "#dc2626" },
      { name: "Krom Grisi", hex: "#cbd5e1" },
      { name: "Cam Mavisi", hex: "#7dd3fc" }
    ],
    previewSvg: `
      <circle cx="180" cy="380" r="42" fill="#0f172a"/><circle cx="180" cy="380" r="24" fill="#cbd5e1" stroke="#0f172a" stroke-width="6"/>
      <circle cx="420" cy="380" r="42" fill="#0f172a"/><circle cx="420" cy="380" r="24" fill="#cbd5e1" stroke="#0f172a" stroke-width="6"/>
      <path d="M 90 380 L 120 380 M 240 380 L 360 380 M 480 380 L 510 380 L 500 330 C 470 310, 410 200, 300 200 C 180 200, 130 310, 90 340 Z" fill="#dc2626" opacity="0.4" stroke="#0f172a" stroke-width="14"/>
      <path d="M 120 380 C 130 310, 230 310, 240 380" stroke="#0f172a" stroke-width="14" fill="none"/>
      <path d="M 360 380 C 370 310, 470 310, 480 380" stroke="#0f172a" stroke-width="14" fill="none"/>
      <path d="M 190 310 C 210 240, 280 230, 290 310 Z" fill="#7dd3fc" stroke="#0f172a" stroke-width="10"/>
      <path d="M 310 310 C 320 230, 390 240, 420 310 Z" fill="#7dd3fc" stroke="#0f172a" stroke-width="10"/>
      <line x1="300" y1="210" x2="300" y2="380" stroke="#0f172a" stroke-width="10"/>
      <circle cx="105" cy="340" r="14" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
    `,
    steps: [
      {
        title: "1. Adım: İki Yuvarlak Tekerlek",
        instruction: "Kağıdın altına birbirinden biraz aralıklı iki tane yuvarlak tekerlek ve iç çemberlerini çiz.",
        voice: "Arabamız için önce kağıdın altına iki yuvarlak tekerlek çiziyoruz.",
        svg: `<circle cx="180" cy="380" r="42" fill="#0f172a"/><circle cx="180" cy="380" r="24" fill="#cbd5e1" stroke="#0f172a" stroke-width="6"/><circle cx="420" cy="380" r="42" fill="#0f172a"/><circle cx="420" cy="380" r="24" fill="#cbd5e1" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "2. Adım: Tekerlek Üstü Çamurluk Yayları",
        instruction: "Her iki tekerleğin de üzerinden yarım daire şeklinde geçen koruyucu çamurluk yaylarını çiz.",
        voice: "Tekerleklerin üzerinden dolaşan yarım daire çamurlukları çizelim.",
        svg: `<path d="M 120 380 C 130 310, 230 310, 240 380" stroke="#0f172a" stroke-width="14" fill="none"/><path d="M 360 380 C 370 310, 470 310, 480 380" stroke="#0f172a" stroke-width="14" fill="none"/>`
      },
      {
        title: "3. Adım: Meşhur Kubbe Tavan ve Gövde",
        instruction: "Önden arkaya tek bir geniş kavisle vosvosun o meşhur kubbe tavanını ve tamponları birleştir.",
        voice: "Vosvosun o meşhur yuvarlak kubbe tavanını baştan başa çiziyoruz.",
        svg: `<path d="M 90 380 L 120 380 M 240 380 L 360 380 M 480 380 L 510 380 L 500 330 C 470 310, 410 200, 300 200 C 180 200, 130 310, 90 340 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "4. Adım: Yarım Ay Pencereler ve Kapı Çizgisi",
        instruction: "Gövdenin içine iki yuvarlak pencere ve ortadan aşağıya inen kapı çizgisini ekle.",
        voice: "Gövdenin içine şık pencereleri ve ortadaki kapı çizgisini yapalım.",
        svg: `<path d="M 190 310 C 210 240, 280 230, 290 310 Z" fill="#7dd3fc" stroke="#0f172a" stroke-width="10"/><path d="M 310 310 C 320 230, 390 240, 420 310 Z" fill="#7dd3fc" stroke="#0f172a" stroke-width="10"/><line x1="300" y1="210" x2="300" y2="380" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "5. Adım: Yuvarlak Farlar ve Parlak Tampon",
        instruction: "Ön buruna büyük sarı bir far ve tekerleklerin önüne krom tampon demirlerini tamamla.",
        voice: "Son dokunuş! Yuvarlak gülen farını ve nostaljik krom tamponlarını tamamlıyoruz.",
        svg: `<circle cx="105" cy="340" r="14" fill="#facc15" stroke="#0f172a" stroke-width="6"/><path d="M 70 380 C 70 365, 95 365, 95 380" stroke="#0f172a" stroke-width="8" fill="none"/><path d="M 505 380 C 505 365, 530 365, 530 380" stroke="#0f172a" stroke-width="8" fill="none"/>`
      }
    ]
  },

  // =========================================================================
  // 3. BRACHIOSAURUS UZUN BOYUN (SEVİYE 1: ÇIRAK)
  // =========================================================================
  {
    id: "dino_uzunboyun_otobur",
    categoryId: "dinozorlar",
    name: "Barışçıl Brachiosaurus (Uzun Boyun)",
    emoji: "🦕",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Ağaçların tepesine uzanan zarif kıvrımlı boynu ve dağ gibi dost canlısı heybetli gövdesi.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Yeşil/Mavi Boya Kalemleri",
    colors: [
      { name: "Turkuaz Orman Yeşili", hex: "#0d9488" },
      { name: "Açık Göbek Sarısı", hex: "#fde047" }
    ],
    previewSvg: `
      <circle cx="160" cy="120" r="28" fill="#0d9488" opacity="0.4" stroke="#0f172a" stroke-width="12"/>
      <circle cx="155" cy="115" r="5" fill="#0f172a"/>
      <path d="M 180 135 C 220 200, 240 300, 250 400 C 280 330, 380 330, 420 380 C 470 390, 520 420, 530 460 C 510 470, 460 450, 425 430 L 430 510 L 390 510 L 380 430 L 290 430 L 280 510 L 240 510 L 230 430 L 180 400 C 180 320, 160 220, 140 145 Z" fill="#0d9488" opacity="0.45" stroke="#0f172a" stroke-width="14"/>
    `,
    steps: [
      {
        title: "1. Adım: Küçük Baş ve Göğe Uzanan Zarif Boyun",
        instruction: "Sol üst tarafa küçük yuvarlak bir baş ve aşağıya kıvrılarak inen uzun boyun çizgilerini çiz.",
        voice: "Uzun boyunlu sevimli dinozorumuzun gökyüzüne uzanan zarif boynunu çiziyoruz.",
        svg: `<circle cx="160" cy="120" r="28" fill="none" stroke="#0f172a" stroke-width="12"/><circle cx="155" cy="115" r="5" fill="#0f172a"/><path d="M 180 135 C 220 200, 240 300, 250 400" stroke="#0f172a" stroke-width="14" fill="none"/><path d="M 140 145 C 160 220, 180 320, 180 400" stroke="#0f172a" stroke-width="14" fill="none"/>`
      },
      {
        title: "2. Adım: Dağ Gibi Kubbe Sırt ve Bacaklar",
        instruction: "Boynun ardından yükselen devasa sırtı ve fil gibi kalın 4 sütun bacağı çiz.",
        voice: "Boynun bağlandığı devasa dağ gibi gövdeyi ve kalın sütun bacaklarını yapalım.",
        svg: `<path d="M 250 400 C 280 330, 380 330, 420 380 L 430 510 L 390 510 L 380 430 L 290 430 L 280 510 L 240 510 L 230 430" stroke="#0f172a" stroke-width="14" fill="none"/>`
      },
      {
        title: "3. Adım: Kıvrımlı Kırbaç Kuyruk",
        instruction: "Sırtın sağ arkasından geriye doğru incelerek uzanan zarif kırbaç kuyruğu tamamla.",
        voice: "Son dokunuş! Arkada neşeyle kıvrılan uzun kırbaç kuyruğunu çizip bitiriyoruz.",
        svg: `<path d="M 420 380 C 470 390, 520 420, 530 460 C 510 470, 460 450, 425 430" stroke="#0f172a" stroke-width="14" fill="none"/>`
      }
    ]
  },

  // =========================================================================
  // 4. ASİL OTURAN KEDİ (SEVİYE 2: RESSAM)
  // =========================================================================
  {
    id: "kedi_asil_manga",
    categoryId: "hayvanlar",
    name: "Asil Duruşlu Kedi",
    emoji: "🐈",
    level: 2,
    levelName: "Ressam (Seviye 2)",
    levelBadge: "🟡 Ressam",
    description: "Anatomik omurga kavisleri, badem kedi gözleri, patiler ve öne dolanan tüylü asil kuyruk.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Gri/Yeşil Boya Kalemleri",
    colors: [
      { name: "Duman Grisi", hex: "#64748b" },
      { name: "Zümrüt Yeşili (Gözler)", hex: "#10b981" },
      { name: "Pudra Pembe", hex: "#f472b6" }
    ],
    previewSvg: `
      <path d="M 230 180 C 230 120, 370 120, 370 180 C 370 230, 330 260, 300 265 C 270 260, 230 230, 230 180 Z" fill="#94a3b8" opacity="0.4" stroke="#0f172a" stroke-width="12"/>
      <path d="M 245 150 L 210 65 L 285 130" fill="#94a3b8" stroke="#0f172a" stroke-width="12" stroke-linejoin="round"/>
      <path d="M 315 130 L 390 65 L 355 150" fill="#94a3b8" stroke="#0f172a" stroke-width="12" stroke-linejoin="round"/>
      <path d="M 250 185 C 260 170, 280 175, 285 188 C 275 198, 255 195, 250 185 Z" fill="#10b981" stroke="#0f172a" stroke-width="6"/>
      <circle cx="270" cy="183" r="4" fill="#ffffff"/>
      <path d="M 315 188 C 320 175, 340 170, 350 185 C 345 195, 325 198, 315 188 Z" fill="#10b981" stroke="#0f172a" stroke-width="6"/>
      <circle cx="330" cy="183" r="4" fill="#ffffff"/>
      <polygon points="292,215 308,215 300,226" fill="#f472b6"/>
      <path d="M 255 255 C 230 310, 230 380, 240 460 L 345 520 C 390 520, 410 470, 400 480 C 410 390, 390 300, 350 240" fill="#94a3b8" opacity="0.4" stroke="#0f172a" stroke-width="12"/>
      <path d="M 400 475 C 460 490, 450 550, 370 545 C 300 540, 240 540, 220 525" fill="none" stroke="#0f172a" stroke-width="14"/>
    `,
    steps: [
      {
        title: "1. Adım: Baş Ovali ve Kılavuz Çizgileri",
        instruction: "Kağıdın üstüne çeneye doğru hafif sivrilen kedi başı ovalini çiz.",
        voice: "Kedimizin asil duruşu için hafif yana eğik oval bir kafa çizgisiyle başlıyoruz.",
        svg: `<path d="M 230 180 C 230 120, 370 120, 370 180 C 370 230, 330 260, 300 265 C 270 260, 230 230, 230 180 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Dik Sivri Kulaklar ve İç Püsküller",
        instruction: "Kafanın üzerine iki sivri üçgen kulak ve içlerindeki tüy çizgilerini kondur.",
        voice: "Şimdi kafanın üzerine dikkatle etrafı dinleyen iki sivri kulak çiziyoruz.",
        svg: `<path d="M 245 150 L 210 65 L 285 130" stroke="#0f172a" stroke-width="12" fill="none"/><path d="M 315 130 L 390 65 L 355 150" stroke="#0f172a" stroke-width="12" fill="none"/><path d="M 235 135 L 225 90 L 265 130" stroke="#0f172a" stroke-width="8" fill="none"/><path d="M 335 130 L 375 90 L 365 135" stroke="#0f172a" stroke-width="8" fill="none"/>`
      },
      {
        title: "3. Adım: Büyüleyici Badem Gözler ve Pembe Burun",
        instruction: "Yüze iki keskin badem göz, minik pembe burun ve bıyık yastıklarını ekle.",
        voice: "Kedimizin o büyüleyici bakışları için iki badem göz, küçük bir burun ve bıyık yuvalarını ekliyoruz.",
        svg: `<path d="M 250 185 C 260 170, 280 175, 285 188 C 275 198, 255 195, 250 185 Z" fill="#10b981" stroke="#0f172a" stroke-width="6"/><circle cx="270" cy="183" r="4" fill="#ffffff"/><path d="M 315 188 C 320 175, 340 170, 350 185 C 345 195, 325 198, 315 188 Z" fill="#10b981" stroke="#0f172a" stroke-width="6"/><circle cx="330" cy="183" r="4" fill="#ffffff"/><polygon points="292,215 308,215 300,226" fill="#f472b6"/><path d="M 300 226 Q 285 240, 275 230" stroke="#0f172a" stroke-width="8" fill="none"/><path d="M 300 226 Q 315 240, 325 230" stroke="#0f172a" stroke-width="8" fill="none"/>`
      },
      {
        title: "4. Adım: Zarif Boyun, Göğüs ve Sırt Kavisleri",
        instruction: "Çenenin altından inen göğüs kürkünü ve geriye doğru zarifçe kavislenen sırt hattını çiz.",
        voice: "Çenenin altından göğse inen kürk çizgisini ve geriye doğru zarifçe kavislenen sırtı çizelim.",
        svg: `<path d="M 255 255 C 230 310, 230 380, 240 460" stroke="#0f172a" stroke-width="14" fill="none"/><path d="M 350 240 C 390 300, 410 390, 400 480" stroke="#0f172a" stroke-width="14" fill="none"/>`
      },
      {
        title: "5. Adım: İnce Ön Bacaklar ve Parmaklı Patiler",
        instruction: "Öne doğru dik inen iki ince ön bacağı ve parmak çizgileri olan patileri yap.",
        voice: "Yere sağlam basan ince ön bacakları ve parmak kıvrımları olan sevimli patileri çiziyoruz.",
        svg: `<path d="M 255 420 L 250 510 C 250 525, 280 525, 280 510 L 290 430" stroke="#0f172a" stroke-width="12" fill="none"/><path d="M 295 430 L 305 510 C 305 525, 335 525, 335 510 L 330 420" stroke="#0f172a" stroke-width="12" fill="none"/><line x1="265" y1="510" x2="265" y2="520" stroke="#0f172a" stroke-width="6"/><line x1="320" y1="510" x2="320" y2="520" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "6. Adım: Kıvrılan Arka But ve Öne Dolanan Kuyruk",
        instruction: "Oturan arka bacağı ve patilerin önünden zarifçe dolanan uzun kuyruğu tamamla.",
        voice: "Son dokunuş! Yanda oturan arka bacağı ve patilerin önünden kıvrılarak uzanan harika kuyruğu tamamlıyoruz.",
        svg: `<path d="M 380 440 C 410 470, 390 520, 345 520" stroke="#0f172a" stroke-width="14" fill="none"/><path d="M 400 475 C 460 490, 450 550, 370 545 C 300 540, 240 540, 220 525" stroke="#0f172a" stroke-width="14" fill="none"/><line x1="240" y1="220" x2="160" y2="210" stroke="#0f172a" stroke-width="6"/><line x1="240" y1="230" x2="155" y2="235" stroke="#0f172a" stroke-width="6"/><line x1="360" y1="220" x2="440" y2="210" stroke="#0f172a" stroke-width="6"/><line x1="360" y1="230" x2="445" y2="235" stroke="#0f172a" stroke-width="6"/>`
      }
    ]
  },

  // =========================================================================
  // 5. MONSTER TRUCK (SEVİYE 2: RESSAM)
  // =========================================================================
  {
    id: "araba_monster_truck_pro",
    categoryId: "arabalar",
    name: "Monster Truck (Canavar Kamyon)",
    emoji: "🚙",
    level: 2,
    levelName: "Ressam (Seviye 2)",
    levelBadge: "🟡 Ressam",
    description: "Devasa derin dişli çamur lastikleri, açık hidrolik amortisör yayları ve tavan lambaları.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Mavi/Sarı Boya Kalemleri",
    colors: [
      { name: "Elektrik Mavisi", hex: "#2563eb" },
      { name: "Lastik Siyahı", hex: "#0f172a" },
      { name: "Yay Kırmızısı", hex: "#ef4444" },
      { name: "Jant Sarısı", hex: "#fde047" }
    ],
    previewSvg: `
      <circle cx="170" cy="390" r="70" fill="#0f172a"/><circle cx="170" cy="390" r="35" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
      <circle cx="430" cy="390" r="70" fill="#0f172a"/><circle cx="430" cy="390" r="35" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
      <path d="M 110 270 L 110 215 L 200 215 L 260 145 L 390 145 L 415 215 L 500 215 L 500 270 Z" fill="#2563eb" opacity="0.6" stroke="#0f172a" stroke-width="14"/>
      <path d="M 270 160 L 380 160 L 395 205 L 230 205 Z" fill="#7dd3fc" stroke="#0f172a" stroke-width="10"/>
      <path d="M 170 320 L 220 280 L 380 280 L 430 320" stroke="#0f172a" stroke-width="14" fill="none"/>
      <line x1="190" y1="330" x2="210" y2="280" stroke="#ef4444" stroke-width="12"/>
      <line x1="410" y1="330" x2="390" y2="280" stroke="#ef4444" stroke-width="12"/>
      <circle cx="290" cy="130" r="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
      <circle cx="320" cy="130" r="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
      <circle cx="350" cy="130" r="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
    `,
    steps: [
      {
        title: "1. Adım: İki Devasa Dişli Çamur Lastiği",
        instruction: "Kağıdın altına birbirinden açık iki kocaman kalın lastik ve iç jant çemberlerini çiz.",
        voice: "Canavar kamyonun önüne gelen arabaları ezip geçen devasa lastikleriyle başlıyoruz.",
        svg: `<circle cx="170" cy="390" r="70" fill="#0f172a"/><circle cx="170" cy="390" r="35" fill="#facc15" stroke="#0f172a" stroke-width="8"/><circle cx="430" cy="390" r="70" fill="#0f172a"/><circle cx="430" cy="390" r="35" fill="#facc15" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "2. Adım: Çelik Şasi ve Açık Süspansiyon Yayları",
        instruction: "Lastiklerin üzerinde yükselen çelik boru şasiyi ve dev amortisör yaylarını çiz.",
        voice: "Gövdeyi iki metre havada tutan güçlü amortisör yaylarını ve taşıyıcı çelik iskeleti çizelim.",
        svg: `<path d="M 170 320 L 220 280 L 380 280 L 430 320" stroke="#0f172a" stroke-width="14" fill="none"/><line x1="190" y1="330" x2="210" y2="280" stroke="#ef4444" stroke-width="12"/><line x1="410" y1="330" x2="390" y2="280" stroke="#ef4444" stroke-width="12"/>`
      },
      {
        title: "3. Adım: Havalı Kamyonet Gövdesi ve Camlar",
        instruction: "Şasinin üstüne oturan kabini, ön burnu, arka kasayı ve sürücü pencerelerini çiz.",
        voice: "Şimdi yukarıda duran heybetli kamyonet gövdesini ve pencerelerini yapıyoruz.",
        svg: `<path d="M 110 270 L 110 215 L 200 215 L 260 145 L 390 145 L 415 215 L 500 215 L 500 270 Z" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 270 160 L 380 160 L 395 205 L 230 205 Z" fill="#7dd3fc" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "4. Adım: Tavan Projektörleri ve Dikey Egzoz",
        instruction: "Tavana 3 parlak sarı arama lambası ve arkaya yukarı bakan dikey egzoz borularını tamamla.",
        voice: "Son dokunuş! Geceyi aydınlatan tepe lambalarını ve dikey çelik egzozları tamamlıyoruz.",
        svg: `<circle cx="290" cy="130" r="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/><circle cx="320" cy="130" r="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/><circle cx="350" cy="130" r="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/><path d="M 420 145 L 420 100 L 435 90 L 435 155" fill="#64748b" stroke="#0f172a" stroke-width="10"/>`
      }
    ]
  },

  // =========================================================================
  // 6. BÜYÜK BEYAZ KÖPEKBALIĞI (SEVİYE 2: RESSAM)
  // =========================================================================
  {
    id: "deniz_kopekbaligi_pro2",
    categoryId: "deniz",
    name: "Büyük Beyaz Köpekbalığı",
    emoji: "🦈",
    level: 2,
    levelName: "Ressam (Seviye 2)",
    levelBadge: "🟡 Ressam",
    description: "Sivri avcı burnu, jilet sırt yüzgeci, testere dişleri ve solungaçlarıyla okyanusun hakimi.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Koyu Gri Boya Kalemi",
    colors: [
      { name: "Okyanus Grisi", hex: "#475569" },
      { name: "Kar Beyazı", hex: "#f8fafc" },
      { name: "Avcı Siyahı", hex: "#0f172a" }
    ],
    previewSvg: `
      <path d="M 120 280 C 120 190, 420 220, 480 300 C 420 370, 120 360, 120 280 Z" fill="#475569" opacity="0.45" stroke="#0f172a" stroke-width="14"/>
      <path d="M 250 230 L 290 120 C 330 180, 330 230, 350 240 Z" fill="#475569" stroke="#0f172a" stroke-width="14"/>
      <path d="M 135 280 L 60 170 C 90 260, 90 300, 60 390 L 135 280 Z" fill="#475569" stroke="#0f172a" stroke-width="14"/>
      <path d="M 320 320 L 290 440 L 370 410 L 380 315 Z" fill="#475569" stroke="#0f172a" stroke-width="14"/>
      <circle cx="430" cy="275" r="9" fill="#0f172a"/>
      <path d="M 450 320 Q 400 350, 380 325" stroke="#0f172a" stroke-width="10" fill="none"/>
      <line x1="335" y1="280" x2="330" y2="305" stroke="#0f172a" stroke-width="6"/>
      <line x1="345" y1="280" x2="340" y2="305" stroke="#0f172a" stroke-width="6"/>
      <line x1="355" y1="280" x2="350" y2="305" stroke="#0f172a" stroke-width="6"/>
      <line x1="365" y1="280" x2="360" y2="305" stroke="#0f172a" stroke-width="6"/>
    `,
    steps: [
      {
        title: "1. Adım: Sivri Torpido Gövde Silüeti",
        instruction: "Suyu bir ok gibi yaran sivri burunlu ve arkaya incelen gövde silüetini çiz.",
        voice: "Okyanusların en hızlı avcısının kurşun gibi keskin gövde silüetiyle başlıyoruz.",
        svg: `<path d="M 120 280 C 120 190, 420 220, 480 300 C 420 370, 120 360, 120 280 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Jilet Sırt Yüzgeci ve Hilal Kuyruk",
        instruction: "Sırtına dik üçgen yüzgeç ve arkaya hilal şeklinde iki kanatlı kuyruk yap.",
        voice: "Sırtındaki o meşhur jilet gibi yüzgeci ve arkadaki güçlü hilal kuyruğunu çiziyoruz.",
        svg: `<path d="M 250 230 L 290 120 C 330 180, 330 230, 350 240 Z" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 135 280 L 60 170 C 90 260, 90 300, 60 390 L 135 280 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "3. Adım: Geniş Yan Kanat Yüzgeci",
        instruction: "Gövdenin altından aşağıya doğru açılı inen manevra yüzgecini çiz.",
        voice: "Suda hızla dönmesini sağlayan büyük yan kanat yüzgecini yapalım.",
        svg: `<path d="M 320 320 L 290 440 L 370 410 L 380 315 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "4. Adım: Testere Dişler ve 5 Solungaç Yarığı",
        instruction: "Yarı açık avcı ağzı, sivri beyaz dişler ve yanına 5 solungaç yarığını tamamla.",
        voice: "Son dokunuş! Keskin küçük dişlerini ve su altı solungaç çizgilerini çiziyoruz.",
        svg: `<circle cx="430" cy="275" r="9" fill="#0f172a"/><path d="M 450 320 Q 400 350, 380 325" stroke="#0f172a" stroke-width="10" fill="none"/><line x1="335" y1="280" x2="330" y2="305" stroke="#0f172a" stroke-width="6"/><line x1="345" y1="280" x2="340" y2="305" stroke="#0f172a" stroke-width="6"/><line x1="355" y1="280" x2="350" y2="305" stroke="#0f172a" stroke-width="6"/><line x1="365" y1="280" x2="360" y2="305" stroke="#0f172a" stroke-width="6"/>`
      }
    ]
  },

  // =========================================================================
  // 7. LAMBORGHINI AVENTADOR (SEVİYE 3: USTA SANATÇI)
  // =========================================================================
  {
    id: "araba_lambo_master",
    categoryId: "arabalar",
    name: "Lamborghini Aventador (Süper Spor)",
    emoji: "🏎️",
    level: 3,
    levelName: "Usta Sanatçı (Seviye 3)",
    levelBadge: "🔴 Usta",
    description: "Yere sıfır keskin kama silüeti, açılı ön difüzör, 'Y' LED farlar ve devasa yarış spoyleri.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Sarı, Siyah, Kırmızı Boya Kalemleri",
    colors: [
      { name: "Neon Yarış Sarısı", hex: "#eab308" },
      { name: "Karbon Siyahı", hex: "#0f172a" },
      { name: "Fren Kırmızısı", hex: "#dc2626" },
      { name: "Titanyum Grisi", hex: "#64748b" }
    ],
    previewSvg: `
      <path d="M 60 380 L 120 380 C 130 310, 230 310, 240 380 L 370 380 C 380 310, 480 310, 490 380 L 550 380 L 540 330 L 450 270 L 310 230 L 170 310 L 90 340 Z" fill="#eab308" opacity="0.55" stroke="#0f172a" stroke-width="14"/>
      <circle cx="180" cy="380" r="48" fill="#0f172a"/><circle cx="180" cy="380" r="32" fill="#cbd5e1" stroke="#0f172a" stroke-width="8"/>
      <circle cx="430" cy="380" r="48" fill="#0f172a"/><circle cx="430" cy="380" r="32" fill="#cbd5e1" stroke="#0f172a" stroke-width="8"/>
      <path d="M 190 305 L 305 240 L 415 280 L 280 305 Z" fill="#0284c7" opacity="0.4" stroke="#0f172a" stroke-width="12"/>
      <path d="M 285 315 L 390 315 L 360 365 L 270 365 Z" fill="#0f172a"/>
      <path d="M 85 350 L 135 340 L 115 358 Z" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
      <line x1="60" y1="375" x2="120" y2="375" stroke="#0f172a" stroke-width="12"/>
      <path d="M 480 300 L 535 265 L 550 280 L 505 315 Z" fill="#0f172a"/>
    `,
    steps: [
      {
        title: "1. Adım: Aerodinamik Kılavuz Taslağı",
        instruction: "Kağıdına hafif bastırarak eğik alçak tavanı ve tekerlek yuvalarını belirleyen gövde hatlarını çiz.",
        voice: "İlk olarak kurşunkalemini hafif tutarak arabanın yere basık hız silüetini ve tekerlek yuvalarını çiziyoruz.",
        svg: `<path d="M 60 380 L 120 380 C 130 310, 230 310, 240 380 L 370 380 C 380 310, 480 310, 490 380 L 550 380 L 540 330 L 450 270 L 310 230 L 170 310 L 90 340 Z" fill="none" stroke="#3b82f6" stroke-width="8" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Düşük Profil Lastikler ve Jant Çemberleri",
        instruction: "Çamurlukların içine iki dev yarış tekerleği ve iç alaşım jant çemberlerini çiz.",
        voice: "Şimdi yarış arabasını yola kenetleyen dev alaşım jantları ve düşük profil spor lastikleri çizelim.",
        svg: `<circle cx="180" cy="380" r="48" fill="#0f172a"/><circle cx="180" cy="380" r="32" fill="#cbd5e1" stroke="#0f172a" stroke-width="8"/><circle cx="430" cy="380" r="48" fill="#0f172a"/><circle cx="430" cy="380" r="32" fill="#cbd5e1" stroke="#0f172a" stroke-width="8"/><path d="M 60 380 L 120 380 M 240 380 L 370 380 M 490 380 L 550 380" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "3. Adım: Açılı Kokpit Camları ve Yan Hava Kanalı",
        instruction: "Açılı ön camı, tavanı ve motora soğuk hava üfleyen büyük üçgen yan hava kanalını çiz.",
        voice: "Arabanın açılı kokpit camlarını ve motora hava çeken yan kanallarını ekliyoruz.",
        svg: `<path d="M 190 305 L 305 240 L 415 280 L 280 305 Z" fill="#0284c7" opacity="0.4" stroke="#0f172a" stroke-width="12"/><path d="M 285 315 L 390 315 L 360 365 L 270 365 Z" fill="#0f172a"/><line x1="330" y1="245" x2="330" y2="305" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "4. Adım: Keskin LED Farlar ve Ön Karbon Bıçak",
        instruction: "Ön kaputa eğik keskin LED farı ve alt tampon rüzgar difüzörünü çiz.",
        voice: "Arabaya o öfkeli ve güçlü bakışı kazandıran keskin LED farlarını ve karbon tampon bıçaklarını yapalım.",
        svg: `<path d="M 85 350 L 135 340 L 115 358 Z" fill="#facc15" stroke="#0f172a" stroke-width="8"/><line x1="60" y1="375" x2="120" y2="375" stroke="#0f172a" stroke-width="12"/>`
      },
      {
        title: "5. Adım: Yüksek Yarış Spoyleri ve Jant Kolları",
        instruction: "Arka bagaja yüksek karbon yarış kanadını ve jantların içine yıldız kollarını çiz.",
        voice: "Son ustalık adımı! Yüksek hızda yere basmasını sağlayan dev yarış spoylerini ve jant kollarını çiziyoruz.",
        svg: `<path d="M 480 300 L 535 265 L 550 280 L 505 315 Z" fill="#0f172a"/><line x1="495" y1="310" x2="495" y2="340" stroke="#0f172a" stroke-width="8"/><line x1="520" y1="295" x2="520" y2="340" stroke="#0f172a" stroke-width="8"/><line x1="180" y1="350" x2="180" y2="410" stroke="#0f172a" stroke-width="6"/><line x1="150" y1="380" x2="210" y2="380" stroke="#0f172a" stroke-width="6"/><line x1="430" y1="350" x2="430" y2="410" stroke="#0f172a" stroke-width="6"/><line x1="400" y1="380" x2="460" y2="380" stroke="#0f172a" stroke-width="6"/>`
      }
    ]
  },

  // =========================================================================
  // 8. KORKUSUZ KRAL T-REX (SEVİYE 3: USTA SANATÇI)
  // =========================================================================
  {
    id: "dino_trex_master2",
    categoryId: "dinozorlar",
    name: "Korkusuz Kral T-Rex",
    emoji: "🦖",
    level: 3,
    levelName: "Usta Sanatçı (Seviye 3)",
    levelBadge: "🔴 Usta",
    description: "Kükreyen açık çene, hançer dişler, yırtıcı gözler, kaslı bacak ve güçlü denge kuyruğu.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Yeşil, Kahverengi Boya Kalemleri",
    colors: [
      { name: "Orman Yeşili", hex: "#15803d" },
      { name: "Toprak Sarısı", hex: "#ca8a04" },
      { name: "Diş Beyazı", hex: "#f8fafc" }
    ],
    previewSvg: `
      <path d="M 280 180 C 250 140, 140 160, 140 220 L 250 240 L 160 300 L 250 280 C 270 330, 270 380, 290 410 C 300 440, 270 470, 270 520 L 335 540 L 325 520 C 370 420, 370 360, 330 330 C 360 250, 330 200, 280 180 Z" fill="#15803d" opacity="0.45" stroke="#0f172a" stroke-width="14"/>
      <path d="M 160 223 L 166 235 L 172 224 L 178 235 L 184 225 L 190 236" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
      <path d="M 175 290 L 182 280 L 189 290 L 196 280 L 203 290" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
      <circle cx="230" cy="180" r="10" fill="#0f172a"/><circle cx="233" cy="177" r="3" fill="#ffffff"/>
      <path d="M 330 450 C 410 470, 480 410, 530 230" stroke="#0f172a" stroke-width="14" fill="none"/>
    `,
    steps: [
      {
        title: "1. Adım: Devasa Kafatası ve Kükreyen Ağız",
        instruction: "Geniş burun kemerini, yukarı kalkan burnu ve aşağıya açılan koca alt çeneyi çiz.",
        voice: "Dinozorlar kralının yeri titreten açık kükreyen çenesiyle başlıyoruz.",
        svg: `<path d="M 280 180 C 250 140, 140 160, 140 220 L 250 240 L 160 300 L 250 280" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Hançer Dişler ve Yırtıcı Bakış",
        instruction: "Çenelerden fırlayan sivri üçgen dişleri ve kaş kemiği altındaki odaklanmış gözü çiz.",
        voice: "T-Rex'in o meşhur hançer dişlerini ve avına bakan keskin küçük gözünü yapıyoruz.",
        svg: `<path d="M 160 223 L 166 235 L 172 224 L 178 235 L 184 225 L 190 236 L 196 226" fill="#ffffff" stroke="#0f172a" stroke-width="8"/><path d="M 175 290 L 182 280 L 189 290 L 196 280 L 203 290" fill="#ffffff" stroke="#0f172a" stroke-width="8"/><circle cx="230" cy="180" r="10" fill="#0f172a"/><circle cx="233" cy="177" r="3" fill="#ffffff"/><path d="M 215 170 Q 235 165, 245 175" stroke="#0f172a" stroke-width="10" fill="none"/>`
      },
      {
        title: "3. Adım: Kaslı 'S' Boyun, Sırt ve Kalın Kuyruk",
        instruction: "Kafanın ardından inen kalın boyun kasını ve geriye doğru uzanan heybetli sırtı çiz.",
        voice: "Kafasından arkaya doğru uzanan dağ gibi kalın boynunu ve sırt çizgisini çizelim.",
        svg: `<path d="M 280 180 C 330 200, 360 250, 360 330 C 420 330, 500 290, 530 230" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 250 280 C 270 330, 270 380, 290 410" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "4. Adım: Dev Kaslı Bacak ve Sivri Pençeler",
        instruction: "T-Rex'i taşıyan devasa uyluk kasını ve yere basan 3 sivri pençeli ayağı çiz.",
        voice: "Ağır gövdeyi taşıyan o devasa kaslı dinozor bacağını ve keskin pençelerini yapıyoruz.",
        svg: `<path d="M 330 330 C 370 360, 370 420, 320 460 L 325 520 L 270 520 C 270 470, 300 440, 290 410" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 270 520 L 250 540 L 335 540 L 325 520" fill="#0f172a"/><line x1="265" y1="535" x2="255" y2="540" stroke="#ffffff" stroke-width="6"/><line x1="290" y1="535" x2="290" y2="540" stroke="#ffffff" stroke-width="6"/><line x1="320" y1="535" x2="330" y2="540" stroke="#ffffff" stroke-width="6"/>`
      },
      {
        title: "5. Adım: Minik Av Kolları ve Sırt Zırhı",
        instruction: "Öne uzanan karakteristik minik av kollarını ve sırt zırhını tamamla.",
        voice: "Son ustalık adımı! Meşhur iki tırnaklı minik kollarını ve sırt pullarını çizip tamamlıyoruz.",
        svg: `<path d="M 280 340 L 245 365 L 255 375 L 240 375" stroke="#0f172a" stroke-width="10" fill="none"/><path d="M 330 450 C 410 470, 480 410, 530 230" stroke="#0f172a" stroke-width="14" fill="none"/>`
      }
    ]
  },

  // =========================================================================
  // 9. YIRTICI BENGAL KAPLANI (SEVİYE 3: USTA SANATÇI)
  // =========================================================================
  {
    id: "hayvan_kaplan_master2",
    categoryId: "hayvanlar",
    name: "Yırtıcı Bengal Kaplanı",
    emoji: "🐯",
    level: 3,
    levelName: "Usta Sanatçı (Seviye 3)",
    levelBadge: "🔴 Usta",
    description: "Kükreyen çenesi, vahşi odaklanmış sarı gözleri, kaslı omuzları ve kaplan çizgileri.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Turuncu, Siyah Boya Kalemleri",
    colors: [
      { name: "Alev Turuncusu", hex: "#ea580c" },
      { name: "Karbon Siyahı", hex: "#0f172a" },
      { name: "Göz Sarısı", hex: "#facc15" }
    ],
    previewSvg: `
      <path d="M 220 180 C 220 110, 380 110, 380 180 C 420 220, 410 280, 370 310 C 340 330, 260 330, 230 310 C 190 280, 180 220, 220 180 Z" fill="#ea580c" opacity="0.45" stroke="#0f172a" stroke-width="14"/>
      <path d="M 230 140 C 200 130, 190 90, 225 80 C 255 70, 265 110, 255 130" stroke="#0f172a" stroke-width="12" fill="none"/>
      <path d="M 370 140 C 400 130, 410 90, 375 80 C 345 70, 335 110, 345 130" stroke="#0f172a" stroke-width="12" fill="none"/>
      <path d="M 210 300 L 190 490 C 190 520, 250 520, 250 490" fill="none" stroke="#0f172a" stroke-width="14"/>
      <path d="M 390 300 L 410 490 C 410 520, 350 520, 350 490" fill="none" stroke="#0f172a" stroke-width="14"/>
      <path d="M 195 210 L 230 215 L 205 230 Z" fill="#0f172a"/><path d="M 405 210 L 370 215 L 395 230 Z" fill="#0f172a"/>
    `,
    steps: [
      {
        title: "1. Adım: Yanak Kürkleriyle Güçlü Kaplan Kafası",
        instruction: "Geniş bir kafa kubbesi ve yanlara doğru fışkıran sivri vahşi kürk tutamlarını çiz.",
        voice: "Kaplanımızın güçlü kafası ve iki yana açılan vahşi kürk çizgileriyle başlıyoruz.",
        svg: `<path d="M 220 180 C 220 110, 380 110, 380 180 C 420 220, 410 280, 370 310 C 340 330, 260 330, 230 310 C 190 280, 180 220, 220 180 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Yuvarlak Kulaklar ve Alındaki Kral Çatısı",
        instruction: "Tepede iki güçlü yuvarlak kulak ve alındaki o meşhur kaplan çatısı çizgilerini yap.",
        voice: "Kaplanın yuvarlak kulaklarını ve alnındaki simetrik kaplan sembollerini çizelim.",
        svg: `<path d="M 230 140 C 200 130, 190 90, 225 80 C 255 70, 265 110, 255 130" stroke="#0f172a" stroke-width="12" fill="none"/><path d="M 370 140 C 400 130, 410 90, 375 80 C 345 70, 335 110, 345 130" stroke="#0f172a" stroke-width="12" fill="none"/><path d="M 285 130 L 300 155 L 315 130" stroke="#0f172a" stroke-width="10" fill="none"/><line x1="300" y1="110" x2="300" y2="155" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "3. Adım: Keskin Gözler, Geniş Burun ve Bıyık Yastıkları",
        instruction: "Sert bakan iki sarı çekik göz, üçgen geniş burun ve bıyık bölgelerini çiz.",
        voice: "Kaplanın vahşi doğada avına kilitlenen o büyüleyici gözlerini ve burnunu çiziyoruz.",
        svg: `<path d="M 245 200 Q 275 190, 280 205 Q 265 215, 245 200 Z" fill="#0f172a"/><circle cx="265" cy="200" r="4" fill="#ffffff"/><path d="M 355 200 Q 325 190, 320 205 Q 335 215, 355 200 Z" fill="#0f172a"/><circle cx="335" cy="200" r="4" fill="#ffffff"/><path d="M 285 240 L 315 240 L 300 260 Z" fill="#0f172a"/><path d="M 300 260 L 300 275" stroke="#0f172a" stroke-width="8"/><path d="M 300 275 Q 280 290, 265 275" stroke="#0f172a" stroke-width="8" fill="none"/><path d="M 300 275 Q 320 290, 335 275" stroke="#0f172a" stroke-width="8" fill="none"/>`
      },
      {
        title: "4. Adım: Kaslı Omuzlar ve Kalın Pençeler",
        instruction: "Kafanın altından yere inen devasa omuz kaslarını ve masaya basan kalın pençeleri çiz.",
        voice: "Yeri sarsan güçlü kalın ön pençelerini ve omuz kaslarını yapıyoruz.",
        svg: `<path d="M 210 300 L 190 490 C 190 520, 250 520, 250 490 L 270 380" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 390 300 L 410 490 C 410 520, 350 520, 350 490 L 330 380" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "5. Adım: Meşhur Siyah Kaplan Çizgileri",
        instruction: "Yanaklara, alına ve omuzlara simetrik sivri kaplan çizgilerini çekip resmi tamamla.",
        voice: "Son ustalık adımı! Kaplanı doğanın kralı yapan o efsanevi siyah çizgileri ekliyoruz.",
        svg: `<path d="M 195 210 L 230 215 L 205 230 Z" fill="#0f172a"/><path d="M 190 250 L 230 250 L 200 270 Z" fill="#0f172a"/><path d="M 405 210 L 370 215 L 395 230 Z" fill="#0f172a"/><path d="M 410 250 L 370 250 L 400 270 Z" fill="#0f172a"/>`
      }
    ]
  },

  // =========================================================================
  // PİLOT KARAKTER: ATEŞ EJDERHASI — SEVİYE 1: 🟢 ÇIRAK (12 ADIM)
  // =========================================================================
  {
    id: "ates_ejderhasi_lvl1",
    categoryId: "dinozorlar",
    name: "Sevimli Ateş Ejderhası",
    emoji: "🐲",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "12 adımda kılavuz çizgilerinden başlayarak büyük parlak gözlü, kıvrık boynuzlu, sevimli ve kaliteli kırmızı Ateş Ejderhası.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Kırmızı, Turuncu, Sarı Boya Kalemleri",
    colors: [
      { name: "Ateş Kırmızısı", hex: "#ef4444" },
      { name: "Kanat Turuncusu", hex: "#f97316" },
      { name: "Altın Sarısı", hex: "#facc15" },
      { name: "Kaya Grisi", hex: "#64748b" }
    ],
    previewSvg: `
      <defs>
        <linearGradient id="drgBody1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ff5722"/>
          <stop offset="100%" stop-color="#b91c1c"/>
        </linearGradient>
        <linearGradient id="drgWing1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#ea580c"/>
        </linearGradient>
      </defs>
      <!-- Kaya Kaidesi -->
      <path d="M 120 510 C 160 470, 440 470, 490 515 C 450 545, 150 545, 120 510 Z" fill="#64748b" stroke="#0f172a" stroke-width="8"/>
      <!-- Kanat -->
      <path d="M 275 290 C 210 190, 110 175, 55 245 C 95 265, 120 295, 110 345 C 155 320, 195 330, 215 365 C 240 340, 265 340, 285 350 Z" fill="url(#drgWing1)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
      <path d="M 275 290 C 220 205, 140 195, 55 245 M 185 225 L 110 345 M 225 250 L 215 365" stroke="#b91c1c" stroke-width="6" fill="none"/>
      <!-- Kuyruk -->
      <path d="M 235 445 C 130 465, 85 410, 115 355 C 125 385, 160 415, 225 405 Z" fill="url(#drgBody1)" stroke="#0f172a" stroke-width="10"/>
      <polygon points="115,355 95,360 115,330 135,355" fill="#ef4444" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <!-- Gövde ve Arka Bacak -->
      <path d="M 285 240 C 235 280, 215 380, 240 475 L 385 475 C 405 390, 395 295, 355 240 Z" fill="url(#drgBody1)" stroke="#0f172a" stroke-width="10"/>
      <!-- Karın Zırhı -->
      <path d="M 325 245 C 300 310, 300 395, 320 475 L 375 475 C 390 395, 385 310, 355 245 Z" fill="#fde047" stroke="#0f172a" stroke-width="8"/>
      <line x1="308" y1="290" x2="380" y2="290" stroke="#ca8a04" stroke-width="5"/>
      <line x1="305" y1="335" x2="385" y2="335" stroke="#ca8a04" stroke-width="5"/>
      <line x1="306" y1="380" x2="384" y2="380" stroke="#ca8a04" stroke-width="5"/>
      <line x1="312" y1="425" x2="380" y2="425" stroke="#ca8a04" stroke-width="5"/>
      <!-- Arka But ve Ön Bacaklar -->
      <path d="M 230 375 C 185 395, 190 465, 245 485 L 295 485 C 295 450, 270 395, 230 375 Z" fill="url(#drgBody1)" stroke="#0f172a" stroke-width="10"/>
      <path d="M 290 330 L 285 485 L 335 485 L 335 340" fill="url(#drgBody1)" stroke="#0f172a" stroke-width="10"/>
      <path d="M 365 330 L 370 485 L 415 485 L 405 335" fill="url(#drgBody1)" stroke="#0f172a" stroke-width="10"/>
      <!-- Kafa -->
      <path d="M 265 175 C 265 105, 395 105, 415 170 C 455 180, 455 230, 410 240 C 395 265, 330 265, 295 240 C 265 225, 265 195, 265 175 Z" fill="url(#drgBody1)" stroke="#0f172a" stroke-width="10"/>
      <!-- Boynuzlar -->
      <path d="M 295 135 C 255 115, 245 80, 265 65 C 280 85, 295 105, 320 120 Z" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
      <path d="M 335 120 C 315 95, 315 70, 330 55 C 345 75, 355 95, 365 120 Z" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
      <!-- Büyük Parlak Göz -->
      <ellipse cx="355" cy="175" rx="22" ry="26" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
      <ellipse cx="360" cy="177" rx="14" ry="18" fill="#451a03"/>
      <circle cx="362" cy="177" r="9" fill="#0f172a"/>
      <circle cx="354" cy="167" r="6" fill="#ffffff"/>
      <circle cx="367" cy="184" r="3" fill="#ffffff"/>
      <!-- Gülümseyen Ağız -->
      <path d="M 365 215 C 385 235, 420 235, 430 215 C 425 245, 385 250, 365 215 Z" fill="#991b1b" stroke="#0f172a" stroke-width="6"/>
    `,
    steps: [
      {
        title: "1. Adım: Kafa ve Gövde Kılavuz Ovali (Mavi)",
        instruction: "Kalemini hiç bastırmadan üstte kafa için bir yumurta, altta gövde için tombul bir armut kılavuzu çiz.",
        voice: "Önce kalemini hiç bastırmadan kafa için bir yumurta, altına da gövde için tombul bir armut şekli çizelim.",
        svg: `<ellipse cx="345" cy="185" rx="75" ry="62" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="12 8"/><path d="M 285 240 C 235 285, 220 390, 250 475 C 300 490, 380 490, 395 450 C 405 370, 390 280, 355 240 Z" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="12 8"/>`
      },
      {
        title: "2. Adım: Kuyruk ve Kanat Kılavuz Hattı (Mavi)",
        instruction: "Sola doğru kıvrılan kuyruk yayını ve sırttan açılan kanat kılavuz çizgisini hafifçe ekle.",
        voice: "Şimdi arkaya doğru kıvrılan kuyruk çizgisini ve kanadın yerini belirleyen kılavuz yayımızı hafifçe çizelim.",
        svg: `<path d="M 235 445 C 125 465, 85 405, 115 350" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 275 290 C 205 185, 105 175, 55 245" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Kafa ve Sevimli Burun Konturu",
        instruction: "Mavi kafa kılavuzunun üzerinden geçerek yuvarlak alnı, sevimli çıkıntılı burnu ve yanak hattını çiz.",
        voice: "Artık gerçek çizgilerimize başlıyoruz! Kafa kılavuzunun üzerinden geçerek ejderhamızın burnunu ve kafasını çizelim.",
        svg: `<path d="M 265 175 C 265 105, 395 105, 415 170 C 455 180, 455 230, 410 240 C 395 265, 330 265, 295 240 C 265 225, 265 195, 265 175 Z" fill="none" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "4. Adım: Gülümseyen Ağız, Burun Deliği ve Dişler",
        instruction: "Burnun üstüne küçük bir burun deliği, altına ise mutlu gülümseyen ağzı ve iki minik sivri dişi ekle.",
        voice: "Ejderhamızın neşeli gülümseyen ağzını, içindeki dilini ve iki minik sevimli dişini çiziyoruz.",
        svg: `<path d="M 422 188 C 426 182, 434 185, 432 192" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 365 215 C 385 235, 420 235, 430 215 C 425 245, 385 250, 365 215 Z" fill="none" stroke="#0f172a" stroke-width="8"/><polygon points="382,223 388,233 394,225" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><polygon points="412,223 417,232 422,222" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>`
      },
      {
        title: "5. Adım: Büyük Parlak Gözler ve Kaş Kıvrımı",
        instruction: "Yüzün ortasına kocaman oval bir göz, içine gözbebeği ve parlayan iki ışık yuvarlağı çiz.",
        voice: "Şimdi kocaman parlak bir göz çizelim. Gözün içine iki küçük ışık yuvarlağı bırakmayı sakın unutma!",
        svg: `<ellipse cx="355" cy="175" rx="22" ry="26" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="360" cy="177" r="13" fill="#0f172a"/><circle cx="353" cy="168" r="5" fill="#ffffff"/><circle cx="366" cy="184" r="3" fill="#ffffff"/><path d="M 332 142 Q 355 130, 375 142" fill="none" stroke="#0f172a" stroke-width="7"/>`
      },
      {
        title: "6. Adım: Kıvrımlı Boynuzlar ve Yanak Dikenleri",
        instruction: "Başın tepesine geriye doğru kıvrılan iki boynuz, boynuz halkaları ve yanağın soluna üçgen kulakçıklar ekle.",
        voice: "Başının üstüne geriye doğru kıvrılan iki güçlü boynuz ve yanak dikenlerini ekleyelim.",
        svg: `<path d="M 295 135 C 255 115, 245 80, 265 65 C 280 85, 295 105, 320 120 Z" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 335 120 C 315 95, 315 70, 330 55 C 345 75, 355 95, 365 120 Z" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 272 108 Q 282 98, 295 104 M 262 90 Q 272 82, 282 88" fill="none" stroke="#0f172a" stroke-width="5"/><path d="M 266 175 L 238 188 L 268 202 L 242 215 L 275 225" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "7. Adım: Boyun, Göğüs ve Güçlü Ön Bacaklar",
        instruction: "Kafanın altından aşağıya doğru inen göğsü ve yere sağlam basan iki ön bacağı çiz.",
        voice: "Boynundan aşağıya doğru inerek göğsünü ve yere sağlam basan iki ön bacağını çiziyoruz.",
        svg: `<path d="M 285 240 C 255 270, 240 320, 235 375" fill="none" stroke="#0f172a" stroke-width="10"/><path d="M 290 330 L 285 485 L 335 485 L 335 340" fill="none" stroke="#0f172a" stroke-width="10"/><path d="M 365 330 L 370 485 L 415 485 L 405 335" fill="none" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "8. Adım: Oturur Arka Bacak ve Yuvarlak Pençe Tırnakları",
        instruction: "Yan tarafa bükülü duran tombul arka bacağı ve tüm ayakların ucundaki üçer tırnağı çiz.",
        voice: "Yan tarafa kıvrılmış arka bacağını ve ayaklarının ucundaki sevimli tırnakları tek tek yapalım.",
        svg: `<path d="M 230 375 C 185 395, 190 465, 245 485 L 285 485" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="245" cy="485" r="9" fill="#fde047" stroke="#0f172a" stroke-width="5"/><circle cx="265" cy="485" r="9" fill="#fde047" stroke="#0f172a" stroke-width="5"/><circle cx="295" cy="485" r="9" fill="#fde047" stroke="#0f172a" stroke-width="5"/><circle cx="312" cy="485" r="9" fill="#fde047" stroke="#0f172a" stroke-width="5"/><circle cx="330" cy="485" r="9" fill="#fde047" stroke="#0f172a" stroke-width="5"/><circle cx="380" cy="485" r="9" fill="#fde047" stroke="#0f172a" stroke-width="5"/><circle cx="400" cy="485" r="9" fill="#fde047" stroke="#0f172a" stroke-width="5"/>`
      },
      {
        title: "9. Adım: Kıvrık Kuyruk ve Üçgen Ok Ucu",
        instruction: "Arkaya doğru kıvrılan kuyruğu tamamla ve en ucuna üçgen bir ok şekli ekle.",
        voice: "Arkaya doğru uzanan kıvrık kuyruğumuzu ve ucundaki sevimli üçgen ok şeklini çizelim.",
        svg: `<path d="M 225 455 C 125 465, 85 410, 115 355 C 125 385, 160 415, 210 410" fill="none" stroke="#0f172a" stroke-width="10"/><polygon points="115,355 95,360 115,330 135,355" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "10. Adım: Açılan Kanat İskeleti ve Kanat Zarı",
        instruction: "Sırttan yukarı uzanan kanat kolunu, içinden inen parmak çubuklarını ve dalgalı kanat zarını çiz.",
        voice: "Sıra kanatlarda! Sırttan yukarı büyük bir kanat açıp içindeki parmak çizgilerini ve dalgalı zarını birleştirelim.",
        svg: `<path d="M 275 290 C 210 190, 110 175, 55 245 C 95 265, 120 295, 110 345 C 155 320, 195 330, 215 365 C 240 340, 265 340, 285 350" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/><path d="M 185 225 L 110 345 M 225 250 L 215 365" fill="none" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "11. Adım: Karın Zırhı Çizgileri, Sırt Dikenleri ve Kaya",
        instruction: "Göğsündeki yatay karın dilimlerini, sırt dikenlerini ve üzerinde oturduğu kayayı çiz.",
        voice: "Karnına yatay zırh çizgilerini, sırtındaki küçük dikenleri ve altındaki kayayı ekleyelim. Artık mavi kılavuzları silebilirsin!",
        svg: `<path d="M 325 245 C 305 305, 305 385, 318 450 M 360 245 C 380 305, 380 385, 370 450" fill="none" stroke="#0f172a" stroke-width="7"/><line x1="312" y1="280" x2="368" y2="280" stroke="#0f172a" stroke-width="5"/><line x1="308" y1="315" x2="375" y2="315" stroke="#0f172a" stroke-width="5"/><line x1="308" y1="350" x2="375" y2="350" stroke="#0f172a" stroke-width="5"/><path d="M 242 350 L 225 360 L 236 372 M 195 412 L 178 402 L 175 418 M 155 405 L 142 392 L 140 408" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 120 510 C 160 470, 440 470, 490 515 C 450 545, 150 545, 120 510 Z" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "12. Adım: Canlı Renklendirme ve Işık-Gölge",
        instruction: "Gövdeyi ateş kırmızısına, karın ve kanat içlerini ise altın sarısı ve turuncuya boyayarak eseri tamamla!",
        voice: "Harika iş çıkardın Kıvanç! Şimdi ejderhamızın gövdesini kırmızıya, karnını ve kanatlarını sarı ve turuncuya boyayabilirsin!",
        svg: `<g opacity="0.95">
          <path d="M 120 510 C 160 470, 440 470, 490 515 C 450 545, 150 545, 120 510 Z" fill="#64748b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 275 290 C 210 190, 110 175, 55 245 C 95 265, 120 295, 110 345 C 155 320, 195 330, 215 365 C 240 340, 265 340, 285 350 Z" fill="#f97316" stroke="#0f172a" stroke-width="10"/>
          <path d="M 235 445 C 130 465, 85 410, 115 355 C 125 385, 160 415, 225 405 Z" fill="#ef4444" stroke="#0f172a" stroke-width="10"/>
          <path d="M 285 240 C 235 280, 215 380, 240 475 L 385 475 C 405 390, 395 295, 355 240 Z" fill="#ef4444" stroke="#0f172a" stroke-width="10"/>
          <path d="M 325 245 C 300 310, 300 395, 320 475 L 375 475 C 390 395, 385 310, 355 245 Z" fill="#fde047" stroke="#0f172a" stroke-width="8"/>
          <path d="M 265 175 C 265 105, 395 105, 415 170 C 455 180, 455 230, 410 240 C 395 265, 330 265, 295 240 C 265 225, 265 195, 265 175 Z" fill="#ef4444" stroke="#0f172a" stroke-width="10"/>
          <path d="M 295 135 C 255 115, 245 80, 265 65 C 280 85, 295 105, 320 120 Z" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="355" cy="175" rx="22" ry="26" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="360" cy="177" r="12" fill="#0f172a"/>
          <circle cx="354" cy="167" r="5" fill="#ffffff"/>
        </g>`
      }
    ]
  },

  // =========================================================================
  // PİLOT KARAKTER: ATEŞ EJDERHASI — SEVİYE 2: 🟡 RESSAM (16 ADIM)
  // =========================================================================
  {
    id: "ates_ejderhasi_lvl2",
    categoryId: "dinozorlar",
    name: "Soylu Ateş Ejderhası",
    emoji: "🐉",
    level: 2,
    levelName: "Ressam (Seviye 2)",
    levelBadge: "🟡 Ressam",
    description: "16 adımda doğru anatomik oranlar, S-kıvrımlı güçlü boyun, dört ayak üzerinde heybetli duruş ve kanat kemik yapısıyla Ressam seviyesi Ateş Ejderhası.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Kırmızı, Koyu Kırmızı, Turuncu, Sarı Kalemler",
    colors: [
      { name: "Kızıl Zırh", hex: "#dc2626" },
      { name: "Gölge Bordo", hex: "#7f1d1d" },
      { name: "Alev Turuncusu", hex: "#ea580c" },
      { name: "Altın Göğüs", hex: "#eab308" }
    ],
    previewSvg: `
      <path d="M 90 520 L 210 475 L 390 475 L 510 520 Z" fill="#475569" stroke="#0f172a" stroke-width="8"/>
      <path d="M 290 250 L 95 120 C 60 190, 75 260, 50 320 C 120 295, 165 315, 185 355 C 225 320, 260 320, 290 330 Z" fill="#ea580c" stroke="#0f172a" stroke-width="10"/>
      <path d="M 330 235 L 445 135 C 485 195, 495 255, 535 295 C 470 285, 430 305, 405 335 Z" fill="#c2410c" stroke="#0f172a" stroke-width="9"/>
      <path d="M 345 115 C 405 110, 465 130, 475 155 L 420 170 L 460 190 C 425 205, 385 190, 355 175 C 375 230, 385 295, 350 365 L 220 405 C 145 435, 95 415, 85 365 C 115 395, 165 395, 215 360 C 265 310, 325 245, 315 160 Z" fill="#dc2626" stroke="#0f172a" stroke-width="10"/>
      <path d="M 225 365 L 195 490 L 235 490 L 265 385" fill="#b91c1c" stroke="#0f172a" stroke-width="9"/>
      <path d="M 325 355 L 355 490 L 395 490 L 365 345" fill="#dc2626" stroke="#0f172a" stroke-width="9"/>
    `,
    steps: [
      {
        title: "1. Adım: Kafa, Göğüs ve Kalça Anatomi Çemberleri (Mavi)",
        instruction: "Kalemini hafif tutarak üstte küçük köşeli kafa çemberi, ortada geniş göğüs kafesi ve solda kalça çemberini çiz.",
        voice: "Ressam seviyesinde gerçek anatomiyle başlıyoruz! Kafa, göğüs kafesi ve kalça çemberlerini hafifçe çizelim.",
        svg: `<circle cx="395" cy="145" r="35" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="10 8"/><ellipse cx="325" cy="315" rx="60" ry="48" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="10 8"/><circle cx="235" cy="365" r="42" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: S-Kıvrımlı Omurga ve Kuyruk Akış Çizgisi (Mavi)",
        instruction: "Kafadan göğse S çizerek inen boyun hattını ve kalçadan sola kıvrılan kuyruk omurgasını ekle.",
        voice: "Şimdi üç çemberimizi birbirine bağlayan S şeklindeki omurga ve kuyruk akış çizgisini çiziyoruz.",
        svg: `<path d="M 395 145 C 340 180, 385 265, 325 315 C 275 350, 140 445, 85 365" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Bacak Eklemleri ve Kanat Açısı Kılavuzu (Mavi)",
        instruction: "Dört bacağın diz/dirsek kırılma açılarını ve iki yana açılan kanat kollarını kılavuz olarak belirle.",
        voice: "Bacakların eklem açılarını ve sırtından yükselen iki kanadın ana iskelet çizgilerini hafifçe belirleyelim.",
        svg: `<path d="M 345 340 L 370 415 L 375 490 M 305 345 L 295 420 L 305 490 M 235 365 L 195 425 L 215 490" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="8 8"/><path d="M 295 270 L 95 120 M 335 255 L 445 135" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="8 8"/>`
      },
      {
        title: "4. Adım: Köşeli Ejderha Kafatası ve Üst Çene",
        instruction: "Sağa doğru uzanan keskin burun kemiğini, kaş çıkıntısını ve üst çene hattını çiz.",
        voice: "Kafatasının keskin üst çenesini ve güçlü kaş kemiğini net çizgilerle çizmeye başlıyoruz.",
        svg: `<path d="M 345 125 C 385 112, 445 125, 475 155 L 415 168" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "5. Adım: Alt Çene, Sivri Dişler ve Yırtıcı Göz",
        instruction: "Hafif aralık duran alt çeneyi, içerideki sivri dişleri ve kaşın altındaki çekik gözü çiz.",
        voice: "Alt çeneyi, keskin dişlerini ve ileriye odaklanmış yırtıcı ejderha gözünü yapalım.",
        svg: `<path d="M 415 168 L 460 190 C 425 205, 385 192, 355 175" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 425 165 L 430 175 L 436 164 L 442 174 L 450 162" fill="none" stroke="#0f172a" stroke-width="5"/><polygon points="395,142 418,146 402,155" fill="#facc15" stroke="#0f172a" stroke-width="5"/>`
      },
      {
        title: "6. Adım: Uzun Boynuzlar ve Yanak Zırh Dikenleri",
        instruction: "Kafanın arkasından geriye doğru uzanan boğumlu iki uzun boynuzu ve çene altı dikenlerini çiz.",
        voice: "Kafanın arkasından geriye uzanan uzun boynuzları ve yanak zırh dikenlerini ekliyoruz.",
        svg: `<path d="M 355 125 L 275 85 L 335 140 M 345 140 L 265 115 L 330 155" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 335 160 L 295 165 L 340 175 L 308 188 L 350 190" fill="none" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "7. Adım: Kaslı S-Boyun ve Boğaz Zırhı",
        instruction: "Kafadan göğse doğru kıvrılarak kalınlaşan güçlü boyun kaslarını çiz.",
        voice: "Şimdi kafadan göğse doğru S çizerek inen kaslı ve güçlü boynu çizelim.",
        svg: `<path d="M 318 165 C 335 215, 310 265, 285 295 M 365 185 C 390 235, 395 295, 365 345" fill="none" stroke="#0f172a" stroke-width="9"/>`
      },
      {
        title: "8. Adım: Ön Omuz Kasları ve Ön Bacaklar",
        instruction: "Göğsün altından yere doğru uzanan kaslı iki ön bacağı dirsek çıkıntılarıyla birlikte çiz.",
        voice: "Ejderhanın ağırlığını taşıyan kaslı omuzlarını ve yere basan iki ön bacağını çiziyoruz.",
        svg: `<path d="M 325 335 L 345 420 L 355 485 L 390 485 L 378 415 L 368 335" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 295 345 L 285 425 L 290 485 L 322 485 L 318 420 L 320 355" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "9. Adım: Gövde, Karın Hattı ve Kaslı Arka Bacaklar",
        instruction: "Kaburga altından kalçaya uzanan karın çizgisini ve güçlü arka bacak kaslarını çiz.",
        voice: "Gövdenin alt kısmını ve kayaya sağlam basan güçlü arka bacak kaslarını tamamlayalım.",
        svg: `<path d="M 290 380 L 245 390" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 225 345 C 185 370, 185 420, 210 445 L 195 485 L 235 485 L 255 435 C 270 410, 265 370, 250 350" fill="none" stroke="#0f172a" stroke-width="9"/>`
      },
      {
        title: "10. Adım: Keskin Pençeler ve Kaya Zemini",
        instruction: "Dört ayağın ucuna kayayı kavrayan sivri pençe tırnaklarını ve altındaki kayalık tepeyi çiz.",
        voice: "Ayak uçlarına kayayı sıkıca kavrayan keskin pençeleri ve üzerinde durduğu kayayı çiziyoruz.",
        svg: `<path d="M 355 485 L 370 502 L 375 485 L 392 500 L 398 485 M 290 485 L 302 500 L 310 485 M 195 485 L 185 502 L 208 488 L 205 504 L 225 488" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 90 520 L 210 475 L 390 475 L 510 520" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "11. Adım: Kamçı Kuyruk ve Kuyruk Ucu Bıçağı",
        instruction: "Kalçadan sola doğru kıvrılarak incelen uzun kuyruğu ve ucundaki keskin mızrak ucunu çiz.",
        voice: "Arkaya doğru kıvrılarak uzanan güçlü kuyruğu ve ucundaki keskin kuyruk bıçağını yapalım.",
        svg: `<path d="M 215 355 C 155 395, 110 395, 85 360 C 95 415, 145 435, 210 405" fill="none" stroke="#0f172a" stroke-width="9"/><polygon points="85,360 65,355 80,330 102,350" fill="none" stroke="#0f172a" stroke-width="7"/>`
      },
      {
        title: "12. Adım: Sol Ana Kanat Kemiği ve Pençesi",
        instruction: "Sırttan sol üste doğru yükselen kalın kanat kolu kemiğini ve dirsekteki kanat pençesini çiz.",
        voice: "Şimdi sırttan gökyüzüne doğru açılan sol ana kanat kemiğini ve tepesindeki pençeyi çiziyoruz.",
        svg: `<path d="M 290 265 L 95 120 L 80 100 L 108 112 L 298 250" fill="none" stroke="#0f172a" stroke-width="9"/>`
      },
      {
        title: "13. Adım: Sol Kanat Parmakları ve Gerilmiş Kanat Zarı",
        instruction: "Kanat dirseğinden aşağıya açılan 3 uzun parmak kemiğini ve aralarındaki kavisli zarı birleştir.",
        voice: "Kanat dirseğinden aşağıya inen uzun parmak kemiklerini ve rüzgarla dolan kanat zarını çizelim.",
        svg: `<path d="M 95 120 C 60 190, 75 260, 50 320 C 120 295, 165 315, 185 355 C 225 320, 260 320, 285 330" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 95 120 L 185 355 M 95 120 L 245 325" fill="none" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "14. Adım: Sağ Arka Kanat (Perspektif Derinliği)",
        instruction: "Boynun arkasında kalan ikinci kanadı perspektife uygun olarak sağ üste doğru aç.",
        voice: "Resmimize derinlik katmak için arkada kalan ikinci kanadı da sağ tarafa doğru açıyoruz.",
        svg: `<path d="M 350 235 L 445 135 C 485 195, 495 255, 535 295 C 470 285, 430 305, 385 325" fill="none" stroke="#0f172a" stroke-width="8"/><line x1="445" y1="135" x2="455" y2="290" stroke="#0f172a" stroke-width="5"/>`
      },
      {
        title: "15. Adım: Göğüs Zırh Plakaları, Sırt Dikenleri ve Kas Taramaları",
        instruction: "Boyundan karna inen zırh dilimlerini, sırt dikenlerini ve bacaklardaki pul dokularını ekle.",
        voice: "Göğüs zırhı dilimlerini, sırt dikenlerini ve kasların üzerindeki pul çizgilerini özenle tamamlayalım.",
        svg: `<path d="M 340 185 C 365 235, 365 295, 345 345" fill="none" stroke="#0f172a" stroke-width="6"/><line x1="335" y1="210" x2="375" y2="205" stroke="#0f172a" stroke-width="4"/><line x1="342" y1="235" x2="382" y2="230" stroke="#0f172a" stroke-width="4"/><line x1="345" y1="260" x2="386" y2="255" stroke="#0f172a" stroke-width="4"/><line x1="342" y1="285" x2="384" y2="285" stroke="#0f172a" stroke-width="4"/><path d="M 312 185 L 295 192 L 315 205 L 298 215 L 315 230 M 245 335 L 230 322 L 225 342 L 205 335 L 202 355" fill="none" stroke="#0f172a" stroke-width="5"/>`
      },
      {
        title: "16. Adım: Profesyonel Tonlama ve Alev Renklendirmesi",
        instruction: "Koyu kızıl gölgeleri, turuncu-sarı kanat zarlarını ve göğüs zırhını boyayarak Ressam eserini bitir!",
        voice: "Muhteşem bir Ressam çalışması oldu Kıvanç! Şimdi kızıl, turuncu ve altın sarısı tonlarıyla ejderhamızı renklendirebilirsin!",
        svg: `<g opacity="0.9">
          <path d="M 90 520 L 210 475 L 390 475 L 510 520 Z" fill="#475569" stroke="#0f172a" stroke-width="8"/>
          <path d="M 290 250 L 95 120 C 60 190, 75 260, 50 320 C 120 295, 165 315, 185 355 C 225 320, 260 320, 290 330 Z" fill="#ea580c" stroke="#0f172a" stroke-width="9"/>
          <path d="M 330 235 L 445 135 C 485 195, 495 255, 535 295 C 470 285, 430 305, 405 335 Z" fill="#c2410c" stroke="#0f172a" stroke-width="8"/>
          <path d="M 345 115 C 405 110, 465 130, 475 155 L 420 170 L 460 190 C 425 205, 385 190, 355 175 C 375 230, 385 295, 350 365 L 220 405 C 145 435, 95 415, 85 365 C 115 395, 165 395, 215 360 C 265 310, 325 245, 315 160 Z" fill="#dc2626" stroke="#0f172a" stroke-width="9"/>
        </g>`
      }
    ]
  },

  // =========================================================================
  // PİLOT KARAKTER: ATEŞ EJDERHASI — SEVİYE 3: 🔴 USTA SANATÇI (22 ADIM)
  // =========================================================================
  {
    id: "ates_ejderhasi_lvl3",
    categoryId: "dinozorlar",
    name: "Efsanevi Ateş Ejderhası (Usta)",
    emoji: "🔥",
    level: 3,
    levelName: "Usta Sanatçı (Seviye 3)",
    levelBadge: "🔴 Usta",
    previewImage: "assets/images/ates_ejderhasi_master.jpg",
    description: "22 adımda profesyonel konsept sanat kalitesinde kükreyen çene, tam pul zırh dokusu, dev yarasa kanatları ve ağzından fışkıran ateş fırtınası.",
    materials: "1 Adet Kağıt, Dereceli Kurşun Kalemler, Silgi ve Koyu Bordo, Kırmızı, Turuncu, Parlak Sarı Kalemler",
    colors: [
      { name: "Ejderha Bordosu", hex: "#7f1d1d" },
      { name: "Kor Kırmızısı", hex: "#dc2626" },
      { name: "Magma Turuncusu", hex: "#f97316" },
      { name: "Akkor Alev Sarısı", hex: "#fef08a" }
    ],
    previewSvg: `
      <path d="M 70 535 L 180 465 L 340 455 L 470 535 Z" fill="#1e293b" stroke="#0f172a" stroke-width="8"/>
      <path d="M 265 245 L 45 95 C 25 185, 35 275, 20 355 C 95 315, 145 335, 175 375 C 215 335, 245 335, 275 345 Z" fill="#b91c1c" stroke="#0f172a" stroke-width="10"/>
      <path d="M 315 230 L 445 105 C 485 175, 495 235, 535 280 C 465 275, 415 295, 375 325 Z" fill="#7f1d1d" stroke="#0f172a" stroke-width="9"/>
      <path d="M 325 105 C 390 95, 455 115, 465 140 L 405 160 L 455 195 C 410 215, 375 195, 345 175 C 375 235, 380 305, 335 375 L 195 420 C 125 450, 75 435, 55 385 C 95 415, 145 410, 195 370 C 245 315, 305 245, 295 150 Z" fill="#991b1b" stroke="#0f172a" stroke-width="10"/>
      <path d="M 435 165 C 485 185, 535 225, 585 285 C 530 295, 480 265, 430 185 Z" fill="#facc15" stroke="#ea580c" stroke-width="8"/>
    `,
    steps: [
      {
        title: "1. Adım: Dinamik Aksiyon Hattı ve Perspektif Ekseni (Mavi)",
        instruction: "Sol alttan sağ üste yükselen güçlü S-aksiyon çizgisini ve kaya zirvesi üçgenini hafifçe kur.",
        voice: "Usta Sanatçı dersimize hoş geldin Kıvanç! İlk olarak ejderhanın dinamik S hareket çizgisini ve kaya zirvesini hafifçe çiziyoruz.",
        svg: `<path d="M 65 415 C 185 445, 365 295, 335 135" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="10 8"/><path d="M 70 535 L 250 455 L 470 535" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Kafatası Kutusu, Toraks ve Pelvis Kütleleri (Mavi)",
        instruction: "Açılı kafatası bloğunu, geniş göğüs kafesini ve kalça kütlesini üç boyutlu hacim olarak yerleştir.",
        voice: "Şimdi kafatası bloğunu, geniş göğüs kafesini ve kalça hacmini üç boyutlu olarak yerleştiriyoruz.",
        svg: `<polygon points="320,115 455,125 445,195 325,175" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="8 8"/><ellipse cx="315" cy="315" rx="62" ry="50" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="8 8"/><circle cx="215" cy="375" r="45" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="8 8"/>`
      },
      {
        title: "3. Adım: Dev Kanat Açıklığı ve Alev Konisi Kılavuzu (Mavi)",
        instruction: "İki yana açılan devasa kanat yaylarını ve ağızdan sağ alta püsküren ateş konisini hafifçe belirle.",
        voice: "Devasa kanatların sınırlarını ve ağzından püskürecek ateş fırtınasının kılavuz konisini hafifçe çizelim.",
        svg: `<path d="M 275 255 L 45 95 L 20 355 M 325 235 L 445 105 L 535 280" fill="none" stroke="#3b82f6" stroke-width="5" stroke-dasharray="8 8"/><path d="M 435 165 L 585 245 L 545 335 Z" fill="none" stroke="#f97316" stroke-width="5" stroke-dasharray="8 8"/>`
      },
      {
        title: "4. Adım: Üst Çene, Burun Kemiği ve Kaş Zırhı",
        instruction: "Girintili çıkıntılı kemik yapısıyla üst çeneyi, burun deliğini ve sert kaş zırhını çiz.",
        voice: "Kafatasının sert kemik yapısını, burun çıkıntısını ve öfkeli kaş zırhını keskin çizgilerle çiziyoruz.",
        svg: `<path d="M 325 115 L 365 108 L 395 118 L 435 122 L 465 140 L 405 160" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "5. Adım: Kükreyen Alt Çene ve İç Ağız Bağları",
        instruction: "Sonuna kadar açılmış alt çeneyi ve iki çeneyi birbirine bağlayan gerilmiş ağız kaslarını çiz.",
        voice: "Kükreyerek açılan güçlü alt çeneyi ve çene kaslarını detaylıca çizelim.",
        svg: `<path d="M 405 160 L 455 195 C 415 215, 375 198, 345 175" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 392 158 C 402 172, 405 182, 398 192" fill="none" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "6. Adım: Hançer Dişler ve Yırtıcı Sürüngen Gözü",
        instruction: "Üst ve alt çeneye dizilmiş sivri hançer dişleri ve dikey gözbebekli yırtıcı gözü ekle.",
        voice: "Şimdi çenelerdeki keskin hançer dişleri ve parlayan sürüngen gözünü ince uçla işliyoruz.",
        svg: `<path d="M 412 156 L 418 168 L 424 154 L 430 166 L 438 150 L 445 164 L 454 146" fill="none" stroke="#0f172a" stroke-width="5"/><path d="M 410 188 L 416 176 L 424 190 L 432 178 L 442 192" fill="none" stroke="#0f172a" stroke-width="5"/><polygon points="375,132 402,136 385,146" fill="#fef08a" stroke="#0f172a" stroke-width="5"/>`
      },
      {
        title: "7. Adım: Taç Boynuzlar ve Baş Arkası Mızrak Dikenleri",
        instruction: "Kafatasından geriye uzanan uzun boğumlu boynuzları ve yanak zırh dikenlerini katman katman çiz.",
        voice: "Kafanın arkasından geriye doğru uzanan krallık boynuzlarını ve keskin yanak dikenlerini çizelim.",
        svg: `<path d="M 335 115 L 235 65 L 315 135 M 325 132 L 225 98 L 308 150 M 315 152 L 255 145 L 312 168" fill="none" stroke="#0f172a" stroke-width="7"/>`
      },
      {
        title: "8. Adım: Güçlü Boyun Kasları ve Boğaz Zırh Plakaları",
        instruction: "S şeklinde kıvrılan kalın boynu ve ön boğaz boyunca üst üste binen zırh plakalarını çiz.",
        voice: "Boynun güçlü kas kıvrımlarını ve boğazını koruyan üst üste binmiş zırh plakalarını çiziyoruz.",
        svg: `<path d="M 295 155 C 315 215, 290 265, 265 300 M 355 180 C 385 235, 385 295, 355 350" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 325 185 C 350 235, 350 295, 325 350" fill="none" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "9. Adım: Kaslı Omuzlar ve Ön Kol Anatomisi",
        instruction: "Omuz başındaki üçgen deltoid kaslarını, dirsek eklemini ve güçlü ön bacakları çiz.",
        voice: "Omuz başındaki güçlü kas liflerini ve kayaya uzanan ön bacaklarını anatomik olarak çizelim.",
        svg: `<path d="M 310 330 C 335 355, 345 405, 355 470 L 390 470 L 375 395 L 365 335" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 275 340 L 265 415 L 275 470 L 308 470 L 302 405 L 305 350" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "10. Adım: Gövde Kaburga Hacmi ve Güçlü Arka Bacak",
        instruction: "Göğüsten kalçaya daralan karın hattını ve kaslı arka uyluk ile bilek eklemini çiz.",
        voice: "Gövdenin kaburga hacmini ve sıçramaya hazır güçlü arka bacak kaslarını çiziyoruz.",
        svg: `<path d="M 205 345 C 165 375, 165 425, 195 450 L 180 475 L 225 475 L 245 430 C 260 400, 250 365, 235 345" fill="none" stroke="#0f172a" stroke-width="9"/>`
      },
      {
        title: "11. Adım: Kayayı Parçalayan Yırtıcı Pençeler",
        instruction: "Her ayakta boğumlu parmakları ve kayaya saplanan kavisli siyah kartal pençelerini çiz.",
        voice: "Ayak parmaklarının boğumlarını ve kayaya saplanan keskin pençe tırnaklarını tek tek işleyelim.",
        svg: `<path d="M 355 470 L 372 492 L 375 470 L 395 490 L 398 470 M 275 470 L 288 490 L 295 470 L 310 488 M 180 475 L 168 495 L 195 478 L 192 498 L 215 478" fill="none" stroke="#0f172a" stroke-width="7"/>`
      },
      {
        title: "12. Adım: Zırhlı Kamçı Kuyruk ve Kuyruk Dikenleri",
        instruction: "Kalçadan sola doğru kıvrılan uzun kuyruğu ve sırtından kuyruk ucuna dizilen mızrak dikenleri çiz.",
        voice: "Arkaya doğru kıvrılan zırhlı kuyruğu ve üzerindeki keskin sırt dikenlerini tamamlıyoruz.",
        svg: `<path d="M 195 355 C 135 400, 90 400, 55 375 C 75 430, 125 450, 195 415" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 185 350 L 168 335 L 165 358 L 145 345 L 142 368 L 120 355 L 118 375" fill="none" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "13. Adım: Sol Dev Kanat Kolu ve Omuz Kasları",
        instruction: "Sırttan sol üst köşeye fırlayan kalın kanat kemiğini ve tepedeki boynuzlu kanat pençesini çiz.",
        voice: "Şimdi sırttan sol üst köşeye yükselen devasa ana kanat kemiğini ve dirsek pençesini çizelim.",
        svg: `<path d="M 270 255 L 45 95 L 28 72 L 62 88 L 282 240" fill="none" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "14. Adım: Kanat Parmak Kemikleri (4 Parmaklı Anatomi)",
        instruction: "Kanat dirseğinden yelpaze gibi açılan 4 uzun parmak kemiğini uçlarındaki pençelerle çiz.",
        voice: "Kanat dirseğinden yelpaze gibi açılan dört uzun parmak kemiğini aşağıya doğru uzatıyoruz.",
        svg: `<path d="M 45 95 L 20 355 M 45 95 L 115 335 M 45 95 L 175 375 M 45 95 L 235 335" fill="none" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "15. Adım: Gerilmiş Yırtık Kanat Zarları ve Damar Dokusu",
        instruction: "Parmak kemiklerinin arasını kavisli kanat zarlarıyla birleştir ve içine ince zar damarları ekle.",
        voice: "Parmak kemiklerinin arasını gerilmiş kanat zarlarıyla birleştirip içine ince damar çizgileri ekleyelim.",
        svg: `<path d="M 20 355 C 65 320, 95 320, 115 335 C 140 325, 160 340, 175 375 C 205 335, 225 335, 275 345" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 65 215 L 45 275 M 105 225 L 95 285 M 145 245 L 155 315" fill="none" stroke="#0f172a" stroke-width="4"/>`
      },
      {
        title: "16. Adım: Sağ Arka Kanat İskeleti ve Zarları",
        instruction: "Boynun arkasından sağ üste açılan ikinci büyük kanadı parmak kemikleriyle birlikte tamamla.",
        voice: "Ejderhanın sağ tarafında yükselen ikinci devasa kanadını da tüm ihtişamıyla çiziyoruz.",
        svg: `<path d="M 315 230 L 445 105 C 485 175, 495 235, 535 280 C 465 275, 415 295, 375 325" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 445 105 L 475 278 M 445 105 L 420 295" fill="none" stroke="#0f172a" stroke-width="5"/>`
      },
      {
        title: "17. Adım: Boyun ve Göğüs Zırh Dilimleri",
        instruction: "Çene altından kuyruk altına kadar uzanan kalın zırh plakalarını kavisli yatay çizgilerle böl.",
        voice: "Boğazından karnına kadar inen güçlü zırh plakalarını yatay boğum çizgileriyle tek tek bölüyoruz.",
        svg: `<path d="M 315 195 L 360 190 M 322 215 L 370 210 M 325 235 L 375 232 M 325 255 L 378 255 M 322 275 L 375 278 M 315 295 L 370 300 M 305 315 L 362 322" fill="none" stroke="#0f172a" stroke-width="5"/>`
      },
      {
        title: "18. Adım: Omuz, Bacak ve Sırt Pul Dokusu (Scale Texture)",
        instruction: "Boyun yanlarına, omuz üstlerine ve uyluk kaslarına elmas dizilimli ejderha pullarını işle.",
        voice: "Gerçek bir Usta Sanatçı dokunuşu! Omuzlarına ve bacaklarına elmas şeklinde ejderha pulları işliyoruz.",
        svg: `<path d="M 295 275 Q 305 285, 315 275 Q 325 285, 335 275 M 290 290 Q 300 300, 310 290 Q 320 300, 330 290 M 205 370 Q 215 380, 225 370 Q 235 380, 245 370 M 200 385 Q 210 395, 220 385 Q 230 395, 240 385" fill="none" stroke="#0f172a" stroke-width="4"/>`
      },
      {
        title: "19. Adım: Ağızdan Fışkıran Ateş Çekirdeği",
        instruction: "Açık çenenin içinden sağ alta doğru fışkıran akıcı ilk alev dalgasını çiz.",
        voice: "Şimdi ejderhanın ağzından fışkıran o yakıcı ateşin merkez çekirdek dalgasını çiziyoruz.",
        svg: `<path d="M 425 165 C 475 185, 525 220, 575 265 C 525 265, 475 235, 420 180" fill="none" stroke="#ea580c" stroke-width="7"/>`
      },
      {
        title: "20. Adım: Dönen Alev Dilleri ve Kıvılcımlar",
        instruction: "Ateş çekirdeğinin etrafına kıvrılan büyük alev dillerini ve uçuşan kor kıvılcımları ekle.",
        voice: "Alevin etrafında dönen büyük ateş dalgalarını ve etrafa saçılan kıvılcımları ekleyelim.",
        svg: `<path d="M 445 170 C 505 180, 555 215, 590 285 C 555 280, 545 305, 565 325 C 505 315, 465 265, 425 185" fill="none" stroke="#dc2626" stroke-width="8"/><circle cx="545" cy="205" r="5" fill="#facc15"/><circle cx="575" cy="235" r="6" fill="#f97316"/><circle cx="495" cy="295" r="5" fill="#facc15"/>`
      },
      {
        title: "21. Adım: Parçalanmış Volkanik Kaya ve Gölgelendirme Taramaları",
        instruction: "Ayakların altındaki keskin volkanik kaya çatlaklarını ve kanat altı tarama gölgelerini çiz.",
        voice: "Ayakların altındaki volkanik kaya çatlaklarını ve derinlik veren gölge taramalarını tamamlıyoruz.",
        svg: `<path d="M 70 535 L 180 465 L 340 455 L 470 535 M 215 470 L 245 525 M 335 460 L 310 515 M 355 475 L 410 525" fill="none" stroke="#0f172a" stroke-width="7"/>`
      },
      {
        title: "22. Adım: Usta Sanatçı Konsept Boyama ve Alev Işıması",
        instruction: "Sırtı koyu bordo-kırmızıya, kanat içlerini kor turuncusuna ve ateşi parlak sarıya boyayarak şaheserini tamamla!",
        voice: "Tebrikler Usta Sanatçı Kıvanç! 22 adımlık bu dev şaheseri başarıyla tamamladın! Şimdi alevlerin ışığıyla boyayabilirsin!",
        svg: `<g opacity="0.92">
          <path d="M 70 535 L 180 465 L 340 455 L 470 535 Z" fill="#1e293b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 265 245 L 45 95 C 25 185, 35 275, 20 355 C 95 315, 145 335, 175 375 C 215 335, 245 335, 275 345 Z" fill="#ea580c" stroke="#0f172a" stroke-width="10"/>
          <path d="M 315 230 L 445 105 C 485 175, 495 235, 535 280 C 465 275, 415 295, 375 325 Z" fill="#7f1d1d" stroke="#0f172a" stroke-width="9"/>
          <path d="M 325 105 C 390 95, 455 115, 465 140 L 405 160 L 455 195 C 410 215, 375 195, 345 175 C 375 235, 380 305, 335 375 L 195 420 C 125 450, 75 435, 55 385 C 95 415, 145 410, 195 370 C 245 315, 305 245, 295 150 Z" fill="#991b1b" stroke="#0f172a" stroke-width="10"/>
          <path d="M 435 165 C 485 185, 555 225, 590 285 C 535 315, 480 265, 425 185 Z" fill="#facc15" stroke="#ea580c" stroke-width="8"/>
        </g>`
      }
    ]
  },

  // =========================================================================
  // 11. TÜL YÜZGEÇLİ BETTA (SEVİYE 3: USTA SANATÇI)
  // =========================================================================
  {
    id: "deniz_betta_pro",
    categoryId: "deniz",
    name: "Tül Yüzgeçli Betta Balığı",
    emoji: "🐟",
    level: 3,
    levelName: "Usta Sanatçı (Seviye 3)",
    levelBadge: "🔴 Usta",
    description: "Suda ipek bir kumaş gibi dalgalanan dev tül yüzgeçleri, ışıltılı pulları ve asil duruşu.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Mavi/Pembe Boya Kalemleri",
    colors: [
      { name: "Kraliyet Mavisi", hex: "#1d4ed8" },
      { name: "Vişne Pembesi", hex: "#db2777" },
      { name: "Turkuaz Işıltı", hex: "#22d3ee" }
    ],
    previewSvg: `
      <path d="M 160 300 C 160 240, 280 230, 350 290 C 280 340, 160 350, 160 300 Z" fill="#1d4ed8" opacity="0.5" stroke="#0f172a" stroke-width="12"/>
      <path d="M 280 245 C 300 130, 420 110, 460 170 C 430 210, 380 220, 345 285 Z" fill="#db2777" opacity="0.4" stroke="#0f172a" stroke-width="12"/>
      <path d="M 350 290 C 440 220, 520 220, 540 300 C 560 380, 470 420, 345 315 Z" fill="#1d4ed8" opacity="0.5" stroke="#0f172a" stroke-width="12"/>
      <circle cx="210" cy="275" r="10" fill="#0f172a"/>
    `,
    steps: [
      {
        title: "1. Adım: Akıcı Balık Gövdesi ve Baş",
        instruction: "Sol tarafa bakan, burnu hafif yukarı kıvrık zarif balık gövdesini çiz.",
        voice: "Betta balığımızın akıcı ve zarif gövde çizgileriyle başlıyoruz.",
        svg: `<path d="M 160 300 C 160 240, 280 230, 350 290 C 280 340, 160 350, 160 300 Z" fill="#1d4ed8" opacity="0.4" stroke="#0f172a" stroke-width="12"/><circle cx="210" cy="275" r="10" fill="#0f172a"/>`
      },
      {
        title: "2. Adım: Göğe Yükselen İpek Sırt Yüzgeci",
        instruction: "Sırtından yukarı doğru rüzgarda dalgalanan ipek gibi devasa bir yüzgeç aç.",
        voice: "Balığın sırtından yukarı doğru ipek gibi dalgalanan dev yüzgecini çiziyoruz.",
        svg: `<path d="M 280 245 C 300 130, 420 110, 460 170 C 430 210, 380 220, 345 285 Z" fill="#db2777" opacity="0.4" stroke="#0f172a" stroke-width="12"/>`
      },
      {
        title: "3. Adım: Devasa Katmanlı Tül Kuyruk",
        instruction: "Gövdenin arkasından fışkıran alev gibi kat kat yayılan dev tül kuyruğu çiz.",
        voice: "Betta'nın en büyüleyici yeri! Suda bir kumaş gibi dans eden devasa tül kuyruğunu çizelim.",
        svg: `<path d="M 350 290 C 440 220, 520 220, 540 300 C 560 380, 470 420, 345 315 Z" fill="#1d4ed8" opacity="0.5" stroke="#0f172a" stroke-width="12"/><path d="M 370 290 Q 460 290, 520 300" stroke="#0f172a" stroke-width="6" fill="none"/>`
      },
      {
        title: "4. Adım: Sarkan Kurdele Yüzgeçler",
        instruction: "Balığın altından aşağıya süzülen iki ince zarif kurdele yüzgeci tamamla.",
        voice: "Son ustalık adımı! Balığın altından aşağıya zarifçe sarkan kurdele yüzgeçlerini tamamlıyoruz.",
        svg: `<path d="M 220 320 C 230 420, 200 480, 215 500 C 230 480, 250 410, 240 325 Z" fill="#db2777" stroke="#0f172a" stroke-width="10"/>`
      }
    ]
  },

  // =========================================================================
  // 12. YILDIZ SAVAŞÇISI (SEVİYE 3: USTA SANATÇI)
  // =========================================================================
  {
    id: "uzay_starfighter_pro",
    categoryId: "uzay",
    name: "Yıldız Savaşçısı (Starfighter X)",
    emoji: "🛸",
    level: 3,
    levelName: "Usta Sanatçı (Seviye 3)",
    levelBadge: "🔴 Usta",
    description: "Süpersonik elmas gövde, açılı savaş kanatları, lazer namluları ve ikiz plazma motorları.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Gri/Kırmızı/Mavi Boya Kalemleri",
    colors: [
      { name: "Uzay Grisi", hex: "#475569" },
      { name: "Plazma Mavisi", hex: "#06b6d4" },
      { name: "Lazer Kırmızısı", hex: "#ef4444" }
    ],
    previewSvg: `
      <path d="M 300 70 L 350 240 L 500 400 L 500 450 L 100 450 L 100 400 L 250 240 Z" fill="#475569" opacity="0.4" stroke="#0f172a" stroke-width="14"/>
      <path d="M 300 140 L 330 230 L 300 280 L 270 230 Z" fill="#38bdf8" stroke="#0f172a" stroke-width="10"/>
      <rect x="85" y="360" width="15" height="100" rx="4" fill="#ef4444"/>
      <rect x="500" y="360" width="15" height="100" rx="4" fill="#ef4444"/>
      <path d="M 265 470 L 275 540 L 285 470 Z" fill="#06b6d4"/>
      <path d="M 315 470 L 325 540 L 335 470 Z" fill="#06b6d4"/>
    `,
    steps: [
      {
        title: "1. Adım: Sivri Elmas Gövde Silüeti",
        instruction: "Yukarı doğru sivrilen elmas biçimli keskin uzay mekiği gövdesini çiz.",
        voice: "Yıldız savaşçımızın süpersonik sivri elmas gövde çizgileriyle başlıyoruz.",
        svg: `<path d="M 300 70 L 350 240 L 350 440 L 250 440 L 250 240 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Açılı Kokpit Camı ve Zırh Panelleri",
        instruction: "Gövdenin içine açılı fütüristik kokpit camını ve çelik panel çizgilerini çiz.",
        voice: "Pilotun uzayı izlediği yüksek teknolojili zırhlı kokpit camını yapalım.",
        svg: `<path d="M 300 140 L 330 230 L 300 280 L 270 230 Z" fill="#38bdf8" opacity="0.5" stroke="#0f172a" stroke-width="10"/><line x1="300" y1="140" x2="300" y2="280" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "3. Adım: İki Yana Açılan Lazerli Savaş Kanatları",
        instruction: "Sağa ve sola dev üçgen kanatlar aç ve uçlarına lazer namluları koy.",
        voice: "Şimdi iki yana açılan devasa savaş kanatlarını ve uçlarındaki lazer toplarını çiziyoruz.",
        svg: `<path d="M 250 280 L 100 400 L 100 450 L 250 420 Z" fill="#475569" opacity="0.4" stroke="#0f172a" stroke-width="14"/><path d="M 350 280 L 500 400 L 500 450 L 350 420 Z" fill="#475569" opacity="0.4" stroke="#0f172a" stroke-width="14"/><rect x="85" y="360" width="15" height="100" rx="4" fill="#ef4444" stroke="#0f172a" stroke-width="6"/><rect x="500" y="360" width="15" height="100" rx="4" fill="#ef4444" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "4. Adım: İkiz İyon Motorları ve Plazma Işıkları",
        instruction: "Geminin altına iki yuvarlak turbo motor ve arkadan fışkıran plazma ışıklarını tamamla.",
        voice: "Son ustalık adımı! Işık hızına çıkan iyon motorlarını ve arkadan taşan plazma alevlerini çiziyoruz.",
        svg: `<rect x="260" y="440" width="30" height="30" rx="6" stroke="#0f172a" stroke-width="10" fill="#64748b"/><rect x="310" y="440" width="30" height="30" rx="6" stroke="#0f172a" stroke-width="10" fill="#64748b"/><path d="M 265 470 L 275 540 L 285 470 Z" fill="#06b6d4"/><path d="M 315 470 L 325 540 L 335 470 Z" fill="#06b6d4"/>`
      }
    ]
  },

  // =========================================================================
  // 13. ZIRHLI MECHA ROBOT (SEVİYE 3: USTA SANATÇI)
  // =========================================================================
  {
    id: "uzay_mecha_pro",
    categoryId: "uzay",
    name: "Zırhlı Mecha Savaş Robotu",
    emoji: "🤖",
    level: 3,
    levelName: "Usta Sanatçı (Seviye 3)",
    levelBadge: "🔴 Usta",
    description: "Samuray robot kaskı, geniş omuz kalkanları, enerji reaktörü ve parlayan lazer kılıcı.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Gri, Sarı, Mavi Boya Kalemleri",
    colors: [
      { name: "Çelik Grisi", hex: "#64748b" },
      { name: "Lazer Sarısı", hex: "#fde047" },
      { name: "Enerji Mavisi", hex: "#38bdf8" }
    ],
    previewSvg: `
      <path d="M 240 180 L 270 120 L 330 120 L 360 180 L 300 210 Z" fill="#64748b" opacity="0.4" stroke="#0f172a" stroke-width="12"/>
      <rect x="260" y="150" width="80" height="18" rx="4" fill="#38bdf8"/>
      <path d="M 200 200 L 240 220 L 230 280 L 180 250 Z" fill="#64748b" stroke="#0f172a" stroke-width="10"/>
      <path d="M 400 200 L 360 220 L 370 280 L 420 250 Z" fill="#64748b" stroke="#0f172a" stroke-width="10"/>
      <rect x="250" y="220" width="100" height="90" rx="10" fill="#64748b" opacity="0.4" stroke="#0f172a" stroke-width="12"/>
      <circle cx="300" cy="265" r="16" fill="#fde047"/>
      <path d="M 435 340 L 480 180 L 470 175 L 425 335 Z" fill="#38bdf8"/>
    `,
    steps: [
      {
        title: "1. Adım: Köşeli Çelik Kask ve Vizör",
        instruction: "Köşeli samuray robot kaskı ve ortasında tek parça parlayan lazer vizörü çiz.",
        voice: "Mecha robotumuzun köşeli çelik kaskı ve parlayan lazer vizörüyle başlıyoruz.",
        svg: `<path d="M 240 180 L 270 120 L 330 120 L 360 180 L 300 210 Z" fill="#64748b" opacity="0.4" stroke="#0f172a" stroke-width="12"/><rect x="260" y="150" width="80" height="18" rx="4" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "2. Adım: Geniş Omuz Zırhları ve Göğüs Reaktörü",
        instruction: "Kafanın iki yanına dev omuz zırhları ve göğse parıldayan reaktör çemberi çiz.",
        voice: "Robotun güçlü omuz kalkanlarını ve göğsündeki enerji reaktörünü çiziyoruz.",
        svg: `<path d="M 200 200 L 240 220 L 230 280 L 180 250 Z" fill="#64748b" stroke="#0f172a" stroke-width="10"/><path d="M 400 200 L 360 220 L 370 280 L 420 250 Z" fill="#64748b" stroke="#0f172a" stroke-width="10"/><rect x="250" y="220" width="100" height="90" rx="10" fill="#64748b" opacity="0.4" stroke="#0f172a" stroke-width="12"/><circle cx="300" cy="265" r="16" fill="#fde047" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "3. Adım: Lazer Enerji Kılıcı ve Zırhlı Kollar",
        instruction: "Sağ kola yukarı doğru uzanan parlayan enerji kılıcını ve sol kola kalkan ekle.",
        voice: "Robotun eline geleceğin parıldayan lazer kılıcını ve kalkanını çizelim.",
        svg: `<path d="M 180 250 L 160 350 L 190 350" stroke="#0f172a" stroke-width="12" fill="none"/><path d="M 420 250 L 440 330 L 420 340" stroke="#0f172a" stroke-width="12" fill="none"/><path d="M 435 340 L 480 180 L 470 175 L 425 335 Z" fill="#38bdf8" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "4. Adım: Hidrolik Sağlam Bacaklar ve Çelik Botlar",
        instruction: "Ağır gövdeyi taşıyan iki kalın hidrolik bacak ve zırhlı botları tamamla.",
        voice: "Son dokunuş! Yeri titreten güçlü hidrolik bacakları ve çelik botları tamamlıyoruz.",
        svg: `<rect x="235" y="320" width="50" height="150" rx="8" fill="#64748b" stroke="#0f172a" stroke-width="10"/><rect x="315" y="320" width="50" height="150" rx="8" fill="#64748b" stroke="#0f172a" stroke-width="10"/><path d="M 220 470 L 290 470 L 290 510 L 210 510 Z" fill="#0f172a"/><path d="M 310 470 L 380 470 L 390 510 L 310 510 Z" fill="#0f172a"/>`
      }
    ]
  },

  // =========================================================================
  // 14. GÖLGE SAVAŞÇISI NİNJA (SEVİYE 2: RESSAM)
  // =========================================================================
  {
    id: "kahraman_ninja_pro",
    categoryId: "kahramanlar",
    name: "Gölge Savaşçısı Ninja",
    emoji: "🥷",
    level: 2,
    levelName: "Ressam (Seviye 2)",
    levelBadge: "🟡 Ressam",
    description: "Rüzgarda uçuşan kırmızı kafa bandı, sırtındaki katana kılıcı ve keskin odaklanmış gözleri.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Siyah/Kırmızı Boya Kalemleri",
    colors: [
      { name: "Gece Siyahı", hex: "#0f172a" },
      { name: "Kızıl Kafa Bandı", hex: "#dc2626" },
      { name: "Kılıç Çeliği", hex: "#e2e8f0" }
    ],
    previewSvg: `
      <path d="M 230 180 C 230 120, 370 120, 370 180 L 360 280 C 340 310, 260 310, 240 280 Z" fill="#0f172a"/>
      <rect x="245" y="195" width="110" height="35" rx="6" fill="#f8fafc"/>
      <circle cx="280" cy="215" r="4" fill="#0f172a"/><circle cx="320" cy="215" r="4" fill="#0f172a"/>
      <rect x="225" y="160" width="150" height="25" rx="4" fill="#dc2626"/>
      <path d="M 370 170 C 420 150, 460 170, 500 140 Z" fill="#dc2626"/>
      <line x1="200" y1="180" x2="380" y2="400" stroke="#cbd5e1" stroke-width="12"/>
    `,
    steps: [
      {
        title: "1. Adım: Yüz Maskesi ve Keskin Odaklanmış Gözler",
        instruction: "Yüzünü örten ninja maskesini ve ortadaki kararlı keskin gözleri çiz.",
        voice: "Gölge ninjamızın yüzünü örten maskesi ve hedefine kilitlenen keskin gözleriyle başlıyoruz.",
        svg: `<path d="M 230 180 C 230 120, 370 120, 370 180 L 360 280 C 340 310, 260 310, 240 280 Z" fill="#0f172a"/><rect x="245" y="195" width="110" height="35" rx="6" fill="#f8fafc"/><circle cx="280" cy="215" r="4" fill="#0f172a"/><circle cx="320" cy="215" r="4" fill="#0f172a"/>`
      },
      {
        title: "2. Adım: Rüzgarda Uçuşan Kırmızı Kafa Bandı",
        instruction: "Alnına kırmızı bir bandana ve arkaya doğru dalgalanan uzun şeritlerini çiz.",
        voice: "Ninjanın alnındaki bandanayı ve arkasında rüzgarla uçuşan kırmızı kumaşı çizelim.",
        svg: `<rect x="225" y="160" width="150" height="25" rx="4" fill="#dc2626" stroke="#0f172a" stroke-width="6"/><path d="M 370 170 C 420 150, 460 170, 500 140 C 470 180, 430 170, 375 185 Z" fill="#dc2626" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "3. Adım: Çapraz Katana Kılıcı ve Zırhlı Gövde",
        instruction: "Sırtından çapraz uzanan samuray kılıcının kabzasını ve gövdeyi çiz.",
        voice: "Ninjanın sırtında taşıdığı efsanevi katana kılıcını ve dövüş duruşunu çiziyoruz.",
        svg: `<path d="M 230 280 L 210 420 L 390 420 L 370 280 Z" fill="#0f172a"/><line x1="200" y1="180" x2="380" y2="400" stroke="#cbd5e1" stroke-width="12"/>`
      },
      {
        title: "4. Adım: Şuriken Fırlatma Yıldızları",
        instruction: "Ninjanın yanına havada dönen 4 köşeli metal şuriken yıldızlarını tamamla.",
        voice: "Son dokunuş! Ninjanın düşmanlarına fırlattığı metal şuriken yıldızlarını çiziyoruz.",
        svg: `<path d="M 140 240 L 150 260 L 170 265 L 150 275 L 140 295 L 130 275 L 110 265 L 130 260 Z" fill="#cbd5e1" stroke="#0f172a" stroke-width="6"/><circle cx="140" cy="267" r="6" fill="#0f172a"/>`
      }
    ]
  },

  // =========================================================================
  // 15. EFSANEVİ SAMURAY (SEVİYE 2: RESSAM)
  // =========================================================================
  {
    id: "kahraman_samuray_pro",
    categoryId: "kahramanlar",
    name: "Onurlu Japon Samurayı",
    emoji: "⚔️",
    level: 2,
    levelName: "Ressam (Seviye 2)",
    levelBadge: "🟡 Ressam",
    description: "Hilal boynuzlu samuray miğferi (kabuto), zırhlı omuz plakaları ve çift katana.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Altın/Siyah Boya Kalemleri",
    colors: [
      { name: "Zırh Siyahı", hex: "#0f172a" },
      { name: "Miğfer Altını", hex: "#f59e0b" },
      { name: "Kızıl İpek", hex: "#dc2626" }
    ],
    previewSvg: `
      <path d="M 220 180 C 220 110, 380 110, 380 180 L 390 240 L 210 240 Z" fill="#0f172a" stroke="#0f172a" stroke-width="12"/>
      <path d="M 190 140 C 240 70, 360 70, 410 140 C 370 120, 230 120, 190 140 Z" fill="#f59e0b" stroke="#0f172a" stroke-width="8"/>
      <circle cx="300" cy="115" r="16" fill="#f59e0b" stroke="#0f172a" stroke-width="6"/>
      <rect x="230" y="240" width="140" height="150" rx="10" fill="#0f172a"/>
    `,
    steps: [
      {
        title: "1. Adım: Samuray Miğferi ve Hilal Arması",
        instruction: "Geniş çelik miğfer kubbesini ve tepesindeki altın hilal boynuz armayı çiz.",
        voice: "Samurayın başını koruyan görkemli miğferi ve altın hilal armasıyla başlıyoruz.",
        svg: `<path d="M 220 180 C 220 110, 380 110, 380 180 L 390 240 L 210 240 Z" fill="#0f172a" stroke="#0f172a" stroke-width="12"/><path d="M 190 140 C 240 70, 360 70, 410 140 C 370 120, 230 120, 190 140 Z" fill="#f59e0b" stroke="#0f172a" stroke-width="8"/><circle cx="300" cy="115" r="16" fill="#f59e0b" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "2. Adım: Yüz Zırhı ve Odaklanmış Bakış",
        instruction: "Miğferin altından bakan kararlı savaşçı gözlerini ve yanak koruma kanatlarını çiz.",
        voice: "Miğferin altından bakan kararlı gözleri ve yanak zırhlarını çizelim.",
        svg: `<rect x="250" y="200" width="100" height="25" rx="4" fill="#f8fafc"/><circle cx="280" cy="212" r="5" fill="#0f172a"/><circle cx="320" cy="212" r="5" fill="#0f172a"/><path d="M 190 220 L 220 280 L 240 250" stroke="#0f172a" stroke-width="10" fill="none"/><path d="M 410 220 L 380 280 L 360 250" stroke="#0f172a" stroke-width="10" fill="none"/>`
      },
      {
        title: "3. Adım: Katmanlı Göğüs Zırhı ve Omuzluklar",
        instruction: "İpek bağcıklarla birbirine bağlanan basamaklı omuz zırh plakalarını ve göğüslüğü çiz.",
        voice: "Samuray zırhının basamaklı omuz plakalarını ve göğüs zırhını çiziyoruz.",
        svg: `<rect x="230" y="250" width="140" height="150" rx="10" fill="#0f172a" stroke="#0f172a" stroke-width="10"/><line x1="230" y1="300" x2="370" y2="300" stroke="#dc2626" stroke-width="8"/><line x1="230" y1="340" x2="370" y2="340" stroke="#dc2626" stroke-width="8"/>`
      },
      {
        title: "4. Adım: Keskin Çift Katana Kılıçları",
        instruction: "Kemerine asılı duran kavisli uzun katanayı ve kısa kılıcın kabzalarını tamamla.",
        voice: "Son ustalık adımı! Samurayın kuşağındaki asil katana kılıçlarını tamamlıyoruz.",
        svg: `<line x1="160" y1="350" x2="320" y2="460" stroke="#cbd5e1" stroke-width="12"/><rect x="300" y="445" width="40" height="16" rx="3" fill="#f59e0b" stroke="#0f172a" stroke-width="6"/>`
      }
    ]
  },

  // =========================================================================
  // 16. FORMULA 1 HIZ MAKİNESİ (SEVİYE 3: USTA SANATÇI)
  // =========================================================================
  {
    id: "araba_f1_master",
    categoryId: "arabalar",
    name: "Formula 1 Hız Canavarı",
    emoji: "🏎️",
    level: 3,
    levelName: "Usta Sanatçı (Seviye 3)",
    levelBadge: "🔴 Usta",
    description: "Geniş dış slick lastikler, aerodinamik ön burun difüzörü, halo güvenlik barı ve dev çift katlı arka kanat.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Kırmızı, Sarı, Siyah Boya Kalemleri",
    colors: [
      { name: "Ferrari Kırmızısı", hex: "#dc2626" },
      { name: "Pirelli Sarısı", hex: "#fde047" },
      { name: "Karbon Siyahı", hex: "#0f172a" }
    ],
    previewSvg: `
      <path d="M 60 380 L 170 380 L 220 330 L 440 330 L 500 370 L 540 370 L 530 330 L 420 290 L 260 300 L 120 340 L 60 370 Z" fill="#dc2626" opacity="0.6" stroke="#0f172a" stroke-width="14"/>
      <rect x="110" y="330" width="55" height="90" rx="16" fill="#0f172a"/>
      <rect x="440" y="310" width="65" height="110" rx="18" fill="#0f172a"/>
      <circle cx="340" cy="275" r="16" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
      <path d="M 480 260 L 550 260 L 550 290 L 480 290 Z" fill="#0f172a"/>
    `,
    steps: [
      {
        title: "1. Adım: Alçak Mermi Gövde ve Burun Kanadı",
        instruction: "Öne doğru sivrilen dar burun konisini ve ön rüzgar bıçağını çiz.",
        voice: "Formula 1 aracının havalı sivri ön burnu ve rüzgarı kesen kanatlarıyla başlıyoruz.",
        svg: `<path d="M 60 380 L 170 380 L 220 330 L 440 330 L 500 370 L 540 370 L 530 330 L 420 290 L 260 300 L 120 340 L 60 370 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Dışarıda Duran 2 Geniş Slick Lastik",
        instruction: "Gövdenin tamamen dışında duran geniş tabanlı ön ve arka yarış tekerleklerini çiz.",
        voice: "Gövdenin dışında duran koca yarış tekerleklerini ve sarı hız çizgilerini yapalım.",
        svg: `<rect x="110" y="330" width="55" height="90" rx="16" fill="#0f172a"/><rect x="440" y="310" width="65" height="110" rx="18" fill="#0f172a"/>`
      },
      {
        title: "3. Adım: Sürücü Kokpiti ve Halo Koruması",
        instruction: "Pilotun kaskını, direksiyonunu ve kafasını koruyan titanyum Halo barını çiz.",
        voice: "Pilotun oturduğu güvenli kokpiti ve başının üzerindeki Halo koruma barını çiziyoruz.",
        svg: `<circle cx="340" cy="275" r="16" fill="#facc15" stroke="#0f172a" stroke-width="8"/><path d="M 310 290 C 330 250, 360 250, 380 290" stroke="#0f172a" stroke-width="12" fill="none"/>`
      },
      {
        title: "4. Adım: Dev Arka Rüzgarlık Kanadı (DRS)",
        instruction: "Arka kapağın üstüne çift katlı aerodinamik arka spoyleri ve hava giriş bacasını tamamla.",
        voice: "Son ustalık adımı! Formula 1'e o muazzam hızını veren çift katlı arka kanadı tamamlıyoruz.",
        svg: `<path d="M 480 260 L 550 260 L 550 290 L 480 290 Z" fill="#0f172a"/><line x1="500" y1="290" x2="500" y2="340" stroke="#0f172a" stroke-width="10"/><path d="M 360 240 L 410 240 L 410 290 Z" fill="#dc2626" stroke="#0f172a" stroke-width="8"/>`
      }
    ]
  }
];
