// =========================================================================
// KIVANÇ ÇİZİM ATÖLYESİ — PROFESSIONAL DRAWING ACADEMY
// iPad-First, Dokunmatik & Gerçekçi Kalem Animasyon Motoru
// =========================================================================

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

    try {
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
    } catch (e) {}
  }

  playChime() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
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
    } catch (e) {}
  }

  playTick() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
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
    } catch (e) {}
  }

  playVictoryFanfare() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const melody = [
        { f: 523.25, d: 0.15 },
        { f: 659.25, d: 0.15 },
        { f: 783.99, d: 0.18 },
        { f: 1046.5, d: 0.45 }
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
    } catch (e) {}
  }
}

// =========================================================================
// UYGULAMA MOTORU: KIVANÇ ÇİZİM AKADEMİSİ
// =========================================================================
class KivancDrawingApp {
  constructor() {
    this.audio = new AudioEngine();
    this.currentDrawing = null;
    this.currentStep = 0;
    this.activeCategory = 'all'; // 'all', 'hayvanlar', 'arabalar', 'dinozorlar', etc.
    this.activeLevel = 'all';    // 'all', '1', '2', '3'
    this.pendingDrawingId = null;

    // Gerçekçi Çizim Animasyonu Durumu
    this.isPaused = false;
    this.playbackSpeed = 1.0; // 1.0x, 1.5x, 0.5x
    this.animFrameId = null;
    this.activeStrokeAnimation = null;

    // Otomatik Sayaç Modu (Eller serbest çizim için isteğe bağlı)
    this.timerMode = false;
    this.timerSeconds = 15;
    this.timerRemaining = 15;
    this.timerInterval = null;

    // Gerçek İnsan Sesi & TTS Motoru
    this.currentVoiceAudio = null;
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
      const trVoices = voices.filter(v => v.lang.startsWith('tr') || v.lang.replace('_', '-').startsWith('tr'));
      if (trVoices.length > 0) {
        // En kaliteli doğal sesi seç (Enhanced, Premium, Siri, Natural, Neural)
        const natural = trVoices.find(v => /premium|enhanced|siri|natural|neural/i.test(v.name));
        this.speechVoice = natural || trVoices[0];
      }
    };
    findTurkish();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findTurkish;
    }
  }

  speak(text, audioUrl) {
    if (!this.audio.soundEnabled) return;

    // Önceki sesleri durdur
    if (this.currentVoiceAudio) {
      try {
        this.currentVoiceAudio.pause();
        this.currentVoiceAudio.currentTime = 0;
      } catch (e) {}
      this.currentVoiceAudio = null;
    }
    if (this.synth) {
      try { this.synth.cancel(); } catch (e) {}
    }

    // 1. ÖNCELİK: Stüdyo Kalitesinde Gerçek İnsan Sesi (MP3)
    if (audioUrl) {
      try {
        const audio = new Audio(audioUrl);
        this.currentVoiceAudio = audio;
        audio.play().catch(err => {
          console.warn("MP3 oynatılamadı, doğal Web Speech ile konuşuluyor:", err);
          this.speakWebSpeech(text);
        });
        return;
      } catch (e) {
        console.warn("Audio nesnesi oluşturulamadı:", e);
      }
    }

    // 2. FALLBACK: Web Speech API (Doğal İnsan Tonu: pitch 1.0, rate 0.98)
    this.speakWebSpeech(text);
  }

  speakWebSpeech(text) {
    if (!this.synth || !text) return;
    try {
      this.synth.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'tr-TR';
      utter.rate = 0.98; // Doğal insan hızı (kesinlikle yavaşlatılmamış)
      utter.pitch = 1.0;  // 1.0 = Robotik olmayan, gerçek insan frekansı
      if (this.speechVoice) {
        utter.voice = this.speechVoice;
      }
      this.synth.speak(utter);
    } catch (e) {
      console.warn("TTS hatası:", e);
    }
  }

  cacheDom() {
    // Ekranlar
    this.screenHome = document.getElementById('screen-home');
    this.screenWorkshop = document.getElementById('screen-workshop');

    // Kategori ve Galeri
    this.categoryPillsBar = document.getElementById('category-pills-bar');
    this.catPillBtns = document.querySelectorAll('.cat-pill-btn');
    this.levelBtns = document.querySelectorAll('.level-btn');
    this.categoryFoldersGrid = document.getElementById('category-folders-grid');
    this.drawingGrid = document.getElementById('drawing-grid');
    this.categoryBreadcrumbBar = document.getElementById('category-breadcrumb-bar');
    this.btnBackCategories = document.getElementById('btn-back-categories');
    this.activeCatEmoji = document.getElementById('active-cat-emoji');
    this.activeCatTitle = document.getElementById('active-cat-title');
    this.activeCatBadge = document.getElementById('active-cat-badge');

    // Üst Araçlar
    this.btnSoundToggle = document.getElementById('btn-sound-toggle');
    this.btnFullscreen = document.getElementById('btn-fullscreen');
    this.btnShowIpadQr = document.getElementById('btn-show-ipad-qr');

    // Workshop Başlık & Kontroller
    this.btnBackHome = document.getElementById('btn-back-home');
    this.currentItemEmoji = document.getElementById('current-item-emoji');
    this.currentItemTitle = document.getElementById('current-item-title');
    this.stepDotsContainer = document.getElementById('step-dots-container');
    this.stepCounterText = document.getElementById('step-counter-text');
    this.btnPauseStep = document.getElementById('btn-pause-step');
    this.btnSpeedToggle = document.getElementById('btn-speed-toggle');
    this.speedLabel = document.getElementById('speed-label');
    this.btnToggleTimer = document.getElementById('btn-toggle-timer');
    this.timerStatus = document.getElementById('timer-status');

    // Workshop Çizim Tahtası & Kalem
    this.canvasBoard = document.getElementById('canvas-board');
    this.drawingSvg = document.getElementById('drawing-svg');
    this.layerPrevious = document.getElementById('layer-previous');
    this.layerCurrent = document.getElementById('layer-current');
    this.layerColoring = document.getElementById('layer-coloring');
    this.magicPencil = document.getElementById('magic-pencil');
    this.countdownOverlay = document.getElementById('countdown-overlay');
    this.countdownText = document.getElementById('countdown-text');
    this.countdownProgress = document.getElementById('countdown-progress');

    // Yönerge Kartı
    this.instructionTitle = document.getElementById('instruction-title');
    this.instructionDesc = document.getElementById('instruction-desc');
    this.btnSpeakStep = document.getElementById('btn-speak-step');

    // Büyük Kontrol Butonları
    this.btnNextStep = document.getElementById('btn-next-step');
    this.btnReplayStep = document.getElementById('btn-replay-step');
    this.btnPrevStep = document.getElementById('btn-prev-step');
    this.colorChips = document.getElementById('color-chips');

    // Ders Öncesi Referans Modalı (Pre-Lesson Showcase)
    this.preLessonModal = document.getElementById('pre-lesson-modal');
    this.preLessonSvg = document.getElementById('pre-lesson-svg');
    this.preLessonEmoji = document.getElementById('pre-lesson-emoji');
    this.preLessonTitle = document.getElementById('pre-lesson-title');
    this.preLessonLevel = document.getElementById('pre-lesson-level');
    this.preLessonSteps = document.getElementById('pre-lesson-steps');
    this.preLessonDesc = document.getElementById('pre-lesson-desc');
    this.preLessonColors = document.getElementById('pre-lesson-colors');
    this.btnStartLesson = document.getElementById('btn-start-lesson');
    this.btnClosePreLesson = document.getElementById('btn-close-pre-lesson');

    // Kutlama Modalı
    this.celebrationModal = document.getElementById('celebration-modal');
    this.modalPreviewBox = document.getElementById('modal-preview-box');
    this.btnFinishReplay = document.getElementById('btn-finish-replay');
    this.btnFinishHome = document.getElementById('btn-finish-home');

    // iPad Bağlantı Modalı
    this.ipadModal = document.getElementById('ipad-modal');
    this.ipadLinkDisplay = document.getElementById('ipad-link-display');
    this.ipadQrImg = document.getElementById('ipad-qr-img');
    this.btnCloseIpadModal = document.getElementById('btn-close-ipad-modal');
  }

  bindEvents() {
    // 1. Dokunmatik Kategori Hap Butonları
    if (this.catPillBtns) {
      this.catPillBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.audio.playPop();
          this.catPillBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.activeCategory = btn.dataset.cat;
          this.renderView();
        });
      });
    }

    // 2. Seviye Filtreleri (🟢 Çırak, 🟡 Ressam, 🔴 Usta Sanatçı)
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

    // 3. Breadcrumb Geri Butonu
    if (this.btnBackCategories) {
      const handleBack = (e) => {
        if (e && e.type === 'touchend') e.preventDefault();
        this.audio.playPop();
        this.activeCategory = 'all';
        this.renderView();
      };
      this.btnBackCategories.onclick = handleBack;
      this.btnBackCategories.addEventListener('touchend', handleBack, { passive: false });
    }

    // 4. Workshop Başlık Butonları
    this.btnBackHome.addEventListener('click', () => {
      this.audio.playPop();
      this.stopStrokeAnimation();
      this.stopTimer();
      if (this.synth) this.synth.cancel();
      this.showScreen('home');
      this.renderView();
    });

    // 5. Oynat / Duraklat Butonu
    if (this.btnPauseStep) {
      this.btnPauseStep.addEventListener('click', () => {
        this.togglePause();
      });
    }

    // 6. Çizim Hızı Değiştirme Butonu (1x, 1.5x, 0.5x)
    if (this.btnSpeedToggle) {
      this.btnSpeedToggle.addEventListener('click', () => {
        this.cycleSpeed();
      });
    }

    // 7. Sıradaki Adım Butonu
    this.btnNextStep.addEventListener('click', () => {
      this.audio.playPop();
      this.nextStep();
    });

    // 8. Tekrar Çiz Butonu
    this.btnReplayStep.addEventListener('click', () => {
      this.audio.playPop();
      this.renderCurrentStep(true);
    });

    // 9. Bir Geri Butonu
    this.btnPrevStep.addEventListener('click', () => {
      this.audio.playPop();
      if (this.currentStep > 0) {
        this.currentStep--;
        this.renderCurrentStep(true);
      }
    });

    // 10. Yönergeyi Seslendir
    this.btnSpeakStep.addEventListener('click', () => {
      this.audio.playPop();
      const step = this.currentDrawing.steps[this.currentStep];
      if (step) this.speak(step.voice || step.instruction, step.audio);
    });

    // 11. Sayaç Aç / Kapat
    this.btnToggleTimer.addEventListener('click', () => {
      this.audio.playPop();
      this.toggleTimer();
    });

    // 12. Ders Öncesi Modal Butonları
    if (this.btnStartLesson) {
      this.btnStartLesson.addEventListener('click', () => {
        this.audio.playPop();
        this.closePreLessonModal();
        if (this.pendingDrawingId) {
          this.startDrawing(this.pendingDrawingId);
        }
      });
    }

    if (this.btnClosePreLesson) {
      this.btnClosePreLesson.addEventListener('click', () => {
        this.audio.playPop();
        this.closePreLessonModal();
      });
    }

    // 13. Ses Aç / Kapat
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
        if (this.currentVoiceAudio) {
          try {
            this.currentVoiceAudio.pause();
            this.currentVoiceAudio.currentTime = 0;
          } catch(e) {}
          this.currentVoiceAudio = null;
        }
        if (this.synth) this.synth.cancel();
      }
    });

    // 14. Tam Ekran
    this.btnFullscreen.addEventListener('click', () => {
      this.audio.playPop();
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // 15. Kutlama Modalı Butonları
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

    // 16. iPad Bağlantı Modalı
    if (this.btnShowIpadQr) {
      this.btnShowIpadQr.addEventListener('click', () => {
        this.audio.playPop();
        const serverIp = window.SERVER_IP || '192.168.1.6';
        const serverPort = window.SERVER_PORT || 8080;
        const targetUrl = window.location.origin.includes('github.io')
          ? window.location.href
          : `http://${serverIp}:${serverPort}`;

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

    // iPad / Safari Ses Motoru İlk Dokunuş Kilidi Açma
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

  updateCategoryPills() {
    if (!this.catPillBtns) return;
    this.catPillBtns.forEach(btn => {
      if (btn.dataset.cat === this.activeCategory) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // =========================================================================
  // GÖRÜNÜM YÖNETİMİ & KART LİSTESİ
  // =========================================================================
  renderView() {
    this.updateCategoryPills();

    // Sayfayı her görünüm değişiminde en tepeye al
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (this.activeCategory === 'all') {
      // Tüm Dünyalar (Ana Sayfa Görünümü): Sadece Kategori Dünyaları gösterilir
      this.categoryBreadcrumbBar.classList.add('hidden');
      this.categoryFoldersGrid.classList.remove('hidden');
      this.drawingGrid.classList.add('hidden');
      if (this.categoryPillsBar) this.categoryPillsBar.classList.add('hidden');
      this.renderCategoryFolders();
    } else {
      // Seçili Kategori Görünümü (Yeni Sayfa Deneyimi)
      const cat = CATEGORIES_DATA.find(c => c.id === this.activeCategory);
      if (cat) {
        this.activeCatEmoji.textContent = cat.emoji;
        this.activeCatTitle.textContent = cat.name;
      }

      this.categoryFoldersGrid.classList.add('hidden');
      this.categoryBreadcrumbBar.classList.remove('hidden');
      this.drawingGrid.classList.remove('hidden');
      if (this.categoryPillsBar) this.categoryPillsBar.classList.remove('hidden');

      let list = DRAWINGS_DATA.filter(d => d.categoryId === this.activeCategory);
      if (this.activeLevel !== 'all') {
        list = list.filter(d => String(d.level) === this.activeLevel);
      }
      this.activeCatBadge.textContent = `${list.length} Çizim Hazır`;
      this.renderDrawingsListToGrid(list);
    }
  }

  renderCategoryFolders() {
    this.categoryFoldersGrid.innerHTML = '';
    const categoriesToDisplay = CATEGORIES_DATA.filter(c => c.id !== 'all');

    categoriesToDisplay.forEach(cat => {
      const count = this.activeLevel === 'all'
        ? DRAWINGS_DATA.filter(d => d.categoryId === cat.id).length
        : DRAWINGS_DATA.filter(d => d.categoryId === cat.id && String(d.level) === this.activeLevel).length;

      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'category-folder-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.innerHTML = `
        <span class="cat-card-icon">${cat.emoji}</span>
        <h3 class="cat-card-title">${cat.name}</h3>
        <p class="cat-card-desc">${cat.desc || 'Keşfetmeye hazır çizim dünyası'}</p>
        <div class="cat-card-footer">
          <span class="cat-badge-count">${count} Çizim</span>
          <span class="cat-card-enter">Aç →</span>
        </div>
      `;

      const selectCat = (e) => {
        if (e && e.type === 'touchend') e.preventDefault();
        this.audio.playPop();
        this.activeCategory = cat.id;
        this.renderView();
      };
      card.onclick = selectCat;
      card.addEventListener('touchend', selectCat, { passive: false });

      this.categoryFoldersGrid.appendChild(card);
    });
  }

  renderDrawingsListToGrid(list) {
    this.drawingGrid.innerHTML = '';

    if (list.length === 0) {
      this.drawingGrid.innerHTML = `
        <div class="empty-state-card">
          <span class="empty-state-emoji">🎨</span>
          <h3>Bu Seviyede Henüz Çizim Yok</h3>
          <p>Yukarıdaki '✨ Tümü' seviyesini seçerek tüm harika çizimleri görebilirsin!</p>
        </div>
      `;
      return;
    }

    list.forEach(item => {
      const card = document.createElement('div');
      card.className = 'drawing-card';

      // previewSvg yerine gerçek resim desteği:
      const previewContent = item.previewImage 
        ? `<image href="${item.previewImage}" x="0" y="0" width="600" height="600" preserveAspectRatio="xMidYMid meet"/>`
        : item.previewSvg;

      // Kartta profesyonel bitmiş illüstrasyon gösterilir (previewContent)
      card.innerHTML = `
        <div class="card-svg-wrapper">
          <svg viewBox="0 0 600 600" class="card-preview-svg">
            ${previewContent}
          </svg>
        </div>
        <h3 class="card-title">${item.emoji} ${item.name}</h3>
        <p class="card-desc">${item.description || ''}</p>
        <div class="card-meta">
          <span class="tag-difficulty lvl-tag-${item.level}">${item.levelBadge}</span>
          <span class="tag-steps">${item.steps.length} Adım</span>
        </div>
        <button class="card-cta-btn">
          <span>Bunu Çizmek İstiyorum</span>
          <span class="btn-hand-icon">✏️</span>
        </button>
      `;

      // Karta dokununca DERS ÖNCESİ BİTMİŞ RESİM REFERANSI açılır (Touch + Click desteği)
      const openLesson = (e) => {
        if (e && e.type === 'touchend') e.preventDefault();
        this.audio.playPop();
        this.openPreLessonModal(item.id);
      };
      card.onclick = openLesson;
      card.addEventListener('touchend', openLesson, { passive: false });

      this.drawingGrid.appendChild(card);
    });
  }

  // =========================================================================
  // DERS ÖNCESİ BİTMİŞ RESİM REFERANS MODALI (PRE-LESSON SHOWCASE)
  // =========================================================================
  openPreLessonModal(drawingId) {
    const drawing = DRAWINGS_DATA.find(d => d.id === drawingId);
    if (!drawing) return;

    this.pendingDrawingId = drawingId;
    this.preLessonEmoji.textContent = drawing.emoji;
    this.preLessonTitle.textContent = drawing.name;
    this.preLessonDesc.textContent = drawing.description || '';

    // Seviye Rozeti
    this.preLessonLevel.className = `tag-difficulty lvl-tag-${drawing.level}`;
    this.preLessonLevel.textContent = drawing.levelBadge;
    this.preLessonSteps.textContent = `${drawing.steps.length} Adımda Tamamla`;

    // Bitmiş Profesyonel Referans İllüstrasyonu Yükle (Gerçek resim veya SVG)
    const previewContent = drawing.previewImage 
      ? `<image href="${drawing.previewImage}" x="0" y="0" width="600" height="600" preserveAspectRatio="xMidYMid meet"/>`
      : drawing.previewSvg;

    this.preLessonSvg.innerHTML = previewContent;

    // Renk Paleti Çipleri
    this.preLessonColors.innerHTML = '';
    if (drawing.colors && drawing.colors.length > 0) {
      drawing.colors.forEach(col => {
        const chip = document.createElement('span');
        chip.className = 'color-chip';
        chip.innerHTML = `
          <span class="chip-circle" style="background-color: ${col.hex}"></span>
          <span>${col.name}</span>
        `;
        this.preLessonColors.appendChild(chip);
      });
    }

    this.preLessonModal.classList.remove('hidden');

    // Kıvanç'a sıcak sesli karşılama (Gerçek insan sesi veya doğal ses)
    const welcomeTxt = drawing.welcomeText || `${drawing.name} çizmeye hazır mısın Kıvanç? Kağıdını ve kalemini hazırla, birlikte çizelim!`;
    this.speak(welcomeTxt, drawing.welcomeAudio);
  }

  closePreLessonModal() {
    if (this.preLessonModal) {
      this.preLessonModal.classList.add('hidden');
    }
  }

  // =========================================================================
  // ÇİZİM DERSİ BAŞLATMA
  // =========================================================================
  startDrawing(drawingId) {
    const drawing = DRAWINGS_DATA.find(d => d.id === drawingId);
    if (!drawing) return;

    this.currentDrawing = drawing;
    this.currentStep = 0;
    this.isPaused = false;
    this.updatePauseButton();

    this.currentItemEmoji.textContent = drawing.emoji;
    this.currentItemTitle.textContent = drawing.name;

    // Adım Noktaları
    this.stepDotsContainer.innerHTML = '';
    drawing.steps.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `step-dot ${idx === 0 ? 'active' : ''}`;
      this.stepDotsContainer.appendChild(dot);
    });

    // Renk Kutusu
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

  // =========================================================================
  // ADIM RENDER VE DOĞAL ÇİZGİ ANİMASYON MOTORU
  // =========================================================================
  renderCurrentStep(shouldAnimate = true) {
    if (!this.currentDrawing) return;

    this.stopStrokeAnimation();
    this.isPaused = false;
    this.updatePauseButton();

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

    // Önceki ve şimdiki adım (Resim veya Gelişmiş SVG desteği)
    if (step.image) {
      this.layerPrevious.innerHTML = '';
      this.layerCurrent.innerHTML = `
        <image href="${step.image}" x="0" y="0" width="600" height="600" preserveAspectRatio="xMidYMid meet" />
      `;
      this.magicPencil.classList.remove('visible');
    } else {
      let prevSvg = '';
      for (let i = 0; i < this.currentStep; i++) {
        prevSvg += (this.currentDrawing.steps[i].svg || '');
      }

      this.layerPrevious.innerHTML = `<g class="svg-stroke-prev">${prevSvg}</g>`;
      this.layerCurrent.innerHTML = `<g class="svg-stroke-current">${step.svg || ''}</g>`;
    }

    // Boyama katmanı sıfırla
    this.layerColoring.innerHTML = '';

    // İlerleme butonu metni (Son adım mı?)
    const actionTitle = this.btnNextStep.querySelector('.action-title');
    const actionSub = this.btnNextStep.querySelector('.action-sub');
    if (this.currentStep === total - 1) {
      actionTitle.textContent = 'BİTTİ! 🎉';
      actionSub.textContent = 'Resmi Tamamla & Boya';
    } else {
      actionTitle.textContent = 'ÇİZDİM! ✅';
      actionSub.textContent = `Sıradaki Adıma Geç (${this.currentStep + 2}/${total})`;
    }

    // Sesli anlatım (Gerçek insan sesi MP3 veya doğal TTS)
    this.speak(step.voice || step.instruction, step.audio);

    // Gerçekçi Kalem Çizim Animasyonu
    if (step.image) {
      this.magicPencil.classList.remove('visible');
    } else if (this.currentStep === total - 1) {
      // Son adım tam renklendirme ve kutlama adımıdır: Kalemi gizle, kutlama çal
      this.magicPencil.classList.remove('visible');
      this.audio.playCelebration();
    } else if (shouldAnimate) {
      this.startStrokeAnimation();
    } else {
      this.magicPencil.classList.remove('visible');
    }

    // Otomatik sayaç modu açıksa başlat
    if (this.timerMode) {
      this.resetTimer();
    }
  }

  // =========================================================================
  // GERÇEKÇİ KALEM TAKİPLİ SVG VEKTÖR ANİMASYONU
  // =========================================================================
  stopStrokeAnimation() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    this.activeStrokeAnimation = null;
    if (this.magicPencil) {
      this.magicPencil.classList.remove('visible');
    }
  }

  startStrokeAnimation() {
    this.stopStrokeAnimation();
    this.isPaused = false;
    this.updatePauseButton();

    // layerCurrent içindeki çizilebilir tüm elemanları topla
    const elements = Array.from(
      this.layerCurrent.querySelectorAll('path, circle, line, rect, ellipse, polyline, polygon')
    );

    if (elements.length === 0) {
      this.magicPencil.classList.remove('visible');
      return;
    }

    const strokeQueue = [];
    elements.forEach(el => {
      let len = 0;
      if (el.getTotalLength) {
        try { len = el.getTotalLength(); } catch (e) { len = 300; }
      }
      if (!len || len < 5) {
        if (el.tagName.toLowerCase() === 'circle') {
          const r = parseFloat(el.getAttribute('r')) || 30;
          len = 2 * Math.PI * r;
        } else if (el.tagName.toLowerCase() === 'line') {
          const x1 = parseFloat(el.getAttribute('x1')) || 0;
          const y1 = parseFloat(el.getAttribute('y1')) || 0;
          const x2 = parseFloat(el.getAttribute('x2')) || 0;
          const y2 = parseFloat(el.getAttribute('y2')) || 0;
          len = Math.hypot(x2 - x1, y2 - y1);
        } else {
          len = 200;
        }
      }

      // Çizgiyi sıfırdan çizilecek şekilde gizle
      el.style.strokeDasharray = `${len} ${len}`;
      el.style.strokeDashoffset = len;

      // Çizim süresi: Hıza ve uzunluğa göre ayarlı (~320 px/saniye)
      const baseDuration = Math.max(650, Math.min(2400, (len / 320) * 1000));
      const duration = baseDuration / this.playbackSpeed;

      strokeQueue.push({
        element: el,
        length: len,
        duration: duration
      });
    });

    this.activeStrokeAnimation = {
      queue: strokeQueue,
      currentIndex: 0,
      startTime: null,
      elapsedBeforePause: 0
    };

    this.magicPencil.classList.add('visible');
    this.animFrameId = requestAnimationFrame(ts => this.runStrokeFrame(ts));
  }

  runStrokeFrame(timestamp) {
    if (!this.activeStrokeAnimation || this.isPaused) return;

    const anim = this.activeStrokeAnimation;
    if (anim.currentIndex >= anim.queue.length) {
      // Adımdaki tüm çizgiler bitti
      setTimeout(() => {
        if (!this.activeStrokeAnimation || anim.currentIndex >= anim.queue.length) {
          this.magicPencil.classList.remove('visible');
        }
      }, 600);
      return;
    }

    const currentItem = anim.queue[anim.currentIndex];
    if (!anim.startTime) {
      anim.startTime = timestamp;
    }

    const elapsed = (timestamp - anim.startTime) + anim.elapsedBeforePause;
    const progress = Math.min(1, elapsed / currentItem.duration);

    // Çizgi ilerlemesini uygula
    const currentOffset = currentItem.length * (1 - progress);
    currentItem.element.style.strokeDashoffset = currentOffset;

    // Kalem ucunu çizginin tam ucuna konumlandır
    try {
      const drawnDist = currentItem.length * progress;
      let pt = { x: 300, y: 300 };

      if (currentItem.element.getPointAtLength) {
        pt = currentItem.element.getPointAtLength(drawnDist);
      } else if (currentItem.element.tagName.toLowerCase() === 'circle') {
        const cx = parseFloat(currentItem.element.getAttribute('cx')) || 300;
        const cy = parseFloat(currentItem.element.getAttribute('cy')) || 300;
        const r = parseFloat(currentItem.element.getAttribute('r')) || 50;
        const angle = progress * 2 * Math.PI;
        pt = { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
      }

      // SVG noktasını ekran piksellerine dönüştür
      const boardRect = this.canvasBoard.getBoundingClientRect();
      const svgRect = this.drawingSvg.getBoundingClientRect();
      const scaleX = svgRect.width / 600;
      const scaleY = svgRect.height / 600;
      const xPx = (svgRect.left - boardRect.left) + pt.x * scaleX;
      const yPx = (svgRect.top - boardRect.top) + pt.y * scaleY;

      this.magicPencil.style.left = `${xPx}px`;
      this.magicPencil.style.top = `${yPx}px`;
    } catch (e) {}

    if (progress < 1) {
      this.animFrameId = requestAnimationFrame(ts => this.runStrokeFrame(ts));
    } else {
      // Bu çizgi bitti, sıradakine geç
      currentItem.element.style.strokeDashoffset = 0;
      anim.currentIndex++;
      anim.startTime = null;
      anim.elapsedBeforePause = 0;
      this.animFrameId = requestAnimationFrame(ts => this.runStrokeFrame(ts));
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    this.audio.playPop();

    if (this.isPaused) {
      if (this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }
      if (this.activeStrokeAnimation && this.activeStrokeAnimation.startTime) {
        this.activeStrokeAnimation.elapsedBeforePause += (performance.now() - this.activeStrokeAnimation.startTime);
        this.activeStrokeAnimation.startTime = null;
      }
      if (this.synth) this.synth.pause();
    } else {
      if (this.synth) this.synth.resume();
      if (this.activeStrokeAnimation) {
        this.activeStrokeAnimation.startTime = performance.now();
        this.animFrameId = requestAnimationFrame(ts => this.runStrokeFrame(ts));
      } else {
        this.startStrokeAnimation();
      }
    }

    this.updatePauseButton();
  }

  updatePauseButton() {
    if (!this.btnPauseStep) return;
    const icon = this.btnPauseStep.querySelector('.tool-icon');
    const label = this.btnPauseStep.querySelector('.tool-label');

    if (this.isPaused) {
      if (icon) icon.textContent = '▶️';
      if (label) label.textContent = 'Devam Et';
      this.btnPauseStep.classList.add('paused');
    } else {
      if (icon) icon.textContent = '⏸️';
      if (label) label.textContent = 'Duraklat';
      this.btnPauseStep.classList.remove('paused');
    }
  }

  cycleSpeed() {
    this.audio.playPop();
    if (this.playbackSpeed === 1.0) {
      this.playbackSpeed = 1.5;
    } else if (this.playbackSpeed === 1.5) {
      this.playbackSpeed = 0.5;
    } else {
      this.playbackSpeed = 1.0;
    }

    if (this.speedLabel) {
      this.speedLabel.textContent = `Hız: ${this.playbackSpeed}x`;
    }

    // Yeni hızla adımı baştan çiz
    this.renderCurrentStep(true);
  }

  nextStep() {
    const total = this.currentDrawing.steps.length;
    if (this.currentStep < total - 1) {
      this.currentStep++;
      this.audio.playChime();
      this.renderCurrentStep(true);
    } else {
      this.completeDrawing();
    }
  }

  completeDrawing() {
    this.stopStrokeAnimation();
    this.stopTimer();
    this.audio.playVictoryFanfare();

    // Tamamlanan eseri kutlama modalında göster (Gerçek resim veya SVG)
    const previewContent = this.currentDrawing.previewImage
      ? `<image href="${this.currentDrawing.previewImage}" x="0" y="0" width="600" height="600" preserveAspectRatio="xMidYMid meet"/>`
      : this.currentDrawing.previewSvg;

    this.modalPreviewBox.innerHTML = `
      <svg viewBox="0 0 600 600">
        ${previewContent}
      </svg>
    `;

    this.celebrationModal.classList.remove('hidden');
    this.triggerConfetti();

    this.speak(`Tebrikler Kıvanç! ${this.currentDrawing.name} resmini harika çizdin! Şimdi boya kalemlerini al ve kağıdını rengarenk boya!`);
  }

  triggerConfetti() {
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

  // =========================================================================
  // İSTEĞE BAĞLI OTOMATİK SAYAÇ MODU
  // =========================================================================
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
    const perimeter = 283;
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

// Uygulamayı Başlat
window.addEventListener('DOMContentLoaded', () => {
  window.app = new KivancDrawingApp();
});
