# -*- coding: utf-8 -*-
"""
Sonic 15-Pack Part 1 (5 drawings):
1. cirak_sonic_espio (Ninja Bukalemun Espio)
2. cirak_sonic_vector (DJ Timsah Vector)
3. cirak_sonic_charmy (Neşeli Arı Charmy)
4. cirak_sonic_jet (Hızlı Kartal Jet)
5. cirak_sonic_tikal (Prenses Ekidne Tikal)
"""

SONIC_15_P1 = [
    # -------------------------------------------------------------------------
    # 1. NİNJA BUKALEMUN ESPİO (ESPİO THE CHAMELEON)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_espio",
        "categoryId": "sonic",
        "name": "Ninja Bukalemun Espio",
        "emoji": "🦎",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Görünmez olabilen ninja bukalemun Espio! Alnındaki sarı boynuz, kıvrık kuyruk ve elindeki ninja yıldızı!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, mor, sarı, yeşil ve gri boyalar",
        "welcomeText": "Sessiz ve hızlı! Selam Kıvanç! Kaçabilen ve görünmez olabilen ninja bukalemun Espio ile birlikte ninja yıldızı fırlatmaya hazır mısın?",
        "colors": ["#9333ea", "#facc15", "#22c55e", "#94a3b8"],
        "welcomeAudio": "audio/voices/cirak_sonic_espio/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Bukalemun Baş Çemberi ve Arka Baş Dikeni",
                "instruction": "Sayfanın üst ortasına Espio'nun yuvarlak başını ve arkaya uzanan sivri dikeni çiz.",
                "voice": "Kağıdımızın üst ortasına Ninja Bukalemun Espio'nun kafa hattını ve arkadaki sivri baş dikenini çizelim.",
                "svg": '<path d="M 248 182 C 248 128, 355 128, 355 182 C 350 222, 250 222, 248 182 Z" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 255 148 L 195 155 L 245 180" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Alnındaki Ünlü Sarı Boynuz",
                "instruction": "Alnının ön tepesine yukarı doğru kıvrılan büyük sarı bukalemun boynuzunu yap.",
                "voice": "İşte Espio'nun en ünlü yeri! Alnının ön üstüne yukarı kıvrılan sarı boynuzunu çizelim!",
                "svg": '<path d="M 322 142 C 335 112, 358 100, 368 90 C 362 115, 352 135, 342 152 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Yüz Maskesi / Şeftali Çene ve Ağız",
                "instruction": "Alt yüzüne üçgenimsi bukalemun burnunu ve ciddi ninja ağzını yap.",
                "voice": "Alt yüzüne bukalemun yanak yayını ve ninja duruşuna yakışan ciddi gülümsemesini çizelim.",
                "svg": '<path d="M 252 202 C 258 236, 350 236, 356 202" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 308 214 Q 328 218, 340 210" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "4. Adım: Sarı Gözlü İki Keskin Ninja Gözü",
                "instruction": "Yüzüne hafif çatık kaşlı iri gözler ve siyah gözbebeklerini yerleştir.",
                "voice": "Yüzüne keskin bakışlı altın rengi ninja gözlerini çizelim!",
                "svg": '<ellipse cx="288" cy="178" rx="14" ry="17" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="290" cy="178" r="7" fill="#0f172a"/><circle cx="287" cy="174" r="2.5" fill="#ffffff"/><ellipse cx="332" cy="178" rx="12" ry="16" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="334" cy="178" r="6.5" fill="#0f172a"/><circle cx="331" cy="174" r="2.2" fill="#ffffff"/>'
            },
            {
                "title": "5. Adım: Sırt Dikenleri Sırası",
                "instruction": "Başın arkasından sırtına doğru inen iki siyah sırt dikenini ekle.",
                "voice": "Başından sırtına inen küçük siyah sırt dikenlerini yapalım.",
                "svg": '<path d="M 248 228 L 222 242 L 248 254 L 220 268 L 248 278" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>'
            },
            {
                "title": "6. Adım: Çevik Ninja Gövdesi ve Şeftali Göbek",
                "instruction": "Altına ninja duruşundaki gövdeyi ve göğüs ovalini çiz.",
                "voice": "Başının altına çevik mor ninja gövdesini ve şeftali karın ovalini çizelim.",
                "svg": '<path d="M 262 232 C 248 278, 255 335, 295 345 C 330 338, 336 280, 326 232" fill="none" stroke="#0f172a" stroke-width="9"/><ellipse cx="300" cy="288" rx="20" ry="30" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "7. Adım: Yeşil Ninja Bileklikli Sol Kol",
                "instruction": "Sola doğru savunmada duran kolunu ve kalın yeşil ninja sargısını yap.",
                "voice": "Sol kolunu ninja savunma duruşunda çizip bileğine yeşil ninja bandajını yapalım!",
                "svg": '<path d="M 262 246 C 228 260, 210 285, 200 302" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><rect x="184" y="295" width="18" height="22" rx="4" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(35 193 306)"/><circle cx="176" cy="322" r="17" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "8. Adım: Yıldız Fırlatan Sağ Kol ve Ninja Shuriken!",
                "instruction": "Sağ tarafa ileri uzanan kolunu ve elindeki 4 köşeli keskin ninja yıldızını çiz.",
                "voice": "Sağ elinde tuttuğu dört köşeli ninja shuriken yıldızını ve kolunu çizelim!",
                "svg": '<path d="M 326 246 C 362 250, 392 242, 412 228" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><circle cx="426" cy="222" r="17" fill="none" stroke="#0f172a" stroke-width="7"/><polygon points="455,180 462,202 484,209 462,216 455,238 448,216 426,209 448,202" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "9. Adım: Sol ve Sağ Bacak ile Yeşil Diz Sargıları",
                "instruction": "Geniş ninja adımı atan iki bacağı ve yeşil diz sargılı çizmeleri yap.",
                "voice": "Geniş adım atan bacaklarını ve yeşil ninja sargılı ayakkabılarını çizelim!",
                "svg": '<path d="M 278 340 L 252 425 M 315 340 L 348 422" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><ellipse cx="248" cy="430" rx="16" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="350" cy="428" rx="16" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 222 436 C 218 468, 248 478, 285 470 C 292 460, 282 436, 255 436 Z" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 332 434 C 325 466, 355 476, 405 468 C 414 456, 398 432, 362 432 Z" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "10. Adım: Kıvrımlı Spiral Bukalemun Kuyruğu!",
                "instruction": "Sol tarafa doğru kıvrılıp helezon yapan ünlü bukalemun kuyruğunu çiz!",
                "voice": "İşte bukalemunun kıvrık helezon kuyruğu! Sol tarafa sarmal şeklinde kıvrılan kuyruğunu çizelim!",
                "svg": '<path d="M 255 322 C 190 335, 145 365, 138 405 C 132 438, 168 455, 192 435 C 208 420, 195 395, 175 405" fill="none" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>'
            },
            {
                "title": "11. Adım: Mor Ayakkabı Bantları ve Çizgiler",
                "instruction": "Ayakkabıların üzerine siyah koruma bantları çiz.",
                "voice": "Ninja ayakkabılarına siyah bantlarını ekleyelim.",
                "svg": '<line x1="235" y1="452" x2="278" y2="452" stroke="#0f172a" stroke-width="5"/><line x1="342" y1="450" x2="395" y2="450" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "12. Adım: Burun Ucu Boynuzu ve Şakak Çizgisi",
                "instruction": "Göz kenarına belirgin ninja çizgisi ekle.",
                "voice": "Gözünün yanına ninja yüz çizgisini yapalım.",
                "svg": '<path d="M 262 162 Q 288 152, 304 166" stroke="#0f172a" stroke-width="5" fill="none"/>'
            },
            {
                "title": "13. Adım: Sağ Bilek Sargısı",
                "instruction": "Sağ kolun ucuna yeşil sargı bandı ekle.",
                "voice": "Sağ el bileğine de yeşil ninja bandını ekleyelim.",
                "svg": '<rect x="400" y="218" width="16" height="22" rx="4" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-25 408 229)"/>'
            },
            {
                "title": "14. Adım: Shuriken İç Halkası",
                "instruction": "Ninja yıldızının tam ortasına minik daire deliğini koy.",
                "voice": "Ninja yıldızının tam ortasına yuvarlak deliğini çizelim.",
                "svg": '<circle cx="455" cy="209" r="5" fill="none" stroke="#0f172a" stroke-width="3.5"/>'
            },
            {
                "title": "15. Adım: Yaprak ve Ninja Dumanı",
                "instruction": "Altına ninja gibi sis dumanı kıvrımları yap.",
                "voice": "Ninja güçlerini gösteren hafif rüzgar dumanı kıvrımları ekleyelim.",
                "svg": '<path d="M 425 415 C 445 395, 475 405, 468 425" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "16. Adım: Shuriken Hız Çizgisi",
                "instruction": "Ninja yıldızının arkasından fırlatma izi çizgileri çek.",
                "voice": "Ninja yıldızının hız çizgilerini ekleyelim.",
                "svg": '<line x1="485" y1="190" x2="515" y2="175" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Zemin Çizgisi",
                "instruction": "Ayaklarının altına düz zemin çizgisi çek.",
                "voice": "Zemin çizgimizi çekerek ninjamızı yere bastıralım.",
                "svg": '<path d="M 160 482 L 440 482" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Mor & Yeşil Ninja Espio!)",
                "instruction": "Tebrikler Kıvanç! Espio'yu parlak mor, sarı boynuz ve zümrüt yeşili ninja sargılarıyla boya!",
                "voice": "Harikasın Kıvanç! Ninja bukalemun Espio göreve hazır! Şimdi onu parlak mor, sarı boynuzu ve yeşil ninja sargılarıyla renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="espPurple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#a855f7"/>
              <stop offset="50%" stop-color="#9333ea"/>
              <stop offset="100%" stop-color="#6b21a8"/>
            </linearGradient>
          </defs>
          <path d="M 160 482 L 440 482" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
          <path d="M 255 322 C 190 335, 145 365, 138 405 C 132 438, 168 455, 192 435 C 208 420, 195 395, 175 405" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 255 322 C 190 335, 145 365, 138 405 C 132 438, 168 455, 192 435 C 208 420, 195 395, 175 405" fill="none" stroke="url(#espPurple)" stroke-width="10" stroke-linecap="round"/>
          <path d="M 278 340 L 252 425 M 315 340 L 348 422" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 278 340 L 252 425 M 315 340 L 348 422" stroke="url(#espPurple)" stroke-width="9" stroke-linecap="round"/>
          <path d="M 222 436 C 218 468, 248 478, 285 470 C 292 460, 282 436, 255 436 Z" fill="#9333ea" stroke="#0f172a" stroke-width="8"/>
          <line x1="235" y1="452" x2="278" y2="452" stroke="#1e293b" stroke-width="6"/>
          <ellipse cx="248" cy="430" rx="16" ry="10" fill="#22c55e" stroke="#0f172a" stroke-width="6"/>
          <path d="M 332 434 C 325 466, 355 476, 405 468 C 414 456, 398 432, 362 432 Z" fill="#9333ea" stroke="#0f172a" stroke-width="8"/>
          <line x1="342" y1="450" x2="395" y2="450" stroke="#1e293b" stroke-width="6"/>
          <ellipse cx="350" cy="428" rx="16" ry="10" fill="#22c55e" stroke="#0f172a" stroke-width="6"/>
          <path d="M 248 228 L 222 242 L 248 254 L 220 268 L 248 278 Z" fill="#1e293b" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 262 232 C 248 278, 255 335, 295 345 C 330 338, 336 280, 326 232 Z" fill="url(#espPurple)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="300" cy="288" rx="20" ry="30" fill="#fed7aa" stroke="#0f172a" stroke-width="5"/>
          <path d="M 262 246 C 228 260, 210 285, 200 302" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 262 246 C 228 260, 210 285, 200 302" fill="none" stroke="url(#espPurple)" stroke-width="9" stroke-linecap="round"/>
          <rect x="184" y="295" width="18" height="22" rx="4" fill="#22c55e" stroke="#0f172a" stroke-width="6" transform="rotate(35 193 306)"/>
          <circle cx="176" cy="322" r="17" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 326 246 C 362 250, 392 242, 412 228" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 326 246 C 362 250, 392 242, 412 228" fill="none" stroke="url(#espPurple)" stroke-width="9" stroke-linecap="round"/>
          <rect x="400" y="218" width="16" height="22" rx="4" fill="#22c55e" stroke="#0f172a" stroke-width="6" transform="rotate(-25 408 229)"/>
          <circle cx="426" cy="222" r="17" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <polygon points="455,180 462,202 484,209 462,216 455,238 448,216 426,209 448,202" fill="#94a3b8" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <circle cx="455" cy="209" r="5" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
          <path d="M 255 148 L 195 155 L 245 180 Z" fill="url(#espPurple)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 248 182 C 248 128, 355 128, 355 182 C 350 222, 250 222, 248 182 Z" fill="url(#espPurple)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 252 202 C 258 236, 350 236, 356 202 C 332 192, 275 192, 252 202 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="288" cy="178" rx="14" ry="17" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="290" cy="178" rx="9" ry="11" fill="#facc15"/>
          <circle cx="290" cy="178" r="5" fill="#0f172a"/>
          <circle cx="287" cy="174" r="2.5" fill="#ffffff"/>
          <ellipse cx="332" cy="178" rx="12" ry="16" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="334" cy="178" rx="8" ry="10" fill="#facc15"/>
          <circle cx="334" cy="178" r="4.5" fill="#0f172a"/>
          <circle cx="331" cy="174" r="2.2" fill="#ffffff"/>
          <path d="M 322 142 C 335 112, 358 100, 368 90 C 362 115, 352 135, 342 152 Z" fill="#facc15" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 308 214 Q 328 218, 340 210" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round" fill="none"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 2. DJ TİMSAH VECTOR (VECTOR THE CROCODİLE)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_vector",
        "categoryId": "sonic",
        "name": "DJ Timsah Vector",
        "emoji": "🐊",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Müzik tutkunu güçlü timsah Vector! Turuncu dev kulaklıkları, altın kolyesi ve gülümseyen timsah dişleri!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, yeşil, turuncu, sarı ve beyaz boyalar",
        "welcomeText": "Haydi müzik başlasın! Selam Kıvanç! Dev turuncu kulaklıkları ve altın kolyesiyle çok havalı DJ Timsah Vector geldi!",
        "colors": ["#22c55e", "#f97316", "#facc15", "#0f172a"],
        "welcomeAudio": "audio/voices/cirak_sonic_vector/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Uzun Gülümseyen Timsah Ağzı ve Kafası",
                "instruction": "Sayfanın üst kısmına sağa uzanan uzun sevimli timsah burnu ve başını çiz.",
                "voice": "Kağıdımızın üst ortasına DJ Timsah Vector'ün uzun ve neşeli timsah başını çizelim.",
                "svg": '<path d="M 225 180 C 235 125, 325 130, 355 155 C 395 162, 412 188, 385 215 L 250 222 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Büyük Timsah Gülümsemesi ve Tatlı Dişler",
                "instruction": "Uzun burnunun altından gülümseyen ağız çizgisi ve üçgen timsah dişlerini yap.",
                "voice": "Ağzının altına gülümseyen çizgiyi ve iki tane şirin üçgen timsah dişini ekleyelim!",
                "svg": '<path d="M 275 198 C 315 210, 365 202, 392 188" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M 335 202 L 344 218 L 352 200 M 365 198 L 372 212 L 380 195" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Kafasındaki Büyük DJ Kulaklıkları!",
                "instruction": "Başının tepesine kavisli kulaklık bandını ve kulağının üstüne büyük yuvarlak DJ kulaklığını çiz.",
                "voice": "İşte Vector'ün en sevdiği eşya! Başına büyük yuvarlak turuncu DJ kulaklıklarını takalım!",
                "svg": '<path d="M 255 155 Q 282 110, 318 140" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/><ellipse cx="255" cy="175" rx="22" ry="26" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "4. Adım: Parlak Altın Gözler",
                "instruction": "Başının üstüne çıkan büyük timsah gözlerini yerleştir.",
                "voice": "Gülümseyen başının üstüne iri altın rengi timsah gözlerini koyalım.",
                "svg": '<ellipse cx="308" cy="148" rx="14" ry="18" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="310" cy="149" r="7" fill="#0f172a"/><circle cx="307" cy="145" r="2.5" fill="#ffffff"/><ellipse cx="342" cy="152" rx="12" ry="16" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="344" cy="153" r="6" fill="#0f172a"/><circle cx="341" cy="149" r="2" fill="#ffffff"/>'
            },
            {
                "title": "5. Adım: Tombul Timsah Gövdesi ve Şeritli Göbek",
                "instruction": "Altına kalın timsah gövdesini ve yatay çizgili sarı-krem göbek plakasını yap.",
                "voice": "Altına güçlü yeşil timsah gövdesini ve yatay şeritli karnını çizelim!",
                "svg": '<path d="M 242 220 C 218 275, 222 352, 265 368 C 325 372, 345 295, 325 220" fill="none" stroke="#0f172a" stroke-width="9"/><ellipse cx="290" cy="298" rx="32" ry="52" fill="none" stroke="#0f172a" stroke-width="6"/><line x1="262" y1="278" x2="318" y2="278" stroke="#0f172a" stroke-width="5"/><line x1="260" y1="305" x2="320" y2="305" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "6. Adım: Büyük Altın Zincir Kolye!",
                "instruction": "Boynunun etrafına kocaman parlak bir rapçi altın kolye halkası çiz.",
                "voice": "Boynuna DJ Vector'ün ünlü kalın altın zincir kolyesini takalım!",
                "svg": '<path d="M 248 228 Q 290 258, 325 228" fill="none" stroke="#0f172a" stroke-width="12" stroke-linecap="round"/>'
            },
            {
                "title": "7. Adım: Sırtındaki Kırmızı Timsah Dikenleri",
                "instruction": "Başından ve sırtından arkaya doğru dizilmiş üçgen kırmızı sırt dikenlerini ekle.",
                "voice": "Sırtının arkasına kırmızı timsah sırt çıkıntılarını çizelim!",
                "svg": '<path d="M 232 162 L 195 170 L 228 190 M 235 235 L 192 248 L 228 265 L 192 288 L 225 305" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "8. Adım: Ritim Tutan Sol Kol ve Siyah Kolluk",
                "instruction": "Sola doğru müzik çalarken açtığı kaslı kolunu, siyah bilekliğini ve beyaz eldivenini yap.",
                "voice": "Sol kolunu müzik ritmi tutarken açalım ve siyah bilekliğini ekleyelim!",
                "svg": '<path d="M 238 248 C 202 260, 178 282, 168 302" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><circle cx="156" cy="316" r="19" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "9. Adım: Havalı İşaret Yapan Sağ Kol",
                "instruction": "Sağ tarafa doğru ileri uzanan mutlu kolunu ve büyük beyaz eldivenini ekle.",
                "voice": "Sağ kolunu da 'Süper müzik!' işareti yaparken uzatalım!",
                "svg": '<path d="M 326 248 C 362 252, 392 245, 412 232" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><circle cx="426" cy="226" r="19" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "10. Adım: Kalın Timsah Kuyruğu",
                "instruction": "Arka taraftan aşağı kıvrılan büyük güçlü timsah kuyruğunu çiz.",
                "voice": "Arka taraftan uzanan kalın ve güçlü timsah kuyruğunu yapalım.",
                "svg": '<path d="M 235 335 C 175 352, 125 335, 95 305 C 122 365, 175 395, 248 368" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "11. Adım: Bacaklar ve Dev Ayakkabılar",
                "instruction": "Gövdesinin altına sağlam bacaklarını ve turuncu-siyah büyük spor ayakkabılarını çiz.",
                "voice": "Sağlam yeşil bacaklarını ve büyük siyah-turuncu DJ ayakkabılarını çizelim!",
                "svg": '<path d="M 262 368 L 248 430 M 310 368 L 325 430" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><path d="M 222 436 C 218 470, 248 480, 285 472 C 292 462, 282 436, 255 436 Z" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 312 436 C 308 470, 338 480, 392 470 C 400 460, 388 436, 350 436 Z" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "12. Adım: Siyah Kol-Bacak Bilek Bantları",
                "instruction": "Bileklere havalı siyah bilek bantları koy.",
                "voice": "Bileklerine havalı siyah rockçı bilekliklerini takalım.",
                "svg": '<ellipse cx="250" cy="432" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="326" cy="432" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "13. Adım: Etrafta Uçan Müzik Notaları!",
                "instruction": "Vector'ün etrafına neşeyle dans eden müzik notaları çiz!",
                "voice": "Vector DJ olduğu için etrafına dans eden şık müzik notaları konduralım!",
                "svg": '<path d="M 455 170 L 455 128 L 485 122 L 485 162" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/><circle cx="448" cy="172" r="8" fill="#0f172a"/><circle cx="478" cy="164" r="8" fill="#0f172a"/>'
            },
            {
                "title": "14. Adım: İkinci Müzik Notası",
                "instruction": "Sol tarafa da küçük bir müzik notası ekle.",
                "voice": "Sol üst köşeye de küçük bir müzik notası yapalım.",
                "svg": '<line x1="155" y1="155" x2="155" y2="122" stroke="#0f172a" stroke-width="5"/><circle cx="148" cy="155" r="7" fill="#0f172a"/>'
            },
            {
                "title": "15. Adım: Burun Deliği",
                "instruction": "Burnunun ucuna küçük timsah burun deliğini ekle.",
                "voice": "Burnunun ucuna minik bir burun deliği konduralım.",
                "svg": '<circle cx="385" cy="168" r="4" fill="#0f172a"/>'
            },
            {
                "title": "16. Adım: Kulaklık İç Detayı",
                "instruction": "Turuncu kulaklığın ortasına küçük beyaz ses daireciği koy.",
                "voice": "Kulaklığın içine yuvarlak ses detayını çizelim.",
                "svg": '<circle cx="255" cy="175" r="10" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "17. Adım: Dans Pisti Zemin Çizgisi",
                "instruction": "Ayaklarının altına düz zemin çizgisi çek.",
                "voice": "Dans pisti zemin çizgisini de çekelim.",
                "svg": '<path d="M 160 482 L 440 482" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Orman Yeşili & Turuncu Kulaklık!)",
                "instruction": "Tebrikler Kıvanç! DJ Vector'ü parlak yeşil, turuncu kulaklık ve altın zinciriyle boya!",
                "voice": "Harika oldu Kıvanç! DJ Timsah Vector partiyi başlattı! Şimdi onu parlak yeşil, turuncu kulaklık ve altın zincirle boya!",
                "svg": '''
          <defs>
            <linearGradient id="vecGreen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#4ade80"/>
              <stop offset="50%" stop-color="#22c55e"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
          </defs>
          <path d="M 160 482 L 440 482" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
          <path d="M 455 170 L 455 128 L 485 122 L 485 162" fill="none" stroke="#facc15" stroke-width="6"/>
          <circle cx="448" cy="172" r="8" fill="#facc15"/>
          <circle cx="478" cy="164" r="8" fill="#facc15"/>
          <path d="M 235 335 C 175 352, 125 335, 95 305 C 122 365, 175 395, 248 368 Z" fill="url(#vecGreen)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 232 162 L 195 170 L 228 190 M 235 235 L 192 248 L 228 265 L 192 288 L 225 305 Z" fill="#ef4444" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 262 368 L 248 430 M 310 368 L 325 430" stroke="#0f172a" stroke-width="20" stroke-linecap="round"/>
          <path d="M 262 368 L 248 430 M 310 368 L 325 430" stroke="url(#vecGreen)" stroke-width="10" stroke-linecap="round"/>
          <path d="M 222 436 C 218 470, 248 480, 285 472 C 292 462, 282 436, 255 436 Z" fill="#1e293b" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="250" cy="432" rx="16" ry="9" fill="#1e293b" stroke="#0f172a" stroke-width="5"/>
          <path d="M 312 436 C 308 470, 338 480, 392 470 C 400 460, 388 436, 350 436 Z" fill="#1e293b" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="326" cy="432" rx="16" ry="9" fill="#1e293b" stroke="#0f172a" stroke-width="5"/>
          <path d="M 242 220 C 218 275, 222 352, 265 368 C 325 372, 345 295, 325 220 Z" fill="url(#vecGreen)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="290" cy="298" rx="32" ry="52" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <line x1="262" y1="278" x2="318" y2="278" stroke="#ca8a04" stroke-width="4"/>
          <line x1="260" y1="305" x2="320" y2="305" stroke="#ca8a04" stroke-width="4"/>
          <path d="M 248 228 Q 290 258, 325 228" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/>
          <path d="M 248 228 Q 290 258, 325 228" fill="none" stroke="#facc15" stroke-width="9" stroke-linecap="round"/>
          <path d="M 238 248 C 202 260, 178 282, 168 302" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 238 248 C 202 260, 178 282, 168 302" fill="none" stroke="url(#vecGreen)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="156" cy="316" r="19" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 326 248 C 362 252, 392 245, 412 232" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 326 248 C 362 252, 392 245, 412 232" fill="none" stroke="url(#vecGreen)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="426" cy="226" r="19" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 225 180 C 235 125, 325 130, 355 155 C 395 162, 412 188, 385 215 L 250 222 Z" fill="url(#vecGreen)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="308" cy="148" rx="14" ry="18" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <circle cx="310" cy="149" r="7" fill="#0f172a"/>
          <circle cx="307" cy="145" r="2.5" fill="#ffffff"/>
          <ellipse cx="342" cy="152" rx="12" ry="16" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <circle cx="344" cy="153" r="6" fill="#0f172a"/>
          <circle cx="341" cy="149" r="2" fill="#ffffff"/>
          <path d="M 335 202 L 344 218 L 352 200 M 365 198 L 372 212 L 380 195" fill="#ffffff" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 275 198 C 315 210, 365 202, 392 188" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
          <circle cx="385" cy="168" r="4" fill="#0f172a"/>
          <path d="M 255 155 Q 282 110, 318 140" stroke="#0f172a" stroke-width="11" stroke-linecap="round" fill="none"/>
          <path d="M 255 155 Q 282 110, 318 140" stroke="#334155" stroke-width="5" stroke-linecap="round" fill="none"/>
          <ellipse cx="255" cy="175" rx="22" ry="26" fill="#f97316" stroke="#0f172a" stroke-width="8"/>
          <circle cx="255" cy="175" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 3. NEŞELİ ARI CHARMY (CHARMY BEE)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_charmy",
        "categoryId": "sonic",
        "name": "Neşeli Arı Charmy",
        "emoji": "🐝",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Vector ve Espio'nun hiperaktif küçük arkadaşı arı Charmy! Pilot kaskı, sevimli arı çizgileri ve vızıldayan kanatları!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, sarı, siyah, turuncu, mavi ve beyaz boyalar",
        "welcomeText": "Vızzz! Selam Kıvanç! Pilot kasklı ve kanatlı çok neşeli küçük arı Charmy geldi! Vızıldayarak birlikte çizelim!",
        "colors": ["#facc15", "#1e293b", "#f97316", "#38bdf8"],
        "welcomeAudio": "audio/voices/cirak_sonic_charmy/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Sevimli Yuvarlak Kafa ve Pilot Kaskı",
                "instruction": "Sayfanın üst ortasına yuvarlak arı kafasını ve üstüne pilot başlığını çiz.",
                "voice": "Kağıdımızın üst ortasına sevimli Arı Charmy'nin kafasını ve başındaki turuncu pilot kaskını çizelim!",
                "svg": '<circle cx="300" cy="195" r="56" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 244 185 C 244 125, 356 125, 356 185" fill="none" stroke="#0f172a" stroke-width="9"/>'
            },
            {
                "title": "2. Adım: Pilot Gözlüğü ve Arı Antenleri",
                "instruction": "Kaskın önüne büyük pilot gözlüğü camlarını ve tepesine iki zıplayan arı antenini yap.",
                "voice": "Kaskının tepesine büyük uçuş gözlüğünü ve iki tatlı arı antenini çizelim!",
                "svg": '<rect x="260" y="142" width="36" height="24" rx="8" fill="none" stroke="#0f172a" stroke-width="6"/><rect x="304" y="142" width="36" height="24" rx="8" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 282 135 Q 272 105, 260 98 M 318 135 Q 328 105, 340 98" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/><circle cx="258" cy="96" r="7" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="342" cy="96" r="7" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "3. Adım: Büyük Neşeli Arı Gözleri ve Gülümseme",
                "instruction": "Yüzün ortasına bitişik göz kemerini ve çok mutlu gülen ağzını çiz.",
                "voice": "Yüzüne kocaman sevimli arı gözlerini ve neşe dolu gülümsemesini yapalım.",
                "svg": '<path d="M 258 202 C 258 170, 294 170, 300 188 C 306 170, 342 170, 342 202" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="282" cy="192" r="8" fill="#0f172a"/><circle cx="280" cy="189" r="3" fill="#ffffff"/><circle cx="318" cy="192" r="8" fill="#0f172a"/><circle cx="316" cy="189" r="3" fill="#ffffff"/><ellipse cx="300" cy="212" rx="7" ry="5" fill="#0f172a"/><path d="M 280 225 Q 300 242, 320 225" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "4. Adım: Turuncu Pilot Yeleği ve Şeritli Arı Gövdesi",
                "instruction": "Başın altına küçük sevimli gövdesini ve arkasından çıkan çizgili arı karnını çiz.",
                "voice": "Kafanın altına sarı-siyah çizgili arı gövdesini ve turuncu yeleğini çizelim!",
                "svg": '<path d="M 268 250 L 258 340 C 280 352, 320 352, 342 340 L 332 250" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="262" y1="305" x2="338" y2="305" stroke="#0f172a" stroke-width="7"/><line x1="260" y1="325" x2="340" y2="325" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "5. Adım: Sevimli Çizgili Arı Kuyruğu ve İğnesi",
                "instruction": "Gövdenin sol arkasına tombul arı poposunu ve minik sivri iğneyi yap.",
                "voice": "Arkasına tombul arı kuyruğunu ve ucundaki minik arı iğnesini çizelim.",
                "svg": '<path d="M 260 315 C 215 318, 200 345, 222 365 C 242 375, 268 358, 275 345" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 212 355 L 195 368 L 222 365" fill="#0f172a"/>'
            },
            {
                "title": "6. Adım: Vızıldayan Şeffaf Arı Kanatları (Sol & Sağ)",
                "instruction": "Sırtından iki yana açılan büyük oval şeffaf kanatlarını ekle.",
                "voice": "Sırtından iki yana vızıldayarak açılan iki parlak arı kanadını çizelim!",
                "svg": '<ellipse cx="222" cy="252" rx="44" ry="20" fill="none" stroke="#0f172a" stroke-width="7" transform="rotate(-22 222 252)"/><ellipse cx="378" cy="252" rx="44" ry="20" fill="none" stroke="#0f172a" stroke-width="7" transform="rotate(22 378 252)"/>'
            },
            {
                "title": "7. Adım: Uçan Neşeli Kollar ve Beyaz Eldivenler",
                "instruction": "İki yana neşeyle açılmış kollarını ve beyaz eldivenlerini çiz.",
                "voice": "İki yana heyecanla açtığı kollarını ve beyaz eldivenlerini çizelim.",
                "svg": '<path d="M 265 268 C 232 278, 212 292, 198 308" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><circle cx="186" cy="318" r="16" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 335 268 C 368 278, 388 292, 402 308" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><circle cx="414" cy="318" r="16" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "8. Adım: Havada Süzülen Bacaklar ve Küçük Ayakkabılar",
                "instruction": "Altına havada uçan kısa bacaklarını ve turuncu-beyaz ayakkabılarını çiz.",
                "voice": "Havada uçarken sarkan minik bacaklarını ve turuncu ayakkabılarını yapalım!",
                "svg": '<path d="M 282 348 L 272 405 M 318 348 L 328 405" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/><ellipse cx="270" cy="410" rx="14" ry="8" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="330" cy="410" rx="14" ry="8" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 248 416 C 245 442, 268 450, 295 442 C 300 432, 292 415, 270 415 Z" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 325 415 C 308 415, 302 432, 308 442 C 335 450, 358 442, 352 416 Z" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "9. Adım: Yelek Fermuar Çizgisi",
                "instruction": "Yeleğinin ortasına fermuar çizgisi çek.",
                "voice": "Turuncu pilot yeleğinin ortasına fermuar çizgisi yapalım.",
                "svg": '<line x1="300" y1="252" x2="300" y2="302" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "10. Adım: Vızıldama Dalga Çizgileri",
                "instruction": "Kanatların etrafına vızıldama yay çizgileri yap.",
                "voice": "Kanatlarının çok hızlı çırpıldığını gösteren vızıltı çizgilerini ekleyelim!",
                "svg": '<path d="M 175 215 Q 162 232, 175 250 M 425 215 Q 438 232, 425 250" stroke="#0f172a" stroke-width="5" fill="none" stroke-linecap="round"/>'
            },
            {
                "title": "11. Adım: Küçük Çiçek ve Bal Damlası",
                "instruction": "Yanına arının sevdiği tatlı bir çiçek çiz.",
                "voice": "Yanına Charmy'nin konmayı çok sevdiği şirin bir çiçek çizelim.",
                "svg": '<circle cx="145" cy="415" r="8" fill="none" stroke="#0f172a" stroke-width="5"/><line x1="145" y1="423" x2="145" y2="455" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "12. Adım: Pilot Gözlük Yansıması",
                "instruction": "Pilot gözlüğünün camlarına parıltı çizgileri çek.",
                "voice": "Gözlük camlarının üzerine parıltı çizgisi çekelim.",
                "svg": '<line x1="268" y1="148" x2="278" y2="160" stroke="#0f172a" stroke-width="4"/><line x1="312" y1="148" x2="322" y2="160" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "13. Adım: Kask Kayış Bandı",
                "instruction": "Kulak yanından çeneye kask kayışı detayı koy.",
                "voice": "Kaskın yanından çene kayışını ekleyelim.",
                "svg": '<ellipse cx="246" cy="195" rx="6" ry="12" fill="none" stroke="#0f172a" stroke-width="5"/><ellipse cx="354" cy="195" rx="6" ry="12" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "14. Adım: Kanat Damarları",
                "instruction": "Şeffaf kanatların içine ince çizgi ekle.",
                "voice": "Arı kanatlarının ortasına ince damar çizgisi çizelim.",
                "svg": '<line x1="205" y1="248" x2="245" y2="262" stroke="#0f172a" stroke-width="4"/><line x1="395" y1="248" x2="355" y2="262" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "15. Adım: Uçuş İzi Kesik Çizgileri",
                "instruction": "Arkasından süzülen halkalı uçuş çizgisi yap.",
                "voice": "Havada nasıl zıplayarak uçtuğunu gösteren halkalı uçuş çizgisi çizelim!",
                "svg": '<path d="M 415 395 C 445 385, 455 355, 435 355 C 420 355, 432 385, 465 375" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-dasharray="8 6"/>'
            },
            {
                "title": "16. Adım: Kask Kulak Yıldızı",
                "instruction": "Altına çiçeklerin durduğu küçük yeşil çimen çiz.",
                "voice": "Çiçeğin altına yeşil çim zemini ekleyelim.",
                "svg": '<path d="M 110 462 Q 300 452, 460 462" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Mutlu Yıldızlar",
                "instruction": "Üste bir parlama yıldızı kondur.",
                "voice": "Yanına minik bir yıldız ışığı ekleyelim.",
                "svg": '<path d="M 415 140 L 415 156 M 407 148 L 423 148" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Sarı-Siyah Arı & Turuncu Kask!)",
                "instruction": "Tebrikler Kıvanç! Arı Charmy'yi bal sarısı, siyah çizgiler ve turuncu kaskıyla boya!",
                "voice": "Çok şirin oldu Kıvanç! Neşeli arı Charmy vızıldıyor! Şimdi onu bal sarısı, turuncu pilot kaskı ve gök mavisi gözlükleriyle renklendir!",
                "svg": '''
          <path d="M 110 462 Q 300 452, 460 462" stroke="#86efac" stroke-width="8" stroke-linecap="round"/>
          <line x1="145" y1="423" x2="145" y2="455" stroke="#22c55e" stroke-width="5"/>
          <circle cx="145" cy="415" r="8" fill="#f472b6" stroke="#0f172a" stroke-width="4"/>
          <path d="M 415 395 C 445 385, 455 355, 435 355 C 420 355, 432 385, 465 375" fill="none" stroke="#facc15" stroke-width="4.5" stroke-dasharray="8 6"/>
          <path d="M 260 315 C 215 318, 200 345, 222 365 C 242 375, 268 358, 275 345 Z" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
          <path d="M 212 355 L 195 368 L 222 365 Z" fill="#0f172a"/>
          <ellipse cx="222" cy="252" rx="44" ry="20" fill="#e0f2fe" opacity="0.8" stroke="#0f172a" stroke-width="7" transform="rotate(-22 222 252)"/>
          <ellipse cx="378" cy="252" rx="44" ry="20" fill="#e0f2fe" opacity="0.8" stroke="#0f172a" stroke-width="7" transform="rotate(22 378 252)"/>
          <path d="M 282 348 L 272 405 M 318 348 L 328 405" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/>
          <path d="M 282 348 L 272 405 M 318 348 L 328 405" stroke="#1e293b" stroke-width="8" stroke-linecap="round"/>
          <path d="M 248 416 C 245 442, 268 450, 295 442 C 300 432, 292 415, 270 415 Z" fill="#f97316" stroke="#0f172a" stroke-width="7"/>
          <ellipse cx="270" cy="410" rx="14" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 325 415 C 308 415, 302 432, 308 442 C 335 450, 358 442, 352 416 Z" fill="#f97316" stroke="#0f172a" stroke-width="7"/>
          <ellipse cx="330" cy="410" rx="14" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 268 250 L 258 340 C 280 352, 320 352, 342 340 L 332 250 Z" fill="#facc15" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 268 250 L 265 305 L 335 305 L 332 250 Z" fill="#f97316" stroke="#0f172a" stroke-width="7"/>
          <line x1="262" y1="305" x2="338" y2="305" stroke="#1e293b" stroke-width="10"/>
          <line x1="260" y1="325" x2="340" y2="325" stroke="#1e293b" stroke-width="10"/>
          <path d="M 265 268 C 232 278, 212 292, 198 308" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/>
          <path d="M 265 268 C 232 278, 212 292, 198 308" fill="none" stroke="#1e293b" stroke-width="8" stroke-linecap="round"/>
          <circle cx="186" cy="318" r="16" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 335 268 C 368 278, 388 292, 402 308" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/>
          <path d="M 335 268 C 368 278, 388 292, 402 308" fill="none" stroke="#1e293b" stroke-width="8" stroke-linecap="round"/>
          <circle cx="414" cy="318" r="16" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="300" cy="195" r="56" fill="#facc15" stroke="#0f172a" stroke-width="9"/>
          <path d="M 252 212 C 254 242, 346 242, 348 212 C 330 200, 270 200, 252 212 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="5"/>
          <path d="M 258 202 C 258 170, 294 170, 300 188 C 306 170, 342 170, 342 202 Z" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="282" cy="192" r="8" fill="#0f172a"/>
          <circle cx="280" cy="189" r="3" fill="#ffffff"/>
          <circle cx="318" cy="192" r="8" fill="#0f172a"/>
          <circle cx="316" cy="189" r="3" fill="#ffffff"/>
          <ellipse cx="300" cy="212" rx="7" ry="5" fill="#0f172a"/>
          <path d="M 280 225 Q 300 242, 320 225" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M 244 185 C 244 125, 356 125, 356 185 Z" fill="#f97316" stroke="#0f172a" stroke-width="9"/>
          <rect x="260" y="142" width="36" height="24" rx="8" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>
          <rect x="304" y="142" width="36" height="24" rx="8" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>
          <path d="M 282 135 Q 272 105, 260 98 M 318 135 Q 328 105, 340 98" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
          <circle cx="258" cy="96" r="7" fill="#1e293b" stroke="#0f172a" stroke-width="4"/>
          <circle cx="342" cy="96" r="7" fill="#1e293b" stroke="#0f172a" stroke-width="4"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 4. HIZLI KARTAL JET (JET THE HAWK)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_jet",
        "categoryId": "sonic",
        "name": "Hızlı Kartal Jet",
        "emoji": "🦅",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Rüzgarın efendisi havalı yeşil şahin/kartal Jet! Alnındaki kırmızı gözlüğü, sivri tüyleri ve kartal gagası!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, zümrüt yeşili, kırmızı, sarı ve lacivert boyalar",
        "welcomeText": "Rüzgar kadar hızlı! Merhaba Kıvanç! Uçan kaykayların kralı havalı yeşil kartal Jet geliyor! Hadi kanat tüylerini çizelim!",
        "colors": ["#16a34a", "#4ade80", "#ef4444", "#facc15"],
        "welcomeAudio": "audio/voices/cirak_sonic_jet/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Kafa Yuvarlağı ve Arkaya Uzanmış Kartal Tüyleri",
                "instruction": "Sayfanın üst ortasına yuvarlak başını ve arkaya savrulan sivri yeşil kartal tüylerini çiz.",
                "voice": "Kağıdımızın üst ortasına Kartal Jet'in başını ve rüzgarla arkaya savrulan kartal tüylerini çizelim!",
                "svg": '<path d="M 255 152 C 295 125, 355 140, 352 195 C 345 232, 268 238, 240 222 L 170 218 L 205 182 L 155 170 L 210 152 L 175 125 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Tepedeki Kırmızı Yarışçı Gözlüğü",
                "instruction": "Başının tepesine havalı kırmızı çerçeveli pilot/yarışçı gözlüğünü koy.",
                "voice": "Alnının üstüne kırmızı yarışçı gözlüğünü çizelim!",
                "svg": '<rect x="262" y="138" width="38" height="22" rx="6" fill="none" stroke="#0f172a" stroke-width="6"/><rect x="304" y="138" width="34" height="22" rx="6" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "3. Adım: Kavisli Sarı Kartal Gagası!",
                "instruction": "Yüzün önüne kartallara özgü keskin sarı gagayı ve havalı gülümsemeyi çiz.",
                "voice": "Yüzünün ön tarafına sivri ve gülümseyen sarı kartal gagasını çizelim!",
                "svg": '<path d="M 285 205 C 315 190, 362 192, 378 210 C 355 232, 315 236, 282 222 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 295 215 Q 332 222, 360 212" stroke="#0f172a" stroke-width="5" fill="none"/>'
            },
            {
                "title": "4. Adım: Mavi Keskin Kartal Gözleri",
                "instruction": "Gözlüğün altına keskin bakışlı iki iri gözü yerleştir.",
                "voice": "Altına hedefe odaklanmış parlak mavi gözlerini ekleyelim!",
                "svg": '<ellipse cx="288" cy="182" rx="12" ry="16" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="290" cy="182" r="6" fill="#0f172a"/><circle cx="287" cy="178" r="2.5" fill="#ffffff"/><ellipse cx="328" cy="182" rx="11" ry="15" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="330" cy="182" r="5.5" fill="#0f172a"/><circle cx="327" cy="178" r="2" fill="#ffffff"/>'
            },
            {
                "title": "5. Adım: Boyun Beyaz Tüy Halkası ve Çevik Gövde",
                "instruction": "Boynunun altına şık beyaz tüy halkasını ve atletik yeşil gövdesini çiz.",
                "voice": "Boynuna kabarık beyaz tüy yakasını ve çevik gövdesini çizelim.",
                "svg": '<path d="M 262 232 L 252 340 C 282 355, 318 355, 338 340 L 328 232" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 262 235 Q 295 258, 328 235" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "6. Adım: Belde Duran Sol Kol ve Kolluk",
                "instruction": "Beline koyduğu kendinden emin kolunu ve siyah-kırmızı bilekliğini ekle.",
                "voice": "Sol elini beline koymuş kendinden emin pozda çizelim!",
                "svg": '<path d="M 258 248 C 228 265, 222 298, 245 312" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><circle cx="242" cy="322" r="17" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "7. Adım: İşaret Eden Sağ Kol ve Eldiven",
                "instruction": "Sağ tarafa ileri doğru 'Ben birinciyim!' diye gösteren kolunu yap.",
                "voice": "Sağ kolunu da 'En hızlı benim!' der gibi yana doğru uzatalım!",
                "svg": '<path d="M 332 248 C 368 252, 398 240, 418 228" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><circle cx="430" cy="222" r="17" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "8. Adım: Uzun Kuş Kuyruk Tüyleri",
                "instruction": "Gövdesinin arkasından sola çıkan uzun sivri kuyruk tüylerini yap.",
                "voice": "Arka taraftan uzanan keskin kartal kuyruk tüylerini çizelim!",
                "svg": '<path d="M 255 318 L 175 305 L 222 332 L 165 342 L 245 348" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "9. Adım: Bacaklar ve Havalı Yeşil-Sarı Ayakkabılar",
                "instruction": "Altına sağlam duran bacaklarını ve kırmızı-yeşil büyük spor ayakkabılarını yap.",
                "voice": "Yere basan bacaklarını ve yeşil-sarı hızlı ayakkabılarını çizelim!",
                "svg": '<path d="M 275 348 L 258 430 M 315 348 L 335 430" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><ellipse cx="255" cy="435" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="338" cy="435" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 225 440 C 222 470, 250 480, 290 472 C 296 462, 286 440, 258 440 Z" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 322 440 C 315 470, 345 480, 398 470 C 406 460, 392 438, 355 438 Z" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "10. Adım: Beyaz Kaş / Alın Çizgisi",
                "instruction": "Gözünün üstüne kararlı kaş kavisini ekle.",
                "voice": "Gözlerinin üstüne havalı kaş kavisini yapalım.",
                "svg": '<path d="M 268 164 Q 288 156, 304 166" stroke="#0f172a" stroke-width="5" fill="none"/>'
            },
            {
                "title": "11. Adım: Kırmızı Bileklik Bantları",
                "instruction": "Eldiven bileklerine kırmızı spor bandı koy.",
                "voice": "Bileklerine şık kırmızı spor bantları çizelim.",
                "svg": '<ellipse cx="416" cy="228" rx="9" ry="14" fill="none" stroke="#0f172a" stroke-width="5" transform="rotate(-25 416 228)"/>'
            },
            {
                "title": "12. Adım: Ayakkabı Sarı Şeritleri",
                "instruction": "Ayakkabılara hız şeritleri çiz.",
                "voice": "Ayakkabılarına sarı hız şeritlerini ekleyelim.",
                "svg": '<line x1="242" y1="455" x2="282" y2="455" stroke="#0f172a" stroke-width="5"/><line x1="342" y1="455" x2="388" y2="455" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "13. Adım: Rüzgar Dalgası",
                "instruction": "Arkaya hız rüzgar çizgisi çek.",
                "voice": "Arka tarafa hızlı uçuş çizgilerini çekelim.",
                "svg": '<line x1="95" y1="245" x2="175" y2="245" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "14. Adım: Gökkuşağı Zümrüt Simgesi",
                "instruction": "Sağ üst köşeye Jet'in rüzgar simgesi olan esinti kıvrımını yap.",
                "voice": "Sağ üst köşeye rüzgar simgesi kıvrımını çizelim!",
                "svg": '<path d="M 445 142 C 475 135, 495 148, 485 162 C 478 170, 462 162, 468 152" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "15. Adım: Göbek Detayı",
                "instruction": "Göğsünün altına oval tüy deseni koy.",
                "voice": "Göğsünün üstüne beyaz tüy bölme çizgisi koyalım.",
                "svg": '<ellipse cx="295" cy="285" rx="18" ry="26" fill="none" stroke="#0f172a" stroke-width="4.5"/>'
            },
            {
                "title": "16. Adım: Gaga Burun Çizgisi",
                "instruction": "Gagasının üzerine minik nefes deliği noktası ekle.",
                "voice": "Sarı gagasına küçük bir nokta konduralım.",
                "svg": '<circle cx="348" cy="202" r="3.5" fill="#0f172a"/>'
            },
            {
                "title": "17. Adım: Zemin Çizgisi",
                "instruction": "Ayaklarının altına düz pist çizgisi çiz.",
                "voice": "Ayaklarının altına temiz bir pist çizgisi çekelim.",
                "svg": '<path d="M 160 482 L 440 482" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Zümrüt Yeşili & Sarı Gaga!)",
                "instruction": "Tebrikler Kıvanç! Kartal Jet'i parlak zümrüt yeşili, altın sarı gaga ve kırmızı gözlükle boya!",
                "voice": "Muhteşem oldu Kıvanç! Rüzgarın kralı Kartal Jet yarışa hazır! Şimdi onu parlak yeşil, sarı gaga ve kırmızı gözlüğüyle renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="jetGr" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#4ade80"/>
              <stop offset="50%" stop-color="#16a34a"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
          </defs>
          <path d="M 160 482 L 440 482" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
          <line x1="95" y1="245" x2="175" y2="245" stroke="#4ade80" stroke-width="6" stroke-linecap="round"/>
          <path d="M 445 142 C 475 135, 495 148, 485 162 C 478 170, 462 162, 468 152" fill="none" stroke="#22c55e" stroke-width="6" stroke-linecap="round"/>
          <path d="M 255 318 L 175 305 L 222 332 L 165 342 L 245 348 Z" fill="url(#jetGr)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 275 348 L 258 430 M 315 348 L 335 430" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 275 348 L 258 430 M 315 348 L 335 430" stroke="url(#jetGr)" stroke-width="9" stroke-linecap="round"/>
          <path d="M 225 440 C 222 470, 250 480, 290 472 C 296 462, 286 440, 258 440 Z" fill="#16a34a" stroke="#0f172a" stroke-width="8"/>
          <line x1="242" y1="455" x2="282" y2="455" stroke="#facc15" stroke-width="6"/>
          <ellipse cx="255" cy="435" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 322 440 C 315 470, 345 480, 398 470 C 406 460, 392 438, 355 438 Z" fill="#16a34a" stroke="#0f172a" stroke-width="8"/>
          <line x1="342" y1="455" x2="388" y2="455" stroke="#facc15" stroke-width="6"/>
          <ellipse cx="338" cy="435" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 262 232 L 252 340 C 282 355, 318 355, 338 340 L 328 232 Z" fill="url(#jetGr)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="295" cy="285" rx="18" ry="26" fill="#ffffff" stroke="#0f172a" stroke-width="4.5"/>
          <path d="M 262 235 Q 295 258, 328 235 L 328 250 Q 295 268, 262 250 Z" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 258 248 C 228 265, 222 298, 245 312" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 258 248 C 228 265, 222 298, 245 312" fill="none" stroke="url(#jetGr)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="242" cy="322" r="17" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 332 248 C 368 252, 398 240, 418 228" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 332 248 C 368 252, 398 240, 418 228" fill="none" stroke="url(#jetGr)" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="416" cy="228" rx="9" ry="14" fill="#ef4444" stroke="#0f172a" stroke-width="5" transform="rotate(-25 416 228)"/>
          <circle cx="430" cy="222" r="17" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 255 152 C 295 125, 355 140, 352 195 C 345 232, 268 238, 240 222 L 170 218 L 205 182 L 155 170 L 210 152 L 175 125 Z" fill="url(#jetGr)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="288" cy="182" rx="12" ry="16" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="290" cy="182" rx="8" ry="11" fill="#38bdf8"/>
          <circle cx="290" cy="182" r="5" fill="#0f172a"/>
          <circle cx="287" cy="178" r="2.5" fill="#ffffff"/>
          <ellipse cx="328" cy="182" rx="11" ry="15" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="330" cy="182" rx="7" ry="10" fill="#38bdf8"/>
          <circle cx="330" cy="182" r="4.5" fill="#0f172a"/>
          <circle cx="327" cy="178" r="2" fill="#ffffff"/>
          <path d="M 285 205 C 315 190, 362 192, 378 210 C 355 232, 315 236, 282 222 Z" fill="#facc15" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 295 215 Q 332 222, 360 212" stroke="#0f172a" stroke-width="5" fill="none"/>
          <circle cx="348" cy="202" r="3.5" fill="#0f172a"/>
          <rect x="262" y="138" width="38" height="22" rx="6" fill="#ef4444" stroke="#0f172a" stroke-width="6"/>
          <rect x="304" y="138" width="34" height="22" rx="6" fill="#ef4444" stroke="#0f172a" stroke-width="6"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 5. PRENSES EKİDNE TİKAL (TİKAL THE ECHİDNA)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_tikal",
        "categoryId": "sonic",
        "name": "Prenses Ekidne Tikal",
        "emoji": "✨",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Kaos Zümrütlerinin iyi kalpli koruyucusu turuncu ekidne Tikal! Mavi taç bandı, beyaz incili kolyesi ve ışık küresi!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, turuncu, gök mavisi, kırmızı, beyaz ve altın boyalar",
        "welcomeText": "İyi kalpli koruyucu! Merhaba Kıvanç! Chao'ların en yakın dostu nazik turuncu ekidne Tikal ile parlayan ışık topunu çizelim!",
        "colors": ["#f97316", "#38bdf8", "#fef08a", "#ef4444"],
        "welcomeAudio": "audio/voices/cirak_sonic_tikal/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Kafa Yuvarlağı ve Alın Bandı",
                "instruction": "Sayfanın üst ortasına yuvarlak baş tepesini ve mavi alın taç bandını yap.",
                "voice": "Kağıdımızın üst ortasına Prenses Tikal'ın yuvarlak kafasını ve şık taç bandını çizelim!",
                "svg": '<path d="M 248 168 C 258 118, 342 118, 352 168" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 248 156 Q 300 138, 352 156" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "2. Adım: İki Yana Dökülen Ekidne Örgü Saçları",
                "instruction": "Başın iki yanından omuzlara dökülen yumuşak turuncu örgü dikenlerini yap.",
                "voice": "Knuckles gibi yanlardan dökülen sevimli ekidne saçlarını iki yana çizelim.",
                "svg": '<path d="M 248 158 C 205 162, 185 202, 192 258 C 208 265, 228 250, 238 228 M 352 158 C 395 162, 415 202, 408 258 C 392 265, 372 250, 362 228" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Gülümseyen Ağız Bölgesi ve Siyah Burun",
                "instruction": "Yüzün altına yumuşak şeftali ağız yayını, minik siyah burnu ve gülümsemeyi çiz.",
                "voice": "Alt yüzüne gülümseyen şeftali ağız yayını, minik burnunu ve tatlı gülüşünü çizelim.",
                "svg": '<path d="M 250 206 C 252 186, 286 188, 300 202 C 314 188, 348 186, 350 206 C 340 242, 260 242, 250 206 Z" fill="none" stroke="#0f172a" stroke-width="8"/><ellipse cx="300" cy="200" rx="8" ry="6" fill="#0f172a"/><path d="M 284 218 Q 300 230, 316 218" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "4. Adım: Parlak Mavi Gözler ve Zarif Kirpikler",
                "instruction": "Göz kemerinin içine sıcak gök mavisi gözlerini ve dış köşeye kirpikleri ekle.",
                "voice": "İçine parlak gök mavisi gözlerini ve dış kenarına kirpikleri çizelim.",
                "svg": '<path d="M 258 188 C 258 158, 290 158, 300 178 C 310 158, 342 158, 342 188" fill="none" stroke="#0f172a" stroke-width="7"/><ellipse cx="280" cy="178" rx="9" ry="13" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="280" cy="178" r="5" fill="#0f172a"/><circle cx="278" cy="174" r="2" fill="#ffffff"/><ellipse cx="320" cy="178" rx="9" ry="13" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="320" cy="178" r="5" fill="#0f172a"/><circle cx="318" cy="174" r="2" fill="#ffffff"/>'
            },
            {
                "title": "5. Adım: Ünlü İncili Beyaz Kabile Kolyesi",
                "instruction": "Boynunun altına büyük dairesel beyaz incili kolyesini çiz!",
                "voice": "İşte Tikal'in en şık takısı! Boynuna yuvarlak boncuklu büyük kolyesini yapalım!",
                "svg": '<path d="M 264 238 Q 300 268, 336 238" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><circle cx="278" cy="252" r="6" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="300" cy="258" r="7" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="322" cy="252" r="6" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "6. Adım: Sevimli Kolsuz Kıyafet ve Etek",
                "instruction": "Kolyenin altından bele ve desenli beyaz-turuncu eteğe inen kıyafetini yap.",
                "voice": "Kolyenin altına şık beyaz üstü ve üçgen desenli etek kısmını çizelim.",
                "svg": '<path d="M 268 250 L 258 318 L 342 318 L 332 250" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 258 318 L 242 378 Q 300 392, 358 378 L 342 318" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "7. Adım: Işık Topu Tutan Eller (Sol ve Sağ)",
                "instruction": "İki kolunu ortadaki ışıldayan pembe ışık küresini tutarken birleştir.",
                "voice": "İki kolunu ortadaki sihirli ışık küresini sevgiyle tutarken çizelim!",
                "svg": '<path d="M 265 268 C 228 280, 212 310, 218 332" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><circle cx="215" cy="342" r="16" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 335 268 C 372 280, 388 265, 412 248" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><circle cx="425" cy="240" r="16" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "8. Adım: Elindeki Parlayan Işık Perisi Küresi",
                "instruction": "Sağ elinin hemen üstüne sıcacık parlayan ışık topunu çiz.",
                "voice": "Sağ elinin hemen üzerine dostu olan sihirli ışık küresini yapalım!",
                "svg": '<circle cx="445" cy="202" r="18" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 445 170 L 445 180 M 445 224 L 445 234 M 414 202 L 424 202 M 466 202 L 476 202" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>'
            },
            {
                "title": "9. Adım: İnce Bacaklar ve Renkli Sandalet Botlar",
                "instruction": "Eteğin altından inen iki bacağını ve kırmızı-sarı bantlı ayakkabılarını çiz.",
                "voice": "Eteğinin altından inen bacaklarını ve rengarenk bantlı ayakkabılarını yapalım.",
                "svg": '<path d="M 278 384 L 268 438 M 322 384 L 332 438" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><path d="M 242 442 C 238 472, 265 480, 295 474 C 302 465, 292 442, 268 442 Z" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 332 442 C 308 442, 298 465, 305 474 C 335 480, 362 472, 358 442 Z" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "10. Adım: Etekteki Üçgen Motif Süslemesi",
                "instruction": "Eteğinin alt kısmına antik zikzak üçgen desenini çiz.",
                "voice": "Eteğine şık üçgen antik motif desenleri ekleyelim.",
                "svg": '<path d="M 248 365 L 268 345 L 288 365 L 308 345 L 328 365 L 348 345" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>'
            },
            {
                "title": "11. Adım: Saç Bantı Çizgileri",
                "instruction": "Alnındaki taç bandına dikey süs çizgisi ekle.",
                "voice": "Alnındaki mavi banda altın süs çizgisi yapalım.",
                "svg": '<circle cx="300" cy="148" r="5" fill="#0f172a"/>'
            },
            {
                "title": "12. Adım: Zikzak Kuyruk",
                "instruction": "Arkadaki sevimli ekidne kuyruğunu yap.",
                "voice": "Arkadaki küçük zikzak ekidne kuyruğunu unutmayalım.",
                "svg": '<path d="M 248 355 L 222 365 L 245 375" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "13. Adım: Sandalet Bileklikleri",
                "instruction": "Ayak bileklerine beyaz çorap halkası çiz.",
                "voice": "Ayak bileklerine küçük bileklikleri ekleyelim.",
                "svg": '<ellipse cx="268" cy="438" rx="14" ry="8" fill="none" stroke="#0f172a" stroke-width="5"/><ellipse cx="332" cy="438" rx="14" ry="8" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "14. Adım: Eldiven Halkaları",
                "instruction": "El bileklerine beyaz eldiven manşetlerini koy.",
                "voice": "Bileklerine yumuşak eldiven halkalarını konduralım.",
                "svg": '<circle cx="222" cy="332" r="7" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="415" cy="246" r="7" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "15. Adım: Örgü Şeritleri",
                "instruction": "Yana sarkan turuncu saç örgülerine şerit halkası ekle.",
                "voice": "Saç örgülerinin ucuna toka çizgilerini yapalım.",
                "svg": '<line x1="194" y1="235" x2="225" y2="235" stroke="#0f172a" stroke-width="5"/><line x1="375" y1="235" x2="406" y2="235" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "16. Adım: Uçan Sihir Parıltıları",
                "instruction": "Işık topunun yanına yıldız parıltıları çiz.",
                "voice": "Işık küresinin etrafına parlayan yıldızlar ekleyelim.",
                "svg": '<circle cx="472" cy="175" r="4" fill="#0f172a"/><circle cx="422" cy="175" r="3.5" fill="#0f172a"/>'
            },
            {
                "title": "17. Adım: Antik Tapınak Zemini",
                "instruction": "Ayaklarının altına tapınak taşı zemini çiz.",
                "voice": "Ayaklarının altına düz zemin çizgisini çekelim.",
                "svg": '<path d="M 180 482 L 420 482" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Sıcacık Turuncu & Gök Mavisi Tikal!)",
                "instruction": "Tebrikler Kıvanç! Tikal'i parlak turuncu, gök mavisi taç ve parlayan altın kolyesiyle boya!",
                "voice": "Çok zarif ve güzel oldu Kıvanç! Prenses Tikal parlıyor! Şimdi onu sıcak turuncu, mavi taç bandı ve ışıldayan beyaz eteğiyle boya!",
                "svg": '''
          <path d="M 180 482 L 420 482" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
          <circle cx="445" cy="202" r="22" fill="#fbcfe8" opacity="0.5"/>
          <circle cx="445" cy="202" r="15" fill="#f472b6" stroke="#facc15" stroke-width="5"/>
          <path d="M 445 170 L 445 180 M 445 224 L 445 234 M 414 202 L 424 202 M 466 202 L 476 202" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <path d="M 248 355 L 222 365 L 245 375 Z" fill="#f97316" stroke="#0f172a" stroke-width="6"/>
          <path d="M 278 384 L 268 438 M 322 384 L 332 438" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 278 384 L 268 438 M 322 384 L 332 438" stroke="#fb923c" stroke-width="9" stroke-linecap="round"/>
          <path d="M 242 442 C 238 472, 265 480, 295 474 C 302 465, 292 442, 268 442 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="268" cy="438" rx="14" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 332 442 C 308 442, 298 465, 305 474 C 335 480, 362 472, 358 442 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="332" cy="438" rx="14" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 268 250 L 258 318 L 242 378 Q 300 392, 358 378 L 342 318 L 332 250 Z" fill="#ffffff" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 258 318 L 342 318 L 358 378 Q 300 392, 242 378 Z" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <path d="M 248 365 L 268 345 L 288 365 L 308 345 L 328 365 L 348 345" fill="none" stroke="#ef4444" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 265 268 C 228 280, 212 310, 218 332" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 265 268 C 228 280, 212 310, 218 332" fill="none" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          <circle cx="215" cy="342" r="16" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 335 268 C 372 280, 388 265, 412 248" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 335 268 C 372 280, 388 265, 412 248" fill="none" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          <circle cx="425" cy="240" r="16" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 264 238 Q 300 268, 336 238" fill="none" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
          <path d="M 264 238 Q 300 268, 336 238" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
          <circle cx="278" cy="252" r="6" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <circle cx="300" cy="258" r="7" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <circle cx="322" cy="252" r="6" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <path d="M 248 158 C 205 162, 185 202, 192 258 C 208 265, 228 250, 238 228 Z" fill="#f97316" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 352 158 C 395 162, 415 202, 408 258 C 392 265, 372 250, 362 228 Z" fill="#f97316" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="194" y1="235" x2="225" y2="235" stroke="#38bdf8" stroke-width="7"/>
          <line x1="375" y1="235" x2="406" y2="235" stroke="#38bdf8" stroke-width="7"/>
          <path d="M 248 168 C 258 118, 342 118, 352 168 C 352 210, 248 210, 248 168 Z" fill="#f97316" stroke="#0f172a" stroke-width="9"/>
          <path d="M 248 156 Q 300 138, 352 156 L 352 168 Q 300 150, 248 168 Z" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>
          <circle cx="300" cy="148" r="5" fill="#facc15"/>
          <path d="M 258 188 C 258 158, 290 158, 300 178 C 310 158, 342 158, 342 188 Z" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <ellipse cx="280" cy="178" rx="9" ry="13" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/>
          <circle cx="280" cy="178" r="5" fill="#0f172a"/>
          <circle cx="278" cy="174" r="2" fill="#ffffff"/>
          <ellipse cx="320" cy="178" rx="9" ry="13" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/>
          <circle cx="320" cy="178" r="5" fill="#0f172a"/>
          <circle cx="318" cy="174" r="2" fill="#ffffff"/>
          <path d="M 250 206 C 252 186, 286 188, 300 202 C 314 188, 348 186, 350 206 C 340 242, 260 242, 250 206 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="300" cy="200" rx="8" ry="6" fill="#0f172a"/>
          <path d="M 284 218 Q 300 230, 316 218" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round" fill="none"/>
'''
            }
        ]
    }
]
