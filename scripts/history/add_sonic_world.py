# -*- coding: utf-8 -*-
"""
CREATE 'KIRPI SONIC DUNYASI' CATEGORY & ADD 5 SONIC UNIVERSE DRAWINGS
Drawings:
1. cirak_sonic_klasik (Süper Hızlı Kirpi Sonic)
2. cirak_super_sonic (Altın Süper Sonic)
3. cirak_sonic_tails (Uçan Çift Kuyruklu Tails)
4. cirak_sonic_knuckles (Güçlü Kızıl Knuckles)
5. cirak_sonic_shadow (Gölge Kirpi Shadow)

Generates 95 studio-quality Turkish MP3 voice files via edge-tts (tr-TR-EmelNeural).
Updates drawings.js cleanly with 0 blue guidelines and full SVG gradients.
"""

import os
import json
import asyncio
import edge_tts

OUTPUT_DIR = r"C:\Users\osman\OneDrive\Masaüstü\kivanc"
VOICE_NAME = "tr-TR-EmelNeural"
AUDIO_DIR = os.path.join(OUTPUT_DIR, "audio", "voices")
DRAWINGS_JS = os.path.join(OUTPUT_DIR, "drawings.js")

SONIC_DRAWINGS = [
    # =========================================================================
    # 1. SÜPER HIZLI KİRPİ SONİC (KLASİK POZ)
    # =========================================================================
    {
        "id": "cirak_sonic_klasik",
        "categoryId": "sonic",
        "name": "Süper Hızlı Kirpi Sonic",
        "emoji": "🦔",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Dünyanın en hızlı mavi kirpisi Sonic! Arkaya savrulan mavi dikenleri, kırmızı ayakkabıları ve altın yüzüğü!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, parlak mavi, kırmızı, sarı ve ten rengi boyalar",
        "welcomeText": "Vızzz! Selam Kıvanç! Dünyanın en hızlı mavi kirpisi Sonic geldi! Kağıdını ve mavi boyalarını hazırla, altın yüzükleri toplamaya başlıyoruz!",
        "colors": ["#2563eb", "#ef4444", "#facc15", "#fed7aa"],
        "welcomeAudio": "audio/voices/cirak_sonic_klasik/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Yuvarlak Alın ve Baş Tepesi",
                "instruction": "Kağıdın üst ortasına Sonic'in yuvarlak alnını ve baş kavisini çiz.",
                "voice": "Kağıdımızın üst ortasına Sonic'in pürüzsüz yuvarlak alnını ve baş kavisini çizelim.",
                "svg": '<path d="M 240 135 C 290 110, 355 135, 360 200" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: İki Sivri Kirpi Kulağı",
                "instruction": "Başın tepesine iki üçgen şeklinde sivri Sonic kulağı yap.",
                "voice": "Şimdi başının tepesine sesleri çok iyi duyan iki sivri üçgen kirpi kulağı çizelim.",
                "svg": '<path d="M 245 140 L 235 90 L 280 122 M 310 125 L 335 88 L 340 140" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 248 130 L 243 105 L 268 122" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Arkaya Uzanan Üst ve Orta Dikenler",
                "instruction": "Başın arkasından rüzgar gibi geriye uzanan iki büyük mavi dikeni kıvır.",
                "voice": "İşte Sonic'in en havalı yeri! Arkaya doğru rüzgar gibi savrulan iki büyük dikenini çizelim.",
                "svg": '<path d="M 245 135 C 190 125, 145 135, 115 165 C 145 170, 170 175, 195 182" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M 185 180 C 145 190, 115 210, 105 235 C 135 235, 165 228, 195 220" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Alt Baş Dikeni",
                "instruction": "Orta dikenin altına üçüncü kıvrık dikeni ve çene bağlantısını ekle.",
                "voice": "Orta dikenin hemen altına üçüncü kıvrık dikeni çizip kafamızın arkasını kapatalım.",
                "svg": '<path d="M 190 222 C 155 240, 135 260, 135 280 C 165 275, 195 262, 225 250" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Yanak ve Ağız Bölgesi (Şeftali Yüz)",
                "instruction": "Yüzün alt kısmına Sonic'in sevimli ağız ve yanak alanını çiz.",
                "voice": "Yüzünün alt kısmına Sonic'in gülümseyen sevimli yanak ve ağız bölgesini çizelim.",
                "svg": '<path d="M 225 248 C 220 210, 260 205, 300 220 C 335 205, 370 210, 365 245 C 350 278, 250 278, 225 248 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "6. Adım: Sevimli Siyah Burun ve Havalı Gülümseme",
                "instruction": "Burnun ucuna parlak siyah oval bir burun ve yan tarafa havalı bir gülümseme çiz.",
                "voice": "Burnun ucuna parlak siyah bir burun ve yanağına çok havalı bir Sonic gülümsemesi konduralım!",
                "svg": '<ellipse cx="366" cy="216" rx="14" ry="9" fill="#0f172a" transform="rotate(-10 366 216)"/><path d="M 285 245 C 310 262, 340 255, 350 238" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "7. Adım: Bitişik Büyük Göz Kemeri",
                "instruction": "Yüzün üstüne Sonic'in ünlü iki yaylı bitişik göz çerçevesini yap.",
                "voice": "Şimdi Sonic'e has o ünlü bitişik büyük göz kemerini iki kavisle çizelim.",
                "svg": '<path d="M 248 212 C 242 155, 290 142, 305 182 C 320 142, 355 155, 352 212" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "8. Adım: Parlak Yeşil Gözler ve Işıltılar",
                "instruction": "Gözlerin içine uzun oval irisleri, siyah gözbebeklerini ve beyaz parıltıları yerleştir.",
                "voice": "İçine uzun oval gözlerini, siyah gözbebeklerini ve ışıl ışıl beyaz parıltılarını ekleyelim.",
                "svg": '<ellipse cx="288" cy="190" rx="13" ry="20" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="290" cy="190" r="8" fill="#0f172a"/><circle cx="286" cy="183" r="4" fill="#ffffff"/><ellipse cx="332" cy="190" rx="11" ry="19" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="334" cy="190" r="7" fill="#0f172a"/><circle cx="330" cy="183" r="3.5" fill="#ffffff"/>'
            },
            {
                "title": "9. Adım: Gövde ve Oval Karın Deseni",
                "instruction": "Başın altına küçük gövdeyi ve ortasına oval karın çizgisini ekle.",
                "voice": "Başının altına küçük çevik gövdesini ve ortasına oval karın dairesini çizelim.",
                "svg": '<path d="M 255 270 C 240 315, 245 365, 275 375 C 310 375, 325 320, 315 270" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="286" cy="322" rx="22" ry="34" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "10. Adım: Sırt Dikeni ve Minik Kuyruk",
                "instruction": "Gövdenin arkasına bir sırt dikeni ve küçük sivri kirpi kuyruğunu çiz.",
                "voice": "Sırtının arkasına küçük bir sırt dikeni ve minik sivri kirpi kuyruğunu ekleyelim.",
                "svg": '<path d="M 245 295 L 200 310 L 242 325 M 245 345 L 210 365 L 250 368" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "11. Adım: Belde Duran Sol Kol ve Beyaz Yumruk",
                "instruction": "Sola doğru kıvrılan kolunu, bilek manşetini ve yumruk eldivenini çiz.",
                "voice": "Belinde duran havalı sol kolunu, bilek halkasını ve beyaz yumruk eldivenini çizelim.",
                "svg": '<path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="235" cy="348" rx="16" ry="12" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="215" cy="355" r="22" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "12. Adım: İleri İşaret Eden Sağ Kol ve Eldiven",
                "instruction": "Sağa doğru 'Hadi koşalım!' diye işaret eden elini ve büyük eldiveni yap.",
                "voice": "Sağ elini ileriye doğru 'Hadi yarışalım!' der gibi parmağıyla işaret ederken çizelim.",
                "svg": '<path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="415" cy="272" rx="12" ry="18" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 425 260 C 455 245, 480 250, 485 262 C 485 275, 460 275, 445 275 C 460 285, 450 300, 430 295 C 420 290, 420 275, 425 260 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "13. Adım: Sağ Bacak ve Beyaz Çorap Manşeti",
                "instruction": "Sağ tarafa doğru adım atan bacağı ve kıvrımlı çorap bilekliğini çiz.",
                "voice": "Şimdi ileri adım atan sağ bacağını ve pofuduk beyaz çorap bilekliğini yapalım.",
                "svg": '<path d="M 295 372 L 325 435 M 310 368 L 340 430" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="335" cy="436" rx="18" ry="11" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "14. Adım: Kırmızı-Beyaz Şeritli Hızlı Sağ Ayakkabı",
                "instruction": "Sonic'in meşhur beyaz şeritli ve altın tokalı kırmızı koşu ayakkabısını çiz.",
                "voice": "Sonic'in süper hızlı kırmızı ayakkabısını, beyaz şeridini ve yanındaki altın tokasını çizelim!",
                "svg": '<path d="M 320 442 C 315 475, 345 485, 415 480 C 430 475, 430 450, 395 442 C 370 436, 340 436, 320 442 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 345 440 L 385 478 M 365 440 L 405 475" stroke="#0f172a" stroke-width="6"/><rect x="330" y="452" width="14" height="10" rx="2" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "15. Adım: Sol Bacak ve Çorap Manşeti",
                "instruction": "Diğer bacağı ve çorap manşetini yere basarken çiz.",
                "voice": "Sol bacağını ve çorap manşetini de yere sağlamca basarken çizelim.",
                "svg": '<path d="M 265 372 L 245 435 M 280 375 L 260 438" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="252" cy="442" rx="18" ry="11" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "16. Adım: Sol Kırmızı-Beyaz Hızlı Ayakkabı",
                "instruction": "Sol ayakkabıyı ve ortasındaki beyaz hız şeridini tamamla.",
                "voice": "Sol taraftaki hızlı kırmızı ayakkabısını ve beyaz şeridini de ekleyelim.",
                "svg": '<path d="M 235 446 C 230 478, 260 488, 310 484 C 325 478, 320 454, 290 446 C 268 440, 250 440, 235 446 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 255 444 L 285 482" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "17. Adım: Altın Yüzük ve Süper Hız Çizgileri",
                "instruction": "Sağ üst köşeye büyük bir altın yüzük halkası ve arkaya hız çizgileri ekle.",
                "voice": "Sonic'in en sevdiği parlak altın yüzüğü ve arkasına süper ses hızı çizgilerini ekleyelim!",
                "svg": '<circle cx="490" cy="170" r="34" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="490" cy="170" r="20" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 75 300 L 145 300 M 65 335 L 130 335 M 95 475 L 175 475" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Kraliyet Mavisi Sonic!)",
                "instruction": "Tebrikler Kıvanç! Kirpi Sonic'i elektrik mavisi, kırmızı ayakkabıları ve altın yüzüğüyle renklendir!",
                "voice": "Süpersin Kıvanç! Kirpi Sonic koşmaya hazır! Şimdi onu parlak mavi tüyleri, yeşil gözleri ve altın yüzüğüyle ışıl ışıl renklendir!",
                "svg": '''
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
          <path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="url(#sonicPeach)" stroke-width="14" stroke-linecap="round"/>
          <path d="M 250 282 C 225 295, 215 325, 235 340" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
          <circle cx="215" cy="355" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="235" cy="348" rx="16" ry="12" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="url(#sonicPeach)" stroke-width="14" stroke-linecap="round"/>
          <path d="M 315 282 C 350 285, 385 280, 410 272" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
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
'''
            }
        ]
    },

    # =========================================================================
    # 2. ALTIN SÜPER SONİC (SUPER SONIC)
    # =========================================================================
    {
        "id": "cirak_super_sonic",
        "categoryId": "sonic",
        "name": "Altın Süper Sonic",
        "emoji": "⚡",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Kaos Zümrütlerinin gücüyle altın sarısına dönüşen Süper Sonic! Havaya dikilmiş dikenler ve altın enerji aurası!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, parlak sarı, altın, kırmızı ve beyaz boyalar",
        "welcomeText": "İnanılmaz güç! Merhaba Kıvanç! Yedi Kaos Zümrüdü ile Altın Süper Sonic'e dönüşmeye hazır mısın? Gökyüzünde uçan efsane Sonic'i çizelim!",
        "colors": ["#facc15", "#f59e0b", "#ef4444", "#ffffff"],
        "welcomeAudio": "audio/voices/cirak_super_sonic/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Altın Yüz ve Çene Çemberi",
                "instruction": "Sayfanın ortasına hafifçe havada süzülen yüz kavisini çiz.",
                "voice": "Kağıdımızın üst ortasına Süper Sonic'in yuvarlak yüz hatlarını çizelim.",
                "svg": '<path d="M 235 215 C 235 160, 365 160, 365 215" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: Gökyüzüne Dikilmiş İki Altın Kulak",
                "instruction": "Kafanın üstüne iki sivri üçgen kulak kondur.",
                "voice": "Kafanın iki yanına sivri ve dikkatli duran iki altın kulak çizelim.",
                "svg": '<path d="M 240 185 L 220 140 L 265 165 M 360 185 L 380 140 L 335 165" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Yukarı Fırlayan Dev Orta Diken",
                "instruction": "Başın tepesinden gökyüzüne doğru şahlanan en uzun altın dikeni çiz.",
                "voice": "Süper Sonic'in bütün dikenleri havaya kalkar! Tepeden göğe yükselen dev merkez dikenini çizelim.",
                "svg": '<path d="M 275 165 C 275 110, 290 70, 300 45 C 310 70, 325 110, 325 165" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Sol ve Sağ Yukarı Kıvrılan Dikenler",
                "instruction": "Merkez dikenin iki yanından çapraz yukarı açılan güçlü dikenleri ekle.",
                "voice": "Şimdi yanlardan alev gibi yukarı fırlayan ikişer altın diken daha ekleyelim.",
                "svg": '<path d="M 245 170 C 210 130, 175 95, 165 75 C 190 95, 220 120, 255 155" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M 355 170 C 390 130, 425 95, 435 75 C 410 95, 380 120, 345 155" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Yan Dikenler",
                "instruction": "Kulakların altından iki yana doğru savrulan yan dikenleri tamamla.",
                "voice": "Kulakların altından iki yana yayılan enerji yüklü yan dikenlerini de çizelim.",
                "svg": '<path d="M 235 205 C 185 185, 145 185, 125 175 C 155 205, 195 220, 235 225" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 365 205 C 415 185, 455 185, 475 175 C 445 205, 405 220, 365 225" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "6. Adım: Güçlü Şeftali Ağız Bölgesi",
                "instruction": "Yüzün altına geniş gülümseyen ağız kasesini çiz.",
                "voice": "Yüzünün altına Süper Sonic'in kendinden emin ağız ve yanak kavisini çizelim.",
                "svg": '<path d="M 238 220 C 235 198, 280 198, 300 212 C 320 198, 365 198, 362 220 C 355 258, 245 258, 238 220 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "7. Adım: Siyah Oval Burun ve Kararlı Gülüş",
                "instruction": "Ortaya küçük siyah burun ve yana doğru havalı bir gülümseme çiz.",
                "voice": "Tam ortaya parlak siyah burnunu ve cesur gülümseme çizgisini koyalım.",
                "svg": '<ellipse cx="300" cy="215" rx="11" ry="8" fill="#0f172a"/><path d="M 280 235 Q 305 245, 325 232" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "8. Adım: Bitişik Kaş Çizgisi ve Yakut Gözler",
                "instruction": "Kaşlarını güçlüce çatmış göz çerçevesi ve içine parlayan kırmızı gözleri yap.",
                "voice": "Süper Sonic'in yakut kırmızısı parlayan cesur gözlerini ve ışıl ışıl beyaz parlamalarını çizelim!",
                "svg": '<path d="M 245 198 C 250 165, 290 165, 300 185 C 310 165, 350 165, 355 198" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><ellipse cx="275" cy="188" rx="10" ry="15" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="275" cy="188" r="6" fill="#0f172a"/><circle cx="273" cy="184" r="2.5" fill="#ffffff"/><ellipse cx="325" cy="188" rx="10" ry="15" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="325" cy="188" r="6" fill="#0f172a"/><circle cx="323" cy="184" r="2.5" fill="#ffffff"/>'
            },
            {
                "title": "9. Adım: Havada Süzülen Gövde",
                "instruction": "Kafanın altına ince uzun gövde ve ortasına oval karın şeklini çiz.",
                "voice": "Kafanın altına havada süzülen çevik gövdesini ve karın desenini yapalım.",
                "svg": '<path d="M 268 252 L 260 350 C 280 362, 320 362, 340 350 L 332 252" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><ellipse cx="300" cy="305" rx="22" ry="34" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "10. Adım: Kavuşturulmuş veya Açılan Güç Kolları (Sol)",
                "instruction": "Sol kolu aşağıdan güç toplarken yana doğru açarak çiz.",
                "voice": "Sol kolunu etrafa altın enerji saçarak yana doğru güçlü bir şekilde uzatalım.",
                "svg": '<path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="182" cy="340" rx="12" ry="16" fill="none" stroke="#0f172a" stroke-width="7" transform="rotate(-35 182 340)"/>'
            },
            {
                "title": "11. Adım: Sol Yumruk Eldiven",
                "instruction": "Sol kolun ucuna parlayan sıkılı beyaz yumruğu çiz.",
                "voice": "Sol kolun ucuna beyaz süper güç yumruk eldivenini konduralım.",
                "svg": '<circle cx="165" cy="355" r="22" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 155 348 L 175 348 M 155 358 L 175 358" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>'
            },
            {
                "title": "12. Adım: Sağ Güç Kolu ve Yumruk",
                "instruction": "Sağ tarafa da enerjiyle açılan kolu ve beyaz yumruğu çiz.",
                "voice": "Sağ tarafa da aynı heyecanla güç toplayan kolunu ve sıkılı yumruğunu çizelim.",
                "svg": '<path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="418" cy="340" rx="12" ry="16" fill="none" stroke="#0f172a" stroke-width="7" transform="rotate(35 418 340)"/><circle cx="435" cy="355" r="22" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "13. Adım: Havada Bükülü Uçuş Bacağı (Sol)",
                "instruction": "Sol bacağı havada süzülür gibi hafifçe öne bükerek çiz.",
                "voice": "Süper Sonic uçuyor! Sol bacağını havada hafifçe bükülmüş şekilde çizelim.",
                "svg": '<path d="M 272 355 L 250 405 L 275 440" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="275" cy="442" rx="16" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "14. Adım: Sol Kırmızı-Altın Ayakkabı",
                "instruction": "Sol bacağın ucuna kırmızı ayakkabıyı ve altın tokasını ekle.",
                "voice": "Sol ayağına beyaz şeritli kırmızı ayakkabısını ekleyelim.",
                "svg": '<path d="M 260 448 C 245 480, 275 495, 315 485 C 325 475, 315 450, 290 448 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="270" y1="450" x2="295" y2="482" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "15. Adım: Sağ Uzun Uçuş Bacağı ve Ayakkabı",
                "instruction": "Sağ bacağı aşağı doğru süzülürken çiz ve sağ ayakkabıyı tamamla.",
                "voice": "Sağ bacağını aşağıya uzatıp sağ ayakkabısını çizelim.",
                "svg": '<path d="M 328 355 L 345 425" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="348" cy="430" rx="16" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 332 436 C 330 470, 360 480, 405 470 C 415 460, 400 436, 365 436 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "16. Adım: Yedi Yıldızlı Kaos Zümrüdü",
                "instruction": "Etrafına altın enerjisini veren parlayan elmas Kaos Zümrüdünü çiz.",
                "voice": "Yanına ona Süper Sonic gücü veren parıl parıl Kaos Zümrüdünü çizelim!",
                "svg": '<polygon points="100,260 125,280 115,310 85,310 75,280" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/><polygon points="100,268 115,282 108,302 92,302 85,282" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "17. Adım: Süper Altın Enerji Aurası ve Şimşekler",
                "instruction": "Vücudunun etrafına parlayan yıldırım kıvılcımları ve şimşek aurası ekle.",
                "voice": "Etrafına gökyüzünü titreten altın yıldırım kıvılcımları ve enerji parıltıları ekleyelim!",
                "svg": '<path d="M 110 380 L 125 360 L 118 360 L 135 340 M 490 360 L 475 340 L 485 340 L 465 320 M 480 230 L 495 215 M 120 130 L 135 145" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
            },
            {
                "title": "18. Adım: Altın Işık Patlaması ve Canlı Boyama!",
                "instruction": "Tebrikler Kıvanç! Süper Sonic'i güneş gibi altın sarısı ve parlayan zümrüt renklerle canlandır!",
                "voice": "İnanılmaz oldu Kıvanç! Altın Süper Sonic gökyüzünde parlıyor! Şimdi onu altın sarısı, yakut kırmızısı gözleri ve parlak zümrütlerle boya!",
                "svg": '''
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
          <path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="url(#supPeach)" stroke-width="14" stroke-linecap="round"/>
          <path d="M 265 268 C 225 280, 200 310, 185 335" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
          <circle cx="165" cy="355" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="182" cy="340" rx="12" ry="16" fill="#ffffff" stroke="#0f172a" stroke-width="7" transform="rotate(-35 182 340)"/>
          <path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="url(#supPeach)" stroke-width="14" stroke-linecap="round"/>
          <path d="M 335 268 C 375 280, 400 310, 415 335" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
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
'''
            }
        ]
    },

    # =========================================================================
    # 3. SEVİMLİ UÇAN TAİLS (İKİ KUYRUKLU TİLKİ)
    # =========================================================================
    {
        "id": "cirak_sonic_tails",
        "categoryId": "sonic",
        "name": "Uçan Tilki Tails",
        "emoji": "🦊",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Sonic'in en iyi arkadaşı, helikopter gibi dönen iki kabarık kuyruklu dahi tilki Tails! Parlak mavi gözler ve beyaz tüy yaka.",
        "materials": "Resim kağıdı, kurşun kalem, silgi, turuncu, sarı, beyaz ve kırmızı boyalar",
        "welcomeText": "Helikopter gibi uçmaya hazır mısın Kıvanç? Sonic'in en yakın dostu iki kuyruklu sevimli tilki Tails geliyor!",
        "colors": ["#f97316", "#fb923c", "#ffffff", "#3b82f6"],
        "welcomeAudio": "audio/voices/cirak_sonic_tails/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Sevimli Alın ve Kâkül Tutamları",
                "instruction": "Sayfanın üst ortasına yuvarlak baş tepesini ve alnından çıkan 3 sevimli tüy kâkülünü çiz.",
                "voice": "Kağıdımızın üst ortasına Tails'in tatlı alnını ve başındaki üç sevimli saç tutamını çizelim.",
                "svg": '<path d="M 245 170 C 245 120, 355 120, 355 170" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 285 130 L 295 100 L 305 128 M 305 128 L 320 105 L 320 132" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Büyük Tilki Kulakları (Sol ve Sağ)",
                "instruction": "Kafanın iki yanına sevimli üçgen tilki kulaklarını ve iç çizgilerini ekle.",
                "voice": "Şimdi iki yana sevimli büyük tilki kulaklarını ve iç kulak üçgenlerini çizelim.",
                "svg": '<path d="M 248 160 L 210 100 L 275 130 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 245 148 L 224 115 L 265 132 Z" fill="none" stroke="#0f172a" stroke-width="5"/><path d="M 352 160 L 390 100 L 325 130 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 355 148 L 376 115 L 335 132 Z" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "3. Adım: Sivri Tüy Yanakları (Sol ve Sağ)",
                "instruction": "Tails'in yüzünün iki yanında pofuduk tilki tüyü çıkıntıları vardır; yanaklara ikişer tüy çiz.",
                "voice": "Tails'in yanaklarında tatlı tilki tüyü tutamları vardır! İki yana pofuduk yanak tüyleri yapalım.",
                "svg": '<path d="M 245 170 L 220 190 L 235 200 L 218 215 L 245 225" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 355 170 L 380 190 L 365 200 L 382 215 L 355 225" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Beyaz Yanak Çenesi ve Gülümseme",
                "instruction": "Alt yüzü kapatan gülümseyen beyaz çene yayını yap.",
                "voice": "Alt yüzü kapatan tombul beyaz yanak yayını ve tatlı gülümseme çizgisini çizelim.",
                "svg": '<path d="M 245 225 C 255 255, 345 255, 355 225 C 335 210, 310 210, 300 220 C 290 210, 265 210, 245 225 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 285 234 Q 300 245, 315 234" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "5. Adım: Minik Düğme Burun",
                "instruction": "Ortaya küçük, parlak siyah bir tilki burnu koy.",
                "voice": "Yüzün tam ortasına düğme gibi sevimli bir siyah burun konduralım.",
                "svg": '<circle cx="300" cy="218" r="6" fill="#0f172a"/>'
            },
            {
                "title": "6. Adım: Sol Büyük Parlak Mavi Göz",
                "instruction": "Sol tarafa kocaman oval göz, gözbebeği ve parıltılar çiz.",
                "voice": "Sol tarafa kocaman oval gözünü çizip içine ışıl ışıl beyaz parıltılar koyalım.",
                "svg": '<ellipse cx="275" cy="185" rx="16" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="278" cy="187" r="9" fill="#0f172a"/><circle cx="274" cy="180" r="4" fill="#ffffff"/><circle cx="281" cy="191" r="2" fill="#ffffff"/>'
            },
            {
                "title": "7. Adım: Sağ Büyük Parlak Mavi Göz",
                "instruction": "Sağ tarafa da aynı sevimli gözü yerleştir.",
                "voice": "Sağ tarafa da aynı sıcak ve dost canlısı gözü çizelim.",
                "svg": '<ellipse cx="325" cy="185" rx="16" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="322" cy="187" r="9" fill="#0f172a"/><circle cx="318" cy="180" r="4" fill="#ffffff"/><circle cx="325" cy="191" r="2" fill="#ffffff"/>'
            },
            {
                "title": "8. Adım: Pofuduk Beyaz Göğüs Yelesi",
                "instruction": "Boynun altına tüy tüy kabarık göğüs yelesini yap.",
                "voice": "Boynunun altına kabarık bembeyaz göğüs tüylerini puf puf çizelim.",
                "svg": '<path d="M 265 250 C 260 275, 285 285, 300 295 C 315 285, 340 275, 335 250" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "9. Adım: Tombiş Gövde",
                "instruction": "Göğüs yelesinin altına küçük tilki gövdesini indir.",
                "voice": "Göğüs yelesinin altına çevik ve sevimli gövde çizgilerini indirelim.",
                "svg": '<path d="M 268 275 L 265 360 C 280 370, 320 370, 335 360 L 332 275" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "10. Adım: Sol Kol ve El Sallayan Beyaz Eldiven",
                "instruction": "Sola doğru neşeyle el sallayan kolunu ve büyük beyaz eldiveni çiz.",
                "voice": "Sol kolunu havaya kaldırıp bize neşeyle el sallarken çizelim!",
                "svg": '<path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="195" cy="222" rx="14" ry="10" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-30 195 222)"/><circle cx="185" cy="200" r="20" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "11. Adım: Sağ Kol ve Beyaz Yumruk",
                "instruction": "Sağ tarafa dengeleyen sağ kolunu ve yumruk eldiveni yap.",
                "voice": "Sağ kolunu da uçuş dengesini sağlarken yana açarak çizelim.",
                "svg": '<path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="403" cy="336" rx="14" ry="10" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(35 403 336)"/><circle cx="415" cy="355" r="19" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "12. Adım: Sol Bacak ve İki Renkli Ayakkabı",
                "instruction": "Sol bacağı ve burun ucu kırmızı, arkası beyaz olan Tails ayakkabısını çiz.",
                "voice": "Sol bacağını ve yarısı kırmızı yarısı beyaz o ünlü Tails ayakkabısını çizelim.",
                "svg": '<path d="M 278 365 L 270 430" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="268" cy="435" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 240 442 C 235 470, 265 480, 295 476 C 305 466, 295 442, 268 442 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="268" y1="442" x2="268" y2="478" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "13. Adım: Sağ Bacak ve İki Renkli Ayakkabı",
                "instruction": "Sağ bacağı ve ikinci spor ayakkabısını ekle.",
                "voice": "Sağ bacağını ve diğer ayakkabısını da çizelim.",
                "svg": '<path d="M 322 365 L 330 430" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="332" cy="435" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 310 442 C 305 470, 335 480, 365 476 C 375 466, 365 442, 335 442 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="335" y1="442" x2="335" y2="478" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "14. Adım: Birinci Dev Pofuduk Tilki Kuyruğu (Sol)",
                "instruction": "Tails'in arkasından sola doğru açılan kocaman kabarık kuyruğu yap.",
                "voice": "İşte Tails'in en meşhur özelliği! Sola doğru açılan dev gibi kabarık birinci kuyruğunu çizelim!",
                "svg": '<path d="M 268 335 C 180 315, 110 340, 95 400 C 125 430, 195 415, 255 370" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "15. Adım: Birinci Kuyruğun Beyaz Ucu",
                "instruction": "Sol kuyruğun ucuna zigzaglı tüy ayrım çizgisini yap.",
                "voice": "Kuyruğun ucundaki yumuşak beyaz tüy desenini zikzakla ayıralım.",
                "svg": '<path d="M 140 355 L 130 375 L 150 385 L 140 405" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "16. Adım: İkinci Dev Pofuduk Tilki Kuyruğu (Sağ)",
                "instruction": "Sağa doğru uçuş pervanesi gibi açılan ikinci büyük kuyruğu çiz ve ucuna zikzak ekle.",
                "voice": "Şimdi sağ tarafa doğru açılan ikinci muhteşem tilki kuyruğunu ve beyaz ucunu çizelim!",
                "svg": '<path d="M 332 335 C 420 315, 490 340, 505 400 C 475 430, 405 415, 345 370" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M 460 355 L 470 375 L 450 385 L 460 405" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "17. Adım: Helikopter Dönüş Rüzgar Çizgileri",
                "instruction": "Kuyrukların arkasında helikopter gibi döndüğünü gösteren hız halkaları yap.",
                "voice": "Kuyruklarının etrafına fırıl fırıl dönüp uçtuğunu gösteren rüzgar halkaları çizelim!",
                "svg": '<path d="M 80 370 Q 75 400, 95 425 M 520 370 Q 525 400, 505 425" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Sıcacık Tilki Turuncusu!)",
                "instruction": "Tebrikler Kıvanç! Tails'i sıcak portakal turuncusu, kar beyazı kuyruk uçları ve gök mavisi gözlerle boya!",
                "voice": "Harikasın Kıvanç! Uçan sevimli tilki Tails hazır! Şimdi onu sıcacık portakal rengi, beyaz kuyruk uçları ve masmavi gözleriyle boya!",
                "svg": '''
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
          <path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="url(#tailsOrange)" stroke-width="14" stroke-linecap="round"/>
          <path d="M 268 275 C 230 270, 210 250, 200 230" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
          <circle cx="185" cy="200" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="195" cy="222" rx="14" ry="10" fill="#ffffff" stroke="#0f172a" stroke-width="6" transform="rotate(-30 195 222)"/>
          <path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="url(#tailsOrange)" stroke-width="14" stroke-linecap="round"/>
          <path d="M 332 275 C 370 285, 390 310, 400 330" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
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
'''
            }
        ]
    },

    # =========================================================================
    # 4. GÜÇLÜ KNUCKLES (KIZIL EKİDNE)
    # =========================================================================
    {
        "id": "cirak_sonic_knuckles",
        "categoryId": "sonic",
        "name": "Güçlü Kızıl Knuckles",
        "emoji": "🥊",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Kaya gibi güçlü yumruklarıyla Knuckles! Kırmızı örgülü dikenleri, göğsündeki beyaz hilal ve boks eldiveni dikenleri!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, kızıl kırmızı, mor, yeşil ve sarı boyalar",
        "welcomeText": "Gümbür gümbür! Merhaba Kıvanç! Dev yumruklu, süper güçlü kırmızı Knuckles'ı çizmeye hazır mısın? Haydi yumrukları hazırlayalım!",
        "colors": ["#dc2626", "#ef4444", "#ffffff", "#22c55e"],
        "welcomeAudio": "audio/voices/cirak_sonic_knuckles/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Güçlü Baş ve Alın Çizgisi",
                "instruction": "Sayfanın üst ortasına yuvarlak tepe ve kavisli kaş çizgisini yap.",
                "voice": "Kağıdımızın üst ortasına Knuckles'ın güçlü yuvarlak baş tepesini çizelim.",
                "svg": '<path d="M 255 155 C 275 115, 325 115, 345 155" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: İki Yana Sarkan Kalın Kırmızı Örgü Dikenler (Sol)",
                "instruction": "Başın sol yanından omuzlarına doğru dökülen iki kalın sarkık dikeni çiz.",
                "voice": "Knuckles'ın saçları örgü gibi aşağıya sarkar! Sol tarafa kalın ve kıvrımlı dikenlerini çizelim.",
                "svg": '<path d="M 260 140 C 210 140, 185 180, 190 250 C 205 260, 225 250, 235 225 M 205 235 C 195 265, 200 285, 215 290 C 235 280, 240 255, 248 235" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: İki Yana Sarkan Kalın Dikenler (Sağ)",
                "instruction": "Sağ tarafa da aynı güçte aşağıya dökülen iki sarkık diken yap.",
                "voice": "Sağ tarafa da aynı güçlü görünümü veren dökümlü kızıl dikenlerini yapalım.",
                "svg": '<path d="M 340 140 C 390 140, 415 180, 410 250 C 395 260, 375 250, 365 225 M 395 235 C 405 265, 400 285, 385 290 C 365 280, 360 255, 352 235" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Geniş Gülümseyen Ağız Bölgesi",
                "instruction": "Yüzün altına geniş, biraz sivri uçlu şeftali yüz bölgesini çiz.",
                "voice": "Yüzünün alt kısmına geniş ve hafif sivri burunlu ağız bölgesini çizelim.",
                "svg": '<path d="M 248 205 C 250 185, 285 190, 300 202 C 315 190, 350 185, 352 205 C 345 245, 255 245, 248 205 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Siyah Üçgenimsi Burun ve Cesur Ağız",
                "instruction": "Ortaya küçük bir siyah burun ve kararlı bir gülüş kondur.",
                "voice": "Burnunu ve kendine güvenen cesur gülümseme çizgisini koyalım.",
                "svg": '<ellipse cx="300" cy="202" rx="10" ry="7" fill="#0f172a"/><path d="M 282 222 Q 302 228, 320 220" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "6. Adım: Bitişik Kaş Kemeri ve Mor Gözler",
                "instruction": "Çatık güçlü göz kemerini, göz bebeklerini ve beyaz parıltıları çiz.",
                "voice": "Şimdi keskin bakışlı göz çerçevesini, göz bebeklerini ve parıltılarını ekleyelim.",
                "svg": '<path d="M 255 186 C 255 155, 292 155, 300 175 C 308 155, 345 155, 345 186" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><ellipse cx="278" cy="176" rx="9" ry="13" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="278" cy="177" r="5" fill="#0f172a"/><circle cx="276" cy="174" r="2" fill="#ffffff"/><ellipse cx="322" cy="176" rx="9" ry="13" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="322" cy="177" r="5" fill="#0f172a"/><circle cx="320" cy="174" r="2" fill="#ffffff"/>'
            },
            {
                "title": "7. Adım: Güçlü Gövde ve Ünlü Beyaz Hilal Amblemi",
                "instruction": "Gövdeyi çizip göğsün üstüne Knuckles'ın ünlü beyaz ay hilalini yerleştir.",
                "voice": "Gövdesini çizelim ve göğsüne Knuckles'ın meşhur beyaz hilal işaretini konduralım!",
                "svg": '<path d="M 262 242 L 252 355 C 275 370, 325 370, 348 355 L 338 242" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 272 260 C 285 278, 315 278, 328 260 C 315 290, 285 290, 272 260 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "8. Adım: İki Yana Açılan Güçlü Kollar",
                "instruction": "Omuzlardan boks eldivenlerine uzanan kaslı kolları çiz.",
                "voice": "Omuzlarından aşağı doğru hazır duruşta uzanan güçlü kollarını çizelim.",
                "svg": '<path d="M 258 260 L 210 310 M 342 260 L 390 310" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "9. Adım: Dev Sol Boks Eldiveni ve İki Keskin Dikeni",
                "instruction": "Sol eline büyük beyaz eldiven ve ön tarafına iki sivri diken ekle.",
                "voice": "İşte Knuckles'ın ünlü dikenli dev eldiveni! Sol eline büyük eldiveni ve iki sivri yumruk dikenini çizelim!",
                "svg": '<circle cx="185" cy="335" r="28" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 165 352 L 152 372 L 175 362 M 185 362 L 185 382 L 198 362" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "10. Adım: Dev Sağ Boks Eldiveni ve İki Keskin Dikeni",
                "instruction": "Sağ eline de eşleşen büyük beyaz eldiven ve iki diken yap.",
                "voice": "Sağ eline de aynı büyüklükte dev boks eldivenini ve iki sivri dikenini ekleyelim.",
                "svg": '<circle cx="415" cy="335" r="28" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 435 352 L 448 372 L 425 362 M 415 362 L 415 382 L 402 362" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "11. Adım: Sağlam Bacaklar (Sol ve Sağ)",
                "instruction": "Yere sağlam basan iki güçlü bacak çiz.",
                "voice": "Yere kaya gibi sağlam basan güçlü bacaklarını çizelim.",
                "svg": '<path d="M 272 365 L 258 430 M 328 365 L 342 430" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "12. Adım: Kalın Çorap Manşetleri",
                "instruction": "Her iki bacağın bileğine beyaz kalın çorap halkası çiz.",
                "voice": "Ayak bileklerine pofuduk çorap halkalarını konduralım.",
                "svg": '<ellipse cx="255" cy="435" rx="20" ry="11" fill="none" stroke="#0f172a" stroke-width="7"/><ellipse cx="345" cy="435" rx="20" ry="11" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "13. Adım: Ünlü Lego Tasarımlı Sol Ayakkabı",
                "instruction": "Sol ayağa kırmızı, yeşil ve sarı detayları olan büyük Knuckles ayakkabısını çiz.",
                "voice": "Şimdi Knuckles'ın ünlü renkli ayakkabılarını ve üstündeki metal plakasını çizelim.",
                "svg": '<path d="M 225 442 C 215 478, 250 488, 285 485 C 295 475, 288 442, 260 442 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><rect x="238" y="446" width="22" height="12" rx="3" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "14. Adım: Sağ Renkli Ayakkabı ve Plakası",
                "instruction": "Sağ ayağa da aynı sağlam ayakkabıyı ve üst plakasını yap.",
                "voice": "Sağ taraftaki büyük ayakkabısını ve metal plakasını da tamamlayalım.",
                "svg": '<path d="M 340 442 C 312 442, 305 475, 315 485 C 350 488, 385 478, 375 442 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><rect x="340" y="446" width="22" height="12" rx="3" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "15. Adım: Zikzaklı Kuyruk (Arkada)",
                "instruction": "Sağ taraftan bacakların arkasında beliren şimşek zikzaklı ekidne kuyruğunu çiz.",
                "voice": "Arkada kalan zikzaklı sevimli ekidne kuyruğunu da unutmayalım!",
                "svg": '<path d="M 345 340 L 385 320 L 370 345 L 405 335" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "16. Adım: Kırılan Kaya Parçaları",
                "instruction": "Ayaklarının yanına süper yumruk gücüyle çatlamış zemin kayalarını ekle.",
                "voice": "Ayaklarının altına Knuckles'ın gücüyle parçalanan kayaları çizelim!",
                "svg": '<path d="M 140 490 L 180 485 L 220 492 M 380 492 L 420 484 L 460 490" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><polygon points="150,475 165,465 175,478" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "17. Adım: Büyük Ana Zümrüt (Master Emerald) Işıltısı",
                "instruction": "Arka taraftaki havaya parlayan güç çizgilerini ekle.",
                "voice": "Yumrukların yanına güç şoku çizgileri ekleyerek heyecanı artıralım!",
                "svg": '<path d="M 135 330 L 115 315 M 130 350 L 105 350 M 465 330 L 485 315 M 470 350 L 495 350" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Ateş Kızılı Knuckles!)",
                "instruction": "Tebrikler Kıvanç! Knuckles'ı parlak kızıl kırmızı, yeşil-kırmızı ayakkabıları ve beyaz hilaliyle boya!",
                "voice": "Çok güçlü oldu Kıvanç! Knuckles tüm gücüyle karşımızda! Şimdi onu ateş kırmızısı tüyleri ve renkli ayakkabılarıyla canlandır!",
                "svg": '''
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
          <path d="M 258 260 L 210 310" stroke="url(#knuxRed)" stroke-width="16" stroke-linecap="round"/>
          <path d="M 258 260 L 210 310" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>
          <circle cx="185" cy="335" r="28" fill="#ffffff" stroke="#0f172a" stroke-width="9"/>
          <path d="M 165 352 L 152 372 L 175 362 M 185 362 L 185 382 L 198 362" fill="#e2e8f0" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 342 260 L 390 310" stroke="url(#knuxRed)" stroke-width="16" stroke-linecap="round"/>
          <path d="M 342 260 L 390 310" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>
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
'''
            }
        ]
    },

    # =========================================================================
    # 5. GÖLGE KİRPİ SHADOW (SHADOW THE HEDGEHOG)
    # =========================================================================
    {
        "id": "cirak_sonic_shadow",
        "categoryId": "sonic",
        "name": "Gölge Kirpi Shadow",
        "emoji": "🌑",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Siyah ve ateş kırmızısı çizgileriyle karizmatik kirpi Shadow! Ateş püskürten jet kaykay ayakkabıları ve beyaz göğüs tüyü!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, koyu siyah, ateş kırmızısı, turuncu ve beyaz boyalar",
        "welcomeText": "Karanlığın hızı! Selam Kıvanç! Jet ayakkabılarıyla kayan, siyah ve kırmızı çizgili efsane Shadow'u çizmeye hazır mısın?",
        "colors": ["#1e293b", "#ef4444", "#f97316", "#ffffff"],
        "welcomeAudio": "audio/voices/cirak_sonic_shadow/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Alın ve İki Sivri Kulak",
                "instruction": "Kağıdın üst ortasına başın yuvarlak çizgisini ve iki sivri kulak üçgenini çiz.",
                "voice": "Kağıdımızın üst ortasına Shadow'un güçlü baş tepesini ve iki sivri kulağını çizelim.",
                "svg": '<path d="M 240 165 C 260 120, 340 120, 360 165" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 248 155 L 225 100 L 275 130 M 352 155 L 375 100 L 325 130" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Yukarı Kıvrılan Üst Dikenler (Sol ve Sağ)",
                "instruction": "Shadow'un dikenleri yanlara doğru yukarı kıvrılır! İki yana açılan üst dikenleri yap.",
                "voice": "Shadow'un havalı dikenleri kanat gibi yukarı kıvrılır! İki yanından uzanan üst dikenleri çizelim.",
                "svg": '<path d="M 242 150 C 185 130, 145 105, 115 110 C 145 140, 180 165, 225 180" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M 358 150 C 415 130, 455 105, 485 110 C 455 140, 420 165, 375 180" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Alt Dikenler ve Kırmızı Şerit Çizgileri",
                "instruction": "Alt dikenleri çizip her bir dikenin ortasına Shadow'un ünlü kırmızı çizgi sınırlarını ekle.",
                "voice": "Alt dikenlerini çizelim ve içlerine Shadow'un o meşhur ateş kırmızısı şeritlerini ayıralım.",
                "svg": '<path d="M 225 185 C 180 190, 145 190, 120 205 C 155 215, 195 215, 235 215" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 375 185 C 420 190, 455 190, 480 205 C 445 215, 405 215, 365 215" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 145 125 C 175 140, 200 155, 235 162 M 455 125 C 425 140, 400 155, 365 162" stroke="#0f172a" stroke-width="5" fill="none"/>'
            },
            {
                "title": "4. Adım: Şeftali Yüz ve Kararlı Ağız",
                "instruction": "Alt yüzü çizip ortasına ciddi ve havalı Shadow gülüşünü kondur.",
                "voice": "Alt yüz kavisini çizelim ve ortasına karizmatik Shadow gülümsemesini konduralım.",
                "svg": '<path d="M 240 210 C 242 190, 282 190, 300 202 C 318 190, 358 190, 360 210 C 350 250, 250 250, 240 210 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><ellipse cx="300" cy="202" rx="10" ry="7" fill="#0f172a"/><path d="M 285 224 Q 305 232, 322 222" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "5. Adım: Keskin Kaşlı Kırmızı Gözler",
                "instruction": "Shadow'un ünlü kırmızı sürmeli göz kemerini ve içindeki keskin gözleri çiz.",
                "voice": "Şimdi kaşlarını hafifçe çatmış havalı göz çerçevesini, göz bebeklerini ve beyaz parıltılarını çizelim.",
                "svg": '<path d="M 245 192 C 252 162, 290 162, 300 182 C 310 162, 348 162, 355 192" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><ellipse cx="276" cy="182" rx="10" ry="14" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="276" cy="182" r="6" fill="#0f172a"/><circle cx="274" cy="178" r="2.5" fill="#ffffff"/><ellipse cx="324" cy="182" rx="10" ry="14" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="324" cy="182" r="6" fill="#0f172a"/><circle cx="322" cy="178" r="2.5" fill="#ffffff"/>'
            },
            {
                "title": "6. Adım: Göğüsteki Kabarık Beyaz Tüy",
                "instruction": "Boynun altına 3 uçlu kar beyazı kabarık göğüs tüyünü çiz.",
                "voice": "Shadow'un göğsünde pofuduk beyaz bir tüy tutamı bulunur! Üç uçlu kabarık göğüs tüyünü çizelim.",
                "svg": '<path d="M 270 245 C 275 268, 285 262, 300 282 C 315 262, 325 268, 330 245" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "7. Adım: Siyah Gövde",
                "instruction": "Gövde çizgilerini aşağıya doğru tamamla.",
                "voice": "Göğüs tüyünün altına çevik siyah gövdesini indirelim.",
                "svg": '<path d="M 268 255 L 260 355 C 280 368, 320 368, 340 355 L 332 255" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "8. Adım: Altın Bilezikli Sol Kol (Kaykay Pozu)",
                "instruction": "Sola doğru dengeleyen kolunu ve bileğindeki kalın altın hız bileziğini çiz.",
                "voice": "Sol kolunu kayarken denge kurar gibi açalım ve bileğine kalın altın güç bileziğini çizelim.",
                "svg": '<path d="M 265 265 L 205 295" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><rect x="188" y="288" width="16" height="22" rx="4" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-25 196 299)"/>'
            },
            {
                "title": "9. Adım: Sol Beyaz Yumruk Eldiven",
                "instruction": "Sol bileziğin ucuna kırmızı çizgili beyaz eldivenini yap.",
                "voice": "Bileziğin ucuna siyah parmak çizgili beyaz eldivenini konduralım.",
                "svg": '<circle cx="170" cy="312" r="20" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "10. Adım: Altın Bilezikli Sağ Kol ve Yumruk",
                "instruction": "Sağ kolu da güç toplar gibi büküp altın bileziğini ve eldivenini ekle.",
                "voice": "Sağ kolunu da hazır pozisyonda büküp altın güç bileziğini ve eldivenini çizelim.",
                "svg": '<path d="M 335 265 L 395 295" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><rect x="396" y="288" width="16" height="22" rx="4" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(25 404 299)"/><circle cx="430" cy="312" r="20" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "11. Adım: Hızla Kayan Sol Bacak",
                "instruction": "Öne doğru uzanmış kayan bacağı ve altın bilek halkasını çiz.",
                "voice": "Shadow ayakkabılarıyla roket gibi kayar! İleriye uzanan sol bacağını ve bilek halkasını çizelim.",
                "svg": '<path d="M 278 362 L 245 425" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="242" cy="432" rx="18" ry="10" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "12. Adım: Kırmızı-Siyah Jet Ayakkabısı (Sol)",
                "instruction": "Sol ayağa kalın tabanlı havalı jet kaykay botunu yap.",
                "voice": "Sol ayağına özel roket jetli büyük Shadow ayakkabısını çizelim!",
                "svg": '<path d="M 215 440 C 205 475, 240 488, 285 480 C 295 470, 285 440, 250 440 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="220" y1="468" x2="282" y2="465" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "13. Adım: Arkaya Gerilmiş Sağ Bacak",
                "instruction": "Arkaya doğru açılan sağ bacağı ve bilek halkasını çiz.",
                "voice": "Arkadan itme gücü veren sağ bacağını ve bilek halkasını çizelim.",
                "svg": '<path d="M 322 362 L 360 422" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="362" cy="428" rx="18" ry="10" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "14. Adım: Sağ Jet Ayakkabısı",
                "instruction": "Sağ ayağa da yüksek hızlı roket ayakkabısını ekle.",
                "voice": "Sağ ayağına da ateş püskürtmeye hazır diğer jet ayakkabısını çizelim.",
                "svg": '<path d="M 340 436 C 330 472, 365 484, 415 475 C 425 462, 405 436, 370 436 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="342" y1="464" x2="410" y2="462" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "15. Adım: Ayakkabı Altı Roket Alevleri",
                "instruction": "Her iki ayakkabının altından fışkıran hararetli jet alevlerini çiz.",
                "voice": "İşte en havalı kısım! Jet ayakkabılarının altından fışkıran süper ateş dillerini çizelim!",
                "svg": '<path d="M 225 485 L 210 510 L 235 495 L 250 515 L 265 485 M 365 480 L 380 510 L 395 490 L 415 510 L 405 478" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "16. Adım: Kaos Kontrol Enerji Halkası",
                "instruction": "Yana parlayan bir kırmızı-altın kaos enerji halkası ekle.",
                "voice": "Yanına 'Kaos Kontrol' gücünü simgeleyen parıltılı hız çizgileri ekleyelim.",
                "svg": '<circle cx="105" cy="235" r="24" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 105 200 L 105 185 M 105 285 L 105 270 M 70 235 L 55 235 M 155 235 L 140 235" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Kaykay Zemin Çizgisi",
                "instruction": "Alevlerin altından hızla kaydığı gölgeli zemin çizgisini çek.",
                "voice": "Altına roket hızıyla kaydığı pist çizgisini çekelim.",
                "svg": '<path d="M 80 520 Q 300 505, 520 520" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Karanlık Şimşek Shadow!)",
                "instruction": "Tebrikler Kıvanç! Shadow'u simsiyah kürkü, ateş kırmızısı şeritleri ve jet alevleriyle boya!",
                "voice": "Efsane oldu Kıvanç! Gölge kirpi Shadow jet gibi kaymaya hazır! Şimdi onu gece siyahı, ateş kırmızısı ve altın alevlerle renklendir!",
                "svg": '''
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
          <path d="M 265 265 L 205 295" stroke="url(#shadBlack)" stroke-width="14" stroke-linecap="round"/>
          <path d="M 265 265 L 205 295" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
          <circle cx="170" cy="312" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <rect x="188" y="288" width="16" height="22" rx="4" fill="#facc15" stroke="#0f172a" stroke-width="6" transform="rotate(-25 196 299)"/>
          <path d="M 335 265 L 395 295" stroke="url(#shadBlack)" stroke-width="14" stroke-linecap="round"/>
          <path d="M 335 265 L 395 295" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
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
'''
            }
        ]
    }
]

async def generate_voice(text, filepath):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 1000:
        return
    communicator = edge_tts.Communicate(text, VOICE_NAME, rate="+0%", pitch="+0Hz")
    await communicator.save(filepath)

async def main():
    print(f"Generating studio human voices ({VOICE_NAME}) for 5 Kirpi Sonic drawings...")
    total_audio = 0
    for d in SONIC_DRAWINGS:
        d_id = d["id"]
        v_dir = os.path.join(AUDIO_DIR, d_id)
        os.makedirs(v_dir, exist_ok=True)

        # Welcome voice
        w_path = os.path.join(OUTPUT_DIR, d["welcomeAudio"].replace("/", os.sep))
        await generate_voice(d["welcomeText"], w_path)
        total_audio += 1
        print(f"Generated welcome voice for: {d['name']}")

        # Step voices
        for s in d["steps"]:
            s_num = s["title"].split(".")[0]
            s_audio = f"audio/voices/{d_id}/step_{s_num}.mp3"
            s["audio"] = s_audio
            s_path = os.path.join(OUTPUT_DIR, s_audio.replace("/", os.sep))
            await generate_voice(s["voice"], s_path)
            total_audio += 1

        print(f"  -> Generated {len(d['steps'])} step voices for: {d['name']}")

    print(f"\nSuccessfully generated {total_audio} studio-quality MP3 voice files!")

    # Integrate with drawings.js
    with open(DRAWINGS_JS, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Add 'sonic' category right after 'all' in CATEGORIES_DATA
    sonic_cat_json = """  {
    "id": "sonic",
    "name": "Kirpi Sonic Dünyası",
    "emoji": "🦔",
    "count": 5,
    "desc": "Süper hızlı Sonic, Altın Süper Sonic, Tails, Knuckles ve Shadow!"
  },
"""
    if '"id": "sonic"' not in content:
        # Insert right after "all" category object
        all_marker = '  {\r\n    "id": "dinozorlar",'
        all_marker_lf = '  {\n    "id": "dinozorlar",'
        if all_marker in content:
            content = content.replace(all_marker, sonic_cat_json.replace("\n", "\r\n") + all_marker, 1)
        elif all_marker_lf in content:
            content = content.replace(all_marker_lf, sonic_cat_json + all_marker_lf, 1)
        else:
            print("Warning: Could not find dinozorlar marker cleanly, looking for alternative...")
            idx = content.find('"id": "dinozorlar"')
            if idx != -1:
                brace_idx = content.rfind("{", 0, idx)
                content = content[:brace_idx] + sonic_cat_json + content[brace_idx:]

    # 2. Update "all" count from 18 to 23
    content = content.replace('"count": 18', '"count": 23', 1)

    # 3. Check duplicates and serialize new Sonic drawings
    new_drawings_js = ""
    for d in SONIC_DRAWINGS:
        if f'id: "{d["id"]}"' in content or f'id: \'{d["id"]}\'' in content:
            print(f"Drawing {d['id']} already exists, skipping.")
            continue
        new_drawings_js += f"""
  // =========================================================================
  // 🦔 KİRPİ SONİC DÜNYASI: {d['name'].upper()}
  // =========================================================================
  {{
    id: {json.dumps(d['id'])},
    categoryId: {json.dumps(d['categoryId'])},
    name: {json.dumps(d['name'])},
    emoji: {json.dumps(d['emoji'])},
    level: {d['level']},
    levelName: {json.dumps(d['levelName'])},
    levelBadge: {json.dumps(d['levelBadge'])},
    description: {json.dumps(d['description'])},
    materials: {json.dumps(d['materials'])},
    welcomeText: {json.dumps(d['welcomeText'])},
    welcomeAudio: {json.dumps(d['welcomeAudio'])},
    colors: {json.dumps(d['colors'])},
    previewSvg: `{d['steps'][-1]['svg']}`,
    steps: [
"""
        for s in d['steps']:
            new_drawings_js += f"""      {{
        title: {json.dumps(s['title'])},
        instruction: {json.dumps(s['instruction'])},
        voice: {json.dumps(s['voice'])},
        svg: `{s['svg']}`,
        audio: {json.dumps(s['audio'])}
      }},
"""
        new_drawings_js += """    ]
  },
"""

    if new_drawings_js:
        last_bracket_idx = content.rfind("];")
        if last_bracket_idx == -1:
            raise Exception("Could not find closing `];` of DRAWINGS_DATA")
        prefix = content[:last_bracket_idx].rstrip()
        if not prefix.endswith(","):
            prefix += ","
        content = prefix + "\n" + new_drawings_js + content[last_bracket_idx:]

    with open(DRAWINGS_JS, "w", encoding="utf-8") as f:
        f.write(content)

    print("Successfully added Kirpi Sonic category and 5 drawings (total 23 drawings) to drawings.js!")

if __name__ == "__main__":
    asyncio.run(main())
