# -*- coding: utf-8 -*-
"""
Part 2 (5 drawings) of the 10 new Kirpi Sonic drawings:
6. cirak_sonic_tornado (Tails'ın Kırmızı Tornado Uçağı)
7. cirak_sonic_eggmobile (Eggman'ın Uçan Eggmobile Aracı)
8. cirak_sonic_kaykay (Kaykaylı Sonic Extreme Gear)
9. cirak_sonic_film_simsek (Film Süper Şimşek Sonic)
10. cirak_sonic_hyper (Gökkuşağı Hyper Sonic)
"""

PART2_DRAWINGS = [
    # -------------------------------------------------------------------------
    # 6. TAİLS'IN KIRMIZI TORNADO UÇAĞI
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_tornado",
        "categoryId": "sonic",
        "name": "Tails Tornado Uçağı",
        "emoji": "✈️",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Sonic ve Tails'ın göklerde uçan ünlü kırmızı çift kanatlı Tornado uçağı! Dönen pervane ve altın yıldız amblemi!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, parlak kırmızı, turuncu, beyaz ve gök mavisi boyalar",
        "welcomeText": "Kalkışa hazır mısın Kıvanç? Tails'ın pilotluk yaptığı kırmızı çift kanatlı Tornado uçağını bulutların üstünde çiziyoruz!",
        "colors": ["#ef4444", "#ffffff", "#f97316", "#38bdf8"],
        "welcomeAudio": "audio/voices/cirak_sonic_tornado/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Uçağın Yuvarlak Ana Gövdesi",
                "instruction": "Sayfanın ortasına sağa doğru bakan kırmızı Tornado uçak gövdesini çiz.",
                "voice": "Kağıdımızın ortasına Tornado uçağımızın hızlı yuvarlak gövdesini çizelim.",
                "svg": '<path d="M 110 290 C 175 268, 355 262, 435 282 L 435 352 C 355 372, 175 362, 110 315 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Kırmızı Üst Kanat ve Alt Kanat",
                "instruction": "Uçağın gövdesinin üstüne geniş üst kanadı ve altına da ikinci kanadı çiz.",
                "voice": "Çift kanatlı uçak! Üst kısma uzun üst kanadı ve alt kısma ikinci kanadını çizelim!",
                "svg": '<rect x="235" y="192" width="165" height="28" rx="12" fill="none" stroke="#0f172a" stroke-width="9"/><rect x="245" y="342" width="145" height="26" rx="12" fill="none" stroke="#0f172a" stroke-width="9"/>'
            },
            {
                "title": "3. Adım: Kanatları Birleştiren Dik Destek Direkleri",
                "instruction": "Üst kanatla gövdeyi birbirine bağlayan dikey destek çubuklarını çek.",
                "voice": "Üst kanadı gövdeye sağlamca tutan dikey çelik çubukları çizelim.",
                "svg": '<line x1="275" y1="220" x2="275" y2="275" stroke="#0f172a" stroke-width="8"/><line x1="360" y1="220" x2="360" y2="275" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "4. Adım: Arka Kuyruk Kanadı ve Dümeni",
                "instruction": "Gövdenin arkasına yukarı kalkan kuyruk dümenini yap.",
                "voice": "Arka tarafa uçağın yön vermesini sağlayan dik kuyruk kanadını yapalım.",
                "svg": '<path d="M 110 290 L 90 228 C 115 225, 145 245, 165 282" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Uçağın Ön Motor Burnu ve Dönen Pervane",
                "instruction": "En öne yuvarlak pervane başlığını ve dönen dikey pervane kanatlarını çiz.",
                "voice": "En öne motor kapağını ve hızlı dönen büyük uçak pervanesini çizelim!",
                "svg": '<ellipse cx="445" cy="317" rx="18" ry="26" fill="none" stroke="#0f172a" stroke-width="8"/><ellipse cx="475" cy="317" rx="10" ry="68" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "6. Adım: Kokpitte Pilot Tilki Tails!",
                "instruction": "Üst kanadın önüne kokpitte neşeyle oturan Tails'in başını, tilki kulaklarını ve pilot gözlüğünü çiz!",
                "voice": "Kokpitin içine pilot gözlüğü takmış gülümseyen tilki Tails'i çizelim!",
                "svg": '<path d="M 188 272 C 188 230, 250 230, 250 272" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 192 248 L 182 212 L 212 232 M 230 232 L 258 212 L 248 248" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><rect x="195" y="238" width="48" height="16" rx="6" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="212" cy="260" r="4" fill="#0f172a"/><circle cx="234" cy="260" r="4" fill="#0f172a"/>'
            },
            {
                "title": "7. Adım: Alt İniş Tekerlekleri",
                "instruction": "Gövdenin altına iniş çubuklarını ve iki sağlam lastik tekerleği çiz.",
                "voice": "Gövdenin altına piste iniş yapmasını sağlayan tekerleklerini ekleyelim.",
                "svg": '<line x1="340" y1="365" x2="365" y2="412" stroke="#0f172a" stroke-width="8"/><circle cx="372" cy="425" r="24" fill="none" stroke="#0f172a" stroke-width="9"/><circle cx="372" cy="425" r="10" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "8. Adım: Arka Kuyruk Mini Tekerleği",
                "instruction": "Kuyruğun altına minik destek tekerleğini yap.",
                "voice": "Kuyruk altına da küçük destek tekerleğini konduralım.",
                "svg": '<circle cx="135" cy="338" r="12" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "9. Adım: Gövde Yanındaki Altın Yıldız Amblemi",
                "instruction": "Uçağın kırmızı yan gövdesine Sonic takımının yıldız işaretini yap.",
                "voice": "Uçağın yan gövdesine parlak beyaz yıldız amblemini çizelim!",
                "svg": '<polygon points="215,295 220,308 234,308 223,316 227,328 215,320 203,328 207,316 196,308 210,308" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>'
            },
            {
                "title": "10. Adım: Kanat Kenarı Beyaz Çizgisi",
                "instruction": "Kırmızı gövdeye hızlı beyaz yarış çizgisi çek.",
                "voice": "Gövde boyunca şık bir yarış şeridi çizgisi çekelim.",
                "svg": '<line x1="255" y1="312" x2="415" y2="312" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "11. Adım: Ön Cam Koruyucusu",
                "instruction": "Tails'in önüne rüzgar kesen minik uçak camını ekle.",
                "voice": "Tails'in önüne şeffaf pilot camını çizelim.",
                "svg": '<path d="M 248 272 L 268 250 L 268 272" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "12. Adım: Tails'in Neşeli Gülümsemesi",
                "instruction": "Tails'in yüzüne minik burnu ve gülümsemeyi koy.",
                "voice": "Tails'in yüzüne sevimli burnunu ve pilot gülümsemesini koyalım.",
                "svg": '<circle cx="225" cy="264" r="3" fill="#0f172a"/>'
            },
            {
                "title": "13. Adım: Arkada Uçan Bulut Kümesi (Sol)",
                "instruction": "Uçağın arkasında kalan pofuduk beyaz gökyüzü bulutunu çiz.",
                "voice": "Gökyüzünde süzüldüğü için arkasına puf puf bir bulut çizelim.",
                "svg": '<path d="M 65 215 C 65 190, 95 185, 110 202 C 125 185, 160 192, 158 218 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "14. Adım: Alt Gökyüzü Bulutları",
                "instruction": "Uçağın altında süzülen geniş beyaz bulutları yap.",
                "voice": "Alt tarafa gökyüzünde yüzen büyük yumuşak bulutlar çizelim.",
                "svg": '<path d="M 110 470 C 130 442, 180 442, 200 470 C 225 450, 275 450, 295 475" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "15. Adım: Pervane Dönüş Hareket Yayları",
                "instruction": "Dönen pervanenin önüne fırıl fırıl dönme çizgileri ekle.",
                "voice": "Pervanenin çok hızlı döndüğünü gösteren yay çizgilerini yapalım.",
                "svg": '<path d="M 495 268 Q 512 317, 495 366" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "16. Adım: Egzoz Borusu",
                "instruction": "Motor kapağının yanına kısa egzoz borusu ekle.",
                "voice": "Motorun yanına küçük egzoz çıkışını konduralım.",
                "svg": '<line x1="395" y1="335" x2="365" y2="340" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Rüzgar Hız Çizgileri",
                "instruction": "Kuyruğun arkasından uzayan hızlı rüzgar çizgilerini çek.",
                "voice": "Arka tarafa uçağımızın hızını gösteren rüzgar çizgilerini çekelim.",
                "svg": '<line x1="45" y1="290" x2="95" y2="290" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="55" y1="325" x2="105" y2="325" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Ateş Kırmızısı Tornado!)",
                "instruction": "Tebrikler Kıvanç! Tornado uçağını parlak kırmızı, beyaz şeritler ve turuncu pilot Tails ile boya!",
                "voice": "Şahane oldu Kıvanç! Tails'ın kırmızı Tornado uçağı göklerde süzülüyor! Şimdi onu ateş kırmızısı ve beyaz bulutlarla boya!",
                "svg": '''
          <defs>
            <linearGradient id="torRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
          </defs>
          <path d="M 65 215 C 65 190, 95 185, 110 202 C 125 185, 160 192, 158 218 Z" fill="#e0f2fe" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 110 470 C 130 442, 180 442, 200 470 C 225 450, 275 450, 295 475 L 295 505 L 110 505 Z" fill="#e0f2fe" stroke="#0f172a" stroke-width="7"/>
          <line x1="45" y1="290" x2="95" y2="290" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
          <line x1="55" y1="325" x2="105" y2="325" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
          <path d="M 188 272 C 188 230, 250 230, 250 272 Z" fill="#f97316" stroke="#0f172a" stroke-width="8"/>
          <path d="M 192 248 L 182 212 L 212 232 Z" fill="#f97316" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 230 232 L 258 212 L 248 248 Z" fill="#f97316" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 195 268 C 195 252, 244 252, 244 268 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <rect x="195" y="238" width="48" height="16" rx="6" fill="#38bdf8" stroke="#0f172a" stroke-width="5"/>
          <circle cx="212" cy="260" r="4" fill="#0f172a"/>
          <circle cx="234" cy="260" r="4" fill="#0f172a"/>
          <path d="M 248 272 L 268 250 L 268 272 Z" fill="#93c5fd" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <line x1="340" y1="365" x2="365" y2="412" stroke="#475569" stroke-width="9"/>
          <circle cx="372" cy="425" r="24" fill="#1e293b" stroke="#0f172a" stroke-width="9"/>
          <circle cx="372" cy="425" r="10" fill="#e2e8f0" stroke="#0f172a" stroke-width="5"/>
          <circle cx="135" cy="338" r="12" fill="#1e293b" stroke="#0f172a" stroke-width="7"/>
          <path d="M 110 290 L 90 228 C 115 225, 145 245, 165 282 Z" fill="url(#torRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 110 290 C 175 268, 355 262, 435 282 L 435 352 C 355 372, 175 362, 110 315 Z" fill="url(#torRed)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <line x1="255" y1="312" x2="415" y2="312" stroke="#ffffff" stroke-width="9" stroke-linecap="round"/>
          <polygon points="215,295 220,308 234,308 223,316 227,328 215,320 203,328 207,316 196,308 210,308" fill="#ffffff" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <line x1="275" y1="220" x2="275" y2="275" stroke="#475569" stroke-width="8"/>
          <line x1="360" y1="220" x2="360" y2="275" stroke="#475569" stroke-width="8"/>
          <rect x="235" y="192" width="165" height="28" rx="12" fill="url(#torRed)" stroke="#0f172a" stroke-width="9"/>
          <rect x="245" y="342" width="145" height="26" rx="12" fill="url(#torRed)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="445" cy="317" rx="18" ry="26" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="475" cy="317" rx="10" ry="68" fill="#cbd5e1" opacity="0.75" stroke="#0f172a" stroke-width="7"/>
          <path d="M 495 268 Q 512 317, 495 366" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" fill="none"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 7. EGGMAN'IN UÇAN EGGMOBİLE ARACI
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_eggmobile",
        "categoryId": "sonic",
        "name": "Eggman Uçan Eggmobile",
        "emoji": "🛸",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Doktor Eggman'ın meşhur yarım küre uçan aracı Eggmobile! Sarı-siyah tehlike şeridi, cam kokpit ve alt roket motorları!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, kırmızı, sarı, siyah, gri ve gök mavisi boyalar",
        "welcomeText": "Haha! Merhaba Kıvanç! Doktor Eggman'ın havalı uçan uzay küresi Eggmobile geliyor! Sarı-siyah şeritli aracı birlikte çizelim!",
        "colors": ["#ef4444", "#facc15", "#1e293b", "#38bdf8"],
        "welcomeAudio": "audio/voices/cirak_sonic_eggmobile/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Alt Yarım Yumurta Küre Gövdesi",
                "instruction": "Sayfanın ortasına büyük bir kase şeklinde uçan daire alt gövdesini çiz.",
                "voice": "Kağıdımızın ortasına Eggmobile'in büyük kase şeklindeki kırmızı alt küresini çizelim.",
                "svg": '<path d="M 155 290 C 155 430, 445 430, 445 290 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Sarı-Siyah Tehlike Şeridi Kemeri",
                "instruction": "Kürenin üst kenarı boyunca kalın kemer şeridini çiz ve damalı karelere böl.",
                "voice": "Kürenin üst kenarına Eggman'ın ünlü siyah-sarı tehlike şeridini kare kare çizelim!",
                "svg": '<rect x="150" y="275" width="300" height="28" rx="8" fill="none" stroke="#0f172a" stroke-width="8"/><line x1="200" y1="275" x2="200" y2="303" stroke="#0f172a" stroke-width="6"/><line x1="250" y1="275" x2="250" y2="303" stroke="#0f172a" stroke-width="6"/><line x1="300" y1="275" x2="300" y2="303" stroke="#0f172a" stroke-width="6"/><line x1="350" y1="275" x2="350" y2="303" stroke="#0f172a" stroke-width="6"/><line x1="400" y1="275" x2="400" y2="303" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "3. Adım: Büyük Cam Kokpit Kubbesi",
                "instruction": "Aracın tepesine yarım daire şeklinde şeffaf ön cam kubbesini ekle.",
                "voice": "Üst tarafına Doktor Eggman'ı koruyan büyük şeffaf cam kubbeyi çizelim.",
                "svg": '<path d="M 185 275 C 185 155, 415 155, 415 275" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "4. Adım: Kokpitin İçinde Sırıtan Doktor Eggman!",
                "instruction": "Camın içine Eggman'ın yuvarlak kel başını, mavi gözlüğünü ve dev bıyıklarını çiz!",
                "voice": "Şimdi camın içine kumandayı yöneten kel kafalı ve kocaman bıyıklı Doktor Eggman'ı çizelim!",
                "svg": '<circle cx="300" cy="222" r="32" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="286" cy="218" r="10" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="314" cy="218" r="10" fill="none" stroke="#0f172a" stroke-width="5"/><path d="M 295 232 C 265 225, 225 230, 212 246 L 245 250 L 222 260 C 252 256, 275 248, 295 238 M 305 232 C 335 225, 375 230, 388 246 L 355 250 L 378 260 C 348 256, 325 248, 305 238" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Eggman'ın Kırmızı Burnu ve Kontrol Kolu",
                "instruction": "Yüzüne yuvarlak burnunu ve önünde tuttuğu joystick kolunu yap.",
                "voice": "Burnunu ve elindeki kumanda kolunu ekleyelim.",
                "svg": '<circle cx="300" cy="226" r="7" fill="#0f172a"/><circle cx="300" cy="268" r="12" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "6. Adım: Sol Yan Far Lambası",
                "instruction": "Aracın sol yanına parlak büyük bir sarı ön far çiz.",
                "voice": "Eggmobile'in sol tarafına yolunu aydınlatan dev yuvarlak ön farı çizelim.",
                "svg": '<circle cx="195" cy="340" r="24" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="195" cy="340" r="12" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "7. Adım: Sağ Yan Far Lambası",
                "instruction": "Sağ yanına da aynı büyük yuvarlak farı yap.",
                "voice": "Sağ tarafa da diğer büyük yuvarlak farını ekleyelim.",
                "svg": '<circle cx="405" cy="340" r="24" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="405" cy="340" r="12" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "8. Adım: Ön Ortadaki Ünlü Eggman Logosu",
                "instruction": "Tam ortaya sarı yuvarlak üzerine küçük Eggman logosunu yerleştir.",
                "voice": "Ön gövdenin tam ortasına Eggman'ın logosunu çizelim!",
                "svg": '<circle cx="300" cy="345" r="22" fill="none" stroke="#0f172a" stroke-width="7"/><line x1="286" y1="348" x2="314" y2="348" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "9. Adım: Sol ve Sağ Yan Jet Motorları",
                "instruction": "Kürenin iki alt yanına havada tutan silindir jet motorları çiz.",
                "voice": "Aracı havada tutan sağ ve sol yan jet motor tüplerini çizelim!",
                "svg": '<path d="M 190 382 L 172 425 L 222 425 L 230 392 M 410 382 L 428 425 L 378 425 L 370 392" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "10. Adım: Alt Orta Ana İtici Motor ve Alevler!",
                "instruction": "Motorların altından yere doğru hararetli roket ateş dillerini yap.",
                "voice": "Motorların altından alev alev yanan roket ateşlerini çizelim!",
                "svg": '<path d="M 178 425 L 185 462 L 198 442 L 210 465 L 218 425 M 382 425 L 390 465 L 402 442 L 415 462 L 422 425" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "11. Adım: Cam Üzerinde Işık Yansıması",
                "instruction": "Cam kubbenin sol üstüne parlak cam yansıması çizgisi çek.",
                "voice": "Cam kubbenin parladığını gösteren şık bir ışık yansıma çizgisi yapalım.",
                "svg": '<path d="M 215 245 Q 230 198, 275 182" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "12. Adım: Yan Tampon Koruyucu Halkası",
                "instruction": "İki yandaki gri tampon çıkıntılarını ekle.",
                "voice": "İki yanına küçük koruma tamponu kulaklarını çizelim.",
                "svg": '<ellipse cx="145" cy="288" rx="10" ry="16" fill="none" stroke="#0f172a" stroke-width="7"/><ellipse cx="455" cy="288" rx="10" ry="16" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "13. Adım: Anten Çubuğu",
                "instruction": "Yan tarafa kırmızı sinyalli minik bir telsiz anteni ekle.",
                "voice": "Üst kenara robotlara emir gönderen minik telsiz antenini dikelim.",
                "svg": '<line x1="400" y1="220" x2="432" y2="178" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><circle cx="436" cy="174" r="7" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "14. Adım: Sıcak Hava Dalgaları",
                "instruction": "Alevlerin altına uçuş sarsıntı yayları ekle.",
                "voice": "Roket ateşlerinin altına uçtuğunu gösteren yaylar çizelim.",
                "svg": '<path d="M 160 478 Q 198 490, 235 478 M 365 478 Q 402 490, 440 478" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "15. Adım: Alt Metal Kaplama Çizgisi",
                "instruction": "Gövdenin alt kısmına metal parça çizgisi ekle.",
                "voice": "Alt gövdeye panel ayrım çizgisi çizelim.",
                "svg": '<path d="M 245 385 Q 300 400, 355 385" stroke="#0f172a" stroke-width="6" fill="none"/>'
            },
            {
                "title": "16. Adım: Uçan Bulutlar",
                "instruction": "Arka gökyüzüne iki küçük pofuduk bulut yap.",
                "voice": "Gökyüzüne Eggmobile'in etrafındaki tatlı bulutları ekleyelim.",
                "svg": '<path d="M 75 215 C 85 198, 115 198, 125 215" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "17. Adım: Parlayan Enerji Yıldızları",
                "instruction": "Anten ucuna sinyal dalgaları çiz.",
                "voice": "Antenin ucundan yayılan telsiz sinyal halkalarını yapalım!",
                "svg": '<path d="M 452 162 Q 465 174, 452 188 M 464 155 Q 480 174, 464 195" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Ateş Kırmızısı & Sarı Eggmobile!)",
                "instruction": "Tebrikler Kıvanç! Eggmobile'i kırmızı gövde, sarı-siyah damalı şerit ve cam mavi kubbeyle boya!",
                "voice": "Süper havalı oldu Kıvanç! Doktor Eggman'ın Eggmobile aracı göklerde uçuyor! Şimdi onu parlak kırmızı ve sarı-siyah şeritlerle renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="egmRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#991b1b"/>
            </linearGradient>
          </defs>
          <path d="M 452 162 Q 465 174, 452 188 M 464 155 Q 480 174, 464 195" stroke="#facc15" stroke-width="5" stroke-linecap="round" fill="none"/>
          <path d="M 178 425 L 185 462 L 198 442 L 210 465 L 218 425 Z" fill="#f97316" stroke="#facc15" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 382 425 L 390 465 L 402 442 L 415 462 L 422 425 Z" fill="#f97316" stroke="#facc15" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 190 382 L 172 425 L 222 425 L 230 392 Z" fill="#475569" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 410 382 L 428 425 L 378 425 L 370 392 Z" fill="#475569" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <line x1="400" y1="220" x2="432" y2="178" stroke="#475569" stroke-width="7" stroke-linecap="round"/>
          <circle cx="436" cy="174" r="7" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <path d="M 185 275 C 185 155, 415 155, 415 275 Z" fill="#bae6fd" opacity="0.6" stroke="#0f172a" stroke-width="9"/>
          <circle cx="300" cy="222" r="32" fill="#fed7aa" stroke="#0f172a" stroke-width="7"/>
          <circle cx="286" cy="218" r="10" fill="#38bdf8" stroke="#0f172a" stroke-width="5"/>
          <circle cx="314" cy="218" r="10" fill="#38bdf8" stroke="#0f172a" stroke-width="5"/>
          <path d="M 295 232 C 265 225, 225 230, 212 246 L 245 250 L 222 260 C 252 256, 275 248, 295 238 Z" fill="#92400e" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 305 232 C 335 225, 375 230, 388 246 L 355 250 L 378 260 C 348 256, 325 248, 305 238 Z" fill="#92400e" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <circle cx="300" cy="226" r="7" fill="#f87171" stroke="#0f172a" stroke-width="4"/>
          <circle cx="300" cy="268" r="12" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 215 245 Q 230 198, 275 182" stroke="#ffffff" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.8"/>
          <path d="M 155 290 C 155 430, 445 430, 445 290 Z" fill="url(#egmRed)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <rect x="150" y="275" width="300" height="28" rx="8" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
          <rect x="150" y="275" width="50" height="28" rx="4" fill="#1e293b"/>
          <rect x="250" y="275" width="50" height="28" fill="#1e293b"/>
          <rect x="350" y="275" width="50" height="28" fill="#1e293b"/>
          <rect x="150" y="275" width="300" height="28" rx="8" fill="none" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="145" cy="288" rx="10" ry="16" fill="#94a3b8" stroke="#0f172a" stroke-width="7"/>
          <ellipse cx="455" cy="288" rx="10" ry="16" fill="#94a3b8" stroke="#0f172a" stroke-width="7"/>
          <circle cx="195" cy="340" r="24" fill="#64748b" stroke="#0f172a" stroke-width="8"/>
          <circle cx="195" cy="340" r="14" fill="#fef08a" stroke="#0f172a" stroke-width="5"/>
          <circle cx="405" cy="340" r="24" fill="#64748b" stroke="#0f172a" stroke-width="8"/>
          <circle cx="405" cy="340" r="14" fill="#fef08a" stroke="#0f172a" stroke-width="5"/>
          <circle cx="300" cy="345" r="22" fill="#facc15" stroke="#0f172a" stroke-width="7"/>
          <line x1="286" y1="348" x2="314" y2="348" stroke="#0f172a" stroke-width="5"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 8. KAYKAYLI SONİC (EXTREME GEAR)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_kaykay",
        "categoryId": "sonic",
        "name": "Uçan Kaykaylı Sonic",
        "emoji": "🛹",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Havada süzülen roketli Extreme Gear kaykayının üstünde dengede duran süper havalı Kirpi Sonic!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, kobalt mavisi, altın sarısı, kırmızı ve turkuaz boyalar",
        "welcomeText": "Süper sörf! Merhaba Kıvanç! Uçan roketli kaykayının üzerinde havada numara yapan havalı Sonic'i çizmeye hazır mısın?",
        "colors": ["#2563eb", "#06b6d4", "#facc15", "#ef4444"],
        "welcomeAudio": "audio/voices/cirak_sonic_kaykay/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Uçan Roketli Extreme Gear Kaykayı (Gövde)",
                "instruction": "Sayfanın alt kısmına yatay sörf tahtası şeklinde fütüristik uçan kaykayı çiz.",
                "voice": "Kağıdımızın alt kısmına roketli uçan kaykay tahtasını çapraz ve şık bir şekille çizelim!",
                "svg": '<path d="M 125 405 L 445 375 C 475 372, 490 385, 465 402 L 155 432 C 125 435, 110 415, 125 405 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Kaykayın Alt Roket Türbinleri",
                "instruction": "Kaykayın arkasına hız kazandıran iki turbo egzoz tüpü ve alev ekle.",
                "voice": "Kaykayın arkasına gökyüzünde uçmasını sağlayan turbo jet çıkışını ve alevini yapalım!",
                "svg": '<path d="M 122 418 L 72 415 L 92 426 L 68 436 L 128 430" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Sonic'in Kaykaya Basan Ayakları (Ön ve Arka)",
                "instruction": "Kaykayın üzerine sağlamca basan iki büyük kırmızı koşu ayakkabısını çiz.",
                "voice": "Kaykayın üzerine sağlamca basan iki büyük kırmızı-beyaz Sonic ayakkabısını çizelim!",
                "svg": '<path d="M 225 365 C 222 390, 245 398, 288 392 C 296 382, 286 364, 258 364 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 325 358 C 322 384, 345 392, 392 384 C 400 374, 388 356, 358 356 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Bükülü Sörf Bacakları ve Çoraplar",
                "instruction": "Ayakkabılardan yukarı doğru dizlerini kırmış dengede duran bacakları yap.",
                "voice": "Dizlerini kırarak dengede duran bacaklarını ve beyaz çorap bilekliklerini çizelim.",
                "svg": '<ellipse cx="250" cy="360" rx="15" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="352" cy="352" rx="15" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 250 352 L 265 305 L 288 288 M 352 344 L 335 302 L 315 288" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Öne Eğilmiş Çevik Gövde",
                "instruction": "Bacakların üstüne sörf yaparken öne eğilmiş Sonic gövdesini ve şeftali karnını yap.",
                "voice": "Şimdi hız rüzgarına karşı hafifçe eğilmiş gövdesini ve oval karnını çizelim.",
                "svg": '<path d="M 272 222 C 260 258, 268 292, 298 296 C 328 294, 336 258, 326 222" fill="none" stroke="#0f172a" stroke-width="9"/><ellipse cx="305" cy="258" rx="18" ry="26" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "6. Adım: Denge Kuran Açık Kollar (Sol ve Sağ)",
                "instruction": "İki yana rüzgar sörfü yapar gibi açılmış kolları ve büyük beyaz eldivenleri ekle.",
                "voice": "İki yana rüzgar sörfü yapar gibi açılmış denge kollarını ve beyaz eldivenlerini yapalım!",
                "svg": '<path d="M 270 232 C 235 230, 210 220, 192 205" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><circle cx="178" cy="195" r="18" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 326 232 C 362 240, 392 248, 412 242" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><circle cx="426" cy="240" r="18" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "7. Adım: Kirpi Sonic'in Başı ve Rüzgarlı Dikenleri",
                "instruction": "Gövdenin üstüne Sonic'in yuvarlak başını ve rüzgardan arkaya yatmış 3 mavi dikeni çiz.",
                "voice": "Başına Sonic'in yuvarlak alnını ve hız rüzgarıyla arkaya uçuşan üç büyük dikenini çizelim!",
                "svg": '<path d="M 255 125 C 295 102, 355 125, 358 182 C 350 222, 275 235, 240 220 C 215 232, 185 242, 160 245 C 165 228, 185 215, 212 205 C 185 208, 160 212, 138 208 C 155 188, 182 178, 212 172 C 188 165, 168 158, 148 150 C 175 125, 215 118, 255 125 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "8. Adım: Sivri Kulaklar ve Havalı Güneş Gözlüğü!",
                "instruction": "Kulakları ekle ve bu çizime özel Sonic'in gözlerine havalı koyu kaykay güneş gözlüğü çiz!",
                "voice": "Kaykaycılar güneş gözlüğü takar! Kulağını çizip gözlerine süper havalı kaykay güneş gözlüğü ekleyelim!",
                "svg": '<path d="M 256 128 L 246 82 L 285 112 M 315 114 L 336 82 L 340 128" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 262 152 L 352 152 L 348 185 Q 325 192, 308 176 L 302 176 Q 285 192, 265 185 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>'
            },
            {
                "title": "9. Adım: Özgüvenli Gülümseme ve Siyah Burun",
                "instruction": "Gözlüğün altına şeftali ağız yayını, siyah burnu ve havalı sırıtışı koy.",
                "voice": "Gözlüğün altına siyah burnunu ve çok havalı gülümsemesini konduralım!",
                "svg": '<path d="M 248 205 C 248 180, 285 180, 310 192 C 335 180, 362 185, 360 210 C 346 235, 265 235, 248 205 Z" fill="none" stroke="#0f172a" stroke-width="7"/><ellipse cx="362" cy="190" rx="10" ry="7" fill="#0f172a"/><path d="M 295 212 Q 325 224, 342 208" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "10. Adım: Kaykay Desen Çizgileri",
                "instruction": "Kaykayın yan tarafına hızlı yıldız deseni çiz.",
                "voice": "Kaykayının kenarına havalı bir yıldırım hız çizgisi yapalım.",
                "svg": '<line x1="190" y1="412" x2="425" y2="390" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "11. Adım: Kaykayın Altından Çıkan Turkuaz Anti-Yerçekimi Işını",
                "instruction": "Tahtanın altına havada durmasını sağlayan ışın halkalarını çiz.",
                "voice": "Kaykayın yere değmeden havada uçtuğunu gösteren halkalar çizelim!",
                "svg": '<ellipse cx="225" cy="446" rx="34" ry="8" fill="none" stroke="#0f172a" stroke-width="5"/><ellipse cx="375" cy="432" rx="34" ry="8" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "12. Adım: Ayakkabı Beyaz Şeritleri",
                "instruction": "Ayakkabıların ortasına beyaz şeritleri ekle.",
                "voice": "Ayakkabılarının üstüne beyaz hız şeritlerini çizelim.",
                "svg": '<line x1="252" y1="365" x2="274" y2="392" stroke="#0f172a" stroke-width="5"/><line x1="352" y1="358" x2="375" y2="384" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "13. Adım: Arkada Kalan Sırt Dikeni",
                "instruction": "Sırtından rüzgarla uzayan sırt dikenini ekle.",
                "voice": "Sırtındaki sivri mavi dikenini de ekleyelim.",
                "svg": '<path d="M 268 242 L 235 256 L 265 268" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>'
            },
            {
                "title": "14. Adım: Güneş Gözlüğü Cam Parıltısı",
                "instruction": "Gözlüğün üzerine iki parıltı çizgisi çek.",
                "voice": "Güneş gözlüğünün camlarına havalı beyaz parıltı çizgileri çekelim!",
                "svg": '<line x1="274" y1="160" x2="288" y2="174" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><line x1="318" y1="160" x2="332" y2="174" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>'
            },
            {
                "title": "15. Adım: Önde Uçan Altın Yüzükler",
                "instruction": "Kaykayın önüne havada topladığı iki Altın Yüzük yap.",
                "voice": "Ön tarafına havada yakaladığı iki parlak Altın Yüzük çizelim!",
                "svg": '<circle cx="515" cy="315" r="24" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="515" cy="315" r="12" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "16. Adım: Gökyüzü Rüzgar Çizgileri",
                "instruction": "Arkaya hızla kaydığını gösteren uzun rüzgar çizgileri yap.",
                "voice": "Arkasına süper hız rüzgar çizgilerini çekelim.",
                "svg": '<line x1="65" y1="265" x2="145" y2="265" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="55" y1="305" x2="125" y2="305" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Alt Gökyüzü Yolu",
                "instruction": "En alta yer gölgesini gösteren çizgiyi ekle.",
                "voice": "Altına havada ne kadar yüksekte süzüldüğünü gösteren zemin çizgisi çizelim.",
                "svg": '<path d="M 110 475 L 490 475" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Extreme Gear Mavi-Turkuaz!)",
                "instruction": "Tebrikler Kıvanç! Uçan kaykaylı Sonic'i elektrik mavisi, güneş gözlüğü ve turkuaz roket aleviyle boya!",
                "voice": "Çok havalı oldu Kıvanç! Uçan kaykaylı Sonic rüzgar gibi süzülüyor! Şimdi onu elektrik mavisi, sarı kaykay ve turkuaz ışıklarla renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="skSonicBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
          </defs>
          <path d="M 110 475 L 490 475" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="225" cy="446" rx="34" ry="8" fill="#22d3ee" opacity="0.6" stroke="#06b6d4" stroke-width="4"/>
          <ellipse cx="375" cy="432" rx="34" ry="8" fill="#22d3ee" opacity="0.6" stroke="#06b6d4" stroke-width="4"/>
          <line x1="65" y1="265" x2="145" y2="265" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
          <line x1="55" y1="305" x2="125" y2="305" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
          <path d="M 515 291 A 24 24 0 1 0 515 339 A 24 24 0 1 0 515 291 Z M 515 303 A 12 12 0 1 1 515 327 A 12 12 0 1 1 515 303 Z" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <path d="M 122 418 L 72 415 L 92 426 L 68 436 L 128 430 Z" fill="#22d3ee" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 125 405 L 445 375 C 475 372, 490 385, 465 402 L 155 432 C 125 435, 110 415, 125 405 Z" fill="#2563eb" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="190" y1="412" x2="425" y2="390" stroke="#facc15" stroke-width="8" stroke-linecap="round"/>
          <path d="M 268 242 L 235 256 L 265 268 Z" fill="url(#skSonicBlue)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 250 352 L 265 305 L 288 288 M 352 344 L 335 302 L 315 288" fill="none" stroke="#0f172a" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 250 352 L 265 305 L 288 288 M 352 344 L 335 302 L 315 288" fill="none" stroke="#2563eb" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 225 365 C 222 390, 245 398, 288 392 C 296 382, 286 364, 258 364 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <line x1="252" y1="365" x2="274" y2="392" stroke="#ffffff" stroke-width="6"/>
          <ellipse cx="250" cy="360" rx="15" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 325 358 C 322 384, 345 392, 392 384 C 400 374, 388 356, 358 356 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <line x1="352" y1="358" x2="375" y2="384" stroke="#ffffff" stroke-width="6"/>
          <ellipse cx="352" cy="352" rx="15" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 272 222 C 260 258, 268 292, 298 296 C 328 294, 336 258, 326 222 Z" fill="url(#skSonicBlue)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="305" cy="258" rx="18" ry="26" fill="#fed7aa" stroke="#0f172a" stroke-width="5"/>
          <path d="M 270 232 C 235 230, 210 220, 192 205" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 270 232 C 235 230, 210 220, 192 205" fill="none" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          <circle cx="178" cy="195" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 326 232 C 362 240, 392 248, 412 242" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 326 232 C 362 240, 392 248, 412 242" fill="none" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          <circle cx="426" cy="240" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 315 114 L 336 82 L 340 128 Z" fill="url(#skSonicBlue)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 255 125 C 295 102, 355 125, 358 182 C 350 222, 275 235, 240 220 C 215 232, 185 242, 160 245 C 165 228, 185 215, 212 205 C 185 208, 160 212, 138 208 C 155 188, 182 178, 212 172 C 188 165, 168 158, 148 150 C 175 125, 215 118, 255 125 Z" fill="url(#skSonicBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 256 128 L 246 82 L 285 112 Z" fill="url(#skSonicBlue)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 248 205 C 248 180, 285 180, 310 192 C 335 180, 362 185, 360 210 C 346 235, 265 235, 248 205 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="7"/>
          <ellipse cx="362" cy="190" rx="10" ry="7" fill="#0f172a"/>
          <path d="M 295 212 Q 325 224, 342 208" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M 262 152 L 352 152 L 348 185 Q 325 192, 308 176 L 302 176 Q 285 192, 265 185 Z" fill="#0f172a" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <line x1="274" y1="160" x2="288" y2="174" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
          <line x1="318" y1="160" x2="332" y2="174" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 9. FİLM GÜÇLÜ ŞİMŞEK SONİC (MOVİE POWER-UP SONİC)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_film_simsek",
        "categoryId": "sonic",
        "name": "Film Şimşek Güçlü Sonic",
        "emoji": "⚡",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Sinema filmindeki mavi elektrik güçlerini açan Şimşek Sonic! Parlayan elektrik gözleri ve dikenlerinden fışkıran yıldırımlar!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, parlak mavi, cam göbeği turkuaz, sarı ve kırmızı boyalar",
        "welcomeText": "Bumm! Merhaba Kıvanç! Kirpi Sonic filmindeki o süper güçlü, gözlerinden ve dikenlerinden elektrik fışkıran Mavi Şimşek Sonic'i çizelim!",
        "colors": ["#1d4ed8", "#06b6d4", "#22d3ee", "#ef4444"],
        "welcomeAudio": "audio/voices/cirak_sonic_film_simsek/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Şimşek Kafa ve İki Sivri Kulak",
                "instruction": "Sayfanın üst ortasına film Sonic'in yuvarlak başını ve iki sivri kulağını çiz.",
                "voice": "Kağıdımızın üst ortasına filmdeki Kirpi Sonic'in alnını ve iki sivri kulağını çizelim.",
                "svg": '<path d="M 245 140 C 292 112, 355 135, 360 198" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 248 142 L 236 90 L 282 124 M 310 124 L 340 88 L 342 142" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Arkaya Uzanmış 3 Gür Mavi Diken",
                "instruction": "Filmdeki gibi biraz daha tüylü ve sivri 3 mavi dikeni arkaya doğru çiz.",
                "voice": "Başının arkasından şimşek gibi geriye doğru uzanan üç büyük mavi dikenini yapalım!",
                "svg": '<path d="M 245 140 C 192 126, 145 132, 112 162 C 145 168, 172 175, 195 182 C 155 190, 122 208, 108 232 C 140 232, 170 225, 198 218 C 162 238, 142 258, 140 278 C 168 272, 198 260, 226 248" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Şeftali Yüz ve Güçlü Ağız Bölgesi",
                "instruction": "Alt yüzü kapatan yanak yayını, siyah burnu ve kararlı gülümsemeyi yap.",
                "voice": "Alt yüzüne gülümseyen şeftali ağız bölgesini ve siyah oval burnunu çizelim.",
                "svg": '<path d="M 226 246 C 224 212, 265 206, 300 222 C 335 206, 368 210, 365 245 C 350 276, 250 276, 226 246 Z" fill="none" stroke="#0f172a" stroke-width="8"/><ellipse cx="366" cy="215" rx="12" ry="8" fill="#0f172a"/><path d="M 288 244 C 312 258, 338 252, 348 236" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "4. Adım: Elektrik Saçan İki Ayrı Büyük Göz (Film Tarzı!)",
                "instruction": "Filmdeki Sonic'in iki büyük ayrı parlayan elektrikli gözünü ve kaş kıvrımını çiz!",
                "voice": "Filmdeki Sonic'in şimşek saçan büyük gözlerini ve kararlı kaşlarını çizelim!",
                "svg": '<ellipse cx="282" cy="186" rx="18" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="285" cy="187" r="9" fill="#0f172a"/><circle cx="281" cy="181" r="4" fill="#ffffff"/><ellipse cx="332" cy="186" rx="16" ry="21" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="334" cy="187" r="8" fill="#0f172a"/><circle cx="330" cy="181" r="3.5" fill="#ffffff"/>'
            },
            {
                "title": "5. Adım: Çatık Kaşlı Elektrik Göz Çizgisi",
                "instruction": "Gözlerin tam üstüne süper güç toplarken çatılan havalı kaş kavisini yap.",
                "voice": "Gözlerinin üstüne 'Şimdi gücümü gösteriyorum!' diyen havalı kaş çizgisini yapalım.",
                "svg": '<path d="M 262 162 Q 282 152, 302 166 M 315 166 Q 332 152, 350 162" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "6. Adım: Güç Toplayan Gövde ve Şeftali Karın",
                "instruction": "Başın altına dinamik gövdesini ve ortasındaki karın ovalini çiz.",
                "voice": "Gövdesini ve ortasındaki oval şeftali karnını çizelim.",
                "svg": '<path d="M 255 270 C 242 315, 248 362, 282 372 C 315 372, 328 320, 318 270" fill="none" stroke="#0f172a" stroke-width="9"/><ellipse cx="288" cy="322" rx="22" ry="32" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "7. Adım: Sıkılı Sol Güç Kolu ve Yumruğu",
                "instruction": "Sola doğru yumruğunu sıkmış elektrik toplayan sol kolunu çiz.",
                "voice": "Sol kolunu şimşek enerjisi toplarken sıkılı beyaz yumrukla çizelim!",
                "svg": '<path d="M 252 282 C 218 292, 198 318, 185 338" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><circle cx="172" cy="350" r="22" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "8. Adım: İleri Fırlayan Sağ Yumruk",
                "instruction": "Sağ tarafa ileri doğru güç yumruğu atan sağ kolunu yap.",
                "voice": "Sağ tarafa da elektrik dolu güçlü yumruğunu atarken çizelim!",
                "svg": '<path d="M 320 282 C 355 288, 385 280, 412 268" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><circle cx="428" cy="264" r="22" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "9. Adım: Bacaklar ve Havalı Kırmızı Koşu Ayakkabıları",
                "instruction": "Yere sağlam basan iki güçlü bacağını ve kırmızı spor ayakkabılarını yap.",
                "voice": "Yere sağlam basan bacaklarını ve filmdeki hızlı kırmızı-beyaz ayakkabılarını çizelim!",
                "svg": '<path d="M 268 370 L 250 432 M 305 370 L 325 432" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><ellipse cx="248" cy="436" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="328" cy="436" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 225 442 C 220 472, 248 482, 290 476 C 298 466, 288 442, 260 442 Z" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 315 442 C 310 472, 340 482, 395 474 C 405 464, 392 440, 355 440 Z" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "10. Adım: Dikenlerden Çıkan Şimşek Çakmaları (Üst)",
                "instruction": "Başındaki dikenlerden etrafa sıçrayan zikzak mavi şimşekleri çiz!",
                "voice": "İşte film Sonic'in süper gücü! Başının etrafından çakan zikzak elektrik yıldırımlarını çizelim!",
                "svg": '<path d="M 110 135 L 138 148 L 122 158 L 152 172 M 235 65 L 245 88 L 232 95 L 248 115 M 378 95 L 362 115 L 376 122 L 352 142" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "11. Adım: Yumruklardan Fışkıran Şimşekler (Sol & Sağ)",
                "instruction": "Her iki eldiveninin etrafında dans eden elektrik kıvılcımlarını yap.",
                "voice": "Ellerinin etrafında dans eden dev elektrik yıldırımlarını ekleyelim!",
                "svg": '<path d="M 135 320 L 152 335 L 138 345 L 158 362 M 462 232 L 445 250 L 460 258 L 440 278" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "12. Adım: Gövde Etrafı Elektrik Halkaları",
                "instruction": "Ayaklarının altına ve belinin etrafına enerji şimşekleri çiz.",
                "voice": "Gövdesini saran enerji şimşek halkalarını çizelim.",
                "svg": '<path d="M 195 405 L 222 415 L 210 426 L 235 435 M 395 400 L 372 415 L 385 422 L 365 438" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "13. Adım: Beyaz Ayakkabı Şeritleri",
                "instruction": "Ayakkabılara hız şeritlerini ve tokaları ekle.",
                "voice": "Ayakkabılarına şık beyaz şerit çizgilerini yapalım.",
                "svg": '<line x1="250" y1="444" x2="275" y2="476" stroke="#0f172a" stroke-width="6"/><line x1="342" y1="442" x2="375" y2="474" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "14. Adım: Sırt Dikeni ve Kuyruk",
                "instruction": "Sırtından uzanan sırt dikenini ve küçük kuyruğunu ekle.",
                "voice": "Sırt dikenini ve minik kuyruğunu ekleyelim.",
                "svg": '<path d="M 246 300 L 210 315 L 245 330" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>'
            },
            {
                "title": "15. Adım: Alt Elektrik Şok Dairesi",
                "instruction": "Bastığı yere enerjinin yayıldığı zemin halkasını çiz.",
                "voice": "Ayaklarının bastığı yere enerji halkası çizelim.",
                "svg": '<ellipse cx="300" cy="482" rx="145" ry="16" fill="none" stroke="#0f172a" stroke-width="6" stroke-dasharray="16 10"/>'
            },
            {
                "title": "16. Adım: Mavi Kıvılcım Noktaları",
                "instruction": "Havada uçuşan elektrik kıvılcım noktalarını yerleştir.",
                "voice": "Havada parlayan küçük mavi kıvılcım noktalarını konduralım.",
                "svg": '<circle cx="155" cy="285" r="4" fill="#0f172a"/><circle cx="455" cy="310" r="5" fill="#0f172a"/><circle cx="195" cy="110" r="4" fill="#0f172a"/>'
            },
            {
                "title": "17. Adım: Süper Şimşek Çizgisi",
                "instruction": "Gökten inen yıldırım çizgilerini ekle.",
                "voice": "Arka plana süper güç yıldırımlarını çizelim!",
                "svg": '<path d="M 485 170 L 455 205 L 478 205 L 445 245" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Cam Göbeği Yıldırım Gücü!)",
                "instruction": "Tebrikler Kıvanç! Film Sonic'i parlak safir mavisi ve ışıl ışıl turkuaz şimşeklerle boya!",
                "voice": "Efsane oldu Kıvanç! Filmdeki Şimşek Sonic dünyayı kurtarmaya hazır! Şimdi onu safir mavisi ve parlak turkuaz yıldırımlarla renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="movBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="50%" stop-color="#1d4ed8"/>
              <stop offset="100%" stop-color="#1e3a8a"/>
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="482" rx="145" ry="16" fill="#22d3ee" opacity="0.25" stroke="#06b6d4" stroke-width="6" stroke-dasharray="16 10"/>
          <path d="M 110 135 L 138 148 L 122 158 L 152 172 M 235 65 L 245 88 L 232 95 L 248 115 M 378 95 L 362 115 L 376 122 L 352 142 M 135 320 L 152 335 L 138 345 L 158 362 M 462 232 L 445 250 L 460 258 L 440 278 M 485 170 L 455 205 L 478 205 L 445 245" fill="none" stroke="#22d3ee" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 246 300 L 210 315 L 245 330 Z" fill="url(#movBlue)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 268 370 L 250 432 M 305 370 L 325 432" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 268 370 L 250 432 M 305 370 L 325 432" stroke="#1d4ed8" stroke-width="9" stroke-linecap="round"/>
          <path d="M 225 442 C 220 472, 248 482, 290 476 C 298 466, 288 442, 260 442 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <line x1="250" y1="444" x2="275" y2="476" stroke="#ffffff" stroke-width="6"/>
          <ellipse cx="248" cy="436" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 315 442 C 310 472, 340 482, 395 474 C 405 464, 392 440, 355 440 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <line x1="342" y1="442" x2="375" y2="474" stroke="#ffffff" stroke-width="6"/>
          <ellipse cx="328" cy="436" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 255 270 C 242 315, 248 362, 282 372 C 315 372, 328 320, 318 270 Z" fill="url(#movBlue)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="288" cy="322" rx="22" ry="32" fill="#fed7aa" stroke="#0f172a" stroke-width="6"/>
          <path d="M 252 282 C 218 292, 198 318, 185 338" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 252 282 C 218 292, 198 318, 185 338" fill="none" stroke="#1d4ed8" stroke-width="9" stroke-linecap="round"/>
          <circle cx="172" cy="350" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 320 282 C 355 288, 385 280, 412 268" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 320 282 C 355 288, 385 280, 412 268" fill="none" stroke="#1d4ed8" stroke-width="9" stroke-linecap="round"/>
          <circle cx="428" cy="264" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 310 124 L 340 88 L 342 142 Z" fill="url(#movBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 245 140 C 292 112, 355 135, 360 198 C 350 242, 275 262, 226 248 C 198 260, 168 272, 140 278 C 142 258, 162 238, 198 218 C 170 225, 140 232, 108 232 C 122 208, 155 190, 195 182 C 172 175, 145 168, 112 162 C 145 132, 192 126, 245 140 Z" fill="url(#movBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 248 142 L 236 90 L 282 124 Z" fill="url(#movBlue)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="282" cy="186" rx="18" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="284" cy="187" r="12" fill="#22d3ee"/>
          <circle cx="285" cy="187" r="7" fill="#0f172a"/>
          <circle cx="281" cy="181" r="4" fill="#ffffff"/>
          <ellipse cx="332" cy="186" rx="16" ry="21" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="333" cy="187" r="11" fill="#22d3ee"/>
          <circle cx="334" cy="187" r="6.5" fill="#0f172a"/>
          <circle cx="330" cy="181" r="3.5" fill="#ffffff"/>
          <path d="M 262 162 Q 282 152, 302 166 M 315 166 Q 332 152, 350 162" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M 226 246 C 224 212, 265 206, 300 222 C 335 206, 368 210, 365 245 C 350 276, 250 276, 226 246 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="366" cy="215" rx="12" ry="8" fill="#0f172a"/>
          <path d="M 288 244 C 312 258, 338 252, 348 236" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 10. GÖKKUŞAĞI HYPER SONİC
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_hyper",
        "categoryId": "sonic",
        "name": "Gökkuşağı Hyper Sonic",
        "emoji": "🌈",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Sonic'in en üstün gökkuşağı formu Hyper Sonic! Etrafında uçan Süper Zümrütler ve gökyüzüne şahlanan elmas dikenleri!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, beyaz, gökkuşağı pembe, mavi, yeşil, sarı boyalar",
        "welcomeText": "İnanılmaz ışıklar! Merhaba Kıvanç! Sonic'in en nadir gökkuşağı gücü Hyper Sonic ile tanış! Bütün elmas renkleriyle çizelim!",
        "colors": ["#f472b6", "#38bdf8", "#facc15", "#22c55e"],
        "welcomeAudio": "audio/voices/cirak_sonic_hyper/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Hyper Sonic Yuvarlak Baş ve Kulaklar",
                "instruction": "Sayfanın ortasına parlayan baş çemberini ve iki keskin kulak üçgenini yap.",
                "voice": "Kağıdımızın üst ortasına Hyper Sonic'in baş yuvarlağını ve iki keskin kulağını çizelim.",
                "svg": '<path d="M 248 205 C 248 152, 352 152, 352 205" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 250 175 L 232 128 L 275 156 M 350 175 L 368 128 L 325 156" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Gökyüzüne Fırlayan 5 Işık Dikeni",
                "instruction": "Tepesinden güneş ışınları gibi yukarı ve yanlara açılan 5 Hyper dikeni çiz.",
                "voice": "Hyper Sonic'in dikenleri yıldız gibi parlar! Yukarı doğru şahlanan 5 süper ışık dikenini çizelim!",
                "svg": '<path d="M 278 155 L 300 55 L 322 155 M 252 162 L 185 88 L 265 148 M 348 162 L 415 88 L 335 148 M 242 195 L 158 168 L 238 212 M 358 195 L 442 168 L 362 212" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Şeftali Yüz ve Siyah Burun",
                "instruction": "Alt yüzüne yanak kıvrımını, siyah burnunu ve zafer gülümsemesini ekle.",
                "voice": "Yüzünün altına gülümseyen ağız bölgesini ve siyah burnunu çizelim.",
                "svg": '<path d="M 248 210 C 250 190, 285 194, 300 205 C 315 194, 350 190, 352 212 C 344 246, 256 246, 248 210 Z" fill="none" stroke="#0f172a" stroke-width="8"/><ellipse cx="300" cy="206" rx="10" ry="7" fill="#0f172a"/><path d="M 282 225 Q 300 236, 318 225" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "4. Adım: Gökkuşağı Parlayan Gözler",
                "instruction": "Göz kemerinin içine ışıldayan kırmızı-mavi Hyper gözleri çiz.",
                "voice": "Göz kemerinin içine parıldayan Hyper Sonic gözlerini yapalım.",
                "svg": '<path d="M 254 195 C 256 162, 290 162, 300 182 C 310 162, 344 162, 346 195" fill="none" stroke="#0f172a" stroke-width="7"/><ellipse cx="280" cy="184" rx="9" ry="13" fill="none" stroke="#0f172a" stroke-width="4.5"/><circle cx="280" cy="184" r="5.5" fill="#0f172a"/><circle cx="278" cy="180" r="2" fill="#ffffff"/><ellipse cx="320" cy="184" rx="9" ry="13" fill="none" stroke="#0f172a" stroke-width="4.5"/><circle cx="320" cy="184" r="5.5" fill="#0f172a"/><circle cx="318" cy="180" r="2" fill="#ffffff"/>'
            },
            {
                "title": "5. Adım: Havada Süzülen Çevik Gövde",
                "instruction": "Başın altına yumuşak kavisli gövde ve oval karın deseni çiz.",
                "voice": "Altına havada süzülen çevik gövdesini ve karın ovalini çizelim.",
                "svg": '<path d="M 268 242 C 256 285, 260 335, 300 342 C 340 335, 344 285, 332 242" fill="none" stroke="#0f172a" stroke-width="9"/><ellipse cx="300" cy="292" rx="20" ry="30" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "6. Adım: Gökyüzüne Açılan Sol Kol ve Eldiven",
                "instruction": "Sola yukarı doğru enerji saçarak açtığı kolunu ve eldivenini yap.",
                "voice": "İki elini zafer kazanmış gibi havaya kaldırıp güç saçarken çizelim! Önce sol kol!",
                "svg": '<path d="M 266 254 C 228 248, 200 228, 185 202" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><circle cx="176" cy="190" r="19" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "7. Adım: Gökyüzüne Açılan Sağ Kol ve Eldiven",
                "instruction": "Sağ tarafa da eşleşen yukarı kalkan kolunu ve eldivenini ekle.",
                "voice": "Şimdi sağ kolunu ve beyaz eldivenini de göğe doğru kaldıralım!",
                "svg": '<path d="M 334 254 C 372 248, 400 228, 415 202" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/><circle cx="424" cy="190" r="19" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "8. Adım: Havada Bükülen Zafer Bacakları",
                "instruction": "Biri düz biri bükülü havada süzülen bacakları ve ayakkabıları yap.",
                "voice": "Havada süzülen bacaklarını ve kırmızı-beyaz hızlı ayakkabılarını çizelim!",
                "svg": '<path d="M 280 338 L 258 410 M 320 338 L 348 388 L 332 422" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="255" cy="414" rx="15" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="330" cy="425" rx="15" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 225 420 C 220 452, 248 462, 285 454 C 292 444, 284 420, 255 420 Z" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 318 430 C 312 460, 342 470, 385 460 C 392 450, 382 428, 345 428 Z" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "9. Adım: Etrafında Dönen 4 Dev Süper Zümrüt (Sol)",
                "instruction": "Hyper Sonic'in sol etrafında dönen iki parlak Süper Zümrüt elmas çiz.",
                "voice": "Hyper Sonic'in etrafında dönen Süper Zümrüt elmaslarını çizelim! İki tane sol tarafa yapalım!",
                "svg": '<polygon points="105,255 128,255 138,268 116,292 95,268" fill="none" stroke="#0f172a" stroke-width="6"/><polygon points="135,345 158,345 168,358 146,382 125,358" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "10. Adım: Etrafında Dönen Dev Süper Zümrütler (Sağ)",
                "instruction": "Sağ tarafa da eşleşen iki büyük Süper Zümrüt elmas çiz.",
                "voice": "Sağ tarafa da parlayan iki Süper Zümrüt elmas ekleyelim!",
                "svg": '<polygon points="472,255 495,255 505,268 483,292 462,268" fill="none" stroke="#0f172a" stroke-width="6"/><polygon points="442,345 465,345 475,358 453,382 432,358" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "11. Adım: Büyük Gökkuşağı Enerji Çemberi",
                "instruction": "Bütün zümrütleri birbirine bağlayan büyük kesik enerji çemberini yap.",
                "voice": "Zümrütlerin etrafında döndüğünü gösteren büyük yörünge çemberini çizelim!",
                "svg": '<circle cx="300" cy="270" r="195" fill="none" stroke="#0f172a" stroke-width="5" stroke-dasharray="14 10"/>'
            },
            {
                "title": "12. Adım: Tepedeki Kral Elması",
                "instruction": "En tepeye beşinci ışıldayan Süper Zümrüt elmasını ekle.",
                "voice": "Yörüngenin en tepesine beşinci Süper Zümrütü konduralım.",
                "svg": '<polygon points="288,18 312,18 322,30 300,52 278,30" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "13. Adım: 4 Köşeli Parlayan Elmas Yıldızları",
                "instruction": "Hyper Sonic'in etrafına ışıltılı yıldız parıltıları koy.",
                "voice": "Gökkuşağı ışıklarını gösteren dört köşeli parıltı yıldızları çizelim.",
                "svg": '<path d="M 110 120 L 110 142 M 99 131 L 121 131 M 490 120 L 490 142 M 479 131 L 501 131" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "14. Adım: Alt Enerji Işınları",
                "instruction": "Ayaklarının altına ışık saçan çizgileri ekle.",
                "voice": "Ayaklarının altına havada süzülme ışınları çizelim.",
                "svg": '<path d="M 215 485 Q 300 475, 385 485" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "15. Adım: Eldiven Işık Halkaları",
                "instruction": "Eldiven bileklerine parlak beyaz bileklik çiz.",
                "voice": "Eldivenlerinin bileklerine manşet halkaları ekleyelim.",
                "svg": '<circle cx="182" cy="202" r="9" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="418" cy="202" r="9" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "16. Adım: Ayakkabı Hız Şeritleri",
                "instruction": "Ayakkabıların ortasına beyaz şerit çek.",
                "voice": "Ayakkabılarına hız şeritlerini ekleyelim.",
                "svg": '<line x1="252" y1="422" x2="268" y2="454" stroke="#0f172a" stroke-width="5"/><line x1="342" y1="430" x2="365" y2="462" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "17. Adım: Gökkuşağı Aura Yayları",
                "instruction": "Başın yanlarına iki ışık yayını ekle.",
                "voice": "Başının yanlarına parlayan ışık aura yayları yapalım.",
                "svg": '<path d="M 140 205 Q 130 245, 145 280 M 460 205 Q 470 245, 455 280" stroke="#0f172a" stroke-width="5" fill="none" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Gökkuşağı Pırlanta Hyper Sonic!)",
                "instruction": "Tebrikler Kıvanç! Hyper Sonic'i gökkuşağı geçişli ışıklar ve renkli Süper Zümrütlerle boya!",
                "voice": "Büyüleyici oldu Kıvanç! Gökkuşağı Hyper Sonic ışıklar saçıyor! Şimdi onu pastel gökkuşağı tonları ve rengarenk zümrütlerle boya!",
                "svg": '''
          <defs>
            <linearGradient id="hypRainbow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fbcfe8"/>
              <stop offset="35%" stop-color="#bae6fd"/>
              <stop offset="70%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#bbf7d0"/>
            </linearGradient>
          </defs>
          <circle cx="300" cy="270" r="195" fill="url(#hypRainbow)" opacity="0.22" stroke="#f472b6" stroke-width="5" stroke-dasharray="14 10"/>
          <path d="M 110 120 L 110 142 M 99 131 L 121 131 M 490 120 L 490 142 M 479 131 L 501 131" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <polygon points="288,18 312,18 322,30 300,52 278,30" fill="#22c55e" stroke="#0f172a" stroke-width="5"/>
          <polygon points="105,255 128,255 138,268 116,292 95,268" fill="#3b82f6" stroke="#0f172a" stroke-width="6"/>
          <polygon points="135,345 158,345 168,358 146,382 125,358" fill="#a855f7" stroke="#0f172a" stroke-width="6"/>
          <polygon points="472,255 495,255 505,268 483,292 462,268" fill="#ef4444" stroke="#0f172a" stroke-width="6"/>
          <polygon points="442,345 465,345 475,358 453,382 432,358" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
          <path d="M 280 338 L 258 410 M 320 338 L 348 388 L 332 422" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 280 338 L 258 410 M 320 338 L 348 388 L 332 422" fill="none" stroke="url(#hypRainbow)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 225 420 C 220 452, 248 462, 285 454 C 292 444, 284 420, 255 420 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8"/>
          <line x1="252" y1="422" x2="268" y2="454" stroke="#ffffff" stroke-width="6"/>
          <ellipse cx="255" cy="414" rx="15" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 318 430 C 312 460, 342 470, 385 460 C 392 450, 382 428, 345 428 Z" fill="#ef4444" stroke="#0f172a" stroke-width="8"/>
          <line x1="342" y1="430" x2="365" y2="462" stroke="#ffffff" stroke-width="6"/>
          <ellipse cx="330" cy="425" rx="15" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 268 242 C 256 285, 260 335, 300 342 C 340 335, 344 285, 332 242 Z" fill="url(#hypRainbow)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="300" cy="292" rx="20" ry="30" fill="#fed7aa" stroke="#0f172a" stroke-width="5"/>
          <path d="M 266 254 C 228 248, 200 228, 185 202" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 266 254 C 228 248, 200 228, 185 202" fill="none" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          <circle cx="176" cy="190" r="19" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 334 254 C 372 248, 400 228, 415 202" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 334 254 C 372 248, 400 228, 415 202" fill="none" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          <circle cx="424" cy="190" r="19" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 250 175 L 232 128 L 275 156 Z" fill="url(#hypRainbow)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 350 175 L 368 128 L 325 156 Z" fill="url(#hypRainbow)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 278 155 L 300 55 L 322 155 Z" fill="url(#hypRainbow)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 252 162 L 185 88 L 265 148 Z" fill="url(#hypRainbow)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 348 162 L 415 88 L 335 148 Z" fill="url(#hypRainbow)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 242 195 L 158 168 L 238 212 Z" fill="url(#hypRainbow)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 358 195 L 442 168 L 362 212 Z" fill="url(#hypRainbow)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 248 205 C 248 152, 352 152, 352 205 C 352 240, 248 240, 248 205 Z" fill="url(#hypRainbow)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 254 195 C 256 162, 290 162, 300 182 C 310 162, 344 162, 346 195 Z" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <ellipse cx="280" cy="184" rx="9" ry="13" fill="#ec4899" stroke="#0f172a" stroke-width="4"/>
          <circle cx="280" cy="184" r="5.5" fill="#0f172a"/>
          <circle cx="278" cy="180" r="2" fill="#ffffff"/>
          <ellipse cx="320" cy="184" rx="9" ry="13" fill="#06b6d4" stroke="#0f172a" stroke-width="4"/>
          <circle cx="320" cy="184" r="5.5" fill="#0f172a"/>
          <circle cx="318" cy="180" r="2" fill="#ffffff"/>
          <path d="M 248 210 C 250 190, 285 194, 300 205 C 315 194, 350 190, 352 212 C 344 246, 256 246, 248 210 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="300" cy="206" rx="10" ry="7" fill="#0f172a"/>
          <path d="M 282 225 Q 300 236, 318 225" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
'''
            }
        ]
    }
]
