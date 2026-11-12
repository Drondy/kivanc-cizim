# -*- coding: utf-8 -*-
"""
ADD 6 MORE DRAWINGS (TOTAL 18 DRAWINGS - 3 PER CATEGORY)
Generates 114 studio-quality MP3 voice files via edge-tts (tr-TR-EmelNeural).
Appends new drawings to drawings.js with 0 blue guidelines and full SVG gradients.
"""

import os
import sys
import json
import asyncio
import edge_tts

OUTPUT_DIR = r"C:\Users\osman\OneDrive\Masaüstü\kivanc"
VOICE_NAME = "tr-TR-EmelNeural"
AUDIO_DIR = os.path.join(OUTPUT_DIR, "audio", "voices")
DRAWINGS_JS = os.path.join(OUTPUT_DIR, "drawings.js")

NEW_DRAWINGS = [
    # -------------------------------------------------------------------------
    # 1. DINOZORLAR: SEVİMLİ UÇAN PTERODAKTİL
    # -------------------------------------------------------------------------
    {
        "id": "cirak_ucan_pterodaktil",
        "categoryId": "dinozorlar",
        "name": "Sevimli Uçan Pterodaktil",
        "emoji": "🦕",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Gökyüzünde neşeyle süzülen sevimli uçan dinozor Ptero! Geniş kanatlar, tatlı gaga ve rüzgarlı bulutlar.",
        "materials": "Resim kağıdı, kurşun kalem, silgi, turuncu, sarı ve açık mavi boyalar",
        "welcomeText": "Vuhuu! Merhaba Kıvanç! Ben gökyüzünün sevimli uçan dinozoru Ptero. Hazırsan kanatlarımızı açıp bulutların üstünde harika bir dinozor çizelim!",
        "colors": ["#f97316", "#ea580c", "#fef08a", "#0f172a"],
        "welcomeAudio": "audio/voices/cirak_ucan_pterodaktil/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Baş İbiği ve Üst Kafa",
                "instruction": "Kağıdın üst ortasına arkaya doğru uzanan zarif baş ibiğini çiz.",
                "voice": "Kağıdımızın üst ortasına uçan dinozorumuzun arkaya doğru uzanan zarif baş ibiğini çizelim.",
                "svg": '<path d="M 280 200 C 240 170, 190 180, 160 170 C 200 200, 240 220, 270 230" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: Uzun ve Sevimli Gaga (Üst Çene)",
                "instruction": "Kafanın önünden ileriye doğru kavisli üst gagayı uzat.",
                "voice": "Kafanın ön tarafından ileriye doğru tatlı ve kavisli üst gagayı uzatalım.",
                "svg": '<path d="M 280 200 C 330 200, 390 220, 440 240" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "3. Adım: Gülen Alt Gaga ve Çene",
                "instruction": "Gaganın ucundan geriye doğru neşeyle açık duran alt gagayı tamamla.",
                "voice": "Gaganın ucundan geriye doğru neşeyle şarkı söyleyen alt gagayı birleştirelim.",
                "svg": '<path d="M 440 240 C 390 260, 330 260, 280 250" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "4. Adım: Burun Deliği ve Gaga Çizgisi",
                "instruction": "Gaganın ortasına birleşme çizgisini ve küçük bir burun deliği koy.",
                "voice": "Gaganın ortasına gülümseme çizgisini ve ucuna minik bir burun deliği konduralım.",
                "svg": '<path d="M 310 235 L 420 240" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><circle cx="410" cy="232" r="4" fill="#0f172a"/>'
            },
            {
                "title": "5. Adım: Büyük Meraklı Göz Yuvarlağı",
                "instruction": "Kafanın ortasına büyük ve sevimli bir göz çemberi çiz.",
                "voice": "Kafanın ortasına merakla etrafı izleyen kocaman bir göz yuvarlağı çizelim.",
                "svg": '<ellipse cx="295" cy="210" rx="20" ry="24" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "6. Adım: Gözbebeği ve Çifte Işık Parlaması",
                "instruction": "Gözün içine simsiyah gözbebeğini ve parlayan iki beyaz ışığı yap.",
                "voice": "Gözün içine siyah gözbebeğini ve ona neşe katan iki beyaz ışık parlamasını ekleyelim.",
                "svg": '<circle cx="298" cy="212" r="11" fill="#0f172a"/><circle cx="294" cy="207" r="5" fill="#ffffff"/><circle cx="302" cy="216" r="2.5" fill="#ffffff"/>'
            },
            {
                "title": "7. Adım: Neşeli Kaş ve İbik Deseni",
                "instruction": "Gözün üstüne tatlı bir kaş ve ibiğine iki küçük süs çizgisi ekle.",
                "voice": "Gözün üstüne tatlı bir kaş ve arkadaki ibiğine şirin dinozor çizgileri yapalım.",
                "svg": '<path d="M 280 185 Q 295 178, 310 188" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/><line x1="200" y1="185" x2="215" y2="205" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="230" y1="195" x2="245" y2="215" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "8. Adım: Zarif Boyun ve Tombiş Gövde",
                "instruction": "Çenenin altından aşağıya doğru kıvrımlı boyun ve minik gövdeyi çiz.",
                "voice": "Çenenin altından aşağıya doğru süzülen zarif boyun ve tombul gövdeyi çizelim.",
                "svg": '<path d="M 280 250 C 270 290, 260 320, 250 360 C 260 400, 290 420, 310 400" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "9. Adım: Sol Kanat Üst Kemiği (Geniş Açılan)",
                "instruction": "Gövdeden sola ve yukarıya doğru dev kanat kemiğini uzat.",
                "voice": "Gövdeden sola doğru gökyüzünü kucaklayan dev sol kanat kemiğini uzatalım.",
                "svg": '<path d="M 255 330 C 190 280, 140 240, 80 230" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "10. Adım: Sol Kanat Uç Parmakları",
                "instruction": "Kanadın tepesine rüzgarı yakalayan minik pterodaktil pençe parmaklarını yap.",
                "voice": "Kanat ekleminin ucuna sevimli küçük tırmanma tırnaklarını çizelim.",
                "svg": '<path d="M 80 230 L 70 215 M 80 230 L 85 210 M 80 230 L 98 215" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "11. Adım: Sol Kanat Zarı Dalgaları",
                "instruction": "Kanadın ucundan gövdeye doğru süzülen dalgalı uçuş zarını çiz.",
                "voice": "Kanat ucundan gövdeye doğru dalgalanan o harika uçuş derisi yaylarını çizelim.",
                "svg": '<path d="M 80 230 C 100 290, 140 330, 180 340 C 210 350, 230 365, 250 360" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "12. Adım: Sağ Kanat Üst Kemiği",
                "instruction": "Gövdeden sağa ve yukarıya doğru uzanan diğer kanat kemiğini yap.",
                "voice": "Şimdi sağ tarafa doğru göğe yükselen diğer güçlü kanat kemiğini çizelim.",
                "svg": '<path d="M 290 330 C 360 270, 430 230, 520 210" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "13. Adım: Sağ Kanat Uç Parmakları",
                "instruction": "Sağ kanadın ucuna da minik tırnakları ekle.",
                "voice": "Sağ kanat ucuna da aynı sevimli uçuş tırnaklarını konduralım.",
                "svg": '<path d="M 520 210 L 535 195 M 520 210 L 525 190 M 520 210 L 510 195" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "14. Adım: Sağ Kanat Zarı Dalgaları",
                "instruction": "Sağ kanat ucundan gövdeye doğru dalgalı çizgiyi birleştir.",
                "voice": "Sağ kanadın dalgalı yelken zarını da gövdeye doğru zarifçe birleştirelim.",
                "svg": '<path d="M 520 210 C 490 280, 430 330, 370 340 C 330 350, 310 370, 290 370" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "15. Adım: Minik Arka Ayaklar ve Kuyruk",
                "instruction": "Gövdenin altına süzülen iki minik ayak ve minik kuyruğu çiz.",
                "voice": "Gövdenin altına uçarken arkaya sarkan minik sevimli ayakları ve kuyruğu çizelim.",
                "svg": '<path d="M 260 395 C 255 425, 245 440, 255 445 M 290 395 C 295 425, 305 440, 295 445 M 275 400 L 275 425" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "16. Adım: Sarı Karın Çizgileri",
                "instruction": "Gövdenin önüne tatlı göbek desenlerini ekle.",
                "voice": "Gövdenin önüne sarı tatlı dinozor göbeğinin çizgilerini konduralım.",
                "svg": '<path d="M 265 330 Q 280 340, 290 335 M 260 355 Q 275 365, 285 360 M 262 375 Q 275 385, 285 380" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "17. Adım: Altında Kalan Uçuş Bulutları",
                "instruction": "Ptero'nun altında kalan pamuk gibi rüzgar bulutlarını çiz.",
                "voice": "Ptero'nun ne kadar yüksekte uçtuğunu gösteren pamuk gibi puf puf bulutları çizelim.",
                "svg": '<path d="M 120 480 C 140 455, 180 455, 200 480 C 230 460, 280 460, 300 485 C 340 465, 390 465, 420 490 C 450 475, 490 480, 510 500" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Gökyüzü Işıltısı",
                "instruction": "Tebrikler Kıvanç! Ptero'yu turuncu, sarı ve gök mavisi boyalarınla canlandır!",
                "voice": "Muhteşemsin Kıvanç! Uçan dinozorumuz gökyüzünde süzülüyor. Şimdi onu güneş gibi sıcak turuncu ve sarı renklerle canlandır!",
                "svg": '''
          <defs>
            <linearGradient id="pteroBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fb923c"/>
              <stop offset="60%" stop-color="#f97316"/>
              <stop offset="100%" stop-color="#ea580c"/>
            </linearGradient>
            <linearGradient id="pteroWing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
            <linearGradient id="pteroBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef9c3"/>
              <stop offset="100%" stop-color="#fef08a"/>
            </linearGradient>
          </defs>
          <path d="M 120 480 C 140 455, 180 455, 200 480 C 230 460, 280 460, 300 485 C 340 465, 390 465, 420 490 C 450 475, 490 480, 510 500 L 510 550 L 120 550 Z" fill="#e0f2fe" stroke="#0f172a" stroke-width="7"/>
          <path d="M 255 330 C 190 280, 140 240, 80 230 C 100 290, 140 330, 180 340 C 210 350, 230 365, 250 360 Z" fill="url(#pteroWing)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 290 330 C 360 270, 430 230, 520 210 C 490 280, 430 330, 370 340 C 330 350, 310 370, 290 370 Z" fill="url(#pteroWing)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 260 395 C 255 425, 245 440, 255 445 M 290 395 C 295 425, 305 440, 295 445 M 275 400 L 275 425" stroke="#ea580c" stroke-width="8" stroke-linecap="round" fill="none"/>
          <path d="M 250 320 C 240 360, 240 400, 275 410 C 300 400, 305 360, 290 320 Z" fill="url(#pteroBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 260 330 C 255 360, 255 390, 275 400 C 290 390, 290 360, 280 330 Z" fill="url(#pteroBelly)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 280 200 C 240 170, 190 180, 160 170 C 200 200, 240 220, 270 230 Z" fill="url(#pteroBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 280 200 C 330 200, 390 220, 440 240 C 390 260, 330 260, 280 250 Z" fill="url(#pteroWing)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 310 235 L 420 240" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="410" cy="232" r="4" fill="#0f172a"/>
          <ellipse cx="295" cy="210" rx="20" ry="24" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <circle cx="298" cy="212" r="11" fill="#0f172a"/>
          <circle cx="294" cy="207" r="5" fill="#ffffff"/>
          <circle cx="302" cy="216" r="2.5" fill="#ffffff"/>
          <path d="M 280 185 Q 295 178, 310 188" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <line x1="200" y1="185" x2="215" y2="205" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>
          <line x1="230" y1="195" x2="245" y2="215" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 2. HAYVANLAR: TOMBİŞ SEVİMLİ BAMBU PANDASI
    # -------------------------------------------------------------------------
    {
        "id": "cirak_tombis_panda",
        "categoryId": "hayvanlar",
        "name": "Tombiş Sevimli Panda",
        "emoji": "🐼",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Yemyeşil taze bambusunu afiyetle yiyen tombiş dev panda! Siyah göz bantları ve sevimli yuvarlak kulaklar.",
        "materials": "Resim kağıdı, kurşun kalem, silgi, siyah, yeşil ve pembe boyalar",
        "welcomeText": "Kıtır kıtır! Selam Kıvanç! Bambu ormanının en tatlı pandası burada. Kağıdını hazırla, birlikte kocaman tombul bir panda çizelim!",
        "colors": ["#ffffff", "#1e293b", "#22c55e", "#f472b6"],
        "welcomeAudio": "audio/voices/cirak_tombis_panda/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Yuvarlak Tombul Kafa",
                "instruction": "Sayfanın üst ortasına pandanın kocaman tombul kafa çemberini çiz.",
                "voice": "Kağıdımızın üst ortasına sevimli pandamızın kocaman tombul kafa yuvarlağını çizelim.",
                "svg": '<ellipse cx="300" cy="200" rx="90" ry="80" fill="none" stroke="#0f172a" stroke-width="10"/>'
            },
            {
                "title": "2. Adım: Sol Yuvarlak Siyah Kulak",
                "instruction": "Kafanın sol tepesine yuvarlak tatlı bir kulak kondur.",
                "voice": "Kafanın sol tepesine fındık gibi yuvarlak bir panda kulağı çizelim.",
                "svg": '<circle cx="230" cy="135" r="26" fill="none" stroke="#0f172a" stroke-width="9"/>'
            },
            {
                "title": "3. Adım: Sağ Yuvarlak Siyah Kulak",
                "instruction": "Kafanın sağ tepesine ikinci yuvarlak kulağı ekle.",
                "voice": "Kafanın sağ tepesine de eşleşen ikinci sevimli kulağımızı konduralım.",
                "svg": '<circle cx="370" cy="135" r="26" fill="none" stroke="#0f172a" stroke-width="9"/>'
            },
            {
                "title": "4. Adım: Sol Siyah Göz Yaması (Oval)",
                "instruction": "Yüzün soluna pandaların ünlü eğik oval göz lekesini çiz.",
                "voice": "Yüzün sol tarafına pandaların o meşhur eğik siyah göz lekesini çizelim.",
                "svg": '<ellipse cx="260" cy="195" rx="22" ry="26" fill="none" stroke="#0f172a" stroke-width="8" transform="rotate(-15 260 195)"/>'
            },
            {
                "title": "5. Adım: Sağ Siyah Göz Yaması (Oval)",
                "instruction": "Yüzün sağına da diğer eğik göz lekesini yap.",
                "voice": "Sağ tarafa da aynı şekilde tatlı siyah göz lekesini konduralım.",
                "svg": '<ellipse cx="340" cy="195" rx="22" ry="26" fill="none" stroke="#0f172a" stroke-width="8" transform="rotate(15 340 195)"/>'
            },
            {
                "title": "6. Adım: Sol Gözbebeği ve Çifte Parıltı",
                "instruction": "Sol lekenin içine parlak siyah gözbebeği ve beyaz parıltıları koy.",
                "voice": "Sol lekenin içine ışıl ışıl bakan gözbebeğini ve çifte parıltısını ekleyelim.",
                "svg": '<circle cx="262" cy="195" r="10" fill="#0f172a"/><circle cx="259" cy="190" r="4.5" fill="#ffffff"/><circle cx="266" cy="198" r="2" fill="#ffffff"/>'
            },
            {
                "title": "7. Adım: Sağ Gözbebeği ve Çifte Parıltı",
                "instruction": "Sağ lekenin içine de ışıldayan gözbebeğini çiz.",
                "voice": "Sağ lekenin içine de aynı ışıl ışıl gözbebeğimizi yerleştirelim.",
                "svg": '<circle cx="338" cy="195" r="10" fill="#0f172a"/><circle cx="335" cy="190" r="4.5" fill="#ffffff"/><circle cx="342" cy="198" r="2" fill="#ffffff"/>'
            },
            {
                "title": "8. Adım: Üçgen Burun ve Gülen Ağız",
                "instruction": "İki gözün ortasına ters üçgen burun ve 'W' şeklinde tatlı bir gülümseme yap.",
                "voice": "Gözlerin ortasına minik bir üçgen burun ve iki yana kıvrılan 'W' şeklinde gülen ağız çizelim.",
                "svg": '<path d="M 292 225 L 308 225 L 300 235 Z" fill="#0f172a" stroke="#0f172a" stroke-width="4"/><path d="M 300 235 L 300 245 M 300 245 C 290 255, 275 252, 270 242 M 300 245 C 310 255, 325 252, 330 242" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "9. Adım: Pembe Yanak Daireleri",
                "instruction": "Gülümsemesinin iki yanına sevimli pembe allık çemberleri koy.",
                "voice": "Yanaklarına utangaç ve tatlı iki allık çemberi konduralım.",
                "svg": '<ellipse cx="235" cy="225" rx="12" ry="8" fill="none" stroke="#0f172a" stroke-width="4"/><ellipse cx="365" cy="225" rx="12" ry="8" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "10. Adım: Dev Tombul Göbek Çemberi",
                "instruction": "Kafanın altından yere oturan kocaman beyaz göbeği çiz.",
                "voice": "Kafanın altından yere oturan o devasa ve yumuşacık pofuduk göbeği çizelim.",
                "svg": '<ellipse cx="300" cy="370" rx="110" ry="100" fill="none" stroke="#0f172a" stroke-width="10"/>'
            },
            {
                "title": "11. Adım: Sol Siyah Kol (Bambuyu Tutan)",
                "instruction": "Omuzdan ileri doğru kıvrılan tombul siyah kolu yap.",
                "voice": "Omuzdan göğse doğru uzanan ve bambuyu tutan tombiş sol kolu çizelim.",
                "svg": '<path d="M 220 280 C 180 300, 180 360, 230 365 C 260 365, 260 320, 240 285" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "12. Adım: Sağ Siyah Kol",
                "instruction": "Sağ taraftan bambuya uzanan diğer kolu ve pençeyi çiz.",
                "voice": "Sağ taraftan lezzetli bambuyu kavrayan diğer güçlü panda kolunu çizelim.",
                "svg": '<path d="M 380 280 C 420 300, 420 360, 370 365 C 340 365, 340 320, 360 285" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "13. Adım: Taze Yeşil Bambu Dalı",
                "instruction": "Kolları arasından ağzına doğru uzanan boğumlu bambu sapını çiz.",
                "voice": "Kolları arasından ağzına uzanan çıtır çıtır yeşil bambu kamışını çizelim.",
                "svg": '<path d="M 270 410 L 330 250" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><line x1="280" y1="375" x2="295" y2="380" stroke="#0f172a" stroke-width="5"/><line x1="300" y1="320" x2="315" y2="325" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "14. Adım: Taze Bambu Yaprakları",
                "instruction": "Bambunun tepesine iki leziz yeşil yaprak kıvrımı ekle.",
                "voice": "Bambunun ucuna pandanın yemeye bayıldığı sivri yeşil yaprakları ekleyelim.",
                "svg": '<path d="M 330 250 C 350 230, 370 235, 365 250 C 350 255, 340 255, 330 250 Z" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 320 270 C 345 270, 360 285, 345 290 Z" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "15. Adım: Sol Oturan Bacak ve Pati Tabanı",
                "instruction": "Gövdenin sol altına geniş oturan bacağı ve yuvarlak tabanını yap.",
                "voice": "Gövdenin sol altına bağdaş kurmuş kocaman ayak tabanını çizelim.",
                "svg": '<ellipse cx="200" cy="430" rx="36" ry="26" fill="none" stroke="#0f172a" stroke-width="9"/><ellipse cx="200" cy="432" rx="18" ry="12" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="180" cy="415" r="5" fill="#0f172a"/><circle cx="195" cy="410" r="5" fill="#0f172a"/><circle cx="210" cy="410" r="5" fill="#0f172a"/><circle cx="225" cy="415" r="5" fill="#0f172a"/>'
            },
            {
                "title": "16. Adım: Sağ Oturan Bacak ve Pati Tabanı",
                "instruction": "Gövdenin sağ altına da aynı şekilde sevimli ayak tabanını ekle.",
                "voice": "Sağ tarafa da aynı sevimli ayak tabanını ve minik pati parmaklarını konduralım.",
                "svg": '<ellipse cx="400" cy="430" rx="36" ry="26" fill="none" stroke="#0f172a" stroke-width="9"/><ellipse cx="400" cy="432" rx="18" ry="12" fill="none" stroke="#0f172a" stroke-width="4"/><circle cx="380" cy="415" r="5" fill="#0f172a"/><circle cx="395" cy="410" r="5" fill="#0f172a"/><circle cx="410" cy="410" r="5" fill="#0f172a"/><circle cx="425" cy="415" r="5" fill="#0f172a"/>'
            },
            {
                "title": "17. Adım: Zemin Çimleri ve Dökülen Yapraklar",
                "instruction": "Pandanın altına çim yaprakları ve dökülen bambuları çiz.",
                "voice": "Pandanın altına rahatça oturduğu çim pufunu ve dökülen yaprakları ekleyelim.",
                "svg": '<path d="M 130 465 C 220 445, 380 445, 470 465" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><path d="M 150 455 L 160 440 L 170 455 M 430 455 L 440 440 L 450 455" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Bambu Ormanı",
                "instruction": "Tebrikler Kıvanç! Pandayı siyah-beyaz zıtlığı ve yemyeşil bambularla boya!",
                "voice": "Harikasın Kıvanç! Tombiş pandamız bambusunu afiyetle yiyor. Şimdi onu parlak siyah, bembeyaz ve yemyeşil renklerle canlandır!",
                "svg": '''
          <defs>
            <linearGradient id="pandaDark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="60%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <linearGradient id="pandaBamboo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#86efac"/>
              <stop offset="50%" stop-color="#22c55e"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="465" rx="180" ry="20" fill="#a3e635" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="300" cy="370" rx="110" ry="100" fill="#ffffff" stroke="#0f172a" stroke-width="10"/>
          <path d="M 190 310 C 240 330, 360 330, 410 310 L 410 360 C 360 380, 240 380, 190 360 Z" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 220 280 C 180 300, 180 360, 230 365 C 260 365, 260 320, 240 285 Z" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 380 280 C 420 300, 420 360, 370 365 C 340 365, 340 320, 360 285 Z" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="200" cy="430" rx="36" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="200" cy="432" rx="18" ry="12" fill="#475569" stroke="#0f172a" stroke-width="3"/>
          <circle cx="180" cy="415" r="5" fill="#475569"/>
          <circle cx="195" cy="410" r="5" fill="#475569"/>
          <circle cx="210" cy="410" r="5" fill="#475569"/>
          <circle cx="225" cy="415" r="5" fill="#475569"/>
          <ellipse cx="400" cy="430" rx="36" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="400" cy="432" rx="18" ry="12" fill="#475569" stroke="#0f172a" stroke-width="3"/>
          <circle cx="380" cy="415" r="5" fill="#475569"/>
          <circle cx="395" cy="410" r="5" fill="#475569"/>
          <circle cx="410" cy="410" r="5" fill="#475569"/>
          <circle cx="425" cy="415" r="5" fill="#475569"/>
          <path d="M 270 410 L 330 250" stroke="url(#pandaBamboo)" stroke-width="12" stroke-linecap="round"/>
          <path d="M 270 410 L 330 250" stroke="#0f172a" stroke-width="8" stroke-linecap="round" fill="none"/>
          <path d="M 330 250 C 350 230, 370 235, 365 250 C 350 255, 340 255, 330 250 Z" fill="#22c55e" stroke="#0f172a" stroke-width="6"/>
          <circle cx="230" cy="135" r="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <circle cx="370" cy="135" r="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="9"/>
          <ellipse cx="300" cy="200" rx="90" ry="80" fill="#ffffff" stroke="#0f172a" stroke-width="10"/>
          <ellipse cx="260" cy="195" rx="22" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="8" transform="rotate(-15 260 195)"/>
          <circle cx="262" cy="195" r="10" fill="#0f172a"/>
          <circle cx="259" cy="190" r="4.5" fill="#ffffff"/>
          <circle cx="266" cy="198" r="2" fill="#ffffff"/>
          <ellipse cx="340" cy="195" rx="22" ry="26" fill="url(#pandaDark)" stroke="#0f172a" stroke-width="8" transform="rotate(15 340 195)"/>
          <circle cx="338" cy="195" r="10" fill="#0f172a"/>
          <circle cx="335" cy="190" r="4.5" fill="#ffffff"/>
          <circle cx="342" cy="198" r="2" fill="#ffffff"/>
          <ellipse cx="235" cy="225" rx="12" ry="8" fill="#fbcfe8" stroke="#f472b6" stroke-width="2"/>
          <ellipse cx="365" cy="225" rx="12" ry="8" fill="#fbcfe8" stroke="#f472b6" stroke-width="2"/>
          <path d="M 292 225 L 308 225 L 300 235 Z" fill="#0f172a" stroke="#0f172a" stroke-width="4"/>
          <path d="M 300 235 L 300 245 M 300 245 C 290 255, 275 252, 270 242 M 300 245 C 310 255, 325 252, 330 242" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 3. ARABALAR: CESUR KIRMIZI İTFAİYE ARABASI
    # -------------------------------------------------------------------------
    {
        "id": "cirak_itfaiye_kamyonu",
        "categoryId": "arabalar",
        "name": "Cesur İtfaiye Arabası",
        "emoji": "🚒",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Dönen kurtarma merdiveni, yanıp sönen mavi sirenler ve su hortumu! Kıvanç'ın kahraman itfaiye aracı.",
        "materials": "Resim kağıdı, kurşun kalem, silgi, kırmızı, sarı, mavi ve gri boyalar",
        "welcomeText": "Daa dii daa dii! Merhaba Kıvanç! Yangınları söndüren, kedileri ağaçtan kurtaran cesur itfaiye kamyonunu çizmeye hazır mısın? Sirenleri çalıştıralım!",
        "colors": ["#ef4444", "#dc2626", "#facc15", "#38bdf8"],
        "welcomeAudio": "audio/voices/cirak_itfaiye_kamyonu/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Büyük Kamyon Gövdesi Dikdörtgeni",
                "instruction": "Sayfanın ortasına geniş ve sağlam itfaiye kamyonu ana gövdesini çiz.",
                "voice": "Kağıdımızın ortasına cesur itfaiye kamyonumuzun geniş kırmızı gövde kutusunu çizelim.",
                "svg": '<rect x="120" y="240" width="380" height="150" rx="16" fill="none" stroke="#0f172a" stroke-width="10"/>'
            },
            {
                "title": "2. Adım: Sürücü Kabini Ayrımı ve Ön Cam",
                "instruction": "Ön tarafa sürücü kabinini ayıran dik çizgiyi ve geniş ön camı çiz.",
                "voice": "Kamyonun önüne itfaiyeci amcaların oturduğu sürücü camını ve kabin çizgisini yapalım.",
                "svg": '<line x1="380" y1="240" x2="380" y2="390" stroke="#0f172a" stroke-width="8"/><path d="M 395 255 L 485 255 L 485 315 L 395 315 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Yan Kabin Camı ve Kapı",
                "instruction": "Kabin yanına ikinci camı ve kapı kolunu ekle.",
                "voice": "Kabin kapısını ve arkasındaki yan camı düzgün çizgilerle ekleyelim.",
                "svg": '<path d="M 330 255 L 370 255 L 370 315 L 330 315 Z" fill="none" stroke="#0f172a" stroke-width="7"/><rect x="420" y="335" width="20" height="8" rx="2" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "4. Adım: Tavan Kurtarma Merdiveni (Taban)",
                "instruction": "Kamyonun tavanına açılan kurtarma merdiveninin taban kulesini çiz.",
                "voice": "Tavanın üstüne yüksek binalara uzanan döner merdiven kulesini çizelim.",
                "svg": '<rect x="160" y="215" width="60" height="25" rx="4" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "5. Adım: Uzun Kurtarma Merdiveni ve Basamaklar",
                "instruction": "Tavandan öne doğru uzanan çift çubuklu merdiveni ve basamakları çiz.",
                "voice": "Tavandan ileri doğru uzanan uzun yangın merdivenini ve tırmanma basamaklarını çizelim.",
                "svg": '<path d="M 170 215 L 360 170 M 175 200 L 365 155" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><line x1="200" y1="202" x2="204" y2="188" stroke="#0f172a" stroke-width="5"/><line x1="235" y1="194" x2="239" y2="180" stroke="#0f172a" stroke-width="5"/><line x1="270" y1="186" x2="274" y2="172" stroke="#0f172a" stroke-width="5"/><line x1="305" y1="178" x2="309" y2="164" stroke="#0f172a" stroke-width="5"/><line x1="340" y1="170" x2="344" y2="156" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "6. Adım: Yanıp Sönen Mavi & Kırmızı Sirenler",
                "instruction": "Kabin tavanına acil durum ışığı siren lambalarını yerleştir.",
                "voice": "Kabin tavanına 'Daa dii' diye yanıp sönen yuvarlak siren lambalarını çizelim.",
                "svg": '<rect x="415" y="222" width="22" height="18" rx="4" fill="none" stroke="#0f172a" stroke-width="6"/><rect x="445" y="222" width="22" height="18" rx="4" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "7. Adım: Ön Çift Farlar ve Tampon",
                "instruction": "Kamyonun en önüne parlak farları ve sağlam çelik tamponu yap.",
                "voice": "Kamyonun önüne geceyi aydınlatan farları ve güçlü koruma tamponunu çizelim.",
                "svg": '<circle cx="490" cy="340" r="10" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="490" cy="365" r="8" fill="none" stroke="#0f172a" stroke-width="5"/><rect x="495" y="375" width="20" height="20" rx="4" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "8. Adım: Ön Tekerlek Yuvası ve Jant",
                "instruction": "Kabin altına ön tekerlek oyuğunu ve jant çemberini çiz.",
                "voice": "Kabin altına ön tekerlek için yuvarlak kavis ve jant çemberini çizelim.",
                "svg": '<circle cx="420" cy="405" r="38" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="420" cy="405" r="18" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "9. Adım: Arka İkiz Tekerlekler (Birinci)",
                "instruction": "Arka tarafa ağır yük taşıyan birinci arka tekerleği yap.",
                "voice": "Arka tarafa kamyonun dev su deposunu taşıyan arka tekerleği çizelim.",
                "svg": '<circle cx="270" cy="405" r="38" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="270" cy="405" r="18" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "10. Adım: Arka İkiz Tekerlekler (İkinci)",
                "instruction": "Hemen arkasına ikinci güçlü tekerleği ekle.",
                "voice": "Hemen yanına ikinci arka tekerleği de ekleyerek üç tekerlekli süper itfaiyemizi kuralım.",
                "svg": '<circle cx="180" cy="405" r="38" fill="none" stroke="#0f172a" stroke-width="10"/><circle cx="180" cy="405" r="18" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "11. Adım: Tekerlek İçi Bijon Noktaları",
                "instruction": "Her üç jantın ortasına küçük bijon noktalarını koy.",
                "voice": "Her üç jantın içine sağlam demir cıvata noktalarını konduralım.",
                "svg": '<circle cx="420" cy="405" r="4" fill="#0f172a"/><circle cx="270" cy="405" r="4" fill="#0f172a"/><circle cx="180" cy="405" r="4" fill="#0f172a"/>'
            },
            {
                "title": "12. Adım: Rulo Su Hortumu Makarası",
                "instruction": "Kamyonun gövdesine sarılı yangın hortumunu spiral şeklinde çiz.",
                "voice": "Gövdenin yanına alevlere su fışkırtan rulo hortum çemberlerini çizelim.",
                "svg": '<circle cx="230" cy="300" r="28" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="230" cy="300" r="16" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "13. Adım: İtfaiye Su Hortumu Nozulu (Tabancası)",
                "instruction": "Hortumun ucuna sarı pirinç su sıkma tabancasını çiz.",
                "voice": "Hortumun ucuna basınçlı su sıkan parlak yangın tabancasını ekleyelim.",
                "svg": '<path d="M 255 310 L 290 325 L 295 315 L 260 300" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "14. Adım: Beyaz Yan Güvenlik Şeridi",
                "instruction": "Kamyonun boydan boya uzanan şık beyaz çizgisini çek.",
                "voice": "Kamyonumuzun boydan boya uzanan şık ve havalı beyaz şerit çizgisini çekelim.",
                "svg": '<line x1="120" y1="350" x2="495" y2="350" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "15. Adım: Arka Ekipman Dolap Kolları",
                "instruction": "Arka kasadaki kurtarma aletleri dolap panellerini çiz.",
                "voice": "Arka kasada baltaların ve kaskların durduğu dolap kapaklarını çizelim.",
                "svg": '<rect x="135" y="260" width="45" height="70" rx="4" fill="none" stroke="#0f172a" stroke-width="5"/><line x1="145" y1="295" x2="165" y2="295" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "16. Adım: Fışkıran Su Damlaları",
                "instruction": "Hortumun ucundan neşeyle fışkıran su damlacıklarını yap.",
                "voice": "Hortumun ucundan göğe doğru fışkıran şıkır şıkır su damlacıklarını çizelim.",
                "svg": '<circle cx="315" cy="315" r="5" fill="#0f172a"/><circle cx="330" cy="305" r="7" fill="#0f172a"/><circle cx="350" cy="295" r="6" fill="#0f172a"/>'
            },
            {
                "title": "17. Adım: Yol Asfalt Çizgileri",
                "instruction": "Tekerleklerin altına hızla ilerlediği asfalt yol çizgisini çek.",
                "voice": "Tekerleklerin altına göreve koşan asfalt yolu ve kesik şerit çizgilerini çizelim.",
                "svg": '<line x1="80" y1="445" x2="520" y2="445" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><line x1="100" y1="470" x2="180" y2="470" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="240" y1="470" x2="320" y2="470" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="380" y1="470" x2="460" y2="470" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Görev Alarmı",
                "instruction": "Tebrikler Kıvanç! İtfaiye aracını alev kırmızısı, parlak sarı ve mavi sirenlerle boya!",
                "voice": "Harika bir kahramanlık çizimi oldu Kıvanç! İtfaiye kamyonun göreve hazır. Şimdi onu alev kırmızısı ve mavi sirenleriyle rengarenk boya!",
                "svg": '''
          <defs>
            <linearGradient id="fireTruckRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="fireLadder" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f1f5f9"/>
              <stop offset="100%" stop-color="#94a3b8"/>
            </linearGradient>
          </defs>
          <line x1="80" y1="445" x2="520" y2="445" stroke="#334155" stroke-width="10" stroke-linecap="round"/>
          <line x1="100" y1="470" x2="180" y2="470" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="240" y1="470" x2="320" y2="470" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="380" y1="470" x2="460" y2="470" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <rect x="120" y="240" width="380" height="150" rx="16" fill="url(#fireTruckRed)" stroke="#0f172a" stroke-width="10"/>
          <rect x="120" y="340" width="380" height="20" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 395 255 L 485 255 L 485 315 L 395 315 Z" fill="#93c5fd" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 330 255 L 370 255 L 370 315 L 330 315 Z" fill="#93c5fd" stroke="#0f172a" stroke-width="7"/>
          <rect x="420" y="335" width="20" height="8" rx="2" fill="#e2e8f0" stroke="#0f172a" stroke-width="4"/>
          <rect x="160" y="215" width="60" height="25" rx="4" fill="#64748b" stroke="#0f172a" stroke-width="7"/>
          <path d="M 170 215 L 360 170 M 175 200 L 365 155" stroke="url(#fireLadder)" stroke-width="10" stroke-linecap="round"/>
          <path d="M 170 215 L 360 170 M 175 200 L 365 155" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>
          <line x1="200" y1="202" x2="204" y2="188" stroke="#0f172a" stroke-width="5"/>
          <line x1="235" y1="194" x2="239" y2="180" stroke="#0f172a" stroke-width="5"/>
          <line x1="270" y1="186" x2="274" y2="172" stroke="#0f172a" stroke-width="5"/>
          <line x1="305" y1="178" x2="309" y2="164" stroke="#0f172a" stroke-width="5"/>
          <line x1="340" y1="170" x2="344" y2="156" stroke="#0f172a" stroke-width="5"/>
          <rect x="415" y="222" width="22" height="18" rx="4" fill="#38bdf8" stroke="#0f172a" stroke-width="6"/>
          <rect x="445" y="222" width="22" height="18" rx="4" fill="#ef4444" stroke="#0f172a" stroke-width="6"/>
          <circle cx="490" cy="340" r="10" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="490" cy="365" r="8" fill="#f97316" stroke="#0f172a" stroke-width="5"/>
          <circle cx="230" cy="300" r="28" fill="#f59e0b" stroke="#0f172a" stroke-width="8"/>
          <circle cx="230" cy="300" r="16" fill="#b45309" stroke="#0f172a" stroke-width="6"/>
          <circle cx="420" cy="405" r="38" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="420" cy="405" r="18" fill="#e2e8f0" stroke="#0f172a" stroke-width="7"/>
          <circle cx="420" cy="405" r="4" fill="#0f172a"/>
          <circle cx="270" cy="405" r="38" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="270" cy="405" r="18" fill="#e2e8f0" stroke="#0f172a" stroke-width="7"/>
          <circle cx="270" cy="405" r="4" fill="#0f172a"/>
          <circle cx="180" cy="405" r="38" fill="#1e293b" stroke="#0f172a" stroke-width="10"/>
          <circle cx="180" cy="405" r="18" fill="#e2e8f0" stroke="#0f172a" stroke-width="7"/>
          <circle cx="180" cy="405" r="4" fill="#0f172a"/>
          <circle cx="315" cy="315" r="5" fill="#38bdf8"/>
          <circle cx="330" cy="305" r="7" fill="#38bdf8"/>
          <circle cx="350" cy="295" r="6" fill="#38bdf8"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 4. DENİZ: SEVİMLİ DENİZ KAPLUMBAĞASI
    # -------------------------------------------------------------------------
    {
        "id": "cirak_deniz_kaplumbagasi",
        "categoryId": "deniz",
        "name": "Sevimli Deniz Kaplumbağası",
        "emoji": "🐢",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Mercan resifleri arasında zarifçe yüzen bilge ve sevimli kaplumbağa Tugi! Desenli kabuğu ve su kabarcıkları.",
        "materials": "Resim kağıdı, kurşun kalem, silgi, yeşil, zeytin yeşili, sarı ve turkuaz boyalar",
        "welcomeText": "Gluk gluk! Selam Kıvanç! Okyanusun en tatlı yüzücüsü sevimli deniz kaplumbağasını çizmek için boyalarını hazırla!",
        "colors": ["#10b981", "#059669", "#fef08a", "#38bdf8"],
        "welcomeAudio": "audio/voices/cirak_deniz_kaplumbagasi/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Büyük Oval Sırt Kabuğu",
                "instruction": "Sayfanın ortasına kaplumbağanın geniş kubbeli sırt kabuğunu çiz.",
                "voice": "Kağıdımızın ortasına sevimli deniz kaplumbağamızın kubbeli geniş sırt kabuğunu çizelim.",
                "svg": '<ellipse cx="300" cy="290" rx="110" ry="85" fill="none" stroke="#0f172a" stroke-width="10"/>'
            },
            {
                "title": "2. Adım: Kabuk Kenar Koruma Bandı",
                "instruction": "Kabuğun alt çevresine kalkan gibi koruyucu kenarlık çizgisini ekle.",
                "voice": "Kabuğun alt kenarına koruyucu zarif bir kalkan bandı çizelim.",
                "svg": '<path d="M 195 290 C 200 375, 400 375, 405 290" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "3. Adım: Kabuk İçi Merkez Altıgen Deseni",
                "instruction": "Kabuğun tam ortasına kaplumbağaların ünlü altıgen desenini yerleştir.",
                "voice": "Kabuğun tam ortasına kaplumbağaların o meşhur güzel altıgen desenini çizelim.",
                "svg": '<polygon points="300,240 330,255 330,290 300,305 270,290 270,255" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Yan Kabuk Desen Çizgileri",
                "instruction": "Merkezdeki altıgenden dışarıya doğru uzanan desen çizgilerini çek.",
                "voice": "Ortadaki altıgenden kabuğun kenarlarına doğru uzanan desen çizgilerini çekelim.",
                "svg": '<line x1="300" y1="240" x2="300" y2="208" stroke="#0f172a" stroke-width="6"/><line x1="330" y1="255" x2="375" y2="235" stroke="#0f172a" stroke-width="6"/><line x1="330" y1="290" x2="385" y2="305" stroke="#0f172a" stroke-width="6"/><line x1="300" y1="305" x2="300" y2="350" stroke="#0f172a" stroke-width="6"/><line x1="270" y1="290" x2="215" y2="305" stroke="#0f172a" stroke-width="6"/><line x1="270" y1="255" x2="225" y2="235" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "5. Adım: İleri Uzanan Tatlı Kafa",
                "instruction": "Kabuğun sağ önünden ileri uzanan yuvarlak kafa çizgisini yap.",
                "voice": "Kabuğun ön tarafından ileriye doğru uzanan tatlı kaplumbağa kafasını çizelim.",
                "svg": '<path d="M 390 250 C 420 220, 480 230, 490 270 C 490 305, 440 315, 395 295" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "6. Adım: Neşeli Gülümseme ve Gaga Ucu",
                "instruction": "Kafanın ucuna sevimli minik bir gaga kıvrımı ve gülen ağız çiz.",
                "voice": "Kafanın ucuna küçük bir kaplumbağa gagası ve neşeli bir gülümseme konduralım.",
                "svg": '<path d="M 490 270 C 475 285, 450 285, 445 280" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "7. Adım: Büyük Parlak Deniz Gözü",
                "instruction": "Kafanın ortasına kocaman bir göz yuvarlağı ve parıltılar ekle.",
                "voice": "Kafanın ortasına okyanusa sevgiyle bakan kocaman parıltılı bir göz çizelim.",
                "svg": '<ellipse cx="450" cy="255" rx="14" ry="16" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="452" cy="256" r="8" fill="#0f172a"/><circle cx="449" cy="252" r="3.5" fill="#ffffff"/><circle cx="455" cy="259" r="1.5" fill="#ffffff"/>'
            },
            {
                "title": "8. Adım: Baş Benekleri ve Kaş",
                "instruction": "Alnına tatlı bir kaş çizgisi ve yanak beneklerini koy.",
                "voice": "Gözünün üstüne meraklı bir kaş ve yanaklarına sevimli benekler konduralım.",
                "svg": '<path d="M 440 240 Q 452 235, 465 242" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="425" cy="265" r="3" fill="#0f172a"/><circle cx="432" cy="272" r="2.5" fill="#0f172a"/>'
            },
            {
                "title": "9. Adım: Büyük Ön Yüzgeç (Sağ / Ön)",
                "instruction": "Kabuğun önünden aşağıya doğru süzülen dev yüzme paletini çiz.",
                "voice": "Kabuğun önünden aşağıya doğru süzülen o kocaman zarif yüzme paletini çizelim.",
                "svg": '<path d="M 370 330 C 400 400, 360 450, 310 440 C 290 435, 310 375, 330 345" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "10. Adım: Diğer Ön Yüzgeç (Sol / Üst)",
                "instruction": "Kabuğun üst tarafından ileriye doğru açılan diğer yüzgeci yap.",
                "voice": "Kabuğun üst tarafından denizi yaran diğer güçlü ön yüzgeci uzatalım.",
                "svg": '<path d="M 340 215 C 380 160, 370 120, 320 130 C 290 140, 295 185, 305 210" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "11. Adım: Arka Minik Yüzgeç (Sağ)",
                "instruction": "Kabuğun arkasından sarkan dümen yüzgecini çiz.",
                "voice": "Kabuğun arkasından sarkan sevimli yön dümeni yüzgecini yapalım.",
                "svg": '<path d="M 230 340 C 210 390, 180 395, 175 375 C 170 355, 195 330, 210 325" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "12. Adım: Arka Minik Yüzgeç (Sol) ve Kuyruk",
                "instruction": "Diğer arka yüzgeci ve aralarındaki minik sivri kuyruğu çiz.",
                "voice": "Diğer arka yüzgeci ve tam ortalarındaki tatlı minik kuyruğu ekleyelim.",
                "svg": '<path d="M 220 230 C 190 200, 170 210, 175 225 C 180 240, 195 255, 205 260" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><path d="M 195 285 L 165 290 L 195 295" stroke="#0f172a" stroke-width="7" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "13. Adım: Ön Yüzgeç Üzeri Pul Desenleri",
                "instruction": "Ön yüzgecin üzerine deniz canlılarına özgü pul benekleri yap.",
                "voice": "Ön yüzgecin üzerine kaplumbağanın o güzel pul halkalarını ekleyelim.",
                "svg": '<ellipse cx="335" cy="385" rx="8" ry="12" fill="none" stroke="#0f172a" stroke-width="4"/><ellipse cx="350" cy="370" rx="7" ry="10" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "14. Adım: Yükselen Su Baloncukları",
                "instruction": "Burnunun ucundan yüzeye doğru yükselen sevimli hava kabarcıklarını yap.",
                "voice": "Burnunun ucundan yüzeye doğru süzülen neşeli su kabarcıkları çizelim.",
                "svg": '<circle cx="515" cy="240" r="8" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="535" cy="205" r="12" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="545" cy="255" r="6" fill="none" stroke="#0f172a" stroke-width="4"/>'
            },
            {
                "title": "15. Adım: Aşağıda Yüzen Deniz Yıldızı",
                "instruction": "Sol alt köşeye deniz tabanında duran minik bir deniz yıldızı çiz.",
                "voice": "Sol alt köşeye resiflerin üstünde dinlenen tatlı bir deniz yıldızı konduralım.",
                "svg": '<polygon points="130,440 135,452 148,452 138,460 142,472 130,464 118,472 122,460 112,452 125,452" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>'
            },
            {
                "title": "16. Adım: Mercan Resifleri ve Deniz Yosunları",
                "instruction": "Dipte dalgalanan kıvrımlı su yosunlarını çiz.",
                "voice": "Dipte su akıntısıyla salınan yeşil deniz yosunlarını çizelim.",
                "svg": '<path d="M 160 480 C 170 450, 150 430, 165 400" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M 180 480 C 190 460, 175 440, 185 420" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "17. Adım: Okyanus Dip Dalga Çizgisi",
                "instruction": "Zeminde kıvrılan tatlı deniz kumu tepesini çiz.",
                "voice": "Zeminde uzanan yumuşacık deniz kumu tepesini kavisle tamamlayalım.",
                "svg": '<path d="M 80 485 Q 300 460, 520 485" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Kristal Su Parıltısı",
                "instruction": "Tebrikler Kıvanç! Kaplumbağayı zümrüt yeşili kabuğu ve turkuaz okyanusla canlandır!",
                "voice": "İnanılmaz güzel oldu Kıvanç! Deniz kaplumbağamız masmavi sularda yüzüyor. Şimdi onu zümrüt yeşili ve sarı boyalarınla ışıl ışıl renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="turtleShell" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#34d399"/>
              <stop offset="50%" stop-color="#10b981"/>
              <stop offset="100%" stop-color="#047857"/>
            </linearGradient>
            <linearGradient id="turtleSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#a7f3d0"/>
              <stop offset="100%" stop-color="#34d399"/>
            </linearGradient>
            <linearGradient id="turtleBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#facc15"/>
            </linearGradient>
          </defs>
          <path d="M 80 485 Q 300 460, 520 485 L 520 520 L 80 520 Z" fill="#fde68a" stroke="#0f172a" stroke-width="7"/>
          <path d="M 340 215 C 380 160, 370 120, 320 130 C 290 140, 295 185, 305 210 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 220 230 C 190 200, 170 210, 175 225 C 180 240, 195 255, 205 260 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 195 285 L 165 290 L 195 295 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 230 340 C 210 390, 180 395, 175 375 C 170 355, 195 330, 210 325 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 370 330 C 400 400, 360 450, 310 440 C 290 435, 310 375, 330 345 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <ellipse cx="335" cy="385" rx="8" ry="12" fill="#059669" stroke="#0f172a" stroke-width="3"/>
          <ellipse cx="350" cy="370" rx="7" ry="10" fill="#059669" stroke="#0f172a" stroke-width="3"/>
          <ellipse cx="300" cy="290" rx="110" ry="85" fill="url(#turtleShell)" stroke="#0f172a" stroke-width="10"/>
          <path d="M 195 290 C 200 375, 400 375, 405 290 Z" fill="url(#turtleBelly)" stroke="#0f172a" stroke-width="8"/>
          <polygon points="300,240 330,255 330,290 300,305 270,290 270,255" fill="#fef08a" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <line x1="300" y1="240" x2="300" y2="208" stroke="#0f172a" stroke-width="6"/>
          <line x1="330" y1="255" x2="375" y2="235" stroke="#0f172a" stroke-width="6"/>
          <line x1="330" y1="290" x2="385" y2="305" stroke="#0f172a" stroke-width="6"/>
          <line x1="300" y1="305" x2="300" y2="350" stroke="#0f172a" stroke-width="6"/>
          <line x1="270" y1="290" x2="215" y2="305" stroke="#0f172a" stroke-width="6"/>
          <line x1="270" y1="255" x2="225" y2="235" stroke="#0f172a" stroke-width="6"/>
          <path d="M 390 250 C 420 220, 480 230, 490 270 C 490 305, 440 315, 395 295 Z" fill="url(#turtleSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 490 270 C 475 285, 450 285, 445 280" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <ellipse cx="450" cy="255" rx="14" ry="16" fill="#ffffff" stroke="#0f172a" stroke-width="6"/>
          <circle cx="452" cy="256" r="8" fill="#0f172a"/>
          <circle cx="449" cy="252" r="3.5" fill="#ffffff"/>
          <circle cx="455" cy="259" r="1.5" fill="#ffffff"/>
          <path d="M 440 240 Q 452 235, 465 242" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <circle cx="515" cy="240" r="8" fill="#e0f2fe" stroke="#0f172a" stroke-width="4" opacity="0.8"/>
          <circle cx="535" cy="205" r="12" fill="#e0f2fe" stroke="#0f172a" stroke-width="5" opacity="0.8"/>
          <polygon points="130,440 135,452 148,452 138,460 142,472 130,464 118,472 122,460 112,452 125,452" fill="#f43f5e" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 5. UZAY: CESUR UZAY KAŞİFİ ASTRONOT ÇOCUK
    # -------------------------------------------------------------------------
    {
        "id": "cirak_astronot_cocuk",
        "categoryId": "uzay",
        "name": "Cesur Uzay Kaşifi Astronot",
        "emoji": "👨‍🚀",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Sıfır yerçekiminde süzülen çocuk astronot! Parlak cam kask, oksijen sırt çantası ve yıldızlar.",
        "materials": "Resim kağıdı, kurşun kalem, silgi, beyaz, lacivert, altın sarısı ve cam mavisi boyalar",
        "welcomeText": "3, 2, 1, ateşle! Merhaba Kıvanç! Uzayın sonsuzluğunda süzülen cesur bir astronot çocuk çizmek için harika bir görev bizi bekliyor!",
        "colors": ["#ffffff", "#3b82f6", "#facc15", "#1e1b4b"],
        "welcomeAudio": "audio/voices/cirak_astronot_cocuk/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Büyük Yuvarlak Astronot Kaskı",
                "instruction": "Sayfanın üst ortasına astronotun büyük ve yuvarlak kaskını çiz.",
                "voice": "Kağıdımızın üst ortasına cesur astronotumuzun kocaman yuvarlak kaskını çizelim.",
                "svg": '<circle cx="300" cy="200" r="75" fill="none" stroke="#0f172a" stroke-width="10"/>'
            },
            {
                "title": "2. Adım: Parlak Cam Vizör Alanı",
                "instruction": "Kaskın içine uzayı yansıtan geniş oval vizör camını çiz.",
                "voice": "Kaskın içine uzayın yıldızlarını yansıtan geniş oval vizör camını çizelim.",
                "svg": '<ellipse cx="300" cy="200" rx="55" ry="45" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "3. Adım: Vizör İçi Meraklı Gözler ve Gülümseme",
                "instruction": "Camın ardından mutlu bakan iki parlak göz ve gülümseme ekle.",
                "voice": "Vizörün ardından bize el sallayan astronotun gülen gözlerini ve neşeli ağzını çizelim.",
                "svg": '<circle cx="280" cy="195" r="8" fill="#0f172a"/><circle cx="278" cy="192" r="2.5" fill="#ffffff"/><circle cx="320" cy="195" r="8" fill="#0f172a"/><circle cx="318" cy="192" r="2.5" fill="#ffffff"/><path d="M 292 215 Q 300 225, 308 215" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "4. Adım: Vizör Üzeri Işık Yansıması",
                "instruction": "Vizör camının sol üstüne iki parlak yansıma çizgisi çek.",
                "voice": "Camın parıldadığını gösteren iki tatlı beyaz ışık yansıma çizgisi yapalım.",
                "svg": '<path d="M 265 175 Q 285 168, 305 170" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/><line x1="270" y1="185" x2="285" y2="182" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>'
            },
            {
                "title": "5. Adım: Kask Kulaklık ve Anteni",
                "instruction": "Kaskın yanına telsiz kulaklığını ve ucunda top olan anteni çiz.",
                "voice": "Kaskın yanına uzay üssüyle konuşmayı sağlayan telsiz antenini çizelim.",
                "svg": '<rect x="372" y="185" width="12" height="30" rx="4" fill="none" stroke="#0f172a" stroke-width="6"/><line x1="378" y1="185" x2="385" y2="150" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><circle cx="386" cy="148" r="6" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "6. Adım: Kalın Uzay Giysisi Yakası",
                "instruction": "Kaskın altına kıyafeti bağlayan kalın metal yaka halkasını yap.",
                "voice": "Kaskın altına uzay elbisesini kilitleyen kalın emniyet yakasını çizelim.",
                "svg": '<path d="M 255 270 Q 300 285, 345 270 L 350 285 Q 300 300, 250 285 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>'
            },
            {
                "title": "7. Adım: Tombul Uzay Tulumu Gövdesi",
                "instruction": "Yakadan aşağıya sıfır yerçekiminde şişkin duran tulum gövdesini çiz.",
                "voice": "Yakadan aşağıya astronotun tombiş beyaz uzay tulumunu çizelim.",
                "svg": '<path d="M 250 285 L 240 380 L 360 380 L 350 285" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "8. Adım: Göğüs Kontrol Paneli ve Düğmeler",
                "instruction": "Göğsün ortasına oksijen kontrol kutusunu ve renkli düğmelerini yap.",
                "voice": "Göğsüne oksijen seviyesini gösteren kontrol panelini ve renkli düğmeleri çizelim.",
                "svg": '<rect x="275" y="305" width="50" height="35" rx="6" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="290" cy="322" r="5" fill="#0f172a"/><circle cx="310" cy="322" r="5" fill="#0f172a"/>'
            },
            {
                "title": "9. Adım: Arkadaki Oksijen Sırt Çantası",
                "instruction": "Astronotun sırtında duran dikdörtgen yaşam ünitesi çantasını çiz.",
                "voice": "Sırtında uzayda nefes almasını sağlayan oksijen sırt çantasını çizelim.",
                "svg": '<path d="M 240 285 L 215 295 L 215 375 L 240 375" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "10. Adım: El Sallayan Sağ Kol (Yukarı)",
                "instruction": "Omuzdan yukarıya doğru uzaya el sallayan kalın kolu çiz.",
                "voice": "Omuzdan yukarı doğru uzaya ve yıldızlara el sallayan neşeli kolunu çizelim.",
                "svg": '<path d="M 350 295 C 385 285, 410 260, 420 220" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/><path d="M 360 330 C 395 320, 430 290, 435 240" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "11. Adım: Tombiş Astronot Eldiveni (Sağ)",
                "instruction": "Kolun ucuna el sallayan kalın parmaklı astronot eldivenini ekle.",
                "voice": "Kolun ucuna uzayda el sallayan tombiş koruyucu eldiveni çizelim.",
                "svg": '<path d="M 420 220 C 415 195, 440 185, 450 205 C 455 215, 445 235, 435 240 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 425 210 Q 415 215, 420 225" stroke="#0f172a" stroke-width="5" fill="none"/>'
            },
            {
                "title": "12. Adım: Süzülen Sol Kol ve Eldiven",
                "instruction": "Diğer yana doğru süzülen sol kolu ve eldiveni yap.",
                "voice": "Sol tarafa doğru yerçekimsiz ortamda serbestçe süzülen diğer kolunu çizelim.",
                "svg": '<path d="M 245 305 C 205 315, 185 340, 175 365" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="168" cy="375" r="14" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "13. Adım: Sol Uçuş Bacağı ve Kıvrımı",
                "instruction": "Tulumun altından sola doğru kıvrılan uçuş bacağını çiz.",
                "voice": "Tulumun altından geriye doğru süzülen sol bacağı kıvrımla çizelim.",
                "svg": '<path d="M 260 380 L 235 445 M 290 380 L 265 445" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "14. Adım: Sağ Uçuş Bacağı",
                "instruction": "Sağa doğru uzanan diğer uzay bacağını yap.",
                "voice": "Sağ tarafa doğru tatlı tatlı süzülen diğer bacağı da çizelim.",
                "svg": '<path d="M 315 380 L 335 445 M 345 380 L 365 445" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "15. Adım: Kalın Uzay Botları (Ayakkabılar)",
                "instruction": "Bacakların ucuna aya basan kalın tabanlı uzay botlarını ekle.",
                "voice": "Bacakların ucuna kraterlere basan o meşhur kalın tabanlı uzay botlarını çizelim.",
                "svg": '<path d="M 235 445 L 205 455 C 200 465, 220 475, 245 470 L 265 445 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><path d="M 335 445 L 355 470 C 380 475, 395 460, 390 450 L 365 445 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "16. Adım: Kordon Güvenlik Halatı",
                "instruction": "Sırt çantasından uzaya uzanan kıvrımlı güvenlik kordonunu çiz.",
                "voice": "Sırt çantasından uzay gemisine bağlanan o kıvrım kıvrım güvenlik spiralini çizelim.",
                "svg": '<path d="M 215 350 C 180 340, 160 390, 130 380 C 100 370, 90 410, 60 400" stroke="#0f172a" stroke-width="6" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "17. Adım: Uzay Gezegenleri ve Parlayan Yıldızlar",
                "instruction": "Etrafına küçük bir kraterli gezegen ve parıldayan yıldızlar yap.",
                "voice": "Astronotumuzun etrafına minik bir kırmızı gezegen ve ışıl ışıl uzay yıldızları konduralım.",
                "svg": '<circle cx="100" cy="140" r="22" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 480 120 L 480 145 M 468 132 L 492 132" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><path d="M 490 380 L 490 400 M 480 390 L 500 390" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Kozmik Derinlik",
                "instruction": "Tebrikler Kıvanç! Astronotunu altın sarısı vizör, mavi detaylar ve parlayan yıldızlarla boya!",
                "voice": "Harikasın uzay kaşifi Kıvanç! Astronotun yıldızlar arasında harika görünüyor. Şimdi onu altın vizörü ve pırıl pırıl kostümüyle renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="visorgold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#ca8a04"/>
            </linearGradient>
            <linearGradient id="astroSuit" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="70%" stop-color="#f1f5f9"/>
              <stop offset="100%" stop-color="#cbd5e1"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="140" r="22" fill="#f97316" stroke="#0f172a" stroke-width="6"/>
          <path d="M 215 350 C 180 340, 160 390, 130 380 C 100 370, 90 410, 60 400" stroke="#38bdf8" stroke-width="7" stroke-linecap="round" fill="none"/>
          <path d="M 240 285 L 215 295 L 215 375 L 240 375 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 260 380 L 235 445 L 265 445 L 290 380 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 315 380 L 335 445 L 365 445 L 345 380 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 235 445 L 205 455 C 200 465, 220 475, 245 470 L 265 445 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 335 445 L 355 470 C 380 475, 395 460, 390 450 L 365 445 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 250 285 L 240 380 L 360 380 L 350 285 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <rect x="275" y="305" width="50" height="35" rx="6" fill="#e2e8f0" stroke="#0f172a" stroke-width="6"/>
          <circle cx="290" cy="322" r="5" fill="#ef4444"/>
          <circle cx="310" cy="322" r="5" fill="#22c55e"/>
          <path d="M 350 295 C 385 285, 410 260, 420 220 L 435 240 C 430 290, 395 320, 360 330 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 420 220 C 415 195, 440 185, 450 205 C 455 215, 445 235, 435 240 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 245 305 C 205 315, 185 340, 175 365 Z" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="8"/>
          <circle cx="168" cy="375" r="14" fill="#3b82f6" stroke="#0f172a" stroke-width="7"/>
          <path d="M 255 270 Q 300 285, 345 270 L 350 285 Q 300 300, 250 285 Z" fill="#3b82f6" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="300" cy="200" r="75" fill="url(#astroSuit)" stroke="#0f172a" stroke-width="10"/>
          <rect x="372" y="185" width="12" height="30" rx="4" fill="#3b82f6" stroke="#0f172a" stroke-width="6"/>
          <line x1="378" y1="185" x2="385" y2="150" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <circle cx="386" cy="148" r="6" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="300" cy="200" rx="55" ry="45" fill="url(#visorgold)" stroke="#0f172a" stroke-width="8"/>
          <circle cx="280" cy="195" r="8" fill="#0f172a"/>
          <circle cx="278" cy="192" r="2.5" fill="#ffffff"/>
          <circle cx="320" cy="195" r="8" fill="#0f172a"/>
          <circle cx="318" cy="192" r="2.5" fill="#ffffff"/>
          <path d="M 292 215 Q 300 225, 308 215" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <path d="M 480 120 L 480 145 M 468 132 L 492 132" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 6. KAHRAMANLAR: ŞİMŞEK HIZLI SÜPER KAHRAMAN
    # -------------------------------------------------------------------------
    {
        "id": "cirak_simsek_kahraman",
        "categoryId": "kahramanlar",
        "name": "Şimşek Hızlı Kahraman",
        "emoji": "⚡",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Işık hızında koşan şimşek kahraman! Altın kanatlı maske, göğsünde yıldırım amblemi ve elektrik kıvılcımları.",
        "materials": "Resim kağıdı, kurşun kalem, silgi, kırmızı, parlak sarı ve beyaz boyalar",
        "welcomeText": "Fırtına gibi geldim Kıvanç! Işık hızında koşan süper kahramanımızı çizmek için kalemini hazırla, çok hızlı ve çok eğlenceli olacak!",
        "colors": ["#ef4444", "#facc15", "#fbbf24", "#ffffff"],
        "welcomeAudio": "audio/voices/cirak_simsek_kahraman/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Kahraman Başlığı ve Çene Hattı",
                "instruction": "Sayfanın üst kısmına aerodinamik süper kahraman maskeli kafa hattını çiz.",
                "voice": "Kağıdımızın üst tarafına ışık hızında koşan kahramanımızın maskeli kafa çizgisini çizelim.",
                "svg": '<path d="M 270 190 C 260 140, 340 140, 330 190 C 330 230, 270 230, 270 190 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: Yüz Açıklığı ve Gülen Çene",
                "instruction": "Maskenin ortasındaki açık yüz alanını ve neşeli gülümsemeyi yap.",
                "voice": "Maskenin ortasından gülen ağzını ve cesur çenesini çizelim.",
                "svg": '<path d="M 280 185 C 280 205, 320 205, 320 185 C 320 220, 280 220, 280 185 Z" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 292 205 Q 300 213, 308 205" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "3. Adım: Hızlı ve Cesur Gözler",
                "instruction": "Maskenin içine öne doğru odaklanmış iki parlak göz ekle.",
                "voice": "Maskenin içine hedefe kilitlenmiş o cesur ve ışıl ışıl gözleri çizelim.",
                "svg": '<ellipse cx="288" cy="180" rx="7" ry="8" fill="#0f172a"/><circle cx="286" cy="177" r="2.5" fill="#ffffff"/><ellipse cx="312" cy="180" rx="7" ry="8" fill="#0f172a"/><circle cx="310" cy="177" r="2.5" fill="#ffffff"/>'
            },
            {
                "title": "4. Adım: Maske Yanı Altın Şimşek Kanatları (Sol)",
                "instruction": "Maskenin sol kulağına havalı bir altın yıldırım kanadı çiz.",
                "voice": "Maskenin sol kulağına rüzgarı yaran altın şimşek kanadını yapalım.",
                "svg": '<path d="M 268 185 L 245 165 L 255 175 L 235 155 L 260 170" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
            },
            {
                "title": "5. Adım: Maske Yanı Altın Şimşek Kanatları (Sağ)",
                "instruction": "Sağ kulağa da eşleşen altın şimşek kanadını kondur.",
                "voice": "Sağ kulağa da aynı hız şimşeği kanadını konduralım.",
                "svg": '<path d="M 332 185 L 355 165 L 345 175 L 365 155 L 340 170" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
            },
            {
                "title": "6. Adım: Koşan Gövde Eğimi",
                "instruction": "İleriye doğru hızla koşan eğik gövde hatlarını çiz.",
                "voice": "İleriye doğru fişek gibi atılan koşan gövde çizgilerini çizelim.",
                "svg": '<path d="M 275 230 L 255 315 L 335 315 L 325 230" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "7. Adım: Göğüsteki Dev Şimşek Amblemi",
                "instruction": "Göğsün tam ortasına beyaz daire ve altın sarısı zikzak şimşek yap.",
                "voice": "Göğsün tam ortasına kahramanın simgesi olan parlayan altın şimşek amblemini çizelim.",
                "svg": '<circle cx="295" cy="270" r="18" fill="none" stroke="#0f172a" stroke-width="6"/><path d="M 298 255 L 288 270 L 298 270 L 292 285 L 305 268 L 295 268 Z" fill="none" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>'
            },
            {
                "title": "8. Adım: Şimşek Desenli Kahraman Kemeri",
                "instruction": "Bel bölgesine zikzak şimşek desenli altın kemeri çiz.",
                "voice": "Beline zikzak şeklinde parıldayan altın hız kemerini çizelim.",
                "svg": '<path d="M 255 315 L 285 325 L 305 315 L 335 325" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "9. Adım: İleri Fırlayan Koşu Kolu (Sağ)",
                "instruction": "Öne doğru koşan yumruğu sıkılı sağ kolu çiz.",
                "voice": "Rüzgarı delip geçen öne fırlamış güçlü koşu kolunu ve yumruğunu çizelim.",
                "svg": '<path d="M 325 240 L 380 230 L 420 250" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="425" cy="255" r="12" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "10. Adım: Geriye Savrulan Kol (Sol)",
                "instruction": "Arkaya doğru savrulan sol kolu ve yumruğu yap.",
                "voice": "Arkaya doğru hızla savrulan sol kolu ve eldivenini çizelim.",
                "svg": '<path d="M 270 245 L 220 260 L 195 290" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="190" cy="295" r="12" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "11. Adım: Bilek Şimşek Manşetleri",
                "instruction": "Her iki bileğe de altın yıldırım manşetlerini ekle.",
                "voice": "Bileklerine güç veren altın yıldırım manşetlerini konduralım.",
                "svg": '<path d="M 390 230 L 398 245 L 392 248" stroke="#0f172a" stroke-width="5" fill="none"/><path d="M 215 265 L 210 278 L 218 276" stroke="#0f172a" stroke-width="5" fill="none"/>'
            },
            {
                "title": "12. Adım: Öne Basan Koşu Bacağı (Sağ)",
                "instruction": "İleriye doğru dev bir adım atan sağ ön bacağı çiz.",
                "voice": "İleriye doğru fırtına gibi adım atan ön bacağı güçlü çizgilerle çizelim.",
                "svg": '<path d="M 310 325 L 350 380 L 385 410" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "13. Adım: Ön Şimşek Çizmesi",
                "instruction": "Ön bacağın ucuna altın kanatlı süper hızlı koşu çizmesini ekle.",
                "voice": "Ön bacağın ucuna altın kanatlı hafif süper koşu çizmesini çizelim.",
                "svg": '<path d="M 385 410 L 420 425 C 425 435, 410 445, 385 440 L 375 420 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "14. Adım: Arkaya Uzanan Koşu Bacağı (Sol)",
                "instruction": "Arkaya doğru uçarcasına gerilmiş sol bacağı çiz.",
                "voice": "Arkaya doğru ışık hızında gerilen diğer bacağı çizelim.",
                "svg": '<path d="M 270 325 L 220 375 L 175 410" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/>'
            },
            {
                "title": "15. Adım: Arka Şimşek Çizmesi",
                "instruction": "Arka bacağın ucuna yerle temas eden çizme ucunu yap.",
                "voice": "Arka bacağın ucuna yerden güç alan çizme burnunu çizelim.",
                "svg": '<path d="M 175 410 L 140 430 C 135 440, 150 445, 170 435 L 180 415 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>'
            },
            {
                "title": "16. Adım: Ayak Arkası Elektrik Kıvılcımları",
                "instruction": "Koşarken arkasında parlayan zigzag elektrik kıvılcımlarını yap.",
                "voice": "Ayaklarının arkasından havaya saçılan parlak elektrik kıvılcımlarını çizelim.",
                "svg": '<path d="M 140 390 L 125 405 L 135 408 L 115 425 M 200 420 L 185 435 L 195 438 L 180 455" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
            },
            {
                "title": "17. Adım: Hız Rüzgarı ve Zemin Enerjisi",
                "instruction": "Gövdenin etrafına süper hız çizgilerini çek.",
                "voice": "Gövdenin etrafına rüzgar hızını ve zemin enerjisini gösteren çizgileri çekelim.",
                "svg": '<line x1="80" y1="210" x2="160" y2="210" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="240" x2="190" y2="240" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="70" y1="340" x2="150" y2="340" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Şimşek Parıltısı",
                "instruction": "Tebrikler Kıvanç! Şimşek kahramanını parlak kırmızı ve altın sarısı yıldırımlarla boya!",
                "voice": "İnanılmaz bir hız, harika bir çizim Kıvanç! Şimşek kahramanın fırtına gibi koşuyor. Şimdi onu alev kırmızısı ve altın sarısı yıldırımlarla parıldat!",
                "svg": '''
          <defs>
            <linearGradient id="flashRed" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f87171"/>
              <stop offset="50%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
            <linearGradient id="flashGold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#facc15"/>
              <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
          </defs>
          <path d="M 140 390 L 125 405 L 135 408 L 115 425 M 200 420 L 185 435 L 195 438 L 180 455" stroke="url(#flashGold)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <line x1="80" y1="210" x2="160" y2="210" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
          <line x1="100" y1="240" x2="190" y2="240" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <path d="M 270 325 L 220 375 L 175 410 L 190 415 L 235 375 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 175 410 L 140 430 C 135 440, 150 445, 170 435 L 180 415 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 310 325 L 350 380 L 385 410 L 375 420 L 335 370 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 385 410 L 420 425 C 425 435, 410 445, 385 440 L 375 420 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 275 230 L 255 315 L 335 315 L 325 230 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 315 L 285 325 L 305 315 L 335 325 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <circle cx="295" cy="270" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 298 255 L 288 270 L 298 270 L 292 285 L 305 268 L 295 268 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 325 240 L 380 230 L 420 250 L 415 260 L 370 245 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="425" cy="255" r="12" fill="url(#flashGold)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 270 245 L 220 260 L 195 290 L 190 280 L 230 250 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="190" cy="295" r="12" fill="url(#flashGold)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 270 190 C 260 140, 340 140, 330 190 C 330 230, 270 230, 270 190 Z" fill="url(#flashRed)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 280 185 C 280 205, 320 205, 320 185 C 320 220, 280 220, 280 185 Z" fill="#fed7aa" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 292 205 Q 300 213, 308 205" stroke="#0f172a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <ellipse cx="288" cy="180" rx="7" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
          <circle cx="288" cy="180" r="4.5" fill="#0f172a"/>
          <circle cx="286" cy="177" r="2" fill="#ffffff"/>
          <ellipse cx="312" cy="180" rx="7" ry="8" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
          <circle cx="312" cy="180" r="4.5" fill="#0f172a"/>
          <circle cx="310" cy="177" r="2" fill="#ffffff"/>
          <path d="M 268 185 L 245 165 L 255 175 L 235 155 L 260 170 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
          <path d="M 332 185 L 355 165 L 345 175 L 365 155 L 340 170 Z" fill="url(#flashGold)" stroke="#0f172a" stroke-width="5" stroke-linejoin="round"/>
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
    print(f"Generating studio human voices ({VOICE_NAME}) for 6 new drawings...")
    total_audio = 0
    for d in NEW_DRAWINGS:
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

    # Now integrate with drawings.js
    with open(DRAWINGS_JS, "r", encoding="utf-8") as f:
        content = f.read()

    # Verify existing IDs to avoid duplicates
    for d in NEW_DRAWINGS:
        if f'id: "{d["id"]}"' in content or f'id: \'{d["id"]}\'' in content:
            print(f"Drawing {d['id']} already exists in drawings.js, skipping append.")
            return

    # Generate JS code for new drawings
    new_drawings_js = ""
    for d in NEW_DRAWINGS:
        new_drawings_js += f"""
  // =========================================================================
  // {d['badge'] if 'badge' in d else '🟢 ÇIRAK'}: {d['name'].upper()}
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

    # Insert into content right before `];\n` at the end of DRAWINGS_DATA
    last_bracket_idx = content.rfind("];")
    if last_bracket_idx == -1:
        raise Exception("Could not find closing `];` of DRAWINGS_DATA in drawings.js")

    # Add comma before inserting if needed
    prefix = content[:last_bracket_idx].rstrip()
    if not prefix.endswith(","):
        prefix += ","

    updated_content = prefix + "\n" + new_drawings_js + content[last_bracket_idx:]

    # Also update count in CATEGORIES_DATA for 'all' from 12 to 18
    updated_content = updated_content.replace('"count": 12', '"count": 18', 1)

    with open(DRAWINGS_JS, "w", encoding="utf-8") as f:
        f.write(updated_content)

    print("Successfully updated drawings.js with 6 new drawings (total 18)!")

if __name__ == "__main__":
    asyncio.run(main())
