# -*- coding: utf-8 -*-
"""
Full visual builder & preview generator for:
1) Custom Sega-style Kirpi Sonic Category Icon SVG
2) 8 Brand-New Kirpi Sonic World Drawings (18 crisp steps each, zero blue guidelines)
3) Polished dynamic proportions for existing Super Sonic, Tails, Knuckles, Shadow
Writes an HTML gallery & captures screenshots via headless Chrome so we visually verify every single pixel!
"""

SONIC_CAT_ICON_SVG = '''<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="catSRing" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fef08a"/><stop offset="50%" stop-color="#facc15"/><stop offset="100%" stop-color="#d97706"/></linearGradient><linearGradient id="catSBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#60a5fa"/><stop offset="45%" stop-color="#2563eb"/><stop offset="100%" stop-color="#1e40af"/></linearGradient><linearGradient id="catSPeach" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffedd5"/><stop offset="100%" stop-color="#fdba74"/></linearGradient></defs><circle cx="62" cy="60" r="46" fill="none" stroke="url(#catSRing)" stroke-width="11"/><circle cx="62" cy="60" r="51.5" fill="none" stroke="#0f172a" stroke-width="3.5"/><circle cx="62" cy="60" r="40.5" fill="none" stroke="#0f172a" stroke-width="3.5"/><path d="M 74 34 L 91 13 L 94 40 Z" fill="url(#catSBlue)" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/><path d="M 42 36 C 64 16, 98 28, 98 62 C 98 84, 70 96, 48 84 C 36 92, 22 97, 16 93 C 20 82, 28 74, 36 68 C 22 72, 10 73, 5 67 C 10 56, 22 48, 36 46 C 24 44, 14 41, 8 36 C 18 24, 32 24, 42 36 Z" fill="url(#catSBlue)" stroke="#0f172a" stroke-width="4.8" stroke-linejoin="round"/><path d="M 44 38 L 36 11 L 63 27 Z" fill="url(#catSBlue)" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/><path d="M 46 34 L 41 19 L 57 28 Z" fill="url(#catSPeach)" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/><path d="M 52 67 C 49 36, 73 31, 78 52 C 83 32, 101 38, 97 67 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/><ellipse cx="70" cy="54" rx="6.5" ry="10.5" fill="#22c55e" stroke="#0f172a" stroke-width="2.2"/><ellipse cx="71" cy="54" rx="3.8" ry="6.8" fill="#0f172a"/><circle cx="69" cy="49.5" r="2.2" fill="#ffffff"/><ellipse cx="87" cy="54" rx="5.5" ry="10" fill="#22c55e" stroke="#0f172a" stroke-width="2.2"/><ellipse cx="88" cy="54" rx="3.2" ry="6.4" fill="#0f172a"/><circle cx="86" cy="49.5" r="2" fill="#ffffff"/><path d="M 45 77 C 45 60, 66 60, 77 68 C 87 60, 102 62, 101 77 C 96 96, 56 97, 45 77 Z" fill="url(#catSPeach)" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/><ellipse cx="102" cy="65" rx="7" ry="4.8" fill="#0f172a" transform="rotate(-12 102 65)"/><ellipse cx="101" cy="63.5" rx="2.5" ry="1.2" fill="#ffffff" opacity="0.6" transform="rotate(-12 101 63.5)"/><path d="M 67 80 C 78 88, 89 84, 94 76" fill="none" stroke="#0f172a" stroke-width="3.8" stroke-linecap="round"/></svg>'''

NEW_SONIC_8 = [
    # -------------------------------------------------------------------------
    # 1. SEVİMLİ AMY ROSE & PİKO ÇEKİCİ
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_amy",
        "categoryId": "sonic",
        "name": "Sevimli Amy Rose",
        "emoji": "💖",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Pembe kirpi Amy Rose ve dev Piko-Piko çekici! Kırmızı tacı, elbisesi ve kirpikli kocaman yeşil gözleri!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, pembe, kırmızı, sarı ve yeşil boyalar",
        "welcomeText": "Yaşasın! Selam Kıvanç! Sonic'in neşeli ve cesur arkadaşı pembe kirpi Amy Rose burada! Dev Piko çekiciyle birlikte harika bir Amy çizelim!",
        "colors": ["#f472b6", "#ef4444", "#facc15", "#22c55e"],
        "welcomeAudio": "audio/voices/cirak_sonic_amy/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Yuvarlak Baş ve Kırmızı Taç Çizgisi",
                "instruction": "Kağıdın üst ortasına Amy'nin yuvarlak baş tepesini ve başındaki şık kırmızı tacı çiz.",
                "voice": "Kağıdımızın üst ortasına Amy Rose'un yuvarlak alnını ve saçındaki kırmızı taç bandını çizelim.",
                "svg": '<path d="M 225 180 C 230 115, 340 115, 345 180" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 232 152 Q 285 130, 338 152 M 228 168 Q 285 146, 342 168" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: İki Tatlı Sivri Kulak",
                "instruction": "Tacın üstünden iki yana çıkan sivri pembe kirpi kulaklarını yap.",
                "voice": "Tacın üst kısmına iki sevimli üçgen kirpi kulağı ve iç üçgenlerini çizelim.",
                "svg": '<path d="M 234 150 L 214 82 L 272 124 M 300 124 L 354 82 L 338 150" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 238 138 L 226 102 L 260 124" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Küt Pembe Diken Saçları (Sol ve Sağ)",
                "instruction": "Amy'nin aşağı doğru kıvrılan tatlı pembe saç buklelerini iki yana çiz.",
                "voice": "Amy'nin yanaklarının iki yanından aşağıya yumuşakça kıvrılan pembe saç buklelerini çizelim.",
                "svg": '<path d="M 226 176 C 185 190, 175 235, 198 258 C 215 262, 228 248, 232 232" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M 192 228 C 175 245, 185 272, 208 272 C 222 268, 230 255, 235 245" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 344 176 C 375 192, 380 232, 358 252" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "4. Adım: Sevimli Alın Kâkülleri",
                "instruction": "Alnının tam ortasından gözlerinin üstüne sarkan iki şirin pembe tutamı ekle.",
                "voice": "Alnının ortasından gözlerinin üstüne uzanan iki tatlı saç tutamını ekleyelim.",
                "svg": '<path d="M 268 158 C 268 175, 282 182, 290 172 C 296 184, 312 180, 310 160" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Gülen Ağız Bölgesi ve Küçük Burun",
                "instruction": "Yüzün altına yumuşak ağız yanak bölgesini, minik siyah burnu ve neşeli gülüşü çiz.",
                "voice": "Yüzünün altına güler yüzlü yanak kavisi, minik siyah burun ve mutlu gülümsemesini çizelim.",
                "svg": '<path d="M 232 225 C 232 198, 272 200, 292 214 C 312 200, 352 198, 350 226 C 340 260, 244 260, 232 225 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><ellipse cx="322" cy="212" rx="9" ry="6.5" fill="#0f172a"/><path d="M 278 232 C 296 248, 322 246, 330 230" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>'
            },
            {
                "title": "6. Adım: Büyük Bitişik Göz Kemeri",
                "instruction": "Gözlerin dış çerçevesini çizin ve dış köşelere ikişer tatlı kirpik ekleyin.",
                "voice": "Amy'nin kocaman bitişik göz kemerini çizelim ve yanlarına ikişer zarif kirpik ekleyelim!",
                "svg": '<path d="M 244 208 C 242 162, 284 156, 294 186 C 306 156, 344 162, 342 208" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><path d="M 245 178 L 232 170 M 242 188 L 229 184 M 340 178 L 352 170 M 342 188 L 354 184" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>'
            },
            {
                "title": "7. Adım: Parlak Yeşil Gözler ve Işıltılar",
                "instruction": "Gözlerin içine uzun yeşil irisleri, siyah gözbebeklerini ve parlak beyaz ışıkları koy.",
                "voice": "İçine parlak yeşil göz bebeklerini ve ışıl ışıl beyaz parıltıları konduralım.",
                "svg": '<ellipse cx="278" cy="190" rx="11" ry="17" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="280" cy="190" r="7" fill="#0f172a"/><circle cx="276" cy="184" r="3.5" fill="#ffffff"/><ellipse cx="320" cy="190" rx="10" ry="16" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="322" cy="190" r="6.5" fill="#0f172a"/><circle cx="318" cy="184" r="3" fill="#ffffff"/>'
            },
            {
                "title": "8. Adım: Kırmızı Kolsuz Elbise Üstü ve Yaka",
                "instruction": "Çenenin altına beyaz yakalı sevimli kırmızı elbise gövdesini çiz.",
                "voice": "Şimdi çenesinin altına beyaz yakalı çok şık kırmızı elbisesini çizmeye başlayalım.",
                "svg": '<path d="M 262 256 L 254 318 L 324 318 L 316 256 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 262 256 Q 289 272, 316 256" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "9. Adım: Kabarık Kloş Etek ve Beyaz Şerit",
                "instruction": "Belden aşağıya doğru çan gibi açılan eteği ve altındaki beyaz etek kenarını yap.",
                "voice": "Belinden aşağı doğru zarifçe açılan eteğini ve altındaki beyaz şeridi çizelim.",
                "svg": '<path d="M 254 318 L 228 378 C 265 392, 318 392, 352 378 L 324 318" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><path d="M 234 364 C 268 378, 315 378, 346 364" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "10. Adım: Sol Kol ve Altın Bilezik",
                "instruction": "Sol tarafa doğru çekici tutmaya uzanan kolu ve altın bileziği yap.",
                "voice": "Sol kolunu Piko çekicini tutmak üzere yana uzatalım ve altın bileziğini çizelim.",
                "svg": '<path d="M 256 268 C 228 282, 205 292, 185 282" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="182" cy="282" rx="9" ry="14" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(20 182 282)"/>'
            },
            {
                "title": "11. Adım: Sol Eldiven ve Büyük Piko-Piko Çekici Sapı",
                "instruction": "Sola eldiveni çiz ve içinden yukarı uzanan uzun çekiç sapını çek.",
                "voice": "Eline beyaz eldivenini ve elinde tuttuğu dev Piko-Piko çekicinin uzun sapını çizelim!",
                "svg": '<circle cx="168" cy="278" r="18" fill="none" stroke="#0f172a" stroke-width="8"/><line x1="158" y1="365" x2="178" y2="175" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "12. Adım: Dev Piko-Piko Çekiç Başlığı!",
                "instruction": "Sapın tepesine büyük, silindir şeklinde kırmızı-sarı dev oyuncak çekici çiz.",
                "voice": "Sapın tepesine Amy'nin ünlü kırmızı ve sarı kocaman Piko-Piko çekiç başlığını çizelim!",
                "svg": '<rect x="115" y="122" width="126" height="58" rx="16" fill="none" stroke="#0f172a" stroke-width="9" transform="rotate(6 178 151)"/><line x1="145" y1="120" x2="140" y2="178" stroke="#0f172a" stroke-width="6"/><line x1="210" y1="126" x2="205" y2="184" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "13. Adım: Sağ El Sallayan Kol ve Eldiven",
                "instruction": "Sağ tarafa doğru neşeyle el sallayan kolunu, altın bileziğini ve eldivenini ekle.",
                "voice": "Sağ kolunu da bize neşeyle el sallarken çizelim ve altın bileziğini koyalım.",
                "svg": '<path d="M 322 268 C 355 270, 382 252, 396 232" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="400" cy="226" rx="13" ry="9" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-35 400 226)"/><circle cx="412" cy="208" r="19" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "14. Adım: Sol Bacak ve Şık Kırmızı Çizme",
                "instruction": "Eteğin altından inen sol bacağı, beyaz çorap bileğini ve kırmızı-beyaz çizmeyi çiz.",
                "voice": "Eteğin altından inen zarif sol bacağını ve ortasında beyaz şeridi olan kırmızı çizmesini yapalım.",
                "svg": '<path d="M 270 385 L 265 435" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="264" cy="440" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 235 446 C 232 476, 258 485, 295 480 C 304 472, 294 446, 266 446 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="264" y1="446" x2="264" y2="482" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "15. Adım: Neşeli Sağ Bacak ve Kırmızı Çizme",
                "instruction": "Sağa doğru hafifçe kaldırılmış neşeli diğer bacağı ve çizmeyi yap.",
                "voice": "Sağ bacağını da keyifle adım atar gibi çizelim ve diğer çizmesini ekleyelim.",
                "svg": '<path d="M 310 385 L 328 430" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="330" cy="435" rx="16" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 315 440 C 312 470, 345 482, 382 474 C 390 462, 375 438, 340 438 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="342" y1="439" x2="348" y2="476" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "16. Adım: Sevimli Kalp Süslemeleri",
                "instruction": "Havaya iki tane tatlı kalp simgesi çizerek Amy'nin sevgisini göster.",
                "voice": "Sağ tarafa Amy'nin tatlılığını gösteren iki sevimli kalp simgesi konduralım!",
                "svg": '<path d="M 460 155 C 455 142, 438 142, 438 158 C 438 172, 460 185, 460 185 C 460 185, 482 172, 482 158 C 482 142, 465 142, 460 155 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "17. Adım: Çekiç Işıltıları ve Zemin Çizgisi",
                "instruction": "Çekicin etrafına parıltı yıldızları ve ayakların altına zemin gölgesi çek.",
                "voice": "Çekicin tepesine yıldız parıltıları ve ayaklarının altına yumuşak zemin çizgisi ekleyelim.",
                "svg": '<path d="M 185 95 L 185 112 M 177 104 L 193 104" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><path d="M 190 492 Q 310 482, 420 492" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Şeker Pembe Amy Rose!)",
                "instruction": "Tebrikler Kıvanç! Amy Rose'u şeker pembesi, kırmızı elbisesi ve sarı-kırmızı Piko çekiciyle boya!",
                "voice": "Harikasın Kıvanç! Amy Rose ve dev Piko çekici muhteşem oldu! Şimdi onu şeker pembesi, parlak kırmızı ve altın sarısı boyalarınla renklendir!",
                "svg": '''
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
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 2. ROBOT KİRPİ METAL SONİC
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_metal",
        "categoryId": "sonic",
        "name": "Robot Kirpi Metal Sonic",
        "emoji": "🤖",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Dr. Eggman'ın yaptığı süper hızlı mavi robot kirpi Metal Sonic! Parlayan kırmızı dijital gözler ve göğüs roket türbini!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, metalik lacivert, gri, kırmızı ve sarı boyalar",
        "welcomeText": "Bip bıp! Merhaba Kıvanç! Sonic kadar hızlı uçabilen havalı robot kirpi Metal Sonic'i çizmeye hazır mısın? Haydi robot zırhını çizelim!",
        "colors": ["#1e40af", "#64748b", "#ef4444", "#facc15"],
        "welcomeAudio": "audio/voices/cirak_sonic_metal/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Metal Kask Alnı ve Alın Fin Şeridi",
                "instruction": "Sayfanın üst ortasına keskin robot kask alnını ve ortadaki metal alın şeridini çiz.",
                "voice": "Kağıdımızın üst ortasına Metal Sonic'in keskin robot kaskını ve ortasındaki alın şeridini çizelim.",
                "svg": '<path d="M 240 135 C 290 112, 352 135, 355 192" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 285 124 L 305 162 L 320 128" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Sivri Metal Robot Kulakları",
                "instruction": "Kafanın üstüne üçgen şeklinde iki keskin metal robot kulağı ekle.",
                "voice": "Şimdi kaskın tepesine sivri ve köşeli iki metal robot kulağı çizelim.",
                "svg": '<path d="M 242 142 L 228 86 L 278 124 M 310 124 L 342 88 L 336 142" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Arkaya Uzanan Keskin Metal Dikenler",
                "instruction": "Başın arkasından rüzgarı yaran 3 tane keskin zırhlı robot dikeni çiz.",
                "voice": "Başının arkasından geriye doğru bıçak gibi uzanan üç keskin metal dikenini çizelim.",
                "svg": '<path d="M 240 135 L 118 158 L 195 178 L 105 222 L 192 218 L 135 268 L 225 245" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Metalik Gümüş Yüz Maskesi ve Burun",
                "instruction": "Alt yüzü kapatan gümüş çene plakasını ve sivri robot burnunu yap.",
                "voice": "Alt yüzü kapatan parlak gümüş metal yüz plakasını ve sivri robot burnunu çizelim.",
                "svg": '<path d="M 225 242 L 245 208 L 355 210 L 368 228 L 328 265 L 250 264 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 355 210 L 378 214 L 365 228" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Siyah Ekran Vizörü ve Parlayan Kırmızı Gözler",
                "instruction": "Göz boşluğunun içine kızıl LED ışık saçan iki robot gözünü ekle.",
                "voice": "Kaskın içine siyah ekranı ve üzerinde yanan parlak kırmızı dijital robot gözlerini yapalım!",
                "svg": '<path d="M 245 208 C 245 160, 348 160, 348 208" fill="none" stroke="#0f172a" stroke-width="8"/><polygon points="274,198 296,178 294,202" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/><polygon points="318,198 338,178 335,202" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "6. Adım: Yanak Yanındaki Metal Kanatçıklar",
                "instruction": "Yanağının kenarına aerodinamik metal kanatçık çizgisi çek.",
                "voice": "Yanağının yanına hızlı uçuş için metal yanak kanatçığını çizelim.",
                "svg": '<polygon points="220,218 250,215 245,235 215,245" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "7. Adım: Zırhlı Robot Gövdesi",
                "instruction": "Başın altına daralan güçlü robot zırh gövdesini çiz.",
                "voice": "Başın altına daralan sağlam mavi metal robot gövdesini çizelim.",
                "svg": '<path d="M 255 264 L 245 352 C 275 372, 315 372, 325 352 L 320 264" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "8. Adım: Göğüsteki Jet Türbin Motoru (Reaktör)",
                "instruction": "Göğsün ortasına büyük bir daire ve içine sarı enerji türbini çiz.",
                "voice": "İşte Metal Sonic'in güç kaynağı! Göğsüne yuvarlak enerji türbinini çizelim!",
                "svg": '<circle cx="288" cy="312" r="24" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="288" cy="312" r="10" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "9. Adım: Sırtındaki Sırt Roketi ve Alevleri",
                "instruction": "Sırtının arkasına uçmasını sağlayan roket motoru ve alevleri ekle.",
                "voice": "Sırtının arkasına jet hızıyla uçmasını sağlayan sırt roketini ve alevini çizelim.",
                "svg": '<path d="M 248 278 L 210 290 L 215 322 L 246 318" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><path d="M 210 295 L 170 305 L 195 312 L 175 322 L 212 318" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "10. Adım: Metal Boğumlu Sol Kol ve Pençeler",
                "instruction": "Sol tarafa boğumlu metal robot kolunu ve 3 keskin robot pençesini çiz.",
                "voice": "Sol tarafına metal boğumlu robot kolunu ve sivri robot pençelerini çizelim.",
                "svg": '<path d="M 252 278 C 228 292, 222 325, 240 342" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><circle cx="235" cy="355" r="17" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 222 365 L 210 382 M 234 370 L 228 388 M 246 368 L 246 385" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>'
            },
            {
                "title": "11. Adım: İleri Uzanan Metal Sağ Kol ve Pençe",
                "instruction": "Sağ tarafa ileri uzanan boğumlu kolu, bilek halkasını ve metal pençeleri ekle.",
                "voice": "Sağ tarafa ileri uzanan güçlü metal kolunu ve sivri pençelerini ekleyelim.",
                "svg": '<path d="M 320 278 C 352 280, 385 275, 412 268" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><circle cx="426" cy="268" r="17" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 440 258 L 462 252 M 443 268 L 466 268 M 440 278 L 460 284" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>'
            },
            {
                "title": "12. Adım: Sağ Metal Bacak ve Kırmızı Robot Ayakkabısı",
                "instruction": "İleri uzanmış gümüş bacağı ve sivri uçlu kırmızı robot botunu çiz.",
                "voice": "Öne uzanan metal robot bacağını ve hız şeritli kırmızı robot ayakkabısını çizelim.",
                "svg": '<path d="M 298 368 L 325 430" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 315 436 C 312 470, 345 482, 412 475 C 425 466, 418 442, 385 436 C 362 432, 335 432, 315 436 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="342" y1="435" x2="378" y2="474" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "13. Adım: Sol Metal Bacak ve Robot Ayakkabısı",
                "instruction": "Diğer metal bacağı ve sol robot botunu ekle.",
                "voice": "Sol taraftaki metal bacağını ve diğer robot ayakkabısını da tamamlayalım.",
                "svg": '<path d="M 268 368 L 245 435" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 225 442 C 222 475, 252 485, 302 478 C 312 468, 304 444, 275 440 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="248" y1="442" x2="275" y2="478" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "14. Adım: Eklem Vidaları ve Zırh Çizgileri",
                "instruction": "Kol ve bacak eklemlerine robot vida yuvarlakları ekle.",
                "voice": "Eklem yerlerine robotumuzun metal eklem halkalarını ekleyelim.",
                "svg": '<circle cx="288" cy="312" r="24" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="372" cy="276" r="6" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="312" cy="400" r="6" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="256" cy="402" r="6" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "15. Adım: Elektrik Şimşek Kıvılcımları",
                "instruction": "Metal Sonic'in etrafına yüksek voltajlı zikzak şimşek çizgileri çiz.",
                "voice": "Robotumuzun etrafına süper hızından çıkan elektrik şimşekleri çizelim!",
                "svg": '<path d="M 470 155 L 455 175 L 470 175 L 452 198 M 115 390 L 132 375 L 122 372 L 140 355" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
            },
            {
                "title": "16. Adım: Omuz Zırh Plakaları",
                "instruction": "Omuzların üstüne koruyucu robot omuzlukları yerleştir.",
                "voice": "Omuzlarına havalı kırmızı-lacivert zırh korumalarını ekleyelim.",
                "svg": '<ellipse cx="255" cy="272" rx="14" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="320" cy="272" rx="14" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "17. Adım: Uçuş Hız Çizgileri ve Zemin",
                "instruction": "Arkaya doğru süzülen jet çizgilerini çek.",
                "voice": "Arkasına süper hızla uçtuğunu gösteren metalik hız çizgilerini çekelim.",
                "svg": '<line x1="75" y1="295" x2="150" y2="295" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="85" y1="340" x2="170" y2="340" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Krom Lacivert Metal Sonic!)",
                "instruction": "Tebrikler Kıvanç! Metal Sonic'i parlak metalik lacivert, gümüş gri ve yanan kırmızı LED gözlerle renklendir!",
                "voice": "Muhteşem oldu Kıvanç! Robot kirpi Metal Sonic uçuşa hazır! Şimdi onu metalik lacivert, parlak gümüş ve yanan kırmızı gözleriyle boya!",
                "svg": '''
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
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 3. GÜMÜŞ KİRPİ SİLVER (TELEKİNETİK KAHRAMAN)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_silver",
        "categoryId": "sonic",
        "name": "Gümüş Kirpi Silver",
        "emoji": "🤍",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Gelecekten gelen gümüş kirpi Silver! Alnındaki 5 sivri taç dikeni, kabarık beyaz göğüs kürkü ve turkuaz psişik enerjisi!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, gümüş gri, turkuaz, altın sarısı ve koyu lacivert boyalar",
        "welcomeText": "Süper güçler! Merhaba Kıvanç! Düşünce gücüyle eşyaları uçurabilen havalı gümüş kirpi Silver'ı çizmeye hazır mısın? Haydi başlayalım!",
        "colors": ["#e2e8f0", "#06b6d4", "#f59e0b", "#0f766e"],
        "welcomeAudio": "audio/voices/cirak_sonic_silver/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Baş ve Çene Kavisi",
                "instruction": "Sayfanın üst ortasına Silver'ın yuvarlak kafa çizgisini yap.",
                "voice": "Kağıdımızın üst ortasına gümüş kirpi Silver'ın yuvarlak kafa hattını çizelim.",
                "svg": '<path d="M 240 205 C 240 148, 352 148, 355 205" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: Alından Çıkan 2 Büyük Ön Taç Dikeni",
                "instruction": "Silver'ın alnından iki yana yaprak gibi fırlayan ünlü büyük dikenlerini çiz.",
                "voice": "Silver'ın alnında çok havalı yıldız şeklinde dikenler vardır! İki yana açılan büyük ön dikenlerini çizelim.",
                "svg": '<path d="M 285 162 C 250 135, 200 105, 168 100 C 195 130, 225 150, 252 175 M 310 162 C 345 135, 395 105, 425 100 C 398 130, 368 150, 342 175" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Yukarı Yükselen 3 Orta Diken ve Kulaklar",
                "instruction": "İki dikenin tam arasına yukarı bakan 3 taç dikeni ve iki kulak üçgeni çiz.",
                "voice": "Ortasına yukarı bakan üç taç dikeni ve iki yanına sivri gümüş kulaklarını ekleyelim.",
                "svg": '<path d="M 272 150 L 252 75 L 292 135 L 302 58 L 315 135 L 350 82 L 328 152" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 236 168 L 210 135 L 250 148 M 355 168 L 382 135 L 342 148" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Alt Gümüş Yanak ve Arka Dikenler",
                "instruction": "Başın yanlarından arkaya taşan yumuşak gümüş dikenleri tamamla.",
                "voice": "Yanlardan arkaya doğru kıvrılan gümüş dikenlerini çizip başını tamamlayalım.",
                "svg": '<path d="M 235 198 C 195 192, 165 202, 152 218 C 180 225, 212 222, 238 220 M 355 198 C 395 192, 425 202, 438 218 C 410 225, 378 222, 352 220" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Şeftali Yüz ve Özgüvenli Gülümseme",
                "instruction": "Alt yüzü kapatan yanak yayını, siyah burnu ve havalı gülüşü çiz.",
                "voice": "Alt yüzüne gülümseyen şeftali yanak bölgesini, minik burnu ve kararlı gülüşünü çizelim.",
                "svg": '<path d="M 240 215 C 242 195, 282 198, 298 210 C 315 198, 354 195, 354 218 C 344 252, 250 252, 240 215 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><ellipse cx="320" cy="208" rx="9" ry="6.5" fill="#0f172a"/><path d="M 280 230 Q 305 240, 326 226" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/>'
            },
            {
                "title": "6. Adım: Bitişik Göz Kemeri ve Altın Gözler",
                "instruction": "Silver'ın keskin göz çerçevesini ve içine parlayan altın-kehribar gözlerini ekle.",
                "voice": "Göz çerçevesini ve içine ışıl ışıl altın rengi parlayan keskin gözlerini yapalım.",
                "svg": '<path d="M 248 202 C 250 165, 290 165, 298 186 C 306 165, 346 165, 346 202" fill="none" stroke="#0f172a" stroke-width="8"/><ellipse cx="278" cy="188" rx="10" ry="15" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="279" cy="188" r="6" fill="#0f172a"/><circle cx="276" cy="183" r="2.5" fill="#ffffff"/><ellipse cx="322" cy="188" rx="9" ry="14" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="323" cy="188" r="5.5" fill="#0f172a"/><circle cx="320" cy="183" r="2" fill="#ffffff"/>'
            },
            {
                "title": "7. Adım: Pofuduk Kar Beyazı Göğüs Kürkü",
                "instruction": "Boynun altına Silver'ın meşhur kabarık tüy yakasını zikzaklarla çiz.",
                "voice": "İşte Silver'ın imza detayı! Göğsüne pamuk gibi kabarık beyaz tüy yakasını çizelim.",
                "svg": '<path d="M 255 242 C 250 265, 268 275, 280 288 C 292 298, 305 298, 315 288 C 328 275, 342 265, 338 242" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "8. Adım: Zarif Havada Süzülen Gövde",
                "instruction": "Göğüs tüyünün altına çevik gümüş gövdesini çiz.",
                "voice": "Göğüs kürkünün altına havada süzülen çevik gümüş gövdesini yapalım.",
                "svg": '<path d="M 265 272 C 252 315, 258 358, 296 364 C 330 358, 336 315, 325 272" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "9. Adım: İleri Uzanan Telekinetik Sağ Kol ve Eldiven",
                "instruction": "Sağ tarafa zihin gücü kullanırken açtığı elini ve altın bilezik halkasını çiz.",
                "voice": "Sağ kolunu psişik güç kullanırken ileriye doğru açalım ve altın bileziğini çizelim.",
                "svg": '<path d="M 326 276 C 362 282, 395 275, 422 262" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="426" cy="260" rx="10" ry="15" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-15 426 260)"/><path d="M 435 248 C 460 232, 480 245, 472 265 C 482 275, 472 292, 452 285 L 434 272 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "10. Adım: Elden Çıkan Turkuaz Psişik Enerji Halkaları",
                "instruction": "Avucunun ortasına yuvarlak enerji işareti ve etrafına dalgalanan psişik aura çiz.",
                "voice": "Eldiveninin ortasına güç sembolünü ve etrafına parlayan turkuaz psişik dalgaları çizelim!",
                "svg": '<circle cx="452" cy="265" r="7" fill="none" stroke="#0f172a" stroke-width="4.5"/><circle cx="495" cy="245" r="24" fill="none" stroke="#0f172a" stroke-width="5" stroke-dasharray="10 6"/><circle cx="495" cy="245" r="38" fill="none" stroke="#0f172a" stroke-width="4" stroke-dasharray="12 8"/>'
            },
            {
                "title": "11. Adım: Havada Duran Sol Kol ve Eldiven",
                "instruction": "Sola doğru süzülen sol kolunu, bilek halkasını ve açık eldivenini ekle.",
                "voice": "Sol kolunu da uçuş dengesi için yana doğru açalım.",
                "svg": '<path d="M 262 276 C 232 292, 212 318, 200 335" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="195" cy="340" rx="14" ry="10" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-40 195 340)"/><circle cx="178" cy="356" r="18" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "12. Adım: Bükülü Uçan Sağ Bacak ve Bilek Halkası",
                "instruction": "Havada hafifçe bükülü duran sağ bacağını ve altın bilekliğini çiz.",
                "voice": "Sağ bacağını havada süzülür gibi hafifçe kıvırıp bilek halkasını ekleyelim.",
                "svg": '<path d="M 312 358 C 325 390, 345 415, 348 438" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="348" cy="442" rx="18" ry="10" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "13. Adım: Geleceğin Havalı Sağ Botu",
                "instruction": "Bileğin altına turkuaz ve altın şeritli fütüristik sağ botunu çiz.",
                "voice": "Sağ ayağına fütüristik yeşil-mavi şeritli Silver ayakkabısını çizelim.",
                "svg": '<path d="M 332 448 C 328 478, 358 488, 412 480 C 425 470, 415 446, 378 446 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="358" y1="448" x2="358" y2="482" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "14. Adım: Uzun Sol Bacak ve Botu",
                "instruction": "Aşağı doğru süzülen sol bacağı ve sol Silver botunu ekle.",
                "voice": "Sol bacağını ve diğer havalı botunu da tamamlayalım.",
                "svg": '<path d="M 278 360 L 258 432" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><ellipse cx="256" cy="438" rx="18" ry="10" fill="none" stroke="#0f172a" stroke-width="7"/><path d="M 225 446 C 222 478, 252 488, 302 482 C 312 470, 302 446, 275 444 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/><line x1="258" y1="446" x2="258" y2="482" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "15. Adım: Telekinezi ile Uçan Kayalar",
                "instruction": "Silver'ın düşünce gücüyle havada uçurduğu küçük taşları sağa çiz.",
                "voice": "Silver zihin gücüyle taşları uçurur! Sağ tarafa havada süzülen minik kayalar çizelim.",
                "svg": '<polygon points="485,180 508,172 518,192 496,200" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/><polygon points="520,295 542,288 548,308 528,312" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "16. Adım: Sivri Kuyruk",
                "instruction": "Arka taraftan çıkan kısa sivri gümüş kirpi kuyruğunu yap.",
                "voice": "Arkadaki kısa sivri kirpi kuyruğunu da ekleyelim.",
                "svg": '<path d="M 258 338 L 222 346 L 255 358" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>'
            },
            {
                "title": "17. Adım: Parlayan Psişik Işıltılar",
                "instruction": "Etrafına yıldız şeklinde parlayan telekinetik ışıklar yerleştir.",
                "voice": "Etrafına parıl parıl parlayan dört köşeli güç yıldızları konduralım.",
                "svg": '<path d="M 480 355 L 480 375 M 470 365 L 490 365 M 140 275 L 140 292 M 131 283 L 149 283" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Parlak Gümüş ve Turkuaz Güç!)",
                "instruction": "Tebrikler Kıvanç! Silver'ı kar beyazı-gümüş tüyler ve ışıl ışıl turkuaz psişik enerjiyle renklendir!",
                "voice": "Harikasın Kıvanç! Gümüş kirpi Silver geleceği kurtarmaya hazır! Şimdi onu parlak gümüş, altın gözler ve ışıldayan turkuaz enerjisiyle boya!",
                "svg": '''
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
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 4. KOMİK KÖTÜ DOKTOR EGGMAN (ROBOTNİK)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_eggman",
        "categoryId": "sonic",
        "name": "Komik Doktor Eggman",
        "emoji": "🥚",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Sonic'in komik kötü dahisi Doktor Eggman! Yumurta gibi gövdesi, dev bıyıkları, mavi gözlükleri ve kırmızı ceketi!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, kırmızı, sarı, kahverengi, mavi ve ten rengi boyalar",
        "welcomeText": "Haha haha! Selam Kıvanç! Dünyanın en komik kötüsü, yumurta vücutlu ve dev bıyıklı Doktor Eggman geldi! Bıyıklarını çizmeye hazır mısın?",
        "colors": ["#ef4444", "#facc15", "#78350f", "#38bdf8"],
        "welcomeAudio": "audio/voices/cirak_sonic_eggman/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Parlak Kel Yumurta Kafa",
                "instruction": "Sayfanın üst ortasına Doktor Eggman'ın yuvarlak kel kafa çemberini çiz.",
                "voice": "Kağıdımızın üst ortasına Doktor Eggman'ın parlak yuvarlak başını çizelim.",
                "svg": '<ellipse cx="300" cy="175" rx="46" ry="44" fill="none" stroke="#0f172a" stroke-width="9"/>'
            },
            {
                "title": "2. Adım: Alın Üzeri Pilot Gözlükleri (Koruma Gözlüğü)",
                "instruction": "Alnına takılı duran yeşil camlı iki küçük oval koruma gözlüğünü yap.",
                "voice": "Alnına takılı duran o havalı iki küçük oval pilot gözlüğünü çizelim.",
                "svg": '<ellipse cx="282" cy="145" rx="13" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="318" cy="145" rx="13" ry="10" fill="none" stroke="#0f172a" stroke-width="6"/><line x1="254" y1="145" x2="269" y2="145" stroke="#0f172a" stroke-width="5"/><line x1="331" y1="145" x2="346" y2="145" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "3. Adım: Yuvarlak Mavi Güneş Gözlüğü",
                "instruction": "Gözlerinin üstüne tam daire şeklinde yuvarlak mavi camlı gözlüklerini çiz.",
                "voice": "Gözlerinin üzerine ünlü yuvarlak mavi camlı gözlüklerini ekleyelim.",
                "svg": '<circle cx="280" cy="175" r="15" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="320" cy="175" r="15" fill="none" stroke="#0f172a" stroke-width="6"/><line x1="295" y1="175" x2="305" y2="175" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "4. Adım: Tombul Yuvarlak Burun",
                "instruction": "İki gözlüğün ortasına ve biraz altına tombiş kırmızı bir burun ekle.",
                "voice": "Tam ortaya iki gözlüğün altına tombul ve sevimli bir burun yuvarlağı çizelim.",
                "svg": '<circle cx="300" cy="186" r="11" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "5. Adım: DEV ZİKZAKLI DEVASA BIYIKLAR (Sol Taraf)",
                "instruction": "Burnun altından sola doğru dev dikenler gibi uzanan kahverengi bıyığı çiz.",
                "voice": "İşte Doktor Eggman'ın en komik yeri! Sola doğru dev gibi uzanan dikenli bıyığını çizelim!",
                "svg": '<path d="M 295 195 C 260 185, 200 182, 165 202 L 195 208 L 160 222 L 200 224 L 175 238 C 215 235, 265 225, 295 212" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "6. Adım: DEV ZİKZAKLI DEVASA BIYIKLAR (Sağ Taraf)",
                "instruction": "Sağa doğru da aynı büyüklükte gür ve sivri bıyık kanadını yap.",
                "voice": "Sağ tarafa da aynı devasa zikzaklı bıyık kanadını çizelim, çok havalı oldu!",
                "svg": '<path d="M 305 195 C 340 185, 400 182, 435 202 L 405 208 L 440 222 L 400 224 L 425 238 C 385 235, 335 225, 305 212" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "7. Adım: Bıyığın Altındaki Kocaman Sırıtış",
                "instruction": "Bıyıkların altından görünen neşeli geniş gülümseme ağzını ekle.",
                "voice": "Bıyıkların hemen altına 'Planım hazır!' diyen komik sırıtış ağzını çizelim.",
                "svg": '<path d="M 280 218 Q 300 232, 320 218" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "8. Adım: Yumurta Şekilli Dev Kırmızı Ceket Gövdesi",
                "instruction": "Kafanın altından aşağıya dev bir yumurta gibi yuvarlak gövde çiz.",
                "voice": "Adı üstünde Eggman! Şimdi yumurta gibi kocaman yuvarlak kırmızı ceket gövdesini çizelim.",
                "svg": '<ellipse cx="300" cy="308" rx="84" ry="88" fill="none" stroke="#0f172a" stroke-width="10"/>'
            },
            {
                "title": "9. Adım: Sarı Ceket Şeritleri ve Düğmeler",
                "instruction": "Ceketin ön kısmına V şeklinde sarı yaka panellerini ve altın düğmeleri yap.",
                "voice": "Ceketinin önüne sarı çizgili süper şeritler ve iki yanına altın düğmeler ekleyelim.",
                "svg": '<path d="M 262 232 L 285 385 M 338 232 L 315 385" stroke="#0f172a" stroke-width="6"/><rect x="255" y="295" width="16" height="8" rx="2" fill="none" stroke="#0f172a" stroke-width="5"/><rect x="329" y="295" width="16" height="8" rx="2" fill="none" stroke="#0f172a" stroke-width="5"/><rect x="258" y="330" width="16" height="8" rx="2" fill="none" stroke="#0f172a" stroke-width="5"/><rect x="326" y="330" width="16" height="8" rx="2" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "10. Adım: Sol Kol ve Beyaz Manşet",
                "instruction": "Ceketin sol yanından aşağı sarkan kolunu ve beyaz kol manşetini çiz.",
                "voice": "Sol yanından beline doğru inen kırmızı ceket kolunu ve beyaz manşetini çizelim.",
                "svg": '<path d="M 222 275 C 195 295, 190 335, 205 360" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><ellipse cx="206" cy="366" rx="14" ry="9" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="212" cy="382" r="18" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "11. Adım: Sağ Kol ve İşaret Eden Büyük Eldiven",
                "instruction": "Sağ kolu havaya 'Aha!' diye parmağını kaldırmış neşeli pozda çiz.",
                "voice": "Sağ elini 'Harika bir fikrim var!' der gibi havaya kaldırmış eldivenli pozda çizelim!",
                "svg": '<path d="M 378 275 C 415 280, 442 260, 452 235" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><ellipse cx="455" cy="228" rx="14" ry="9" fill="none" stroke="#0f172a" stroke-width="6" transform="rotate(-35 455 228)"/><circle cx="468" cy="208" r="19" fill="none" stroke="#0f172a" stroke-width="8"/><path d="M 468 188 L 468 168" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "12. Adım: Ceketin Alt Etek Uçları",
                "instruction": "Gövdenin altından iki yana sarkan uzun ceket eteklerini çiz.",
                "voice": "Kırmızı ceketinin altından iki yana açılan uzun ceket kuyruklarını ekleyelim.",
                "svg": '<path d="M 235 370 L 222 415 L 258 405 M 365 370 L 378 415 L 342 405" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "13. Adım: Uzun İnce Siyah Bacaklar",
                "instruction": "Dev yuvarlak gövdesine komik bir tezat yapan uzun ince bacaklarını çiz.",
                "voice": "Doktor Eggman'ın ince uzun komik siyah bacaklarını yere indirelim.",
                "svg": '<path d="M 275 395 L 268 465 M 325 395 L 332 465" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "14. Adım: Şık Sol ve Sağ Çizme Botları",
                "instruction": "İnce bacaklarının ucuna uzun kırmızı-siyah Eggman çizmelerini yap.",
                "voice": "Ayaklarına parlak uzun çizmelerini çizip sağlamca yere bastıralım.",
                "svg": '<path d="M 255 462 L 230 482 C 228 492, 245 495, 278 488 L 278 462 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 322 462 L 322 488 C 355 495, 372 492, 370 482 L 345 462 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "15. Adım: Kafa Tepesi Işıltısı",
                "instruction": "Kel kafasının parladığını gösteren küçük bir parıltı kavis çiz.",
                "voice": "Kel başının parladığını gösteren şirin bir ışık parıltısı koyalım!",
                "svg": '<path d="M 285 135 Q 300 132, 312 135" stroke="#0f172a" stroke-width="4" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "16. Adım: Fikir Ampulü veya Dişli Çark",
                "instruction": "Elindeki parmağının yanına icat yaptığını gösteren küçük bir robot dişli çarkı çiz.",
                "voice": "Sağ üst köşeye onun dahi bir robot mucidi olduğunu gösteren dişli çark çizelim.",
                "svg": '<circle cx="495" cy="145" r="16" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="495" cy="145" r="6" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "17. Adım: Zemin Gölgesi Çizgisi",
                "instruction": "Çizmelerinin altına düz laboratuvar zemini çiz.",
                "voice": "Ayaklarının altına gizli laboratuvar zemini çizgisini çekelim.",
                "svg": '<path d="M 160 500 Q 300 492, 440 500" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Kırmızı Ceket ve Dev Bıyık!)",
                "instruction": "Tebrikler Kıvanç! Doktor Eggman'ı parlak kırmızı ceket, sarı düğmeler ve mavi gözlüklerle renklendir!",
                "voice": "Haha harika oldu Kıvanç! Komik Doktor Eggman karşımızda duruyor! Şimdi onu parlak kırmızı ceketi, kahverengi bıyıkları ve mavi gözlükleriyle boya!",
                "svg": '''
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
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 5. SEVİMLİ BEBEK CHAO
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_chao",
        "categoryId": "sonic",
        "name": "Sevimli Bebek Chao",
        "emoji": "💧",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Sonic dünyasının minicik tatlı bebeği Chao! Başının üstündeki sihirli sarı top, sevimli kanatları ve kocaman parlayan gözleri!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, açık mavi, altın sarısı ve pembe boyalar",
        "welcomeText": "Chao chao! Merhaba Kıvanç! Sonic dünyasının en tatlı minik bebeği Chao ile tanış! Kocaman yuvarlak gözleri ve minik kanatlarıyla harika bir çizim bizi bekliyor!",
        "colors": ["#38bdf8", "#7dd3fc", "#facc15", "#f472b6"],
        "welcomeAudio": "audio/voices/cirak_sonic_chao/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Damla Şekilli Tombul Kafa",
                "instruction": "Sayfanın ortasına sevimli bir su damlası gibi yuvarlak Chao kafası çiz.",
                "voice": "Kağıdımızın üst ortasına Bebek Chao'nun tombul damla şeklindeki tatlı kafasını çizelim.",
                "svg": '<path d="M 225 225 C 215 160, 275 145, 300 118 C 325 145, 385 160, 375 225 C 370 272, 230 272, 225 225 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Başın Üstünde Uçan Sihirli Altın Top",
                "instruction": "Kafasının tam üstünde havada süzülen yuvarlak parlak duygu topunu yap.",
                "voice": "Kafasının tam üstünde havada süzülen sevimli sihirli topu çizelim!",
                "svg": '<circle cx="300" cy="86" r="18" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "3. Adım: Sol Kocaman Parlak Göz",
                "instruction": "Yüzün sol tarafına devasa parlak bir göz ve çifte ışık parlaması çiz.",
                "voice": "Yüzünün sol tarafına çok sevimli kocaman bir göz ve içine iki parıltı ekleyelim.",
                "svg": '<ellipse cx="268" cy="206" rx="16" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="270" cy="206" r="11" fill="#0f172a"/><circle cx="266" cy="198" r="5" fill="#ffffff"/><circle cx="274" cy="210" r="2.5" fill="#ffffff"/>'
            },
            {
                "title": "4. Adım: Sağ Kocaman Parlak Göz",
                "instruction": "Sağ tarafa da aynı kocaman parlak gözü yerleştir.",
                "voice": "Sağ tarafa da aynı tatlı parıltılı gözü çizelim!",
                "svg": '<ellipse cx="332" cy="206" rx="16" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="330" cy="206" r="11" fill="#0f172a"/><circle cx="326" cy="198" r="5" fill="#ffffff"/><circle cx="334" cy="210" r="2.5" fill="#ffffff"/>'
            },
            {
                "title": "5. Adım: Tatlı Gülümseme ve Pembe Yanaklar",
                "instruction": "Gözlerin ortasına kedi gülümsemesi ve yanaklarına pembe allık ovali ekle.",
                "voice": "Yüzüne sevimli bir gülümseme ve iki yana pembe utangaç yanak daireleri konduralım.",
                "svg": '<path d="M 288 232 Q 300 242, 312 232" fill="none" stroke="#0f172a" stroke-width="6.5" stroke-linecap="round"/><ellipse cx="242" cy="226" rx="10" ry="6" fill="none" stroke="#0f172a" stroke-width="4"/><ellipse cx="358" cy="226" rx="10" ry="6" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "6. Adım: Armut Şeklinde Tombiş Göbek",
                "instruction": "Başın altına yumuşak tombul bir bebek gövdesi çiz.",
                "voice": "Başının altına küçük, tombul ve çok sevimli gövdesini çizelim.",
                "svg": '<path d="M 262 268 C 235 305, 240 375, 300 378 C 360 375, 365 305, 338 268" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "7. Adım: Göbekteki Krem Desen Ovali",
                "instruction": "Göbeğinin tam ortasına şirin yumuşak bir oval göbek lekesi ekle.",
                "voice": "Göbeğinin tam ortasına büyük bir oval göbek deseni yapalım.",
                "svg": '<ellipse cx="300" cy="328" rx="28" ry="30" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "8. Adım: Boyun Bandı / Papyon Süsü",
                "instruction": "Boynunun önüne tatlı sarı göğüs yaması kıvrımını ekle.",
                "voice": "Boynunun ön tarafına minik yumuşak göğüs çizgisini çizelim.",
                "svg": '<path d="M 272 272 Q 300 288, 328 272" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "9. Adım: Neşeyle Açılan Sol Kol",
                "instruction": "Sol tarafa doğru tombul ve küt bir kol çiz, ucunu ayır.",
                "voice": "Sol tarafına doğru el sallar gibi açılan kısa tombul kolunu çizelim.",
                "svg": '<path d="M 252 292 C 218 285, 198 302, 206 322 C 215 335, 236 325, 248 318" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 218 296 Q 225 310, 222 325" stroke="#0f172a" stroke-width="5" fill="none"/>'
            },
            {
                "title": "10. Adım: Neşeyle Açılan Sağ Kol",
                "instruction": "Sağ tarafa da eşleşen tombiş kolu ve sarı el ucu çizgisini ekle.",
                "voice": "Sağ tarafa da aynı tatlı kısa kolunu çizelim.",
                "svg": '<path d="M 348 292 C 382 285, 402 302, 394 322 C 385 335, 364 325, 352 318" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M 382 296 Q 375 310, 378 325" stroke="#0f172a" stroke-width="5" fill="none"/>'
            },
            {
                "title": "11. Adım: Sol Tombiş Ayak",
                "instruction": "Gövdenin sol altına yuvarlak sevimli ayağını çiz ve ayak ucunu böl.",
                "voice": "Altına havada süzülen minik ve tombul sol ayağını yapalım.",
                "svg": '<ellipse cx="265" cy="398" rx="22" ry="16" fill="none" stroke="#0f172a" stroke-width="9" transform="rotate(-15 265 398)"/><path d="M 255 385 L 258 412" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "12. Adım: Sağ Tombiş Ayak",
                "instruction": "Sağ altına da eşleşen tombul ayağını çiz.",
                "voice": "Sağ tarafa da aynı tombul sağ ayağını ekleyelim.",
                "svg": '<ellipse cx="335" cy="398" rx="22" ry="16" fill="none" stroke="#0f172a" stroke-width="9" transform="rotate(15 335 398)"/><path d="M 345 385 L 342 412" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "13. Adım: Minik Melek Kanadı (Sol)",
                "instruction": "Sırtının sol yanına tatlı bir yuvarlak bebek melek kanadı çiz.",
                "voice": "Sırtına uçabilmesi için sevimli küçük melek kanadı çizelim!",
                "svg": '<path d="M 248 312 C 202 275, 185 315, 222 335" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "14. Adım: Minik Melek Kanadı (Sağ)",
                "instruction": "Sağ yanına da küçük kanadı çiz.",
                "voice": "Sağ sırtına da eşleşen diğer kanadını konduralım.",
                "svg": '<path d="M 352 312 C 398 275, 415 315, 378 335" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "15. Adım: Tatlı Kuyruk Ucu",
                "instruction": "Altına minik yuvarlak bir bebek kuyruğu ekle.",
                "voice": "Gövdenin arkasına minik nokta kuyruğunu konduralım.",
                "svg": '<circle cx="300" cy="382" r="9" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "16. Adım: Yanındaki Parlayan Altın Yüzük",
                "instruction": "Bebek Chao'nun yanına onunla oynadığı büyük bir Altın Yüzük çiz.",
                "voice": "Bebek Chao'nun yanına oynaması için parlak bir Sonic Altın Yüzüğü çizelim!",
                "svg": '<circle cx="145" cy="385" r="28" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="145" cy="385" r="15" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "17. Adım: Uçan Kalpler ve Yıldız Parıltıları",
                "instruction": "Sihirli topun etrafına neşe yıldızları çiz.",
                "voice": "Sihirli altın topunun etrafına pırıl pırıl parıltı yıldızları ekleyelim.",
                "svg": '<path d="M 355 82 L 355 102 M 345 92 L 365 92 M 245 85 L 245 105 M 235 95 L 255 95" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Şeker Mavisi Bebek Chao!)",
                "instruction": "Tebrikler Kıvanç! Bebek Chao'yu gök mavisi, altın sarı topu ve pembe yanaklarıyla canlandır!",
                "voice": "Çok şirin oldu Kıvanç! Bebek Chao süzülüyor! Şimdi onu gök mavisi, altın sarısı el-ayak uçları ve pembe yanaklarıyla ışıl ışıl boya!",
                "svg": '''
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
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 6. SÜPER HIZ SPİN DASH TOPU SONİC
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_spindash",
        "categoryId": "sonic",
        "name": "Spin Dash Topu Sonic",
        "emoji": "🌀",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Sonic'in durdurulamaz süper dönen top saldırısı! Dikenli enerji çarkı, toz bulutları ve sıçrayan altın yüzükler!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, parlak mavi, cam göbeği, yeşil, kahverengi ve altın boyalar",
        "welcomeText": "Zıııırrt! Merhaba Kıvanç! Sonic'in en hızlı saldırısı olan dönen Spin Dash topunu çizmeye hazır mısın? Fırtına gibi döneceğiz!",
        "colors": ["#2563eb", "#38bdf8", "#facc15", "#22c55e"],
        "welcomeAudio": "audio/voices/cirak_sonic_spindash/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Büyük Dönen Merkez Çember",
                "instruction": "Sayfanın ortasına Sonic'in dönen top gövdesi için büyük bir daire çiz.",
                "voice": "Kağıdımızın tam ortasına Sonic'in fırtına gibi dönen kocaman top gövdesi dairesini çizelim.",
                "svg": '<circle cx="320" cy="285" r="85" fill="none" stroke="#0f172a" stroke-width="10"/>'
            },
            {
                "title": "2. Adım: Üstten Fışkıran Dönen Dikenler",
                "instruction": "Çemberin üst kısmından rüzgar yönünde geriye eğilmiş 3 sivri diken yap.",
                "voice": "Çemberin üst kısmından fırıl fırıl döndüğünü gösteren sivri dikenlerini çizelim!",
                "svg": '<path d="M 285 204 L 255 152 L 320 198 L 322 142 L 352 204 L 385 160 L 382 222" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Yanlardan ve Alttan Çıkan Testere Dikenleri",
                "instruction": "Dairenin sağına, altına ve soluna da dönen keskin dikenleri tamamla.",
                "voice": "Şimdi dairenin sağından ve altından dönen testere gibi keskin dikenlerini tamamlayalım.",
                "svg": '<path d="M 382 222 L 435 215 L 402 265 L 452 285 L 395 318 L 428 362 L 365 352" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Arka Tarafın Dikenleri",
                "instruction": "Dairenin sol alt ve sol üst tarafındaki son dikenleri ekle.",
                "voice": "Sol taraftaki son dönen dikenleri de ekleyip hız çarkımızı tamamlayalım.",
                "svg": '<path d="M 365 352 L 358 408 L 315 370 L 275 405 L 270 355 L 222 365 L 245 312 L 202 288 L 240 258 L 208 212 L 265 218" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: İçindeki Hızlı Dönme Halkaları",
                "instruction": "Dairenin içine dönüş hızını gösteren iç içe kıvrımlı yay çizgileri çek.",
                "voice": "Topun çok hızlı döndüğünü göstermek için içine sarmal hareket halkaları çizelim.",
                "svg": '<path d="M 265 265 C 285 230, 355 230, 375 270 C 385 310, 345 350, 295 340" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><path d="M 290 285 C 300 265, 340 265, 345 290" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "6. Adım: Kıvrılan Hız İzi (Swoosh)",
                "instruction": "Topun etrafında ışıldayan uzun kıvrımlı enerji şeridini yap.",
                "voice": "Topun etrafını saran şık bir hız şeridi yayını çizelim.",
                "svg": '<path d="M 235 190 C 175 230, 175 355, 255 395" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "7. Adım: Arkadan Fırlayan Toz Bulutları (Büyük)",
                "instruction": "Topun sol arkasına tekerleklerin kaldırdığı kabarık hız toz bulutunu çiz.",
                "voice": "Yeri kazıyıp fırladığı için arkasından çıkan pofuduk toz bulutlarını çizelim!",
                "svg": '<path d="M 215 390 C 180 395, 165 375, 175 355 C 145 358, 125 332, 145 312 C 122 308, 118 282, 142 272" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "8. Adım: Minik Toz Topakları",
                "instruction": "Büyük bulutun arkasına havaya sıçramış iki minik toz yuvarlağı ekle.",
                "voice": "Arkaya doğru sıçrayan iki minik beyaz toz baloncuğu daha yapalım.",
                "svg": '<circle cx="105" cy="365" r="14" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="75" cy="345" r="9" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "9. Adım: Uçuşan Elektrik Kıvılcımları",
                "instruction": "Dönen topun etrafına fırlayan 3 sivri kıvılcım yıldızı çiz.",
                "voice": "Sürtünmeden fırlayan üç tane sivri mavi elektrik kıvılcımı ekleyelim.",
                "svg": '<path d="M 215 170 L 185 155 M 445 175 L 472 158 M 475 290 L 510 288" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "10. Adım: İleri Fırlayan Rüzgar Çizgileri",
                "instruction": "Sağa doğru hızla fırladığını gösteren paralel rüzgar çizgileri yap.",
                "voice": "Sol taraftan sağa doğru hızla uçtuğunu gösteren uzun şerit çizgilerini çekelim.",
                "svg": '<line x1="75" y1="220" x2="175" y2="220" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><line x1="55" y1="265" x2="150" y2="265" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "11. Adım: Green Hill Çim Zemini (Üst Çizgi)",
                "instruction": "Alt tarafa ünlü Green Hill yeşil çimen zeminini dalgalı çiz.",
                "voice": "Altına Sonic'in meşhur Green Hill yeşil çimen pistini çizelim!",
                "svg": '<path d="M 55 435 Q 300 418, 545 435" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "12. Adım: Green Hill Damalı Toprak Kareleri",
                "instruction": "Çimenin altına Green Hill'in klasik kareli damalı toprak desenini çiz.",
                "voice": "Çimenin altına Green Hill'in ünlü kareli damalı toprak çizgilerini çekelim!",
                "svg": '<path d="M 55 455 Q 300 438, 545 455" stroke="#0f172a" stroke-width="6" fill="none"/><line x1="120" y1="450" x2="120" y2="510" stroke="#0f172a" stroke-width="5"/><line x1="200" y1="446" x2="200" y2="510" stroke="#0f172a" stroke-width="5"/><line x1="280" y1="444" x2="280" y2="510" stroke="#0f172a" stroke-width="5"/><line x1="360" y1="444" x2="360" y2="510" stroke="#0f172a" stroke-width="5"/><line x1="440" y1="448" x2="440" y2="510" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "13. Adım: Birinci Altın Yüzük (Önde)",
                "instruction": "Sağ tarafa Sonic'in yakalamak üzere olduğu büyük bir altın yüzük çiz.",
                "voice": "Önüne yakalamak üzere olduğu parlak bir Altın Yüzük konduralım!",
                "svg": '<circle cx="505" cy="345" r="28" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="505" cy="345" r="15" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "14. Adım: İkinci Küçük Altın Yüzük",
                "instruction": "Üstüne daha küçük ikinci bir altın yüzük halkası yap.",
                "voice": "Biraz üstüne ikinci bir Altın Yüzük daha ekleyelim.",
                "svg": '<circle cx="515" cy="245" r="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="515" cy="245" r="11" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "15. Adım: Ayak İzi / Top Sürtünme Işığı",
                "instruction": "Topun yere değdiği yere küçük fırlayan kum kıvılcımları çiz.",
                "voice": "Topun yere değdiği noktaya hız kıvılcımları ekleyelim.",
                "svg": '<circle cx="385" cy="415" r="4" fill="#0f172a"/><circle cx="408" cy="405" r="5" fill="#0f172a"/><circle cx="425" cy="418" r="3.5" fill="#0f172a"/>'
            },
            {
                "title": "16. Adım: Dış Şok Dalgası Yayları",
                "instruction": "Dönen topun sağına şok dalgası yarım ay çizgisi çek.",
                "voice": "Ön tarafına havayı yardığını gösteren iki yay çizgisi ekleyelim.",
                "svg": '<path d="M 435 190 Q 470 250, 445 315" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "17. Adım: Palmiye Yaprağı veya Çiçek",
                "instruction": "Çimlerin sol kenarına Green Hill'in meşhur sevimli çiçeğini ekle.",
                "voice": "Çimlerin kenarına tatlı bir Green Hill çiçeği yapalım.",
                "svg": '<line x1="90" y1="432" x2="90" y2="405" stroke="#0f172a" stroke-width="5"/><circle cx="90" cy="396" r="8" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Şimşek Mavisi Spin Dash & Green Hill!)",
                "instruction": "Tebrikler Kıvanç! Dönen Spin Dash'i elektrik mavisi, Green Hill'i yeşil-kahverengi ve yüzükleri altın sarısı boya!",
                "voice": "İnanılmaz hızlı oldu Kıvanç! Spin Dash Sonic yeri göğü inletiyor! Şimdi onu parlak mavi, yeşil çimler ve altın yüzüklerle canlandır!",
                "svg": '''
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
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 7. SONİC'İN SÜPER YARIŞ ARABASI (SPEED STAR)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_arabasi",
        "categoryId": "sonic",
        "name": "Sonic Yarış Arabası",
        "emoji": "🏎️",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Sonic'in mavi turbo spor arabası Speed Star! Direksiyonda gülümseyen Sonic, altın yıldızlı kaput ve roket egzozu!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, kobalt mavisi, altın sarısı, beyaz ve kırmızı boyalar",
        "welcomeText": "Vıııın vııın! Merhaba Kıvanç! Sonic'in süper hızlı mavi yarış arabası Speed Star ile büyük yarışa katılmaya hazır mısın?",
        "colors": ["#2563eb", "#ffffff", "#facc15", "#ef4444"],
        "welcomeAudio": "audio/voices/cirak_sonic_arabasi/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Aracın Aerodinamik Burun ve Kaput Hattı",
                "instruction": "Sayfanın ortasına sağa bakan hızlı spor arabanın burun ve üst kaput çizgisini yap.",
                "voice": "Kağıdımızın ortasına Speed Star yarış arabamızın sivri ön burnunu ve kaput çizgisini çizelim.",
                "svg": '<path d="M 330 295 C 390 295, 470 310, 515 345 L 480 370 L 110 370 L 105 320 L 220 300" fill="none" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Rüzgar Kıran Ön Rüzgarlık ve Yan Şerit",
                "instruction": "Ön tampon ucuna hız kanatçığı ve kapıya boydan boya şerit çek.",
                "voice": "Ön tampona rüzgarı yaran spoyler kanadı ve yan tarafa beyaz yarış şeridi çizelim.",
                "svg": '<path d="M 465 370 L 525 362 L 515 345" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><line x1="150" y1="338" x2="465" y2="342" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "3. Adım: Arka Kanatlı Dev Altın Spoyler",
                "instruction": "Aracın arkasına yüksek ve havalı yarış spoylerini çiz.",
                "voice": "Arka kısmına hızı kontrol eden yüksek yarış arabası kanat spoylerini çizelim!",
                "svg": '<path d="M 145 315 L 125 255 L 70 250 L 95 288 L 125 292 L 130 315" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Ön Çerçeveli Yarış Camı (Kokpit)",
                "instruction": "Kaputun arkasına şeffaf spor araba ön camını yerleştir.",
                "voice": "Kaputun arkasına Sonic'i rüzgardan koruyan yatık ön camını çizelim.",
                "svg": '<path d="M 335 295 L 302 252 L 265 252 L 250 298" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Kokpitteki Kirpi Sonic'in Başı ve Dikenleri",
                "instruction": "Camın arkasına başını çıkarmış süren Sonic'in yuvarlak kafasını ve arkaya savrulan dikenlerini çiz!",
                "voice": "İşte sürücü! Kokpitin içine başı dışarı bakan Kirpi Sonic'in kafasını ve arkaya uçuşan dikenlerini çizelim!",
                "svg": '<path d="M 248 210 C 275 185, 322 202, 320 245 C 300 265, 255 262, 232 252 C 205 260, 180 262, 165 255 C 185 245, 200 238, 212 232 C 185 232, 168 228, 160 220 C 182 212, 202 208, 222 208 C 202 195, 192 185, 185 178 C 208 182, 232 192, 248 210 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "6. Adım: Sonic'in Kulağı, Büyük Gözü ve Burnu",
                "instruction": "Sonic'e sivri kulak, kararlı yarış gözü, siyah burun ve gülümseme yap.",
                "voice": "Sonic'e kulağını, yola bakan kararlı yeşil gözünü, siyah burnunu ve gülümsemesini yapalım.",
                "svg": '<path d="M 246 205 L 236 172 L 266 192" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><path d="M 255 238 C 254 208, 285 206, 295 224 C 304 208, 320 212, 318 238" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="322" cy="240" rx="8" ry="5.5" fill="#0f172a"/><circle cx="282" cy="225" r="5" fill="#0f172a"/><circle cx="308" cy="225" r="4.5" fill="#0f172a"/><path d="M 272 252 Q 295 260, 308 250" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "7. Adım: Direksiyon ve Beyaz Sürücü Eldiveni",
                "instruction": "Camın içine direksiyon simidini ve tutan beyaz Sonic eldivenini ekle.",
                "voice": "Ellerini öne uzatıp yarış direksiyonunu tutan beyaz Sonic eldivenini çizelim.",
                "svg": '<line x1="292" y1="265" x2="310" y2="292" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><circle cx="304" cy="276" r="14" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "8. Adım: Dev Ön Tekerlek ve Altın Yüzük Jantı",
                "instruction": "Kaputun altına kocaman ön lastiği ve içinde parlayan altın yüzük jantını çiz.",
                "voice": "Ön kısma büyük yarış lastiğini ve ortasına altın yüzük şeklinde parlak jant çizelim!",
                "svg": '<circle cx="425" cy="382" r="52" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="425" cy="382" r="28" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="425" cy="382" r="14" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "9. Adım: Dev Arka Tekerlek ve Altın Yüzük Jantı",
                "instruction": "Arka tarafa da aynı büyük tekerleği ve altın yüzük jantını yap.",
                "voice": "Arka kısma da aynı güçlü arka tekerleği ve altın jantını ekleyelim.",
                "svg": '<circle cx="170" cy="382" r="54" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="170" cy="382" r="29" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="170" cy="382" r="14" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "10. Adım: Kaput Üzeri Altın Yıldız Amblemi",
                "instruction": "Arabanın yan ön kapısına Speed Star'ın ünlü yıldız amblemini yap.",
                "voice": "Kapının önüne Speed Star arabasının ünlü altın yıldız amblemini çizelim.",
                "svg": '<polygon points="335,315 340,327 352,327 342,334 346,346 335,338 324,346 328,334 318,327 330,327" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>'
            },
            {
                "title": "11. Adım: Parlak Far ve Hava Girişleri",
                "instruction": "Ön tarafa keskin yarış farını ve yan hava ızgarasını çiz.",
                "voice": "Ön burnuna parlak yarış farını ve yan motor hava ızgarasını yapalım.",
                "svg": '<path d="M 455 322 L 490 330 L 478 338 L 452 332 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/><path d="M 248 322 L 285 322 M 252 332 L 288 332" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "12. Adım: Turbo Egzoz Borusu",
                "instruction": "Arabanın arkasından çıkan geniş turbo egzoz çıkışını ekle.",
                "voice": "Arka tarafa süper hız kazandıran kalın turbo egzoz borusunu çizelim.",
                "svg": '<rect x="85" y="340" width="25" height="22" rx="4" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "13. Adım: Egzozdan Fışkıran Mavi-Turuncu Alevler",
                "instruction": "Egzozdan arkaya doğru uzanan büyük turbo roket ateşini çiz.",
                "voice": "Egzozdan gürültüyle fışkıran turbo ateş dillerini çizelim!",
                "svg": '<path d="M 85 342 L 35 335 L 55 348 L 28 355 L 58 362 L 42 372 L 85 360" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "14. Adım: Jant Kolları",
                "instruction": "Her iki tekerlek jantının içine yıldız şeklinde kollar çiz.",
                "voice": "Tekerlek jantlarının içine havalı yarış kollarını çizelim.",
                "svg": '<line x1="425" y1="354" x2="425" y2="368" stroke="#0f172a" stroke-width="5"/><line x1="425" y1="396" x2="425" y2="410" stroke="#0f172a" stroke-width="5"/><line x1="170" y1="353" x2="170" y2="368" stroke="#0f172a" stroke-width="5"/><line x1="170" y1="396" x2="170" y2="411" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "15. Adım: Ön Kaportaya Kanat Çizgileri",
                "instruction": "Kaput kenarlarına dinamik rüzgar hatları ekle.",
                "voice": "Aracın üstüne parlak yarış şeridi kenar çizgisi ekleyelim.",
                "svg": '<line x1="340" y1="305" x2="430" y2="318" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>'
            },
            {
                "title": "16. Adım: Rüzgar Hız Çizgileri",
                "instruction": "Sonic'in kafasının ve spoylerin arkasına jet hız çizgileri çek.",
                "voice": "Sonic'in rüzgar gibi geçtiğini gösteren hız çizgilerini arkaya çekelim.",
                "svg": '<line x1="80" y1="195" x2="155" y2="195" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="65" y1="225" x2="140" y2="225" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Yarış Pisti Asfaltı ve Bitiş Çizgisi",
                "instruction": "Tekerleklerin altına dümdüz hızlı yarış pistini çiz.",
                "voice": "Tekerleklerin altına Sonic'in rekor kırdığı asfalt yarış pistini çizelim.",
                "svg": '<line x1="45" y1="438" x2="555" y2="438" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><line x1="80" y1="460" x2="170" y2="460" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="250" y1="460" x2="350" y2="460" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="430" y1="460" x2="520" y2="460" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Kobalt Mavisi Speed Star!)",
                "instruction": "Tebrikler Kıvanç! Sonic'in yarış arabasını parlak mavi, altın yıldız ve roket alevleriyle renklendir!",
                "voice": "İnanılmaz havalı oldu Kıvanç! Sonic'in süper yarış arabası birinci olmaya hazır! Şimdi onu kobalt mavisi ve altın jantlarla boya!",
                "svg": '''
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
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 8. YEDİ KAOS ZÜMRÜDÜ VE BÜYÜK ANA ZÜMRÜT
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sonic_zumrutler",
        "categoryId": "sonic",
        "name": "7 Kaos Zümrüdü ve Yüzükler",
        "emoji": "💎",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Süper Sonic gücünü veren gökkuşağı renkli 7 Kaos Zümrüdü, ortadaki dev Ana Zümrüt ve parlayan Altın Yüzükler!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, yeşil, kırmızı, mavi, sarı, mor, turkuaz boyalar",
        "welcomeText": "Kaos gücü! Merhaba Kıvanç! Sonic'in en değerli hazinelerini, rengarenk yedi Kaos Zümrüdünü ve Altın Yüzükleri birlikte çizmeye hazır mısın?",
        "colors": ["#22c55e", "#ef4444", "#3b82f6", "#facc15"],
        "welcomeAudio": "audio/voices/cirak_sonic_zumrutler/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Dev Ana Zümrütün Üst Elmas Kenarı",
                "instruction": "Sayfanın orta altına dev yeşil Ana Zümrütün üst düz tepesini ve yan omuzlarını çiz.",
                "voice": "Kağıdımızın orta altına dev yeşil Ana Zümrütün keskin elmas tepesini çizelim.",
                "svg": '<polygon points="240,295 360,295 405,345 195,345" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Dev Ana Zümrütün Alt Elmas Üçgeni",
                "instruction": "Omuzların altını aşağı doğru dev bir kristal ucuyla birleştir.",
                "voice": "Şimdi elmas tepenin altını aşağıya doğru büyük bir kristal üçgeniyle birleştirelim.",
                "svg": '<polygon points="195,345 405,345 300,455" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Ana Zümrütün Parlayan İç Kristal Yüzeyleri",
                "instruction": "İçine elmas gibi parlaması için keskin kristal kesim çizgilerini çiz.",
                "voice": "İçine gerçek mücevher gibi parlaması için kristal kesim çizgilerini ekleyelim.",
                "svg": '<polygon points="265,315 335,315 355,345 245,345" fill="none" stroke="#0f172a" stroke-width="5"/><path d="M 245 345 L 300 455 L 355 345 M 240 295 L 265 315 M 360 295 L 335 315" stroke="#0f172a" stroke-width="5" fill="none"/>'
            },
            {
                "title": "4. Adım: Ana Zümrütün Antik Taş Sunağı (1. Basamak)",
                "instruction": "Zümrütün oturduğu tarihi taş sunak basamağını çiz.",
                "voice": "Altına büyük Ana Zümrütün durduğu antik taş basamağı çizelim.",
                "svg": '<path d="M 165 445 L 270 445 L 300 460 L 330 445 L 435 445 L 455 478 L 145 478 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Alt Geniş Taş Basamak",
                "instruction": "Sunağın altına daha geniş ikinci tarihi basamağı ekle.",
                "voice": "Altına daha geniş ikinci basamağını ekleyelim.",
                "svg": '<rect x="115" y="478" width="370" height="32" rx="6" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "6. Adım: Tepe Ortadaki Kırmızı Kaos Zümrüdü",
                "instruction": "Büyük zümrütün tam üst tepesine uçan kırmızı Kaos Zümrüdünü çiz.",
                "voice": "Şimdi üstte yarım daire şeklinde süzülen 6 Kaos Zümrüdüne başlayalım! İlk olarak en tepeye Kırmızı Zümrüdü çizelim.",
                "svg": '<polygon points="282,92 318,92 332,110 300,144 268,110" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="268" y1="110" x2="332" y2="110" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "7. Adım: Sol Üstteki Mavi Kaos Zümrüdü",
                "instruction": "Sol üst tarafa süzülen Mavi Kaos Zümrüdünü yap.",
                "voice": "Sol üst tarafa Mavi Kaos Zümrüdünü çizelim.",
                "svg": '<polygon points="182,124 218,124 232,142 200,176 168,142" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="168" y1="142" x2="232" y2="142" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "8. Adım: Sağ Üstteki Sarı Kaos Zümrüdü",
                "instruction": "Sağ üst tarafa parlayan Sarı Kaos Zümrüdünü ekle.",
                "voice": "Sağ üst tarafa parlayan Sarı Kaos Zümrüdünü çizelim.",
                "svg": '<polygon points="382,124 418,124 432,142 400,176 368,142" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="368" y1="142" x2="432" y2="142" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "9. Adım: Sol Yandaki Turkuaz Kaos Zümrüdü",
                "instruction": "Daha aşağıda sola doğru süzülen Turkuaz Kaos Zümrüdünü çiz.",
                "voice": "Sol yana Turkuaz renkli dördüncü Kaos Zümrüdünü yapalım.",
                "svg": '<polygon points="108,195 144,195 158,213 126,247 94,213" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="94" y1="213" x2="158" y2="213" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "10. Adım: Sağ Yandaki Mor Kaos Zümrüdü",
                "instruction": "Sağ yana süzülen Mor Kaos Zümrüdünü ekle.",
                "voice": "Sağ yana Mor renkli beşinci Kaos Zümrüdünü yapalım.",
                "svg": '<polygon points="456,195 492,195 506,213 474,247 442,213" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="442" y1="213" x2="506" y2="213" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "11. Adım: Sol Alttaki Parlak Beyaz Kaos Zümrüdü",
                "instruction": "Sol alt köşeye yedinci beyaz-gümüş Kaos Zümrüdünü çiz.",
                "voice": "Sol alt tarafa gümüş beyazı altıncı küçük Kaos Zümrüdünü çizelim.",
                "svg": '<polygon points="88,288 124,288 138,306 106,340 74,306" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="74" y1="306" x2="138" y2="306" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "12. Adım: Sağdaki Parlak Yeşil Kaos Zümrüdü",
                "instruction": "Sağ alt tarafa da parlak yeşil Kaos Zümrüdünü yerleştir.",
                "voice": "Sağ tarafa da parlak yeşil Kaos Zümrüdünü yerleştirip yedili takımı tamamlayalım!",
                "svg": '<polygon points="476,288 512,288 526,306 494,340 462,306" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/><line x1="462" y1="306" x2="526" y2="306" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "13. Adım: Sol Yanda Dönen Büyük Altın Yüzük",
                "instruction": "Sol tarafa kocaman bir Sonic Altın Yüzüğü çiz.",
                "voice": "Şimdi Sunağın sol yanına Sonic'in büyük Altın Yüzüğünü çizelim!",
                "svg": '<circle cx="110" cy="408" r="32" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="110" cy="408" r="18" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "14. Adım: Sağ Yanda Dönen Büyük Altın Yüzük",
                "instruction": "Sağ tarafa da aynı şekilde parlayan bir Altın Yüzük ekle.",
                "voice": "Sağ yanına da ikinci kocaman Altın Yüzüğümüzü çizelim.",
                "svg": '<circle cx="490" cy="408" r="32" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="490" cy="408" r="18" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "15. Adım: Zümrütlerin İç Kesim Çizgileri",
                "instruction": "Küçük zümrütlerin içine ikişer elmas çizgisi çekerek parlat.",
                "voice": "Küçük zümrütlerin içine keskin elmas yansımalarını çizelim.",
                "svg": '<path d="M 288 110 L 300 144 L 312 110 M 188 142 L 200 176 L 212 142 M 388 142 L 400 176 L 412 142" stroke="#0f172a" stroke-width="4" fill="none"/>'
            },
            {
                "title": "16. Adım: Enerji Işını Bağlantıları",
                "instruction": "Ana zümrütten küçük zümrütlere uzanan enerji çizgileri çek.",
                "voice": "Ortadaki Ana Zümrütten yukarıdaki zümrütlere ışık çizgileri çıkaralım.",
                "svg": '<path d="M 300 280 L 300 230 M 265 288 L 235 245 M 335 288 L 365 245" stroke="#0f172a" stroke-width="5" stroke-dasharray="10 8" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Parlayan Mücevher Yıldızları",
                "instruction": "Etrafına ışıl ışıl 4 köşeli parlama yıldızları yap.",
                "voice": "Zümrütlerin parladığını gösteren dört köşeli yıldız ışıkları konduralım!",
                "svg": '<path d="M 248 220 L 248 242 M 237 231 L 259 231 M 355 220 L 355 242 M 344 231 L 366 231 M 300 175 L 300 198 M 289 186 L 311 186" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme (Gökkuşağı Kaos Gücü!)",
                "instruction": "Tebrikler Kıvanç! 7 Kaos Zümrüdünü gökkuşağı renkleriyle, Ana Zümrütü zümrüt yeşiliyle boya!",
                "voice": "Muhteşem bir hazine oldu Kıvanç! Bütün Kaos Zümrütleri ve Altın Yüzükler senin oldu! Şimdi onları gökkuşağı gibi rengarenk boya!",
                "svg": '''
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
'''
            }
        ]
    }
]

# Write a preview HTML for these 8 new Sonic drawings + category icon!
html = f'''<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
body {{ font-family: sans-serif; background: #f1f5f9; padding: 20px; margin: 0; }}
.cat-preview {{ display: inline-flex; flex-direction: column; align-items: center; background: linear-gradient(180deg,#eff6ff,#fff); border: 4px solid #2563eb; border-radius: 24px; padding: 20px 30px; margin-bottom: 20px; }}
.cat-icon-box svg {{ width: 90px; height: 90px; }}
.grid {{ display: flex; flex-wrap: wrap; gap: 14px; }}
.card {{ background: #fff; border: 2px solid #cbd5e1; border-radius: 16px; padding: 10px; width: 250px; text-align: center; }}
.card svg {{ width: 230px; height: 230px; border: 1px solid #e2e8f0; border-radius: 12px; background: #fff; }}
h4 {{ margin: 8px 0 0; font-size: 14px; }}
</style></head><body>
<div class="cat-preview">
  <div class="cat-icon-box">{SONIC_CAT_ICON_SVG}</div>
  <h3>Kirpi Sonic Dünyası (Yeni Kategori İkonu)</h3>
</div>
<div class="grid">
'''
for d in NEW_SONIC_8:
    html += f'<div class="card"><svg viewBox="0 0 600 600">{d["steps"][-1]["svg"]}</svg><h4>{d["name"]}</h4></div>\n'

html += '</div></body></html>'

out_html = r'C:\Users\osman\.gemini\antigravity\brain\1e7ef026-ce53-45d2-aa8b-07792b52ac20\scratch\preview_sonic_new8.html'
with open(out_html, 'w', encoding='utf-8') as f:
    f.write(html)
print("Generated preview HTML:", out_html)
