# -*- coding: utf-8 -*-
"""
Sonic 15-Pack Part 3 (5 drawings: 11..15):
11. cirak_sonic_motobug (Robot Ugur Bocegi Motobug)
12. cirak_sonic_buzzbomber (Ucan Robot Ari Buzz Bomber)
13. cirak_sonic_death_egg_robot (Olum Yumurtasi Robotu)
14. cirak_sonic_monitor (Sonic Guc Monitorleri)
15. cirak_sonic_green_hill_kale (Green Hill Dongu Yolu)
"""


def make_drawing(
    did,
    name,
    emoji,
    desc,
    materials,
    welcome_text,
    colors,
    steps_data,
    final_colored_svg,
):
    steps = []
    for idx, (title, instr, voice, svg_frag) in enumerate(steps_data, start=1):
        steps.append(
            {
                "title": title,
                "instruction": instr,
                "voice": voice,
                "svg": svg_frag.strip(),
                "audio": f"audio/voices/{did}/step_{idx}.mp3",
            }
        )

    final_clean = final_colored_svg.strip()
    steps.append(
        {
            "title": "18. Adım: Canlı Renklendirme & Parlak Gölgeler!",
            "instruction": "Tebrikler Kıvanç! Şimdi çizimimizi canlı renkler ve parlak gölgelerle boyayıp tamamlayalım!",
            "voice": "İşte son dokunuş! Şimdi çizimimizi canlı renklerle boyayıp parlatıyoruz. Harika bir iş çıkardın Kıvanç!",
            "svg": final_clean,
            "audio": f"audio/voices/{did}/step_18.mp3",
        }
    )

    return {
        "id": did,
        "categoryId": "sonic",
        "name": name,
        "emoji": emoji,
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": desc,
        "materials": materials,
        "welcomeText": welcome_text,
        "welcomeAudio": f"audio/voices/{did}/welcome.mp3",
        "colors": colors,
        "previewSvg": final_clean,
        "steps": steps,
    }


# ---------------------------------------------------------------------------
# 11. Robot Ugur Bocegi Motobug
# ---------------------------------------------------------------------------
def build_motobug():
    did = "cirak_sonic_motobug"
    steps_data = [
        (
            "1. Adım: Dev Kabuk Kubbesi",
            "Üst tarafa uğur böceği şeklinde kocaman kavisli bir kubbe çizelim.",
            "Hadi Green Hill vadisinin hızlı robotu Motobug ile başlayalım! Üst tarafa büyük kavisli bir uğur böceği kabuğu çizelim.",
            '<path d="M 135,345 C 145,165 445,165 455,345" fill="none" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round"/>',
        ),
        (
            "2. Adım: Kabuk Alt Çizgisi",
            "Kabuğun iki ucunu hafif kavisli bir taban çizgisiyle kapatalım.",
            "Şimdi kabuğun iki ucunu tatlı bir kavisle birleştirip şekli kapatalım.",
            '<path d="M 135,345 Q 300,362 455,345" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>',
        ),
        (
            "3. Adım: Kanat Ayrım Çizgisi",
            "Kabuğun üstünden arkaya doğru eğimli bir kanat çizgisi çekelim.",
            "Sırt kabuğunun üstünden arkaya doğru iki kanadı ayıran çizgiyi çizelim.",
            '<path d="M 235,205 Q 325,248 446,338" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>',
        ),
        (
            "4. Adım: Büyük Benekler",
            "Kabuğun üst kısmına iki tane büyük yuvarlak benek çizelim.",
            "Şimdi robot uğur böceğinin sırtına iki büyük yuvarlak benek yerleştirelim.",
            '<circle cx="290" cy="212" r="24" fill="none" stroke="#0f172a" stroke-width="4.5"/><circle cx="385" cy="245" r="26" fill="none" stroke="#0f172a" stroke-width="4.5"/>',
        ),
        (
            "5. Adım: Küçük Benekler",
            "Sağ tarafa iki tane daha küçük boyutta benek ekleyelim.",
            "Harika! Şimdi sağ tarafa iki küçük benek daha ekleyip kabuğu süsleyelim.",
            '<circle cx="330" cy="296" r="20" fill="none" stroke="#0f172a" stroke-width="4.5"/><circle cx="418" cy="306" r="15" fill="none" stroke="#0f172a" stroke-width="4"/>',
        ),
        (
            "6. Adım: Robot Kafa Ayrımı",
            "Sol tarafa robot kafasını kabuktan ayıran kavisli sınırı çizelim.",
            "Sol tarafta robotun kafa bölümünü kabuktan ayıran kavisli çizgiyi çekelim.",
            '<path d="M 142,272 Q 195,270 218,348" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>',
        ),
        (
            "7. Adım: Kızgın Robot Gözü",
            "Üçgenimsi keskin bir göz çerçevesi ve içine siyah göz bebeği çizelim.",
            "Motobug'ın sinirli bakışlı üçgen gözünü ve ortasındaki siyah noktayı çizelim.",
            '<path d="M 148,266 L 204,296 L 152,324 Z" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/><circle cx="170" cy="296" r="8" fill="#0f172a"/>',
        ),
        (
            "8. Adım: Sensör Anteni",
            "Kafasının tepesine kıvrık bir anten ve ucuna yuvarlak top ekleyelim.",
            "Tepesine kıvrık metal antenini ve ucundaki yuvarlak sinyal lambasını çizelim.",
            '<path d="M 192,208 Q 168,145 135,152" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><circle cx="128" cy="154" r="13" fill="none" stroke="#0f172a" stroke-width="4.5"/>',
        ),
        (
            "9. Adım: Çelik Tampon Çene",
            "Alt ön kısma köşeli zırhlı bir tampon gövde ekleyelim.",
            "Ön alt kısma engelleri iten güçlü çelik tampon gövdesini çizelim.",
            '<path d="M 136,342 L 88,356 L 106,396 L 195,382 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>',
        ),
        (
            "10. Adım: Sivri Tampon Dişleri",
            "Tamponun ucuna iki tane sivri üçgen diş çizelim.",
            "Tamponun önüne iki küçük sivri metal diş ekleyelim.",
            '<path d="M 102,354 L 78,342 L 94,376" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/><path d="M 100,378 L 76,392 L 108,396" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>',
        ),
        (
            "11. Adım: Kıskaç Kolu",
            "Gövdeden öne uzanan kalın ve kıvrık robot kolunu çizelim.",
            "Şimdi alttan öne doğru uzanan robot kolunu güzelce çizelim.",
            '<path d="M 205,375 Q 170,408 130,418" fill="none" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>',
        ),
        (
            "12. Adım: Kıskaç Pençesi",
            "Kolun ucuna açık bir V şeklinde robot pençesi yapalım.",
            "Kolun ucuna tutucu robot kıskacını ekleyelim.",
            '<path d="M 132,418 L 96,404 L 112,424 L 96,442 L 136,432 Z" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>',
        ),
        (
            "13. Adım: Dev Tekerlek",
            "Kabuğun tam altına büyük yuvarlak tekerlek ve iç jant dairesi çizelim.",
            "Motobug çok hızlı gider! Altına kocaman yuvarlak bir tekerlek ve jant çemberi çizelim.",
            '<circle cx="305" cy="405" r="84" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="305" cy="405" r="52" fill="none" stroke="#0f172a" stroke-width="4.5"/>',
        ),
        (
            "14. Adım: Jant Telleri",
            "Tekerleğin merkez göbeğini ve dört jant kolunu ekleyelim.",
            "Tekerleğin ortasına küçük daireyi ve dört yöne uzanan jant kollarını çizelim.",
            '<circle cx="305" cy="405" r="20" fill="none" stroke="#0f172a" stroke-width="4.5"/><path d="M 305,353 L 305,385 M 305,425 L 305,457 M 253,405 L 285,405 M 325,405 L 357,405" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>',
        ),
        (
            "15. Adım: Egzoz Borusu",
            "Arka kısımdan yukarı bakan kalın bir egzoz borusu çıkaralım.",
            "Şimdi arkasından yukarı doğru uzanan kalın egzoz borusunu ekleyelim.",
            '<path d="M 435,295 L 502,258 L 516,282 L 448,322 Z" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>',
        ),
        (
            "16. Adım: Pofuduk Duman Bulutu",
            "Egzozun ucundan çıkan kabarık bir duman bulutu çizelim.",
            "Egzoz borusunun ucuna pofuduk bulut gibi duman çizelim.",
            '<path d="M 518,252 C 530,228 564,230 562,256 C 580,265 568,295 544,288 C 530,295 512,276 518,252 Z" fill="none" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>',
        ),
        (
            "17. Adım: Hız Çizgileri ve Gölge",
            "Arkaya hız çizgileri, altına da yer gölgesini ekleyelim.",
            "Son olarak hız çizgilerini ve altındaki gölge çizgisini ekleyelim. Boyamaya hazırız!",
            '<path d="M 412,438 L 485,438 M 425,456 L 474,456 M 185,492 Q 310,504 425,492" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>',
        ),
    ]

    final_svg = """
    <defs>
      <linearGradient id="mb_shell" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f87171"/>
        <stop offset="55%" stop-color="#dc2626"/>
        <stop offset="100%" stop-color="#991b1b"/>
      </linearGradient>
      <linearGradient id="mb_metal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e2e8f0"/>
        <stop offset="100%" stop-color="#64748b"/>
      </linearGradient>
      <radialGradient id="mb_tire" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#475569"/>
        <stop offset="100%" stop-color="#0f172a"/>
      </radialGradient>
    </defs>
    <ellipse cx="305" cy="494" rx="145" ry="16" fill="#cbd5e1" opacity="0.65"/>
    <path d="M 435,295 L 502,258 L 516,282 L 448,322 Z" fill="url(#mb_metal)" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M 518,252 C 530,228 564,230 562,256 C 580,265 568,295 544,288 C 530,295 512,276 518,252 Z" fill="#f1f5f9" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
    <path d="M 192,208 Q 168,145 135,152" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>
    <path d="M 192,208 Q 168,145 135,152" fill="none" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="128" cy="154" r="13" fill="#facc15" stroke="#0f172a" stroke-width="4.5"/>
    <circle cx="124" cy="150" r="4" fill="#ffffff"/>
    <circle cx="305" cy="405" r="84" fill="url(#mb_tire)" stroke="#0f172a" stroke-width="6"/>
    <circle cx="305" cy="405" r="52" fill="#e2e8f0" stroke="#0f172a" stroke-width="4.5"/>
    <path d="M 305,353 L 305,457 M 253,405 L 357,405" fill="none" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
    <circle cx="305" cy="405" r="20" fill="#facc15" stroke="#0f172a" stroke-width="4.5"/>
    <path d="M 135,345 C 145,165 445,165 455,345 Q 300,362 135,345 Z" fill="url(#mb_shell)" stroke="#0f172a" stroke-width="5.5" stroke-linejoin="round"/>
    <path d="M 142,272 Q 195,270 218,348 Q 175,352 135,345 C 138,315 140,292 142,272 Z" fill="#334155" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M 235,205 Q 325,248 446,338" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="290" cy="212" r="24" fill="#1e293b" stroke="#0f172a" stroke-width="4"/>
    <circle cx="385" cy="245" r="26" fill="#1e293b" stroke="#0f172a" stroke-width="4"/>
    <circle cx="330" cy="296" r="20" fill="#1e293b" stroke="#0f172a" stroke-width="4"/>
    <circle cx="418" cy="306" r="15" fill="#1e293b" stroke="#0f172a" stroke-width="3.5"/>
    <path d="M 255,196 Q 315,180 375,202" fill="none" stroke="#fca5a5" stroke-width="7" stroke-linecap="round" opacity="0.75"/>
    <path d="M 148,266 L 204,296 L 152,324 Z" fill="#fef08a" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <circle cx="170" cy="296" r="9" fill="#0f172a"/>
    <circle cx="167" cy="293" r="3" fill="#ffffff"/>
    <path d="M 136,342 L 88,356 L 106,396 L 195,382 Z" fill="url(#mb_metal)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
    <path d="M 102,354 L 78,342 L 94,376 Z" fill="#facc15" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
    <path d="M 100,378 L 76,392 L 108,396 Z" fill="#facc15" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
    <path d="M 205,375 Q 170,408 130,418" fill="none" stroke="#0f172a" stroke-width="16" stroke-linecap="round"/>
    <path d="M 205,375 Q 170,408 130,418" fill="none" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
    <path d="M 132,418 L 96,404 L 112,424 L 96,442 L 136,432 Z" fill="#e2e8f0" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M 412,438 L 485,438 M 425,456 L 474,456" fill="none" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
    """

    colors = [
        {"name": "Uğur Böceği Kırmızısı", "hex": "#dc2626"},
        {"name": "Zırh Grisi", "hex": "#94a3b8"},
        {"name": "Lamba Sarısı", "hex": "#facc15"},
        {"name": "Tekerlek Siyahı", "hex": "#1e293b"},
    ]

    return make_drawing(
        did=did,
        name="Robot Uğur Böceği Motobug",
        emoji="🐞",
        desc="Dr. Eggman'in hızlı ve sevimli robot uğur böceği Motobug'ı adım adım çiz!",
        materials="Kağıt, siyah kalem, kırmızı, sarı ve gri boya",
        welcome_text="Merhaba Kıvanç! Bugün Dr. Eggman'in en bilinen robotu Motobug'ı çizeceğiz. Kırmızı uğur böceği kabuğu ve dev tekerleğiyle çok eğlenceli olacak!",
        colors=colors,
        steps_data=steps_data,
        final_colored_svg=final_svg,
    )


# ---------------------------------------------------------------------------
# 12. Ucan Robot Ari Buzz Bomber
# ---------------------------------------------------------------------------
def build_buzzbomber():
    did = "cirak_sonic_buzzbomber"
    steps_data = [
        (
            "1. Adım: Arı Gövde Ovali",
            "Sol orta kısma robot arının yatay oval gövdesini çizelim.",
            "Hadi havada vızıldayan Buzz Bomber arısını çizelim! Ortaya yatay büyük bir oval çizerek başlayalım.",
            '<ellipse cx="268" cy="260" rx="84" ry="62" fill="none" stroke="#0f172a" stroke-width="5.5"/>',
        ),
        (
            "2. Adım: Kafa Vizörü ve Göz Çerçevesi",
            "Ön kısmına kafa çizgisi ve keskin açılı robot gözünü çizelim.",
            "Şimdi ön tarafına kafa ayrım çizgisini ve üçgen robot göz çerçevesini çizelim.",
            '<path d="M 205,212 Q 215,260 198,302" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/><path d="M 190,236 L 240,256 L 210,278 Z" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>',
        ),
        (
            "3. Adım: Göz Bebeği ve Kaş Plakası",
            "Gözün içine koyu göz bebeğini ve üstüne kaş plakasını ekleyelim.",
            "Harika! Gözün ortasına siyah noktayı ve üstüne sert bakışlı kaş çizgisini koyalım.",
            '<circle cx="218" cy="257" r="7" fill="#0f172a"/><path d="M 218,225 L 252,248 L 222,250 Z" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linejoin="round"/>',
        ),
        (
            "4. Adım: İki Küçük Anten",
            "Kafasının üstünden öne doğru iki tane kıvrık anten çizelim.",
            "Başının üstünden iki sevimli anten sapı uzatalım.",
            '<path d="M 225,204 Q 204,160 176,158 M 248,198 Q 238,150 214,146" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>',
        ),
        (
            "5. Adım: Anten Uç Toplar",
            "Her iki antenin ucuna birer küçük yuvarlak top ekleyelim.",
            "Antenlerin uçlarına birer küçük daire yerleştirip tamamlayalım.",
            '<circle cx="172" cy="158" r="9" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="211" cy="146" r="9" fill="none" stroke="#0f172a" stroke-width="4"/>',
        ),
        (
            "6. Adım: Büyük Arı Kuyruğu",
            "Arkaya aşağı kıvrılan büyük bir arı karın kuyruğu çizelim.",
            "Şimdi Buzz Bomber'ın arkaya doğru uzanan büyük arı kuyruğunu çizelim.",
            '<path d="M 342,272 C 425,275 480,335 452,418 C 430,455 375,455 346,408 C 318,365 318,312 342,272 Z" fill="none" stroke="#0f172a" stroke-width="5.5" stroke-linejoin="round"/>',
        ),
        (
            "7. Adım: Arı Çizgileri",
            "Kuyruğun üzerine iki kavisli arı şeridi çizgisi çekelim.",
            "Arıların güzel siyah sarı çizgileri için gövdeye iki kavisli şerit çizelim.",
            '<path d="M 332,326 Q 395,305 452,334" fill="none" stroke="#0f172a" stroke-width="4.5"/><path d="M 328,368 Q 395,346 456,378" fill="none" stroke="#0f172a" stroke-width="4.5"/>',
        ),
        (
            "8. Adım: Alt Kuyruk Şeridi",
            "Kuyruğun alt ucuna bir şerit çizgisi daha ekleyelim.",
            "Kuyruğun ucu için bir şerit çizgisi daha atalım.",
            '<path d="M 356,412 Q 402,395 440,425" fill="none" stroke="#0f172a" stroke-width="4.5"/>',
        ),
        (
            "9. Adım: Sivri İğne Lazeri",
            "Kuyruğun altından sivri bir üçgen iğne çıkaralım.",
            "İşte arının lazer iğnesi! Kuyruğun altına sivri bir üçgen iğne çizelim.",
            '<path d="M 380,444 L 352,492 L 408,452 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>',
        ),
        (
            "10. Adım: Lazer Işın Kıvılcımları",
            "İğnenin ucundan çıkan üç kısa lazer kıvılcım çizgisi ekleyelim.",
            "İğnenin ucuna minik lazer kıvılcımları ekleyelim.",
            '<path d="M 345,488 L 325,512 M 340,480 L 316,492 M 356,498 L 348,522" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>',
        ),
        (
            "11. Adım: Sırt Jetpack Yuvası",
            "Sırtının üstüne kanatların bağlandığı mekanik yuvayı çizelim.",
            "Sırtının tepesine kanat motorunun yuvasını çizelim.",
            '<path d="M 285,204 Q 332,188 345,222 L 320,242 Z" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>',
        ),
        (
            "12. Adım: Büyük Üst Kanat",
            "Sırtından yukarı ve geriye açılan büyük bir arı kanadı çizelim.",
            "Şimdi hızlı uçabilmesi için kocaman bir üst kanat çizelim.",
            '<path d="M 326,204 C 370,92 490,88 492,158 C 492,202 418,225 335,218 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>',
        ),
        (
            "13. Adım: Küçük Alt Kanat",
            "Üst kanadın hemen altına ikinci küçük kanadı ekleyelim.",
            "Altına destek için ikinci bir şeffaf kanat daha ekleyelim.",
            '<path d="M 348,214 C 415,172 522,186 512,245 C 505,278 430,275 344,230 Z" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>',
        ),
        (
            "14. Adım: Kanat Damarları",
            "Her iki kanadın içine birer ince kanat damarı çizgisi çekelim.",
            "Kanatların içine gerçek arı kanadı gibi ince damar çizgileri çizelim.",
            '<path d="M 365,168 L 456,142 M 382,226 L 478,224" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>',
        ),
        (
            "15. Adım: Ön Robot Bacağı",
            "Gövdenin altından kıvrılan ön bacağını kalın hatla çizelim.",
            "Gövdenin altındaki katlı ön robot bacağını ekleyelim.",
            '<path d="M 248,318 L 228,365 L 258,392" fill="none" stroke="#0f172a" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>',
        ),
        (
            "16. Adım: Arka Robot Bacağı",
            "Yanına aynı şekilde ikinci bir katlı bacak daha çizelim.",
            "Hemen yanına ikinci mekanik bacağını da çizelim.",
            '<path d="M 288,318 L 274,368 L 302,395" fill="none" stroke="#0f172a" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>',
        ),
        (
            "17. Adım: Vızıltı Çizgileri",
            "Kanat üstüne uçuş vızıltı çizgileri ve alta gölge çizgisi ekleyelim.",
            "Kanatların üstüne vızıltı çizgilerini, alta da gölge çizgisini koyalım. Boyamaya hazır!",
            '<path d="M 390,94 Q 445,74 495,94 M 415,78 Q 455,64 490,78 M 200,515 Q 315,528 430,515" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>',
        ),
    ]

    final_svg = """
    <defs>
      <linearGradient id="bb_blue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#60a5fa"/>
        <stop offset="55%" stop-color="#2563eb"/>
        <stop offset="100%" stop-color="#1e3a8a"/>
      </linearGradient>
      <linearGradient id="bb_yellow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fef08a"/>
        <stop offset="55%" stop-color="#facc15"/>
        <stop offset="100%" stop-color="#ca8a04"/>
      </linearGradient>
      <linearGradient id="bb_wing" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#e0f2fe" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#7dd3fc" stop-opacity="0.75"/>
      </linearGradient>
    </defs>
    <ellipse cx="315" cy="516" rx="120" ry="14" fill="#cbd5e1" opacity="0.6"/>
    <path d="M 348,214 C 415,172 522,186 512,245 C 505,278 430,275 344,230 Z" fill="url(#bb_wing)" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M 382,226 L 478,224" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M 326,204 C 370,92 490,88 492,158 C 492,202 418,225 335,218 Z" fill="url(#bb_wing)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
    <path d="M 365,168 L 456,142" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M 285,204 Q 332,188 345,222 L 320,242 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M 248,318 L 228,365 L 258,392" fill="none" stroke="#0f172a" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 248,318 L 228,365 L 258,392" fill="none" stroke="#94a3b8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 288,318 L 274,368 L 302,395" fill="none" stroke="#0f172a" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 288,318 L 274,368 L 302,395" fill="none" stroke="#94a3b8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 380,444 L 352,492 L 408,452 Z" fill="#cbd5e1" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
    <path d="M 342,272 C 425,275 480,335 452,418 C 430,455 375,455 346,408 C 318,365 318,312 342,272 Z" fill="url(#bb_yellow)" stroke="#0f172a" stroke-width="5.5" stroke-linejoin="round"/>
    <path d="M 330,326 Q 395,305 452,334 L 456,374 Q 395,346 328,366 Z" fill="#1e293b" stroke="#0f172a" stroke-width="4"/>
    <path d="M 352,412 Q 402,395 442,424 C 422,452 378,448 352,412 Z" fill="#1e293b" stroke="#0f172a" stroke-width="4"/>
    <path d="M 225,204 Q 204,160 176,158 M 248,198 Q 238,150 214,146" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
    <circle cx="172" cy="158" r="9" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
    <circle cx="211" cy="146" r="9" fill="#ef4444" stroke="#0f172a" stroke-width="4"/>
    <ellipse cx="268" cy="260" rx="84" ry="62" fill="url(#bb_blue)" stroke="#0f172a" stroke-width="5.5"/>
    <path d="M 205,212 Q 215,260 198,302 C 180,285 180,234 205,212 Z" fill="#334155" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M 190,236 L 240,256 L 210,278 Z" fill="#ef4444" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <circle cx="216" cy="256" r="7" fill="#fef08a"/>
    <path d="M 248,214 Q 290,206 325,232" fill="none" stroke="#93c5fd" stroke-width="7" stroke-linecap="round" opacity="0.75"/>
    <path d="M 345,488 L 325,512 M 340,480 L 316,492 M 356,498 L 348,522" fill="none" stroke="#f97316" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M 390,94 Q 445,74 495,94 M 415,78 Q 455,64 490,78" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/>
    """

    colors = [
        {"name": "Robot Mavisi", "hex": "#2563eb"},
        {"name": "Arı Sarısı", "hex": "#facc15"},
        {"name": "Buz Mavisi", "hex": "#7dd3fc"},
        {"name": "Lazer Kırmızısı", "hex": "#ef4444"},
    ]

    return make_drawing(
        did=did,
        name="Uçan Robot Arı Buzz Bomber",
        emoji="🐝",
        desc="Gökyüzünde vızıldayarak uçan mavi-sarı robot arı Buzz Bomber'ı çiz!",
        materials="Kağıt, siyah kalem, mavi, sarı, açık mavi ve kırmızı boya",
        welcome_text="Vızzz! Merhaba Kıvanç! Şimdi Sonic'in en hızlı uçan robot rakiplerinden Buzz Bomber arısını adım adım çizeceğiz!",
        colors=colors,
        steps_data=steps_data,
        final_colored_svg=final_svg,
    )


# ---------------------------------------------------------------------------
# 13. Dev Boss: Olum Yumurtasi Robotu (Death Egg Robot)
# ---------------------------------------------------------------------------
def build_death_egg_robot():
    did = "cirak_sonic_death_egg_robot"
    steps_data = [
        (
            "1. Adım: Dev Yumurta Gövde",
            "Sayfanın ortasına dev bir yumurta şeklinde robot gövdesi çizelim.",
            "Şimdi devasa boss robot Ölüm Yumurtası Robotunu çiziyoruz! Ortaya kocaman bir yumurta gövdesi çizelim.",
            '<ellipse cx="300" cy="272" rx="115" ry="122" fill="none" stroke="#0f172a" stroke-width="6"/>',
        ),
        (
            "2. Adım: Cam Kokpit Kubbesi",
            "Robotun tepesine Dr. Eggman'in oturduğu yarım daire cam kokpiti çizelim.",
            "Gövdenin tam tepesine Eggman'in yönettiği yarım daire cam kokpiti ekleyelim.",
            '<path d="M 250,165 C 250,115 350,115 350,165 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>',
        ),
        (
            "3. Adım: Kokpitteki Eggman",
            "Cam kubbenin içine Eggman'in yuvarlak başını ve dev bıyıklarını çizelim.",
            "Camın içine Eggman'in minik yuvarlak başını ve iki yana açılan bıyıklarını çizelim!",
            '<circle cx="300" cy="144" r="14" fill="none" stroke="#0f172a" stroke-width="4"/><path d="M 272,158 Q 285,148 300,158 Q 315,148 328,158" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>',
        ),
        (
            "4. Adım: Göğüs Zırhı ve Çekirdek",
            "Gövdenin ortasından enine bir çizgi çekip ortasına kare enerji kutusu koyalım.",
            "Göğsüne zırh şeridini ve tam ortasına kare enerji çekirdeğini yerleştirelim.",
            '<path d="M 192,235 Q 300,256 408,235" fill="none" stroke="#0f172a" stroke-width="5"/><rect x="275" y="255" width="50" height="44" rx="8" fill="none" stroke="#0f172a" stroke-width="4.5"/>',
        ),
        (
            "5. Adım: Göğüs Havalandırmaları",
            "Çizginin üstüne sollu sağlı ikişer eğik havalandırma çizgisi çizelim.",
            "Göğsün iki yanına havalandırma çizgileri çizelim.",
            '<path d="M 262,210 L 245,232 M 280,210 L 263,234 M 320,210 L 337,234 M 338,210 L 355,232" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>',
        ),
        (
            "6. Adım: Sol Sivri Omuzluk",
            "Sol omuza yukarı kalkık kırmızı robot omuzluğu çizelim.",
            "Şimdi sol omuza sivri dev omuzluğu çizelim.",
            '<path d="M 195,212 C 138,168 118,225 148,266 L 194,252 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>',
        ),
        (
            "7. Adım: Sağ Sivri Omuzluk",
            "Aynısından simetrik olarak sağ omuza da çizelim.",
            "Sağ tarafa da eş omuzluğu ekleyelim.",
            '<path d="M 405,212 C 462,168 482,225 452,266 L 406,252 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>',
        ),
        (
            "8. Adım: Sol Güçlü Kol",
            "Sol omuzdan aşağı doğru inen kalın bir mekanik kol çizelim.",
            "Sol omuzdan aşağı doğru kalın ve güçlü piston kolu çizelim.",
            '<path d="M 155,260 L 122,315" fill="none" stroke="#0f172a" stroke-width="20" stroke-linecap="round"/>',
        ),
        (
            "9. Adım: Sağ Güçlü Kol",
            "Sağ omuzdan aşağı inen diğer kalın kolu ekleyelim.",
            "Sağ kolu da aşağıya doğru uzatalım.",
            '<path d="M 445,260 L 478,315" fill="none" stroke="#0f172a" stroke-width="20" stroke-linecap="round"/>',
        ),
        (
            "10. Adım: Sol Dikenli Yumruk",
            "Sol kolun ucuna yuvarlak dev yumruk ve iki sivri diken çizelim.",
            "Sol eline yuvarlak bir dev yumruk ve dikenlerini çizelim!",
            '<circle cx="110" cy="342" r="42" fill="none" stroke="#0f172a" stroke-width="5.5"/><path d="M 74,322 L 50,312 L 66,340 M 68,358 L 48,370 L 76,372" fill="none" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>',
        ),
        (
            "11. Adım: Sağ Dikenli Yumruk",
            "Sağ kolun ucuna da eş yuvarlak dikenli yumruğu çizelim.",
            "Sağ eline de aynı dikenli dev yumruğu çizelim!",
            '<circle cx="490" cy="342" r="42" fill="none" stroke="#0f172a" stroke-width="5.5"/><path d="M 526,322 L 550,312 L 534,340 M 532,358 L 552,370 L 524,372" fill="none" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>',
        ),
        (
            "12. Adım: Kalça Eklem Kemeri",
            "Yumurta gövdenin altına kemer şeklinde kalça eklemi çizelim.",
            "Dev gövdenin altına bacakları bağlayan kemer bölümünü çizelim.",
            '<path d="M 220,382 Q 300,406 380,382 L 368,412 Q 300,425 232,412 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>',
        ),
        (
            "13. Adım: Sol Kalın Bacak",
            "Kalçadan aşağı inen kalın bir robot bacağı çizelim.",
            "Sol bacağı kalın mekanik boru şeklinde aşağı indirelim.",
            '<path d="M 252,412 L 240,468" fill="none" stroke="#0f172a" stroke-width="26" stroke-linecap="round"/>',
        ),
        (
            "14. Adım: Sağ Kalın Bacak",
            "Yanına aynı kalınlıkta sağ bacağı da çizelim.",
            "Sağ bacağı da aynı şekilde çizelim.",
            '<path d="M 348,412 L 360,468" fill="none" stroke="#0f172a" stroke-width="26" stroke-linecap="round"/>',
        ),
        (
            "15. Adım: Dev Sol Jet Çizmesi",
            "Sol bacağın altına büyük köşeli dev robot ayağı çizelim.",
            "Sol ayağına yere sağlam basan dev zırhlı robot botu çizelim.",
            '<path d="M 192,470 L 274,470 L 278,512 L 178,512 Q 178,482 192,470 Z" fill="none" stroke="#0f172a" stroke-width="5.5" stroke-linejoin="round"/>',
        ),
        (
            "16. Adım: Dev Sağ Jet Çizmesi",
            "Sağ bacağın altına da simetrik dev botu ekleyelim.",
            "Sağ ayağına da büyük botunu çizelim.",
            '<path d="M 326,470 L 408,470 Q 422,482 422,512 L 322,512 Z" fill="none" stroke="#0f172a" stroke-width="5.5" stroke-linejoin="round"/>',
        ),
        (
            "17. Adım: Roket Alevi ve Zemin",
            "Botların altına küçük ateş üçgenleri ve yere gölge çizgisi koyalım.",
            "Ayakların altına ateş üçgenlerini ve zemin çizgisini koyalım. Boyamaya geçiyoruz!",
            '<path d="M 196,515 L 210,542 L 224,515 M 376,515 L 390,542 L 404,515" fill="none" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/><path d="M 145,548 Q 300,562 455,548" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>',
        ),
    ]

    final_svg = """
    <defs>
      <linearGradient id="der_body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f1f5f9"/>
        <stop offset="55%" stop-color="#cbd5e1"/>
        <stop offset="100%" stop-color="#64748b"/>
      </linearGradient>
      <linearGradient id="der_red" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f87171"/>
        <stop offset="100%" stop-color="#b91c1c"/>
      </linearGradient>
      <linearGradient id="der_gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fef08a"/>
        <stop offset="100%" stop-color="#eab308"/>
      </linearGradient>
    </defs>
    <ellipse cx="300" cy="548" rx="165" ry="15" fill="#cbd5e1" opacity="0.65"/>
    <path d="M 155,260 L 122,315" fill="none" stroke="#0f172a" stroke-width="24" stroke-linecap="round"/>
    <path d="M 155,260 L 122,315" fill="none" stroke="#94a3b8" stroke-width="12" stroke-linecap="round"/>
    <path d="M 445,260 L 478,315" fill="none" stroke="#0f172a" stroke-width="24" stroke-linecap="round"/>
    <path d="M 445,260 L 478,315" fill="none" stroke="#94a3b8" stroke-width="12" stroke-linecap="round"/>
    <path d="M 252,412 L 240,468" fill="none" stroke="#0f172a" stroke-width="32" stroke-linecap="round"/>
    <path d="M 252,412 L 240,468" fill="none" stroke="#94a3b8" stroke-width="18" stroke-linecap="round"/>
    <path d="M 348,412 L 360,468" fill="none" stroke="#0f172a" stroke-width="32" stroke-linecap="round"/>
    <path d="M 348,412 L 360,468" fill="none" stroke="#94a3b8" stroke-width="18" stroke-linecap="round"/>
    <path d="M 220,382 Q 300,406 380,382 L 368,412 Q 300,425 232,412 Z" fill="#334155" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
    <path d="M 192,470 L 274,470 L 278,512 L 178,512 Q 178,482 192,470 Z" fill="url(#der_red)" stroke="#0f172a" stroke-width="5.5" stroke-linejoin="round"/>
    <path d="M 326,470 L 408,470 Q 422,482 422,512 L 322,512 Z" fill="url(#der_red)" stroke="#0f172a" stroke-width="5.5" stroke-linejoin="round"/>
    <path d="M 196,515 L 210,542 L 224,515 Z" fill="#f97316" stroke="#0f172a" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M 376,515 L 390,542 L 404,515 Z" fill="#f97316" stroke="#0f172a" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M 250,165 C 250,115 350,115 350,165 Z" fill="#4ade80" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
    <circle cx="300" cy="144" r="14" fill="#fdba74" stroke="#0f172a" stroke-width="3.5"/>
    <circle cx="294" cy="140" r="4" fill="#38bdf8" stroke="#0f172a" stroke-width="2"/>
    <circle cx="306" cy="140" r="4" fill="#38bdf8" stroke="#0f172a" stroke-width="2"/>
    <path d="M 272,158 Q 285,148 300,158 Q 315,148 328,158" fill="none" stroke="#9a3412" stroke-width="5.5" stroke-linecap="round"/>
    <ellipse cx="300" cy="272" rx="115" ry="122" fill="url(#der_body)" stroke="#0f172a" stroke-width="6"/>
    <path d="M 192,235 Q 300,256 408,235" fill="none" stroke="#0f172a" stroke-width="5"/>
    <rect x="275" y="255" width="50" height="44" rx="8" fill="#334155" stroke="#0f172a" stroke-width="4.5"/>
    <circle cx="300" cy="277" r="12" fill="#ef4444" stroke="#0f172a" stroke-width="3"/>
    <path d="M 262,210 L 245,232 M 280,210 L 263,234 M 320,210 L 337,234 M 338,210 L 355,232" fill="none" stroke="#dc2626" stroke-width="5" stroke-linecap="round"/>
    <path d="M 195,212 C 138,168 118,225 148,266 L 194,252 Z" fill="url(#der_red)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
    <path d="M 405,212 C 462,168 482,225 452,266 L 406,252 Z" fill="url(#der_red)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
    <circle cx="110" cy="342" r="42" fill="url(#der_gold)" stroke="#0f172a" stroke-width="5.5"/>
    <path d="M 74,322 L 50,312 L 66,340 Z M 68,358 L 48,370 L 76,372 Z" fill="#cbd5e1" stroke="#0f172a" stroke-width="3.5" stroke-linejoin="round"/>
    <circle cx="490" cy="342" r="42" fill="url(#der_gold)" stroke="#0f172a" stroke-width="5.5"/>
    <path d="M 526,322 L 550,312 L 534,340 Z M 532,358 L 552,370 L 524,372 Z" fill="#cbd5e1" stroke="#0f172a" stroke-width="3.5" stroke-linejoin="round"/>
    """

    colors = [
        {"name": "Çelik Grisi", "hex": "#cbd5e1"},
        {"name": "Zırh Kırmızısı", "hex": "#b91c1c"},
        {"name": "Altın Sarısı", "hex": "#eab308"},
        {"name": "Kokpit Yeşili", "hex": "#4ade80"},
    ]

    return make_drawing(
        did=did,
        name="Ölüm Yumurtası Robotu",
        emoji="🤖",
        desc="Sonic'in karşısına çıkan efsane dev boss Death Egg Robot'u çiz!",
        materials="Kağıt, siyah kalem, gri, kırmızı, sarı ve yeşil boya",
        welcome_text="Hazır mısın Kıvanç? Bugün en büyük patron robot Ölüm Yumurtası Robotunu çizeceğiz! Dev yumrukları ve roket botlarıyla efsane görünecek!",
        colors=colors,
        steps_data=steps_data,
        final_colored_svg=final_svg,
    )


# ---------------------------------------------------------------------------
# 14. Sonic Guc Kutulari / Monitorler
# ---------------------------------------------------------------------------
def build_monitor():
    did = "cirak_sonic_monitor"
    steps_data = [
        (
            "1. Adım: Sol Monitör Kutusu",
            "Sol üste yuvarlatılmış köşeli bir televizyon monitör çerçevesi çizelim.",
            "Oyunlarda Sonic'e süper güçler veren monitör kutularından iki tane çizelim! Sol üste birinci kutuyu çizerek başlayalım.",
            '<rect x="75" y="135" width="205" height="190" rx="18" fill="none" stroke="#0f172a" stroke-width="5.5"/>',
        ),
        (
            "2. Adım: Birinci İç Ekran",
            "Kutunun içine daha küçük bir iç ekran dikdörtgeni çizelim.",
            "Kutunun tam ortasına iç ekran çerçevesini çizelim.",
            '<rect x="98" y="158" width="159" height="132" rx="10" fill="none" stroke="#0f172a" stroke-width="4.5"/>',
        ),
        (
            "3. Adım: Monitör Ayaklığı",
            "Altına genişleyen yamuk şeklinde bir monitör ayağı ekleyelim.",
            "Kutunun yere oturması için altına trapez ayaklığını çizelim.",
            '<path d="M 118,325 L 238,325 L 252,362 L 104,362 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>',
        ),
        (
            "4. Adım: Düğmeler ve Hoparlör",
            "Ekranın altına iki kısa çizgi ve minik açma düğmesi ekleyelim.",
            "Ekran altına hoparlör çizgilerini ve minik yuvarlak düğmeyi koyalım.",
            '<path d="M 122,296 L 146,296 M 208,296 L 232,296" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><circle cx="242" cy="306" r="6" fill="#0f172a"/>',
        ),
        (
            "5. Adım: Altın Yüzük İkonu",
            "Ekranın içine büyük bir altın yüzük halkası çizelim.",
            "Birinci kutumuz 10 Altın Yüzük veriyor! İçine iç içe iki daireyle büyük bir yüzük çizelim.",
            '<circle cx="177" cy="218" r="38" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="177" cy="218" r="22" fill="none" stroke="#0f172a" stroke-width="4.5"/>',
        ),
        (
            "6. Adım: 10 Sayısı",
            "Yüzüğün sol alt köşesine küçük bir 10 sayısı yazalım.",
            "Köşesine 10 tane yüzük olduğunu göstermek için 10 yazalım.",
            '<path d="M 114,254 L 114,280" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><ellipse cx="128" cy="267" rx="8" ry="12" fill="none" stroke="#0f172a" stroke-width="4"/>',
        ),
        (
            "7. Adım: Monitör Antenleri",
            "Kutunun üstünden V şeklinde iki küçük anten çıkaralım.",
            "Kutunun tepesine sağa ve sola açılan iki küçük anten çizelim.",
            '<path d="M 125,135 L 102,95 M 228,135 L 250,95" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>',
        ),
        (
            "8. Adım: Sağdaki Süper Hız Monitörü",
            "Sağ alt tarafa ikinci büyük monitör kutusunu çizelim.",
            "Şimdi sağ tarafa biraz daha önde duran ikinci monitörümüzü çizelim.",
            '<rect x="315" y="210" width="210" height="196" rx="18" fill="none" stroke="#0f172a" stroke-width="5.5"/>',
        ),
        (
            "9. Adım: İkinci İç Ekran",
            "İkinci kutunun içine de ekran dikdörtgenini yerleştirelim.",
            "Sağdaki kutunun da ekran çerçevesini çizelim.",
            '<rect x="338" y="234" width="164" height="136" rx="10" fill="none" stroke="#0f172a" stroke-width="4.5"/>',
        ),
        (
            "10. Adım: İkinci Ayaklık",
            "Bu monitörün altına da genişleyen ayaklığını çizelim.",
            "Altına sağlam ayaklığını da ekleyelim.",
            '<path d="M 358,406 L 482,406 L 498,444 L 342,444 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>',
        ),
        (
            "11. Adım: İkinci Düğme Detayı",
            "Alt kenara hoparlör çizgilerini ve açma düğmesini ekleyelim.",
            "Bu ekranın da hoparlör çizgilerini ve düğmesini koyalım.",
            '<path d="M 364,376 L 392,376 M 446,376 L 474,376" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/><circle cx="486" cy="386" r="6" fill="#0f172a"/>',
        ),
        (
            "12. Adım: Sonic Ayakkabı İkonu",
            "Ekranın içine Sonic'in kırmızı koşu ayakkabısının ana hattını çizelim.",
            "Bu kutu Süper Hız Kutusu! İçine Sonic'in hızlı ayakkabısını çizelim.",
            '<path d="M 378,276 L 430,276 Q 484,296 474,330 L 368,330 Q 368,302 378,276 Z" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>',
        ),
        (
            "13. Adım: Ayakkabı Şeridi ve Tabanı",
            "Ayakkabının alt tabanını ve ortasındaki beyaz şeridi çizelim.",
            "Ayakkabının tabanını ve yan şeridini ekleyelim.",
            '<path d="M 370,316 L 474,316 M 374,296 L 456,296" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>',
        ),
        (
            "14. Adım: Altın Toka",
            "Şeridin üzerine küçük kare ayakkabı tokası çizelim.",
            "Ayakkabının yanına küçük kare tokasını koyalım.",
            '<rect x="394" y="286" width="18" height="20" rx="3" fill="none" stroke="#0f172a" stroke-width="3.5"/>',
        ),
        (
            "15. Adım: Ayakkabı Bilek Kıvrımı",
            "Ayakkabının üst kısmına yumuşak bilek kavisini ekleyelim.",
            "Üst kısmına bilek yakasını da ekleyelim.",
            '<path d="M 376,276 Q 402,258 432,276" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>',
        ),
        (
            "16. Adım: Hız Şimşeği",
            "Sağ monitörün tam üstüne havalı bir şimşek işareti çizelim.",
            "Süper hız kutusunun üstüne şimşek işareti çizelim!",
            '<path d="M 422,162 L 404,190 L 424,190 L 406,216" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
        ),
        (
            "17. Adım: Parıltı Yıldızı ve Zemin",
            "Üste parıltı yıldızı ve alta zemin çizgisi ekleyelim.",
            "Sol üst tarafa parlak bir yıldız ve altlarına gölge çizgisini çizip boyamaya geçelim!",
            '<path d="M 178,104 L 184,116 L 196,122 L 184,128 L 178,140 L 172,128 L 160,122 L 172,116 Z" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linejoin="round"/><path d="M 85,468 Q 295,482 520,468" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>',
        ),
    ]

    final_svg = """
    <defs>
      <linearGradient id="mon_gray" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#e2e8f0"/>
        <stop offset="60%" stop-color="#94a3b8"/>
        <stop offset="100%" stop-color="#64748b"/>
      </linearGradient>
      <linearGradient id="mon_screen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1e293b"/>
        <stop offset="100%" stop-color="#0f172a"/>
      </linearGradient>
      <linearGradient id="mon_gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fef08a"/>
        <stop offset="100%" stop-color="#eab308"/>
      </linearGradient>
    </defs>
    <ellipse cx="178" cy="368" rx="90" ry="12" fill="#cbd5e1" opacity="0.6"/>
    <ellipse cx="420" cy="452" rx="95" ry="13" fill="#cbd5e1" opacity="0.65"/>
    <path d="M 125,135 L 102,95 M 228,135 L 250,95" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
    <circle cx="102" cy="95" r="7" fill="#ef4444" stroke="#0f172a" stroke-width="3"/>
    <circle cx="250" cy="95" r="7" fill="#ef4444" stroke="#0f172a" stroke-width="3"/>
    <path d="M 118,325 L 238,325 L 252,362 L 104,362 Z" fill="#475569" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
    <rect x="75" y="135" width="205" height="190" rx="18" fill="url(#mon_gray)" stroke="#0f172a" stroke-width="5.5"/>
    <rect x="98" y="158" width="159" height="132" rx="10" fill="url(#mon_screen)" stroke="#0f172a" stroke-width="4.5"/>
    <path d="M 122,298 L 146,298 M 208,298 L 232,298" fill="none" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
    <circle cx="242" cy="306" r="6" fill="#22c55e"/>
    <circle cx="177" cy="218" r="38" fill="url(#mon_gold)" stroke="#0f172a" stroke-width="4.5"/>
    <circle cx="177" cy="218" r="20" fill="#0f172a" stroke="#facc15" stroke-width="3"/>
    <path d="M 112,254 L 112,280" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="128" cy="267" rx="8" ry="12" fill="none" stroke="#ffffff" stroke-width="4.5"/>
    <path d="M 110,168 L 145,168" fill="none" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
    <path d="M 358,406 L 482,406 L 498,444 L 342,444 Z" fill="#475569" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
    <rect x="315" y="210" width="210" height="196" rx="18" fill="url(#mon_gray)" stroke="#0f172a" stroke-width="5.5"/>
    <rect x="338" y="234" width="164" height="136" rx="10" fill="url(#mon_screen)" stroke="#0f172a" stroke-width="4.5"/>
    <path d="M 364,378 L 392,378 M 446,378 L 474,378" fill="none" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
    <circle cx="486" cy="386" r="6" fill="#22c55e"/>
    <path d="M 378,276 Q 402,258 432,276 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
    <path d="M 378,276 L 430,276 Q 484,296 474,330 L 368,330 Q 368,302 378,276 Z" fill="#ef4444" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M 370,318 L 474,318 L 474,330 L 368,330 Z" fill="#cbd5e1" stroke="#0f172a" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M 372,296 L 456,296" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
    <rect x="394" y="286" width="18" height="20" rx="3" fill="#facc15" stroke="#0f172a" stroke-width="3.5"/>
    <path d="M 422,162 L 404,190 L 424,190 L 406,216" fill="none" stroke="#facc15" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 178,104 L 184,116 L 196,122 L 184,128 L 178,140 L 172,128 L 160,122 L 172,116 Z" fill="#fde047" stroke="#0f172a" stroke-width="3" stroke-linejoin="round"/>
    """

    colors = [
        {"name": "Kutu Grisi", "hex": "#94a3b8"},
        {"name": "Altın Sarısı", "hex": "#eab308"},
        {"name": "Hız Kırmızısı", "hex": "#ef4444"},
        {"name": "Ekran Siyahı", "hex": "#1e293b"},
    ]

    return make_drawing(
        did=did,
        name="Sonic Güç Monitörleri",
        emoji="📺",
        desc="10 Altın Yüzük ve Süper Hız Ayakkabısı veren klasik Sonic güç monitörlerini çiz!",
        materials="Kağıt, siyah kalem, gri, kırmızı, altın sarısı ve siyah boya",
        welcome_text="Merhaba Kıvanç! Bugün oyunlarda Sonic'in kırıp altın yüzük ve süper hız kazandığı güç monitörlerini çizeceğiz. Çok havalı olacak!",
        colors=colors,
        steps_data=steps_data,
        final_colored_svg=final_svg,
    )


# ---------------------------------------------------------------------------
# 15. Green Hill Zone Dongu Yolu & Palmiye
# ---------------------------------------------------------------------------
def build_green_hill():
    did = "cirak_sonic_green_hill_kale"
    steps_data = [
        (
            "1. Adım: Green Hill Zemin Bloğu",
            "Alt tarafa geniş ve düz bir Green Hill zemin dikdörtgeni çizelim.",
            "Son çizimimizde Sonic'in en ünlü dünyası Green Hill Zone'u çizeceğiz! Alt tarafa geniş zemin bloğunu çizerek başlayalım.",
            '<path d="M 45,455 L 555,455 L 555,545 L 45,545 Z" fill="none" stroke="#0f172a" stroke-width="5.5" stroke-linejoin="round"/>',
        ),
        (
            "2. Adım: Dalgalı Çimen Kenarı",
            "Zeminin üst kısmına dalga dalga sarkan çimen çizgisi çizelim.",
            "Zeminin üst kenarına yemyeşil çimler için dalgalı sınırı çizelim.",
            '<path d="M 45,472 Q 110,492 175,472 Q 240,492 305,472 Q 370,492 435,472 Q 500,492 555,472" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/>',
        ),
        (
            "3. Adım: Damalı Kaya Kareleri",
            "Zemini dikey ve yatay çizgilerle kare kare damalı hale getirelim.",
            "Green Hill'in meşhur damalı deseni için zemini çizgilerle kare kare bölelim!",
            '<path d="M 110,478 L 110,545 M 175,472 L 175,545 M 240,478 L 240,545 M 305,472 L 305,545 M 370,478 L 370,545 M 435,472 L 435,545 M 500,478 L 500,545 M 45,510 L 555,510" fill="none" stroke="#0f172a" stroke-width="3.5"/>',
        ),
        (
            "4. Adım: Dev Döngü Yolu Dış Halkası",
            "Ortadan kocaman bir köprü gibi dönen dev halka yolunun dış kemerini çizelim.",
            "Şimdi Sonic'in hızla döneceği kocaman daire yolun dış kemerini çizelim!",
            '<path d="M 155,455 C 125,295 215,155 308,155 C 405,155 495,295 462,455" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>',
        ),
        (
            "5. Adım: Döngü Yolu İç Kemeri",
            "Dış kemerin içine ikinci bir paralel kavis çizip yolu ortaya çıkaralım.",
            "İç tarafına da aynı kavisi çizerek dönen yolu oluşturalım.",
            '<path d="M 208,455 C 192,315 245,212 308,212 C 372,212 425,315 410,455" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>',
        ),
        (
            "6. Adım: Yolun Kesik Şerit Çizgisi",
            "Yolun tam ortasına kesik çizgili yarış şeridi çizelim.",
            "Yolun ortasından kesik çizgili yarış pisti çizgisi geçirelim.",
            '<path d="M 178,455 C 156,305 225,182 308,182 C 392,182 460,305 438,455" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-dasharray="14 10"/>',
        ),
        (
            "7. Adım: Palmiye Ağacı Gövdesi",
            "Sol tarafa yukarı uzanan hafif eğri bir palmiye gövdesi çizelim.",
            "Sol tarafa tropikal bir Green Hill palmiye ağacı gövdesi çizelim.",
            '<path d="M 102,455 Q 85,345 108,235 L 136,238 Q 116,345 134,455 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>',
        ),
        (
            "8. Adım: Gövde Boğumları",
            "Palmiye gövdesinin üzerine enine kısa boğum çizgileri ekleyelim.",
            "Ağaç gövdesine minik çizgiler ekleyip gövdeyi gerçekçi yapalım.",
            '<path d="M 100,415 L 130,415 M 102,370 L 128,370 M 104,325 L 130,325 M 106,280 L 132,280" fill="none" stroke="#0f172a" stroke-width="3.5"/>',
        ),
        (
            "9. Adım: Sol Palmiye Yaprağı",
            "Ağacın tepesinden sola doğru sarkan büyük bir yaprak çizelim.",
            "Tepesinden sola uzanan yeşil bir palmiye yaprağı çizelim.",
            '<path d="M 118,235 C 72,188 32,218 48,255 C 66,242 92,240 118,235 Z" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>',
        ),
        (
            "10. Adım: Üst Palmiye Yaprağı",
            "Tam tepeye yukarı doğru açılan ikinci yaprağı çizelim.",
            "Yukarı bakan ikinci büyük palmiye yaprağını ekleyelim.",
            '<path d="M 118,235 C 88,165 135,135 162,175 C 145,195 132,218 118,235 Z" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>',
        ),
        (
            "11. Adım: Sağ Palmiye Yaprağı",
            "Sağ tarafa açılan üçüncü palmiye yaprağını çizelim.",
            "Sağ tarafa da güzel bir yaprak daha ekleyelim.",
            '<path d="M 118,235 C 152,188 202,202 195,244 C 165,240 140,238 118,235 Z" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>',
        ),
        (
            "12. Adım: İki Küçük Hindistan Cevizi",
            "Yaprakların hemen altına iki tane yuvarlak hindistan cevizi çizelim.",
            "Yaprakların dibine iki küçük hindistan cevizi ekleyelim.",
            '<circle cx="110" cy="245" r="10" fill="none" stroke="#0f172a" stroke-width="3.5"/><circle cx="130" cy="246" r="10" fill="none" stroke="#0f172a" stroke-width="3.5"/>',
        ),
        (
            "13. Adım: Üç Altın Yüzük Halkası",
            "Döngü yolunun üst kavisine üç tane altın yüzük dairesi dizelim.",
            "Yolun üzerine Sonic'in toplayacağı üç büyük altın yüzük çizelim!",
            '<circle cx="242" cy="222" r="16" fill="none" stroke="#0f172a" stroke-width="4.5"/><circle cx="308" cy="184" r="17" fill="none" stroke="#0f172a" stroke-width="4.5"/><circle cx="374" cy="222" r="16" fill="none" stroke="#0f172a" stroke-width="4.5"/>',
        ),
        (
            "14. Adım: Yüzük İç Halkaları",
            "Üç yüzüğün de ortasına birer küçük iç daire ekleyelim.",
            "Yüzüklerin ortasındaki küçük delikleri de çizelim.",
            '<circle cx="242" cy="222" r="7" fill="none" stroke="#0f172a" stroke-width="3.5"/><circle cx="308" cy="184" r="8" fill="none" stroke="#0f172a" stroke-width="3.5"/><circle cx="374" cy="222" r="7" fill="none" stroke="#0f172a" stroke-width="3.5"/>',
        ),
        (
            "15. Adım: Yıldızlı Kayıt Direği",
            "Sağ tarafa yıldızlı checkpoint direğini ve yuvarlak tabelasını çizelim.",
            "Sağ tarafa Sonic'in geçip kaydettiği yıldızlı kontrol direğini çizelim.",
            '<path d="M 505,455 L 505,365" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><circle cx="505" cy="342" r="22" fill="none" stroke="#0f172a" stroke-width="4.5"/>',
        ),
        (
            "16. Adım: Direk Yıldızı",
            "Yuvarlak tabelanın tam içine beş köşeli bir yıldız çizelim.",
            "Tabelanın içine harika bir yıldız çizelim!",
            '<path d="M 505,326 L 510,337 L 522,338 L 513,346 L 515,358 L 505,352 L 495,358 L 497,346 L 488,338 L 500,337 Z" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linejoin="round"/>',
        ),
        (
            "17. Adım: Pofuduk Gökyüzü Bulutu",
            "Sağ üst köşeye pofuduk bir bulut çizip sahnemizi bitirelim.",
            "Sağ üst gökyüzüne tatlı bir bulut çizelim. Şimdi Green Hill'i rengarenk boyuyoruz!",
            '<path d="M 380,108 C 392,82 430,82 440,104 C 462,102 472,128 450,136 L 382,136 C 362,132 365,108 380,108 Z" fill="none" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>',
        ),
    ]

    final_svg = """
    <defs>
      <linearGradient id="gh_sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e0f2fe"/>
        <stop offset="100%" stop-color="#bae6fd"/>
      </linearGradient>
      <linearGradient id="gh_grass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4ade80"/>
        <stop offset="100%" stop-color="#16a34a"/>
      </linearGradient>
    </defs>
    <rect x="45" y="75" width="510" height="380" rx="22" fill="url(#gh_sky)" opacity="0.65"/>
    <path d="M 380,108 C 392,82 430,82 440,104 C 462,102 472,128 450,136 L 382,136 C 362,132 365,108 380,108 Z" fill="#ffffff" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
    <path d="M 155,455 C 125,295 215,155 308,155 C 405,155 495,295 462,455 L 410,455 C 425,315 372,212 308,212 C 245,212 192,315 208,455 Z" fill="#b45309" stroke="#0f172a" stroke-width="5.5" stroke-linejoin="round"/>
    <path d="M 164,455 C 138,300 220,168 308,168 C 398,168 480,300 452,455" fill="none" stroke="#4ade80" stroke-width="14" stroke-linecap="round"/>
    <path d="M 178,455 C 156,305 225,182 308,182 C 392,182 460,305 438,455" fill="none" stroke="#fde047" stroke-width="4.5" stroke-dasharray="14 10"/>
    <rect x="45" y="455" width="510" height="90" fill="#92400e" stroke="#0f172a" stroke-width="5.5" stroke-linejoin="round"/>
    <rect x="45" y="472" width="65" height="38" fill="#d97706"/>
    <rect x="175" y="472" width="65" height="38" fill="#d97706"/>
    <rect x="305" y="472" width="65" height="38" fill="#d97706"/>
    <rect x="435" y="472" width="65" height="38" fill="#d97706"/>
    <rect x="110" y="510" width="65" height="35" fill="#d97706"/>
    <rect x="240" y="510" width="65" height="35" fill="#d97706"/>
    <rect x="370" y="510" width="65" height="35" fill="#d97706"/>
    <rect x="500" y="510" width="55" height="35" fill="#d97706"/>
    <path d="M 110,478 L 110,545 M 175,472 L 175,545 M 240,478 L 240,545 M 305,472 L 305,545 M 370,478 L 370,545 M 435,472 L 435,545 M 500,478 L 500,545 M 45,510 L 555,510" fill="none" stroke="#0f172a" stroke-width="3.5"/>
    <path d="M 45,455 L 555,455 L 555,472 Q 500,492 435,472 Q 370,492 305,472 Q 240,492 175,472 Q 110,492 45,472 Z" fill="url(#gh_grass)" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M 102,455 Q 85,345 108,235 L 136,238 Q 116,345 134,455 Z" fill="#b45309" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
    <path d="M 100,415 L 130,415 M 102,370 L 128,370 M 104,325 L 130,325 M 106,280 L 132,280" fill="none" stroke="#0f172a" stroke-width="3.5"/>
    <circle cx="110" cy="245" r="10" fill="#78350f" stroke="#0f172a" stroke-width="3.5"/>
    <circle cx="130" cy="246" r="10" fill="#78350f" stroke="#0f172a" stroke-width="3.5"/>
    <path d="M 118,235 C 72,188 32,218 48,255 C 66,242 92,240 118,235 Z" fill="#22c55e" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M 118,235 C 88,165 135,135 162,175 C 145,195 132,218 118,235 Z" fill="#4ade80" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M 118,235 C 152,188 202,202 195,244 C 165,240 140,238 118,235 Z" fill="#22c55e" stroke="#0f172a" stroke-width="4.5" stroke-linejoin="round"/>
    <circle cx="242" cy="222" r="16" fill="#facc15" stroke="#0f172a" stroke-width="4.5"/>
    <circle cx="242" cy="222" r="7" fill="#bae6fd" stroke="#0f172a" stroke-width="3"/>
    <circle cx="308" cy="184" r="17" fill="#facc15" stroke="#0f172a" stroke-width="4.5"/>
    <circle cx="308" cy="184" r="8" fill="#bae6fd" stroke="#0f172a" stroke-width="3"/>
    <circle cx="374" cy="222" r="16" fill="#facc15" stroke="#0f172a" stroke-width="4.5"/>
    <circle cx="374" cy="222" r="7" fill="#bae6fd" stroke="#0f172a" stroke-width="3"/>
    <path d="M 505,455 L 505,365" fill="none" stroke="#0f172a" stroke-width="11" stroke-linecap="round"/>
    <path d="M 505,455 L 505,365" fill="none" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
    <circle cx="505" cy="342" r="22" fill="#ef4444" stroke="#0f172a" stroke-width="4.5"/>
    <path d="M 505,326 L 510,337 L 522,338 L 513,346 L 515,358 L 505,352 L 495,358 L 497,346 L 488,338 L 500,337 Z" fill="#fde047" stroke="#0f172a" stroke-width="3" stroke-linejoin="round"/>
    """

    colors = [
        {"name": "Çimen Yeşili", "hex": "#4ade80"},
        {"name": "Toprak Turuncusu", "hex": "#d97706"},
        {"name": "Yüzük Altını", "hex": "#facc15"},
        {"name": "Gökyüzü Mavisi", "hex": "#bae6fd"},
    ]

    return make_drawing(
        did=did,
        name="Green Hill Döngü Yolu",
        emoji="🌴",
        desc="Damalı tepeleri, dev hız döngüsü, altın yüzükleri ve palmiyesiyle Green Hill Zone'u çiz!",
        materials="Kağıt, siyah kalem, yeşil, kahverengi, turuncu, sarı ve mavi boya",
        welcome_text="Harika bir final Kıvanç! Şimdi Sonic'in koştuğu o ünlü palmiyeli, altın yüzüklü ve damalı zeminli Green Hill Zone dünyasını çizeceğiz!",
        colors=colors,
        steps_data=steps_data,
        final_colored_svg=final_svg,
    )


SONIC_15_P3 = [
    build_motobug(),
    build_buzzbomber(),
    build_death_egg_robot(),
    build_monitor(),
    build_green_hill(),
]
