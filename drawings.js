// ============================================================================
// KIVANÇ ÇİZİM ATÖLYESİ — PROFESSIONAL DRAWING ACADEMY
// 🟢 ÇIRAK SEVİYESİ (LEVEL 1) — MİKRO ADIMLI PEDAGOJİK ÇİZİM SİSTEMİ
//
// Standartlar:
// - viewBox: 0 0 600 600 (cx=300, cy=300 merkezli)
// - Her adım TEK BİR ÇİZGİ veya ŞEKİL içerir (Kıvanç'ın kağıt üzerinde adım adım takip etmesi için)
// - Mavi kılavuz çizgileri (stroke="#3b82f6") çizim boyunca hafifçe kalır, son boyama adımında silinir
// - Canlı lineer gradyanlar, ışık/gölge katmanları, çift yansımalı parlak gözler
// ============================================================================

const CATEGORIES_DATA = [
  { id: "all", name: "Tüm Dünyalar", emoji: "🎨", count: 6 },
  { id: "dinozorlar", name: "Dinozorlar & Ejderhalar", emoji: "🐲", count: 1, desc: "Ateş püskürten ejderhalar ve dev dinozorlar" },
  { id: "hayvanlar", name: "Vahşi & Sevimli Hayvanlar", emoji: "🦊", count: 1, desc: "Ormanın ve doğanın en sevimli dostları" },
  { id: "arabalar", name: "Süper Arabalar & Taşıtlar", emoji: "🏎️", count: 1, desc: "Hızlı yarış arabaları ve güçlü makineler" },
  { id: "deniz", name: "Derin Deniz Canlıları", emoji: "🐬", count: 1, desc: "Okyanusun derinliklerindeki sihirli canlılar" },
  { id: "uzay", name: "Uzay Gemileri & Roketler", emoji: "🚀", count: 1, desc: "Yıldızlara ve gezegenlere uçan roketler" },
  { id: "kahramanlar", name: "Anime & Süper Kahramanlar", emoji: "🥷", count: 1, desc: "Cesur ninjalar ve süper kahramanlar" }
];

const DRAWINGS_DATA = [
  // =========================================================================
  // 1. SEVİMLİ ATEŞ EJDERHASI (24 MİKRO ADIM - 🟢 ÇIRAK)
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
      <!-- Burun ve Ağız -->
      <circle cx="426" cy="185" r="4" fill="#0f172a"/>
      <path d="M 365 215 C 385 235, 420 235, 430 215 C 425 245, 385 250, 365 215 Z" fill="#991b1b" stroke="#0f172a" stroke-width="6"/>
      <polygon points="380,222 386,232 392,223" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
      <polygon points="410,222 415,231 420,222" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
    `,
    steps: [
      {
        title: "1. Adım: Kafa Kılavuz Dairesi (Mavi)",
        instruction: "Kalemini hiç bastırmadan kağıdın üst kısmına yuvarlak bir kafa kılavuzu çiz.",
        voice: "Önce kurşun kalemini hiç bastırmadan kağıdın üst tarafına yuvarlak bir kafa kılavuzu çizelim.",
        svg: `<ellipse cx="345" cy="185" rx="75" ry="62" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Gövde Kılavuz Armutu (Mavi)",
        instruction: "Kafanın hemen altına tombul, hafif yatık bir armut şeklinde gövde kılavuzu ekle.",
        voice: "Şimdi kafanın hemen altına tombul bir armut gibi gövde kılavuzumuzu çizelim.",
        svg: `<path d="M 285 240 C 235 285, 220 390, 250 480 C 300 495, 380 495, 395 450 C 405 370, 390 280, 355 240 Z" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Kuyruk Kılavuz Yayı (Mavi)",
        instruction: "Gövdenin sol altından geriye doğru kıvrılan ince kuyruk kılavuz yayını çiz.",
        voice: "Gövdenin sol altından arkaya doğru kıvrılan hafif bir kuyruk çizgisi ekleyelim.",
        svg: `<path d="M 235 450 C 125 470, 85 410, 115 350" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "4. Adım: Kanat Kılavuz Yayı (Mavi)",
        instruction: "Sırttan yukarı doğru açılan kanat kılavuz yayını ekle.",
        voice: "Şimdi sırttan yukarı göğe doğru açılan kanat kılavuz yayımızı çizelim.",
        svg: `<path d="M 280 285 C 210 180, 110 170, 65 240" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "5. Adım: Alın ve Baş Tepesi Hattı (Siyah)",
        instruction: "Mavi kılavuzun üzerinden kurşun kaleminle geçerek yuvarlak alın ve baş tepesini netleştir.",
        voice: "Şimdi kalemimizi biraz daha bastırıp mavi dairenin üstünden yuvarlak alnı çiziyoruz.",
        svg: `<path d="M 265 175 C 265 105, 395 105, 415 170" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "6. Adım: Tombul Burun ve Çene Kavisi",
        instruction: "Alından öne doğru uzanan sevimli burun çıkıntısını ve alt çeneyi çiz.",
        voice: "Alından öne doğru uzanan tombul burnu ve çene kıvrımını tamamlayalım.",
        svg: `<path d="M 415 170 C 455 180, 455 230, 410 240 C 395 265, 330 265, 295 240 C 265 225, 265 195, 265 175" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "7. Adım: Minik Burun Deliği",
        instruction: "Burnun ucuna minik bir nokta koy.",
        voice: "Burnun hemen ucuna küçük bir burun deliği noktası yapalım.",
        svg: `<circle cx="426" cy="185" r="4" fill="#0f172a"/>`
      },
      {
        title: "8. Adım: Neşeyle Gülümseyen Ağız",
        instruction: "Burnun altına neşeyle yukarı kıvrılan tatlı bir gülümseme çizgisi ekle.",
        voice: "Burnun altına ejderhamızın mutlu bir şekilde gülümsediği ağız çizgisini yapalım.",
        svg: `<path d="M 365 215 C 385 235, 420 235, 430 215" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`
      },
      {
        title: "9. Adım: İki Minik Sivri Diş",
        instruction: "Gülümseyen ağzın içinden sarkan iki küçük sevimli üçgen diş çiz.",
        voice: "Ağzın içinden minik iki tane sevimli diş ekleyelim.",
        svg: `<polygon points="380,222 386,232 392,223" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><polygon points="410,222 415,231 420,222" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>`
      },
      {
        title: "10. Adım: Büyük Parlak Göz Çerçevesi",
        instruction: "Yüzün ortasına dik duran büyük oval bir göz çerçevesi çiz.",
        voice: "Yüzün tam ortasına kocaman, tatlı bir göz çerçevesi yapalım.",
        svg: `<ellipse cx="355" cy="175" rx="22" ry="26" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "11. Adım: Gözbebeği ve Parlayan İki Işık",
        instruction: "Gözün içine siyah gözbebeğini ve iki parlayan beyaz ışık dairesini yap.",
        voice: "Gözün içine siyah gözbebeğini ve pırıl pırıl iki beyaz parlama ışığını çizelim.",
        svg: `<circle cx="362" cy="177" r="12" fill="#0f172a"/><circle cx="355" cy="168" r="6" fill="#ffffff"/><circle cx="367" cy="183" r="3" fill="#ffffff"/>`
      },
      {
        title: "12. Adım: Sevimli Kaş Çizgisi",
        instruction: "Gözün hemen üstüne neşeli tatlı bir kaş kıvrımı ekle.",
        voice: "Gözün üstüne tatlı bir kaş çizgisi çizelim.",
        svg: `<path d="M 335 142 Q 355 132, 375 142" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`
      },
      {
        title: "13. Adım: Sol Sivri Boynuz",
        instruction: "Başın arkasından yukarıya doğru kıvrılan ilk altın boynuzu çiz.",
        voice: "Başın arkasından yukarı kıvrılan birinci sivri boynuzumuzu çizelim.",
        svg: `<path d="M 295 135 C 255 115, 245 75, 265 60 C 280 80, 295 100, 320 120 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`
      },
      {
        title: "14. Adım: Sağ Sivri Boynuz",
        instruction: "İlk boynuzun hemen yanına ikinci sivri boynuzu ekle.",
        voice: "Şimdi yanına ikinci sivri boynuzumuzu ekleyelim.",
        svg: `<path d="M 335 120 C 315 95, 315 65, 330 50 C 345 70, 355 90, 365 120 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`
      },
      {
        title: "15. Adım: Yanak Yelesi Zikzakları",
        instruction: "Yanağın sol arkasına üçlü zikzak şeklinde sevimli yele tüyleri çiz.",
        voice: "Yanağın arkasına zikzak şeklinde tatlı bir ejderha yelesi ekleyelim.",
        svg: `<path d="M 265 175 L 240 190 L 268 202 L 245 215 L 275 225" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "16. Adım: Boyun ve Göğüs Çizgisi",
        instruction: "Çenenin altından göğse doğru inen yumuşak çizgiyi çiz.",
        voice: "Çenenin altından gövdeye doğru inen boyun ve göğüs çizgisini yapalım.",
        svg: `<path d="M 285 240 C 255 270, 240 320, 235 375" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "17. Adım: Sol Ön Bacak",
        instruction: "Göğsün altından aşağıya, yere dik basan birinci ön bacağı çiz.",
        voice: "Şimdi yere sağlam basan sol ön bacağımızı çizelim.",
        svg: `<path d="M 290 335 L 285 490 L 335 490 L 335 345" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`
      },
      {
        title: "18. Adım: Sağ Ön Bacak",
        instruction: "Yanındaki ikinci ön bacağı da aynı şekilde yere basacak gibi çiz.",
        voice: "Şimdi yanındaki ikinci ön bacağı çizelim.",
        svg: `<path d="M 365 335 L 370 490 L 415 490 L 405 340" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`
      },
      {
        title: "19. Adım: Ön Bacak Pençe Tırnakları",
        instruction: "Ön ayakların ucuna ikişer adet minik yuvarlak pençe tırnağı ekle.",
        voice: "Ön ayakların ucuna ikişer tane minik pençe tırnağı konduralım.",
        svg: `<circle cx="295" cy="490" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><circle cx="312" cy="490" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><circle cx="380" cy="490" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><circle cx="398" cy="490" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>`
      },
      {
        title: "20. Adım: Sırt Çizgisi ve Oturan Arka Bacak",
        instruction: "Sağdan aşağı inen sırt kavisini ve sol altta oturan tombul arka bacağı çiz.",
        voice: "Şimdi sırttan aşağı inen kavisli çizgiyi ve oturan tombul arka bacağımızı yapalım.",
        svg: `<path d="M 355 240 C 395 295, 405 390, 385 480" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 230 380 C 185 400, 190 470, 245 490 L 285 490" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`
      },
      {
        title: "21. Adım: Kıvrık Kuyruk ve Sivri Ok Ucu",
        instruction: "Arkaya doğru kıvrılan kuyruğu çiz ve ucuna sivri ok ucu ekle.",
        voice: "Arkaya kıvrılan kuyruğumuzu ve ucundaki sivri ok ucunu çizelim.",
        svg: `<path d="M 230 450 C 130 470, 85 410, 115 355 C 125 385, 160 415, 220 410 Z" fill="none" stroke="#0f172a" stroke-width="9"/><polygon points="115,355 90,360 115,325 140,355" fill="#ffffff" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>`
      },
      {
        title: "22. Adım: Açılan Ateş Kanadı ve Kemikleri",
        instruction: "Sırttan yukarıya büyük kanadı aç ve iç kemik çizgilerini birleştir.",
        voice: "Sırttan göğe yükselen büyük ejderha kanadını ve iç kemik çizgilerini çizelim.",
        svg: `<path d="M 280 285 C 220 180, 120 170, 65 240 C 105 260, 130 290, 120 340 C 165 315, 205 325, 225 360 C 250 335, 275 335, 295 345 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 195 220 L 120 340 M 235 245 L 225 360" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>`
      },
      {
        title: "23. Adım: Karın Zırhı Çizgileri ve Kaya Kaidesi",
        instruction: "Göğse 4 adet yatay koruma çizgisi ve ejderhanın oturduğu kayayı çiz.",
        voice: "Gövdeye koruyucu karın çizgilerini ve ejderhanın oturduğu sağlam kaya kaidesini çizelim.",
        svg: `<path d="M 325 245 C 300 310, 300 395, 320 480 L 375 480 C 390 395, 385 310, 355 245 Z" fill="none" stroke="#0f172a" stroke-width="8"/><line x1="308" y1="295" x2="380" y2="295" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="305" y1="340" x2="385" y2="340" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="306" y1="385" x2="384" y2="385" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="310" y1="430" x2="380" y2="430" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><path d="M 110 515 C 160 475, 440 475, 490 515 C 450 550, 150 550, 110 515 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "24. Adım: Kılavuzları Silme ve Canlı Renklendirme",
        instruction: "Tebrikler Kıvanç! Mavi kılavuz çizgilerini silginle sil ve ejderhanı ateş renkleriyle boya!",
        voice: "Harikasın Kıvanç! Çizimin mükemmel oldu. Şimdi hafifçe çizdiğin mavi kılavuzları silginle sil ve ejderhanı en sevdiğin kırmızı ve turuncu boyalarla canlandır!",
        svg: `
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
          <path d="M 110 515 C 160 475, 440 475, 490 515 C 450 550, 150 550, 110 515 Z" fill="url(#fireDrgRock)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 280 285 C 220 180, 120 170, 65 240 C 105 260, 130 290, 120 340 C 165 315, 205 325, 225 360 C 250 335, 275 335, 295 345 Z" fill="url(#fireDrgWing)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 195 220 L 120 340 M 235 245 L 225 360" stroke="#b91c1c" stroke-width="5" stroke-linecap="round" fill="none"/>
          <path d="M 230 450 C 130 470, 85 410, 115 355 C 125 385, 160 415, 220 410 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="9"/>
          <polygon points="115,355 90,360 115,325 140,355" fill="#f97316" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 285 240 C 235 285, 215 380, 240 480 L 385 480 C 405 390, 395 295, 355 240 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 325 245 C 300 310, 300 395, 320 480 L 375 480 C 390 395, 385 310, 355 245 Z" fill="url(#fireDrgBelly)" stroke="#0f172a" stroke-width="8"/>
          <line x1="308" y1="295" x2="380" y2="295" stroke="#ca8a04" stroke-width="5" stroke-linecap="round"/>
          <line x1="305" y1="340" x2="385" y2="340" stroke="#ca8a04" stroke-width="5" stroke-linecap="round"/>
          <line x1="306" y1="385" x2="384" y2="385" stroke="#ca8a04" stroke-width="5" stroke-linecap="round"/>
          <line x1="310" y1="430" x2="380" y2="430" stroke="#ca8a04" stroke-width="5" stroke-linecap="round"/>
          <path d="M 230 380 C 185 400, 190 470, 245 490 L 295 490 C 295 455, 270 400, 230 380 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 290 335 L 285 490 L 335 490 L 335 345 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 365 335 L 370 490 L 415 490 L 405 340 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="9"/>
          <circle cx="295" cy="490" r="7" fill="#fde047" stroke="#0f172a" stroke-width="4"/>
          <circle cx="312" cy="490" r="7" fill="#fde047" stroke="#0f172a" stroke-width="4"/>
          <circle cx="380" cy="490" r="7" fill="#fde047" stroke="#0f172a" stroke-width="4"/>
          <circle cx="398" cy="490" r="7" fill="#fde047" stroke="#0f172a" stroke-width="4"/>
          <path d="M 265 175 C 265 105, 395 105, 415 170 C 455 180, 455 230, 410 240 C 395 265, 330 265, 295 240 C 265 225, 265 195, 265 175 Z" fill="url(#fireDrgBody)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 295 135 C 255 115, 245 75, 265 60 C 280 80, 295 100, 320 120 Z" fill="url(#fireDrgHorn)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 335 120 C 315 95, 315 65, 330 50 C 345 70, 355 90, 365 120 Z" fill="url(#fireDrgHorn)" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="355" cy="175" rx="22" ry="26" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="362" cy="177" r="12" fill="#0f172a"/>
          <circle cx="355" cy="168" r="6" fill="#ffffff"/>
          <circle cx="367" cy="183" r="3" fill="#ffffff"/>
          <path d="M 335 142 Q 355 132, 375 142" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
          <circle cx="426" cy="185" r="4" fill="#0f172a"/>
          <path d="M 365 215 C 385 235, 420 235, 430 215 C 425 245, 385 250, 365 215 Z" fill="#991b1b" stroke="#0f172a" stroke-width="6"/>
          <polygon points="380,222 386,232 392,223" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <polygon points="410,222 415,231 420,222" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
        `
      }
    ]
  },

  // =========================================================================
  // 2. ZARİF KIZIL TİLKİ (23 MİKRO ADIM - 🟢 ÇIRAK)
  // =========================================================================
  {
    id: "cirak_kizil_tilki",
    categoryId: "hayvanlar",
    name: "Zarif Kızıl Tilki",
    emoji: "🦊",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Kocaman pofuduk kuyruklu, dik kulaklı, siyah çorap patili ve parlak gözlü zarif Kızıl Tilki.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Turuncu, Beyaz, Siyah, Yeşil Boya Kalemleri",
    colors: [
      { name: "Kızıl Turuncu", hex: "#ea580c" },
      { name: "Pofuduk Beyaz", hex: "#ffffff" },
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
      <ellipse cx="300" cy="510" rx="200" ry="25" fill="url(#foxGrass)" stroke="#0f172a" stroke-width="8"/>
      <path d="M 370 450 C 480 430, 530 330, 480 240 C 430 190, 410 270, 430 320 C 450 370, 410 470, 350 480 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10"/>
      <path d="M 480 240 C 455 210, 430 200, 415 220 C 420 250, 440 280, 430 320 C 445 300, 470 275, 480 240 Z" fill="url(#foxWhite)" stroke="#0f172a" stroke-width="8"/>
      <path d="M 245 285 C 220 350, 215 435, 240 495 L 360 495 C 380 435, 375 350, 355 285 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10"/>
      <rect x="250" y="380" width="38" height="115" rx="16" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="9"/>
      <rect x="312" y="380" width="38" height="115" rx="16" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="9"/>
      <path d="M 250 460 L 250 495 L 288 495 L 288 460 Z" fill="#0f172a"/>
      <path d="M 312 460 L 312 495 L 350 495 L 350 460 Z" fill="#0f172a"/>
      <path d="M 260 285 C 275 340, 285 370, 300 395 C 315 370, 325 340, 340 285 Z" fill="url(#foxWhite)" stroke="#0f172a" stroke-width="7"/>
      <path d="M 230 150 L 190 55 L 270 120 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
      <path d="M 235 140 L 205 75 L 260 118 Z" fill="#0f172a"/>
      <path d="M 370 150 L 410 55 L 330 120 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
      <path d="M 365 140 L 395 75 L 340 118 Z" fill="#0f172a"/>
      <path d="M 205 195 C 205 130, 395 130, 395 195 C 395 260, 345 300, 300 300 C 255 300, 205 260, 205 195 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10"/>
      <path d="M 205 215 C 245 245, 280 270, 300 295 C 320 270, 355 245, 395 215 C 365 275, 335 300, 300 300 C 265 300, 235 275, 205 215 Z" fill="url(#foxWhite)" stroke="#0f172a" stroke-width="8"/>
      <circle cx="258" cy="205" r="14" fill="#0f172a"/>
      <circle cx="254" cy="200" r="5" fill="#ffffff"/>
      <circle cx="262" cy="208" r="2.5" fill="#ffffff"/>
      <circle cx="342" cy="205" r="14" fill="#0f172a"/>
      <circle cx="338" cy="200" r="5" fill="#ffffff"/>
      <circle cx="346" cy="208" r="2.5" fill="#ffffff"/>
      <polygon points="288,272 312,272 300,285" fill="#0f172a" stroke="#0f172a" stroke-width="3" stroke-linejoin="round"/>
      <line x1="225" y1="260" x2="180" y2="255" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
      <line x1="225" y1="270" x2="185" y2="275" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
      <line x1="375" y1="260" x2="420" y2="255" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
      <line x1="375" y1="270" x2="415" y2="275" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
    `,
    steps: [
      {
        title: "1. Adım: Kafa Kılavuz Dairesi (Mavi)",
        instruction: "Kağıdın üst ortasına bastırmadan yuvarlak bir kafa kılavuzu çiz.",
        voice: "Kurşun kalemini bastırmadan kağıdın üst ortasına kafa için yuvarlak bir kılavuz çizelim.",
        svg: `<ellipse cx="300" cy="200" rx="95" ry="85" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Gövde Kılavuz Ovali (Mavi)",
        instruction: "Kafanın altına doğru inen hafif tombul gövde kılavuzunu çiz.",
        voice: "Kafanın altına doğru inen gövde kılavuzumuzu hafifçe çizelim.",
        svg: `<path d="M 245 285 C 220 350, 215 435, 240 495 L 360 495 C 380 435, 375 350, 355 285 Z" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Kuyruk Kılavuz Yayı (Mavi)",
        instruction: "Sağ taraftan yukarıya kıvrılan kocaman pofuduk kuyruk yayını çiz.",
        voice: "Sağ taraftan yukarı doğru kıvrılan dev pofuduk kuyruk yayını ekleyelim.",
        svg: `<path d="M 370 450 C 480 430, 530 330, 480 240 C 430 190, 410 270, 430 320" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "4. Adım: Alın ve Baş Tepesi Çizgisi (Siyah)",
        instruction: "Mavi kılavuzun üstünden geçerek alnı ve kulakların arasındaki baş tepesini çiz.",
        voice: "Şimdi kalemimizle mavi dairenin üstünden yuvarlak baş tepesini çizelim.",
        svg: `<path d="M 205 195 C 205 130, 395 130, 395 195" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "5. Adım: Sivri Çene ve Yanak Hatları",
        instruction: "İki yandan aşağıya doğru inip ortada birleşen sivri tilki çenesini çiz.",
        voice: "İki yandan aşağıya inen ve ortada birleşen o sevimli sivri çeneyi yapalım.",
        svg: `<path d="M 395 195 C 395 260, 345 300, 300 300 C 255 300, 205 260, 205 195" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "6. Adım: Siyah Üçgen Burun Ucu",
        instruction: "Sivri çenenin hemen ucuna küçük ters üçgen şeklinde bir burun yap.",
        voice: "Çenenin ucuna minik siyah bir ters üçgen burun konduralım.",
        svg: `<polygon points="288,272 312,272 300,285" fill="#0f172a" stroke="#0f172a" stroke-width="3" stroke-linejoin="round"/>`
      },
      {
        title: "7. Adım: Beyaz Yanak Maskesi Çizgisi",
        instruction: "Yanakların iki yanından buruna doğru inen tüylü maske çizgisini ekle.",
        voice: "Yanaklardan buruna doğru inen beyaz maske ayrım çizgisini yapalım.",
        svg: `<path d="M 205 215 C 245 245, 280 270, 300 295 C 320 270, 355 245, 395 215" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`
      },
      {
        title: "8. Adım: Sol Büyük Tilki Gözü",
        instruction: "Yüzün sol tarafına büyük yuvarlak bir göz çiz ve içini koyult.",
        voice: "Sol tarafa iri, parlak bir tilki gözü çizelim.",
        svg: `<circle cx="258" cy="205" r="14" fill="#0f172a"/>`
      },
      {
        title: "9. Adım: Sol Göz Parlayan Işıkları",
        instruction: "Sol gözün içine biri büyük biri küçük iki beyaz ışık noktası ekle.",
        voice: "Sol gözün içine parlayan iki tane beyaz ışık noktası koyalım.",
        svg: `<circle cx="254" cy="200" r="5" fill="#ffffff"/><circle cx="262" cy="208" r="2.5" fill="#ffffff"/>`
      },
      {
        title: "10. Adım: Sağ Büyük Tilki Gözü",
        instruction: "Yüzün sağ tarafına aynı büyüklükte ikinci gözü çiz.",
        voice: "Şimdi sağ tarafa da aynı güzellikte ikinci gözü yapalım.",
        svg: `<circle cx="342" cy="205" r="14" fill="#0f172a"/>`
      },
      {
        title: "11. Adım: Sağ Göz Parlayan Işıkları",
        instruction: "Sağ gözün içine de iki beyaz parıldama ışığını ekle.",
        voice: "Sağ gözün içine de parıldayan iki beyaz ışık noktasını çizelim.",
        svg: `<circle cx="338" cy="200" r="5" fill="#ffffff"/><circle cx="346" cy="208" r="2.5" fill="#ffffff"/>`
      },
      {
        title: "12. Adım: Sol Dik Tilki Kulağı",
        instruction: "Başın sol üstünden yukarı dimdik uzanan sivri üçgen kulağı çiz.",
        voice: "Başın sol tepesinden yukarı uzanan sivri üçgen kulağımızı yapalım.",
        svg: `<path d="M 230 150 L 190 55 L 270 120 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`
      },
      {
        title: "13. Adım: Sol Kulak İçi Siyahlığı",
        instruction: "Sol kulağın içine koyu iç tüy üçgenini ekle.",
        voice: "Sol kulağın içine siyah iç üçgenini çizelim.",
        svg: `<path d="M 235 140 L 205 75 L 260 118 Z" fill="#0f172a"/>`
      },
      {
        title: "14. Adım: Sağ Dik Tilki Kulağı",
        instruction: "Başın sağ üstünden yukarı uzanan ikinci sivri kulağı çiz.",
        voice: "Şimdi sağ taraftaki ikinci sivri kulağımızı çizelim.",
        svg: `<path d="M 370 150 L 410 55 L 330 120 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`
      },
      {
        title: "15. Adım: Sağ Kulak İçi Siyahlığı",
        instruction: "Sağ kulağın içine de koyu iç tüy üçgenini ekle.",
        voice: "Sağ kulağın içine de koyu üçgenini çizelim.",
        svg: `<path d="M 365 140 L 395 75 L 340 118 Z" fill="#0f172a"/>`
      },
      {
        title: "16. Adım: Beyaz Pofuduk Göğüs Bağı",
        instruction: "Çenenin altından göğse doğru inen sivri uçlu beyaz tüy bağını çiz.",
        voice: "Çenenin altından göğse inen pofuduk beyaz tüy çizgisini yapalım.",
        svg: `<path d="M 260 285 C 275 340, 285 370, 300 395 C 315 370, 325 340, 340 285" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>`
      },
      {
        title: "17. Adım: Sol Ön Bacak ve Siyah Çorap Pati",
        instruction: "Yere dik inen sol bacağı ve ucundaki siyah çorap patiyi çiz.",
        voice: "Yere dik basan sol bacağı ve ucundaki siyah patiyi yapalım.",
        svg: `<rect x="250" y="380" width="38" height="115" rx="16" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 250 460 L 250 495 L 288 495 L 288 460 Z" fill="#0f172a"/>`
      },
      {
        title: "18. Adım: Sağ Ön Bacak ve Siyah Çorap Pati",
        instruction: "Yanındaki sağ ön bacağı ve siyah patiyi de aynı şekilde çiz.",
        voice: "Sağ ön bacağımızı ve siyah patisini de çizelim.",
        svg: `<rect x="312" y="380" width="38" height="115" rx="16" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 312 460 L 312 495 L 350 495 L 350 460 Z" fill="#0f172a"/>`
      },
      {
        title: "19. Adım: Gövde Sırtı ve Oturan Duruş",
        instruction: "Gövdenin sol ve sağ dış hatlarını bacakların arkasından aşağıya birleştir.",
        voice: "Gövdenin iki yan çizgisini aşağıya doğru birleştirelim.",
        svg: `<path d="M 245 285 C 220 350, 215 435, 240 495" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 355 285 C 375 350, 380 435, 360 495" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "20. Adım: Kocaman Pofuduk Kuyruk Ana Hattı",
        instruction: "Arka taraftan öne doğru dolanan dev tilki kuyruğunu çiz.",
        voice: "Arka taraftan öne doğru kıvrılan o kocaman pofuduk kuyruğu çizelim.",
        svg: `<path d="M 370 450 C 480 430, 530 330, 480 240 C 430 190, 410 270, 430 320 C 450 370, 410 470, 350 480" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`
      },
      {
        title: "21. Adım: Kuyruk Ucundaki Beyaz Zikzak Ayrımı",
        instruction: "Kuyruğun ucuna beyaz tüy ayrımını belirten zikzak kıvrımı çiz.",
        voice: "Kuyruğun ucundaki sevimli beyaz tüy ayrımını yapalım.",
        svg: `<path d="M 480 240 C 455 210, 430 200, 415 220 C 420 250, 440 280, 430 320" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "22. Adım: Sevimli Bıyıklar ve Çimenlik Zemin",
        instruction: "Yanaklara ikişer bıyık çizgisi ve tilkinin bastığı yeşil çimenlik zemini çiz.",
        voice: "Yanaklara bıyıkları ve tilkinin oturduğu çimenlik zemini çizelim.",
        svg: `<line x1="225" y1="260" x2="180" y2="255" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><line x1="225" y1="270" x2="185" y2="275" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><line x1="375" y1="260" x2="420" y2="255" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><line x1="375" y1="270" x2="415" y2="275" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><ellipse cx="300" cy="510" rx="200" ry="25" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "23. Adım: Kılavuzları Silme ve Canlı Renklendirme",
        instruction: "Harika oldu! Mavi çizgileri silgiyle sil, tilkini turuncu kızıl ve beyaz renklerle boya!",
        voice: "Tebrikler Kıvanç! Tilkin harika oldu! Şimdi mavi kılavuzları silginle sil ve tilkini canlı turuncu, beyaz ve yeşil boyalarınla renklendir!",
        svg: `
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
          <ellipse cx="300" cy="510" rx="200" ry="25" fill="url(#foxGrass)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 370 450 C 480 430, 530 330, 480 240 C 430 190, 410 270, 430 320 C 450 370, 410 470, 350 480 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 480 240 C 455 210, 430 200, 415 220 C 420 250, 440 280, 430 320 C 445 300, 470 275, 480 240 Z" fill="url(#foxWhite)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 245 285 C 220 350, 215 435, 240 495 L 360 495 C 380 435, 375 350, 355 285 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10"/>
          <rect x="250" y="380" width="38" height="115" rx="16" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="9"/>
          <rect x="312" y="380" width="38" height="115" rx="16" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 250 460 L 250 495 L 288 495 L 288 460 Z" fill="#0f172a"/>
          <path d="M 312 460 L 312 495 L 350 495 L 350 460 Z" fill="#0f172a"/>
          <path d="M 260 285 C 275 340, 285 370, 300 395 C 315 370, 325 340, 340 285 Z" fill="url(#foxWhite)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 230 150 L 190 55 L 270 120 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 235 140 L 205 75 L 260 118 Z" fill="#0f172a"/>
          <path d="M 370 150 L 410 55 L 330 120 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 365 140 L 395 75 L 340 118 Z" fill="#0f172a"/>
          <path d="M 205 195 C 205 130, 395 130, 395 195 C 395 260, 345 300, 300 300 C 255 300, 205 260, 205 195 Z" fill="url(#foxCoat)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 205 215 C 245 245, 280 270, 300 295 C 320 270, 355 245, 395 215 C 365 275, 335 300, 300 300 C 265 300, 235 275, 205 215 Z" fill="url(#foxWhite)" stroke="#0f172a" stroke-width="8"/>
          <circle cx="258" cy="205" r="14" fill="#0f172a"/>
          <circle cx="254" cy="200" r="5" fill="#ffffff"/>
          <circle cx="262" cy="208" r="2.5" fill="#ffffff"/>
          <circle cx="342" cy="205" r="14" fill="#0f172a"/>
          <circle cx="338" cy="200" r="5" fill="#ffffff"/>
          <circle cx="346" cy="208" r="2.5" fill="#ffffff"/>
          <polygon points="288,272 312,272 300,285" fill="#0f172a" stroke="#0f172a" stroke-width="3" stroke-linejoin="round"/>
          <line x1="225" y1="260" x2="180" y2="255" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
          <line x1="225" y1="270" x2="185" y2="275" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
          <line x1="375" y1="260" x2="420" y2="255" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
          <line x1="375" y1="270" x2="415" y2="275" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
        `
      }
    ]
  },

  // =========================================================================
  // 3. SÜPER YARIŞ ARABASI FERRARİ (20 MİKRO ADIM - 🟢 ÇIRAK)
  // =========================================================================
  {
    id: "cirak_yaris_arabasi",
    categoryId: "arabalar",
    name: "Süper Yarış Arabası Ferrari",
    emoji: "🏎️",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Alçak aerodinamik gövdeli, yüksek arka kanatlı (spoyler), kalın yarış tekerlekli süper spor yarış arabası.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Yarış Kırmızısı, Altın Sarısı, Asfalt Grisi Boya Kalemleri",
    colors: [
      { name: "Ferrari Kırmızısı", hex: "#ef4444" },
      { name: "Yarış Sarısı", hex: "#facc15" },
      { name: "Gök Mavisi Cam", hex: "#0284c7" },
      { name: "Asfalt Grisi", hex: "#334155" }
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
      <ellipse cx="300" cy="480" rx="230" ry="20" fill="url(#carAsphalt)" stroke="#0f172a" stroke-width="8"/>
      <path d="M 105 270 L 155 270 L 145 320 L 115 320 Z" fill="#991b1b" stroke="#0f172a" stroke-width="8"/>
      <path d="M 85 260 L 175 260 L 165 275 L 75 275 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8"/>
      <path d="M 95 385 C 80 340, 140 310, 200 310 L 260 250 C 310 220, 390 220, 420 260 L 480 320 C 520 330, 545 360, 535 395 C 525 435, 495 440, 465 440 L 125 440 C 95 440, 90 410, 95 385 Z" fill="url(#carBodyRed)" stroke="#0f172a" stroke-width="10"/>
      <path d="M 270 260 C 310 235, 380 235, 405 265 L 455 315 L 225 315 Z" fill="url(#carGlass)" stroke="#0f172a" stroke-width="8"/>
      <ellipse cx="250" cy="305" rx="14" ry="8" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
      <path d="M 490 345 L 530 365 L 505 380 Z" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
      <path d="M 500 355 L 520 368" stroke="#ca8a04" stroke-width="4"/>
      <path d="M 485 410 L 530 405 L 525 430 L 480 430 Z" fill="#0f172a" stroke="#0f172a" stroke-width="6"/>
      <path d="M 215 315 L 255 255 L 285 255 L 245 315 Z" fill="#ffffff" opacity="0.9"/>
      <path d="M 330 315 L 365 240 L 385 240 L 350 315 Z" fill="#ffffff" opacity="0.9"/>
      <circle cx="175" cy="435" r="48" fill="#0f172a" stroke="#0f172a" stroke-width="6"/>
      <circle cx="175" cy="435" r="28" fill="url(#carRim)" stroke="#0f172a" stroke-width="6"/>
      <circle cx="175" cy="435" r="10" fill="#0f172a"/>
      <circle cx="435" cy="435" r="48" fill="#0f172a" stroke="#0f172a" stroke-width="6"/>
      <circle cx="435" cy="435" r="28" fill="url(#carRim)" stroke="#0f172a" stroke-width="6"/>
      <circle cx="435" cy="435" r="10" fill="#0f172a"/>
    `,
    steps: [
      {
        title: "1. Adım: Gövde Silüet Kılavuzu (Mavi)",
        instruction: "Kalemini hiç bastırmadan arabanın yatay alçak gövde silüetini hafifçe çiz.",
        voice: "Kalemini hiç bastırmadan arabanın alçak yarış gövdesi kılavuzunu hafifçe çizelim.",
        svg: `<path d="M 95 385 C 80 340, 140 310, 200 310 L 260 250 C 310 220, 390 220, 420 260 L 480 320 C 520 330, 545 360, 535 395 C 525 435, 495 440, 465 440 L 125 440 C 95 440, 90 410, 95 385 Z" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Tekerlek Yeri Kılavuzları (Mavi)",
        instruction: "Ön ve arkaya iki adet tekerlek yeri kılavuz dairesi ekle.",
        voice: "Ön ve arkadaki tekerleklerin yerini belirleyen iki kılavuz daire çizelim.",
        svg: `<circle cx="175" cy="435" r="48" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><circle cx="435" cy="435" r="48" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Ön Tampon ve Splitter Hattı (Siyah)",
        instruction: "Ön tamponun en altındaki keskin yarış splitter çizgisini çiz.",
        voice: "Şimdi arabanın ön tamponundaki yere yakın yarış splitter hattını çizelim.",
        svg: `<path d="M 485 410 L 530 405 L 525 430 L 480 430 Z" fill="none" stroke="#0f172a" stroke-width="7"/>`
      },
      {
        title: "4. Adım: Burun ve Alçak Kaput Eğim Çizgisi",
        instruction: "Ön camdan burnun ucuna kadar inen aerodinamik kaput eğrisini çiz.",
        voice: "Ön camdan arabanın burnuna doğru inen o hızlı kaput eğrisini yapalım.",
        svg: `<path d="M 420 260 L 480 320 C 520 330, 545 360, 535 395" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "5. Adım: Ön Damla Farlar",
        instruction: "Burnun üstüne sivri damla şeklinde ön farı ve iç çizgisini çiz.",
        voice: "Burnun üstüne o keskin, bakışları andıran yarış farını yapalım.",
        svg: `<path d="M 490 345 L 530 365 L 505 380 Z" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 500 355 L 520 368" stroke="#0f172a" stroke-width="4"/>`
      },
      {
        title: "6. Adım: Ön Cam ve Kabin Tavanı Yay Çizgisi",
        instruction: "Sürücü kabininin tavanını oluşturan zarif eğriyi çiz.",
        voice: "Kabin tavanını oluşturan yuvarlak ve hızlı yay çizgisini yapalım.",
        svg: `<path d="M 260 250 C 310 220, 390 220, 420 260" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "7. Adım: Kabin Yan Camı ve B-Sütunu",
        instruction: "Tavanın altındaki aerodinamik yan cam çerçevesini çiz.",
        voice: "Tavanın altındaki renkli yan cam çerçevesini çizelim.",
        svg: `<path d="M 270 260 C 310 235, 380 235, 405 265 L 455 315 L 225 315 Z" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "8. Adım: Aerodinamik Yan Ayna",
        instruction: "Ön camın köşesine yatık küçük oval bir dikiz aynası ekle.",
        voice: "Ön camın köşesine yarış arabamızın dikiz aynasını yapalım.",
        svg: `<ellipse cx="250" cy="305" rx="14" ry="8" fill="none" stroke="#0f172a" stroke-width="5"/>`
      },
      {
        title: "9. Adım: Arka Omuz ve Bagaj Hattı",
        instruction: "Tavandan geriye doğru inen kaslı arka gövde çizgisini yap.",
        voice: "Tavandan arabanın arkasına inen kaslı omuz çizgisini yapalım.",
        svg: `<path d="M 95 385 C 80 340, 140 310, 200 310 L 260 250" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "10. Adım: Yan Etek (Marşpiyel) ve Kapı Çizgisi",
        instruction: "İki tekerlek arasındaki düz taban çizgisini ve kapı dikey çizgisini ekle.",
        voice: "İki tekerlek arasındaki düz alt marşpiyeli ve kapı çizgisini çizelim.",
        svg: `<line x1="225" y1="440" x2="385" y2="440" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><line x1="285" y1="315" x2="285" y2="435" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`
      },
      {
        title: "11. Adım: Ön Çamurluk ve Kalın Ön Lastik",
        instruction: "Ön tekerleğin kalın siyah dış dairesini çiz.",
        voice: "Ön tekerleğin kalın siyah lastik çemberini çizelim.",
        svg: `<circle cx="435" cy="435" r="48" fill="none" stroke="#0f172a" stroke-width="9"/>`
      },
      {
        title: "12. Adım: Ön Tekerlek Spor Jantı ve Göbeği",
        instruction: "Ön lastiğin içine altın renkli spor jant dairesini ve göbeğini ekle.",
        voice: "Ön tekerleğin içine spor jant çemberini ve ortasındaki göbeği yapalım.",
        svg: `<circle cx="435" cy="435" r="28" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="435" cy="435" r="10" fill="#0f172a"/>`
      },
      {
        title: "13. Adım: Arka Çamurluk ve Kalın Arka Lastik",
        instruction: "Arka tekerleğin kalın siyah dış dairesini çiz.",
        voice: "Şimdi arkadaki kalın yarış lastiği çemberini çizelim.",
        svg: `<circle cx="175" cy="435" r="48" fill="none" stroke="#0f172a" stroke-width="9"/>`
      },
      {
        title: "14. Adım: Arka Tekerlek Spor Jantı ve Göbeği",
        instruction: "Arka lastiğin içine de spor jant dairesini ve göbeğini ekle.",
        voice: "Arka lastiğin içine de spor jantı ve göbeğini yapalım.",
        svg: `<circle cx="175" cy="435" r="28" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="175" cy="435" r="10" fill="#0f172a"/>`
      },
      {
        title: "15. Adım: Yüksek Arka GT Spoyler Ayakları",
        instruction: "Bagajın üstünden yukarı yükselen iki spoyler ayağını çiz.",
        voice: "Bagajın üstünden yukarı uzanan spoyler ayaklarını yapalım.",
        svg: `<path d="M 105 270 L 155 270 L 145 320 L 115 320 Z" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "16. Adım: Spoyler Üst Aerodinamik Kanadı",
        instruction: "Ayakların üstüne rüzgarı kesen yatay yarış kanadını yerleştir.",
        voice: "Spoyler ayaklarının üstüne yatay büyük yarış kanadını çizelim.",
        svg: `<path d="M 85 260 L 175 260 L 165 275 L 75 275 Z" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "17. Adım: Kaput ve Tavan Çift Yarış Şeritleri",
        instruction: "Gövdenin üzerinden geçen beyaz spor yarış şeritlerini çiz.",
        voice: "Arabanın üstünden geçen çift spor yarış şeritlerini ekleyelim.",
        svg: `<path d="M 215 315 L 255 255 L 285 255 L 245 315 Z" fill="none" stroke="#0f172a" stroke-width="5"/><path d="M 330 315 L 365 240 L 385 240 L 350 315 Z" fill="none" stroke="#0f172a" stroke-width="5"/>`
      },
      {
        title: "18. Adım: Asfalt Zemin ve Hızlı Yol Çizgisi",
        instruction: "Arabanın bastığı koyu renkli asfalt zemin elipsini çiz.",
        voice: "Arabanın lastiklerinin bastığı geniş asfalt yol çizgisini yapalım.",
        svg: `<ellipse cx="300" cy="480" rx="230" ry="20" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "19. Adım: Kılavuzları Silme ve Canlı Ferrari Kırmızısı Renklendirme",
        instruction: "Muazzam bir yarış arabası oldu! Mavi çizgileri sil ve gövdeyi Ferrari kırmızısına boya!",
        voice: "Süpersin Kıvanç! Yarış araban pistlere çıkmaya hazır. Şimdi mavi kılavuzları silginle sil ve arabayı alev alev Ferrari kırmızısına boya!",
        svg: `
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
          <ellipse cx="300" cy="480" rx="230" ry="20" fill="url(#carAsphalt)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 105 270 L 155 270 L 145 320 L 115 320 Z" fill="#991b1b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 85 260 L 175 260 L 165 275 L 75 275 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8"/>
          <path d="M 95 385 C 80 340, 140 310, 200 310 L 260 250 C 310 220, 390 220, 420 260 L 480 320 C 520 330, 545 360, 535 395 C 525 435, 495 440, 465 440 L 125 440 C 95 440, 90 410, 95 385 Z" fill="url(#carBodyRed)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 270 260 C 310 235, 380 235, 405 265 L 455 315 L 225 315 Z" fill="url(#carGlass)" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="250" cy="305" rx="14" ry="8" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <path d="M 490 345 L 530 365 L 505 380 Z" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <path d="M 500 355 L 520 368" stroke="#ca8a04" stroke-width="4"/>
          <path d="M 485 410 L 530 405 L 525 430 L 480 430 Z" fill="#0f172a" stroke="#0f172a" stroke-width="6"/>
          <path d="M 215 315 L 255 255 L 285 255 L 245 315 Z" fill="#ffffff" opacity="0.9"/>
          <path d="M 330 315 L 365 240 L 385 240 L 350 315 Z" fill="#ffffff" opacity="0.9"/>
          <circle cx="175" cy="435" r="48" fill="#0f172a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="175" cy="435" r="28" fill="url(#carRim)" stroke="#0f172a" stroke-width="6"/>
          <circle cx="175" cy="435" r="10" fill="#0f172a"/>
          <circle cx="435" cy="435" r="48" fill="#0f172a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="435" cy="435" r="28" fill="url(#carRim)" stroke="#0f172a" stroke-width="6"/>
          <circle cx="435" cy="435" r="10" fill="#0f172a"/>
        `
      }
    ]
  },

  // =========================================================================
  // 4. SEVİMLİ YUNUS BALIĞI (20 MİKRO ADIM - 🟢 ÇIRAK)
  // =========================================================================
  {
    id: "cirak_yunus_baligi",
    categoryId: "deniz",
    name: "Sevimli Yunus Balığı",
    emoji: "🐬",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Masmavi dalgaların üzerinden neşeyle havaya sıçrayan, şişe burunlu, parlak gözlü sevimli Yunus.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Okyanus Mavisi, Turkuaz, Beyaz Boya Kalemleri",
    colors: [
      { name: "Okyanus Mavisi", hex: "#0284c7" },
      { name: "Açık Gökyüzü", hex: "#38bdf8" },
      { name: "Köpük Beyazı", hex: "#ffffff" },
      { name: "Turkuaz Dalga", hex: "#22d3ee" }
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
      <path d="M 80 490 C 130 460, 180 520, 240 480 C 300 450, 350 510, 420 475 C 470 450, 520 490, 550 480 C 550 540, 80 540, 80 490 Z" fill="url(#oceanWaves)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <circle cx="150" cy="440" r="10" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/>
      <circle cx="180" cy="410" r="7" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/>
      <circle cx="450" cy="420" r="9" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/>
      <circle cx="475" cy="445" r="6" fill="#38bdf8" stroke="#0f172a" stroke-width="3"/>
      <path d="M 125 415 C 80 395, 55 425, 75 460 C 105 450, 125 435, 140 435 C 135 455, 125 480, 155 485 C 170 460, 155 430, 140 420 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
      <path d="M 320 185 C 330 115, 380 125, 395 180 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
      <path d="M 440 210 C 490 220, 520 245, 515 270 C 490 280, 455 275, 430 265 C 380 295, 340 335, 290 350 C 235 370, 190 385, 140 420 C 130 405, 130 385, 140 370 C 200 280, 265 210, 320 185 C 360 170, 410 180, 440 210 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="10"/>
      <path d="M 445 265 C 390 315, 320 340, 240 375 C 180 400, 150 415, 140 425 C 145 400, 185 370, 230 355 C 310 325, 370 295, 430 265 Z" fill="url(#dolphinBelly)" stroke="#0f172a" stroke-width="7"/>
      <path d="M 370 285 C 390 325, 400 350, 375 355 C 365 340, 365 310, 370 285 Z" fill="#0284c7" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
      <path d="M 345 315 C 375 365, 360 410, 310 405 C 305 380, 320 345, 345 315 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
      <ellipse cx="420" cy="195" rx="8" ry="4" fill="#0f172a" transform="rotate(-15 420 195)"/>
      <circle cx="430" cy="225" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
      <circle cx="433" cy="226" r="9" fill="#0f172a"/>
      <circle cx="428" cy="222" r="4" fill="#ffffff"/>
      <circle cx="435" cy="229" r="2" fill="#ffffff"/>
      <path d="M 418 208 Q 430 202, 442 208" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M 465 260 C 485 272, 510 265, 515 258" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
    `,
    steps: [
      {
        title: "1. Adım: Sıçrayan Gövde Kılavuz Yayı (Mavi)",
        instruction: "Havaya zıplayan yunus için yukarı kavisli muz şeklinde bir kılavuz yay çiz.",
        voice: "Havaya zıplayan yunusumuz için yukarı kavisli neşeli bir kılavuz yay çizelim.",
        svg: `<path d="M 440 210 C 370 140, 240 180, 140 370" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Yüzgeç ve Kuyruk Kılavuzları (Mavi)",
        instruction: "Sırttaki yüzgecin ve kuyruğun yerini gösteren kısa kılavuz çizgileri ekle.",
        voice: "Sırt yüzgecinin ve kuyruğun yerini belirten kılavuz çizgilerimizi ekleyelim.",
        svg: `<line x1="330" y1="180" x2="350" y2="120" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 125 415 C 80 395, 55 425, 75 460" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Baş Alın ve Şişe Burun Konturu (Siyah)",
        instruction: "Kafanın yuvarlak alnını ve öne doğru uzanan tombul şişe burnu çiz.",
        voice: "Şimdi kaleminle yunusun yuvarlak alnını ve öne uzanan sevimli burnunu çizelim.",
        svg: `<path d="M 440 210 C 490 220, 520 245, 515 270 C 490 280, 455 275, 430 265" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "4. Adım: Sevimli Gülümseyen Ağız Çizgisi",
        instruction: "Burnun ucundan geriye doğru tatlı bir gülümseme çizgisi çiz.",
        voice: "Burnun ucundan geriye doğru mutlu bir gülümseme çizgisi yapalım.",
        svg: `<path d="M 465 260 C 485 272, 510 265, 515 258" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`
      },
      {
        title: "5. Adım: Baş Tepesindeki Nefes Deliği (Blowhole)",
        instruction: "Başın üstüne su püskürttüğü küçük yatay nefes deliğini yap.",
        voice: "Başın tepesine nefes aldığı minik hava deliğini çizelim.",
        svg: `<ellipse cx="420" cy="195" rx="8" ry="4" fill="#0f172a" transform="rotate(-15 420 195)"/>`
      },
      {
        title: "6. Adım: Büyük Neşeli Yunus Gözü Çerçevesi",
        instruction: "Yüzün ortasına neşeli büyük bir göz dairesi çiz.",
        voice: "Yüzün ortasına neşeyle bakan büyük bir göz çerçevesi çizelim.",
        svg: `<circle cx="430" cy="225" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "7. Adım: Gözbebeği ve Çift Beyaz Parlama Işığı",
        instruction: "Gözün içine siyah gözbebeğini ve parlayan iki beyaz ışığı ekle.",
        voice: "Gözün içine siyah gözbebeğini ve parıldayan iki beyaz ışık noktasını yapalım.",
        svg: `<circle cx="433" cy="226" r="9" fill="#0f172a"/><circle cx="428" cy="222" r="4" fill="#ffffff"/><circle cx="435" cy="229" r="2" fill="#ffffff"/>`
      },
      {
        title: "8. Adım: Göz Üstü Tatlı Kaş Çizgisi",
        instruction: "Gözün üstüne hafif neşeli bir kaş yayı koy.",
        voice: "Gözün üstüne sevimli bir kaş yayı ekleyelim.",
        svg: `<path d="M 418 208 Q 430 202, 442 208" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>`
      },
      {
        title: "9. Adım: Geriye Doğru Kıvrılan Sırt Yüzgeci (Dorsal Fin)",
        instruction: "Sırtın ortasından geriye kıvrılan üçgen sırt yüzgecini çiz.",
        voice: "Sırttan geriye doğru kıvrılan o meşhur üçgen yüzgeci çizelim.",
        svg: `<path d="M 320 185 C 330 115, 380 125, 395 180 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`
      },
      {
        title: "10. Adım: Pürüzsüz Sırt Çizgisi",
        instruction: "Kafadan sırt yüzgecine ve arkadaki kuyruğa kadar uzanan sırt çizgisini tamamla.",
        voice: "Kafadan kuyruğa kadar uzanan pürüzsüz sırt çizgisini yapalım.",
        svg: `<path d="M 395 180 C 420 180, 435 195, 440 210" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 320 185 C 265 210, 200 280, 140 370" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "11. Adım: Çene Altı ve Ön Karın Çizgisi",
        instruction: "Çenenin altından göğse doğru inen alt kavisli çizgiyi çiz.",
        voice: "Çenenin altından göğse doğru inen kavisli karın çizgisini çizelim.",
        svg: `<path d="M 430 265 C 380 295, 340 335, 290 350" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "12. Adım: Büyük Ön Yan Yüzgeç (Pectoral Fin)",
        instruction: "Gövdenin yanından aşağıya doğru uzanan büyük yan yüzgeci çiz.",
        voice: "Gövdenin yanından aşağı uzanan kanat gibi büyük yan yüzgeci yapalım.",
        svg: `<path d="M 345 315 C 375 365, 360 410, 310 405 C 305 380, 320 345, 345 315 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`
      },
      {
        title: "13. Adım: Arkada Kalan İkinci Yan Yüzgeç",
        instruction: "Gövdenin arkasında kalan diğer minik yan yüzgeci ekle.",
        voice: "Gövdenin arkasında görünen diğer yan yüzgeci de ekleyelim.",
        svg: `<path d="M 370 285 C 390 325, 400 350, 375 355 C 365 340, 365 310, 370 285 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>`
      },
      {
        title: "14. Adım: Alt Karın ve İnce Kuyruk Sapı",
        instruction: "Gövdenin altını incelterek kuyruk başlangıcına kadar birleştir.",
        voice: "Gövdenin altını incelterek kuyruğun başladığı yere kadar çizelim.",
        svg: `<path d="M 290 350 C 235 370, 190 385, 140 420" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "15. Adım: Kuyruk Yüzgeci Sol Kanadı (Fluke Sol)",
        instruction: "Kuyruk yüzgecinin sol yukarı kıvrılan kanadını çiz.",
        voice: "Kuyruk yüzgecinin sola kıvrılan ilk kanadını yapalım.",
        svg: `<path d="M 125 415 C 80 395, 55 425, 75 460 C 105 450, 125 435, 140 435" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`
      },
      {
        title: "16. Adım: Kuyruk Yüzgeci Sağ Kanadı ve Çentik",
        instruction: "Kuyruk yüzgecinin sağ kanadını ve ortadaki minik çentiği tamamla.",
        voice: "Kuyruk yüzgecinin diğer kanadını ve ortasındaki çentiği tamamlayalım.",
        svg: `<path d="M 140 435 C 135 455, 125 480, 155 485 C 170 460, 155 430, 140 420" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`
      },
      {
        title: "17. Adım: Karın Açık Renk Ayrım Dalga Hattı",
        instruction: "Gövde boyunca uzanan beyaz karın ayrım dalga çizgisini çiz.",
        voice: "Gövde boyunca uzanan açık renkli karın ayrım çizgisini çizelim.",
        svg: `<path d="M 445 265 C 390 315, 320 340, 240 375 C 180 400, 150 415, 140 425" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>`
      },
      {
        title: "18. Adım: Dalgalı Deniz Kaidesi",
        instruction: "Yunusumuzun altındaki köpüklü okyanus dalgalarını çiz.",
        voice: "Yunusumuzun altındaki köpüklü okyanus dalgalarını yapalım.",
        svg: `<path d="M 80 490 C 130 460, 180 520, 240 480 C 300 450, 350 510, 420 475 C 470 450, 520 490, 550 480" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`
      },
      {
        title: "19. Adım: Havada Sıçrayan Su Damlacıkları",
        instruction: "Dalgaların üstüne havaya saçılan neşeli su damlası daireleri ekle.",
        voice: "Havaya sıçrayan neşeli su damlacıklarını çizelim.",
        svg: `<circle cx="150" cy="440" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><circle cx="180" cy="410" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><circle cx="450" cy="420" r="9" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><circle cx="475" cy="445" r="6" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>`
      },
      {
        title: "20. Adım: Kılavuzları Silme ve Canlı Okyanus Renkleriyle Boyama",
        instruction: "Harika bir deniz manzarası! Mavi çizgileri sil ve yunusunu turkuaz okyanus renkleriyle boya!",
        voice: "Tebrikler Kıvanç! Yunusun adeta denizden fırlamış gibi canlandı. Şimdi mavi kılavuzları silginle sil ve resmini masmavi okyanus renkleriyle boya!",
        svg: `
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
          <path d="M 80 490 C 130 460, 180 520, 240 480 C 300 450, 350 510, 420 475 C 470 450, 520 490, 550 480 C 550 540, 80 540, 80 490 Z" fill="url(#oceanWaves)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="150" cy="440" r="10" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/>
          <circle cx="180" cy="410" r="7" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/>
          <circle cx="450" cy="420" r="9" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/>
          <circle cx="475" cy="445" r="6" fill="#38bdf8" stroke="#0f172a" stroke-width="3"/>
          <path d="M 125 415 C 80 395, 55 425, 75 460 C 105 450, 125 435, 140 435 C 135 455, 125 480, 155 485 C 170 460, 155 430, 140 420 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 320 185 C 330 115, 380 125, 395 180 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 440 210 C 490 220, 520 245, 515 270 C 490 280, 455 275, 430 265 C 380 295, 340 335, 290 350 C 235 370, 190 385, 140 420 C 130 405, 130 385, 140 370 C 200 280, 265 210, 320 185 C 360 170, 410 180, 440 210 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 445 265 C 390 315, 320 340, 240 375 C 180 400, 150 415, 140 425 C 145 400, 185 370, 230 355 C 310 325, 370 295, 430 265 Z" fill="url(#dolphinBelly)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 370 285 C 390 325, 400 350, 375 355 C 365 340, 365 310, 370 285 Z" fill="#0284c7" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 345 315 C 375 365, 360 410, 310 405 C 305 380, 320 345, 345 315 Z" fill="url(#dolphinBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="420" cy="195" rx="8" ry="4" fill="#0f172a" transform="rotate(-15 420 195)"/>
          <circle cx="430" cy="225" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <circle cx="433" cy="226" r="9" fill="#0f172a"/>
          <circle cx="428" cy="222" r="4" fill="#ffffff"/>
          <circle cx="435" cy="229" r="2" fill="#ffffff"/>
          <path d="M 418 208 Q 430 202, 442 208" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <path d="M 465 260 C 485 272, 510 265, 515 258" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
        `
      }
    ]
  },

  // =========================================================================
  // 5. UZAY ROKETİ (21 MİKRO ADIM - 🟢 ÇIRAK)
  // =========================================================================
  {
    id: "cirak_uzay_roketi",
    categoryId: "uzay",
    name: "Uzay Roketi",
    emoji: "🚀",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Kükreyen alevleriyle uzaya fırlayan, yuvarlak pencereli, kanatlı ve Satürn gezegenine giden Uzay Roketi.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Roket Kırmızısı, Ateş Sarısı, Gece Mavisi Boya Kalemleri",
    colors: [
      { name: "Roket Kırmızısı", hex: "#ef4444" },
      { name: "Ateş Sarısı", hex: "#fde047" },
      { name: "Uzay Grisi", hex: "#64748b" },
      { name: "Cam Mavisi", hex: "#38bdf8" }
    ],
    previewSvg: `
      <defs>
        <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="60%" stop-color="#e2e8f0"/>
          <stop offset="100%" stop-color="#cbd5e1"/>
        </linearGradient>
        <linearGradient id="rocketRed" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#b91c1c"/>
        </linearGradient>
        <linearGradient id="rocketWindow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="rocketFire" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#dc2626"/>
        </linearGradient>
      </defs>
      <circle cx="120" cy="180" r="28" fill="#eab308" stroke="#0f172a" stroke-width="6"/>
      <ellipse cx="120" cy="180" rx="48" ry="12" fill="none" stroke="#fef08a" stroke-width="5" transform="rotate(-20 120 180)"/>
      <polygon points="480,110 484,122 496,126 484,130 480,142 476,130 464,126 476,122" fill="#fde047"/>
      <polygon points="180,90 183,98 191,101 183,104 180,112 177,104 169,101 177,98" fill="#fde047"/>
      <polygon points="460,220 463,228 471,231 463,234 460,242 457,234 449,231 457,228" fill="#fde047"/>
      <path d="M 250 465 C 240 500, 260 520, 240 550 C 270 535, 285 545, 300 580 C 315 545, 330 535, 360 550 C 340 520, 360 500, 350 465 Z" fill="url(#rocketFire)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <path d="M 270 465 C 270 495, 285 510, 300 535 C 315 510, 330 495, 330 465 Z" fill="#fef08a"/>
      <path d="M 260 435 L 245 465 L 355 465 L 340 435 Z" fill="#334155" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <path d="M 235 340 L 140 440 L 235 440 Z" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
      <path d="M 365 340 L 460 440 L 365 440 Z" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
      <path d="M 235 170 C 235 170, 235 435, 235 435 L 365 435 L 365 170 C 365 170, 300 160, 235 170 Z" fill="url(#rocketBody)" stroke="#0f172a" stroke-width="10"/>
      <path d="M 292 364 L 292 440 L 308 440 L 308 364 Z" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
      <path d="M 235 170 C 265 110, 335 110, 365 170 Z" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
      <line x1="300" y1="110" x2="300" y2="60" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
      <circle cx="300" cy="55" r="7" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
      <rect x="235" y="340" width="130" height="24" rx="6" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="5"/>
      <circle cx="300" cy="270" r="42" fill="#475569" stroke="#0f172a" stroke-width="8"/>
      <circle cx="300" cy="270" r="30" fill="url(#rocketWindow)" stroke="#0f172a" stroke-width="5"/>
      <circle cx="290" cy="260" r="8" fill="#ffffff" opacity="0.8"/>
      <circle cx="270" cy="270" r="3" fill="#ffffff"/>
      <circle cx="330" cy="270" r="3" fill="#ffffff"/>
      <circle cx="300" cy="240" r="3" fill="#ffffff"/>
      <circle cx="300" cy="300" r="3" fill="#ffffff"/>
    `,
    steps: [
      {
        title: "1. Adım: Roket Gövdesi Kılavuz Kapsülü (Mavi)",
        instruction: "Kağıdın ortasına yukarı doğru dik duran roket gövde kapsülü kılavuzunu çiz.",
        voice: "Kağıdın tam ortasına dik duran kapsül şeklinde bir roket gövdesi kılavuzu çizelim.",
        svg: `<path d="M 230 430 L 230 220 C 230 110, 370 110, 370 220 L 370 430 Z" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Yan Kanatlar ve Alev Kılavuz Hatları (Mavi)",
        instruction: "İki yana üçgen kanat ve alta alev kılavuz çizgilerini hafifçe ekle.",
        voice: "İki yana açılan kanatların ve alttaki alevin yerini belirleyen çizgileri çizelim.",
        svg: `<path d="M 230 350 L 140 435 L 230 435" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 370 350 L 460 435 L 370 435" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><line x1="300" y1="465" x2="300" y2="550" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Mermi Burun Konisi (Siyah)",
        instruction: "Roketin tepesindeki sivri mermi burun yayını çiz.",
        voice: "Şimdi kaleminle roketin tepesindeki yuvarlak mermi burun çizgisini yapalım.",
        svg: `<path d="M 245 170 C 265 110, 335 110, 355 170" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "4. Adım: Sivri İletişim Anteni ve Tepesi",
        instruction: "Burnun tam ucuna yukarı uzanan ince bir anten ve tepesine küçük bir yuvarlak koy.",
        voice: "Burnun tepesine uzaya sinyal gönderen anteni ve ucundaki yuvarlağı çizelim.",
        svg: `<line x1="300" y1="110" x2="300" y2="60" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><circle cx="300" cy="55" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>`
      },
      {
        title: "5. Adım: Burun Başlığı Ayrım Çizgisi",
        instruction: "Kırmızı burun konisini gövdeden ayıran yatay kavisli çizgiyi çiz.",
        voice: "Burun başlığını gövdeden ayıran yay çizgisini yapalım.",
        svg: `<path d="M 240 170 Q 300 185, 360 170" stroke="#0f172a" stroke-width="8" stroke-linecap="round" fill="none"/>`
      },
      {
        title: "6. Adım: Gövdenin Sol Dikey Duvarı",
        instruction: "Gövdenin sol tarafından aşağıya dimdik inen çizgiyi çiz.",
        voice: "Gövdenin solundan aşağıya dimdik inen yan duvarı çizelim.",
        svg: `<line x1="235" y1="170" x2="235" y2="435" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "7. Adım: Gövdenin Sağ Dikey Duvarı",
        instruction: "Gövdenin sağ tarafından aşağıya inen ikinci düz çizgiyi çiz.",
        voice: "Gövdenin sağından aşağı inen diğer duvarı da çizelim.",
        svg: `<line x1="365" y1="170" x2="365" y2="435" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>`
      },
      {
        title: "8. Adım: Büyük Yuvarlak Lumbuz Pencere Dış Halkası",
        instruction: "Gövdenin tam ortasına büyük yuvarlak bir pencere dairesi çiz.",
        voice: "Gövdenin tam ortasına astronotun baktığı kocaman yuvarlak pencereyi yapalım.",
        svg: `<circle cx="300" cy="270" r="42" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "9. Adım: Pencere İç Camı ve Yansıma Parlaması",
        instruction: "Dış halkanın içine ikinci bir cam çemberi ve parıldayan ışık yansıması çiz.",
        voice: "Pencerenin içine cam çemberini ve parlayan beyaz ışık yansımasını çizelim.",
        svg: `<circle cx="300" cy="270" r="30" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="290" cy="260" r="8" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>`
      },
      {
        title: "10. Adım: Pencere Metal Perçin Vidaları",
        instruction: "Pencere çerçevesinin dört yanına minik metal vida noktaları koy.",
        voice: "Pencerenin sağlam durması için dört köşesine minik vida noktaları koyalım.",
        svg: `<circle cx="270" cy="270" r="3" fill="#0f172a"/><circle cx="330" cy="270" r="3" fill="#0f172a"/><circle cx="300" cy="240" r="3" fill="#0f172a"/><circle cx="300" cy="300" r="3" fill="#0f172a"/>`
      },
      {
        title: "11. Adım: Gövde Yatay Görev Şeritleri",
        instruction: "Pencerenin altına roketin kırmızı görev kuşağını çiz.",
        voice: "Pencerenin altına roketin kırmızı görev kuşağını yapalım.",
        svg: `<rect x="235" y="340" width="130" height="24" rx="6" fill="none" stroke="#0f172a" stroke-width="7"/>`
      },
      {
        title: "12. Adım: Sol Aerodinamik Kanat",
        instruction: "Gövdenin sol altından dışarı açılan sivri üçgen kanadı çiz.",
        voice: "Sol taraftan dışarı açılan o sivri roket kanadını çizelim.",
        svg: `<path d="M 235 340 L 140 440 L 235 440 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`
      },
      {
        title: "13. Adım: Sağ Aerodinamik Kanat",
        instruction: "Gövdenin sağ altından dışarı açılan ikinci sivri kanadı çiz.",
        voice: "Şimdi sağ taraftaki ikinci sivri kanadımızı çizelim.",
        svg: `<path d="M 365 340 L 460 440 L 365 440 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>`
      },
      {
        title: "14. Adım: Orta Denge Kanatçığı",
        instruction: "Gövdenin tam ortasına aşağıya inen dar dikey kanatçığı ekle.",
        voice: "Gövdenin ortasına aşağıya inen küçük orta kanatçığı yapalım.",
        svg: `<path d="M 292 364 L 292 440 L 308 440 L 308 364 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>`
      },
      {
        title: "15. Adım: Motor Egzoz Nozulu",
        instruction: "Roketin en altına genişleyen yamuk şeklinde motor çıkışını çiz.",
        voice: "Roketin altından alevlerin püsküreceği motor egzozunu çizelim.",
        svg: `<path d="M 260 435 L 245 465 L 355 465 L 340 435 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "16. Adım: Büyük Dış Roket Alevi (Zikzak)",
        instruction: "Motordan aşağıya fışkıran sivri zikzak alev çizgilerini çiz.",
        voice: "Motordan aşağıya fışkıran büyük zikzak alev çizgilerini yapalım.",
        svg: `<path d="M 250 465 C 240 500, 260 520, 240 550 C 270 535, 285 545, 300 580 C 315 545, 330 535, 360 550 C 340 520, 360 500, 350 465 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "17. Adım: Sıcak İç Çekirdek Alevi",
        instruction: "Büyük alevin içine daha sıcak sarı çekirdek alevini çiz.",
        voice: "Alevin tam ortasına en sıcak sarı çekirdek alevini yapalım.",
        svg: `<path d="M 270 465 C 270 495, 285 510, 300 535 C 315 510, 330 495, 330 465 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>`
      },
      {
        title: "18. Adım: Duman ve İtici Güç Püskürmeleri",
        instruction: "Alevlerin iki yanına kıvrılan duman ve itici güç yaylarını ekle.",
        voice: "Alevlerin iki yanına fırlayan duman çizgilerini ekleyelim.",
        svg: `<path d="M 220 540 C 200 530, 180 545, 170 560" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M 380 540 C 400 530, 420 545, 430 560" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`
      },
      {
        title: "19. Adım: Uzaktaki Halkalı Gezegen",
        instruction: "Sol üst köşeye etrafında halkası olan Satürn benzeri bir gezegen çiz.",
        voice: "Sol üst köşeye etrafında halkası dönen o güzel gezegeni yapalım.",
        svg: `<circle cx="120" cy="180" r="28" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="120" cy="180" rx="48" ry="12" fill="none" stroke="#0f172a" stroke-width="5" transform="rotate(-20 120 180)"/>`
      },
      {
        title: "20. Adım: Parlayan Dört Köşeli Yıldızlar",
        instruction: "Uzayın boşluğuna parlayan dört köşeli sihirli yıldızlar serpiştir.",
        voice: "Uzayın derinliklerine parlayan dört köşeli minik yıldızlar serpiştirelim.",
        svg: `<polygon points="480,110 484,122 496,126 484,130 480,142 476,130 464,126 476,122" fill="#ffffff" stroke="#0f172a" stroke-width="4"/><polygon points="180,90 183,98 191,101 183,104 180,112 177,104 169,101 177,98" fill="#ffffff" stroke="#0f172a" stroke-width="3"/><polygon points="460,220 463,228 471,231 463,234 460,242 457,234 449,231 457,228" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>`
      },
      {
        title: "21. Adım: Kılavuzları Silme ve Canlı Uzay Renkleriyle Boyama",
        instruction: "Geri sayım bitti! Mavi çizgilerini sil ve roketini parlak uzay renkleriyle boya!",
        voice: "3, 2, 1, Fırlat! Roketin harika oldu Kıvanç! Şimdi mavi kılavuzları silginle sil ve roketini alev kırmızısı ve sarı renklerle boya!",
        svg: `
          <defs>
            <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f8fafc"/>
              <stop offset="60%" stop-color="#e2e8f0"/>
              <stop offset="100%" stop-color="#cbd5e1"/>
            </linearGradient>
            <linearGradient id="rocketRed" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="rocketWindow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
            <linearGradient id="rocketFire" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="40%" stop-color="#f97316"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
          </defs>
          <circle cx="120" cy="180" r="28" fill="#eab308" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="120" cy="180" rx="48" ry="12" fill="none" stroke="#fef08a" stroke-width="5" transform="rotate(-20 120 180)"/>
          <polygon points="480,110 484,122 496,126 484,130 480,142 476,130 464,126 476,122" fill="#fde047"/>
          <polygon points="180,90 183,98 191,101 183,104 180,112 177,104 169,101 177,98" fill="#fde047"/>
          <polygon points="460,220 463,228 471,231 463,234 460,242 457,234 449,231 457,228" fill="#fde047"/>
          <path d="M 250 465 C 240 500, 260 520, 240 550 C 270 535, 285 545, 300 580 C 315 545, 330 535, 360 550 C 340 520, 360 500, 350 465 Z" fill="url(#rocketFire)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 270 465 C 270 495, 285 510, 300 535 C 315 510, 330 495, 330 465 Z" fill="#fef08a"/>
          <path d="M 260 435 L 245 465 L 355 465 L 340 435 Z" fill="#334155" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 235 340 L 140 440 L 235 440 Z" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 365 340 L 460 440 L 365 440 Z" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 235 170 C 235 170, 235 435, 235 435 L 365 435 L 365 170 C 365 170, 300 160, 235 170 Z" fill="url(#rocketBody)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 292 364 L 292 440 L 308 440 L 308 364 Z" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 235 170 C 265 110, 335 110, 365 170 Z" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <line x1="300" y1="110" x2="300" y2="60" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
          <circle cx="300" cy="55" r="7" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <rect x="235" y="340" width="130" height="24" rx="6" fill="url(#rocketRed)" stroke="#0f172a" stroke-width="5"/>
          <circle cx="300" cy="270" r="42" fill="#475569" stroke="#0f172a" stroke-width="8"/>
          <circle cx="300" cy="270" r="30" fill="url(#rocketWindow)" stroke="#0f172a" stroke-width="5"/>
          <circle cx="290" cy="260" r="8" fill="#ffffff" opacity="0.8"/>
          <circle cx="270" cy="270" r="3" fill="#ffffff"/>
          <circle cx="330" cy="270" r="3" fill="#ffffff"/>
          <circle cx="300" cy="240" r="3" fill="#ffffff"/>
          <circle cx="300" cy="300" r="3" fill="#ffffff"/>
        `
      }
    ]
  },

  // =========================================================================
  // 6. GÖLGE NİNJA (22 MİKRO ADIM - 🟢 ÇIRAK)
  // =========================================================================
  {
    id: "cirak_golge_ninja",
    categoryId: "kahramanlar",
    name: "Gölge Ninja",
    emoji: "🥷",
    level: 1,
    levelName: "Çırak (Seviye 1)",
    levelBadge: "🟢 Çırak",
    description: "Gece gölgesi zırhlı, kırmızı bandana şeritli, sırtında katanası ve elinde yıldız shuriken tutan cesur Ninja.",
    materials: "1 Adet Kağıt, Kurşun Kalem, Silgi ve Gece Siyahı, Kırmızı, Metalik Gri Boya Kalemleri",
    colors: [
      { name: "Gece Siyahı", hex: "#0f172a" },
      { name: "Bandana Kırmızısı", hex: "#ef4444" },
      { name: "Çelik Grisi", hex: "#94a3b8" },
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
      <path d="M 120 515 C 160 480, 220 500, 260 485 C 300 470, 360 480, 400 485 C 440 495, 480 480, 500 515 C 450 550, 160 550, 120 515 Z" fill="url(#ninjaSmoke)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <path d="M 370 190 L 450 110 L 465 125 L 385 205 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="7"/>
      <rect x="445" y="105" width="25" height="10" rx="3" fill="#ca8a04" stroke="#0f172a" stroke-width="4" transform="rotate(-45 445 105)"/>
      <path d="M 455 100 L 490 65 L 505 80 L 470 115 Z" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
      <path d="M 230 170 C 180 160, 140 210, 95 200 C 130 225, 170 215, 230 190 Z" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
      <path d="M 230 180 C 170 190, 130 250, 85 250 C 120 270, 160 250, 230 205 Z" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
      <path d="M 250 280 C 230 330, 220 400, 240 485 L 360 485 C 380 400, 370 330, 350 280 Z" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="10"/>
      <rect x="235" y="375" width="130" height="24" rx="6" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
      <line x1="300" y1="400" x2="300" y2="485" stroke="#0f172a" stroke-width="8"/>
      <path d="M 240 290 L 195 345 L 230 365 L 260 320" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <path d="M 360 290 L 405 345 L 370 365 L 340 320" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
      <circle cx="195" cy="355" r="12" fill="#fed7aa" stroke="#0f172a" stroke-width="5"/>
      <circle cx="405" cy="355" r="12" fill="#fed7aa" stroke="#0f172a" stroke-width="5"/>
      <polygon points="405,335 410,350 425,355 410,360 405,375 400,360 385,355 400,350" fill="#94a3b8" stroke="#0f172a" stroke-width="4"/>
      <ellipse cx="300" cy="180" rx="75" ry="70" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="10"/>
      <path d="M 245 165 C 245 155, 355 155, 355 165 C 355 210, 245 210, 245 165 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="7"/>
      <rect x="240" y="130" width="120" height="28" rx="6" fill="url(#ninjaPlate)" stroke="#0f172a" stroke-width="7"/>
      <circle cx="248" cy="144" r="3" fill="#0f172a"/>
      <circle cx="352" cy="144" r="3" fill="#0f172a"/>
      <polygon points="300,136 303,142 309,144 303,146 300,152 297,146 291,144 297,142" fill="#0f172a"/>
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
        instruction: "Kağıdın ortasına üstte kafa dairesi, altta gövde için hafif kılavuz ovalleri çiz.",
        voice: "Kurşun kalemini bastırmadan üstte kafa, altta gövde için hafif kılavuz ovalleri çizelim.",
        svg: `<ellipse cx="300" cy="180" rx="75" ry="70" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 250 280 C 230 330, 220 400, 240 485 L 360 485 C 380 400, 370 330, 350 280 Z" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: Kılıç ve Bandana Kılavuz Çizgileri (Mavi)",
        instruction: "Sırttan çapraz uzanan kılıç çizgisini ve sola açılan bandana kılavuzunu ekle.",
        voice: "Sırttan uzanan kılıcın ve uçuşan kafa bandının yerini hafifçe çizelim.",
        svg: `<line x1="370" y1="190" x2="500" y2="60" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/><path d="M 230 170 C 180 160, 140 210, 95 200" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="10 8"/>`
      },
      {
        title: "3. Adım: Maskeli Baş Kukuletası Dış Konturu (Siyah)",
        instruction: "Mavi kafa kılavuzunun üzerinden geçerek yuvarlak ninja maskesi kafasını çiz.",
        voice: "Mavi kılavuzun üzerinden geçerek ninjanın maskeli yuvarlak başını çizelim.",
        svg: `<ellipse cx="300" cy="180" rx="75" ry="70" fill="none" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "4. Adım: Yüz Açıklığı Penceresi (Ten Alanı)",
        instruction: "Maskenin ortasına gözlerin göründüğü yatay oval yüz açıklığını çiz.",
        voice: "Maskenin ortasına gözlerin bakacağı yatay pencereyi çizelim.",
        svg: `<path d="M 245 165 C 245 155, 355 155, 355 165 C 355 210, 245 210, 245 165 Z" fill="none" stroke="#0f172a" stroke-width="7"/>`
      },
      {
        title: "5. Adım: Alın Koruyucu Metal Plaka Çerçevesi",
        instruction: "Alnın üstüne metal koruyucu dikdörtgen levhayı çiz.",
        voice: "Alnın hemen üstüne metal koruyucu plaka dikdörtgenini yapalım.",
        svg: `<rect x="240" y="130" width="120" height="28" rx="6" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "6. Adım: Plaka Köşe Vidaları ve Ninja Yıldızı Amblemi",
        instruction: "Plakanın iki yanına vida noktaları ve tam ortasına sivri ninja amblemini çiz.",
        voice: "Plakanın iki yanına vidaları ve tam ortasına ninjanın gizli amblemini çizelim.",
        svg: `<circle cx="248" cy="144" r="3" fill="#0f172a"/><circle cx="352" cy="144" r="3" fill="#0f172a"/><polygon points="300,136 303,142 309,144 303,146 300,152 297,146 291,144 297,142" fill="#0f172a"/>`
      },
      {
        title: "7. Adım: Sol Kararlı Anime Göz Çizgisi",
        instruction: "Yüz açıklığının soluna keskin, cesur bir üst göz kapağı çizgisi çiz.",
        voice: "Yüz açıklığının soluna cesur ve kararlı bir göz çizgisi yapalım.",
        svg: `<path d="M 260 175 Q 275 165, 290 178" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`
      },
      {
        title: "8. Adım: Sol Gözbebeği ve Parlama Işığı",
        instruction: "Sol gözün içine koyu gözbebeği ve parlayan minik beyaz ışık noktasını koy.",
        voice: "Sol gözün içine koyu gözbebeğini ve parlayan ışık noktasını çizelim.",
        svg: `<circle cx="275" cy="182" r="9" fill="#0f172a"/><circle cx="272" cy="179" r="3" fill="#ffffff"/>`
      },
      {
        title: "9. Adım: Sağ Kararlı Anime Göz Çizgisi",
        instruction: "Yüz açıklığının sağına da aynı kararlı üst göz kapağı çizgisini çiz.",
        voice: "Şimdi sağ tarafa da aynı kararlı göz çizgisini yapalım.",
        svg: `<path d="M 340 175 Q 325 165, 310 178" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>`
      },
      {
        title: "10. Adım: Sağ Gözbebeği ve Parlama Işığı",
        instruction: "Sağ gözün içine de gözbebeği ve parlayan beyaz ışığı ekle.",
        voice: "Sağ gözün içine de gözbebeğini ve parlayan ışığı koyalım.",
        svg: `<circle cx="325" cy="182" r="9" fill="#0f172a"/><circle cx="322" cy="179" r="3" fill="#ffffff"/>`
      },
      {
        title: "11. Adım: Rüzgarda Uçuşan Sol Kafa Bandı Şeridi",
        instruction: "Kafanın sol tarafından geriye doğru dalgalanan birinci kırmızı bandana şeridini çiz.",
        voice: "Kafanın solundan rüzgarla uçuşan birinci bandana şeridini çizelim.",
        svg: `<path d="M 230 170 C 180 160, 140 210, 95 200 C 130 225, 170 215, 230 190 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "12. Adım: Dalgalanan İkinci Bandana Şeridi",
        instruction: "Hemen altına rüzgarla dalgalanan ikinci bandana şeridini ekle.",
        voice: "Hemen altına rüzgarla dalgalanan ikinci kırmızı şeridi yapalım.",
        svg: `<path d="M 230 180 C 170 190, 130 250, 85 250 C 120 270, 160 250, 230 205 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "13. Adım: Omuzlar ve Ninja Giysisi Yan Hatları",
        instruction: "Kafanın altından aşağıya inen geniş omuzları ve gövde cübbesi hatlarını çiz.",
        voice: "Kafanın altından aşağıya inen geniş omuzları ve gövde hatlarını çizelim.",
        svg: `<path d="M 250 280 C 230 330, 220 400, 240 485 L 360 485 C 380 400, 370 330, 350 280 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>`
      },
      {
        title: "14. Adım: Beldeki Geniş Kırmızı Kuşak",
        instruction: "Gövdenin tam bel kısmına yatay geniş ninja kuşağını çiz.",
        voice: "Ninjanın beline bağlanan geniş kırmızı kuşağı yapalım.",
        svg: `<rect x="235" y="375" width="130" height="24" rx="6" fill="none" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "15. Adım: Sol Bükülü Kol ve Yumruk",
        instruction: "Sol tarafta bükülü duran kolu ve sıkılı yumruğu çiz.",
        voice: "Sol tarafta bükülü duran kolu ve sıkılı el yumruğunu çizelim.",
        svg: `<path d="M 240 290 L 195 345 L 230 365 L 260 320" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><circle cx="195" cy="355" r="12" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "16. Adım: Sağ Kol ve Eldivenli El",
        instruction: "Sağ tarafta silah tutan bükülü kolu ve eldivenli eli çiz.",
        voice: "Sağ taraftaki kolu ve ninja yıldızını tutan eli çizelim.",
        svg: `<path d="M 360 290 L 405 345 L 370 365 L 340 320" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><circle cx="405" cy="355" r="12" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "17. Adım: Eldeki Sivri Shuriken (Ninja Yıldızı)",
        instruction: "Sağ elin hemen ucuna dört sivri köşeli çelik ninja yıldızını çiz.",
        voice: "Sağ elin ucuna dört sivri köşesi olan çelik ninja yıldızını çizelim.",
        svg: `<polygon points="405,335 410,350 425,355 410,360 405,375 400,360 385,355 400,350" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>`
      },
      {
        title: "18. Adım: Sırttan Uzanan Katana Kılıcı Kını",
        instruction: "Sağ omzun arkasından yukarıya doğru çapraz uzanan kılıç kınını çiz.",
        voice: "Omzun arkasından yukarı uzanan kılıç kınını çizelim.",
        svg: `<path d="M 370 190 L 450 110 L 465 125 L 385 205 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "19. Adım: Kılıç El Siperliği ve Örgülü Kabzası",
        instruction: "Kılıcın el siperliğini ve ucundaki tutma kabzasını tamamla.",
        voice: "Kılıcın altın el siperliğini ve tuttuğu örgülü kabzayı çizelim.",
        svg: `<rect x="445" y="105" width="25" height="10" rx="3" fill="none" stroke="#0f172a" stroke-width="5" transform="rotate(-45 445 105)"/><path d="M 455 100 L 490 65 L 505 80 L 470 115 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "20. Adım: Ninja Bacakları Duruşu ve Ayrım Çizgisi",
        instruction: "Bacakların ortasına dikey ayrım çizgisini çizerek sağlam duruşu tamamla.",
        voice: "Bacakların ortasına dikey ayrım çizgisini çizerek sağlam duruşunu yapalım.",
        svg: `<line x1="300" y1="400" x2="300" y2="485" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>`
      },
      {
        title: "21. Adım: Ninjanın Bastığı Gizemli Duman Bulutu",
        instruction: "Ninjanın ayaklarının altına kıvrımlı gizemli sis dumanı bulutunu çiz.",
        voice: "Ninjanın bastığı yere gizemli bir duman bulutu çizelim.",
        svg: `<path d="M 120 515 C 160 480, 220 500, 260 485 C 300 470, 360 480, 400 485 C 440 495, 480 480, 500 515 C 450 550, 160 550, 120 515" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>`
      },
      {
        title: "22. Adım: Kılavuzları Silme ve Canlı Gölge Ninja Renkleri",
        instruction: "Harika bir kahraman oldu! Mavi çizgileri sil, giysiyi gece siyahına ve kuşağı kırmızıya boya!",
        voice: "Tebrikler Kıvanç! Gölge Ninjan göreve hazır! Şimdi mavi kılavuzları silginle sil ve ninjanı gece siyahı, parlak kırmızı ve gümüş renklerle boya!",
        svg: `
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
          <path d="M 120 515 C 160 480, 220 500, 260 485 C 300 470, 360 480, 400 485 C 440 495, 480 480, 500 515 C 450 550, 160 550, 120 515 Z" fill="url(#ninjaSmoke)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 370 190 L 450 110 L 465 125 L 385 205 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="7"/>
          <rect x="445" y="105" width="25" height="10" rx="3" fill="#ca8a04" stroke="#0f172a" stroke-width="4" transform="rotate(-45 445 105)"/>
          <path d="M 455 100 L 490 65 L 505 80 L 470 115 Z" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 230 170 C 180 160, 140 210, 95 200 C 130 225, 170 215, 230 190 Z" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 230 180 C 170 190, 130 250, 85 250 C 120 270, 160 250, 230 205 Z" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 250 280 C 230 330, 220 400, 240 485 L 360 485 C 380 400, 370 330, 350 280 Z" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="10"/>
          <rect x="235" y="375" width="130" height="24" rx="6" fill="url(#ninjaRed)" stroke="#0f172a" stroke-width="7"/>
          <line x1="300" y1="400" x2="300" y2="485" stroke="#0f172a" stroke-width="8"/>
          <path d="M 240 290 L 195 345 L 230 365 L 260 320" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 360 290 L 405 345 L 370 365 L 340 320" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="195" cy="355" r="12" fill="#fed7aa" stroke="#0f172a" stroke-width="5"/>
          <circle cx="405" cy="355" r="12" fill="#fed7aa" stroke="#0f172a" stroke-width="5"/>
          <polygon points="405,335 410,350 425,355 410,360 405,375 400,360 385,355 400,350" fill="#94a3b8" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="300" cy="180" rx="75" ry="70" fill="url(#ninjaSuit)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 245 165 C 245 155, 355 155, 355 165 C 355 210, 245 210, 245 165 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="7"/>
          <rect x="240" y="130" width="120" height="28" rx="6" fill="url(#ninjaPlate)" stroke="#0f172a" stroke-width="7"/>
          <circle cx="248" cy="144" r="3" fill="#0f172a"/>
          <circle cx="352" cy="144" r="3" fill="#0f172a"/>
          <polygon points="300,136 303,142 309,144 303,146 300,152 297,146 291,144 297,142" fill="#0f172a"/>
          <path d="M 260 175 Q 275 165, 290 178" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
          <circle cx="275" cy="182" r="9" fill="#0f172a"/>
          <circle cx="272" cy="179" r="3" fill="#ffffff"/>
          <path d="M 340 175 Q 325 165, 310 178" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
          <circle cx="325" cy="182" r="9" fill="#0f172a"/>
          <circle cx="322" cy="179" r="3" fill="#ffffff"/>
        `
      }
    ]
  }
];
