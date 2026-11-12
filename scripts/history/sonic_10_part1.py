# -*- coding: utf-8 -*-
"""
Part 1 (5 drawings) of the 10 new Kirpi Sonic drawings:
1. cirak_sonic_blaze (Ateşli Kedi Blaze)
2. cirak_sonic_cream (Tavşan Cream & Cheese)
3. cirak_sonic_rouge (Yarasa Rouge)
4. cirak_sonic_omega (Dev Robot E-123 Omega)
5. cirak_sonic_big (Tombul Kedi Big & Froggy)
"""

PART1_DRAWINGS = [
    # -------------------------------------------------------------------------
    # 1. ATEŞLİ KEDİ BLAZE (BLAZE THE CAT)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_blaze",
        "categoryId": "sonic",
        "name": "Ateşli Kedi Blaze",
        "emoji": "🔥",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Alev güçlerine sahip asil mor kedi prenses Blaze! Alnındaki yakut taşı, yüksek at kuyruğu ve elindeki alev topları!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, mor, lila, kırmızı, sarı ve turuncu boyalar",
        "welcomeText": "Alevler parlasın! Merhaba Kıvanç! Ateş güçleriyle süper hızlı koşabilen cesur mor kedi Blaze geldi! Birlikte alevleri çizelim!",
        "colors": ["#a855f7", "#c084fc", "#f97316", "#ef4444"],
        "welcomeAudio": "audio/voices/cirak_sonic_blaze/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Kedi Kafa Yuvarlağı",
                "instruction": "Sayfanın üst ortasına Blaze'in kibar oval kafa hattını çiz.",
                "voice": "Kağıdımızın üst ortasına mor kedi Blaze'in zarif yuvarlak kafa çizgisini yapalım.",
                "svg": '<path d="M 245 180 C 245 128, 355 128, 355 180 C 355 215, 245 215, 245 180 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: İki Sivri Kedi Kulağı",
                "instruction": "Başın üstüne iki büyük sivri üçgen kedi kulağı ve iç üçgenleri çiz.",
                "voice": "Başının tepesine iki büyük sivri kedi kulağı ve iç üçgenlerini çizelim.",
                "svg": '<path d="M 250 155 L 235 90 L 285 135 M 315 135 L 365 90 L 350 155" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 254 146 L 245 106 L 275 136 M 325 136 L 355 106 L 346 146" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Kırmızı Alın Mücevheri ve Yanak Tüyleri",
                "instruction": "Alnının ortasına elmas şeklinde yakut taşı, iki yana sivri kedi yanak tüyleri yap.",
                "voice": "Alnının tam ortasına parlak kırmızı yakut taşını ve iki yanına kedi tüylerini çizelim.",
                "svg": '<polygon points="300,142 308,154 300,166 292,154" fill="none" stroke="#0f172a" stroke-width="5"/><path d="M 245 185 L 218 195 L 238 205 L 222 215 L 252 218 M 355 185 L 382 195 L 362 205 L 378 215 L 348 218" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Arkaya Uzanan Yüksek At Kuyruğu",
                "instruction": "Başın arkasından sola doğru toka ile tutturulmuş uzun at kuyruğu saçını çiz.",
                "voice": "Başının arkasından rüzgarda uçuşan yüksek at kuyruğu saçını kıvrımla çizelim!",
                "svg": '<ellipse cx="235" cy="148" rx="12" ry="12" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 225 142 C 165 110, 125 145, 110 185 C 145 180, 185 168, 222 155" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Altın Kedi Gözleri ve Kirpikler",
                "instruction": "Yüzüne hafif çekik asil gözleri, gözbebeklerini ve şık kirpikleri çiz.",
                "voice": "Yüzüne asil kedi bakışlı altın gözlerini ve dış kenar kirpiklerini ekleyelim.",
                "svg": '<path d="M 255 198 C 258 168, 288 168, 294 190 M 306 190 C 312 168, 342 168, 345 198" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><ellipse cx="278" cy="188" rx="8" ry="12" fill="none" stroke="#0f172a" stroke-width="4.5"/><circle cx="279" cy="188" r="5" fill="#0f172a"/><circle cx="276" cy="184" r="2" fill="#ffffff"/><ellipse cx="322" cy="188" rx="8" ry="12" fill="none" stroke="#0f172a" stroke-width="4.5"/><circle cx="321" cy="188" r="5" fill="#0f172a"/><circle cx="318" cy="184" r="2" fill="#ffffff"/>'
            },
            {
                "title": "6. Adım: Sevimli Kedi Burnu ve Gülümseme",
                "instruction": "Alt yanak kavisini, küçük üçgen burnu ve tatlı gülüşü çiz.",
                "voice": "Alt yüzüne minik üçgen kedi burnunu ve zarif gülümsemesini konduralım.",
                "svg": '<path d="M 252 216 C 258 242, 342 242, 348 216" fill="none" stroke="#0f172a" stroke-width="7"/><polygon points="295,204 305,204 300,211" fill="#0f172a"/><path d="M 288 220 Q 300 228, 312 220" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "7. Adım: Beyaz Tüylü Yakalı Mor Ceket Üstü",
                "instruction": "Boynun altına beyaz kürk yakalı şık mor ceketin üstünü çiz.",
                "voice": "Boynunun altına kabarık beyaz tüylü şık mor kraliyet ceketini yapalım!",
                "svg": '<path d="M 275 240 L 265 268 Q 300 282, 335 268 L 325 240" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 272 268 L 265 322 L 335 322 L 328 268" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "8. Adım: Altın Düğmeli Uzun Ceket Eteği",
                "instruction": "Belin altından açılan uzun mor ceket eteğini ve beyaz alt tüy şeridini yap.",
                "voice": "Belinden aşağıya doğru zarifçe açılan uzun mor ceket eteğini çizelim.",
                "svg": '<path d="M 265 322 L 242 385 C 275 398, 325 398, 358 385 L 335 322" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 248 370 Q 300 385, 352 370" fill="none" stroke="#0f172a" stroke-width="6"/><line x1="300" y1="278" x2="300" y2="378" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "9. Adım: Sol Alev Tutan Kol ve Eldiven",
                "instruction": "Sola doğru uzanan zarif kolu, beyaz manşeti ve avucu açık eldivenini çiz.",
                "voice": "Sol kolunu ateş topu oluşturmak üzere yana doğru uzatalım!",
                "svg": '<path d="M 268 272 C 235 282, 210 278, 185 262" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><ellipse cx="182" cy="258" rx="12" ry="9" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-30 182 258)"/><circle cx="168" cy="245" r="16" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "10. Adım: Elde Parlayan Alev Topu (Sol)",
                "instruction": "Sol eldiveninin üstünde dans eden parlak alev topunu çiz.",
                "voice": "Sol elinin hemen üstünde parlayan büyülü alev topunu çizelim!",
                "svg": '<path d="M 168 228 C 145 215, 145 185, 168 165 C 175 182, 188 182, 185 168 C 202 188, 195 218, 168 228 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "11. Adım: Sağ Alev Tutan Kol ve İkinci Alev",
                "instruction": "Sağ tarafa da aynı güçle uzanan kolunu ve ikinci alev topunu yap.",
                "voice": "Sağ elinin üstüne de ateş gücünü gösteren ikinci alev topunu çizelim!",
                "svg": '<path d="M 332 272 C 365 282, 390 278, 415 262" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><circle cx="432" cy="245" r="16" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 432 228 C 408 215, 412 185, 432 165 C 440 182, 452 180, 448 168 C 464 190, 455 218, 432 228 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "12. Adım: Zarif Kedi Kuyruğu (Arkadan Süzülen)",
                "instruction": "Ceketin altından sola doğru kıvrılan ince zarif kedi kuyruğunu yap.",
                "voice": "Arka taraftan S harfi gibi zarifçe kıvrılan ince kedi kuyruğunu uzatalım.",
                "svg": '<path d="M 248 360 C 200 375, 175 345, 155 365 C 145 375, 155 390, 170 385" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "13. Adım: İnce Uzun Bacaklar (Taytlı)",
                "instruction": "Eteğin altından inen iki zarif beyaz taytlı bacağı çiz.",
                "voice": "Eteğin altından yere inen zarif bacaklarını çizelim.",
                "svg": '<path d="M 278 390 L 268 445 M 322 390 L 332 445" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "14. Adım: Tüylü Kırmızı-Mor Topuklu Çizmeler",
                "instruction": "Bileklere pofuduk beyaz çizme tüylerini ve kırmızı ayakkabıları yap.",
                "voice": "Ayak bileklerine pofuduk kürk manşetlerini ve zarif kırmızı-beyaz çizmelerini çizelim.",
                "svg": '<ellipse cx="266" cy="448" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 235 455 C 232 482, 260 488, 290 482 C 296 472, 288 455, 266 455 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><ellipse cx="334" cy="448" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 334 455 C 312 455, 304 472, 310 482 C 340 488, 368 482, 365 455 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "15. Adım: Altın Ceket Kemeri",
                "instruction": "Ceketin göğüs ortasına altın düğme detayları ekle.",
                "voice": "Ceketin ön kısmına şık altın düğme detayları konduralım.",
                "svg": '<circle cx="300" cy="295" r="5" fill="#0f172a"/><circle cx="300" cy="318" r="5" fill="#0f172a"/>'
            },
            {
                "title": "16. Adım: Ateş Kıvılcımları",
                "instruction": "Ellerindeki alevlerin etrafına uçan küçük ateş kıvılcımları yap.",
                "voice": "Alevlerin etrafına gökyüzüne yükselen minik ateş kıvılcımları ekleyelim.",
                "svg": '<circle cx="140" cy="165" r="4" fill="#0f172a"/><circle cx="195" cy="145" r="5" fill="#0f172a"/><circle cx="458" cy="160" r="4.5" fill="#0f172a"/>'
            },
            {
                "title": "17. Adım: Sıcak Zemin Çizgisi",
                "instruction": "Çizmelerinin altına asil duruşunu gösteren zemin çizgisi çek.",
                "voice": "Ayaklarının altına ateş gücüyle parlayan zemin çizgimizi çekelim.",
                "svg": '<path d="M 180 494 Q 300 484, 420 494" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Lila ve Alev Turuncusu Blaze!)",
                "instruction": "Tebrikler Kıvanç! Blaze'i asil lila kürkü, mor kraliyet ceketi ve turuncu alevlerle boya!",
                "voice": "Harikasın Kıvanç! Ateşli kedi Blaze muhteşem görünüyor! Şimdi onu lila tüyleri, mor ceketi ve parlak alev toplarıyla boya!",
                "svg": '''
          <defs>
            <linearGradient id="blzLilac" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#e9d5ff"/>
              <stop offset="50%" stop-color="#c084fc"/>
              <stop offset="100%" stop-color="#9333ea"/>
            </linearGradient>
            <linearGradient id="blzCoat" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#9333ea"/>
              <stop offset="100%" stop-color="#581c87"/>
            </linearGradient>
            <linearGradient id="blzFire" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stop-color="#ef4444"/>
              <stop offset="50%" stop-color="#f97316"/>
              <stop offset="100%" stop-color="#fef08a"/>
            </linearGradient>
          </defs>
          <path d="M 180 494 Q 300 484, 420 494" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
          <path d="M 248 360 C 200 375, 175 345, 155 365 C 145 375, 155 390, 170 385" fill="none" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
          <path d="M 248 360 C 200 375, 175 345, 155 365 C 145 375, 155 390, 170 385" fill="none" stroke="#c084fc" stroke-width="7" stroke-linecap="round"/>
          <path d="M 278 390 L 268 445 M 322 390 L 332 445" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/>
          <path d="M 278 390 L 268 445 M 322 390 L 332 445" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
          <path d="M 235 455 C 232 482, 260 488, 290 482 C 296 472, 288 455, 266 455 Z" fill="#ec4899" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="266" cy="448" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 334 455 C 312 455, 304 472, 310 482 C 340 488, 368 482, 365 455 Z" fill="#ec4899" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="334" cy="448" rx="16" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 268 272 C 235 282, 210 278, 185 262" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 268 272 C 235 282, 210 278, 185 262" fill="none" stroke="url(#blzCoat)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="168" cy="245" r="16" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <ellipse cx="182" cy="258" rx="12" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="6" transform="rotate(-30 182 258)"/>
          <path d="M 168 228 C 145 215, 145 185, 168 165 C 175 182, 188 182, 185 168 C 202 188, 195 218, 168 228 Z" fill="url(#blzFire)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 332 272 C 365 282, 390 278, 415 262" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 332 272 C 365 282, 390 278, 415 262" fill="none" stroke="url(#blzCoat)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="432" cy="245" r="16" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 432 228 C 408 215, 412 185, 432 165 C 440 182, 452 180, 448 168 C 464 190, 455 218, 432 228 Z" fill="url(#blzFire)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 272 268 L 265 322 L 242 385 C 275 398, 325 398, 358 385 L 335 322 L 328 268 Z" fill="url(#blzCoat)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 248 370 Q 300 385, 352 370 L 358 385 C 325 398, 275 398, 242 385 Z" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 275 240 L 265 268 Q 300 282, 335 268 L 325 240 Z" fill="#ffffff" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="300" cy="295" r="5" fill="#facc15"/>
          <circle cx="300" cy="318" r="5" fill="#facc15"/>
          <path d="M 225 142 C 165 110, 125 145, 110 185 C 145 180, 185 168, 222 155 Z" fill="url(#blzLilac)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="235" cy="148" r="11" fill="#ef4444" stroke="#0f172a" stroke-width="6"/>
          <path d="M 250 155 L 235 90 L 285 135 Z" fill="url(#blzLilac)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 254 146 L 245 106 L 275 136 Z" fill="#fbcfe8" stroke="#0f172a" stroke-width="4"/>
          <path d="M 315 135 L 365 90 L 350 155 Z" fill="url(#blzLilac)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 325 136 L 355 106 L 346 146 Z" fill="#fbcfe8" stroke="#0f172a" stroke-width="4"/>
          <path d="M 245 180 C 245 128, 355 128, 355 180 L 382 195 L 362 205 L 378 215 L 348 218 C 340 242, 260 242, 252 218 L 222 215 L 238 205 L 218 195 Z" fill="url(#blzLilac)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 252 216 C 258 242, 342 242, 348 216 C 328 205, 272 205, 252 216 Z" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <polygon points="300,142 308,154 300,166 292,154" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="278" cy="188" rx="9" ry="13" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <circle cx="279" cy="188" r="5" fill="#0f172a"/>
          <circle cx="276" cy="184" r="2.2" fill="#ffffff"/>
          <ellipse cx="322" cy="188" rx="9" ry="13" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <circle cx="321" cy="188" r="5" fill="#0f172a"/>
          <circle cx="318" cy="184" r="2.2" fill="#ffffff"/>
          <polygon points="295,204 305,204 300,211" fill="#0f172a"/>
          <path d="M 288 220 Q 300 228, 312 220" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 2. SEVİMLİ TAVŞAN CREAM & CHEESE
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_cream",
        "categoryId": "sonic",
        "name": "Tavşan Cream ve Cheese",
        "emoji": "🐰",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Tatlı küçük tavşan Cream ve en yakın dostu papyonlu minik Chao Cheese! Uzun kulaklar, turuncu elbise ve mavi kurdele!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, krem sarısı, turuncu, mavi ve pembe boyalar",
        "welcomeText": "Merhaba Kıvanç! İki uzun kulaklı sevimli tavşan Cream ve onun uçan küçük arkadaşı Cheese geldi! Haydi ikisini birlikte çizelim!",
        "colors": ["#fde68a", "#f97316", "#38bdf8", "#ec4899"],
        "welcomeAudio": "audio/voices/cirak_sonic_cream/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Sevimli Yuvarlak Tavşan Kafası",
                "instruction": "Sayfanın ortasına Cream'in tatlı yuvarlak kafasını çiz.",
                "voice": "Kağıdımızın üst ortasına sevimli tavşan Cream'in tatlı yuvarlak kafasını çizelim.",
                "svg": '<ellipse cx="275" cy="195" rx="60" ry="52" fill="none" stroke="#0f172a" stroke-width="9"/>'
            },
            {
                "title": "2. Adım: İki Uzun Sarkık Tavşan Kulağı",
                "instruction": "Kafanın üstünden aşağıya doğru yumuşakça sarkan iki uzun tavşan kulağı çiz.",
                "voice": "Tavşanların uzun kulakları meşhurdur! Tepeden iki yana sarkık iki uzun tavşan kulağı çizelim.",
                "svg": '<path d="M 255 148 C 215 110, 170 155, 178 235 C 185 262, 212 262, 222 232 C 228 202, 232 175, 250 158" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 295 148 C 335 110, 380 155, 372 235 C 365 262, 338 262, 328 232 C 322 202, 318 175, 300 158" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Yanak Rengi Çizgisi ve Sevimli Burun",
                "instruction": "Gözlerin ortasından inen renk ayrımını, minik burnu ve mutlu gülüşü yap.",
                "voice": "Yüzünün ortasındaki tatlı deseni, minik pembe burnunu ve neşeli gülüşünü çizelim.",
                "svg": '<ellipse cx="275" cy="212" rx="34" ry="20" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="275" cy="204" r="5" fill="#0f172a"/><path d="M 262 216 Q 275 228, 288 216" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "4. Adım: Kocaman Parlak Tavşan Gözleri",
                "instruction": "İki kocaman oval göz, kirpikler ve beyaz parıltılar çiz.",
                "voice": "İki tane kocaman parlak tavşan gözü ve şirin kirpikler ekleyelim.",
                "svg": '<ellipse cx="255" cy="182" rx="12" ry="18" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="257" cy="183" r="7" fill="#0f172a"/><circle cx="254" cy="177" r="3.5" fill="#ffffff"/><ellipse cx="295" cy="182" rx="12" ry="18" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="293" cy="183" r="7" fill="#0f172a"/><circle cx="290" cy="177" r="3.5" fill="#ffffff"/>'
            },
            {
                "title": "5. Adım: Yakadaki Mavi Kurdele Fiyongu",
                "instruction": "Boynunun önüne büyük tatlı bir mavi kurdele fiyongu yap.",
                "voice": "Boynunun önüne çok şık duran mavi kurdele fiyongunu çizelim!",
                "svg": '<circle cx="275" cy="252" r="8" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 268 250 L 245 238 L 245 266 Z M 282 250 L 305 238 L 305 266 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "6. Adım: Turuncu Elbise ve Beyaz Etek Bandı",
                "instruction": "Kurdelenin altına çan şeklinde kabaran şirin turuncu elbiseyi çiz.",
                "voice": "Kurdelenin altına neşeli turuncu elbisesini ve altındaki beyaz şeridi çizelim.",
                "svg": '<path d="M 248 258 L 222 365 C 255 382, 295 382, 328 365 L 302 258" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 228 348 Q 275 365, 322 348" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "7. Adım: Sol Kol ve El Sallayan Eldiven",
                "instruction": "Sol tarafa doğru sevimli kolunu ve el sallayan beyaz eldivenini yap.",
                "voice": "Sol kolunu yana açıp el sallarken çizelim!",
                "svg": '<path d="M 245 270 C 215 282, 195 275, 182 260" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><circle cx="168" cy="248" r="16" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "8. Adım: Sağ Kol ve Cheese'i İşaret Eden El",
                "instruction": "Sağ tarafa doğru uzanan kolunu ve beyaz eldiveni çiz.",
                "voice": "Sağ elini de en iyi dostu Cheese'i gösterir gibi uzatalım.",
                "svg": '<path d="M 305 270 C 335 282, 355 275, 368 265" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><circle cx="382" cy="260" r="16" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "9. Adım: İnce Bacaklar ve Sevimli Turuncu Ayakkabılar",
                "instruction": "Eteğin altından inen iki tavşan bacağını ve sarı-turuncu ayakkabıları yap.",
                "voice": "Altına zıplayan tavşan bacaklarını ve sevimli turuncu-beyaz ayakkabılarını çizelim.",
                "svg": '<path d="M 255 375 L 250 432 M 295 375 L 300 432" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="250" cy="436" rx="14" ry="8" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="300" cy="436" rx="14" ry="8" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 225 442 C 222 470, 248 480, 275 474 C 282 465, 275 442, 250 442 Z" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 295 442 C 282 442, 278 465, 285 474 C 312 480, 338 470, 332 442 Z" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "10. Adım: Uçan Arkadaşı Minik Cheese (Kafa ve Top)",
                "instruction": "Sağ üst tarafa Cream'in minik mavi arkadaşı Chao Cheese'in kafasını ve uçan sarı topunu çiz.",
                "voice": "Şimdi en eğlenceli yer! Sağ tarafa Cream'in minik arkadaşı papyonlu Cheese'i çizelim!",
                "svg": '<path d="M 420 200 C 415 162, 448 152, 460 135 C 472 152, 505 162, 500 200 C 495 225, 425 225, 420 200 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><circle cx="460" cy="115" r="10" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "11. Adım: Cheese'in Gözleri ve Papyonu!",
                "instruction": "Cheese'in yüzüne parlak gözler ve boynuna ünlü kırmızı papyonunu tak.",
                "voice": "Cheese'e parlak minik gözlerini ve çok sevdiği kırmızı papyonunu takalım!",
                "svg": '<circle cx="445" cy="190" r="5" fill="#0f172a"/><circle cx="475" cy="190" r="5" fill="#0f172a"/><path d="M 455 204 Q 460 210, 465 204" stroke="#0f172a" stroke-width="4" fill="none"/><polygon points="460,224 445,216 445,232" fill="none" stroke="#0f172a" stroke-width="5"/><polygon points="460,224 475,216 475,232" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "12. Adım: Cheese'in Tombiş Gövdesi ve Kanatları",
                "instruction": "Altına minik tombul gövdeyi, kanatları ve ayakları ekle.",
                "voice": "Cheese'in tombul minik gövdesini ve uçan sevimli kanatlarını ekleyelim.",
                "svg": '<ellipse cx="460" cy="252" rx="22" ry="26" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 438 245 C 418 232, 412 252, 435 262 M 482 245 C 502 232, 508 252, 485 262" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="448" cy="282" rx="9" ry="7" fill="none" stroke="#0f172a" stroke-width="5"/><ellipse cx="472" cy="282" rx="9" ry="7" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "13. Adım: Minik Ponpon Tavşan Kuyruğu",
                "instruction": "Cream'in eteğinin arkasına yuvarlak pamuk tavşan kuyruğunu ekle.",
                "voice": "Cream'in elbisesinin arkasına pamuk gibi yuvarlak minik tavşan kuyruğunu çizelim.",
                "svg": '<circle cx="225" cy="340" r="12" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "14. Adım: Kulak Ucu Renk Çizgileri",
                "instruction": "Her iki tavşan kulağının ucuna şirin renk ayırma çizgisi çiz.",
                "voice": "Tavşan kulaklarının uçlarına şirin turuncu uç çizgilerini çizelim.",
                "svg": '<path d="M 180 215 Q 202 222, 224 215 M 326 215 Q 348 222, 370 215" stroke="#0f172a" stroke-width="5" fill="none"/>'
            },
            {
                "title": "15. Adım: Zemin Çiçekleri",
                "instruction": "Ayaklarının altına sevimli bahar papatyaları çiz.",
                "voice": "Çimlerin üzerine tatlı bahar çiçekleri konduralım.",
                "svg": '<circle cx="145" cy="465" r="7" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="425" cy="462" r="7" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "16. Adım: Uçan Kalpler",
                "instruction": "İki arkadaşın arasına neşe yıldızı ve kalp çiz.",
                "voice": "İki iyi arkadaşın etrafına mutluluk yıldızları koyalım.",
                "svg": '<path d="M 460 80 L 460 95 M 452 88 L 468 88" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Yeşil Çim Zemini",
                "instruction": "Alt kısma tatlı piknik çimi çizgisini çek.",
                "voice": "Ayaklarının altına yemyeşil çimen tepesini çizelim.",
                "svg": '<path d="M 110 482 Q 300 468, 490 482" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Sıcacık Krem & Turuncu Tavşan!)",
                "instruction": "Tebrikler Kıvanç! Cream'i krem sarısı, turuncu elbisesi ve gök mavisi dostu Cheese ile boya!",
                "voice": "Çok tatlı oldular Kıvanç! Tavşan Cream ve arkadaşı Cheese yan yana parlıyor! Şimdi onları krem sarısı, parlak turuncu ve gök mavisi boyalarınla renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="crmFur" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef3c7"/>
              <stop offset="100%" stop-color="#fde68a"/>
            </linearGradient>
            <linearGradient id="crmDress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fb923c"/>
              <stop offset="100%" stop-color="#ea580c"/>
            </linearGradient>
          </defs>
          <path d="M 110 482 Q 300 468, 490 482 L 490 515 L 110 515 Z" fill="#86efac" stroke="#0f172a" stroke-width="6"/>
          <circle cx="145" cy="465" r="7" fill="#facc15" stroke="#0f172a" stroke-width="4"/>
          <circle cx="425" cy="462" r="7" fill="#f472b6" stroke="#0f172a" stroke-width="4"/>
          <circle cx="225" cy="340" r="12" fill="url(#crmFur)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 255 375 L 250 432 M 295 375 L 300 432" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
          <path d="M 255 375 L 250 432 M 295 375 L 300 432" stroke="#fde68a" stroke-width="7" stroke-linecap="round"/>
          <path d="M 225 442 C 222 470, 248 480, 275 474 C 282 465, 275 442, 250 442 Z" fill="url(#crmDress)" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="250" cy="436" rx="14" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 295 442 C 282 442, 278 465, 285 474 C 312 480, 338 470, 332 442 Z" fill="url(#crmDress)" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="300" cy="436" rx="14" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <path d="M 245 270 C 215 282, 195 275, 182 260" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 245 270 C 215 282, 195 275, 182 260" fill="none" stroke="url(#crmFur)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="168" cy="248" r="16" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 305 270 C 335 282, 355 275, 368 265" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 305 270 C 335 282, 355 275, 368 265" fill="none" stroke="url(#crmFur)" stroke-width="9" stroke-linecap="round"/>
          <circle cx="382" cy="260" r="16" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 248 258 L 222 365 C 255 382, 295 382, 328 365 L 302 258 Z" fill="url(#crmDress)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 228 348 Q 275 365, 322 348 L 328 365 C 295 382, 255 382, 222 365 Z" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 268 250 L 245 238 L 245 266 Z M 282 250 L 305 238 L 305 266 Z" fill="#38bdf8" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <circle cx="275" cy="252" r="8" fill="#0284c7" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="275" cy="195" rx="60" ry="52" fill="url(#crmFur)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 255 148 C 215 110, 170 155, 178 235 C 185 262, 212 262, 222 232 C 228 202, 232 175, 250 158 Z" fill="url(#crmFur)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 180 215 Q 202 222, 224 215 C 212 255, 188 255, 180 215 Z" fill="#f97316" stroke="#0f172a" stroke-width="5"/>
          <path d="M 295 148 C 335 110, 380 155, 372 235 C 365 262, 338 262, 328 232 C 322 202, 318 175, 300 158 Z" fill="url(#crmFur)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 326 215 Q 348 222, 370 215 C 362 255, 338 255, 326 215 Z" fill="#f97316" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="275" cy="212" rx="34" ry="20" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="255" cy="182" rx="12" ry="18" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="257" cy="183" rx="8" ry="12" fill="#d97706"/>
          <circle cx="257" cy="183" r="5" fill="#0f172a"/>
          <circle cx="254" cy="177" r="3" fill="#ffffff"/>
          <ellipse cx="295" cy="182" rx="12" ry="18" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="293" cy="183" rx="8" ry="12" fill="#d97706"/>
          <circle cx="293" cy="183" r="5" fill="#0f172a"/>
          <circle cx="290" cy="177" r="3" fill="#ffffff"/>
          <circle cx="275" cy="204" r="5" fill="#f97316"/>
          <path d="M 262 216 Q 275 228, 288 216" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="460" cy="115" r="10" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <path d="M 438 245 C 418 232, 412 252, 435 262 M 482 245 C 502 232, 508 252, 485 262 Z" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="448" cy="282" rx="9" ry="7" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="472" cy="282" rx="9" ry="7" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="460" cy="252" rx="22" ry="26" fill="#38bdf8" stroke="#0f172a" stroke-width="7"/>
          <polygon points="460,224 445,216 445,232" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
          <polygon points="460,224 475,216 475,232" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
          <path d="M 420 200 C 415 162, 448 152, 460 135 C 472 152, 505 162, 500 200 C 495 225, 425 225, 420 200 Z" fill="#38bdf8" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="445" cy="190" r="5" fill="#0f172a"/>
          <circle cx="444" cy="188" r="1.8" fill="#ffffff"/>
          <circle cx="475" cy="190" r="5" fill="#0f172a"/>
          <circle cx="474" cy="188" r="1.8" fill="#ffffff"/>
          <path d="M 455 204 Q 460 210, 465 204" stroke="#0f172a" stroke-width="4" fill="none"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 3. HAVALI YARASA ROUGE (ROUGE THE BAT)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_rouge",
        "categoryId": "sonic",
        "name": "Yarasa Rouge",
        "emoji": "🦇",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Mücevher avcısı havalı beyaz yarasa Rouge! Büyük yarasa kanatları, pembe kalp zırhı ve elindeki parlayan elmas zümrüt!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, beyaz, koyu mor, şeker pembe ve mavi boyalar",
        "welcomeText": "Çok havalı! Selam Kıvanç! Göklerde süzülen hazine avcısı beyaz yarasa Rouge'u çizmeye hazır mısın? Haydi kanatlarını açalım!",
        "colors": ["#ffffff", "#6366f1", "#ec4899", "#06b6d4"],
        "welcomeAudio": "audio/voices/cirak_sonic_rouge/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Kafa Yuvarlağı ve Dışa Kıvrık Saçlar",
                "instruction": "Sayfanın üst ortasına Rouge'un yuvarlak başını ve iki yana şıkça kıvrılan saç uçlarını çiz.",
                "voice": "Kağıdımızın üst ortasına Yarasa Rouge'un yüzünü ve yanlara havalı şekilde kıvrılan saçlarını çizelim.",
                "svg": '<path d="M 248 180 C 248 130, 352 130, 352 180 L 372 208 L 348 212 C 338 238, 262 238, 252 212 L 228 208 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: İki Kocaman Sivri Yarasa Kulağı",
                "instruction": "Kafasının tepesine yarasalara özgü iki büyük üçgen kulak ve iç kıvrımlarını çiz.",
                "voice": "Yarasa olduğu hemen belli olsun! Tepesine iki kocaman büyük sivri yarasa kulağı yapalım!",
                "svg": '<path d="M 255 152 L 222 72 L 285 134 M 315 134 L 378 72 L 345 152" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 258 142 L 236 92 L 278 134 M 322 134 L 364 92 L 342 142" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Mavi Göz Farlı İri Gözler ve Kirpikler",
                "instruction": "Yüzüne turkuaz farlı göz kemeri, kirpikler ve siyah gözbebeklerini yap.",
                "voice": "Şimdi göz kapaklarına göz farı çizgisi, şık kirpikleri ve parlak gözlerini ekleyelim.",
                "svg": '<ellipse cx="278" cy="182" rx="13" ry="17" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="280" cy="183" r="6.5" fill="#0f172a"/><circle cx="277" cy="179" r="2.5" fill="#ffffff"/><ellipse cx="322" cy="182" rx="13" ry="17" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="320" cy="183" r="6.5" fill="#0f172a"/><circle cx="317" cy="179" r="2.5" fill="#ffffff"/><path d="M 265 170 L 254 162 M 335 170 L 346 162" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "4. Adım: Küçük Burun ve Gülümseyen Dudaklar",
                "instruction": "Ortaya küçük sevimli burun ve neşeli gülümseme çiz.",
                "voice": "Minik burnunu ve kendine güvenen gülümsemesini konduralım.",
                "svg": '<ellipse cx="300" cy="202" rx="6.5" ry="4.5" fill="#0f172a"/><path d="M 288 216 Q 302 226, 314 214" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "5. Adım: Kalp Şekilli Pembe Göğüs Kalkanı ve Kostüm",
                "instruction": "Boynun altına ince gövdesini ve göğsüne Rouge'un ünlü pembe kalp desenini yap!",
                "voice": "İşte Rouge'un şık kostümü! Gövdesinin üstüne ünlü kalp şeklinde yaka desenini çizelim!",
                "svg": '<path d="M 272 238 L 265 360 L 335 360 L 328 238" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 268 258 C 265 242, 290 240, 300 256 C 310 240, 335 242, 332 258 C 330 282, 300 302, 300 302 C 300 302, 270 282, 268 258 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "6. Adım: Dev Sol Yarasa Kanadı",
                "instruction": "Sırtından sola doğru açılan dalgalı yarasa kanadını çiz.",
                "voice": "Sırtından sola doğru açılan büyük mor yarasa kanadını yapalım!",
                "svg": '<path d="M 270 265 C 205 220, 145 215, 110 235 C 125 255, 130 275, 120 295 C 150 285, 175 295, 185 318 C 215 300, 245 305, 268 310" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "7. Adım: Dev Sağ Yarasa Kanadı",
                "instruction": "Sağ tarafa da eşleşen ikinci geniş yarasa kanadını çiz.",
                "voice": "Sağ tarafa da aynı güçte açılan ikinci yarasa kanadını çizelim!",
                "svg": '<path d="M 330 265 C 395 220, 455 215, 490 235 C 475 255, 470 275, 480 295 C 450 285, 425 295, 415 318 C 385 300, 355 305, 332 310" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "8. Adım: Kanat İçi Kemik Çizgileri",
                "instruction": "Her iki kanadın içine ikişer tane yarasa kanat kemiği çizgisi çek.",
                "voice": "Kanatlarının içine zarif yarasa kanadı destek çizgilerini çekelim.",
                "svg": '<line x1="250" y1="265" x2="120" y2="295" stroke="#0f172a" stroke-width="5"/><line x1="255" y1="280" x2="185" y2="318" stroke="#0f172a" stroke-width="5"/><line x1="350" y1="265" x2="480" y2="295" stroke="#0f172a" stroke-width="5"/><line x1="345" y1="280" x2="415" y2="318" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "9. Adım: Belde Duran Sol Kol ve Uzun Eldiven",
                "instruction": "Belinde duran sol kolunu çiz.",
                "voice": "Sol elini beline koymuş havalı duruşunu çizelim.",
                "svg": '<path d="M 268 258 C 235 280, 230 320, 260 335" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><circle cx="265" cy="340" r="14" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "10. Adım: Mücevher Tutan Sağ Kol ve Eldiven",
                "instruction": "Sağ elini değerli bir elması incelerken havaya kaldırmış çiz.",
                "voice": "Sağ kolunu en sevdiği parlak mücevheri havada tutarken çizelim!",
                "svg": '<path d="M 332 258 C 365 265, 395 255, 415 232" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/><circle cx="426" cy="222" r="15" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "11. Adım: Sağ Elindeki Parlayan Kaos Zümrüdü",
                "instruction": "Sağ elinin hemen üstüne kocaman mavi-yeşil bir mücevher çiz.",
                "voice": "Avucunun hemen üzerine göz kamaştıran büyük elmas mücevheri konduralım!",
                "svg": '<polygon points="415,175 438,175 448,188 426,210 405,188" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "12. Adım: İnce Uzun Bacaklar ve Kalpli Çizmeler (Sol)",
                "instruction": "Sol bacağı ve kalp süslü uzun beyaz-pembe çizmesini yap.",
                "voice": "Sol bacağını ve üstü pembe kalp desenli şık uzun çizmesini çizelim.",
                "svg": '<path d="M 280 360 L 268 440" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/><path d="M 245 445 C 240 475, 265 485, 295 478 C 302 468, 292 445, 268 445 Z" fill="none" stroke="#0f172a" stroke-width="8"/><ellipse cx="268" cy="442" rx="14" ry="8" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "13. Adım: Sağ Bacak ve Uzun Çizme",
                "instruction": "Sağ bacağı ve diğer çizmesini tamamla.",
                "voice": "Sağ bacağını ve diğer çizmesini de ekleyelim.",
                "svg": '<path d="M 320 360 L 332 440" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/><path d="M 332 445 C 308 445, 298 468, 305 478 C 335 485, 360 475, 355 445 Z" fill="none" stroke="#0f172a" stroke-width="8"/><ellipse cx="332" cy="442" rx="14" ry="8" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "14. Adım: Çizme Kalp Detayları",
                "instruction": "Çizmelerin üst bileklerine küçük pembe kalpler koy.",
                "voice": "Çizmelerinin uçlarına küçük kalp süslerini konduralım.",
                "svg": '<circle cx="268" cy="462" r="5" fill="#0f172a"/><circle cx="332" cy="462" r="5" fill="#0f172a"/>'
            },
            {
                "title": "15. Adım: Minik Yarasa Kuyruğu",
                "instruction": "Bacakların arkasında küçük sivri kuyruğunu yap.",
                "voice": "Arkada görünen minik yarasa kuyruğu ucunu ekleyelim.",
                "svg": '<path d="M 265 352 L 245 362 L 265 368" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "16. Adım: Elmas Parlama Yıldızları",
                "instruction": "Elmas mücevherin etrafına parlama yıldızları çiz.",
                "voice": "Mücevherin etrafına parıl parıl parlayan yıldız ışıkları çizelim!",
                "svg": '<path d="M 455 152 L 455 168 M 447 160 L 463 160 M 395 162 L 395 174 M 389 168 L 401 168" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Hazine Zemin Çizgisi",
                "instruction": "Çizmelerinin altına zemin çizgisini çek.",
                "voice": "Ayaklarının altına temiz bir zemin çizgisi çekelim.",
                "svg": '<path d="M 190 492 Q 300 482, 410 492" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Koyu Mor Kanatlar & Pembe Kalp!)",
                "instruction": "Tebrikler Kıvanç! Rouge'u kar beyazı tüyler, mor yarasa kanatları ve pembe kalp zırhıyla boya!",
                "voice": "Muhteşem oldu Kıvanç! Hazine avcısı Yarasa Rouge uçuşa hazır! Şimdi onu beyaz tüyleri, pembe kalp kostümü ve parlak elmasıyla boya!",
                "svg": '''
          <defs>
            <linearGradient id="rgWing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#6366f1"/>
              <stop offset="100%" stop-color="#312e81"/>
            </linearGradient>
          </defs>
          <path d="M 190 492 Q 300 482, 410 492" stroke="#cbd5e1" stroke-width="9" stroke-linecap="round"/>
          <path d="M 455 152 L 455 168 M 447 160 L 463 160" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <path d="M 270 265 C 205 220, 145 215, 110 235 C 125 255, 130 275, 120 295 C 150 285, 175 295, 185 318 C 215 300, 245 305, 268 310 Z" fill="url(#rgWing)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 330 265 C 395 220, 455 215, 490 235 C 475 255, 470 275, 480 295 C 450 285, 425 295, 415 318 C 385 300, 355 305, 332 310 Z" fill="url(#rgWing)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 280 360 L 268 440 M 320 360 L 332 440" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/>
          <path d="M 280 360 L 268 440 M 320 360 L 332 440" stroke="#1e293b" stroke-width="8" stroke-linecap="round"/>
          <path d="M 245 445 C 240 475, 265 485, 295 478 C 302 468, 292 445, 268 445 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="268" cy="442" rx="14" ry="8" fill="#ec4899" stroke="#0f172a" stroke-width="6"/>
          <circle cx="268" cy="462" r="5" fill="#ec4899"/>
          <path d="M 332 445 C 308 445, 298 468, 305 478 C 335 485, 360 475, 355 445 Z" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="332" cy="442" rx="14" ry="8" fill="#ec4899" stroke="#0f172a" stroke-width="6"/>
          <circle cx="332" cy="462" r="5" fill="#ec4899"/>
          <path d="M 272 238 L 265 360 L 335 360 L 328 238 Z" fill="#1e293b" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 268 258 C 265 242, 290 240, 300 256 C 310 240, 335 242, 332 258 C 330 282, 300 302, 300 302 C 300 302, 270 282, 268 258 Z" fill="#f472b6" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 268 258 C 235 280, 230 320, 260 335" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 268 258 C 235 280, 230 320, 260 335" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round"/>
          <circle cx="265" cy="340" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 332 258 C 365 265, 395 255, 415 232" fill="none" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
          <path d="M 332 258 C 365 265, 395 255, 415 232" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round"/>
          <circle cx="426" cy="222" r="15" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <polygon points="415,175 438,175 448,188 426,210 405,188" fill="#06b6d4" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 255 152 L 222 72 L 285 134 Z" fill="#ffffff" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 258 142 L 236 92 L 278 134 Z" fill="#fbcfe8" stroke="#0f172a" stroke-width="4"/>
          <path d="M 315 134 L 378 72 L 345 152 Z" fill="#ffffff" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 322 134 L 364 92 L 342 142 Z" fill="#fbcfe8" stroke="#0f172a" stroke-width="4"/>
          <path d="M 248 180 C 248 130, 352 130, 352 180 L 372 208 L 348 212 C 338 238, 262 238, 252 212 L 228 208 Z" fill="#ffffff" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="278" cy="182" rx="13" ry="17" fill="#38bdf8" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="279" cy="185" rx="9" ry="11" fill="#2dd4bf"/>
          <circle cx="280" cy="185" r="5.5" fill="#0f172a"/>
          <circle cx="277" cy="180" r="2.5" fill="#ffffff"/>
          <ellipse cx="322" cy="182" rx="13" ry="17" fill="#38bdf8" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="321" cy="185" rx="9" ry="11" fill="#2dd4bf"/>
          <circle cx="320" cy="185" r="5.5" fill="#0f172a"/>
          <circle cx="317" cy="180" r="2.5" fill="#ffffff"/>
          <ellipse cx="300" cy="202" rx="6.5" ry="4.5" fill="#0f172a"/>
          <path d="M 288 216 Q 302 226, 314 214" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round" fill="none"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 4. DEV ROBOT E-123 OMEGA
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_omega",
        "categoryId": "sonic",
        "name": "Dev Robot Omega",
        "emoji": "🦾",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Shadow ve Rouge'un dev robot arkadaşı E-123 Omega! Devasa omuz zırhları, parlak kırmızı gözleri ve süper pençe kolları!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, kırmızı, sarı, koyu gri ve siyah boyalar",
        "welcomeText": "Sistem aktif! Selam Kıvanç! Dev zırhlı süper robot E-123 Omega göreve hazır! Bu güçlü robotu adım adım çizelim!",
        "colors": ["#ef4444", "#facc15", "#475569", "#0f172a"],
        "welcomeAudio": "audio/voices/cirak_sonic_omega/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Kask Şeklinde Robot Kafası",
                "instruction": "Sayfanın üst ortasına Omega'nın yuvarlak zırhlı başını çiz.",
                "voice": "Kağıdımızın üst ortasına dev robot Omega'nın sağlam zırhlı kafasını çizelim.",
                "svg": '<path d="M 265 180 C 265 130, 335 130, 335 180 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Siyah Ekran Vizörü ve İki Kırmızı Robot Gözü",
                "instruction": "Başın önüne dikdörtgenimsi göz penceresi ve iki parlak kırmızı robot gözü yap.",
                "voice": "Kafanın ortasına karanlık ekran penceresini ve üzerinde yanan iki parlak kırmızı robot gözünü çizelim!",
                "svg": '<rect x="272" y="152" width="56" height="22" rx="4" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="286" cy="163" r="5" fill="#0f172a"/><circle cx="314" cy="163" r="5" fill="#0f172a"/>'
            },
            {
                "title": "3. Adım: Devasa Kırmızı-Sarı Gövde Zırhı",
                "instruction": "Başın altına geniş beşgen şeklinde dev göğüs zırhını çiz.",
                "voice": "Kafasının altına kocaman zırhlı geniş robot gövdesini çizelim!",
                "svg": '<path d="M 235 185 L 365 185 L 348 295 L 252 295 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Göğüsteki Büyük Sarı Zırh Plakası",
                "instruction": "Göğsün ortasına V şeklinde sarı metal göğüs plakasını yerleştir.",
                "voice": "Göğsünün ortasına parlak sarı metal zırh plakasını çizelim.",
                "svg": '<path d="M 255 202 L 345 202 L 328 265 L 272 265 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Dev Sol Omuz Kalkanı",
                "instruction": "Gövdenin sol üstüne küre gibi büyük koruyucu omuz kalkanını çiz.",
                "voice": "İşte Omega'nın heybetli omuzlukları! Sol omzuna devasa zırh kalkanını çizelim!",
                "svg": '<path d="M 235 185 C 180 180, 155 215, 165 262 L 228 262 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>'
            },
            {
                "title": "6. Adım: Dev Sağ Omuz Kalkanı",
                "instruction": "Sağ omzuna da eşleşen büyük omuz kalkanını ekle.",
                "voice": "Sağ omzuna da aynı dev koruyucu kalkanı çizelim!",
                "svg": '<path d="M 365 185 C 420 180, 445 215, 435 262 L 372 262 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>'
            },
            {
                "title": "7. Adım: Omuzdaki Beyaz Omega (Ω) Sembolü",
                "instruction": "Sol omuz kalkanının içine küçük şirin Omega sembolünü çiz.",
                "voice": "Sol omuzluğunun ortasına Omega'nın kendi adını taşıyan sembolünü yapalım!",
                "svg": '<circle cx="198" cy="222" r="14" fill="none" stroke="#0f172a" stroke-width="5"/><line x1="186" y1="236" x2="210" y2="236" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "8. Adım: Dev Sol Kol Silindiri ve 3 Robot Pençesi",
                "instruction": "Sol omzun altından inen kalın kol topunu ve ucundaki üç dev pençeyi çiz.",
                "voice": "Sol omzunun altına dev robot kolunu ve üç büyük metal pençesini çizelim!",
                "svg": '<path d="M 168 262 L 152 335 L 210 342 L 222 262" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 155 340 L 145 372 M 178 342 L 178 378 M 202 342 L 212 372" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "9. Adım: Dev Sağ Kol Silindiri ve 3 Robot Pençesi",
                "instruction": "Sağ tarafa da aynı büyük robot kolunu ve güçlü pençelerini yap.",
                "voice": "Sağ tarafa da aynı güçlü robot kolunu ve üç büyük pençesini çizelim!",
                "svg": '<path d="M 378 262 L 390 342 L 448 335 L 432 262" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 398 342 L 388 372 M 422 342 L 422 378 M 445 340 L 455 372" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "10. Adım: Sağlam Bel Mekanizması",
                "instruction": "Gövdenin altına bacakları bağlayan siyah metal bel parçasını çiz.",
                "voice": "Gövdenin altına bacakları taşıyan güçlü bel eklemini ekleyelim.",
                "svg": '<rect x="262" y="295" width="76" height="30" rx="6" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "11. Adım: Sol Güçlü Bacak Zırhı",
                "instruction": "Belin altından yere doğru inen kalın robot bacağını çiz.",
                "voice": "Belinin sol altından inen zırhlı dev robot bacağını çizelim!",
                "svg": '<path d="M 262 325 L 245 435 L 290 435 L 295 325" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "12. Adım: Sağ Güçlü Bacak Zırhı",
                "instruction": "Sağ tarafa da diğer sağlam robot bacağını yap.",
                "voice": "Sağ tarafa da diğer güçlü zırhlı bacağını ekleyelim.",
                "svg": '<path d="M 305 325 L 310 435 L 355 435 L 338 325" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "13. Adım: Sol Dev Metal Ayak",
                "instruction": "Sol bacağın altına yere ağır basan kırmızı-sarı dev robot ayağını yap.",
                "voice": "Sol ayağına yere sağlamca basan kocaman metal botunu çizelim!",
                "svg": '<path d="M 232 435 L 220 475 L 295 475 L 292 435 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "14. Adım: Sağ Dev Metal Ayak",
                "instruction": "Sağ ayağına da eşleşen dev robot botunu çiz.",
                "voice": "Sağ ayağına da aynı heybetli metal botunu ekleyelim.",
                "svg": '<path d="M 308 435 L 305 475 L 380 475 L 368 435 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "15. Adım: Kol Bandı ve Dize Şerit Çizgileri",
                "instruction": "Kollara sarı metal çizgiler ve bacaklara diz koruması ekle.",
                "voice": "Kol ve diz zırhlarına sarı şerit çizgilerini ekleyelim.",
                "svg": '<line x1="160" y1="295" x2="215" y2="295" stroke="#0f172a" stroke-width="6"/><line x1="385" y1="295" x2="440" y2="295" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "16. Adım: Kırmızı Lazer Kıvılcımları",
                "instruction": "Etrafına yüksek robot enerjisini gösteren kıvılcım çizgileri yap.",
                "voice": "Etrafına süper robot gücünü gösteren enerji çizgileri çizelim.",
                "svg": '<line x1="120" y1="210" x2="145" y2="210" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="455" y1="210" x2="480" y2="210" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Ağır Zemin Çatlak Çizgisi",
                "instruction": "Ağır ayaklarının bastığı zemin çizgisini çek.",
                "voice": "Dev robotun bastığı sağlam metal pist zeminini çizelim.",
                "svg": '<line x1="160" y1="482" x2="440" y2="482" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Ateş Kırmızısı & Sarı Omega!)",
                "instruction": "Tebrikler Kıvanç! Dev robot Omega'yı parlak kırmızı, altın sarısı ve koyu çelik griyle boya!",
                "voice": "İnanılmaz güçlü oldu Kıvanç! Dev robot E-123 Omega göreve hazır! Şimdi onu parlak kırmızı, sarı zırhlar ve koyu çelik griyle boya!",
                "svg": '''
          <defs>
            <linearGradient id="omgRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#991b1b"/>
            </linearGradient>
            <linearGradient id="omgSteel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#94a3b8"/>
              <stop offset="100%" stop-color="#334155"/>
            </linearGradient>
          </defs>
          <line x1="160" y1="482" x2="440" y2="482" stroke="#475569" stroke-width="10" stroke-linecap="round"/>
          <path d="M 262 325 L 245 435 L 290 435 L 295 325 Z" fill="url(#omgSteel)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 305 325 L 310 435 L 355 435 L 338 325 Z" fill="url(#omgSteel)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 232 435 L 220 475 L 295 475 L 292 435 Z" fill="url(#omgRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 308 435 L 305 475 L 380 475 L 368 435 Z" fill="url(#omgRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <rect x="262" y="295" width="76" height="30" rx="6" fill="#1e293b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 168 262 L 152 335 L 210 342 L 222 262 Z" fill="url(#omgSteel)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="160" y1="295" x2="215" y2="295" stroke="#facc15" stroke-width="8"/>
          <path d="M 155 340 L 145 372 M 178 342 L 178 378 M 202 342 L 212 372" stroke="#1e293b" stroke-width="9" stroke-linecap="round"/>
          <path d="M 378 262 L 390 342 L 448 335 L 432 262 Z" fill="url(#omgSteel)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="385" y1="295" x2="440" y2="295" stroke="#facc15" stroke-width="8"/>
          <path d="M 398 342 L 388 372 M 422 342 L 422 378 M 445 340 L 455 372" stroke="#1e293b" stroke-width="9" stroke-linecap="round"/>
          <path d="M 235 185 L 365 185 L 348 295 L 252 295 Z" fill="url(#omgRed)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 255 202 L 345 202 L 328 265 L 272 265 Z" fill="#facc15" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 235 185 C 180 180, 155 215, 165 262 L 228 262 Z" fill="url(#omgRed)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <circle cx="198" cy="222" r="14" fill="none" stroke="#ffffff" stroke-width="5"/>
          <line x1="186" y1="236" x2="210" y2="236" stroke="#ffffff" stroke-width="5"/>
          <path d="M 365 185 C 420 180, 445 215, 435 262 L 372 262 Z" fill="url(#omgRed)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 265 180 C 265 130, 335 130, 335 180 Z" fill="url(#omgRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <rect x="272" y="152" width="56" height="22" rx="4" fill="#0f172a" stroke="#0f172a" stroke-width="5"/>
          <circle cx="286" cy="163" r="5" fill="#ef4444"/>
          <circle cx="314" cy="163" r="5" fill="#ef4444"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 5. TOMBUL KEDİ BİG VE KURBAĞA FROGGY
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_big",
        "categoryId": "sonic",
        "name": "Tombul Kedi Big ve Froggy",
        "emoji": "🐱",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Balık tutmayı çok seven koca yürekli tombul mor kedi Big ve minik yeşil kurbağa dostu Froggy!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, mor, lila, açık yeşil, sarı ve kahverengi boyalar",
        "welcomeText": "Merhaba Kıvanç! Balık tutmayı çok seven kocaman sevimli mor kedi Big ve zıplayan küçük arkadaşı kurbağa Froggy geldi!",
        "colors": ["#8b5cf6", "#c4b5fd", "#22c55e", "#facc15"],
        "welcomeAudio": "audio/voices/cirak_sonic_big/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Koca Sevimli Yuvarlak Kafa",
                "instruction": "Sayfanın üst soluna Big'in kocaman tombiş yuvarlak kafasını çiz.",
                "voice": "Kağıdımızın üst ortasına tombul kedi Big'in kocaman yuvarlak kafasını çizelim.",
                "svg": '<ellipse cx="260" cy="185" rx="68" ry="56" fill="none" stroke="#0f172a" stroke-width="10"/>'
            },
            {
                "title": "2. Adım: İki Büyük Kedi Kulağı",
                "instruction": "Kafasının tepesine geniş üçgen şeklinde iki kulak ekle.",
                "voice": "Kafasının üstüne iki tane büyük sevimli kedi kulağı çizelim.",
                "svg": '<path d="M 210 148 L 195 92 L 245 128 M 275 128 L 325 92 L 310 148" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 212 138 L 204 106 L 236 130 M 284 130 L 316 106 L 308 138" fill="none" stroke="#0f172a" stroke-width="4.5"/>'
            },
            {
                "title": "3. Adım: Yuvarlak Büyük Sarı Gözler",
                "instruction": "Yüzüne Big'in kocaman şaşkın mutlu yuvarlak gözlerini çiz.",
                "voice": "Yüzüne kocaman sevimli yuvarlak gözlerini ve parıltılarını konduralım!",
                "svg": '<circle cx="240" cy="175" r="16" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="242" cy="175" r="7" fill="#0f172a"/><circle cx="239" cy="171" r="3" fill="#ffffff"/><circle cx="280" cy="175" r="16" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="278" cy="175" r="7" fill="#0f172a"/><circle cx="275" cy="171" r="3" fill="#ffffff"/>'
            },
            {
                "title": "4. Adım: Tombiş Beyaz Yanaklar ve Kocaman Gülümseme",
                "instruction": "Alt yüzüne iki yuvarlak yanak, pembe üçgen burun ve neşeli geniş gülümseme çiz.",
                "voice": "Alt yüzüne tatlı yanak yaylarını, minik burnunu ve kocaman mutlu gülümsemesini çizelim.",
                "svg": '<ellipse cx="260" cy="212" rx="44" ry="24" fill="none" stroke="#0f172a" stroke-width="6"/><polygon points="253,196 267,196 260,204" fill="#0f172a"/><path d="M 235 215 Q 260 235, 285 215" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "5. Adım: Kocaman Tombiş Göbek Gövdesi",
                "instruction": "Başın altına kocaman ayı gibi büyük tombul göbeğini yap.",
                "voice": "Başının altına o kocaman sıcacık tombul göbeğini ve yumuşak karın ovalini çizelim!",
                "svg": '<ellipse cx="260" cy="340" rx="92" ry="98" fill="none" stroke="#0f172a" stroke-width="10"/><ellipse cx="260" cy="345" rx="56" ry="64" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "6. Adım: Kahverengi Kemer",
                "instruction": "Kocaman göbeğinin beline tokalı büyük bir kahverengi kemer sar.",
                "voice": "Tombul beline altın tokalı sağlam bir kemer çizelim.",
                "svg": '<path d="M 172 340 Q 260 365, 348 340" stroke="#0f172a" stroke-width="10" fill="none"/><rect x="246" y="340" width="28" height="22" rx="4" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "7. Adım: Sol Kol ve Büyük Pati",
                "instruction": "Sol yanından aşağı sarkan kalın kolunu ve eldivenini ekle.",
                "voice": "Sol tarafına kalın kedi kolunu ve beyaz eldivenini çizelim.",
                "svg": '<path d="M 178 275 C 145 305, 140 345, 158 370" fill="none" stroke="#0f172a" stroke-width="20" stroke-linecap="round"/><circle cx="162" cy="382" r="20" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "8. Adım: Olta Tutan Sağ Kol ve Eldiven",
                "instruction": "Sağ tarafa olta kamışını tutan büyük beyaz eldivenli kolunu çiz.",
                "voice": "Sağ kolunu balık oltasını neşeyle tutar pozda çizelim!",
                "svg": '<path d="M 342 275 C 375 295, 385 320, 380 342" fill="none" stroke="#0f172a" stroke-width="20" stroke-linecap="round"/><circle cx="378" cy="355" r="20" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "9. Adım: Uzun Olta Kamışı ve Misina İpi",
                "instruction": "Elinden yukarıya sağ tarafa doğru uzanan olta kamışını ve aşağı sarkan olta ipini çiz.",
                "voice": "Elinden yukarı doğru uzanan uzun balık oltasını ve ucundan sarkan misinayı çizelim!",
                "svg": '<line x1="365" y1="365" x2="495" y2="215" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><line x1="495" y1="215" x2="495" y2="385" stroke="#0f172a" stroke-width="4" stroke-dasharray="6 4"/>'
            },
            {
                "title": "10. Adım: Big'in Büyük Parmak Arası Sandaletleri",
                "instruction": "Gövdesinin altına iki tane tombul bacak ve kahverengi sandalet ayakları yap.",
                "voice": "Gövdenin altına tombul ayaklarını ve sevimli sandaletlerini çizelim.",
                "svg": '<ellipse cx="215" cy="450" rx="34" ry="20" fill="none" stroke="#0f172a" stroke-width="9"/><ellipse cx="305" cy="450" rx="34" ry="20" fill="none" stroke="#0f172a" stroke-width="9"/>'
            },
            {
                "title": "11. Adım: Kalın Çizgili Kedi Kuyruğu",
                "instruction": "Sol yandan kıvrılıp yukarı çıkan çizgili uzun kedi kuyruğunu yap.",
                "voice": "Sol tarafından yukarı kıvrılan pofuduk uzun kedi kuyruğunu çizelim!",
                "svg": '<path d="M 175 390 C 115 395, 95 340, 118 300 C 132 285, 148 305, 138 325 C 125 350, 145 375, 175 372" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "12. Adım: Küçük Dostu Kurbağa Froggy!",
                "instruction": "Oltanın ucunun altına nilüfer yaprağında oturan minik kurbağa Froggy'yi çiz.",
                "voice": "Şimdi oltanın hemen altına minik yeşil dostu Kurbağa Froggy'yi çizelim!",
                "svg": '<ellipse cx="495" cy="435" rx="28" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="482" cy="410" r="9" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="508" cy="410" r="9" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="482" cy="410" r="3.5" fill="#0f172a"/><circle cx="508" cy="410" r="3.5" fill="#0f172a"/><path d="M 480 438 Q 495 448, 510 438" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "13. Adım: Nilüfer Yaprağı ve Su Dalgası",
                "instruction": "Froggy'nin oturduğu yuvarlak yeşil nilüfer yaprağını yap.",
                "voice": "Froggy'nin üstüne oturduğu büyük nilüfer yaprağını yapalım.",
                "svg": '<ellipse cx="495" cy="465" rx="48" ry="14" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "14. Adım: Alın Çizgileri ve Bıyıklar",
                "instruction": "Big'in alnına tekir kedi çizgilerini ve yanaklarına bıyıklarını ekle.",
                "voice": "Alnına şirin tekir kedi çizgilerini ve yanak bıyıklarını konduralım.",
                "svg": '<path d="M 260 132 L 260 152 M 242 138 L 248 154 M 278 138 L 272 154" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="185" y1="205" x2="215" y2="210" stroke="#0f172a" stroke-width="4.5"/><line x1="305" y1="210" x2="335" y2="205" stroke="#0f172a" stroke-width="4.5"/>'
            },
            {
                "title": "15. Adım: Kuyruk Şerit Desenleri",
                "instruction": "Kuyruğuna tekir şerit halkalarını ekle.",
                "voice": "Kuyruğunun üzerine kedi şerit çizgilerini ekleyelim.",
                "svg": '<line x1="110" y1="335" x2="132" y2="335" stroke="#0f172a" stroke-width="5"/><line x1="115" y1="365" x2="138" y2="358" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "16. Adım: Olta Ucundaki Kırmızı Şamandıra",
                "instruction": "Olta ipinin ucuna sevimli kırmızı-beyaz şamandıra topunu çiz.",
                "voice": "Olta ipinin ucuna sevimli kırmızı-beyaz balık şamandırası yapalım.",
                "svg": '<circle cx="495" cy="382" r="10" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "17. Adım: Göl Kıyısı Çizgisi",
                "instruction": "Ayaklarının altına göl kenarı çizgisi çek.",
                "voice": "En alta huzurlu göl kenarı zemin çizgisini çekelim.",
                "svg": '<path d="M 140 475 Q 260 468, 380 475" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Mor Tekir Big & Yeşil Froggy!)",
                "instruction": "Tebrikler Kıvanç! Tombul Kedi Big'i mor-lila tüyler ve minik kurbağa Froggy'yi yeşil renkle boya!",
                "voice": "Çok huzurlu ve şirin oldu Kıvanç! Tombul Kedi Big ve Froggy balık tutmaya hazır! Şimdi onları parlak mor ve yemyeşil boyalarınla renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="bigPurple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#a78bfa"/>
              <stop offset="60%" stop-color="#8b5cf6"/>
              <stop offset="100%" stop-color="#6d28d9"/>
            </linearGradient>
          </defs>
          <path d="M 140 475 Q 260 468, 380 475" stroke="#86efac" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="495" cy="465" rx="48" ry="14" fill="#22c55e" stroke="#0f172a" stroke-width="7"/>
          <circle cx="482" cy="410" r="9" fill="#86efac" stroke="#0f172a" stroke-width="6"/>
          <circle cx="508" cy="410" r="9" fill="#86efac" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="495" cy="435" rx="28" ry="22" fill="#4ade80" stroke="#0f172a" stroke-width="7"/>
          <circle cx="482" cy="410" r="3.5" fill="#0f172a"/>
          <circle cx="508" cy="410" r="3.5" fill="#0f172a"/>
          <path d="M 480 438 Q 495 448, 510 438" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <line x1="365" y1="365" x2="495" y2="215" stroke="#b45309" stroke-width="8" stroke-linecap="round"/>
          <line x1="495" y1="215" x2="495" y2="385" stroke="#475569" stroke-width="4" stroke-dasharray="6 4"/>
          <circle cx="495" cy="382" r="10" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <path d="M 175 390 C 115 395, 95 340, 118 300 C 132 285, 148 305, 138 325 C 125 350, 145 375, 175 372 Z" fill="url(#bigPurple)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <ellipse cx="215" cy="450" rx="34" ry="20" fill="#92400e" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="305" cy="450" rx="34" ry="20" fill="#92400e" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="260" cy="340" rx="92" ry="98" fill="url(#bigPurple)" stroke="#0f172a" stroke-width="10"/>
          <ellipse cx="260" cy="345" rx="56" ry="64" fill="#fef3c7" stroke="#0f172a" stroke-width="6"/>
          <path d="M 172 340 Q 260 365, 348 340" stroke="#78350f" stroke-width="12" fill="none"/>
          <rect x="246" y="340" width="28" height="22" rx="4" fill="#facc15" stroke="#0f172a" stroke-width="6"/>
          <path d="M 178 275 C 145 305, 140 345, 158 370" fill="none" stroke="#0f172a" stroke-width="22" stroke-linecap="round"/>
          <path d="M 178 275 C 145 305, 140 345, 158 370" fill="none" stroke="url(#bigPurple)" stroke-width="11" stroke-linecap="round"/>
          <circle cx="162" cy="382" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 342 275 C 375 295, 385 320, 380 342" fill="none" stroke="#0f172a" stroke-width="22" stroke-linecap="round"/>
          <path d="M 342 275 C 375 295, 385 320, 380 342" fill="none" stroke="url(#bigPurple)" stroke-width="11" stroke-linecap="round"/>
          <circle cx="378" cy="355" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <path d="M 210 148 L 195 92 L 245 128 Z" fill="url(#bigPurple)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 212 138 L 204 106 L 236 130 Z" fill="#fbcfe8" stroke="#0f172a" stroke-width="4"/>
          <path d="M 275 128 L 325 92 L 310 148 Z" fill="url(#bigPurple)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 284 130 L 316 106 L 308 138 Z" fill="#fbcfe8" stroke="#0f172a" stroke-width="4"/>
          <ellipse cx="260" cy="185" rx="68" ry="56" fill="url(#bigPurple)" stroke="#0f172a" stroke-width="10"/>
          <ellipse cx="260" cy="212" rx="44" ry="24" fill="#fef3c7" stroke="#0f172a" stroke-width="5"/>
          <circle cx="240" cy="175" r="16" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="242" cy="175" r="7" fill="#0f172a"/>
          <circle cx="239" cy="171" r="3" fill="#ffffff"/>
          <circle cx="280" cy="175" r="16" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="278" cy="175" r="7" fill="#0f172a"/>
          <circle cx="275" cy="171" r="3" fill="#ffffff"/>
          <polygon points="253,196 267,196 260,204" fill="#f43f5e" stroke="#0f172a" stroke-width="3"/>
          <path d="M 235 215 Q 260 235, 285 215" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <path d="M 260 132 L 260 152 M 242 138 L 248 154 M 278 138 L 272 154" stroke="#4c1d95" stroke-width="5" stroke-linecap="round"/>
'''
            }
        ]
    }
]
