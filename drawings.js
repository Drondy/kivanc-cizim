// Kıvanç'ın Çizim Atölyesi - Profesyonel Çizim Veritabanı
// Zengin Sanatsal Detaylar, Mavi İskelet Taslakları, Gölgelendirmeler ve Katmanlı SVG Yapısı

const CATEGORIES_DATA = [
  {
    id: "hayvanlar",
    name: "Vahşi & Sevimli Hayvanlar",
    emoji: "🦁",
    desc: "Aslan, Bengal Kaplanı, Kurt, Çita, Kartal, Panda ve sevimli dostlar",
    color: "#f59e0b"
  },
  {
    id: "arabalar",
    name: "Süper Arabalar & Hız Makineleri",
    emoji: "🏎️",
    desc: "Lamborghini, Ferrari, Bugatti, Monster Truck, Formula 1 ve Motosiklet",
    color: "#ef4444"
  },
  {
    id: "dinozorlar",
    name: "Dinozorlar & Efsanevi Ejderhalar",
    emoji: "🦖",
    desc: "T-Rex, Spinosaurus, Velociraptor, Triceratops ve Ateş Ejderhası",
    color: "#10b981"
  },
  {
    id: "deniz",
    name: "Derin Deniz & Okyanus Canlıları",
    emoji: "🌊",
    desc: "Büyük Beyaz Köpekbalığı, Katil Balina Orka, Tül Yüzgeçli Betta ve Dev Ahtapot",
    color: "#06b6d4"
  },
  {
    id: "uzay",
    name: "Uzay Gemileri & Zırhlı Mecha",
    emoji: "🚀",
    desc: "Yıldız Savaşçısı, Savaş Robotu Mecha, Ay Roketi ve Lazer Gemileri",
    color: "#8b5cf6"
  },
  {
    id: "kahramanlar",
    name: "Anime & Efsanevi Kahramanlar",
    emoji: "🦸",
    desc: "Ninja, Samuray, Süper Kahraman, Ortaçağ Şövalyesi ve Anime Karakterleri",
    color: "#ec4899"
  }
];

// 50+ Yüksek Kaliteli ve Ayrıntılı Çizim Listesi (Genişletilebilir Yapı)
const DRAWINGS_DATA = [
  // =========================================================================
  // KATEGORİ 1: SÜPER ARABALAR
  // =========================================================================
  {
    id: "araba_lambo_aventador",
    categoryId: "arabalar",
    name: "Lamborghini Aventador (Süper Spor)",
    emoji: "🏎️",
    level: 3,
    levelName: "Usta Sanatçı",
    levelBadge: "🔴 Usta",
    tags: ["araba", "yarış", "lamborghini", "hız", "spor"],
    description: "Yere sıfır aerodinamik gövde, keskin 'Y' LED farlar, karbon fiber hava kanalları ve dev yarış spoyleri.",
    colors: [
      { name: "Yarış Sarısı / Turuncu", hex: "#eab308" },
      { name: "Karbon Fiber Siyahı", hex: "#0f172a" },
      { name: "Fren Kaliperi Kırmızısı", hex: "#dc2626" },
      { name: "Jant Titanyum Grisi", hex: "#64748b" }
    ],
    steps: [
      {
        title: "1. Adım: Aerodinamik Kılavuz Taslağı",
        instruction: "Kağıdına hafif bastırarak eğik alçak tavanı ve tekerlek boşluklarını belirleyen gövde hatlarını çiz!",
        voice: "İlk olarak kurşunkalemini hafif tutarak arabanın yere basık hız silüetini ve tekerlek yuvalarını çiziyoruz.",
        svg: `<path d="M 60 380 L 120 380 C 130 310, 230 310, 240 380 L 370 380 C 380 310, 480 310, 490 380 L 550 380 L 540 330 L 450 270 L 310 230 L 170 310 L 90 340 Z" fill="none" stroke="#3b82f6" stroke-width="8" stroke-dasharray="10 8"/>`
      },
      {
        title: "2. Adım: İnce Profil Düşük Lastikler ve Çift Çember Jantlar",
        instruction: "Çamurlukların içine iki dev yarış tekerleği, iç jant çemberleri ve havalandırma deliklerini çiz!",
        voice: "Şimdi yarış arabasını yola kenetleyen dev alaşım jantları ve düşük profil spor lastikleri çizelim.",
        svg: `<circle cx="180" cy="380" r="48" fill="#0f172a"/><circle cx="180" cy="380" r="32" fill="#cbd5e1" stroke="#0f172a" stroke-width="8"/><circle cx="430" cy="380" r="48" fill="#0f172a"/><circle cx="430" cy="380" r="32" fill="#cbd5e1" stroke="#0f172a" stroke-width="8"/><path d="M 60 380 L 120 380 M 240 380 L 370 380 M 490 380 L 550 380" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "3. Adım: Keskin Kokpit Camları ve Yan Hava Emiş Kanalları",
        instruction: "Açılı ön camı, tavanı ve motora soğuk hava üfleyen büyük üçgen yan hava kanalını çiz!",
        voice: "Arabanın açılı kokpit camlarını ve motora hava çeken yan kanallarını ekliyoruz.",
        svg: `<path d="M 190 305 L 305 240 L 415 280 L 280 305 Z" fill="#0284c7" opacity="0.4" stroke="#0f172a" stroke-width="12"/><path d="M 285 315 L 390 315 L 360 365 L 270 365 Z" fill="#0f172a"/><line x1="330" y1="245" x2="330" y2="305" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "4. Adım: Agresif 'Y' Biçimli LED Farlar ve Ön Karbon Difüzör",
        instruction: "Ön kaputa eğik iki keskin LED far, alt ızgara bıçakları ve yan ayna kulelerini çiz!",
        voice: "Arabaya o öfkeli ve güçlü bakışı kazandıran keskin LED farlarını ve karbon tampon bıçaklarını yapalım.",
        svg: `<path d="M 85 350 L 135 340 L 115 358 Z" fill="#facc15" stroke="#0f172a" stroke-width="8"/><line x1="60" y1="375" x2="120" y2="375" stroke="#0f172a" stroke-width="12"/><path d="M 210 290 L 235 285 L 230 300 Z" fill="#0f172a"/>`
      },
      {
        title: "5. Adım: Dev Yarış Spoyleri ve Çift Egzoz Detayları",
        instruction: "Arka bagaj kapağına dik açılı karbon yarış kanadı ve çok kollu jant çizgilerini tamamla!",
        voice: "Son ustalık adımı! Yüksek hızda yere basmasını sağlayan dev yarış spoylerini ve jant kollarını çiziyoruz.",
        svg: `<path d="M 480 300 L 535 265 L 550 280 L 505 315 Z" fill="#0f172a"/><line x1="495" y1="310" x2="495" y2="340" stroke="#0f172a" stroke-width="8"/><line x1="520" y1="295" x2="520" y2="340" stroke="#0f172a" stroke-width="8"/><line x1="180" y1="350" x2="180" y2="410" stroke="#0f172a" stroke-width="6"/><line x1="150" y1="380" x2="210" y2="380" stroke="#0f172a" stroke-width="6"/><line x1="430" y1="350" x2="430" y2="410" stroke="#0f172a" stroke-width="6"/><line x1="400" y1="380" x2="460" y2="380" stroke="#0f172a" stroke-width="6"/>`
      }
    ],
    coloring: `<path d="M 60 380 L 120 380 C 130 310, 230 310, 240 380 L 370 380 C 380 310, 480 310, 490 380 L 550 380 L 540 330 L 450 270 L 310 230 L 170 310 L 90 340 Z" fill="#eab308" opacity="0.45"/>`
  },
  {
    id: "araba_monster_truck",
    categoryId: "arabalar",
    name: "Monster Truck (Canavar Kamyon)",
    emoji: "🚙",
    level: 2,
    levelName: "Ressam",
    levelBadge: "🟡 Gelişmiş",
    tags: ["araba", "monster", "kamyon", "çamur", "büyük tekerlek"],
    description: "Devasa dişli çamur lastikleri, açık hidrolik süspansiyon yayları ve havalı pikap kabini.",
    colors: [
      { name: "Elektrik Mavisi", hex: "#2563eb" },
      { name: "Lastik Siyahı", hex: "#0f172a" },
      { name: "Yay Sarısı", hex: "#fde047" }
    ],
    steps: [
      {
        title: "1. Adım: İki Devasa Dişli Lastik",
        instruction: "Kağıdın altına birbirinden açık iki kocaman kalın lastik ve derin çamur dişlerini çiz!",
        voice: "Canavar kamyonun önüne gelen arabaları ezip geçen devasa lastikleriyle başlıyoruz.",
        svg: `<circle cx="170" cy="390" r="70" fill="#0f172a"/><circle cx="170" cy="390" r="35" fill="#facc15" stroke="#0f172a" stroke-width="8"/><circle cx="430" cy="390" r="70" fill="#0f172a"/><circle cx="430" cy="390" r="35" fill="#facc15" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "2. Adım: Çelik Şasi ve Ağır Yaylı Süspansiyonlar",
        instruction: "Lastiklerin üzerinde yükselen çelik boru şasiyi ve dev amortisör yaylarını çiz!",
        voice: "Gövdeyi 2 metre havada tutan güçlü amortisör yaylarını ve taşıyıcı çelik iskeleti çizelim.",
        svg: `<path d="M 170 320 L 220 280 L 380 280 L 430 320" stroke="#0f172a" stroke-width="14"/><line x1="190" y1="330" x2="210" y2="280" stroke="#ef4444" stroke-width="12"/><line x1="410" y1="330" x2="390" y2="280" stroke="#ef4444" stroke-width="12"/>`
      },
      {
        title: "3. Adım: Agresif Pikap Gövdesi ve Camlar",
        instruction: "Şasinin üstüne oturan kabini, ön burnu, arka açık kasayı ve pencereleri çiz!",
        voice: "Şimdi yukarıda duran heybetli kamyonet gövdesini ve sürücü pencerelerini yapıyoruz.",
        svg: `<path d="M 110 270 L 110 215 L 200 215 L 260 145 L 390 145 L 415 215 L 500 215 L 500 270 Z" fill="#2563eb" opacity="0.6" stroke="#0f172a" stroke-width="14"/><path d="M 270 160 L 380 160 L 395 205 L 230 205 Z" fill="#7dd3fc" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "4. Adım: Tavan Projektörleri ve Dikey Egzoz Bacaları",
        instruction: "Tavanın üstüne 4 güçlü sarı arama lambası ve arkaya yukarı bakan dikey egzoz borularını ekle!",
        voice: "Son dokunuş! Geceyi aydınlatan tepe lambalarını ve dikey çelik egzozları tamamlıyoruz.",
        svg: `<circle cx="290" cy="130" r="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/><circle cx="320" cy="130" r="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/><circle cx="350" cy="130" r="10" fill="#facc15" stroke="#0f172a" stroke-width="6"/><path d="M 420 145 L 420 100 L 435 90 L 435 155" fill="#64748b" stroke="#0f172a" stroke-width="10"/>`
      }
    ],
    coloring: `<path d="M 110 270 L 110 215 L 200 215 L 260 145 L 390 145 L 415 215 L 500 215 L 500 270 Z" fill="#2563eb" opacity="0.6"/>`
  },
  {
    id: "araba_f1_bolid",
    categoryId: "arabalar",
    name: "Formula 1 Hız Makinesi",
    emoji: "🏎️",
    level: 3,
    levelName: "Usta Sanatçı",
    levelBadge: "🔴 Usta",
    tags: ["f1", "formula1", "araba", "yarış", "hızlı"],
    description: "Açık tekerlekler, aerodinamik ön kanat, halo güvenlik barı ve devasa arka rüzgarlık.",
    colors: [
      { name: "Ferrari Kırmızısı", hex: "#dc2626" },
      { name: "Pirelli Sarı Çizgi", hex: "#fde047" },
      { name: "Karbon Siyahı", hex: "#0f172a" }
    ],
    steps: [
      {
        title: "1. Adım: Alçak Mermi Gövde ve Burun Kanadı",
        instruction: "Öne doğru sivrilen dar burun konisini ve ön rüzgar bıçağını çiz!",
        voice: "Formula 1 aracının havalı sivri ön burnu ve rüzgarı kesen kanatlarıyla başlıyoruz.",
        svg: `<path d="M 60 380 L 170 380 L 220 330 L 440 330 L 500 370 L 540 370 L 530 330 L 420 290 L 260 300 L 120 340 L 60 370 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Dışarıda Duran 2 Geniş Slick Lastik",
        instruction: "Gövdenin tamamen dışında duran geniş tabanlı ön ve arka yarış tekerleklerini çiz!",
        voice: "Gövdenin dışında duran koca yarış tekerleklerini ve sarı hız çizgilerini yapalım.",
        svg: `<rect x="110" y="330" width="55" height="90" rx="16" fill="#0f172a"/><rect x="440" y="310" width="65" height="110" rx="18" fill="#0f172a"/>`
      },
      {
        title: "3. Adım: Sürücü Kokpiti ve Halo Koruması",
        instruction: "Pilotun kaskını, direksiyonunu ve kafasını koruyan titanyum Halo barını çiz!",
        voice: "Pilotun oturduğu güvenli kokpiti ve başının üzerindeki Halo koruma barını çiziyoruz.",
        svg: `<circle cx="340" cy="275" r="16" fill="#facc15" stroke="#0f172a" stroke-width="8"/><path d="M 310 290 C 330 250, 360 250, 380 290" stroke="#0f172a" stroke-width="12" fill="none"/>`
      },
      {
        title: "4. Adım: Dev Arka Rüzgarlık Kanadı (DRS)",
        instruction: "Arka kapağın üstüne çift katlı aerodinamik arka spoyleri ve hava giriş bacasını tamamla!",
        voice: "Son ustalık adımı! Formula 1'e o muazzam hızını veren çift katlı arka kanadı tamamlıyoruz.",
        svg: `<path d="M 480 260 L 550 260 L 550 290 L 480 290 Z" fill="#0f172a"/><line x1="500" y1="290" x2="500" y2="340" stroke="#0f172a" stroke-width="10"/><path d="M 360 240 L 410 240 L 410 290 Z" fill="#dc2626" stroke="#0f172a" stroke-width="8"/>`
      }
    ],
    coloring: `<path d="M 60 380 L 540 370 L 530 330 L 420 290 L 260 300 L 120 340 Z" fill="#dc2626" opacity="0.6"/>`
  },

  // =========================================================================
  // KATEGORİ 2: VAHŞİ HAYVANLAR
  // =========================================================================
  {
    id: "hayvan_kaplan_bengal",
    categoryId: "hayvanlar",
    name: "Yırtıcı Bengal Kaplanı",
    emoji: "🐯",
    level: 3,
    levelName: "Usta Sanatçı",
    levelBadge: "🔴 Usta",
    tags: ["hayvan", "kaplan", "vahşi", "kedi", "kral"],
    description: "Kükreyen çenesi, vahşi odaklanmış gözleri, kaslı omuzları ve ikonik kaplan çizgileri.",
    colors: [
      { name: "Alev Turuncusu", hex: "#ea580c" },
      { name: "Karbon Siyahı", hex: "#0f172a" },
      { name: "Kar Beyazı", hex: "#f8fafc" },
      { name: "Kızıl Göz Sarısı", hex: "#facc15" }
    ],
    steps: [
      {
        title: "1. Adım: Yanak Kürkleriyle Güçlü Kaplan Kafası",
        instruction: "Geniş bir kafa kubbesi ve yanlara doğru fışkıran sivri vahşi kürk tutamlarını çiz!",
        voice: "Kaplanımızın güçlü kafası ve iki yana açılan vahşi kürk çizgileriyle başlıyoruz.",
        svg: `<path d="M 220 180 C 220 110, 380 110, 380 180 C 420 220, 410 280, 370 310 C 340 330, 260 330, 230 310 C 190 280, 180 220, 220 180 Z" fill="#ea580c" opacity="0.35" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Yuvarlak Kulaklar ve Alındaki Kral Deseni",
        instruction: "Tepede iki güçlü yuvarlak kulak ve alındaki o meşhur kaplan çatısı çizgilerini yap!",
        voice: "Kaplanın yuvarlak kulaklarını ve alnındaki simetrik kaplan sembollerini çizelim.",
        svg: `<path d="M 230 140 C 200 130, 190 90, 225 80 C 255 70, 265 110, 255 130" stroke="#0f172a" stroke-width="12" fill="none"/><path d="M 370 140 C 400 130, 410 90, 375 80 C 345 70, 335 110, 345 130" stroke="#0f172a" stroke-width="12" fill="none"/><path d="M 285 130 L 300 155 L 315 130" stroke="#0f172a" stroke-width="10" fill="none"/><line x1="300" y1="110" x2="300" y2="155" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "3. Adım: Keskin Gözler, Geniş Burun ve Bıyık Yastıkları",
        instruction: "Sert bakan iki sarı çekik göz, üçgen geniş burun ve bıyık bölgelerini çiz!",
        voice: "Kaplanın vahşi doğada avına kilitlenen o büyüleyici gözlerini ve burnunu çiziyoruz.",
        svg: `<path d="M 245 200 Q 275 190, 280 205 Q 265 215, 245 200 Z" fill="#0f172a"/><circle cx="265" cy="200" r="4" fill="#ffffff"/><path d="M 355 200 Q 325 190, 320 205 Q 335 215, 355 200 Z" fill="#0f172a"/><circle cx="335" cy="200" r="4" fill="#ffffff"/><path d="M 285 240 L 315 240 L 300 260 Z" fill="#0f172a"/><path d="M 300 260 L 300 275" stroke="#0f172a" stroke-width="8"/><path d="M 300 275 Q 280 290, 265 275" stroke="#0f172a" stroke-width="8" fill="none"/><path d="M 300 275 Q 320 290, 335 275" stroke="#0f172a" stroke-width="8" fill="none"/>`
      },
      {
        title: "4. Adım: Kaslı Omuzlar ve Ağır Ön Pençeler",
        instruction: "Kafanın altından yere inen devasa omuz kaslarını ve masaya basan kalın pençeleri çiz!",
        voice: "Yeri sarsan güçlü kalın ön pençelerini ve omuz kaslarını yapıyoruz.",
        svg: `<path d="M 210 300 L 190 490 C 190 520, 250 520, 250 490 L 270 380" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 390 300 L 410 490 C 410 520, 350 520, 350 490 L 330 380" fill="none" stroke="#0f172a" stroke-width="14"/><line x1="210" y1="490" x2="210" y2="515" stroke="#0f172a" stroke-width="8"/><line x1="230" y1="490" x2="230" y2="515" stroke="#0f172a" stroke-width="8"/><line x1="370" y1="490" x2="370" y2="515" stroke="#0f172a" stroke-width="8"/><line x1="390" y1="490" x2="390" y2="515" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "5. Adım: Meşhur Siyah Kaplan Çizgileri",
        instruction: "Yanaklara, alına ve omuzlara simetrik sivri kaplan çizgilerini çekip resmi tamamla!",
        voice: "Son ustalık adımı! Kaplanı doğanın kralı yapan o efsanevi siyah çizgileri ekliyoruz.",
        svg: `<path d="M 195 210 L 230 215 L 205 230 Z" fill="#0f172a"/><path d="M 190 250 L 230 250 L 200 270 Z" fill="#0f172a"/><path d="M 405 210 L 370 215 L 395 230 Z" fill="#0f172a"/><path d="M 410 250 L 370 250 L 400 270 Z" fill="#0f172a"/>`
      }
    ],
    coloring: `<path d="M 220 180 C 220 110, 380 110, 380 180 C 420 220, 410 280, 370 310 C 340 330, 260 330, 230 310 C 190 280, 180 220, 220 180 Z" fill="#ea580c" opacity="0.45"/>`
  },
  {
    id: "hayvan_aslan_kral",
    categoryId: "hayvanlar",
    name: "Ormanlar Kralı Aslan",
    emoji: "🦁",
    level: 3,
    levelName: "Usta Sanatçı",
    levelBadge: "🔴 Usta",
    tags: ["hayvan", "aslan", "kral", "yele", "güçlü"],
    description: "Güneş gibi görkemli kabarık yelesi, asil gözleri ve kükreyen gururlu duruşu.",
    colors: [
      { name: "Altın Sarısı", hex: "#facc15" },
      { name: "Kızıl Kahve (Yele)", hex: "#9a3412" },
      { name: "Gece Siyahı", hex: "#0f172a" }
    ],
    steps: [
      {
        title: "1. Adım: Baş Ovali ve Gururlu Çene",
        instruction: "Kağıdın ortasına aslanın asil çehresini oluşturan ovali ve güçlü çeneyi çiz!",
        voice: "Aslanımızın gururlu başı ve geniş çene hatlarıyla çizime başlıyoruz.",
        svg: `<circle cx="300" cy="270" r="80" fill="#facc15" opacity="0.35" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Devasa Kabarık Yele Halesi",
        instruction: "Kafanın etrafına güneş alevleri gibi dalga dalga kabaran devasa bir yele çiz!",
        voice: "Şimdi aslanın kafasının etrafını saran o meşhur ihtişamlı yelesini çizelim.",
        svg: `<path d="M 300 120 C 350 120, 390 150, 420 140 C 450 180, 480 210, 470 260 C 500 300, 480 350, 450 380 C 460 420, 420 450, 380 460 C 340 480, 260 480, 220 460 C 180 450, 140 420, 150 380 C 120 350, 100 300, 130 260 C 120 210, 150 180, 180 140 C 210 150, 250 120, 300 120 Z" fill="#9a3412" opacity="0.4" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "3. Adım: Asil Gözler, Koca Burun ve Bıyıklar",
        instruction: "Yüze iki odaklanmış asil göz, geniş koyu burun ve yana süzülen bıyıkları çiz!",
        voice: "Ormanlar kralının derin bakan gözlerini ve kudretli burnunu yapıyoruz.",
        svg: `<circle cx="265" cy="255" r="12" fill="#0f172a"/><circle cx="269" cy="251" r="4" fill="#ffffff"/><circle cx="335" cy="255" r="12" fill="#0f172a"/><circle cx="339" cy="251" r="4" fill="#ffffff"/><path d="M 285 285 L 315 285 L 300 305 Z" fill="#0f172a"/><line x1="300" y1="305" x2="300" y2="320" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "4. Adım: Kaslı Ön Patiler ve Püsküllü Kuyruk",
        instruction: "Yelenin altından çıkan iki kalın ön bacak ve arkadan kıvrılan püsküllü kuyruğu tamamla!",
        voice: "Son dokunuş! Yeri sağlam tutan kalın patilerini ve ucunda püskül olan kuyruğunu tamamlıyoruz.",
        svg: `<path d="M 250 440 L 240 530 C 240 550, 280 550, 280 530 L 290 450" fill="none" stroke="#0f172a" stroke-width="12"/><path d="M 350 440 L 360 530 C 360 550, 320 550, 320 530 L 310 450" fill="none" stroke="#0f172a" stroke-width="12"/><path d="M 420 480 C 490 470, 510 410, 480 370" fill="none" stroke="#0f172a" stroke-width="12"/>`
      }
    ],
    coloring: `<circle cx="300" cy="270" r="80" fill="#facc15" opacity="0.5"/>`
  },
  {
    id: "hayvan_kurt_uluyan",
    categoryId: "hayvanlar",
    name: "Dolunaya Uluyan Kutup Kurdu",
    emoji: "🐺",
    level: 2,
    levelName: "Ressam",
    levelBadge: "🟡 Gelişmiş",
    tags: ["kurt", "hayvan", "uluma", "ay", "vahşi"],
    description: "Ay ışığında göğe doğru uluyan sivri burunlu, gür kürk yakalı asil bir kurt.",
    colors: [
      { name: "Gümüş Grisi", hex: "#94a3b8" },
      { name: "Gece Mavisi", hex: "#1e1b4b" },
      { name: "Dolunay Beyazı", hex: "#f8fafc" }
    ],
    steps: [
      {
        title: "1. Adım: Göğe Yükselen Sivri Kurt Burnu ve Çene",
        instruction: "Sağ yukarıya doğru bakan sivri burun, açık uluyan çene ve dik sivri kulağı çiz!",
        voice: "Dolunaya doğru başını kaldıran kurdun sivri burnu ve açık çenesiyle başlıyoruz.",
        svg: `<path d="M 180 340 L 250 250 L 380 130 C 400 130, 410 160, 390 180 L 350 210 L 380 230 L 330 250 L 270 340" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Sivri Dik Kulak ve Kapalı Huzurlu Göz",
        instruction: "Kafanın üstüne arkaya yatan sivri kurt kulağını ve şarkı söyler gibi kapalı huzurlu gözü çiz!",
        voice: "Kurdun dik kulağını ve ulurken gözlerini kapatan o asil ifadeyi çiziyoruz.",
        svg: `<path d="M 280 180 L 290 80 L 340 150" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 330 180 Q 345 170, 360 180" stroke="#0f172a" stroke-width="10" fill="none"/>`
      },
      {
        title: "3. Adım: Yele Gibi Dökülen Katmanlı Boyun Kürkleri",
        instruction: "Çenenin altından göğse inen zikzak rüzgarlı kalın kürk tutamlarını çiz!",
        voice: "Kurdun soğuktan koruyan o kalın göğüs ve boyun kürklerini zikzak çizgilerle çizelim.",
        svg: `<path d="M 270 340 L 240 380 L 270 410 L 230 450 L 270 490 L 220 540" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 180 340 L 140 420 L 170 540" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "4. Adım: Arkadaki Dev Dolunay Çemberi",
        instruction: "Kurdun kafasının arkasına gökyüzünü aydınlatan kocaman yuvarlak dolunayı ekle!",
        voice: "Son dokunuş! Kurdun arkasındaki parlayan devasa dolunayı çizip resmi taçlandırıyoruz.",
        svg: `<circle cx="390" cy="180" r="90" fill="#fef08a" opacity="0.4" stroke="#f59e0b" stroke-width="8" stroke-dasharray="8 6"/>`
      }
    ],
    coloring: `<path d="M 180 340 L 250 250 L 380 130 C 400 130, 410 160, 390 180 L 350 210 L 380 230 L 330 250 L 270 340 L 220 540 L 170 540 Z" fill="#94a3b8" opacity="0.45"/>`
  },

  // =========================================================================
  // KATEGORİ 3: DİNOZORLAR & EJDERHALAR
  // =========================================================================
  {
    id: "dino_trex_king",
    categoryId: "dinozorlar",
    name: "Korkusuz Kral T-Rex",
    emoji: "🦖",
    level: 3,
    levelName: "Usta Sanatçı",
    levelBadge: "🔴 Usta",
    tags: ["dinozor", "trex", "t-rex", "canavar", "kral"],
    description: "Kükreyen açık çene, jilet keskinliğinde hançer dişler, zırhlı kaş kemiği ve kalın kuyruk.",
    colors: [
      { name: "Orman Yeşili", hex: "#15803d" },
      { name: "Toprak Sarısı", hex: "#ca8a04" },
      { name: "Diş Beyazı", hex: "#f8fafc" }
    ],
    steps: [
      {
        title: "1. Adım: Devasa Kafatası ve Kükreyen Ağız",
        instruction: "Geniş burun kemerini, yukarı kalkan burnu ve aşağıya açılan koca alt çeneyi çiz!",
        voice: "Dinozorlar kralının yeri titreten açık kükreyen çenesiyle başlıyoruz.",
        svg: `<path d="M 280 180 C 250 140, 140 160, 140 220 L 250 240 L 160 300 L 250 280" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Hançer Dişler ve Kaş Kemiği Gözü",
        instruction: "Çenelerden dışarı fırlayan sivri üçgen dişleri ve kaş altındaki yırtıcı gözü çiz!",
        voice: "T-Rex'in o meşhur hançer dişlerini ve avına bakan keskin küçük gözünü yapıyoruz.",
        svg: `<path d="M 160 223 L 166 235 L 172 224 L 178 235 L 184 225 L 190 236 L 196 226" fill="#ffffff" stroke="#0f172a" stroke-width="8"/><path d="M 175 290 L 182 280 L 189 290 L 196 280 L 203 290" fill="#ffffff" stroke="#0f172a" stroke-width="8"/><circle cx="230" cy="180" r="10" fill="#0f172a"/><circle cx="233" cy="177" r="3" fill="#ffffff"/><path d="M 215 170 Q 235 165, 245 175" stroke="#0f172a" stroke-width="10" fill="none"/>`
      },
      {
        title: "3. Adım: Kaslı 'S' Boyun, Sırt ve Kalın Kuyruk",
        instruction: "Kafanın ardından inen kalın boyun kasını ve geriye doğru uzanan heybetli sırtı çiz!",
        voice: "Kafasından arkaya doğru uzanan dağ gibi kalın boynunu ve sırt çizgisini çizelim.",
        svg: `<path d="M 280 180 C 330 200, 360 250, 360 330 C 420 330, 500 290, 530 230" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 250 280 C 270 330, 270 380, 290 410" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "4. Adım: Dev Kaslı Bacak ve 3 Pençeli Ayak",
        instruction: "T-Rex'i taşıyan devasa uyluk kasını ve yere basan 3 sivri pençeli ayağı çiz!",
        voice: "Ağır gövdeyi taşıyan o devasa kaslı dinozor bacağını ve keskin pençelerini yapıyoruz.",
        svg: `<path d="M 330 330 C 370 360, 370 420, 320 460 L 325 520 L 270 520 C 270 470, 300 440, 290 410" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 270 520 L 250 540 L 335 540 L 325 520" fill="#0f172a"/><line x1="265" y1="535" x2="255" y2="540" stroke="#ffffff" stroke-width="6"/><line x1="290" y1="535" x2="290" y2="540" stroke="#ffffff" stroke-width="6"/><line x1="320" y1="535" x2="330" y2="540" stroke="#ffffff" stroke-width="6"/>`
      },
      {
        title: "5. Adım: İki Tırnaklı Minik Kollar ve Sırt Dikenleri",
        instruction: "Öne uzanan karakteristik minik av kollarını ve sırttaki zırh pullarını tamamla!",
        voice: "Son ustalık adımı! Meşhur iki tırnaklı minik kollarını ve sırt pullarını çizip tamamlıyoruz.",
        svg: `<path d="M 280 340 L 245 365 L 255 375 L 240 375" stroke="#0f172a" stroke-width="10" fill="none"/><path d="M 330 450 C 410 470, 480 410, 530 230" stroke="#0f172a" stroke-width="14" fill="none"/>`
      }
    ],
    coloring: `<path d="M 280 180 C 250 140, 140 160, 140 220 L 250 240 L 160 300 L 250 280 C 270 330, 270 380, 290 410 C 300 440, 270 470, 270 520 L 335 540 L 325 520 C 370 420, 370 360, 330 330 C 360 250, 330 200, 280 180 Z" fill="#15803d" opacity="0.45"/>`
  },
  {
    id: "dino_ejderha_ates",
    categoryId: "dinozorlar",
    name: "Ateş Püskürten Efsanevi Ejderha",
    emoji: "🐉",
    level: 3,
    levelName: "Usta Sanatçı",
    levelBadge: "🔴 Usta",
    tags: ["ejderha", "canavar", "ateş", "kanat", "efsane"],
    description: "Devasa yarasa kanatları, boynuzlu zırhlı kafası ve ağzından taşan alev dalgaları.",
    colors: [
      { name: "Kızıl Yakut", hex: "#b91c1c" },
      { name: "Altın Alev", hex: "#f59e0b" },
      { name: "Kömür Siyahı", hex: "#0f172a" }
    ],
    steps: [
      {
        title: "1. Adım: Sivri Boynuzlu Ejderha Kafası",
        instruction: "Geriye doğru uzanan iki keskin ejderha boynuzu ve sivri dişli açık ağzı çiz!",
        voice: "Efsanevi ejderhamızın geriye kıvrılan sivri boynuzları ve açık ağzıyla başlıyoruz.",
        svg: `<path d="M 220 220 L 150 250 L 230 270 L 180 310 L 260 290" fill="none" stroke="#0f172a" stroke-width="14"/><path d="M 220 220 L 280 150 L 245 220" fill="#f59e0b" stroke="#0f172a" stroke-width="10"/><path d="M 240 210 L 310 130 L 265 210" fill="#f59e0b" stroke="#0f172a" stroke-width="10"/>`
      },
      {
        title: "2. Adım: Yılan Gibi Kıvrılan Zırhlı Boyun ve Göğüs",
        instruction: "Kafadan aşağıya doğru zarifçe 'S' çizen göğsü ve karın zırh plakalarını çiz!",
        voice: "Kafanın altından kıvrılarak inen güçlü zırhlı boynu ve göğüs plakalarını çizelim.",
        svg: `<path d="M 250 270 C 270 330, 260 400, 310 460" stroke="#0f172a" stroke-width="14" fill="none"/><path d="M 220 290 C 240 350, 230 420, 280 480" stroke="#0f172a" stroke-width="14" fill="none"/><line x1="240" y1="330" x2="265" y2="310" stroke="#0f172a" stroke-width="8"/><line x1="245" y1="370" x2="270" y2="350" stroke="#0f172a" stroke-width="8"/><line x1="255" y1="410" x2="280" y2="390" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "3. Adım: Devasa Açılan Yarasa Kanadı",
        instruction: "Sırttan yukarı göğe doğru açılan kemikli büyük ejderha kanadını çiz!",
        voice: "Ejderhayı göklerde uçuran o devasa parmak kemikli yarasa kanadını çiziyoruz.",
        svg: `<path d="M 280 320 L 390 140 L 460 170 L 520 150 L 510 240 L 440 270 L 370 290 L 310 330 Z" fill="#b91c1c" opacity="0.4" stroke="#0f172a" stroke-width="14"/><line x1="390" y1="140" x2="440" y2="270" stroke="#0f172a" stroke-width="8"/><line x1="460" y1="170" x2="470" y2="255" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "4. Adım: Ağızdan Fışkıran Dev Alev Dalgası",
        instruction: "Açık ağzın önünden ileriye doğru püsküren dalgalı sıcak alevleri tamamla!",
        voice: "Son ustalık adımı! Ejderhanın ağzından fışkıran sıcacık efsanevi alev dalgalarını tamamlıyoruz.",
        svg: `<path d="M 160 280 C 120 260, 80 290, 40 260 C 70 310, 110 300, 150 310 Z" fill="#f59e0b" stroke="#dc2626" stroke-width="10"/>`
      }
    ],
    coloring: `<path d="M 280 320 L 390 140 L 460 170 L 520 150 L 510 240 L 440 270 L 370 290 L 310 330 Z" fill="#b91c1c" opacity="0.5"/>`
  },

  // =========================================================================
  // KATEGORİ 4: DERİN DENİZ CANLILARI
  // =========================================================================
  {
    id: "deniz_kopekbaligi_avci",
    categoryId: "deniz",
    name: "Büyük Beyaz Köpekbalığı (Okyanus Avcısı)",
    emoji: "🦈",
    level: 2,
    levelName: "Ressam",
    levelBadge: "🟡 Gelişmiş",
    tags: ["deniz", "köpekbalığı", "shark", "okyanus", "avcı"],
    description: "Sivri burun, dik jilet sırt yüzgeci, testere dişler ve 5 solungaç yarığıyla kudretli bir köpekbalığı.",
    colors: [
      { name: "Okyanus Grisi", hex: "#475569" },
      { name: "Kar Beyazı (Karın)", hex: "#f8fafc" },
      { name: "Göz Siyahı", hex: "#0f172a" }
    ],
    steps: [
      {
        title: "1. Adım: Sivri Torpido Gövde Hattı",
        instruction: "Suyu bir ok gibi yaran sivri burunlu ve arkaya incelen gövde silüetini çiz!",
        voice: "Okyanusların en hızlı avcısının kurşun gibi keskin gövde silüetiyle başlıyoruz.",
        svg: `<path d="M 120 280 C 120 190, 420 220, 480 300 C 420 370, 120 360, 120 280 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Jilet Sırt Yüzgeci ve Hilal Kuyruk",
        instruction: "Sırtına dik üçgen yüzgeç ve arkaya hilal şeklinde iki kanatlı kuyruk yap!",
        voice: "Sırtındaki o meşhur jilet gibi yüzgeci ve arkadaki güçlü hilal kuyruğunu çiziyoruz.",
        svg: `<path d="M 250 230 L 290 120 C 330 180, 330 230, 350 240 Z" fill="#475569" opacity="0.4" stroke="#0f172a" stroke-width="14"/><path d="M 135 280 L 60 170 C 90 260, 90 300, 60 390 L 135 280 Z" fill="#475569" opacity="0.4" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "3. Adım: Geniş Yan Kanat Yüzgeci",
        instruction: "Gövdenin altından aşağıya doğru açılı inen manevra yüzgecini çiz!",
        voice: "Suda hızla dönmesini sağlayan büyük yan kanat yüzgecini yapalım.",
        svg: `<path d="M 320 320 L 290 440 L 370 410 L 380 315 Z" fill="#475569" opacity="0.4" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "4. Adım: Testere Dişli Ağız ve 5 Solungaç Çizgisi",
        instruction: "Yarı açık avcı ağzı, sivri beyaz dişler ve yanına 5 solungaç yarığı çizip bitir!",
        voice: "Son dokunuş! Keskin küçük dişlerini ve su altı solungaç çizgilerini çiziyoruz.",
        svg: `<circle cx="430" cy="275" r="9" fill="#0f172a"/><path d="M 450 320 Q 400 350, 380 325" stroke="#0f172a" stroke-width="10" fill="none"/><line x1="335" y1="280" x2="330" y2="305" stroke="#0f172a" stroke-width="6"/><line x1="345" y1="280" x2="340" y2="305" stroke="#0f172a" stroke-width="6"/><line x1="355" y1="280" x2="350" y2="305" stroke="#0f172a" stroke-width="6"/><line x1="365" y1="280" x2="360" y2="305" stroke="#0f172a" stroke-width="6"/><line x1="375" y1="280" x2="370" y2="305" stroke="#0f172a" stroke-width="6"/>`
      }
    ],
    coloring: `<path d="M 120 280 C 120 190, 420 220, 480 300 C 420 370, 120 360, 120 280 Z" fill="#64748b" opacity="0.45"/>`
  },
  {
    id: "deniz_betta_master",
    categoryId: "deniz",
    name: "Tül Yüzgeçli Betta (Japon Dövüş Balığı)",
    emoji: "🐟",
    level: 3,
    levelName: "Usta Sanatçı",
    levelBadge: "🔴 Usta",
    tags: ["balık", "betta", "deniz", "tül", "japon balığı"],
    description: "Suda ipek bir kumaş gibi dalgalanan dev tül yüzgeçleri, ışıltılı pulları ve asil duruşu.",
    colors: [
      { name: "Kraliyet Mavisi", hex: "#1d4ed8" },
      { name: "Vişne Pembesi", hex: "#db2777" },
      { name: "Turkuaz Işıltı", hex: "#22d3ee" }
    ],
    steps: [
      {
        title: "1. Adım: Akıcı Balık Gövdesi ve Baş",
        instruction: "Sol tarafa bakan, burnu hafif yukarı kıvrık zarif balık gövdesini çiz!",
        voice: "Betta balığımızın akıcı ve zarif gövde çizgileriyle başlıyoruz.",
        svg: `<path d="M 160 300 C 160 240, 280 230, 350 290 C 280 340, 160 350, 160 300 Z" fill="#1d4ed8" opacity="0.4" stroke="#0f172a" stroke-width="12"/><circle cx="210" cy="275" r="10" fill="#0f172a"/>`
      },
      {
        title: "2. Adım: Göğe Yükselen İpek Sırt Yüzgeci",
        instruction: "Sırtından yukarı doğru rüzgarda dalgalanan ipek gibi devasa bir yüzgeç aç!",
        voice: "Balığın sırtından yukarı doğru ipek gibi dalgalanan dev yüzgecini çiziyoruz.",
        svg: `<path d="M 280 245 C 300 130, 420 110, 460 170 C 430 210, 380 220, 345 285 Z" fill="#db2777" opacity="0.4" stroke="#0f172a" stroke-width="12"/>`
      },
      {
        title: "3. Adım: Devasa Katmanlı Tül Kuyruk",
        instruction: "Gövdenin arkasından fışkıran alev gibi kat kat yayılan dev tül kuyruğu çiz!",
        voice: "Betta'nın en büyüleyici yeri! Suda bir kumaş gibi dans eden devasa tül kuyruğunu çizelim.",
        svg: `<path d="M 350 290 C 440 220, 520 220, 540 300 C 560 380, 470 420, 345 315 Z" fill="#1d4ed8" opacity="0.5" stroke="#0f172a" stroke-width="12"/><path d="M 370 290 Q 460 290, 520 300" stroke="#0f172a" stroke-width="6" fill="none"/><path d="M 360 280 Q 440 250, 490 250" stroke="#0f172a" stroke-width="6" fill="none"/>`
      },
      {
        title: "4. Adım: Sarkan Kurdele Yüzgeçler",
        instruction: "Balığın altından aşağıya süzülen iki ince zarif kurdele yüzgeci tamamla!",
        voice: "Son ustalık adımı! Balığın altından aşağıya zarifçe sarkan kurdele yüzgeçlerini tamamlıyoruz.",
        svg: `<path d="M 220 320 C 230 420, 200 480, 215 500 C 230 480, 250 410, 240 325 Z" fill="#db2777" stroke="#0f172a" stroke-width="10"/>`
      }
    ],
    coloring: `<path d="M 350 290 C 440 220, 520 220, 540 300 C 560 380, 470 420, 345 315 Z" fill="#1d4ed8" opacity="0.5"/>`
  },

  // =========================================================================
  // KATEGORİ 5: UZAY & BİLİM KURGU & MECHA
  // =========================================================================
  {
    id: "uzay_starfighter_x",
    categoryId: "uzay",
    name: "Yıldız Savaşçısı (Starfighter X)",
    emoji: "🛸",
    level: 3,
    levelName: "Usta Sanatçı",
    levelBadge: "🔴 Usta",
    tags: ["uzay", "star wars", "starfighter", "lazer", "gemi"],
    description: "Lazer topları, çift iyon itici motorları, zırhlı fütüristik kokpiti olan süpersonik uzay gemisi.",
    colors: [
      { name: "Uzay Grisi", hex: "#475569" },
      { name: "Plazma Mavisi (Motor)", hex: "#06b6d4" },
      { name: "Lazer Kırmızısı", hex: "#ef4444" }
    ],
    steps: [
      {
        title: "1. Adım: Sivri Elmas Gövde Silüeti",
        instruction: "Yukarı doğru sivrilen elmas biçimli keskin uzay mekiği gövdesini çiz!",
        voice: "Yıldız savaşçımızın süpersonik sivri elmas gövde çizgileriyle başlıyoruz.",
        svg: `<path d="M 300 70 L 350 240 L 350 440 L 250 440 L 250 240 Z" fill="none" stroke="#0f172a" stroke-width="14"/>`
      },
      {
        title: "2. Adım: Açılı Kokpit Camı ve Zırh Panelleri",
        instruction: "Gövdenin içine açılı fütüristik kokpit camını ve çelik panel çizgilerini çiz!",
        voice: "Pilotun uzayı izlediği yüksek teknolojili zırhlı kokpit camını yapalım.",
        svg: `<path d="M 300 140 L 330 230 L 300 280 L 270 230 Z" fill="#38bdf8" opacity="0.5" stroke="#0f172a" stroke-width="10"/><line x1="300" y1="140" x2="300" y2="280" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "3. Adım: İki Yana Açılan Lazerli Savaş Kanatları",
        instruction: "Sağa ve sola dev üçgen kanatlar aç ve uçlarına lazer namluları koy!",
        voice: "Şimdi iki yana açılan devasa savaş kanatlarını ve uçlarındaki lazer toplarını çiziyoruz.",
        svg: `<path d="M 250 280 L 100 400 L 100 450 L 250 420 Z" fill="#475569" opacity="0.4" stroke="#0f172a" stroke-width="14"/><path d="M 350 280 L 500 400 L 500 450 L 350 420 Z" fill="#475569" opacity="0.4" stroke="#0f172a" stroke-width="14"/><rect x="85" y="360" width="15" height="100" rx="4" fill="#ef4444" stroke="#0f172a" stroke-width="6"/><rect x="500" y="360" width="15" height="100" rx="4" fill="#ef4444" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "4. Adım: İkiz İyon Motorları ve Plazma Işıkları",
        instruction: "Geminin altına iki yuvarlak turbo motor ve arkadan fışkıran plazma ışıklarını tamamla!",
        voice: "Son ustalık adımı! Işık hızına çıkan iyon motorlarını ve arkadan taşan plazma alevlerini çiziyoruz.",
        svg: `<rect x="260" y="440" width="30" height="30" rx="6" stroke="#0f172a" stroke-width="10" fill="#64748b"/><rect x="310" y="440" width="30" height="30" rx="6" stroke="#0f172a" stroke-width="10" fill="#64748b"/><path d="M 265 470 L 275 540 L 285 470 Z" fill="#06b6d4"/><path d="M 315 470 L 325 540 L 335 470 Z" fill="#06b6d4"/>`
      }
    ],
    coloring: `<path d="M 300 70 L 350 240 L 500 400 L 500 450 L 100 450 L 100 400 L 250 240 Z" fill="#475569" opacity="0.35"/>`
  },
  {
    id: "uzay_mecha_warrior",
    categoryId: "uzay",
    name: "Zırhlı Mecha Savaş Robotu",
    emoji: "🤖",
    level: 3,
    levelName: "Usta Sanatçı",
    levelBadge: "🔴 Usta",
    tags: ["robot", "mecha", "zırh", "kılıç", "gelecek"],
    description: "Samuray robot kaskı, geniş omuz kalkanları, enerji reaktörü ve parlayan lazer kılıcı.",
    colors: [
      { name: "Çelik Grisi", hex: "#64748b" },
      { name: "Lazer Sarısı", hex: "#fde047" },
      { name: "Enerji Mavisi", hex: "#38bdf8" }
    ],
    steps: [
      {
        title: "1. Adım: Köşeli Çelik Kask ve Vizör",
        instruction: "Köşeli samuray robot kaskı ve ortasında tek parça parlayan lazer vizörü çiz!",
        voice: "Mecha robotumuzun köşeli çelik kaskı ve parlayan lazer vizörüyle başlıyoruz.",
        svg: `<path d="M 240 180 L 270 120 L 330 120 L 360 180 L 300 210 Z" fill="#64748b" opacity="0.4" stroke="#0f172a" stroke-width="12"/><rect x="260" y="150" width="80" height="18" rx="4" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "2. Adım: Geniş Omuz Zırhları ve Göğüs Reaktörü",
        instruction: "Kafanın iki yanına dev omuz zırhları ve göğse parıldayan reaktör çemberi çiz!",
        voice: "Robotun güçlü omuz kalkanlarını ve göğsündeki enerji reaktörünü çiziyoruz.",
        svg: `<path d="M 200 200 L 240 220 L 230 280 L 180 250 Z" fill="#64748b" stroke="#0f172a" stroke-width="10"/><path d="M 400 200 L 360 220 L 370 280 L 420 250 Z" fill="#64748b" stroke="#0f172a" stroke-width="10"/><rect x="250" y="220" width="100" height="90" rx="10" fill="#64748b" opacity="0.4" stroke="#0f172a" stroke-width="12"/><circle cx="300" cy="265" r="18" fill="#fde047" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "3. Adım: Lazer Enerji Kılıcı ve Zırhlı Kollar",
        instruction: "Sağ kola yukarı doğru uzanan parlayan enerji kılıcını ve sol kola kalkan ekle!",
        voice: "Robotun eline geleceğin parıldayan lazer kılıcını ve kalkanını çizelim.",
        svg: `<path d="M 180 250 L 160 350 L 190 350" stroke="#0f172a" stroke-width="12" fill="none"/><path d="M 420 250 L 440 330 L 420 340" stroke="#0f172a" stroke-width="12" fill="none"/><path d="M 435 340 L 480 180 L 470 175 L 425 335 Z" fill="#38bdf8" stroke="#0f172a" stroke-width="8"/>`
      },
      {
        title: "4. Adım: Hidrolik Sağlam Bacaklar ve Çelik Botlar",
        instruction: "Ağır gövdeyi taşıyan iki kalın hidrolik bacak ve zırhlı botları tamamla!",
        voice: "Son dokunuş! Yeri titreten güçlü hidrolik bacakları ve çelik botları tamamlıyoruz.",
        svg: `<rect x="235" y="320" width="50" height="150" rx="8" fill="#64748b" stroke="#0f172a" stroke-width="10"/><rect x="315" y="320" width="50" height="150" rx="8" fill="#64748b" stroke="#0f172a" stroke-width="10"/><path d="M 220 470 L 290 470 L 290 510 L 210 510 Z" fill="#0f172a"/><path d="M 310 470 L 380 470 L 390 510 L 310 510 Z" fill="#0f172a"/>`
      }
    ],
    coloring: `<rect x="250" y="220" width="100" height="90" rx="10" fill="#64748b" opacity="0.4"/>`
  },

  // =========================================================================
  // KATEGORİ 6: ANIME & KAHRAMANLAR
  // =========================================================================
  {
    id: "kahraman_ninja_golge",
    categoryId: "kahramanlar",
    name: "Gölge Savaşçısı Ninja",
    emoji: "🥷",
    level: 2,
    levelName: "Ressam",
    levelBadge: "🟡 Gelişmiş",
    tags: ["ninja", "kahraman", "kılıç", "anime", "gölge"],
    description: "Rüzgarda uçuşan kırmızı kafa bandı, sırtındaki katana kılıcı ve keskin gizemli gözleri.",
    colors: [
      { name: "Gece Siyahı", hex: "#0f172a" },
      { name: "Kızıl Kafa Bandı", hex: "#dc2626" },
      { name: "Gümüş Kılıç", hex: "#e2e8f0" }
    ],
    steps: [
      {
        title: "1. Adım: Yüz Maskesi ve Keskin Odaklanmış Gözler",
        instruction: "Yüzünü örten ninja maskesini ve ortadaki kararlı keskin gözleri çiz!",
        voice: "Gölge ninjamızın yüzünü örten maskesi ve hedefine kilitlenen keskin gözleriyle başlıyoruz.",
        svg: `<path d="M 230 180 C 230 120, 370 120, 370 180 L 360 280 C 340 310, 260 310, 240 280 Z" fill="#0f172a"/><rect x="245" y="195" width="110" height="35" rx="6" fill="#f8fafc"/><path d="M 260 215 Q 280 205, 290 218" stroke="#0f172a" stroke-width="8" fill="none"/><circle cx="280" cy="215" r="4" fill="#0f172a"/><path d="M 310 218 Q 320 205, 340 215" stroke="#0f172a" stroke-width="8" fill="none"/><circle cx="320" cy="215" r="4" fill="#0f172a"/>`
      },
      {
        title: "2. Adım: Rüzgarda Uçuşan Kırmızı Kafa Bandı",
        instruction: "Alnına kırmızı bir bandana ve arkaya doğru dalgalanan uzun şeritlerini çiz!",
        voice: "Ninjanın alnındaki bandanayı ve arkasında rüzgarla uçuşan kırmızı kumaşı çizelim.",
        svg: `<rect x="225" y="160" width="150" height="25" rx="4" fill="#dc2626" stroke="#0f172a" stroke-width="6"/><path d="M 370 170 C 420 150, 460 170, 500 140 C 470 180, 430 170, 375 185 Z" fill="#dc2626" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "3. Adım: Çapraz Katana Kılıcı ve Zırhlı Gövde",
        instruction: "Sırtından çapraz uzanan samuray kılıcının kabzasını ve gövdeyi çiz!",
        voice: "Ninjanın sırtında taşıdığı efsanevi katana kılıcını ve dövüş duruşunu çiziyoruz.",
        svg: `<path d="M 230 280 L 210 420 L 390 420 L 370 280 Z" fill="#0f172a"/><line x1="200" y1="180" x2="380" y2="400" stroke="#cbd5e1" stroke-width="12"/><rect x="180" y="150" width="40" height="15" rx="2" transform="rotate(-40 180 150)" fill="#facc15" stroke="#0f172a" stroke-width="6"/>`
      },
      {
        title: "4. Adım: Şuriken Fırlatma Yıldızları",
        instruction: "Ninjanın yanına havada dönen 4 köşeli metal şuriken yıldızlarını tamamla!",
        voice: "Son dokunuş! Ninjanın düşmanlarına fırlattığı metal şuriken yıldızlarını çiziyoruz.",
        svg: `<path d="M 140 240 L 150 260 L 170 265 L 150 275 L 140 295 L 130 275 L 110 265 L 130 260 Z" fill="#cbd5e1" stroke="#0f172a" stroke-width="6"/><circle cx="140" cy="267" r="6" fill="#0f172a"/>`
      }
    ],
    coloring: `<path d="M 230 280 L 210 420 L 390 420 L 370 280 Z" fill="#0f172a"/>`
  }
];
