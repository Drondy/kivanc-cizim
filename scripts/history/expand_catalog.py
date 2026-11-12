# -*- coding: utf-8 -*-
"""
EXPAND DRAWINGS CATALOG FOR KIVANC CIZIM ATOLYESI
Doubles the drawing catalog from 6 to 12 items (2 drawings per category).
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
    # 1. DINOZORLAR: SEVİMLİ T-REX DİNOZOR (REXİ)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_sevimli_trex",
        "categoryId": "dinozorlar",
        "name": "Sevimli T-Rex Dinozor",
        "emoji": "🦖",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Sevimli yeşil dinozor Rexi ile tarih öncesine yolculuk! Yuvarlak hatlar ve neşeli gülümseme.",
        "materials": "Resim kağıdı, kurşun kalem, silgi, yeşil ve sarı boya kalemleri",
        "welcomeText": "Merhaba Kıvanç! Ben sevimli dinozor Rexi. Kağıdını ve boyalarını hazırla, birlikte kocaman gülümseyen bir T-Rex çizeceğiz!",
        "colors": ["#22c55e", "#15803d", "#fef08a", "#0f172a"],
        "welcomeAudio": "audio/voices/cirak_sevimli_trex/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Yuvarlak Alın ve Baş Tepesi",
                "instruction": "Kağıdın üst kısmına dinozorun yuvarlak alnını ve baş tepesini çiz.",
                "voice": "Kağıdımızın üst tarafına sevimli dinozor Rexi'nin yuvarlak alnını ve baş tepesini çizelim.",
                "svg": '<path d="M 230 190 C 230 115, 360 110, 420 170" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: Burun ve Üst Çene",
                "instruction": "Kafanın ucundan aşağı doğru neşeli üst çeneyi kıvır.",
                "voice": "Şimdi kafanın ucundan aşağı doğru sevimli bir burun ve üst çene kıvrımı yapalım.",
                "svg": '<path d="M 420 170 C 445 205, 415 245, 345 245" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "3. Adım: Alt Çene ve Kocaman Gülümseme",
                "instruction": "Ağzın altından geriye doğru gülen alt çeneyi tamamla.",
                "voice": "Harika! Şimdi ağzın altından geriye doğru kocaman gülen alt çeneyi çizelim.",
                "svg": '<path d="M 345 245 C 370 285, 290 295, 255 255" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "4. Adım: Sevimli Dinozor Dişleri",
                "instruction": "Ağzın içine küçük, dost canlısı üçgen dişler ekle.",
                "voice": "Ağzımızın içine küçük ve tatlı üçgen dinozor dişleri ekleyelim. Korkutucu değil, çok sevimli!",
                "svg": '<path d="M 355 245 L 365 257 L 375 245 M 385 245 L 395 257 L 405 245" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Burun Deliği ve Yanak Gamzesi",
                "instruction": "Burnun ucuna küçük bir nokta, yanağa tatlı bir gamze koy.",
                "voice": "Burnun ucuna minik bir burun deliği ve yanağına tatlı bir gamze çizgisi konduralım.",
                "svg": '<circle cx="415" cy="185" r="4.5" fill="#0f172a"/><path d="M 265 240 Q 255 250, 260 260" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "6. Adım: Büyük Parlak Göz Yuvarlağı",
                "instruction": "Kafanın ortasına kocaman, meraklı bir göz çemberi çiz.",
                "voice": "Şimdi kafanın ortasına kocaman ve meraklı bir göz çemberi çizelim.",
                "svg": '<ellipse cx="325" cy="165" rx="26" ry="30" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "7. Adım: Gözbebeği ve Çifte Işık Parlaması",
                "instruction": "Gözün içine simsiyah bir gözbebeği ve iki tane beyaz ışık parlaması ekle.",
                "voice": "Gözün içine siyah gözbebeğini boyayalım ve içine iki tane parlak beyaz ışık konduralım.",
                "svg": '<circle cx="332" cy="167" r="14" fill="#0f172a"/><circle cx="326" cy="160" r="6" fill="#ffffff"/><circle cx="337" cy="173" r="3" fill="#ffffff"/>'
            },
            {
                "title": "8. Adım: Neşeli Kaş ve Alın Benekleri",
                "instruction": "Gözün üstüne tatlı bir kaş ve alnına üç minik benek yap.",
                "voice": "Gözün üstüne neşeli bir kaş kıvrımı ve alnına üç tane sevimli dinozor beneği ekleyelim.",
                "svg": '<path d="M 300 135 Q 325 125, 350 135" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><circle cx="280" cy="140" r="4" fill="#0f172a"/><circle cx="265" cy="155" r="3.5" fill="#0f172a"/>'
            },
            {
                "title": "9. Adım: Ense ve Sırt Hattı",
                "instruction": "Kafanın arkasından aşağı doğru sırt çizgisini uzat.",
                "voice": "Kafanın arkasından aşağı doğru dinozorumuzun güçlü sırt çizgisini çizelim.",
                "svg": '<path d="M 230 190 C 200 230, 190 310, 215 380" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "10. Adım: Boyun ve Tombiş Karın",
                "instruction": "Çenenin altından aşağıya tombul göbeğin ön çizgisini indir.",
                "voice": "Çenenin altından aşağı doğru Rexi'nin tombul ve sevimli göbek çizgisini indirelim.",
                "svg": '<path d="M 255 255 C 275 320, 280 380, 255 435" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "11. Adım: Minik Ön Kol (Sağ)",
                "instruction": "T-Rex'in ünlü minicik ön kolunu çiz ve parmaklarını ekle.",
                "voice": "İşte T-Rex'lerin en sevimli yeri! Küçücük ön kolunu ve minik parmaklarını çizelim.",
                "svg": '<path d="M 275 305 C 315 315, 325 300, 320 330 C 300 335, 280 328, 270 322" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><line x1="318" y1="318" x2="326" y2="324" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "12. Adım: Diğer Ön Kol (Sol)",
                "instruction": "Gövdenin arkasında kalan diğer küçük kolu da göster.",
                "voice": "Gövdenin diğer tarafındaki neşeli küçük kolunu da selam verir gibi ekleyelim.",
                "svg": '<path d="M 250 295 C 275 300, 285 290, 280 312" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "13. Adım: Güçlü Arka Bacak ve But",
                "instruction": "Sırtın altından yere doğru kavisli güçlü dinozor budunu çiz.",
                "voice": "Dinozorumuzun hızlı koşmasını sağlayan güçlü arka budunu ve dizini kavisle çizelim.",
                "svg": '<path d="M 215 340 C 170 370, 175 435, 215 455" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "14. Adım: Büyük Ayak ve Yuvarlak Pençeler",
                "instruction": "Bacağın ucuna yere basan tabanı ve üç sevimli pençeyi yap.",
                "voice": "Bacağın altına yere sağlam basan geniş ayağını ve üç tane yuvarlak tırnağını yapalım.",
                "svg": '<path d="M 195 455 L 255 455" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><circle cx="210" cy="457" r="5" fill="#0f172a"/><circle cx="225" cy="457" r="5" fill="#0f172a"/><circle cx="240" cy="457" r="5" fill="#0f172a"/>'
            },
            {
                "title": "15. Adım: Diğer Bacak ve Zemin Desteği",
                "instruction": "Ön taraftaki destek bacağını ve ayağını çiz.",
                "voice": "Ön tarafta duran diğer ayağını ve tırnaklarını da çizerek dinozorumuzu sağlamca yere bastıralım.",
                "svg": '<path d="M 255 410 L 265 455 L 305 455" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="280" cy="457" r="4.5" fill="#0f172a"/><circle cx="295" cy="457" r="4.5" fill="#0f172a"/>'
            },
            {
                "title": "16. Adım: Yukarı Kıvrılan Uzun Kuyruk",
                "instruction": "Sırtın ucundan arkaya doğru neşeyle sallanan kuyruğu kıvır.",
                "voice": "Çok iyi gidiyorsun Kıvanç! Şimdi arkaya doğru neşeyle sallanan uzun dinozor kuyruğunu çizelim.",
                "svg": '<path d="M 215 380 C 150 400, 110 360, 80 320 C 110 380, 160 440, 215 450" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "17. Adım: Sırt Dikenleri ve Karın Çizgileri",
                "instruction": "Sırt boyunca küçük yumuşak üçgenler ve karın çizgilerini ekle.",
                "voice": "Sırtına sevimli küçük dinozor dikenleri ve göbeğine yumuşak çizgiler ekleyerek detayları tamamlayalım.",
                "svg": '<path d="M 210 220 L 195 230 L 205 245 L 190 255 L 202 270 L 188 285 L 200 300" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 255 330 C 275 345, 275 365, 255 380 M 250 385 C 270 400, 270 420, 250 430" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Tarih Öncesi Zemin",
                "instruction": "Tebrikler Kıvanç! Rexi'yi en güzel yeşil ve sarı renklerinle canlandır!",
                "voice": "Tebrikler Kıvanç! Çizimin harika oldu. Şimdi Rexi'yi yeşil ve sarı boyalarınla canlandırıp çimlerin üstüne yerleştir!",
                "svg": '''
          <defs>
            <linearGradient id="rexBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#4ade80"/>
              <stop offset="60%" stop-color="#22c55e"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
            <linearGradient id="rexBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#eab308"/>
            </linearGradient>
            <linearGradient id="rexGround" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#86efac"/>
              <stop offset="100%" stop-color="#22c55e"/>
            </linearGradient>
          </defs>
          <ellipse cx="260" cy="470" rx="190" ry="25" fill="url(#rexGround)" stroke="#0f172a" stroke-width="7"/>
          <path d="M 215 380 C 150 400, 110 360, 80 320 C 110 380, 160 440, 215 450 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 210 220 L 195 230 L 205 245 L 190 255 L 202 270 L 188 285 L 200 300 Z" fill="#eab308" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 255 410 L 265 455 L 305 455 L 295 410 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="280" cy="457" r="4.5" fill="#fef08a" stroke="#0f172a" stroke-width="3"/>
          <circle cx="295" cy="457" r="4.5" fill="#fef08a" stroke="#0f172a" stroke-width="3"/>
          <path d="M 215 340 C 170 370, 175 435, 215 455 L 255 455 C 265 425, 255 350, 215 340 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <circle cx="210" cy="457" r="5" fill="#fef08a" stroke="#0f172a" stroke-width="3.5"/>
          <circle cx="225" cy="457" r="5" fill="#fef08a" stroke="#0f172a" stroke-width="3.5"/>
          <circle cx="240" cy="457" r="5" fill="#fef08a" stroke="#0f172a" stroke-width="3.5"/>
          <path d="M 230 190 C 200 230, 190 310, 215 380 L 255 435 C 280 380, 275 320, 255 255 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 255 255 C 275 320, 280 380, 255 435 L 225 435 C 240 375, 240 320, 235 270 Z" fill="url(#rexBelly)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 255 330 C 275 345, 275 365, 255 380 M 250 385 C 270 400, 270 420, 250 430" fill="none" stroke="#ca8a04" stroke-width="5" stroke-linecap="round"/>
          <path d="M 250 295 C 275 300, 285 290, 280 312 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 275 305 C 315 315, 325 300, 320 330 C 300 335, 280 328, 270 322 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 230 190 C 230 115, 360 110, 420 170 C 445 205, 415 245, 345 245 C 370 285, 290 295, 255 255 C 230 240, 230 210, 230 190 Z" fill="url(#rexBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 345 245 C 370 285, 290 295, 255 255 Z" fill="#991b1b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 355 245 L 365 257 L 375 245 M 385 245 L 395 257 L 405 245" fill="#ffffff" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <ellipse cx="325" cy="165" rx="26" ry="30" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <circle cx="332" cy="167" r="14" fill="#0f172a"/>
          <circle cx="326" cy="160" r="6" fill="#ffffff"/>
          <circle cx="337" cy="173" r="3" fill="#ffffff"/>
          <circle cx="415" cy="185" r="4.5" fill="#0f172a"/>
          <path d="M 300 135 Q 325 125, 350 135" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="280" cy="140" r="4" fill="#15803d"/>
          <circle cx="265" cy="155" r="3.5" fill="#15803d"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 2. HAYVANLAR: SEVİMLİ YAVRU ASLAN SİMBİ
    # -------------------------------------------------------------------------
    {
        "id": "cirak_yavru_aslan",
        "categoryId": "hayvanlar",
        "name": "Sevimli Yavru Aslan",
        "emoji": "🦁",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Ormanların sevimli küçük prensi yavru aslan Simbi! Pofuduk yelesi ve sıcacık gülümsemesi.",
        "materials": "Resim kağıdı, kurşun kalem, silgi, sarı, turuncu ve kahverengi boyalar",
        "welcomeText": "Selam Kıvanç! Ormanların sevimli prensi küçük aslan Simbi burada! Hazırsan birlikte harika bir aslan çizelim!",
        "colors": ["#fbbf24", "#f59e0b", "#d97706", "#fef08a"],
        "welcomeAudio": "audio/voices/cirak_yavru_aslan/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Yuvarlak Kafa ve Alın",
                "instruction": "Kağıdın ortasına yavru aslanın tatlı yuvarlak kafa çizgisini yap.",
                "voice": "Kağıdımızın tam ortasına yavru aslanımızın tombiş yuvarlak kafa hattını çizelim.",
                "svg": '<path d="M 230 240 C 200 180, 220 130, 300 130 C 380 130, 400 180, 370 240" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: Tombiş Yanaklar ve Çene",
                "instruction": "Kafanın altını geniş ve sevimli bir çene kavisiyle birleştir.",
                "voice": "Şimdi yanakları ve çeneyi birleştiren tombul bir gülümseme kasesi çizelim.",
                "svg": '<path d="M 230 240 C 235 300, 365 300, 370 240" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "3. Adım: Pofuduk Yele Bukleleri",
                "instruction": "Kafanın etrafına bulut gibi puf puf yele kıvrımları çiz.",
                "voice": "Kafanın etrafına pamuk şeker gibi pofuduk yele bukleleri yapalım.",
                "svg": '<path d="M 220 150 C 170 140, 150 200, 180 240 C 140 270, 160 330, 210 330 C 180 370, 240 400, 270 380 M 380 150 C 430 140, 450 200, 420 240 C 460 270, 440 330, 390 330 C 420 370, 360 400, 330 380" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Sol Yuvarlak Kulak",
                "instruction": "Kafanın sol üstüne tatlı, yuvarlak bir kulak ve içine kıvrım ekle.",
                "voice": "Kafanın sol üst köşesine yuvarlak bir kulak ve içine minik bir kıvrım konduralım.",
                "svg": '<path d="M 215 150 C 185 130, 190 85, 240 100" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 210 135 C 195 120, 200 98, 230 108" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "5. Adım: Sağ Yuvarlak Kulak",
                "instruction": "Aynı şekilde sağ tarafa da yuvarlak kulağı çiz.",
                "voice": "Şimdi sağ tarafa da aynı sevimli yuvarlak kulağı çizelim.",
                "svg": '<path d="M 385 150 C 415 130, 410 85, 360 100" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><path d="M 390 135 C 405 120, 400 98, 370 108" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "6. Adım: Sevimli Kalp Burun",
                "instruction": "Yüzün tam ortasına küçük, tatlı bir kalp burun yerleştir.",
                "voice": "Yüzün tam ortasına küçük ve parlak bir kalp şeklinde burun koyalım.",
                "svg": '<path d="M 285 215 C 290 210, 310 210, 315 215 C 315 225, 300 238, 300 238 C 300 238, 285 225, 285 215 Z" fill="#0f172a" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>'
            },
            {
                "title": "7. Adım: Gülen Kedi Ağzı",
                "instruction": "Burnun altından iki yana kıvrılan 'W' şeklinde bir gülümseme yap.",
                "voice": "Burnun altından iki yana kıvrılan çok tatlı bir gülümseme çizgisi çizelim.",
                "svg": '<path d="M 300 238 L 300 252 M 300 252 C 285 268, 260 262, 255 248 M 300 252 C 315 268, 340 262, 345 248" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "8. Adım: Sol Büyük Parlak Göz",
                "instruction": "Sol tarafa kocaman bir göz yuvarlağı, siyah gözbebeği ve beyaz parıltılar yap.",
                "voice": "Sol tarafa kocaman bir göz çizelim, içine siyah gözbebeğini ve parıltıları ekleyelim.",
                "svg": '<ellipse cx="265" cy="180" rx="18" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="268" cy="182" r="11" fill="#0f172a"/><circle cx="264" cy="177" r="5" fill="#ffffff"/><circle cx="272" cy="186" r="2.5" fill="#ffffff"/>'
            },
            {
                "title": "9. Adım: Sağ Büyük Parlak Göz",
                "instruction": "Sağ tarafa da aynı şekilde ışıl ışıl parlayan gözü çiz.",
                "voice": "Sağ tarafa da aynı ışıl ışıl gözü konduralım, aslanımız bize cana yakın baksın!",
                "svg": '<ellipse cx="335" cy="180" rx="18" ry="22" fill="none" stroke="#0f172a" stroke-width="7"/><circle cx="332" cy="182" r="11" fill="#0f172a"/><circle cx="328" cy="177" r="5" fill="#ffffff"/><circle cx="336" cy="186" r="2.5" fill="#ffffff"/>'
            },
            {
                "title": "10. Adım: Bıyık Noktaları ve Kaşlar",
                "instruction": "Yanaklara üçer bıyık noktası ve gözlerin üstüne neşeli kaşlar ekle.",
                "voice": "Yanaklarına üçer minik bıyık noktası ve gözlerin üstüne sevimli kaşlar ekleyelim.",
                "svg": '<circle cx="270" cy="245" r="2.5" fill="#0f172a"/><circle cx="278" cy="248" r="2.5" fill="#0f172a"/><circle cx="272" cy="253" r="2.5" fill="#0f172a"/><circle cx="330" cy="245" r="2.5" fill="#0f172a"/><circle cx="322" cy="248" r="2.5" fill="#0f172a"/><circle cx="328" cy="253" r="2.5" fill="#0f172a"/><path d="M 250 152 Q 265 142, 280 150 M 320 150 Q 335 142, 350 152" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "11. Adım: Pofuduk Göğüs Yelesi",
                "instruction": "Çenenin altından göğse doğru yumuşak beyaz tüy kıvrımını yap.",
                "voice": "Çenenin altından aşağıya yumuşacık göğüs tüylerini çizelim.",
                "svg": '<path d="M 270 300 C 260 340, 275 375, 300 380 C 325 375, 340 340, 330 300" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "12. Adım: Sol Ön Bacak ve Pati",
                "instruction": "Aşağıya düz bir bacak ve üç yuvarlak parmaklı sevimli pati çiz.",
                "voice": "Aşağıya doğru tombiş ön bacağı ve üç parmaklı sevimli patiyi çizelim.",
                "svg": '<path d="M 255 350 L 245 440 C 245 460, 290 460, 290 440 L 285 375" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><line x1="260" y1="445" x2="260" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="275" y1="445" x2="275" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "13. Adım: Sağ Ön Bacak ve Pati",
                "instruction": "Yanına ikinci ön bacağı ve pati parmaklarını ekle.",
                "voice": "Hemen yanına ikinci ön bacağı da çizelim, patileri yan yana dursun.",
                "svg": '<path d="M 315 375 L 310 440 C 310 460, 355 460, 355 440 L 345 350" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><line x1="325" y1="445" x2="325" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="340" y1="445" x2="340" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "14. Adım: Oturan Arka Bacaklar",
                "instruction": "İki yana uslu uslu oturan arka bacak kavislerini çiz.",
                "voice": "Harika! İki yana uslu uslu yere oturan arka bacak kıvrımlarını çizelim.",
                "svg": '<path d="M 215 380 C 180 410, 180 460, 240 460 M 385 380 C 420 410, 420 460, 360 460" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "15. Adım: Kıvrılan Neşeli Kuyruk",
                "instruction": "Arka taraftan yukarıya doğru kıvrılan neşeli bir kuyruk uzat.",
                "voice": "Arka taraftan yukarı doğru sallanan neşeli ince kuyruk çizgisini uzatalım.",
                "svg": '<path d="M 380 420 C 450 420, 480 360, 465 300" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "16. Adım: Püsküllü Kuyruk Ucu",
                "instruction": "Kuyruğun ucuna fırça gibi kabarık tüylü püskülü yap.",
                "voice": "Kuyruğun en ucuna fırça gibi kabarık ve sevimli püskülünü ekleyelim.",
                "svg": '<path d="M 465 300 C 450 270, 490 250, 490 280 C 500 300, 480 320, 465 300 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "17. Adım: Savana Çimleri ve Çiçekler",
                "instruction": "Ayaklarının altına küçük çim yaprakları ekle.",
                "voice": "Patilerinin altına sevimli savana çimleri çizerek zemin detayını oluşturalım.",
                "svg": '<path d="M 160 470 L 170 450 L 180 470 M 420 470 L 430 448 L 440 470 M 295 470 L 305 452 L 315 470" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Altın Güneş Işığı",
                "instruction": "Tebrikler Kıvanç! Simbi'yi sıcacık altın sarısı ve turuncu renklerinle boya!",
                "voice": "Harikasın Kıvanç! Yavru aslanımız muhteşem oldu. Şimdi onu altın sarısı ve bal rengi boyalarınla ışıl ışıl renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="lionBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fde047"/>
              <stop offset="60%" stop-color="#fbbf24"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
            <linearGradient id="lionMane" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#b45309"/>
            </linearGradient>
            <linearGradient id="lionBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef9c3"/>
              <stop offset="100%" stop-color="#fef08a"/>
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="470" rx="180" ry="22" fill="#84cc16" stroke="#0f172a" stroke-width="6"/>
          <path d="M 380 420 C 450 420, 480 360, 465 300" stroke="#f59e0b" stroke-width="14" stroke-linecap="round" fill="none"/>
          <path d="M 380 420 C 450 420, 480 360, 465 300" stroke="#0f172a" stroke-width="9" stroke-linecap="round" fill="none"/>
          <path d="M 465 300 C 450 270, 490 250, 490 280 C 500 300, 480 320, 465 300 Z" fill="url(#lionMane)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 215 380 C 180 410, 180 460, 240 460 L 255 460 C 255 420, 240 390, 215 380 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 385 380 C 420 410, 420 460, 360 460 L 345 460 C 345 420, 360 390, 385 380 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 350 L 245 440 C 245 460, 290 460, 290 440 L 285 375 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="260" y1="445" x2="260" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <line x1="275" y1="445" x2="275" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <path d="M 315 375 L 310 440 C 310 460, 355 460, 355 440 L 345 350 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <line x1="325" y1="445" x2="325" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <line x1="340" y1="445" x2="340" y2="458" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <path d="M 270 300 C 260 340, 275 375, 300 380 C 325 375, 340 340, 330 300 Z" fill="url(#lionBelly)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 220 150 C 170 140, 150 200, 180 240 C 140 270, 160 330, 210 330 C 180 370, 240 400, 270 380 C 330 400, 360 400, 390 330 C 440 330, 460 270, 420 240 C 450 200, 430 140, 380 150 C 350 110, 250 110, 220 150 Z" fill="url(#lionMane)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 215 150 C 185 130, 190 85, 240 100 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 210 135 C 195 120, 200 98, 230 108 Z" fill="#fda4af" stroke="#0f172a" stroke-width="5"/>
          <path d="M 385 150 C 415 130, 410 85, 360 100 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 390 135 C 405 120, 400 98, 370 108 Z" fill="#fda4af" stroke="#0f172a" stroke-width="5"/>
          <path d="M 230 240 C 200 180, 220 130, 300 130 C 380 130, 400 180, 370 240 C 365 300, 235 300, 230 240 Z" fill="url(#lionBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <ellipse cx="265" cy="180" rx="18" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="268" cy="182" r="11" fill="#0f172a"/>
          <circle cx="264" cy="177" r="5" fill="#ffffff"/>
          <circle cx="272" cy="186" r="2.5" fill="#ffffff"/>
          <ellipse cx="335" cy="180" rx="18" ry="22" fill="#ffffff" stroke="#0f172a" stroke-width="7"/>
          <circle cx="332" cy="182" r="11" fill="#0f172a"/>
          <circle cx="328" cy="177" r="5" fill="#ffffff"/>
          <circle cx="336" cy="186" r="2.5" fill="#ffffff"/>
          <path d="M 250 152 Q 265 142, 280 150 M 320 150 Q 335 142, 350 152" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <ellipse cx="300" cy="250" rx="42" ry="25" fill="url(#lionBelly)" stroke="#0f172a" stroke-width="6"/>
          <path d="M 285 215 C 290 210, 310 210, 315 215 C 315 225, 300 238, 300 238 C 300 238, 285 225, 285 215 Z" fill="#991b1b" stroke="#0f172a" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 300 238 L 300 252 M 300 252 C 285 268, 260 262, 255 248 M 300 252 C 315 268, 340 262, 345 248" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
          <circle cx="270" cy="245" r="2.5" fill="#0f172a"/>
          <circle cx="278" cy="248" r="2.5" fill="#0f172a"/>
          <circle cx="330" cy="245" r="2.5" fill="#0f172a"/>
          <circle cx="322" cy="248" r="2.5" fill="#0f172a"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 3. ARABALAR: DEV CANAVAR KAMYON (MONSTER TRUCK)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_canavar_kamyon",
        "categoryId": "arabalar",
        "name": "Dev Canavar Kamyon",
        "emoji": "🛻",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Devasa tekerlekler, güçlü süspansiyonlar ve alev desenleri! Kıvanç'ın süper güçlü Monster Truck'ı.",
        "materials": "Resim kağıdı, kurşun kalem, cetvel (isteğe bağlı), mavi, turuncu ve siyah boyalar",
        "welcomeText": "Vııın vııın! Merhaba Kıvanç! Dev tekerlekli, süper güçlü canavar kamyonu çizmeye hazır mısın? Hadi motorları çalıştıralım!",
        "colors": ["#3b82f6", "#1d4ed8", "#f97316", "#1e293b"],
        "welcomeAudio": "audio/voices/cirak_canavar_kamyon/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Kabin Tavanı ve Ön Cam",
                "instruction": "Sayfanın üst ortasına kamyonun tavanını ve eğik ön cam çizgisini yap.",
                "voice": "Kağıdımızın üst ortasına canavar kamyonumuzun sağlam tavanını ve eğik ön camını çizelim.",
                "svg": '<path d="M 220 220 L 380 220 L 430 290 L 180 290 Z" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "2. Adım: Güçlü Kaput ve Ön Izgara",
                "instruction": "Ön camdan ileriye doğru güçlü motor kaputunu ve dik ön ızgarayı çiz.",
                "voice": "Ön camdan ileriye doğru kamyonun güçlü motor kaputunu ve dik ön ızgarasını çizelim.",
                "svg": '<path d="M 430 290 L 510 300 L 515 350 L 410 350" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Kamyon Kasası ve Arka Gövde",
                "instruction": "Arka tarafa doğru pick-up kasasını düz çizgilerle uzat.",
                "voice": "Kabinin arkasına doğru canavar kamyonun pick-up kasasını güçlü çizgilerle uzatalım.",
                "svg": '<path d="M 180 290 L 100 295 L 95 350 L 200 350" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Yan Camlar ve Direkler",
                "instruction": "Kabin içine sürücü camı ve arka kelebek camını bölerek çiz.",
                "voice": "Şimdi kabinin içine sürücü camını ve cam direklerini net çizgilerle ekleyelim.",
                "svg": '<path d="M 290 220 L 290 290 M 200 230 L 275 230 L 275 280 L 195 280 Z M 305 230 L 370 230 L 415 280 L 305 280 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Kapı Çizgisi ve Sağlam Kol",
                "instruction": "Kabin altına kapı ayrımını ve dikdörtgen kapı kolunu ekle.",
                "voice": "Gövdeye kapı açılma çizgisini ve sağlam bir kapı kolu dikdörtgeni çizelim.",
                "svg": '<path d="M 200 290 L 200 350 M 330 290 L 330 350" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><rect x="220" y="305" width="25" height="8" rx="3" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "6. Adım: Güçlü Farlar ve Izgara Izleri",
                "instruction": "Ön tarafa kare far ve ızgara şeritlerini yap.",
                "voice": "Kamyonun önüne güçlü parıldayan ön farını ve havalandırma ızgaralarını yapalım.",
                "svg": '<rect x="495" y="305" width="18" height="25" rx="4" fill="none" stroke="#0f172a" stroke-width="7"/><line x1="450" y1="320" x2="490" y2="320" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="450" y1="335" x2="490" y2="335" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "7. Adım: Tavan Projektör Farları",
                "instruction": "Tavana macera için 4 adet yuvarlak dev projektör lambası ekle.",
                "voice": "Tavan demirinin üstüne geceyi aydınlatan dört tane yuvarlak projektör lambası çizelim.",
                "svg": '<path d="M 240 220 L 240 195 L 360 195 L 360 220" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/><circle cx="260" cy="195" r="12" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="290" cy="195" r="12" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="320" cy="195" r="12" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="350" cy="195" r="12" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "8. Adım: Yüksek Canavar Şasi Barı",
                "instruction": "Gövdenin altına tekerlekleri tutacak kalın metal şasiyi çiz.",
                "voice": "Gövdenin altına o devasa tekerlekleri taşıyacak çelik şasi kirişini çizelim.",
                "svg": '<path d="M 160 350 L 450 350 L 430 380 L 180 380 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>'
            },
            {
                "title": "9. Adım: Devasa Ön Tekerlek Jantı",
                "instruction": "Ön tarafa iç içe iki büyük jant çemberi yap.",
                "voice": "Ön tarafa kamyonun dev jantını belirten iç içe iki büyük daire çizelim.",
                "svg": '<circle cx="430" cy="430" r="40" fill="none" stroke="#0f172a" stroke-width="9"/><circle cx="430" cy="430" r="18" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "10. Adım: Ön Lastiğin Dev Dişleri",
                "instruction": "Jantın etrafına kocaman lastik çemberi ve derin diş çizgilerini ekle.",
                "voice": "Jantın etrafına dev gibi bir lastik çemberi ve kayalara tırmanan derin dişlerini çizelim.",
                "svg": '<circle cx="430" cy="430" r="75" fill="none" stroke="#0f172a" stroke-width="10"/><path d="M 430 355 L 430 340 M 480 375 L 492 365 M 505 430 L 520 430 M 480 485 L 492 495 M 430 505 L 430 520 M 380 485 L 368 495 M 355 430 L 340 430 M 380 375 L 368 365" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "11. Adım: Devasa Arka Tekerlek Jantı",
                "instruction": "Arka kısma da aynı büyüklükte jant çemberlerini çiz.",
                "voice": "Arka tarafa da aynı heybetli arka tekerlek jant dairelerini çizelim.",
                "svg": '<circle cx="180" cy="430" r="40" fill="none" stroke="#0f172a" stroke-width="9"/><circle cx="180" cy="430" r="18" fill="none" stroke="#0f172a" stroke-width="7"/>'
            },
            {
                "title": "12. Adım: Arka Lastiğin Dev Dişleri",
                "instruction": "Arka lastiğin de kalın kauçuk çemberini ve arazi dişlerini yap.",
                "voice": "Arka lastiğimizin de kalın dişlerini tamamlayalım, kamyonumuz havaya kalkmaya hazır olsun!",
                "svg": '<circle cx="180" cy="430" r="75" fill="none" stroke="#0f172a" stroke-width="10"/><path d="M 180 355 L 180 340 M 230 375 L 242 365 M 255 430 L 270 430 M 230 485 L 242 495 M 180 505 L 180 520 M 130 485 L 118 495 M 105 430 L 90 430 M 130 375 L 118 365" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "13. Adım: Kalın Amortisör Yayları",
                "instruction": "Gövde ile tekerlekler arasına zıplayan dev helezon yaylar çiz.",
                "voice": "Tekerleklerin üstüne zıplamayı sağlayan kalın amortisör yaylarını zigzaglarla çizelim.",
                "svg": '<path d="M 410 380 L 415 400 L 405 410 L 420 420 M 200 380 L 205 400 L 195 410 L 210 420" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "14. Adım: Yukarı Kıvrılan Krom Egzoz",
                "instruction": "Kabinin arkasından yukarı doğru kalın bir egzoz borusu yap.",
                "voice": "Kabinin arkasından göğe doğru kıvrılan krom bir canavar egzoz borusu çizelim.",
                "svg": '<path d="M 170 290 L 160 210 C 160 190, 140 190, 140 210" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "15. Adım: Kapı Üstü Havalı Alev Deseni",
                "instruction": "Kamyonun kapısına rüzgarda yanan alev dillerini çiz.",
                "voice": "Kamyonumuza süper yarışçı havası katan ateş dillerini kapının üzerine çizelim.",
                "svg": '<path d="M 230 330 C 270 330, 260 305, 300 310 C 270 315, 290 325, 320 325 C 280 335, 250 340, 230 330 Z" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "16. Adım: Çamurluklar ve Arka Dingil",
                "instruction": "Tekerleklerin arasına kalın aks mili ve arka paçalıkları ekle.",
                "voice": "İki tekerlek arasına kalın aks milini ve arka çamurluk koruyucusunu ekleyelim.",
                "svg": '<line x1="255" y1="430" x2="355" y2="430" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><path d="M 95 380 L 85 410" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Uçuşan Toprak Parçaları ve Zemin",
                "instruction": "Lastiklerin arkasından fırlayan toprak parçalarını ve pist rampasını yap.",
                "voice": "Lastiklerin altından havaya fırlayan çamur parçalarını ve toprak rampasını çizelim.",
                "svg": '<circle cx="70" cy="460" r="5" fill="#0f172a"/><circle cx="50" cy="430" r="6" fill="#0f172a"/><circle cx="60" cy="485" r="4" fill="#0f172a"/><path d="M 60 525 Q 300 500, 550 525" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Şov Işıkları",
                "instruction": "Tebrikler Kıvanç! Canavar kamyonunu mavi metalik gövde ve turuncu alevlerle boya!",
                "voice": "Harika bir iş çıkardın Kıvanç! Canavar kamyonun fırtına gibi hazır. Şimdi onu elektrik mavisi ve cayır cayır turuncu alevlerle renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="truckBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#60a5fa"/>
              <stop offset="50%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="truckFlame" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#fde047"/>
              <stop offset="50%" stop-color="#f97316"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </linearGradient>
            <linearGradient id="truckTire" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <linearGradient id="truckRamp" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#b45309"/>
              <stop offset="100%" stop-color="#78350f"/>
            </linearGradient>
          </defs>
          <path d="M 50 535 Q 300 500, 560 535 L 560 560 L 50 560 Z" fill="url(#truckRamp)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 170 290 L 160 210 C 160 190, 140 190, 140 210 Z" fill="#94a3b8" stroke="#0f172a" stroke-width="8"/>
          <line x1="255" y1="430" x2="355" y2="430" stroke="#475569" stroke-width="14" stroke-linecap="round"/>
          <line x1="255" y1="430" x2="355" y2="430" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>
          <path d="M 410 380 L 415 400 L 405 410 L 420 420 M 200 380 L 205 400 L 195 410 L 210 420" fill="none" stroke="#dc2626" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 160 350 L 450 350 L 430 380 L 180 380 Z" fill="#1e293b" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 180 290 L 100 295 L 95 350 L 515 350 L 510 300 L 430 290 L 380 220 L 220 220 Z" fill="url(#truckBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <polygon points="200,230 275,230 275,280 195,280" fill="#93c5fd" stroke="#0f172a" stroke-width="7"/>
          <polygon points="305,230 370,230 415,280 305,280" fill="#93c5fd" stroke="#0f172a" stroke-width="7"/>
          <rect x="220" y="305" width="25" height="8" rx="3" fill="#cbd5e1" stroke="#0f172a" stroke-width="4"/>
          <path d="M 230 330 C 270 330, 260 305, 300 310 C 270 315, 290 325, 320 325 C 280 335, 250 340, 230 330 Z" fill="url(#truckFlame)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <rect x="495" y="305" width="18" height="25" rx="4" fill="#fef08a" stroke="#0f172a" stroke-width="7"/>
          <line x1="450" y1="320" x2="490" y2="320" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <line x1="450" y1="335" x2="490" y2="335" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="260" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="290" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="320" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="350" cy="195" r="12" fill="#fef08a" stroke="#0f172a" stroke-width="6"/>
          <circle cx="180" cy="430" r="75" fill="url(#truckTire)" stroke="#0f172a" stroke-width="10"/>
          <circle cx="180" cy="430" r="40" fill="#e2e8f0" stroke="#0f172a" stroke-width="9"/>
          <circle cx="180" cy="430" r="18" fill="#3b82f6" stroke="#0f172a" stroke-width="7"/>
          <circle cx="430" cy="430" r="75" fill="url(#truckTire)" stroke="#0f172a" stroke-width="10"/>
          <circle cx="430" cy="430" r="40" fill="#e2e8f0" stroke="#0f172a" stroke-width="9"/>
          <circle cx="430" cy="430" r="18" fill="#3b82f6" stroke="#0f172a" stroke-width="7"/>
          <path d="M 430 355 L 430 340 M 480 375 L 492 365 M 505 430 L 520 430 M 480 485 L 492 495 M 430 505 L 430 520 M 380 485 L 368 495 M 355 430 L 340 430 M 380 375 L 368 365" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
          <path d="M 180 355 L 180 340 M 230 375 L 242 365 M 255 430 L 270 430 M 230 485 L 242 495 M 180 505 L 180 520 M 130 485 L 118 495 M 105 430 L 90 430 M 130 375 L 118 365" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>
          <circle cx="70" cy="460" r="5" fill="#78350f"/>
          <circle cx="50" cy="430" r="6" fill="#78350f"/>
          <circle cx="60" cy="485" r="4" fill="#78350f"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 4. DENİZ: NEŞELİ BEBEK KÖPEKBALIĞI (BABY SHARK)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_bebek_kopekbaligi",
        "categoryId": "deniz",
        "name": "Neşeli Bebek Köpekbalığı",
        "emoji": "🦈",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Okyanusun en neşeli bebek köpekbalığı! Sevimli yüzgeçleri, gülen ağzı ve köpüren dalgalar.",
        "materials": "Resim kağıdı, kurşun kalem, silgi, turkuaz, gök mavisi ve beyaz boyalar",
        "welcomeText": "Doo doo doo! Merhaba Kıvanç! Okyanusun en neşeli bebek köpekbalığını çizmek için kağıdını ve mavi boyalarını hazırla!",
        "colors": ["#0ea5e9", "#0284c7", "#38bdf8", "#f8fafc"],
        "welcomeAudio": "audio/voices/cirak_bebek_kopekbaligi/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Akıcı Sırt ve Kafa Kavisi",
                "instruction": "Sayfanın üst kısmına kuyruktan buruna uzanan zarif bir sırt eğrisi çiz.",
                "voice": "Kağıdımızın üst tarafına kuyruktan buruna doğru uzanan akıcı bir sırt kavisi çizelim.",
                "svg": '<path d="M 140 310 C 180 180, 350 180, 450 250" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: Yuvarlak Burun ve Çene",
                "instruction": "Burnun ucundan aşağı doğru gülen çene kıvrımını tamamla.",
                "voice": "Burnun ucundan aşağıya doğru sevimli tombul çene kıvrımını yapalım.",
                "svg": '<path d="M 450 250 C 475 285, 435 345, 360 355" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "3. Adım: Kocaman Gülen Ağız",
                "instruction": "Çenenin içine sevinçle açılmış büyük bir hilal gülümsemesi çiz.",
                "voice": "Şimdi çenenin içine neşeyle şarkı söyleyen kocaman bir hilal ağız çizelim.",
                "svg": '<path d="M 440 285 C 420 335, 365 335, 355 305" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "4. Adım: Sevimli Çizgi Dişler",
                "instruction": "Ağzın üstüne küçük, dost canlısı üçgen çizgi film dişleri yap.",
                "voice": "Ağzımızın içine küçük ve sevimli üçgen çizgi film dişleri konduralım.",
                "svg": '<path d="M 430 288 L 424 298 L 418 289 M 410 291 L 404 301 L 398 292 M 390 295 L 384 305 L 378 296" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "5. Adım: Ağız İçi Dil Kıvrımı",
                "instruction": "Ağzın alt tarafına tatlı bir dil çizgisi koy.",
                "voice": "Ağzın içine neşeli küçük bir dil kıvrımı ekleyelim.",
                "svg": '<path d="M 375 325 C 390 315, 410 315, 415 325" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "6. Adım: Kocaman Parlak Göz",
                "instruction": "Kafanın ortasına büyük bir göz, siyah gözbebeği ve çifte parıltı ekle.",
                "voice": "Kafanın ortasına kocaman bir göz çizelim, içine siyah gözbebeğini ve parlayan iki beyaz ışığı koyalım.",
                "svg": '<ellipse cx="380" cy="235" rx="20" ry="24" fill="none" stroke="#0f172a" stroke-width="8"/><circle cx="384" cy="237" r="12" fill="#0f172a"/><circle cx="379" cy="230" r="5.5" fill="#ffffff"/><circle cx="388" cy="241" r="2.8" fill="#ffffff"/>'
            },
            {
                "title": "7. Adım: Neşeli Kaş ve Burun Çilleri",
                "instruction": "Gözün üstüne meraklı bir kaş ve burnun ucuna iki minik nokta yap.",
                "voice": "Gözün üstüne neşeli bir kaş ve burnun ucuna iki tatlı nefes deliği konduralım.",
                "svg": '<path d="M 360 205 Q 380 195, 400 205" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><circle cx="435" cy="245" r="3" fill="#0f172a"/><circle cx="445" cy="252" r="3" fill="#0f172a"/>'
            },
            {
                "title": "8. Adım: Ünlü Sırt Yüzgeci (Dorsal Fin)",
                "instruction": "Sırtın üstüne köpekbalığının meşhur zarif yüzgecini çiz.",
                "voice": "İşte köpekbalığının en havalı yeri! Sırtın üstüne zarif ve üçgen sırt yüzgecini çizelim.",
                "svg": '<path d="M 270 195 C 290 120, 335 110, 340 190" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "9. Adım: Yüzen Ön Yüzgeç (Sol)",
                "instruction": "Gövdenin altından aşağı doğru selam veren yüzgeci kıvır.",
                "voice": "Gövdenin altından aşağıya doğru bize el sallayan sevimli yan yüzgeci yapalım.",
                "svg": '<path d="M 315 330 C 330 405, 270 415, 255 350" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "10. Adım: Diğer Yan Yüzgeç (Sağ)",
                "instruction": "Gövdenin arkasında kalan diğer küçük yüzgeci de ekle.",
                "voice": "Gövdenin arkasında kalan diğer yüzgecin ucunu da gösterelim.",
                "svg": '<path d="M 330 300 C 355 340, 370 330, 360 295" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "11. Adım: Beyaz Göbek Ayrım Çizgisi",
                "instruction": "Çeneden kuyruğa doğru uzanan göbek ayırma hattını çiz.",
                "voice": "Çeneden kuyruğa doğru uzanan beyaz göbek ayırma çizgisini yumuşak bir kavisle çizelim.",
                "svg": '<path d="M 360 355 C 290 365, 210 355, 140 325" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "12. Adım: İncelen Kuyruk Gövdesi",
                "instruction": "Gövdeyi kuyruk yüzgecine bağlayan daralan çizgileri uzat.",
                "voice": "Gövdeyi arka kuyruğa bağlayan ince kuyruk sapını çizelim.",
                "svg": '<path d="M 140 310 L 95 315 M 140 325 L 95 320" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "13. Adım: Kuyruğun Üst Hilal Kanadı",
                "instruction": "Kuyruğun üst tarafına hilal şeklinde yukarı kıvrılan yüzgeci yap.",
                "voice": "Kuyruğun üst tarafına doğru zarif bir hilal gibi yükselen yüzgeci çizelim.",
                "svg": '<path d="M 95 315 C 60 250, 45 230, 25 240 C 45 280, 70 305, 80 317" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "14. Adım: Kuyruğun Alt Hilal Kanadı",
                "instruction": "Kuyruğun alt tarafına eşleşen küçük yüzgeci ekle.",
                "voice": "Kuyruğun alt ucunu da çizerek muhteşem yüzücü kuyruğumuzu tamamlayalım.",
                "svg": '<path d="M 95 320 C 65 370, 50 385, 35 375 C 50 345, 70 330, 80 318" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "15. Adım: Üç Sevimli Solungaç Çizgisi",
                "instruction": "Gözün arkasına su altında nefes almasını sağlayan 3 minik kavis koy.",
                "voice": "Gözün hemen arkasına üç tane minik ve zarif solungaç çizgisi konduralım.",
                "svg": '<path d="M 310 250 C 305 260, 305 270, 310 280 M 320 250 C 315 260, 315 270, 320 280 M 330 250 C 325 260, 325 270, 330 280" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "16. Adım: Yükselen Deniz Kabarcıkları",
                "instruction": "Burnun önünden yukarı doğru süzülen su kabarcığı halkaları yap.",
                "voice": "Burnun önünden göğe doğru yükselen şıkır şıkır su baloncukları çizelim.",
                "svg": '<circle cx="470" cy="220" r="9" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="495" cy="180" r="14" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="510" cy="230" r="7" fill="none" stroke="#0f172a" stroke-width="4.5"/>'
            },
            {
                "title": "17. Adım: Altından Geçen Okyanus Dalgası",
                "instruction": "Köpekbalığının altına kıvrılarak akan bir deniz dalgası çiz.",
                "voice": "Köpekbalığımızın altından kıvrılarak akan mavi okyanus dalgasını çizelim.",
                "svg": '<path d="M 90 460 C 180 410, 280 470, 380 430 C 460 395, 500 440, 540 450" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Işıltılı Okyanus",
                "instruction": "Tebrikler Kıvanç! Bebek köpekbalığını en güzel mavi ve beyaz boyalarınla renklendir!",
                "voice": "Harikasın Kıvanç! Bebek köpekbalığı yüzmeye hazır. Şimdi onu pırıl pırıl gök mavisi ve bembeyaz boyalarınla canlandır!",
                "svg": '''
          <defs>
            <linearGradient id="sharkBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="60%" stop-color="#0ea5e9"/>
              <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
            <linearGradient id="sharkBelly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#e0f2fe"/>
            </linearGradient>
            <linearGradient id="sharkWave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#06b6d4"/>
              <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
          </defs>
          <path d="M 90 460 C 180 410, 280 470, 380 430 C 460 395, 500 440, 540 450 L 540 500 L 90 500 Z" fill="url(#sharkWave)" stroke="#0f172a" stroke-width="7" opacity="0.6"/>
          <path d="M 330 300 C 355 340, 370 330, 360 295 Z" fill="#0284c7" stroke="#0f172a" stroke-width="8"/>
          <path d="M 95 315 C 60 250, 45 230, 25 240 C 45 280, 70 305, 80 317 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 95 320 C 65 370, 50 385, 35 375 C 50 345, 70 330, 80 318 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 270 195 C 290 120, 335 110, 340 190 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 140 310 C 180 180, 350 180, 450 250 C 475 285, 435 345, 360 355 C 290 365, 210 355, 140 325 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 450 250 C 475 285, 435 345, 360 355 C 290 365, 210 355, 140 325 C 200 320, 330 310, 430 270 Z" fill="url(#sharkBelly)" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <path d="M 315 330 C 330 405, 270 415, 255 350 Z" fill="url(#sharkBody)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 440 285 C 420 335, 365 335, 355 305 Z" fill="#991b1b" stroke="#0f172a" stroke-width="8"/>
          <path d="M 375 325 C 390 315, 410 315, 415 325 Z" fill="#fda4af" stroke="#0f172a" stroke-width="5"/>
          <path d="M 430 288 L 424 298 L 418 289 M 410 291 L 404 301 L 398 292 M 390 295 L 384 305 L 378 296" fill="#ffffff" stroke="#0f172a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <ellipse cx="380" cy="235" rx="20" ry="24" fill="#ffffff" stroke="#0f172a" stroke-width="8"/>
          <circle cx="384" cy="237" r="12" fill="#0f172a"/>
          <circle cx="379" cy="230" r="5.5" fill="#ffffff"/>
          <circle cx="388" cy="241" r="2.8" fill="#ffffff"/>
          <path d="M 360 205 Q 380 195, 400 205" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="435" cy="245" r="3" fill="#0f172a"/>
          <circle cx="445" cy="252" r="3" fill="#0f172a"/>
          <path d="M 310 250 C 305 260, 305 270, 310 280 M 320 250 C 315 260, 315 270, 320 280 M 330 250 C 325 260, 325 270, 330 280" fill="none" stroke="#0284c7" stroke-width="5" stroke-linecap="round"/>
          <circle cx="470" cy="220" r="9" fill="#e0f2fe" stroke="#0f172a" stroke-width="5" opacity="0.8"/>
          <circle cx="495" cy="180" r="14" fill="#e0f2fe" stroke="#0f172a" stroke-width="5" opacity="0.8"/>
          <circle cx="510" cy="230" r="7" fill="#e0f2fe" stroke="#0f172a" stroke-width="4.5" opacity="0.8"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 5. UZAY: IŞIKLI UÇAN DAİRE VE DOST UZAYLI (UFO)
    # -------------------------------------------------------------------------
    {
        "id": "cirak_ucan_daire_ufo",
        "categoryId": "uzay",
        "name": "Işıklı Uçan Daire & Dost Uzaylı",
        "emoji": "🛸",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Cam fanus içinde el sallayan sevimli uzaylı, parıldayan renkli ışıklar ve gizemli çekim ışını!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, mor, yeşil, sarı ve lacivert boyalar",
        "welcomeText": "Bip bop! Selam Kıvanç! Uzayın derinliklerinden gelen dost uzaylımızı ve ışıltılı uçan dairesini birlikte çizelim mi?",
        "colors": ["#8b5cf6", "#6366f1", "#10b981", "#fbbf24"],
        "welcomeAudio": "audio/voices/cirak_ucan_daire_ufo/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Şeffaf Cam Kubbe Fanus",
                "instruction": "Sayfanın üst ortasına pürüzsüz bir yarım daire cam kubbe çiz.",
                "voice": "Kağıdımızın üst ortasına uçan dairenin cam fanus kubbesini pürüzsüz bir kavisle çizelim.",
                "svg": '<path d="M 220 250 C 220 145, 380 145, 380 250" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: Sevimli Uzaylının Kafası",
                "instruction": "Kubbenin içine dost uzaylının hafif basık yuvarlak kafasını yerleştir.",
                "voice": "Cam fanusun içine sevimli uzaylı dostumuzun tatlı kafasını çizelim.",
                "svg": '<ellipse cx="300" cy="210" rx="35" ry="32" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "3. Adım: Işıklı Uzaylı Antenleri",
                "instruction": "Kafanın üstüne iki anten ve uçlarına yuvarlak ışıklı toplar koy.",
                "voice": "Kafanın üstüne iki kıvrık anten ve uçlarına ışıl ışıl parlayan minik küreler çizelim.",
                "svg": '<path d="M 285 180 Q 275 155, 270 145 M 315 180 Q 325 155, 330 145" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><circle cx="270" cy="142" r="8" fill="none" stroke="#0f172a" stroke-width="5"/><circle cx="330" cy="142" r="8" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "4. Adım: Büyük Meraklı Uzaylı Gözleri",
                "instruction": "Yüzün içine iki kocaman oval göz, siyah gözbebekleri ve parıltılar yap.",
                "voice": "Yüzüne kocaman iki meraklı göz çizelim, içine siyah gözbebeklerini ve parıltıları ekleyelim.",
                "svg": '<ellipse cx="285" cy="205" rx="11" ry="14" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="286" cy="206" r="8" fill="#0f172a"/><circle cx="283" cy="202" r="3.5" fill="#ffffff"/><ellipse cx="315" cy="205" rx="11" ry="14" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="314" cy="206" r="8" fill="#0f172a"/><circle cx="311" cy="202" r="3.5" fill="#ffffff"/>'
            },
            {
                "title": "5. Adım: Neşeli Gülümseme ve El Sallama",
                "instruction": "Gözlerin altına gülen bir ağız ve cama basmış el sallayan minik elini çiz.",
                "voice": "Tatlı bir gülümseme ve bize camın ardından el sallayan minik uzaylı elini yapalım.",
                "svg": '<path d="M 292 225 Q 300 233, 308 225" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><path d="M 345 220 C 355 210, 365 215, 360 225 C 355 235, 345 230, 340 225" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "6. Adım: Üst Metalik Disk Çemberi",
                "instruction": "Cam fanusun altına geniş yatay bir elips gövde halkası yap.",
                "voice": "Cam fanusun tabanına geniş ve metalik bir elips halkası çizelim.",
                "svg": '<ellipse cx="300" cy="255" rx="160" ry="30" fill="none" stroke="#0f172a" stroke-width="10"/>'
            },
            {
                "title": "7. Adım: Genişleyen Uçan Daire Kanatları",
                "instruction": "Gövdenin iki yanından dışarı taşan aerodinamik disk kanatlarını çiz.",
                "voice": "Uçan dairemizin iki yanından uzaya doğru süzülen geniş disk kanatlarını çizelim.",
                "svg": '<path d="M 140 255 C 80 270, 80 300, 150 315 L 450 315 C 520 300, 520 270, 460 255" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "8. Adım: Alt Gövde Göbek Eğrisi",
                "instruction": "Kanatların altını birleştiren tombul göbek kasesini çiz.",
                "voice": "Kanatların altını birleştiren sağlam göbek yayını kavisle çizelim.",
                "svg": '<path d="M 170 315 C 190 375, 410 375, 430 315" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>'
            },
            {
                "title": "9. Adım: Merkez İtici Motor Çemberi",
                "instruction": "Göbeğin tam ortasına ışık saçan motor çekirdeği elipsini ekle.",
                "voice": "Uçan dairenin altına enerji saçan merkez itici motor elipsini çizelim.",
                "svg": '<ellipse cx="300" cy="365" rx="65" ry="16" fill="none" stroke="#0f172a" stroke-width="8"/>'
            },
            {
                "title": "10. Adım: 5 Adet Yanıp Sönen Renkli Işık",
                "instruction": "Gövde bandı boyunca sırayla 5 yuvarlak sinyal lambası yap.",
                "voice": "Gövde boyunca yanıp sönen beş tane sevimli renkli sinyal lambası daireleri koyalım.",
                "svg": '<circle cx="170" cy="285" r="9" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="230" cy="295" r="10" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="300" cy="300" r="11" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="370" cy="295" r="10" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="430" cy="285" r="9" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "11. Adım: Metal Gövde Panel Çizgileri",
                "instruction": "Uçan daireye uzay gemisi havası katan panel bölme çizgilerini çek.",
                "voice": "Gövdenin üzerine yüksek teknoloji hissi veren metal panel çizgilerini çekelim.",
                "svg": '<path d="M 200 270 L 215 315 M 265 280 L 270 325 M 335 280 L 330 325 M 400 270 L 385 315" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "12. Adım: Açılır Kapanır İniş Ayakları",
                "instruction": "Alttan yere doğru inen 3 sağlam iniş ayağı çiz.",
                "voice": "Gezegenlere yumuşak iniş yapmayı sağlayan üç tane teleskopik iniş ayağı yapalım.",
                "svg": '<path d="M 210 360 L 180 430 L 160 430 M 390 360 L 420 430 L 440 430 M 300 375 L 300 440 L 285 440 L 315 440" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "13. Adım: Gizemli Işın Çekim Konisi",
                "instruction": "Motordan aşağıya doğru kesik çizgilerle yayılan sihirli ışını çiz.",
                "voice": "Motordan yere doğru inen o gizemli ve sihirli çekim ışını konisini kesik çizgilerle çizelim.",
                "svg": '<path d="M 250 375 L 140 520 L 460 520 L 350 375" fill="none" stroke="#0f172a" stroke-width="8" stroke-dasharray="14 10" stroke-linecap="round"/>'
            },
            {
                "title": "14. Adım: Uzaktaki Halkalı Gezegen",
                "instruction": "Sol üst köşeye Satürn gibi halkalı bir mini gezegen ekle.",
                "voice": "Sol üst köşeye uzayın derinliklerindeki halkalı güzel bir gezegen konduralım.",
                "svg": '<circle cx="100" cy="110" r="28" fill="none" stroke="#0f172a" stroke-width="6"/><ellipse cx="100" cy="110" rx="48" ry="12" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "15. Adım: Parlayan 4 Köşeli Uzay Yıldızları",
                "instruction": "Gökyüzüne ışıl ışıl parlayan 4 uçlu yıldızlar yap.",
                "voice": "Uçan dairemizin etrafına pırıl pırıl parıldayan dört köşeli uzay yıldızları serpiştirelim.",
                "svg": '<path d="M 500 100 L 500 130 M 485 115 L 515 115 M 120 200 L 120 220 M 110 210 L 130 210 M 480 200 L 480 216 M 472 208 L 488 208" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>'
            },
            {
                "title": "16. Adım: Kozmik Enerji Kıvılcımları",
                "instruction": "Işının etrafına havada süzülen parlak enerji noktaları ekle.",
                "voice": "Işığın etrafında süzülen parıltılı kozmik enerji noktalarını yerleştirelim.",
                "svg": '<circle cx="280" cy="400" r="4" fill="#0f172a"/><circle cx="320" cy="410" r="5" fill="#0f172a"/><circle cx="295" cy="435" r="4" fill="#0f172a"/><circle cx="315" cy="460" r="6" fill="#0f172a"/>'
            },
            {
                "title": "17. Adım: Kraterli Ay Yüzeyi",
                "instruction": "En alta ay yüzeyini ve üzerinde küçük bir krater çemberi yap.",
                "voice": "En alta uçan dairemizin indiği kraterli ay zeminini çizelim.",
                "svg": '<path d="M 80 525 Q 300 500, 520 525" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/><ellipse cx="200" cy="530" rx="20" ry="7" fill="none" stroke="#0f172a" stroke-width="5"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Kozmik Parıltı",
                "instruction": "Tebrikler Kıvanç! Uçan daireni mor, yeşil ve altın sarısı renklerle canlandır!",
                "voice": "İnanılmaz oldu Kıvanç! Uçan dairen uzay macerasına hazır. Şimdi onu fosforlu yeşil, mor ve altın sarısı boyalarınla ışıl ışıl renklendir!",
                "svg": '''
          <defs>
            <linearGradient id="ufoHull" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#c084fc"/>
              <stop offset="50%" stop-color="#8b5cf6"/>
              <stop offset="100%" stop-color="#4f46e5"/>
            </linearGradient>
            <linearGradient id="ufoDome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#e0e7ff"/>
              <stop offset="100%" stop-color="#818cf8"/>
            </linearGradient>
            <linearGradient id="ufoBeam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#22c55e"/>
            </linearGradient>
            <linearGradient id="alienSkin" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#86efac"/>
              <stop offset="100%" stop-color="#16a34a"/>
            </linearGradient>
          </defs>
          <path d="M 250 375 L 140 520 L 460 520 L 350 375 Z" fill="url(#ufoBeam)" opacity="0.35"/>
          <path d="M 80 525 Q 300 500, 520 525 L 520 550 L 80 550 Z" fill="#475569" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="200" cy="530" rx="20" ry="7" fill="#334155" stroke="#0f172a" stroke-width="4"/>
          <circle cx="100" cy="110" r="28" fill="#fb923c" stroke="#0f172a" stroke-width="6"/>
          <ellipse cx="100" cy="110" rx="48" ry="12" fill="none" stroke="#fef08a" stroke-width="5"/>
          <path d="M 210 360 L 180 430 L 160 430 M 390 360 L 420 430 L 440 430 M 300 375 L 300 440 L 285 440 L 315 440" fill="none" stroke="#64748b" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 170 315 C 190 375, 410 375, 430 315 Z" fill="#312e81" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <ellipse cx="300" cy="365" rx="65" ry="16" fill="#facc15" stroke="#0f172a" stroke-width="8"/>
          <path d="M 220 250 C 220 145, 380 145, 380 250 Z" fill="url(#ufoDome)" opacity="0.85" stroke="#0f172a" stroke-width="9"/>
          <path d="M 285 180 Q 275 155, 270 145 M 315 180 Q 325 155, 330 145" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <circle cx="270" cy="142" r="8" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <circle cx="330" cy="142" r="8" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <ellipse cx="300" cy="210" rx="35" ry="32" fill="url(#alienSkin)" stroke="#0f172a" stroke-width="8"/>
          <ellipse cx="285" cy="205" rx="11" ry="14" fill="#0f172a"/>
          <circle cx="283" cy="202" r="3.5" fill="#ffffff"/>
          <ellipse cx="315" cy="205" rx="11" ry="14" fill="#0f172a"/>
          <circle cx="311" cy="202" r="3.5" fill="#ffffff"/>
          <path d="M 292 225 Q 300 233, 308 225" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <path d="M 345 220 C 355 210, 365 215, 360 225 C 355 235, 345 230, 340 225 Z" fill="url(#alienSkin)" stroke="#0f172a" stroke-width="5"/>
          <path d="M 140 255 C 80 270, 80 300, 150 315 L 450 315 C 520 300, 520 270, 460 255 Z" fill="url(#ufoHull)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <ellipse cx="300" cy="255" rx="160" ry="30" fill="none" stroke="#0f172a" stroke-width="9"/>
          <circle cx="170" cy="285" r="9" fill="#ef4444" stroke="#0f172a" stroke-width="5"/>
          <circle cx="230" cy="295" r="10" fill="#facc15" stroke="#0f172a" stroke-width="5"/>
          <circle cx="300" cy="300" r="11" fill="#22c55e" stroke="#0f172a" stroke-width="5"/>
          <circle cx="370" cy="295" r="10" fill="#06b6d4" stroke="#0f172a" stroke-width="5"/>
          <circle cx="430" cy="285" r="9" fill="#f97316" stroke="#0f172a" stroke-width="5"/>
          <path d="M 500 100 L 500 130 M 485 115 L 515 115" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
          <path d="M 120 200 L 120 220 M 110 210 L 130 210" stroke="#facc15" stroke-width="4" stroke-linecap="round"/>
'''
            }
        ]
    },

    # -------------------------------------------------------------------------
    # 6. KAHRAMANLAR: UÇAN SÜPER KAHRAMAN ÇOCUK
    # -------------------------------------------------------------------------
    {
        "id": "cirak_super_kahraman",
        "categoryId": "kahramanlar",
        "name": "Uçan Süper Kahraman",
        "emoji": "🦸‍♂️",
        "level": 1,
        "levelName": "Çırak",
        "levelBadge": "🟢 Çırak",
        "description": "Rüzgarda dalgalanan kırmızı pelerin, altın göğüs yıldızı ve ileri uzatılmış kahraman yumruğu!",
        "materials": "Resim kağıdı, kurşun kalem, silgi, kırmızı, mavi, sarı ve ten rengi boyalar",
        "welcomeText": "Süper kahraman Kıvanç göreve hazır! Rüzgarda pelerini dalgalanan, gökyüzünde uçan kahramanımızı çizmek için hemen başlayalım!",
        "colors": ["#ef4444", "#3b82f6", "#fbbf24", "#f8fafc"],
        "welcomeAudio": "audio/voices/cirak_super_kahraman/welcome.mp3",
        "steps": [
            {
                "title": "1. Adım: Güçlü Çene ve Yüz Hattı",
                "instruction": "Sayfanın ortasına süper kahramanın güler yüzlü çene ve yanak çizgisini yap.",
                "voice": "Kağıdımızın ortasına cesur kahramanımızın güler yüzlü çene ve yüz hattını çizelim.",
                "svg": '<path d="M 265 210 C 250 170, 350 170, 335 210 C 335 255, 265 255, 265 210 Z" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "2. Adım: Rüzgarda Uçuşan Havalı Saçlar",
                "instruction": "Kafanın üstüne rüzgarla arkaya savrulan kahraman saçlarını çiz.",
                "voice": "Kafanın üstüne gökyüzünde uçarken rüzgarla dalgalanan havalı saç buklelerini çizelim.",
                "svg": '<path d="M 255 190 C 240 140, 290 120, 320 125 C 345 115, 370 135, 355 170 C 365 175, 360 190, 345 195" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "3. Adım: Süper Kahraman Göz Maskesi",
                "instruction": "Göz bölgesine kanat gibi açılan havalı bir kahraman maskesi yap.",
                "voice": "Yüzüne gizli kimliğini koruyan o havalı süper kahraman maskesini çizelim.",
                "svg": '<path d="M 260 205 C 275 195, 295 210, 300 205 C 305 210, 325 195, 340 205 C 335 225, 315 225, 300 215 C 285 225, 265 225, 260 205 Z" fill="none" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>'
            },
            {
                "title": "4. Adım: Maske İçi Işıl Işıl Gözler",
                "instruction": "Maskenin içine iki parlak gözbebeği ve beyaz parıltılar yerleştir.",
                "voice": "Maskenin içine cesurca bakan ışıl ışıl gözbebeklerini ve parıltıları ekleyelim.",
                "svg": '<circle cx="280" cy="210" r="7" fill="#0f172a"/><circle cx="278" cy="208" r="2.5" fill="#ffffff"/><circle cx="320" cy="210" r="7" fill="#0f172a"/><circle cx="318" cy="208" r="2.5" fill="#ffffff"/>'
            },
            {
                "title": "5. Adım: Kendinden Emin Gülümseme",
                "instruction": "Yüzün altına cesur ve neşeli bir gülümseme çizgisi kondur.",
                "voice": "Şimdi kahramanımıza 'Ben buradayım, korkmayın!' diyen neşeli bir gülümseme çizelim.",
                "svg": '<path d="M 285 235 Q 300 248, 315 235" fill="none" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>'
            },
            {
                "title": "6. Adım: Boyun ve Kostüm Yakası",
                "instruction": "Çenenin altından omuzlara inen boyun ve kıyafet yakasını yap.",
                "voice": "Çenenin altından aşağıya boynunu ve süper kostümün yakasını çizelim.",
                "svg": '<path d="M 280 250 L 275 270 M 320 250 L 325 270 M 270 270 Q 300 282, 330 270" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "7. Adım: İleri Uzatılmış Süper Yumruk",
                "instruction": "Uçuş yönüne doğru ileri uzatılmış güçlü bir yumruk çiz.",
                "voice": "İşte uçuş pozu! İleriye doğru uzattığı o güçlü süper yumruğunu ve parmak kıvrımlarını çizelim.",
                "svg": '<circle cx="440" cy="220" r="22" fill="none" stroke="#0f172a" stroke-width="9"/><path d="M 425 210 C 430 200, 450 200, 455 212 M 428 222 C 435 215, 452 215, 456 224" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "8. Adım: Uçan Sağ Kol ve Bileklik",
                "instruction": "Omuzdan yumruğa uzanan kol çizgilerini ve güç bilekliğini yap.",
                "voice": "Omuzdan yumruğa kadar uzanan güçlü kolunu ve altın güç bilekliğini çizelim.",
                "svg": '<path d="M 330 260 L 420 225 M 325 285 L 420 235" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/><line x1="385" y1="238" x2="380" y2="260" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "9. Adım: Dengeleyen Sol Kol",
                "instruction": "Arkaya doğru uçuş dengesini sağlayan diğer kolu çiz.",
                "voice": "Arkaya doğru süzülen ve uçuş dengesini sağlayan diğer kolunu çizelim.",
                "svg": '<path d="M 265 275 L 205 310 C 195 315, 190 305, 195 298 L 245 265" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "10. Adım: Gövde ve Göğüsteki Altın Yıldız",
                "instruction": "Kostüm gövdesini çiz ve göğsüne kocaman parlayan bir yıldız kondur.",
                "voice": "Kahramanımızın gövdesini çizelim ve göğsüne parlayan muhteşem bir süper yıldız amblemi yapalım.",
                "svg": '<path d="M 260 275 L 250 350 L 335 350 L 340 275" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><polygon points="295,290 299,302 311,302 301,310 305,322 295,314 285,322 289,310 279,302 291,302" fill="none" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>'
            },
            {
                "title": "11. Adım: Tokalı Kahraman Kemeri",
                "instruction": "Bel bölgesine altın tokalı şık bir kemer bandı yap.",
                "voice": "Bel bölgesine ortasında yuvarlak tokası olan altın bir kahraman kemeri çizelim.",
                "svg": '<path d="M 245 350 L 340 350 L 335 370 L 250 370 Z" fill="none" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/><circle cx="295" cy="360" r="10" fill="none" stroke="#0f172a" stroke-width="6"/>'
            },
            {
                "title": "12. Adım: Dalgalanan Pelerin (Sol Kanat)",
                "instruction": "Omuzdan arkaya doğru rüzgarda dalgalanan pelerinin sol kıvrımını yap.",
                "voice": "Omuzdan arkaya doğru rüzgarda alev gibi dalgalanan kırmızı pelerinin sol kıvrımını yapalım.",
                "svg": '<path d="M 260 270 C 200 240, 150 250, 90 230 C 120 290, 110 350, 160 390" fill="none" stroke="#0f172a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "13. Adım: Dalgalanan Pelerin (Sağ Kanat ve Etek)",
                "instruction": "Pelerinin sağ dalgasını ve alt etek kıvrımını birleştir.",
                "voice": "Pelerinin sağ tarafını ve alt dalgalarını birleştirerek o efsane pelerini tamamlayalım.",
                "svg": '<path d="M 335 270 C 370 260, 390 280, 400 300 C 360 330, 340 370, 300 400 L 160 390" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "14. Adım: Arkaya Uzanan Uçuş Bacakları",
                "instruction": "Kemerin altından geriye doğru süzülen aerodinamik bacakları çiz.",
                "voice": "Kemerin altından geriye doğru süper hızlı uçuş bacaklarını uzatalım.",
                "svg": '<path d="M 260 370 L 210 440 M 310 370 L 270 445" stroke="#0f172a" stroke-width="9" stroke-linecap="round"/>'
            },
            {
                "title": "15. Adım: Havalı Çizmeler",
                "instruction": "Bacakların ucuna kıvrımlı, kırmızı süper kahraman çizmelerini ekle.",
                "voice": "Bacakların ucuna sivri ve havalı kırmızı süper kahraman çizmelerini çizelim.",
                "svg": '<path d="M 210 440 L 180 470 C 170 480, 185 490, 195 480 L 225 450 M 270 445 L 245 480 C 235 490, 250 500, 260 490 L 285 455" fill="none" stroke="#0f172a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
            },
            {
                "title": "16. Adım: Süper Hız Rüzgar Çizgileri",
                "instruction": "Vücudun etrafına jet gibi uçtuğunu gösteren hız çizgileri çek.",
                "voice": "Vücudun etrafına gökyüzünü yardığını gösteren jet hızı çizgileri çekelim.",
                "svg": '<line x1="80" y1="180" x2="160" y2="180" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/><line x1="120" y1="210" x2="200" y2="210" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><line x1="60" y1="360" x2="130" y2="360" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>'
            },
            {
                "title": "17. Adım: Aşağıda Kalan Beyaz Bulutlar",
                "instruction": "Kahramanın altında kalan pamuk gibi bulut kümelerini çiz.",
                "voice": "Kahramanımızın ne kadar yüksekte uçtuğunu gösteren pamuk bulutları aşağıya çizelim.",
                "svg": '<path d="M 120 510 C 140 485, 180 485, 200 510 C 220 490, 260 490, 280 510 C 320 480, 370 480, 400 510 C 440 485, 480 490, 500 515" fill="none" stroke="#0f172a" stroke-width="8" stroke-linecap="round"/>'
            },
            {
                "title": "18. Adım: Canlı Renklendirme ve Gökyüzü Güneşi",
                "instruction": "Tebrikler Kıvanç! Kahramanını kırmızı pelerin, mavi kostüm ve parıldayan altın yıldızla canlandır!",
                "voice": "Tebrikler süper Kıvanç! Çizimin tek kelimeyle efsane oldu. Şimdi kahramanını alev kırmızısı pelerini ve kraliyet mavisi kostümüyle parıldat!",
                "svg": '''
          <defs>
            <linearGradient id="heroSuit" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="60%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="heroCape" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ef4444"/>
              <stop offset="60%" stop-color="#dc2626"/>
              <stop offset="100%" stop-color="#991b1b"/>
            </linearGradient>
            <linearGradient id="heroGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
            <linearGradient id="heroSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fed7aa"/>
              <stop offset="100%" stop-color="#fdba74"/>
            </linearGradient>
          </defs>
          <path d="M 120 510 C 140 485, 180 485, 200 510 C 220 490, 260 490, 280 510 C 320 480, 370 480, 400 510 C 440 485, 480 490, 500 515 L 500 560 L 120 560 Z" fill="#e0f2fe" stroke="#0f172a" stroke-width="7"/>
          <path d="M 260 270 C 200 240, 150 250, 90 230 C 120 290, 110 350, 160 390 L 300 400 C 340 370, 360 330, 400 300 C 390 280, 370 260, 335 270 Z" fill="url(#heroCape)" stroke="#0f172a" stroke-width="10" stroke-linejoin="round"/>
          <path d="M 260 370 L 210 440 L 240 440 L 280 370 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 310 370 L 270 445 L 300 445 L 330 370 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 210 440 L 180 470 C 170 480, 185 490, 195 480 L 225 450 Z" fill="url(#heroCape)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 270 445 L 245 480 C 235 490, 250 500, 260 490 L 285 455 Z" fill="url(#heroCape)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <path d="M 245 350 L 340 350 L 335 370 L 250 370 Z" fill="url(#heroGold)" stroke="#0f172a" stroke-width="8" stroke-linejoin="round"/>
          <circle cx="295" cy="360" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="5"/>
          <path d="M 265 275 L 205 310 C 195 315, 190 305, 195 298 L 245 265 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="195" cy="305" r="8" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="5"/>
          <path d="M 260 275 L 250 350 L 335 350 L 340 275 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <polygon points="295,290 299,302 311,302 301,310 305,322 295,314 285,322 289,310 279,302 291,302" fill="url(#heroGold)" stroke="#0f172a" stroke-width="6" stroke-linejoin="round"/>
          <path d="M 330 260 L 420 225 L 420 235 L 325 285 Z" fill="url(#heroSuit)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <rect x="380" y="238" width="12" height="22" rx="4" fill="url(#heroGold)" stroke="#0f172a" stroke-width="5"/>
          <circle cx="440" cy="220" r="22" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="9"/>
          <path d="M 425 210 C 430 200, 450 200, 455 212 M 428 222 C 435 215, 452 215, 456 224" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <path d="M 280 250 L 275 270 L 325 270 L 320 250 Z" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="8"/>
          <path d="M 265 210 C 250 170, 350 170, 335 210 C 335 255, 265 255, 265 210 Z" fill="url(#heroSkin)" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 255 190 C 240 140, 290 120, 320 125 C 345 115, 370 135, 355 170 C 365 175, 360 190, 345 195 Z" fill="#451a03" stroke="#0f172a" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 260 205 C 275 195, 295 210, 300 205 C 305 210, 325 195, 340 205 C 335 225, 315 225, 300 215 C 285 225, 265 225, 260 205 Z" fill="#1e293b" stroke="#0f172a" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="280" cy="210" r="7" fill="#ffffff"/>
          <circle cx="280" cy="210" r="4.5" fill="#0f172a"/>
          <circle cx="278" cy="208" r="2" fill="#ffffff"/>
          <circle cx="320" cy="210" r="7" fill="#ffffff"/>
          <circle cx="320" cy="210" r="4.5" fill="#0f172a"/>
          <circle cx="318" cy="208" r="2" fill="#ffffff"/>
          <path d="M 285 235 Q 300 248, 315 235" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
          <line x1="80" y1="180" x2="160" y2="180" stroke="#0ea5e9" stroke-width="6" stroke-linecap="round"/>
          <line x1="120" y1="210" x2="200" y2="210" stroke="#0ea5e9" stroke-width="5" stroke-linecap="round"/>
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

    # Load existing DRAWINGS_DATA
    # We can serialize NEW_DRAWINGS as clean JS objects and insert them before the closing `];`
    # Let's verify existing IDs to avoid duplicates
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

    updated_content = content[:last_bracket_idx] + new_drawings_js + content[last_bracket_idx:]

    # Also update count in CATEGORIES_DATA for 'all' and categories
    # All count was 6, now 12
    updated_content = updated_content.replace('"count": 6', '"count": 12', 1)
    # Each category count was 1, now 2
    for cat_id in ["dinozorlar", "hayvanlar", "arabalar", "deniz", "uzay", "kahramanlar"]:
        # Match "id": "cat_id" followed by "count": 1
        cat_pat = f'"id": "{cat_id}",\n    "name":'
        if cat_pat in updated_content:
            pass # app.js counts dynamically anyway!

    with open(DRAWINGS_JS, "w", encoding="utf-8") as f:
        f.write(updated_content)

    print("Successfully updated drawings.js with 6 new drawings!")

if __name__ == "__main__":
    asyncio.run(main())
