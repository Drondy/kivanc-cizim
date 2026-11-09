// Kıvanç'ın Çizim Atölyesi - Uygulama Motoru
// Ses Efektleri (Web Audio), Türkçe Seslendirme (TTS), SVG Çizim Animasyonu & iPad Kontrolleri

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  playChime() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime + idx * 0.07;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    });
  }

  playTick() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, now);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  }

  playVictoryFanfare() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    // Neşeli zafer melodisi
    const melody = [
      { f: 523.25, d: 0.15 }, // Do
      { f: 659.25, d: 0.15 }, // Mi
      { f: 783.99, d: 0.18 }, // Sol
      { f: 1046.5, d: 0.45 }  // Do (Tiz)
    ];

    let t = this.ctx.currentTime;
    melody.forEach((item) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(item.f, t);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + item.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + item.d);

      t += item.d + 0.04;
    });
  }
}

// ============================================================
// UYGULAMA ANA SINIFI
// ============================================================
class KivancDrawingApp {
  constructor() {
    this.audio = new AudioEngine();
    this.currentDrawing = null;
    this.currentStep = 0;
    this.activeCategory = null; // null = kategoriler görünümü, string = seçili kategori
    this.activeLevel = 'all'; // 'all', '1', '2', '3'

    // Otomatik sayaç modu (15 saniye)
    this.timerMode = false;
    this.timerSeconds = 15;
    this.timerRemaining = 15;
    this.timerInterval = null;

    // Türkçe Ses Motoru
    this.synth = window.speechSynthesis || null;
    this.speechVoice = null;
    this.initVoice();

    this.cacheDom();
    this.bindEvents();
    this.renderView();
  }

  initVoice() {
    if (!this.synth) return;
    const findTurkish = () => {
      const voices = this.synth.getVoices();
      this.speechVoice = voices.find(v => v.lang.startsWith('tr')) || null;
    };
    findTurkish();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findTurkish;
    }
  }

  speak(text) {
    if (!this.synth || !this.audio.soundEnabled) return;
    try {
      this.synth.cancel(); // Önceki ses bitirilsin
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'tr-TR';
      utter.rate = 0.94; // Çocukların rahat anlaması için hafif tane tane
      utter.pitch = 1.15; // Neşeli ve dostça ton
      if (this.speechVoice) {
        utter.voice = this.speechVoice;
      }
      this.synth.speak(utter);
    } catch (e) {
      console.warn("TTS hatası:", e);
    }
  }

  cacheDom() {
    this.screenHome = document.getElementById('screen-home');
    this.screenWorkshop = document.getElementById('screen-workshop');
    this.drawingGrid = document.getElementById('drawing-grid');
    this.categoryFoldersGrid = document.getElementById('category-folders-grid');
    this.categoryBreadcrumbBar = document.getElementById('category-breadcrumb-bar');
    this.btnBackCategories = document.getElementById('btn-back-categories');
    this.activeCatEmoji = document.getElementById('active-cat-emoji');
    this.activeCatTitle = document.getElementById('active-cat-title');
    this.activeCatBadge = document.getElementById('active-cat-badge');
    this.levelBtns = document.querySelectorAll('.level-btn');
    this.searchInput = document.getElementById('search-input');
    this.btnClearSearch = document.getElementById('btn-clear-search');
    this.searchQuery = "";

    // Workshop Elemanları
    this.btnBackHome = document.getElementById('btn-back-home');
    this.currentItemEmoji = document.getElementById('current-item-emoji');
    this.currentItemTitle = document.getElementById('current-item-title');
    this.stepDotsContainer = document.getElementById('step-dots-container');
    this.stepCounterText = document.getElementById('step-counter-text');

    // SVG Katmanları
    this.drawingSvg = document.getElementById('drawing-svg');
    this.layerPrevious = document.getElementById('layer-previous');
    this.layerCurrent = document.getElementById('layer-current');
    this.layerColoring = document.getElementById('layer-coloring');
    this.magicPencil = document.getElementById('magic-pencil');

    // Yönerge
    this.instructionTitle = document.getElementById('instruction-title');
    this.instructionDesc = document.getElementById('instruction-desc');
    this.btnSpeakStep = document.getElementById('btn-speak-step');

    // Kıvanç Butonları
    this.btnNextStep = document.getElementById('btn-next-step');
    this.btnReplayStep = document.getElementById('btn-replay-step');
    this.btnPrevStep = document.getElementById('btn-prev-step');
    this.colorChips = document.getElementById('color-chips');

    // Sayaç & Ses
    this.btnToggleTimer = document.getElementById('btn-toggle-timer');
    this.timerStatus = document.getElementById('timer-status');
    this.countdownOverlay = document.getElementById('countdown-overlay');
    this.countdownText = document.getElementById('countdown-text');
    this.countdownProgress = document.getElementById('countdown-progress');
    this.btnSoundToggle = document.getElementById('btn-sound-toggle');
    this.btnFullscreen = document.getElementById('btn-fullscreen');

    // Kutlama Modalı
    this.celebrationModal = document.getElementById('celebration-modal');
    this.modalPreviewBox = document.getElementById('modal-preview-box');
    this.btnFinishReplay = document.getElementById('btn-finish-replay');
    this.btnFinishHome = document.getElementById('btn-finish-home');

    // iPad Bağlantı Modalı
    this.btnShowIpadQr = document.getElementById('btn-show-ipad-qr');
    this.ipadModal = document.getElementById('ipad-modal');
    this.ipadLinkDisplay = document.getElementById('ipad-link-display');
    this.ipadQrImg = document.getElementById('ipad-qr-img');
    this.btnCloseIpadModal = document.getElementById('btn-close-ipad-modal');
  }

  bindEvents() {
    // Arama Çubuğu
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        if (this.searchQuery.length > 0) {
          this.btnClearSearch.classList.remove('hidden');
        } else {
          this.btnClearSearch.classList.add('hidden');
        }
        this.renderView();
      });
    }

    if (this.btnClearSearch) {
      this.btnClearSearch.addEventListener('click', () => {
        this.audio.playPop();
        this.searchInput.value = '';
        this.searchQuery = '';
        this.btnClearSearch.classList.add('hidden');
        this.renderView();
      });
    }

    // Seviye Filtreleme
    if (this.levelBtns) {
      this.levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.audio.playPop();
          this.levelBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.activeLevel = btn.dataset.level;
          this.renderView();
        });
      });
    }

    // Kategorilere Geri Dön Butonu
    if (this.btnBackCategories) {
      this.btnBackCategories.addEventListener('click', () => {
        this.audio.playPop();
        this.activeCategory = null;
        this.renderView();
      });
    }

    // Menüye Dön
    this.btnBackHome.addEventListener('click', () => {
      this.audio.playPop();
      this.stopTimer();
      this.showScreen('home');
      this.renderView();
    });

    // Sıradaki Adım
    this.btnNextStep.addEventListener('click', () => {
      this.audio.playPop();
      this.nextStep();
    });

    // Tekrar Çiz
    this.btnReplayStep.addEventListener('click', () => {
      this.audio.playPop();
      this.renderCurrentStep(true);
    });

    // Bir Geri
    this.btnPrevStep.addEventListener('click', () => {
      this.audio.playPop();
      if (this.currentStep > 0) {
        this.currentStep--;
        this.renderCurrentStep(true);
      }
    });

    // Yönergeyi Oku
    this.btnSpeakStep.addEventListener('click', () => {
      this.audio.playPop();
      const step = this.currentDrawing.steps[this.currentStep];
      if (step) this.speak(step.voice || step.instruction);
    });

    // Sayaç Aç / Kapat
    this.btnToggleTimer.addEventListener('click', () => {
      this.audio.playPop();
      this.toggleTimer();
    });

    // Ses Aç / Kapat
    this.btnSoundToggle.addEventListener('click', () => {
      this.audio.soundEnabled = !this.audio.soundEnabled;
      this.audio.playPop();
      const pillIcon = this.btnSoundToggle.querySelector('.pill-icon');
      const pillText = this.btnSoundToggle.querySelector('.pill-text');
      if (this.audio.soundEnabled) {
        pillIcon.textContent = '🔊';
        pillText.textContent = 'Ses Açık';
      } else {
        pillIcon.textContent = '🔇';
        pillText.textContent = 'Ses Kapalı';
        if (this.synth) this.synth.cancel();
      }
    });

    // Tam Ekran
    this.btnFullscreen.addEventListener('click', () => {
      this.audio.playPop();
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // Kutlama Modalı Butonları
    this.btnFinishReplay.addEventListener('click', () => {
      this.audio.playPop();
      this.celebrationModal.classList.add('hidden');
      this.startDrawing(this.currentDrawing.id);
    });

    this.btnFinishHome.addEventListener('click', () => {
      this.audio.playPop();
      this.celebrationModal.classList.add('hidden');
      this.showScreen('home');
      this.renderView();
    });

    // iPad Bağlantı Modalı
    if (this.btnShowIpadQr) {
      this.btnShowIpadQr.addEventListener('click', () => {
        this.audio.playPop();
        const serverIp = window.SERVER_IP || '192.168.1.6';
        const serverPort = window.SERVER_PORT || 8080;
        const targetUrl = `http://${serverIp}:${serverPort}`;
        
        this.ipadLinkDisplay.textContent = targetUrl;
        this.ipadLinkDisplay.href = targetUrl;
        this.ipadQrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(targetUrl)}`;
        this.ipadModal.classList.remove('hidden');
      });
    }

    if (this.btnCloseIpadModal) {
      this.btnCloseIpadModal.addEventListener('click', () => {
        this.audio.playPop();
        this.ipadModal.classList.add('hidden');
      });
    }

    // İlk dokunuşta ses motorunu başlat (iPad için kilit açma)
    document.addEventListener('touchstart', () => this.audio.init(), { once: true });
    document.addEventListener('click', () => this.audio.init(), { once: true });
  }

  showScreen(name) {
    if (name === 'home') {
      this.screenHome.classList.add('active');
      this.screenWorkshop.classList.remove('active');
    } else {
      this.screenHome.classList.remove('active');
      this.screenWorkshop.classList.add('active');
    }
  }

  renderView() {
    if (this.searchQuery && this.searchQuery.length > 0) {
      // 0. Arama Sonuçları Görünümü
      this.categoryFoldersGrid.classList.add('hidden');
      this.drawingGrid.classList.remove('hidden');
      this.categoryBreadcrumbBar.classList.remove('hidden');
      this.renderSearchResults();
    } else if (this.activeCategory === null) {
      // 1. Kategori Klasörleri Görünümü
      this.categoryFoldersGrid.classList.remove('hidden');
      this.drawingGrid.classList.add('hidden');
      this.categoryBreadcrumbBar.classList.add('hidden');
      this.renderCategoryFolders();
    } else {
      // 2. Kategori İçi Resimler Görünümü
      this.categoryFoldersGrid.classList.add('hidden');
      this.drawingGrid.classList.remove('hidden');
      this.categoryBreadcrumbBar.classList.remove('hidden');
      this.renderCategoryDrawings();
    }
  }

  renderSearchResults() {
    this.activeCatEmoji.textContent = "🔍";
    this.activeCatTitle.textContent = `"${this.searchQuery}" Arama Sonuçları`;

    const q = this.searchQuery;
    let list = DRAWINGS_DATA.filter(d => {
      const matchName = d.name.toLowerCase().includes(q);
      const matchDesc = d.description && d.description.toLowerCase().includes(q);
      const matchTags = d.tags && d.tags.some(t => t.toLowerCase().includes(q));
      return matchName || matchDesc || matchTags;
    });

    if (this.activeLevel !== 'all') {
      list = list.filter(d => String(d.level) === this.activeLevel);
    }

    this.activeCatBadge.textContent = `${list.length} Çizim Bulundu`;
    this.renderDrawingsListToGrid(list);
  }

  renderCategoryFolders() {
    this.categoryFoldersGrid.innerHTML = '';
    CATEGORIES_DATA.forEach(cat => {
      // Bu kategorideki resim sayısı (seviye filtresine göre)
      const count = this.activeLevel === 'all'
        ? DRAWINGS_DATA.filter(d => d.categoryId === cat.id).length
        : DRAWINGS_DATA.filter(d => d.categoryId === cat.id && String(d.level) === this.activeLevel).length;

      const card = document.createElement('div');
      card.className = 'category-folder-card';
      card.innerHTML = `
        <span class="cat-card-icon">${cat.emoji}</span>
        <h3 class="cat-card-title">${cat.name}</h3>
        <p class="cat-card-desc">${cat.desc}</p>
        <div class="cat-card-footer">
          <span class="cat-badge-count">${count} Farklı Çizim</span>
          <span class="cat-card-enter">İncele ➔</span>
        </div>
      `;

      card.addEventListener('click', () => {
        this.audio.playPop();
        this.openCategory(cat.id);
      });

      this.categoryFoldersGrid.appendChild(card);
    });
  }

  openCategory(categoryId) {
    this.activeCategory = categoryId;
    this.renderView();
  }

  renderCategoryDrawings() {
    const cat = CATEGORIES_DATA.find(c => c.id === this.activeCategory);
    if (!cat) return;

    this.activeCatEmoji.textContent = cat.emoji;
    this.activeCatTitle.textContent = cat.name;

    // Resimleri filtrele (Kategori + Seviye)
    let list = DRAWINGS_DATA.filter(d => d.categoryId === this.activeCategory);
    if (this.activeLevel !== 'all') {
      list = list.filter(d => String(d.level) === this.activeLevel);
    }

    this.activeCatBadge.textContent = `${list.length} Çizim Hazır`;
    this.renderDrawingsListToGrid(list);
  }

  renderDrawingsListToGrid(list) {
    this.drawingGrid.innerHTML = '';

    if (list.length === 0) {
      this.drawingGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #ffffff; border-radius: 20px; border: 2px dashed #cbd5e1;">
          <span style="font-size: 3rem;">🔍</span>
          <h3 style="font-size: 1.4rem; font-weight: 700; margin: 10px 0;">Çizim Bulunamadı</h3>
          <p style="color: #64748b; font-weight: 600;">Farklı bir arama yapabilir veya yukarıdan 'Tümü' seçeneğini seçebilirsiniz.</p>
        </div>
      `;
      return;
    }

    list.forEach(item => {
      const card = document.createElement('div');
      card.className = 'drawing-card';

      // Kart için bitmiş çizimin tam SVG'si
      const allPaths = item.steps.map(s => s.svg).join('');

      card.innerHTML = `
        <svg viewBox="0 0 600 600" class="card-preview-svg">
          <g fill="none" stroke="#1e293b" stroke-width="14" stroke-linecap="round" stroke-linejoin="round">
            ${allPaths}
          </g>
          ${item.coloring || ''}
        </svg>
        <h3 class="card-title">${item.emoji} ${item.name}</h3>
        <p class="card-desc">${item.description || ''}</p>
        <div class="card-meta">
          <span class="tag-difficulty lvl-tag-${item.level}">${item.levelBadge}</span>
          <span class="tag-steps">${item.steps.length} Adım</span>
        </div>
        <button class="card-cta-btn">
          <span>Bunu Çizmek İstiyorum</span>
          <span>✏️</span>
        </button>
      `;

      card.addEventListener('click', () => {
        this.audio.playPop();
        this.startDrawing(item.id);
      });

      this.drawingGrid.appendChild(card);
    });
  }

  startDrawing(drawingId) {
    const drawing = DRAWINGS_DATA.find(d => d.id === drawingId);
    if (!drawing) return;

    this.currentDrawing = drawing;
    this.currentStep = 0;

    // Başlık ve emojiyi güncelle
    this.currentItemEmoji.textContent = drawing.emoji;
    this.currentItemTitle.textContent = drawing.name;

    // Adım noktalarını oluştur
    this.stepDotsContainer.innerHTML = '';
    drawing.steps.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `step-dot ${idx === 0 ? 'active' : ''}`;
      this.stepDotsContainer.appendChild(dot);
    });

    // Renk kutusunu güncelle
    this.renderColorChips(drawing.colors);

    this.showScreen('workshop');
    this.renderCurrentStep(true);
  }

  renderColorChips(colors) {
    this.colorChips.innerHTML = '';
    if (!colors || colors.length === 0) return;

    colors.forEach(col => {
      const chip = document.createElement('span');
      chip.className = 'color-chip';
      chip.innerHTML = `
        <span class="chip-circle" style="background-color: ${col.hex}"></span>
        <span>${col.name}</span>
      `;
      this.colorChips.appendChild(chip);
    });
  }

  renderCurrentStep(shouldAnimate = true) {
    if (!this.currentDrawing) return;

    const total = this.currentDrawing.steps.length;
    const step = this.currentDrawing.steps[this.currentStep];

    // Sayaç ve sayaç noktaları
    this.stepCounterText.textContent = `Adım ${this.currentStep + 1} / ${total}`;
    const dots = this.stepDotsContainer.querySelectorAll('.step-dot');
    dots.forEach((dot, idx) => {
      dot.className = 'step-dot';
      if (idx < this.currentStep) dot.classList.add('completed');
      if (idx === this.currentStep) dot.classList.add('active');
    });

    // Yönerge kartı
    this.instructionTitle.textContent = step.title;
    this.instructionDesc.textContent = step.instruction;

    // Önceki adımların SVG'si (açık gri/tamamlanmış)
    let prevSvg = '';
    for (let i = 0; i < this.currentStep; i++) {
      prevSvg += this.currentDrawing.steps[i].svg;
    }
    this.layerPrevious.innerHTML = `
      <g class="svg-stroke-prev">
        ${prevSvg}
      </g>
    `;

    // Şimdiki adımın SVG'si (kalın canlı siyah çizgi)
    this.layerCurrent.innerHTML = `
      <g class="svg-stroke-current ${shouldAnimate ? 'svg-stroke-animating' : ''}">
        ${step.svg}
      </g>
    `;

    // Boyama katmanı sıfırla
    this.layerColoring.innerHTML = '';

    // Buton metni güncellemesi (Son adım mı?)
    const actionTitle = this.btnNextStep.querySelector('.action-title');
    const actionSub = this.btnNextStep.querySelector('.action-sub');
    if (this.currentStep === total - 1) {
      actionTitle.textContent = 'BİTTİ! 🎉';
      actionSub.textContent = 'Resmi Tamamla & Boya';
    } else {
      actionTitle.textContent = 'ÇİZDİM! ✅';
      actionSub.textContent = `Sıradaki Adıma Geç (${this.currentStep + 2}/${total})`;
    }

    // Sesli anlatım
    this.speak(step.voice || step.instruction);

    // Animasyon kalemi
    if (shouldAnimate) {
      this.animateMagicPencil();
    }

    // Eğer sayaç modu açıksa sayacı yeniden başlat
    if (this.timerMode) {
      this.resetTimer();
    }
  }

  animateMagicPencil() {
    this.magicPencil.classList.remove('visible');
    // Kalemin hafif hareket etmesi için ufak animasyon
    const bboxTarget = this.layerCurrent.querySelector('path, circle, rect, ellipse');
    if (bboxTarget && bboxTarget.getBBox) {
      try {
        const box = bboxTarget.getBBox();
        const svgRect = this.drawingSvg.getBoundingClientRect();
        const scaleX = svgRect.width / 600;
        const scaleY = svgRect.height / 600;

        const leftPx = (box.x + box.width) * scaleX;
        const topPx = (box.y + box.height / 2) * scaleY;

        this.magicPencil.style.left = `${leftPx}px`;
        this.magicPencil.style.top = `${topPx}px`;
        this.magicPencil.classList.add('visible');

        setTimeout(() => {
          this.magicPencil.classList.remove('visible');
        }, 1800);
      } catch (e) {
        // SVG henüz tam render edilmemişse yoksay
      }
    }
  }

  nextStep() {
    const total = this.currentDrawing.steps.length;
    if (this.currentStep < total - 1) {
      this.currentStep++;
      this.audio.playChime();
      this.renderCurrentStep(true);
    } else {
      // Resim tamamlandı! Kutlama!
      this.completeDrawing();
    }
  }

  completeDrawing() {
    this.stopTimer();
    this.audio.playVictoryFanfare();

    // Boyama katmanını ekle
    if (this.currentDrawing.coloring) {
      this.layerColoring.innerHTML = this.currentDrawing.coloring;
    }

    // Kutlama Modalı
    const allPaths = this.currentDrawing.steps.map(s => s.svg).join('');
    this.modalPreviewBox.innerHTML = `
      <svg viewBox="0 0 600 600">
        <g fill="none" stroke="#1e293b" stroke-width="14" stroke-linecap="round" stroke-linejoin="round">
          ${allPaths}
        </g>
        ${this.currentDrawing.coloring || ''}
      </svg>
    `;

    this.celebrationModal.classList.remove('hidden');
    this.triggerConfetti();

    this.speak(`Tebrikler Kıvanç! ${this.currentDrawing.name} resmini harika çizdin! Şimdi boya kalemlerini al ve kağıdını rengarenk boya!`);
  }

  triggerConfetti() {
    // Hafif ve eğlenceli CSS konfeti patlaması
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '999';
    document.body.appendChild(container);

    const colors = ['#f43f5e', '#fb923c', '#facc15', '#4ade80', '#60a5fa', '#a855f7'];

    for (let i = 0; i < 70; i++) {
      const piece = document.createElement('div');
      piece.style.position = 'absolute';
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.top = '-20px';
      piece.style.width = `${Math.random() * 14 + 8}px`;
      piece.style.height = `${Math.random() * 16 + 10}px`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.borderRadius = `${Math.random() * 6}px`;
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;

      const dur = Math.random() * 2.5 + 2;
      const delay = Math.random() * 0.5;

      piece.animate([
        { transform: `translate3d(0, 0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate3d(${(Math.random() - 0.5) * 300}px, 105vh, 0) rotate(${Math.random() * 720}deg)`, opacity: 0 }
      ], {
        duration: dur * 1000,
        delay: delay * 1000,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
      });

      container.appendChild(piece);
    }

    setTimeout(() => {
      container.remove();
    }, 4000);
  }

  // ============================================================
  // OTOMATİK SAYAÇ / BEKLEME MOTORU (Eller Kağıttayken Kolaylık)
  // ============================================================
  toggleTimer() {
    this.timerMode = !this.timerMode;
    if (this.timerMode) {
      this.timerStatus.textContent = '15 sn (Açık)';
      this.btnToggleTimer.classList.add('active');
      this.countdownOverlay.classList.remove('hidden');
      this.resetTimer();
    } else {
      this.timerStatus.textContent = 'Kapalı';
      this.btnToggleTimer.classList.remove('active');
      this.countdownOverlay.classList.add('hidden');
      this.stopTimer();
    }
  }

  resetTimer() {
    this.stopTimer();
    this.timerRemaining = this.timerSeconds;
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.timerRemaining--;
      this.updateTimerDisplay();

      if (this.timerRemaining <= 3 && this.timerRemaining > 0) {
        this.audio.playTick();
      }

      if (this.timerRemaining <= 0) {
        this.stopTimer();
        this.nextStep();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    this.countdownText.textContent = this.timerRemaining;
    const perimeter = 283; // 2 * PI * 45
    const offset = perimeter - (this.timerRemaining / this.timerSeconds) * perimeter;
    this.countdownProgress.style.strokeDashoffset = offset;
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}

// Sayfa yüklendiğinde başlat
window.addEventListener('DOMContentLoaded', () => {
  window.app = new KivancDrawingApp();
});
