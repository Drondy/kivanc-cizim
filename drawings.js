// ============================================================================
// KIVANÇ ÇİZİM ATÖLYESİ — PROFESSIONAL DRAWING ACADEMY
// 🟢 ÇIRAK SEVİYESİ (LEVEL 1) — 11 ADIMLI PEDAGOJİK ÇİZİM SİSTEMİ
//
// Standartlar:
// - viewBox: 0 0 600 600 (cx=300, cy=300 merkezli)
// - Organik Cubic Bezier (C, S, Q) yumuşak hatlar
// - Canlı lineer gradyanlar, ışık/gölge katmanları, çift yansımalı parlak gözler
// - Mavi kılavuz çizgileri (stroke="#3b82f6" stroke-dasharray="10 8") sonraki adımlarda gizlenir
// ============================================================================

const CATEGORIES_DATA = [
  { id: "all", name: "Tüm Çizimler", emoji: "🎨", count: 6 },
  { id: "dinozorlar", name: "Dinozorlar & Ejderhalar", emoji: "🦖", count: 1 },
  { id: "hayvanlar", name: "Vahşi & Sevimli Hayvanlar", emoji: "🦁", count: 1 },
  { id: "arabalar", name: "Süper Arabalar & Taşıtlar", emoji: "🏎️", count: 1 },
  { id: "deniz", name: "Derin Deniz Canlıları", emoji: "🐬", count: 1 },
  { id: "uzay", name: "Uzay Gemileri & Roketler", emoji: "🚀", count: 1 },
  { id: "kahramanlar", name: "Anime & Süper Kahramanlar", emoji: "🥷", count: 1 }
];

const DRAWINGS_DATA = [
  // =========================================================================
  // 1. SEVİMLİ ATEŞ EJDERHASI (11 ADIM - 🟢 ÇIRAK)
  // =========================================================================
  {
    id: "cirak_ates_ejderhasi",
    categoryId: "dinozorlar",
    name: "Sevimli Ateş Ejderhası",
    emoji: "🐲",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Mavi kılavuz çizgileriyle adım adım inşa edilen, kıvrık boynuzlu, büyük parlak gözlü ve kaya kaidesinde oturan kırmızı Ateş Ejderhası.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Kırmızı, Turuncu, Sarı, Gri Boya Kalemleri",
    colors: [
      { name: "Ateş Kırmızısı", hex: "#ef4444" },
      { name: "Kanat Turuncusu", hex: "#f97316" },
      { name: "Altın Sarısı", hex: "#facc15" },
      { name: "Kaya Grisi", hex: "#64748b" }
    ],
    previewSvg: `
      <defs>
        <linearGradient id="fireDrgBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ff6b4a"/>
          <stop offset="60%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#991b1b"/>
        </linearGradient>
        <linearGradient id="fireDrgBelly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="100%" stop-color="#f59e0b"/>
        </linearGradient>
        <linearGradient id="fireDrgWing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="60%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#ea580c"/>
        </linearGradient>
        <linearGradient id="fireDrgRock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#334155"/>
        </linearGradient>
        <linearGradient id="fireDrgHorn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
      </defs>
      <!-- Kaya Kaidesi -->
      <path d="M 110 515 C 160 475, 440 475, 490 515 C 450 550, 150 550, 110 515 Z" fill="url(#fireDrgRock)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <!-- Arka Kanat -->
      <path d="M 280 285 C 220 180, 120 170, 65 240 C 105 260, 130 290, 120 340 C 165 315, 205 325, 225 360 C 250 335, 275 335, 295 345 Z" fill="url(#fireDrgWing)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
      <path d="M 195 220 L 120 340 M 235 245 L 225 360" stroke="#b91c1c" stroke-width="5" stroke-linecap="round" fill="none"/>
      <!-- Kıvrık Kuyruk ve Ok Ucu -->
      <path d="M 230 450 C 130 470, 85 410, 115 355 C 125 385, 160 415, 220 410 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="9"/>
      <polygon points="115,355 90,360 115,325 140,355" fill="#f97316" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
      <!-- Tombul Gövde -->
      <path d="M 285 240 C 235 285, 215 380, 240 480 L 385 480 C 405 390, 395 295, 355 240 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="10"/>
      <!-- Karın Zırhı -->
      <path d="M 325 245 C 300 310, 300 395, 320 480 L 375 480 C 390 395, 385 310, 355 245 Z" fill="url(#fireDrgBelly)" stroke="#0f172a" stroke-width="8"/>
      <line x1="308" y1="295" x2="380" y2="295" stroke="#ca8a04" stroke-width="5" stroke-linecap="round"/>
      <line x1="305" y1="340" x2="385" y2="340" stroke="#ca8a04" stroke-width="5" stroke-linecap="round"/>
      <line x1="306" y1="385" x2="384" y2="385" stroke="#ca8a04" stroke-width="5" stroke-linecap="round"/>
      <line x1="310" y1="430" x2="380" y2="430" stroke="#ca8a04" stroke-width="5" stroke-linecap="round"/>
      <!-- Arka Bacak ve Pençeler -->
      <path d="M 230 380 C 185 400, 190 470, 245 490 L 295 490 C 295 455, 270 400, 230 380 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="9"/>
      <!-- Ön Bacaklar -->
      <path d="M 290 335 L 285 490 L 335 490 L 335 345 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="9"/>
      <path d="M 365 335 L 370 490 L 415 490 L 405 340 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="9"/>
      <!-- Pençe Tırnakları -->
      <circle cx="295" cy="490" r="7" fill="#fde047" stroke="#0f172a" stroke-width="4"/>
      <circle cx="312" cy="490" r="7" fill="#fde047" stroke="#0f172a" stroke-width="4"/>
      <circle cx="380" cy="490" r="7" fill="#fde047" stroke="#0f172a" stroke-width="4"/>
      <circle cx="398" cy="490" r="7" fill="#fde047" stroke="#0f172a" stroke-width="4"/>
      <!-- Sevimli Baş ve Yanaklar -->
      <path d="M 265 175 C 265 105, 395 105, 415 170 C 455 180, 455 230, 410 240 C 395 265, 330 265, 295 240 C 265 225, 265 195, 265 175 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="10"/>
      <!-- Boynuzlar -->
      <path d="M 295 135 C 255 115, 245 75, 265 60 C 280 80, 295 100, 320 120 Z" fill="url(#fireDrgHorn)" stroke="#0f172a" stroke-width="8"/>
      <path d="M 335 120 C 315 95, 315 65, 330 50 C 345 70, 355 90, 365 120 Z" fill="url(#fireDrgHorn)" stroke="#0f172a" stroke-width="8"/>
      <!-- Büyük Parlak Göz -->
      <ellipse cx="355" cy="175" rx="22" ry="26" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
      <circle cx="362" cy="177" r="12" fill="#0f172a"/>
      <circle cx="355" cy="168" r="6" fill="#ffffff"/>
      <circle cx="367" cy="183" r="3" fill="#ffffff"/>
      <path d="M 335 142 Q 355 132, 375 142" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
      <!-- Burun Deliği ve Gülümseyen Ağız -->
      <circle cx="426" cy="185" r="4" fill="#0f172a"/>
      <path d="M 365 215 C 385 235, 420 235, 430 215 C 425 245, 385 250, 365 215 Z" fill="#991b1b" stroke="#0f172a" stroke-width="6"/>
      <polygon points="380,222 386,232 392,223" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
      <polygon points="410,222 415,231 420,222" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
    `,
    steps: [
      {
        title: "1. Adım: Kafa ve Gövde Kılavuz Ovali (Mavi)",
        instruction: "Kalemini hiç bastırmadan üstte kafa için yatık bir yumurta, altta gövde için tombul bir armut kılavuzu çiz.",
        voice: "Önce kalemini hiç bastırmadan kafa için bir yumurta, altına gövde için tombul bir armut çizelim.",
        svg: `<ellipse cx="345" cy="185" rx="75" ry="62" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 285 240 C 235 285, 220 390, 250 480 C 300 495, 380 495, 395 450 C 405 370, 390 280, 355 240 Z" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Kuyruk ve Kanat Kılavuz Hatları (Mavi)",
        instruction: "Sola kıvrılan kuyruk yayını ve sırttan yukarı açılan kanat kılavuz çizgisini hafifçe ekle.",
        voice: "Şimdi arkaya doğru kıvrılan kuyruk çizgisini ve kanadın kılavuz yayını hafifçe çizelim.",
        svg: `<path d="M 235 450 C 125 470, 85 410, 115 350" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 280 285 C 210 180, 110 170, 65 240" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Kafa ve Burun/Çene Ana Konturu",
        instruction: "Mavi kafa kılavuzunun üzerinden geçerek yuvarlak alnı, sevimli çıkıntılı burnu ve çene hattını çiz.",
        voice: "Kafa kılavuzunun üzerinden geçerek ejderhamızın sevimli burnunu ve çenesini çiziyoruz.",
        svg: `<path d="M 265 175 C 265 105, 395 105, 415 170 C 455 180, 455 230, 410 240 C 395 265, 330 265, 295 240 C 265 225, 265 195, 265 175 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`
      },
      {
        title: "4. Adım: Ağız, Gülümseme, Dişler ve Burun Deliği",
        instruction: "Burnun üstüne minik bir burun deliği, altına neşeyle gülümseyen ağzı ve iki küçük sivri dişi çiz.",
        voice: "Ejderhamızın neşeli gülümseyen ağzını ve iki minik sevimli dişini ekleyelim.",
        svg: `<circle cx="426" cy="185" r="4" fill="#0f172a"/><path d="M 365 215 C 385 235, 420 235, 430 215 C 425 245, 385 250, 365 215 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><polygon points="380,222 386,232 392,223" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><polygon points="410,222 415,231 420,222" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>`
      },
      {
        title: "5. Adım: Büyük Parlak Gözler",
        instruction: "Yüzün ortasına kocaman oval bir göz, içine gözbebeği, iki parlayan beyaz ışık dairesi ve sevimli kaş çiz.",
        voice: "Şimdi kocaman parlak bir göz çizelim. İçine iki küçük beyaz ışık yuvarlağı bırakmayı unutma!",
        svg: `<ellipse cx="355" cy="175" rx="22" ry="26" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="362" cy="177" r="12" fill="#0f172a"/><circle cx="355" cy="168" r="6" fill="#ffffff"/><circle cx="367" cy="183" r="3" fill="#ffffff"/><path d="M 335 142 Q 355 132, 375 142" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`
      },
      {
        title: "6. Adım: Kıvrımlı Boynuzlar ve Yanak Yeleleri",
        instruction: "Başın tepesine geriye doğru kıvrılan iki altın boynuz ve yanakların soluna küçük zikzak yeleler ekle.",
        voice: "Başının üstüne geriye doğru kıvrılan iki güzel boynuz ve yanak yelelerini çiziyoruz.",
        svg: `<path d="M 295 135 C 255 115, 245 75, 265 60 C 280 80, 295 100, 320 120 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 335 120 C 315 95, 315 65, 330 50 C 345 70, 355 90, 365 120 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 265 175 L 240 190 L 268 202 L 245 215 L 275 225" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "7. Adım: Boyun, Göğüs ve Ön Bacaklar",
        instruction: "Kafanın altından aşağıya inen göğüs çizgisini ve yere sağlam basan iki ön bacağı çiz.",
        voice: "Boynundan aşağıya inerek göğsünü ve yere sağlam basan iki ön bacağını çiziyoruz.",
        svg: `<path d="M 285 240 C 255 270, 240 320, 235 375" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 290 335 L 285 490 L 335 490 L 335 345" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/><path d="M 365 335 L 370 490 L 415 490 L 405 340" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`
      },
      {
        title: "8. Adım: Sırt, Tombul Karın ve Arka Bacak Pençeleri",
        instruction: "Gövdenin sağ sırt kavisini, sol tarafta oturan arka bacağı ve ayakların ucundaki tırnakları ekle.",
        voice: "Sırt kavisini, oturan tombul arka bacağını ve ayaklarındaki sevimli tırnakları çizelim.",
        svg: `<path d="M 355 240 C 395 295, 405 390, 385 480" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 230 380 C 185 400, 190 470, 245 490 L 285 490" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/><circle cx="295" cy="490" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><circle cx="312" cy="490" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><circle cx="380" cy="490" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><circle cx="398" cy="490" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>`
      },
      {
        title: "9. Adım: Açılan Ateş Kanadı ve Ok Uçlu Kuyruk",
        instruction: "Sırttan yukarı büyük bir kanat aç, içindeki parmak çizgilerini birleştir ve arkaya kıvrılan kuyruğu ok ucuyla tamamla.",
        voice: "Sırttan yukarı büyük bir kanat açalım ve arkadaki kıvrık kuyruğun ucuna ok şeklini ekleyelim.",
        svg: `<path d="M 280 285 C 220 180, 120 170, 65 240 C 105 260, 130 290, 120 340 C 165 315, 205 325, 225 360 C 250 335, 275 335, 295 345" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/><path d="M 195 220 L 120 340 M 235 245 L 225 360" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><path d="M 230 450 C 130 470, 85 410, 115 355 C 125 385, 160 415, 220 410" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><polygon points="115,355 90,360 115,325 140,355" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "10. Adım: Karın Zırhı Çizgileri ve Kaya Kaidesi",
        instruction: "Karnına yatay zırh çizgilerini çiz ve ejderhamızın üzerine oturduğu büyük sağlam kayayı tamamla.",
        voice: "Karnındaki zırh çizgilerini ve altındaki kayayı çiziyoruz. Mavi kılavuz çizgileri silebilirsin!",
        svg: `<path d="M 325 245 C 300 310, 300 395, 320 480 M 375 480 C 390 395, 385 310, 355 245" fill="none" stroke="#0f172a" stroke-width="7"/><line x1="308" y1="295" x2="380" y2="295" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="305" y1="340" x2="385" y2="340" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="306" y1="385" x2="384" y2="385" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="310" y1="430" x2="380" y2="430" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><path d="M 110 515 C 160 475, 440 475, 490 515 C 450 550, 150 550, 110 515 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "11. Adım: Canlı Renklendirme ve Işık-Gölge",
        instruction: "Gövdeyi ateş kırmızısına, karın ve boynuzları altın sarısına, kanatları ise sıcak turuncuya boya!",
        voice: "Harika iş çıkardın Kıvanç! Şimdi Ateş Ejderhasını kırmızı, sarı ve turuncu renklerle boyayabilirsin!",
        svg: `<g opacity="0.95"><path d="M 110 515 C 160 475, 440 475, 490 515 C 450 550, 150 550, 110 515 Z" fill="#64748b" stroke="#0f172a" stroke-width="8"/><path d="M 280 285 C 220 180, 120 170, 65 240 C 105 260, 130 290, 120 340 C 165 315, 205 325, 225 360 C 250 335, 275 335, 295 345 Z" fill="#f97316" stroke="#0f172a" stroke-width="9"/><path d="M 285 240 C 235 285, 215 380, 240 480 L 385 480 C 405 390, 395 295, 355 240 Z" fill="#ef4444" stroke="#0f172a" stroke-width="10"/><path d="M 325 245 C 300 310, 300 395, 320 480 L 375 480 C 390 395, 385 310, 355 245 Z" fill="#facc15" stroke="#0f172a" stroke-width="8"/><path d="M 265 175 C 265 105, 395 105, 415 170 C 455 180, 455 230, 410 240 C 395 265, 330 265, 295 240 C 265 225, 265 195, 265 175 Z" fill="#ef4444" stroke="#0f172a" stroke-width="10"/><path d="M 295 135 C 255 115, 245 75, 265 60 C 280 80, 295 100, 320 120 Z" fill="#facc15" stroke="#0f172a" stroke-width="8"/><path d="M 335 120 C 315 95, 315 65, 330 50 C 345 70, 355 90, 365 120 Z" fill="#facc15" stroke="#0f172a" stroke-width="8"/></g>`
      }
    ]
  },
  // =========================================================================
  // 2. ZARİF KIZIL TİLKİ (11 ADIM - 🟢 ÇIRAK)
  // =========================================================================
  {
    id: "cirak_kizil_tilki",
    categoryId: "hayvanlar",
    name: "Zarif Kızıl Tilki",
    emoji: "🦊",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Büyük pofuduk kuyruğu, kar beyazı göğsü, dik kulakları ve parlak zeki gözleriyle çimenlikte oturan asil Kızıl Tilki.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Turuncu, Beyaz, Siyah, Yeşil Boya Kalemleri",
    colors: [
      { name: "Kızıl Turuncu", hex: "#ea580c" },
      { name: "Kar Beyazı", hex: "#f8fafc" },
      { name: "Gece Siyahı", hex: "#0f172a" },
      { name: "Çimen Yeşili", hex: "#22c55e" }
    ],
    previewSvg: `
      <defs>
        <linearGradient id="foxCoat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fb923c"/>
          <stop offset="60%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#c2410c"/>
        </linearGradient>
        <linearGradient id="foxWhite" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
        <linearGradient id="foxGrass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#86efac"/>
          <stop offset="100%" stop-color="#15803d"/>
        </linearGradient>
      </defs>
      <!-- Çimenlik Zemin -->
      <ellipse cx="300" cy="510" rx="200" ry="25" fill="url(#foxGrass)" stroke="#0f172a" stroke-width="8"/>
      <!-- Büyük Pofuduk Kuyruk (Gövdenin Arkasından Önüne Dolanır) -->
      <path d="M 370 450 C 480 430, 530 330, 480 240 C 430 190, 410 270, 430 320 C 450 370, 410 470, 350 480 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10"/>
      <!-- Kuyruk Beyaz Ucu -->
      <path d="M 480 240 C 455 210, 430 200, 415 220 C 420 250, 440 280, 430 320 C 445 300, 470 275, 480 240 Z" fill="url(#foxWhite)" stroke="#0f172a" stroke-width="8"/>
      <!-- Gövde -->
      <path d="M 245 285 C 220 350, 215 435, 240 495 L 360 495 C 380 435, 375 350, 355 285 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10"/>
      <!-- Ön Bacaklar ve Siyah Çoraplar -->
      <rect x="250" y="380" width="38" height="115" rx="16" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="9"/>
      <rect x="312" y="380" width="38" height="115" rx="16" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="9"/>
      <path d="M 250 460 L 250 495 L 288 495 L 288 460 Z" fill="#0f172a"/>
      <path d="M 312 460 L 312 495 L 350 495 L 350 460 Z" fill="#0f172a"/>
      <!-- Beyaz Göğüs Bağı -->
      <path d="M 260 285 C 275 340, 285 370, 300 395 C 315 370, 325 340, 340 285 Z" fill="url(#foxWhite)" stroke="#0f172a" stroke-width="7"/>
      <!-- Dik Üçgen Kulaklar -->
      <path d="M 230 150 L 190 55 L 270 120 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
      <path d="M 235 140 L 205 75 L 260 118 Z" fill="#0f172a"/>
      <path d="M 370 150 L 410 55 L 330 120 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
      <path d="M 365 140 L 395 75 L 340 118 Z" fill="#0f172a"/>
      <!-- Baş ve Sivri Burun -->
      <path d="M 205 195 C 205 130, 395 130, 395 195 C 395 260, 345 300, 300 300 C 255 300, 205 260, 205 195 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10"/>
      <!-- Beyaz Yanaklar -->
      <path d="M 205 215 C 245 245, 280 270, 300 295 C 320 270, 355 245, 395 215 C 365 275, 335 300, 300 300 C 265 300, 235 275, 205 215 Z" fill="url(#foxWhite)" stroke="#0f172a" stroke-width="8"/>
      <!-- Parlak Gözler -->
      <circle cx="258" cy="205" r="14" fill="#0f172a"/>
      <circle cx="254" cy="200" r="5" fill="#ffffff"/>
      <circle cx="262" cy="208" r="2.5" fill="#ffffff"/>
      <circle cx="342" cy="205" r="14" fill="#0f172a"/>
      <circle cx="338" cy="200" r="5" fill="#ffffff"/>
      <circle cx="346" cy="208" r="2.5" fill="#ffffff"/>
      <!-- Burun ve Bıyıklar -->
      <polygon points="288,272 312,272 300,285" fill="#0f172a" stroke="#0f172a" stroke-width="3" stroke-linejoin="round"/>
      <line x1="225" y1="260" x2="180" y2="255" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
      <line x1="225" y1="270" x2="185" y2="275" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
      <line x1="375" y1="260" x2="420" y2="255" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
      <line x1="375" y1="270" x2="415" y2="275" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
    `,
    steps: [
      {
        title: "1. Adım: Kafa ve Gövde Kılavuz Ovali (Mavi)",
        instruction: "Kalemini bastırmadan üste kafa için bir daire, alta ise oturan gövde için hafifçe bir armut kılavuzu çiz.",
        voice: "Önce kalemini hiç bastırmadan kafa için bir daire, altına da gövde için tombul bir armut kılavuzu çizelim.",
        svg: `<circle cx="300" cy="195" r="80" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><ellipse cx="300" cy="390" rx="75" ry="105" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Kulak ve Kuyruk Kılavuz Hatları (Mavi)",
        instruction: "Başın üstüne iki üçgen kulak kılavuzu ve sağ tarafa yukarı kıvrılan büyük kuyruk yayını hafifçe ekle.",
        voice: "Şimdi başın üstüne iki üçgen kulak ve yana doğru kıvrılan büyük kuyruk yayımızı hafifçe çiziyoruz.",
        svg: `<path d="M 230 150 L 190 55 L 270 120" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 370 150 L 410 55 L 330 120" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 370 450 C 480 430, 530 330, 480 240 C 430 190, 410 270, 430 320" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Kafa ve Sivri Çene Ana Konturu",
        instruction: "Mavi kafa dairesinin üzerinden geçerek pofuduk yanakları ve aşağıya inen zarif sivri çeneyi çiz.",
        voice: "Kafa kılavuzunun üzerinden geçerek tilkimizin sevimli yanaklarını ve sivri çenesini çizelim.",
        svg: `<path d="M 205 195 C 205 130, 395 130, 395 195 C 395 260, 345 300, 300 300 C 255 300, 205 260, 205 195 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`
      },
      {
        title: "4. Adım: Burun Ucu, Ağız ve Beyaz Yanak Maskesi",
        instruction: "Çenenin ucuna üçgen siyah bir burun ve gözlerin altından buruna inen beyaz yanak ayrım kıvrımlarını çiz.",
        voice: "Çenesinin ucuna küçük üçgen bir burun ve beyaz yanak kıvrımlarını ekliyoruz.",
        svg: `<polygon points="288,272 312,272 300,285" fill="#0f172a" stroke="#0f172a" stroke-width="3" stroke-linejoin="round"/><path d="M 205 215 C 245 245, 280 270, 300 295 C 320 270, 355 245, 395 215" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`
      },
      {
        title: "5. Adım: Büyük Parlak Tilki Gözleri",
        instruction: "Yüze iki yuvarlak zeki tilki gözü, içine siyah gözbebeği ve parlayan iki beyaz ışık noktası çiz.",
        voice: "Şimdi iki parlak göz çizelim. İçlerine küçük beyaz ışık yuvarlakları bırakmayı unutma!",
        svg: `<circle cx="258" cy="205" r="14" fill="#0f172a"/><circle cx="254" cy="200" r="5" fill="#ffffff"/><circle cx="262" cy="208" r="2.5" fill="#ffffff"/><circle cx="342" cy="205" r="14" fill="#0f172a"/><circle cx="338" cy="200" r="5" fill="#ffffff"/><circle cx="346" cy="208" r="2.5" fill="#ffffff"/>`
      },
      {
        title: "6. Adım: Dik Kulaklar ve İç Kürk Detayı",
        instruction: "Başın üstüne iki dik üçgen kulak çiz ve içlerine koyu renkli iç kulak üçgenlerini ekle.",
        voice: "Başının üstüne dimdik duran iki asil kulak ve içindeki koyu tüyleri çiziyoruz.",
        svg: `<path d="M 230 150 L 190 55 L 270 120 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/><path d="M 235 140 L 205 75 L 260 118 Z" fill="#0f172a"/><path d="M 370 150 L 410 55 L 330 120 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/><path d="M 365 140 L 395 75 L 340 118 Z" fill="#0f172a"/>`
      },
      {
        title: "7. Adım: Beyaz Göğüs ve Ön Bacaklar",
        instruction: "Kafanın altından inen beyaz göğüs yeleğini ve yere paralel basan iki düz ön bacağı çiz.",
        voice: "Boynunun altındaki beyaz göğüs tüylerini ve yere sağlam basan iki ön bacağını çizelim.",
        svg: `<path d="M 260 285 C 275 340, 285 370, 300 395 C 315 370, 325 340, 340 285" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><rect x="250" y="380" width="38" height="115" rx="16" fill="none" stroke="#0f172a" stroke-width="9"/><rect x="312" y="380" width="38" height="115" rx="16" fill="none" stroke="#0f172a" stroke-width="9"/>`
      },
      {
        title: "8. Adım: Sırt Çizgisi, Arka Gövde ve Siyah Patiler",
        instruction: "Gövdenin yan kıvrımlarını tamamla ve bacakların ucundaki zarif siyah pati çoraplarını çiz.",
        voice: "Gövdenin yan çizgilerini ve tilkinin ayaklarındaki o meşhur siyah çorap patilerini yapıyoruz.",
        svg: `<path d="M 245 285 C 220 350, 215 435, 240 495 L 360 495 C 380 435, 375 350, 355 285" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/><line x1="250" y1="460" x2="288" y2="460" stroke="#0f172a" stroke-width="6"/><line x1="312" y1="460" x2="350" y2="460" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "9. Adım: Kocaman Pofuduk Kuyruk",
        instruction: "Gövdenin sağından öne doğru sarılan devasa pofuduk kuyruğu ve ucundaki zikzak beyaz kürk ayrımını çiz.",
        voice: "Şimdi tilkinin en gösterişli yeri olan devasa pofuduk kuyruğunu öne doğru saralım.",
        svg: `<path d="M 370 450 C 480 430, 530 330, 480 240 C 430 190, 410 270, 430 320 C 450 370, 410 470, 350 480" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/><path d="M 430 320 C 445 300, 470 275, 480 240" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`
      },
      {
        title: "10. Adım: Bıyıklar ve Çimenlik Zemin",
        instruction: "Yanaklarına ince bıyık çizgileri ve ayaklarının altına oturduğu çimenlik zemini ekle.",
        voice: "Yanaklarına zarif bıyıklar ve oturduğu çimeni ekleyelim. Mavi kılavuz çizgileri silebilirsin!",
        svg: `<line x1="225" y1="260" x2="180" y2="255" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><line x1="225" y1="270" x2="185" y2="275" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><line x1="375" y1="260" x2="420" y2="255" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><line x1="375" y1="270" x2="415" y2="275" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><ellipse cx="300" cy="510" rx="200" ry="25" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "11. Adım: Canlı Renklendirme ve Kürk Tonları",
        instruction: "Tilkiyi kızıl turuncuya, göğsünü ve kuyruk ucunu bembeyaz boyayarak tamamla!",
        voice: "Muhteşem oldu Kıvanç! Şimdi zarif tilkimizi canlı kızıl turuncu, beyaz ve yeşille boyayabilirsin!",
        svg: `<g opacity="0.95"><ellipse cx="300" cy="510" rx="200" ry="25" fill="#22c55e" stroke="#0f172a" stroke-width="8"/><path d="M 370 450 C 480 430, 530 330, 480 240 C 430 190, 410 270, 430 320 C 450 370, 410 470, 350 480 Z" fill="#ea580c" stroke="#0f172a" stroke-width="10"/><path d="M 480 240 C 455 210, 430 200, 415 220 C 420 250, 440 280, 430 320 Z" fill="#f8fafc" stroke="#0f172a" stroke-width="8"/><path d="M 245 285 C 220 350, 215 435, 240 495 L 360 495 C 380 435, 375 350, 355 285 Z" fill="#ea580c" stroke="#0f172a" stroke-width="10"/><path d="M 260 285 C 275 340, 285 370, 300 395 C 315 370, 325 340, 340 285 Z" fill="#f8fafc" stroke="#0f172a" stroke-width="7"/><path d="M 205 195 C 205 130, 395 130, 395 195 C 395 260, 345 300, 300 300 C 255 300, 205 260, 205 195 Z" fill="#ea580c" stroke="#0f172a" stroke-width="10"/><path d="M 205 215 C 245 245, 280 270, 300 295 C 320 270, 355 245, 395 215 C 365 275, 335 300, 300 300 C 265 300, 235 275, 205 215 Z" fill="#f8fafc" stroke="#0f172a" stroke-width="8"/></g>`
      }
    ]
  },
  // =========================================================================
  // 3. SÜPER YARIŞ ARABASI FERRARI (11 ADIM - 🟢 ÇIRAK)
  // =========================================================================
  {
    id: "cirak_yaris_arabasi",
    categoryId: "arabalar",
    name: "Süper Yarış Arabası Ferrari",
    emoji: "🏎️",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Alçak aerodinamik burnu, cam kubbesi, yüksek GT arka spoyleri, sarı yarış jantları ve yarış şeritleriyle kırmızı Süper Ferrari.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Kırmızı, Sarı, Açık Mavi, Siyah Boya Kalemleri",
    colors: [
      { name: "Yarış Kırmızısı", hex: "#ef4444" },
      { name: "Pist Sarısı", hex: "#facc15" },
      { name: "Cam Mavisi", hex: "#38bdf8" },
      { name: "Asfalt Siyahı", hex: "#0f172a" }
    ],
    previewSvg: `
      <defs>
        <linearGradient id="carBodyRed" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="50%" stop-color="#dc2626"/>
          <stop offset="100%" stop-color="#991b1b"/>
        </linearGradient>
        <linearGradient id="carGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bae6fd"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="carRim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="100%" stop-color="#ca8a04"/>
        </linearGradient>
        <linearGradient id="carAsphalt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#64748b"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <!-- Asfalt Zemin -->
      <ellipse cx="300" cy="480" rx="230" ry="20" fill="url(#carAsphalt)" stroke="#0f172a" stroke-width="8"/>
      <!-- Yüksek Arka Spoyler -->
      <path d="M 105 270 L 155 270 L 145 320 L 115 320 Z" fill="#991b1b" stroke="#0f172a" stroke-width="8"/>
      <path d="M 85 260 L 175 260 L 165 275 L 75 275 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8"/>
      <!-- Ana Gövde -->
      <path d="M 95 385 C 80 340, 140 310, 200 310 L 260 250 C 310 220, 390 220, 420 260 L 480 320 C 520 330, 545 360, 535 395 C 525 435, 495 440, 465 440 L 125 440 C 95 440, 90 410, 95 385 Z" fill="url(#carBodyRed)" stroke="#0f172a" stroke-width="10"/>
      <!-- Kabin Camı -->
      <path d="M 270 260 C 310 235, 380 235, 405 265 L 455 315 L 225 315 Z" fill="url(#carGlass)" stroke="#0f172a" stroke-width="8"/>
      <!-- Yan Ayna -->
      <ellipse cx="250" cy="305" rx="14" ry="8" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
      <!-- Ön Farlar -->
      <path d="M 490 345 L 530 365 L 505 380 Z" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
      <path d="M 500 355 L 520 368" stroke="#ca8a04" stroke-width="4"/>
      <!-- Ön Tampon Alt Izgara -->
      <path d="M 485 410 L 530 405 L 525 430 L 480 430 Z" fill="#0f172a" stroke="#0f172a" stroke-width="6"/>
      <!-- Beyaz-Sarı Yarış Şeridi -->
      <path d="M 215 315 L 255 255 L 285 255 L 245 315 Z" fill="#ffffff" opacity="0.9"/>
      <path d="M 330 315 L 365 240 L 385 240 L 350 315 Z" fill="#ffffff" opacity="0.9"/>
      <!-- Arka Tekerlek -->
      <circle cx="175" cy="435" r="48" fill="#0f172a" stroke="#0f172a" stroke-width="6"/>
      <circle cx="175" cy="435" r="28" fill="url(#carRim)" stroke="#0f172a" stroke-width="6"/>
      <circle cx="175" cy="435" r="10" fill="#0f172a"/>
      <!-- Ön Tekerlek -->
      <circle cx="435" cy="435" r="48" fill="#0f172a" stroke="#0f172a" stroke-width="6"/>
      <circle cx="435" cy="435" r="28" fill="url(#carRim)" stroke="#0f172a" stroke-width="6"/>
      <circle cx="435" cy="435" r="10" fill="#0f172a"/>
    `,
    steps: [
      {
        title: "1. Adım: Aerodinamik Gövde ve Kabin Kılavuzu (Mavi)",
        instruction: "Kalemini bastırmadan altta uzun yatay bir dikdörtgen gövde, üstte ise kubbe kabin kılavuzunu hafifçe çiz.",
        voice: "Önce kalemini hiç bastırmadan altta uzun yarış arabası gövdesini, üstte de kabin kılavuzunu çizelim.",
        svg: `<path d="M 95 385 C 80 340, 140 310, 200 310 L 260 250 C 310 220, 390 220, 420 260 L 480 320 L 535 395 L 465 440 L 125 440 Z" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: İki Tekerlek Yuvası Kılavuzu (Mavi)",
        instruction: "Gövdenin altına ön ve arka tekerleklerin yerini belirleyen iki dairesel kılavuz çiz.",
        voice: "Şimdi ön ve arka tekerleklerin geleceği yerlere iki kılavuz çemberi hafifçe çiziyoruz.",
        svg: `<circle cx="175" cy="435" r="48" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><circle cx="435" cy="435" r="48" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Burun, Kaput ve Ön Tampon Konturu",
        instruction: "Mavi kılavuzun üzerinden geçerek yere yakın alçak yarış burnunu ve eğimli kaput hattını çiz.",
        voice: "Mavi çizginin üzerinden geçerek Ferrari'nin yere yakın alçak burnunu ve kaputunu çiziyoruz.",
        svg: `<path d="M 420 260 L 480 320 C 520 330, 545 360, 535 395 C 525 435, 495 440, 465 440" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "4. Adım: Ön Izgara, Hava Girişi ve Bölücü (Splitter)",
        instruction: "Tamponun altına yarış havasını emen geniş siyah ızgara kutusunu ve aerodinamik bıçağı çiz.",
        voice: "Ön tamponun altına yarış motorunu soğutan geniş hava ızgarasını ekleyelim.",
        svg: `<path d="M 485 410 L 530 405 L 525 430 L 480 430 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "5. Adım: Dinamik Damla Farlar ve Yan Ayna",
        instruction: "Kaputun köşesine geriye doğru uzanan damla farı ve kapı kenarına küçük yarış aynasını çiz.",
        voice: "Kaputun üstüne rüzgar gibi akan şık farını ve aerodinamik yan aynasını çizelim.",
        svg: `<path d="M 490 345 L 530 365 L 505 380 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="500" y1="355" x2="520" y2="368" stroke="#0f172a" stroke-width="5"/><ellipse cx="250" cy="305" rx="14" ry="8" fill="none" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "6. Adım: Kabin Tavanı ve Cam Kubbe",
        instruction: "Sürücünün oturduğu bombeli tavan yayını ve eğimli ön-yan cam hatlarını çiz.",
        voice: "Sürücü kabininin aerodinamik cam kubbesini ve tavan yayını çiziyoruz.",
        svg: `<path d="M 200 310 L 260 250 C 310 220, 390 220, 420 260" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 270 260 C 310 235, 380 235, 405 265 L 455 315 L 225 315 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "7. Adım: Ön Çamurluk ve Kalın Ön Tekerlek",
        instruction: "Ön tekerlek yuvasını ve içinde dönen kalın yarış lastiği çemberini çiz.",
        voice: "Ön çamurluk kavisini ve yere sımsıkı tutunan kalın ön lastiğimizi çizelim.",
        svg: `<circle cx="435" cy="435" r="48" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="435" cy="435" r="28" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "8. Adım: Yan Marşpiyel, Arka Çamurluk ve Arka Tekerlek",
        instruction: "İki tekerlek arasındaki alçak yan eteği ve arkadaki kalın çekiş tekerleğini çiz.",
        voice: "İki tekerlek arasındaki alt yarış marşpiyelini ve arka tekerleği tamamlayalım.",
        svg: `<path d="M 95 385 C 90 410, 95 440, 125 440 L 387 440" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><circle cx="175" cy="435" r="48" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="175" cy="435" r="28" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "9. Adım: Yüksek GT Arka Spoyler",
        instruction: "Bagajın üstüne arabayı yere bastıran yüksek yarış spoylerini ve iki ayağını çiz.",
        voice: "Arabanın virajlarda uçmasını engelleyen o harika yüksek arka spoyleri çiziyoruz.",
        svg: `<path d="M 105 270 L 155 270 L 145 320 L 115 320 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 85 260 L 175 260 L 165 275 L 75 275 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 95 385 C 80 340, 140 310, 200 310" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "10. Adım: Spor Jant Kolları, Yarış Şeritleri ve Asfalt Zemin",
        instruction: "Jantların içine göbek dairelerini, kaputun üstüne yarış çizgilerini ve altındaki asfalt yolu çiz.",
        voice: "Jantların göbeğini, havalı yarış şeritlerini ve asfalt pisti çizelim. Kılavuz çizgileri silebilirsin!",
        svg: `<circle cx="175" cy="435" r="10" fill="#0f172a"/><circle cx="435" cy="435" r="10" fill="#0f172a"/><line x1="250" y1="260" x2="225" y2="315" stroke="#0f172a" stroke-width="5"/><line x1="365" y1="240" x2="340" y2="315" stroke="#0f172a" stroke-width="5"/><ellipse cx="300" cy="480" rx="230" ry="20" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "11. Adım: Canlı Ferrari Kırmızısı Renklendirme",
        instruction: "Gövdeyi alev kırmızısına, camları gök mavisine ve jantları altın sarısına boya!",
        voice: "Harika oldu Kıvanç! Şimdi Ferrari yarış arabasını parlak kırmızı, sarı ve mavi renklerle boyayabilirsin!",
        svg: `<g opacity="0.95"><ellipse cx="300" cy="480" rx="230" ry="20" fill="#334155" stroke="#0f172a" stroke-width="8"/><path d="M 85 260 L 175 260 L 165 275 L 75 275 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8"/><path d="M 95 385 C 80 340, 140 310, 200 310 L 260 250 C 310 220, 390 220, 420 260 L 480 320 C 520 330, 545 360, 535 395 C 525 435, 495 440, 465 440 L 125 440 Z" fill="#ef4444" stroke="#0f172a" stroke-width="10"/><path d="M 270 260 C 310 235, 380 235, 405 265 L 455 315 L 225 315 Z" fill="#38bdf8" stroke="#0f172a" stroke-width="8"/><path d="M 490 345 L 530 365 L 505 380 Z" fill="#facc15" stroke="#0f172a" stroke-width="6"/><circle cx="175" cy="435" r="48" fill="#0f172a"/><circle cx="175" cy="435" r="28" fill="#facc15" stroke="#0f172a" stroke-width="6"/><circle cx="435" cy="435" r="48" fill="#0f172a"/><circle cx="435" cy="435" r="28" fill="#facc15" stroke="#0f172a" stroke-width="6"/></g>`
      }
    ]
  },
  // =========================================================================
  // 4. SEVİMLİ YUNUS BALIĞI (11 ADIM - 🟢 ÇIRAK)
  // =========================================================================
  {
    id: "cirak_yunus_baligi",
    categoryId: "deniz",
    name: "Sevimli Yunus Balığı",
    emoji: "🐬",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Masmavi dalgaların üzerinden neşeyle sıçrayan, pırıl pırıl gözlü, gülümseyen sevimli Yunus Balığı.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Açık Mavi, Koyu Mavi, Turkuaz Boya Kalemleri",
    colors: [
      { name: "Okyanus Mavisi", hex: "#0284c7" },
      { name: "Bebek Mavisi", hex: "#38bdf8" },
      { name: "Köpük Beyazı", hex: "#f0fdfa" },
      { name: "Derin Deniz", hex: "#0369a1" }
    ],
    previewSvg: `
      <defs>
        <linearGradient id="dolphinBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="60%" stop-color="#0284c7"/>
          <stop offset="100%" stop-color="#0369a1"/>
        </linearGradient>
        <linearGradient id="dolphinBelly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#e0f2fe"/>
        </linearGradient>
        <linearGradient id="oceanWaves" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#22d3ee"/>
          <stop offset="100%" stop-color="#0e7490"/>
        </linearGradient>
      </defs>
      <!-- Dalgalı Deniz Kaidesi -->
      <path d="M 80 490 C 130 460, 180 520, 240 480 C 300 450, 350 510, 420 475 C 470 450, 520 490, 550 480 C 550 540, 80 540, 80 490 Z" fill="url(#oceanWaves)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <!-- Sıçrayan Su Damlacıkları -->
      <circle cx="150" cy="440" r="10" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/>
      <circle cx="180" cy="410" r="7" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/>
      <circle cx="450" cy="420" r="9" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/>
      <circle cx="475" cy="445" r="6" fill="#38bdf8" stroke="#0f172a" stroke-width="3"/>
      <!-- Çift Kanatlı Kuyruk Yüzgeci (Fluke) -->
      <path d="M 125 415 C 80 395, 55 425, 75 460 C 105 450, 125 435, 140 435 C 135 455, 125 480, 155 485 C 170 460, 155 430, 140 420 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
      <!-- Sırt Yüzgeci (Dorsal Fin) -->
      <path d="M 320 185 C 330 115, 380 125, 395 180 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
      <!-- Ana Yunus Gövdesi -->
      <path d="M 440 210 C 490 220, 520 245, 515 270 C 490 280, 455 275, 430 265 C 350 310, 220 380, 130 425 C 220 340, 310 260, 390 215 C 405 210, 425 205, 440 210 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="10"/>
      <!-- Beyaz Karın Bölgesi -->
      <path d="M 475 270 C 440 275, 410 295, 360 325 C 270 375, 180 415, 130 425 C 210 370, 310 310, 420 270 Z" fill="url(#dolphinBelly)" stroke="#0f172a" stroke-width="6"/>
      <!-- Yan Yüzgeç (Pectoral Fin) -->
      <path d="M 360 305 C 350 365, 390 380, 405 340 C 395 320, 380 305, 360 305 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <!-- Şişe Burun ve Gülümseyen Ağız -->
      <path d="M 465 255 Q 495 260, 515 270" stroke="#0f172a" stroke-width="7" stroke-linecap="round" fill="none"/>
      <!-- Büyük Parlak Göz -->
      <circle cx="435" cy="235" r="14" fill="#0f172a"/>
      <circle cx="431" cy="230" r="5" fill="#ffffff"/>
      <circle cx="439" cy="238" r="2.5" fill="#ffffff"/>
      <!-- Nefes Deliği -->
      <ellipse cx="400" cy="205" rx="5" ry="3" fill="#0f172a"/>
    `,
    steps: [
      {
        title: "1. Adım: Sıçrayan Gövde Yay Kılavuzu (Mavi)",
        instruction: "Kalemini bastırmadan sağ üstten sol alta doğru kıvrılan muz/yay şeklinde büyük bir gövde kılavuzu çiz.",
        voice: "Önce dalgalardan sıçrayan neşeli yunusumuzun gövde yayını hafifçe çizelim.",
        svg: `<path d="M 440 210 C 510 230, 520 270, 475 275 C 370 330, 220 380, 130 425 C 220 340, 330 240, 440 210 Z" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Yüzgeç ve Kuyruk Kılavuzları (Mavi)",
        instruction: "Sırtına sivri yüzgeç, göğsüne yan yüzgeç ve arkaya çift kanatlı kuyruk kılavuzlarını hafifçe ekle.",
        voice: "Şimdi sırt yüzgecini, yan yüzgecini ve arkadaki kuyruğun yerini hafifçe çiziyoruz.",
        svg: `<path d="M 320 185 C 330 115, 380 125, 395 180" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 360 305 C 350 365, 390 380, 405 340" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 125 415 L 75 460 M 140 435 L 155 485" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Sevimli Baş ve Şişe Burun Konturu",
        instruction: "Mavi kılavuzun üzerinden geçerek bombeli alnı, yuvarlak burnu ve çene hattını çiz.",
        voice: "Yunusumuzun pürüzsüz bombeli alnını ve sevimli şişe burnunu çiziyoruz.",
        svg: `<path d="M 390 215 C 420 205, 450 205, 470 215 C 500 225, 520 245, 515 270 C 490 280, 455 275, 430 265" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "4. Adım: Gülümseyen Ağız Çizgisi ve Nefes Deliği",
        instruction: "Burnun ucundan geriye tatlı bir gülümseme çizgisi ve başının tepesine minik bir nefes deliği ekle.",
        voice: "Burnun ucuna mutlu bir gülümseme ve başının üstüne minik nefes deliğini çizelim.",
        svg: `<path d="M 465 255 Q 495 260, 515 270" stroke="#0f172a" stroke-width="7" stroke-linecap="round" fill="none"/><ellipse cx="400" cy="205" rx="5" ry="3" fill="#0f172a"/>`
      },
      {
        title: "5. Adım: Büyük Parlak Yunus Gözü",
        instruction: "Yüze kocaman dost canlısı bir göz, siyah gözbebeği ve parlayan iki beyaz ışık dairesi çiz.",
        voice: "Kocaman parlayan dost canlısı bir göz çizelim. İçindeki beyaz ışıkları unutma!",
        svg: `<circle cx="435" cy="235" r="14" fill="#0f172a"/><circle cx="431" cy="230" r="5" fill="#ffffff"/><circle cx="439" cy="238" r="2.5" fill="#ffffff"/>`
      },
      {
        title: "6. Adım: Geriye Kıvrık Sırt Yüzgeci (Dorsal Fin)",
        instruction: "Sırtının en tepe noktasına arkaya doğru zarifçe eğilen pürüzsüz sırt yüzgecini çiz.",
        voice: "Sırtının tepesine geriye doğru eğilen o güzel sırt yüzgecini çiziyoruz.",
        svg: `<path d="M 320 185 C 330 115, 380 125, 395 180 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`
      },
      {
        title: "7. Adım: Pürüzsüz Göğüs ve Yan Yüzgeç",
        instruction: "Boynunun altından inen göğüs kavisini ve suyun içinde yön veren yan yüzgeci çiz.",
        voice: "Gövdesinin altına suyun içinde kaymasını sağlayan yan yüzgecini çizelim.",
        svg: `<path d="M 360 305 C 350 365, 390 380, 405 340 C 395 320, 380 305, 360 305 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`
      },
      {
        title: "8. Adım: Kavisli Gövde ve Kuyruk Sapı",
        instruction: "Sırt yüzgecinden arkaya doğru inen pürüzsüz sırt hattını ve alt karın kıvrımını tamamla.",
        voice: "Sırtından kuyruğuna doğru inen ipeksi gövde çizgisini birleştirelim.",
        svg: `<path d="M 320 185 C 250 250, 180 330, 130 425 M 360 305 C 280 350, 200 395, 140 435" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "9. Adım: Çift Kanatlı Kuyruk Yüzgeci (Fluke)",
        instruction: "Kuyruk sapının ucuna hilal şeklinde açılan iki kanatlı geniş kuyruk yüzgecini çiz.",
        voice: "Kuyruğun ucuna yunusu hızla fırlatan iki kanatlı geniş kuyruk yüzgecini çiziyoruz.",
        svg: `<path d="M 125 415 C 80 395, 55 425, 75 460 C 105 450, 125 435, 140 435 C 135 455, 125 480, 155 485 C 170 460, 155 430, 140 420 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`
      },
      {
        title: "10. Adım: Karın Renk Ayrım Hattı, Dalgalar ve Damlalar",
        instruction: "Gövdenin ortasına beyaz karın ayrım çizgisini, alt tarafa köpüklü deniz dalgalarını ve damlaları ekle.",
        voice: "Karnındaki açık renk çizgisini ve altındaki coşkulu dalgaları çizelim. Mavi kılavuzları silebilirsin!",
        svg: `<path d="M 475 270 C 440 275, 410 295, 360 325 C 270 375, 180 415, 130 425" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><path d="M 80 490 C 130 460, 180 520, 240 480 C 300 450, 350 510, 420 475 C 470 450, 520 490, 550 480" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><circle cx="150" cy="440" r="10" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="450" cy="420" r="9" fill="none" stroke="#0f172a" stroke-width="5"/>`
      },
      {
        title: "11. Adım: Canlı Okyanus Renkleriyle Boyama",
        instruction: "Yunusumuzu pırıl pırıl gök mavisine, karnını kar beyazına, dalgaları ise turkuaza boya!",
        voice: "Harika iş çıkardın Kıvanç! Şimdi sevimli yunusumuzu masmavi okyanus renkleriyle boyayabilirsin!",
        svg: `<g opacity="0.95"><path d="M 80 490 C 130 460, 180 520, 240 480 C 300 450, 350 510, 420 475 C 470 450, 520 490, 550 480 C 550 540, 80 540, 80 490 Z" fill="#06b6d4" stroke="#0f172a" stroke-width="8"/><path d="M 125 415 C 80 395, 55 425, 75 460 C 105 450, 125 435, 140 435 C 135 455, 125 480, 155 485 C 170 460, 155 430, 140 420 Z" fill="#0284c7" stroke="#0f172a" stroke-width="9"/><path d="M 320 185 C 330 115, 380 125, 395 180 Z" fill="#0284c7" stroke="#0f172a" stroke-width="9"/><path d="M 440 210 C 490 220, 520 245, 515 270 C 490 280, 455 275, 430 265 C 350 310, 220 380, 130 425 C 220 340, 310 260, 390 215 C 405 210, 425 205, 440 210 Z" fill="#38bdf8" stroke="#0f172a" stroke-width="10"/><path d="M 475 270 C 440 275, 410 295, 360 325 C 270 375, 180 415, 130 425 C 210 370, 310 310, 420 270 Z" fill="#f0fdfa" stroke="#0f172a" stroke-width="6"/><path d="M 360 305 C 350 365, 390 380, 405 340 C 395 320, 380 305, 360 305 Z" fill="#0284c7" stroke="#0f172a" stroke-width="8"/></g>`
      }
    ]
  },
  // =========================================================================
  // 5. UZAY ROKETİ (11 ADIM - 🟢 ÇIRAK)
  // =========================================================================
  {
    id: "cirak_uzay_roketi",
    categoryId: "uzay",
    name: "Uzay Roketi",
    emoji: "🚀",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Kırmızı burun konisi, yuvarlak parlak lumbuzu, üçlü denge kanatları ve alev fışkırtan motoruyla uzaya fırlayan Uzay Roketi.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Kırmızı, Açık Mavi, Sarı, Turuncu Boya Kalemleri",
    colors: [
      { name: "Kutup Kırmızısı", hex: "#ef4444" },
      { name: "Kabin Beyazı", hex: "#f8fafc" },
      { name: "Lumbuz Camı", hex: "#38bdf8" },
      { name: "Alev Turuncusu", hex: "#f97316" }
    ],
    previewSvg: `
      <defs>
        <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="60%" stop-color="#e2e8f0"/>
          <stop offset="100%" stop-color="#94a3b8"/>
        </linearGradient>
        <linearGradient id="rocketRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f87171"/>
          <stop offset="60%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#991b1b"/>
        </linearGradient>
        <linearGradient id="rocketWindow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#67e8f9"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="rocketFlame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#dc2626"/>
        </linearGradient>
        <linearGradient id="planetGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#c084fc"/>
          <stop offset="100%" stop-color="#6b21a8"/>
        </linearGradient>
      </defs>
      <!-- Arka Plandaki Mor Gezegen -->
      <circle cx="470" cy="140" r="45" fill="url(#planetGrad)" stroke="#0f172a" stroke-width="7"/>
      <ellipse cx="470" cy="140" rx="65" ry="15" fill="none" stroke="#fef08a" stroke-width="6"/>
      <!-- Parlayan Uzay Yıldızları -->
      <polygon points="120,110 125,125 140,130 125,135 120,150 115,135 100,130 115,125" fill="#facc15"/>
      <polygon points="460,450 463,460 473,463 463,466 460,476 457,466 447,463 457,460" fill="#facc15"/>
      <!-- Büyük Alev Demeti -->
      <path d="M 265 435 C 240 480, 260 540, 300 565 C 340 540, 360 480, 335 435 Z" fill="url(#rocketFlame)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <path d="M 280 435 C 270 470, 285 510, 300 525 C 315 510, 330 470, 320 435 Z" fill="#fef08a"/>
      <!-- Sol ve Sağ Kanatlar -->
      <path d="M 235 340 C 160 380, 150 450, 195 460 C 220 460, 235 430, 240 400 Z" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
      <path d="M 365 340 C 440 380, 450 450, 405 460 C 380 460, 365 430, 360 400 Z" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
      <!-- Gövde -->
      <path d="M 300 90 C 250 160, 235 270, 240 435 L 360 435 C 365 270, 350 160, 300 90 Z" fill="url(#rocketBody)" stroke="#0f172a" stroke-width="10"/>
      <!-- Kırmızı Burun Şapkası -->
      <path d="M 300 90 C 280 120, 265 160, 258 190 L 342 190 C 335 160, 320 120, 300 90 Z" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="9"/>
      <!-- Tepe Anteni -->
      <line x1="300" y1="90" x2="300" y2="45" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
      <circle cx="300" cy="40" r="10" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
      <!-- Alt Motor Nozulu -->
      <path d="M 255 435 L 265 460 L 335 460 L 345 435 Z" fill="#475569" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <!-- Orta Denge Kanatçığı -->
      <rect x="294" y="360" width="12" height="75" rx="6" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="5"/>
      <!-- Büyük Lumbuz Pencere -->
      <circle cx="300" cy="270" r="42" fill="#475569" stroke="#0f172a" stroke-width="8"/>
      <circle cx="300" cy="270" r="30" fill="url(#rocketWindow)" stroke="#0f172a" stroke-width="5"/>
      <circle cx="290" cy="260" r="8" fill="#ffffff" opacity="0.8"/>
      <!-- Perçin Vidaları -->
      <circle cx="270" cy="270" r="3" fill="#ffffff"/>
      <circle cx="330" cy="270" r="3" fill="#ffffff"/>
      <circle cx="300" cy="240" r="3" fill="#ffffff"/>
      <circle cx="300" cy="300" r="3" fill="#ffffff"/>
    `,
    steps: [
      {
        title: "1. Adım: Füze Gövdesi Kılavuzu (Mavi)",
        instruction: "Kalemini bastırmadan ortada uzun mermi şeklinde dik bir gövde kılavuzu çiz.",
        voice: "Önce uzaya fırlayacak roketimiz için mermi şeklinde dik bir gövde kılavuzu çizelim.",
        svg: `<path d="M 300 90 C 250 160, 235 270, 240 435 L 360 435 C 365 270, 350 160, 300 90 Z" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Kanat ve Alev Kılavuzları (Mavi)",
        instruction: "Gövdenin iki yanına üçgen kanat kılavuzlarını ve altına alev üçgenini hafifçe ekle.",
        voice: "Şimdi iki yanındaki kanatların ve alttaki büyük roket alevinin kılavuzunu hafifçe çiziyoruz.",
        svg: `<path d="M 235 340 L 160 450 L 240 435" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 365 340 L 440 450 L 360 435" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 265 435 L 300 565 L 335 435" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Mermi Burun ve Aerodinamik Gövde Konturu",
        instruction: "Mavi kılavuzun üzerinden geçerek yukarı doğru sivrilen aerodinamik gövde hatlarını çiz.",
        voice: "Mavi çizginin üzerinden geçerek roketimizin pürüzsüz gövde çizgilerini çizelim.",
        svg: `<path d="M 300 90 C 250 160, 235 270, 240 435 M 300 90 C 350 160, 365 270, 360 435" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "4. Adım: İletişim Anteni ve Burun Şapkası Çizgisi",
        instruction: "Roketin tepesine dik bir anten çubuğu, ucuna sinyal topu ve burnuna yatay ayrım yayını çiz.",
        voice: "Roketin tepesine uzayla haberleşen antenini ve burun şapkasının ayrım çizgisini çiziyoruz.",
        svg: `<line x1="300" y1="90" x2="300" y2="45" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><circle cx="300" cy="40" r="10" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 258 190 C 285 200, 315 200, 342 190" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`
      },
      {
        title: "5. Adım: Büyük Dairesel Lumbuz Pencere",
        instruction: "Gövdenin tam ortasına astronotun dışarıyı izlediği çift halkalı büyük daire pencereyi çiz.",
        voice: "Astronotun yıldızları izleyeceği kocaman dairesel lumbuz penceresini çizelim.",
        svg: `<circle cx="300" cy="270" r="42" fill="none" stroke="#0f172a" stroke-width="9"/><circle cx="300" cy="270" r="30" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="290" cy="260" r="8" fill="#0f172a"/>`
      },
      {
        title: "6. Adım: Pencere Perçinleri ve Gövde Kuşağı",
        instruction: "Pencere çerçevesine 4 adet sağlam vida noktası ve gövdenin altına yatay kuşak çizgisini ekle.",
        voice: "Pencerenin sağlam montaj vidalarını ve roketin alt gövde kuşağını çiziyoruz.",
        svg: `<circle cx="270" cy="270" r="3.5" fill="#0f172a"/><circle cx="330" cy="270" r="3.5" fill="#0f172a"/><circle cx="300" cy="240" r="3.5" fill="#0f172a"/><circle cx="300" cy="300" r="3.5" fill="#0f172a"/><line x1="240" y1="360" x2="360" y2="360" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "7. Adım: Sol ve Sağ Dengeleme Kanatları",
        instruction: "Roketin iki yanından dışarı açılan kavisli büyük kırmızı kanatları çiz.",
        voice: "Roketin havada dengede kalmasını sağlayan sol ve sağ büyük kanatlarını çizelim.",
        svg: `<path d="M 235 340 C 160 380, 150 450, 195 460 C 220 460, 235 430, 240 400" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 365 340 C 440 380, 450 450, 405 460 C 380 460, 365 430, 360 400" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`
      },
      {
        title: "8. Adım: Motor Nozulu ve Orta Denge Kanatçığı",
        instruction: "Gövdenin alt tabanına motor nozulunu ve gövdenin tam ortasına dik küçük kanatçığı çiz.",
        voice: "Altındaki roket motoru çıkışını ve ortadaki dikey denge kanatçığını çiziyoruz.",
        svg: `<path d="M 255 435 L 265 460 L 335 460 L 345 435 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><rect x="294" y="360" width="12" height="75" rx="6" fill="none" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "9. Adım: Kükreyen Roket Alevi",
        instruction: "Motorun altından fışkıran dalgalı büyük alev demetini ve içindeki sıcak çekirdek alevini çiz.",
        voice: "Roketi gökyüzüne fırlatan o devasa kükreyen ateş demetini çizelim.",
        svg: `<path d="M 265 435 C 240 480, 260 540, 300 565 C 340 540, 360 480, 335 435" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 280 435 C 270 470, 285 510, 300 525 C 315 510, 330 470, 320 435" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`
      },
      {
        title: "10. Adım: Halkalı Gezegen ve Parlayan Yıldızlar",
        instruction: "Uzay boşluğuna halkalı bir gezegen ve parlayan dört köşeli yıldızlar ekle.",
        voice: "Arka plana halkalı bir uzay gezegeni ve parlayan yıldızlar ekleyelim. Mavi çizgileri silebilirsin!",
        svg: `<circle cx="470" cy="140" r="45" fill="none" stroke="#0f172a" stroke-width="7"/><ellipse cx="470" cy="140" rx="65" ry="15" fill="none" stroke="#0f172a" stroke-width="6"/><polygon points="120,110 125,125 140,130 125,135 120,150 115,135 100,130 115,125" fill="none" stroke="#0f172a" stroke-width="4"/><polygon points="460,450 463,460 473,463 463,466 460,476 457,466 447,463 457,460" fill="none" stroke="#0f172a" stroke-width="3"/>`
      },
      {
        title: "11. Adım: Canlı Uzay Renkleriyle Boyama",
        instruction: "Roketi beyaz, kırmızı ve sarıya, alevleri turuncuya ve gezegeni mora boyayarak tamamla!",
        voice: "Uçuşa hazır Kıvanç! Şimdi roketini canlı kırmızı, beyaz, sarı ve mor renklerle boyayabilirsin!",
        svg: `<g opacity="0.95"><circle cx="470" cy="140" r="45" fill="#c084fc" stroke="#0f172a" stroke-width="7"/><path d="M 265 435 C 240 480, 260 540, 300 565 C 340 540, 360 480, 335 435 Z" fill="#f97316" stroke="#0f172a" stroke-width="8"/><path d="M 280 435 C 270 470, 285 510, 300 525 C 315 510, 330 470, 320 435 Z" fill="#fef08a"/><path d="M 235 340 C 160 380, 150 450, 195 460 C 220 460, 235 430, 240 400 Z" fill="#ef4444" stroke="#0f172a" stroke-width="9"/><path d="M 365 340 C 440 380, 450 450, 405 460 C 380 460, 365 430, 360 400 Z" fill="#ef4444" stroke="#0f172a" stroke-width="9"/><path d="M 300 90 C 250 160, 235 270, 240 435 L 360 435 C 365 270, 350 160, 300 90 Z" fill="#f8fafc" stroke="#0f172a" stroke-width="10"/><path d="M 300 90 C 280 120, 265 160, 258 190 L 342 190 C 335 160, 320 120, 300 90 Z" fill="#ef4444" stroke="#0f172a" stroke-width="9"/><circle cx="300" cy="270" r="42" fill="#475569" stroke="#0f172a" stroke-width="8"/><circle cx="300" cy="270" r="30" fill="#38bdf8" stroke="#0f172a" stroke-width="5"/></g>`
      }
    ]
  },
  // =========================================================================
  // 6. GÖLGE NİNJA (11 ADIM - 🟢 ÇIRAK)
  // =========================================================================
  {
    id: "cirak_golge_ninja",
    categoryId: "kahramanlar",
    name: "Gölge Ninja",
    emoji: "🥷",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Alın koruyucu metal plakası, kararlı anime gözleri, sırttaki katana kılıcı, uçuşan kırmızı bandanası ve duman bulutuyla sevimli Gölge Ninja.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Gece Siyahı, Kırmızı, Gümüş Gri, Sarı Boya Kalemleri",
    colors: [
      { name: "Gölge Siyahı", hex: "#0f172a" },
      { name: "Savaşçı Kırmızısı", hex: "#ef4444" },
      { name: "Alınlık Grisi", hex: "#94a3b8" },
      { name: "Ten Rengi", hex: "#fed7aa" }
    ],
    previewSvg: `
      <defs>
        <linearGradient id="ninjaSuit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#334155"/>
          <stop offset="60%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
        <linearGradient id="ninjaRed" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f87171"/>
          <stop offset="100%" stop-color="#b91c1c"/>
        </linearGradient>
        <linearGradient id="ninjaPlate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f1f5f9"/>
          <stop offset="100%" stop-color="#64748b"/>
        </linearGradient>
        <linearGradient id="ninjaSmoke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#cbd5e1"/>
          <stop offset="100%" stop-color="#475569"/>
        </linearGradient>
      </defs>
      <!-- Sis/Duman Kaidesi -->
      <path d="M 120 515 C 160 480, 220 500, 260 485 C 300 470, 360 480, 400 485 C 440 495, 480 480, 500 515 C 450 550, 160 550, 120 515 Z" fill="url(#ninjaSmoke)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <!-- Sırttaki Katana Kılıcı Kını ve Kabzası -->
      <path d="M 370 190 L 450 110 L 465 125 L 385 205 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="7"/>
      <rect x="445" y="105" width="25" height="10" rx="3" fill="#ca8a04" stroke="#0f172a" stroke-width="4" transform="rotate(-45 445 105)"/>
      <path d="M 455 100 L 490 65 L 505 80 L 470 115 Z" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
      <!-- Uçuşan Kırmızı Kafa Bandı Bağcıkları -->
      <path d="M 230 170 C 180 160, 140 210, 95 200 C 130 225, 170 215, 230 190 Z" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
      <path d="M 230 180 C 170 190, 130 250, 85 250 C 120 270, 160 250, 230 205 Z" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
      <!-- Gövde ve Giysi -->
      <path d="M 250 280 C 230 330, 220 400, 240 485 L 360 485 C 380 400, 370 330, 350 280 Z" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="10"/>
      <!-- Kırmızı Bel Kuşağı -->
      <rect x="235" y="375" width="130" height="24" rx="6" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
      <!-- Sol ve Sağ Bacaklar -->
      <line x1="300" y1="400" x2="300" y2="485" stroke="#0f172a" stroke-width="8"/>
      <!-- Kollar ve Shuriken (Yıldız) Tutan Eller -->
      <path d="M 240 290 L 195 345 L 230 365 L 260 320" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <path d="M 360 290 L 405 345 L 370 365 L 340 320" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <circle cx="195" cy="355" r="12" fill="#fed7aa" stroke="#0f172a" stroke-width="5"/>
      <circle cx="405" cy="355" r="12" fill="#fed7aa" stroke="#0f172a" stroke-width="5"/>
      <!-- Eldeki Shuriken Yıldızı -->
      <polygon points="405,335 410,350 425,355 410,360 405,375 400,360 385,355 400,350" fill="#94a3b8" stroke="#0f172a" stroke-width="4"/>
      <!-- Baş ve Maske -->
      <ellipse cx="300" cy="180" rx="75" ry="70" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="10"/>
      <!-- Yüz Açıklığı (Ten Rengi) -->
      <path d="M 245 165 C 245 155, 355 155, 355 165 C 355 210, 245 210, 245 165 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="7"/>
      <!-- Alınlık Metal Plakası -->
      <rect x="240" y="130" width="120" height="28" rx="6" fill="url(#ninjaPlate)" stroke="#0f172a" stroke-width="7"/>
      <circle cx="248" cy="144" r="3" fill="#0f172a"/>
      <circle cx="352" cy="144" r="3" fill="#0f172a"/>
      <!-- Alınlık Sembolü (Ninja Yıldızı) -->
      <polygon points="300,136 303,142 309,144 303,146 300,152 297,146 291,144 297,142" fill="#0f172a"/>
      <!-- Kararlı Anime Gözleri -->
      <path d="M 260 175 Q 275 165, 290 178" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
      <circle cx="275" cy="182" r="9" fill="#0f172a"/>
      <circle cx="272" cy="179" r="3" fill="#ffffff"/>
      <path d="M 340 175 Q 325 165, 310 178" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
      <circle cx="325" cy="182" r="9" fill="#0f172a"/>
      <circle cx="322" cy="179" r="3" fill="#ffffff"/>
    `,
    steps: [
      {
        title: "1. Adım: Baş ve Gövde Kılavuz Ovali (Mavi)",
        instruction: "Kalemini bastırmadan üstte büyük yuvarlak kafa dairesi, altta ise atletik gövde kılavuzunu çiz.",
        voice: "Önce kalemini hiç bastırmadan ninjamızın yuvarlak kafasını ve altındaki gövde kılavuzunu çizelim.",
        svg: `<circle cx="300" cy="180" r="75" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 250 280 L 235 485 L 365 485 L 350 280 Z" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Kılıç ve Bandana Kılavuz Hatları (Mavi)",
        instruction: "Sırttan çapraz uzanan kılıç çizgisini ve kafanın solundan geriye uçuşan bandana yayını hafifçe ekle.",
        voice: "Şimdi sırtındaki çapraz kılıç hattını ve rüzgarda uçuşan bandanasını hafifçe çiziyoruz.",
        svg: `<line x1="370" y1="190" x2="505" y2="70" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 230 170 C 150 160, 100 240, 85 250" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Maskeli Kafa ve Yüz Açıklığı Konturu",
        instruction: "Mavi kafa kılavuzunun üzerinden geçerek yuvarlak başı ve ortadaki yatay yüz açıklığını çiz.",
        voice: "Kafa kılavuzunun üzerinden geçerek ninjanın maskesini ve göz açıklığını çizelim.",
        svg: `<ellipse cx="300" cy="180" rx="75" ry="70" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 245 165 C 245 155, 355 155, 355 165 C 355 210, 245 210, 245 165 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>`
      },
      {
        title: "4. Adım: Alın Koruyucu Metal Plaka",
        instruction: "Alnın üstüne metal koruyucu plakayı, köşelerindeki perçinleri ve ortadaki ninja sembolünü çiz.",
        voice: "Alnına sağlam metal koruyucusunu, vidalarını ve ninja amblemini çiziyoruz.",
        svg: `<rect x="240" y="130" width="120" height="28" rx="6" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="248" cy="144" r="3" fill="#0f172a"/><circle cx="352" cy="144" r="3" fill="#0f172a"/><polygon points="300,136 303,142 309,144 303,146 300,152 297,146 291,144 297,142" fill="#0f172a"/>`
      },
      {
        title: "5. Adım: Kararlı Anime Gözleri",
        instruction: "Yüz açıklığına iki kararlı, keskin anime gözü, koyu gözbebekleri ve parlayan beyaz ışıkları çiz.",
        voice: "Şimdi ninjamızın hedefe odaklanan kararlı ve parlak anime gözlerini çizelim.",
        svg: `<path d="M 260 175 Q 275 165, 290 178" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/><circle cx="275" cy="182" r="9" fill="#0f172a"/><circle cx="272" cy="179" r="3" fill="#ffffff"/><path d="M 340 175 Q 325 165, 310 178" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/><circle cx="325" cy="182" r="9" fill="#0f172a"/><circle cx="322" cy="179" r="3" fill="#ffffff"/>`
      },
      {
        title: "6. Adım: Uçuşan Kırmızı Kafa Bandı Kuyrukları",
        instruction: "Kafanın sol tarafından rüzgarla arkaya doğru dalgalanan iki kırmızı bandana şeridini çiz.",
        voice: "Başının solundan rüzgarla uçuşan o harika kırmızı bandana kurdelelerini çiziyoruz.",
        svg: `<path d="M 230 170 C 180 160, 140 210, 95 200 C 130 225, 170 215, 230 190 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 230 180 C 170 190, 130 250, 85 250 C 120 270, 160 250, 230 205 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "7. Adım: Gövde Yeleği ve Kırmızı Bel Kuşağı",
        instruction: "Boyundan aşağıya inen ninja cübbesini ve beline bağlanan geniş kırmızı kuşağı çiz.",
        voice: "Boyundan aşağıya inen ninja yeleğini ve belindeki kırmızı savaş kuşağını çizelim.",
        svg: `<path d="M 250 280 C 230 330, 220 400, 240 485 L 360 485 C 380 400, 370 330, 350 280 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/><rect x="235" y="375" width="130" height="24" rx="6" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "8. Adım: Ninja Kolları, Eller ve Shuriken (Fırlatma Yıldızı)",
        instruction: "İki yana bükülü kolları, yumrukları ve sağ elindeki sivri 4 köşeli ninja yıldızını çiz.",
        voice: "Kollarını, ellerini ve elindeki sivri ninja yıldızını çiziyoruz.",
        svg: `<path d="M 240 290 L 195 345 L 230 365 L 260 320" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 360 290 L 405 345 L 370 365 L 340 320" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><circle cx="195" cy="355" r="12" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="405" cy="355" r="12" fill="none" stroke="#0f172a" stroke-width="6"/><polygon points="405,335 410,350 425,355 410,360 405,375 400,360 385,355 400,350" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>`
      },
      {
        title: "9. Adım: Sırttaki Katana Kılıcı ve Kabzası",
        instruction: "Omzun arkasından yukarı uzanan kılıç kınını, el siperliğini ve örgülü kabzayı çiz.",
        voice: "Sırtında taşıdığı efsanevi katana kılıcının kınını ve kabzasını çizelim.",
        svg: `<path d="M 370 190 L 450 110 L 465 125 L 385 205 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><rect x="445" y="105" width="25" height="10" rx="3" fill="none" stroke="#0f172a" stroke-width="5" transform="rotate(-45 445 105)"/><path d="M 455 100 L 490 65 L 505 80 L 470 115 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "10. Adım: Bacak Çizgisi ve Gizemli Duman Bulutu",
        instruction: "Bacakların ortasına dikey ayrım çizgisini ve ninjanın bastığı kıvrımlı sis dumanını ekle.",
        voice: "Bacak ayrımını ve altındaki gizemli duman bulutunu çiziyoruz. Mavi kılavuzları silebilirsin!",
        svg: `<line x1="300" y1="400" x2="300" y2="485" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><path d="M 120 515 C 160 480, 220 500, 260 485 C 300 470, 360 480, 400 485 C 440 495, 480 480, 500 515 C 450 550, 160 550, 120 515" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "11. Adım: Canlı Gölge Ninja Renkleri",
        instruction: "Kostümü gece siyahına, bandanayı ve kuşağı canlı kırmızıya, alınlığı ise parlak griye boya!",
        voice: "Görevin tamamlandı Kıvanç! Şimdi ninjamızı asil siyah, kırmızı ve gri renklerle boyayabilirsin!",
        svg: `<g opacity="0.95"><path d="M 120 515 C 160 480, 220 500, 260 485 C 300 470, 360 480, 400 485 C 440 495, 480 480, 500 515 C 450 550, 160 550, 120 515 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="8"/><path d="M 230 170 C 180 160, 140 210, 95 200 C 130 225, 170 215, 230 190 Z" fill="#ef4444" stroke="#0f172a" stroke-width="7"/><path d="M 250 280 C 230 330, 220 400, 240 485 L 360 485 C 380 400, 370 330, 350 280 Z" fill="#1e293b" stroke="#0f172a" stroke-width="10"/><rect x="235" y="375" width="130" height="24" rx="6" fill="#ef4444" stroke="#0f172a" stroke-width="7"/><ellipse cx="300" cy="180" rx="75" ry="70" fill="#1e293b" stroke="#0f172a" stroke-width="10"/><path d="M 245 165 C 245 155, 355 155, 355 165 C 355 210, 245 210, 245 165 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="7"/><rect x="240" y="130" width="120" height="28" rx="6" fill="#94a3b8" stroke="#0f172a" stroke-width="7"/></g>`
      }
    ]
  }
];
