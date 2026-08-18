// ==========================================================================
// منطق عمل وتفاعلات موقع "تصميم الأغاني بالاسم" - الفنان سامح نبيل
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // العناصر الرئيسية
  const songsGrid = document.getElementById('songsGrid');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const stickyPlayer = document.getElementById('stickyPlayer');
  
  // عناصر المشغل الصوتي Sticky Player
  const audioPlayer = new Audio();
  const mainPlayBtn = document.getElementById('mainPlayBtn');
  const mainPlayIcon = mainPlayBtn ? mainPlayBtn.querySelector('i') : null;
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const playerThumb = document.getElementById('playerThumb');
  const playerTrackTitle = document.getElementById('playerTrackTitle');
  const playerTrackRecipient = document.getElementById('playerTrackRecipient');
  const progressBar = document.getElementById('progressBar');
  const progressFill = document.getElementById('progressFill');
  const currentTimeEl = document.getElementById('currentTime');
  const totalDurationEl = document.getElementById('totalDuration');

  // نموذج طلب الواتساب
  const whatsappForm = document.getElementById('whatsappForm');

  // شريط التنقل المتجاوب
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('nav-active') ? 'ri-close-line' : 'ri-menu-3-line';
      }
    });

    // إغلاق القائمة عند النقر على أي رابط
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'ri-menu-3-line';
      });
    });
  }

  let currentCategory = 'all';
  let currentPlayingSongId = null;
  let currentFilteredSongs = [...songsData];
  let isPlaying = false;

  // 1. عرض الأغاني والعيّنات في الشبكة
  function renderSongs(category = 'all') {
    currentCategory = category;
    if (!songsGrid) return;
    
    songsGrid.innerHTML = '';
    
    currentFilteredSongs = category === 'all' 
      ? songsData 
      : songsData.filter(s => s.category === category);

    if (currentFilteredSongs.length === 0) {
      songsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--text-muted); background: rgba(255,255,255,0.02); border-radius: 16px; border: 1px dashed rgba(255,255,255,0.1);">
          <i class="ri-music-2-line" style="font-size: 52px; color: var(--accent-pink);"></i>
          <h4 style="margin-top: 15px; font-size: 20px; color: var(--text-main);">لا توجد أغاني في هذا القسم حالياً</h4>
          <p style="margin-top: 8px; font-size: 15px;">اختر قسماً آخر أو استمع إلى جميع الأغاني المميزة 🎵</p>
        </div>
      `;
      return;
    }

    currentFilteredSongs.forEach((song) => {
      const isSongPlaying = (currentPlayingSongId === song.id && isPlaying);
      const isSongActive = (currentPlayingSongId === song.id);

      const card = document.createElement('div');
      card.className = `song-card ${isSongPlaying ? 'playing' : ''} ${isSongActive ? 'active-track' : ''}`;
      card.setAttribute('data-id', song.id);

      card.innerHTML = `
        <div class="song-thumb">
          <img src="${song.cover}" alt="${song.title}" loading="lazy">
          <div class="play-overlay-btn" onclick="playSongById(${song.id})" title="تشغيل / إيقاف">
            <i class="${isSongPlaying ? 'ri-pause-fill' : 'ri-play-fill'}"></i>
          </div>
          <div class="card-equalizer ${isSongPlaying ? 'active' : ''}">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
        <div class="song-details">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span class="song-tag">${song.categoryName}</span>
            <span class="song-recipient-badge"><i class="ri-heart-3-line"></i> ${song.recipient}</span>
          </div>
          <h4 class="song-title">${song.title}</h4>
          <p class="song-desc">${song.description}</p>
          <div class="song-meta">
            <span><i class="ri-time-line"></i> ${song.duration}</span>
            <button type="button" class="song-order-btn" onclick="fillOrderForm('${escapeHtml(song.title)}', '${escapeHtml(song.categoryName)}')">
              <i class="ri-whatsapp-line"></i> اطلب مثلها
            </button>
          </div>
        </div>
      `;

      songsGrid.appendChild(card);
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }

  // 2. تصفية التبويبات الفئوية
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderSongs(cat);
    });
  });

  // 3. تشغيل أغنية محددة عن طريق معرف الأغنية ID
  window.playSongById = function(songId) {
    const targetSong = songsData.find(s => s.id === songId);
    if (!targetSong) return;

    // إذا كانت نفس الأغنية، نتحكم بالتشغيل أو الإيقاف المؤقت
    if (currentPlayingSongId === songId) {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
      return;
    }

    // تشغيل أغنية جديدة
    currentPlayingSongId = songId;
    audioPlayer.src = encodeURI(targetSong.audioUrl);
    
    // تحديث بيانات المشغل في أسفل الصفحة
    if (playerThumb) playerThumb.src = targetSong.cover;
    if (playerTrackTitle) playerTrackTitle.textContent = targetSong.title;
    if (playerTrackRecipient) playerTrackRecipient.textContent = `مخصصة لـ: ${targetSong.recipient} (${targetSong.categoryName})`;

    if (stickyPlayer) stickyPlayer.classList.add('active');

    playAudio();
    renderSongs(currentCategory);
  };

  window.playSongByIndex = function(index) {
    if (index < 0 || index >= currentFilteredSongs.length) return;
    playSongById(currentFilteredSongs[index].id);
  };

  function playAudio() {
    audioPlayer.play().then(() => {
      isPlaying = true;
      updatePlayIcons();
    }).catch(err => {
      console.log('Audio playback notification:', err);
    });
  }

  function pauseAudio() {
    audioPlayer.pause();
    isPlaying = false;
    updatePlayIcons();
  }

  function updatePlayIcons() {
    if (mainPlayIcon) {
      mainPlayIcon.className = isPlaying ? 'ri-pause-fill' : 'ri-play-fill';
    }

    // تحديث موجات المشغل السفلي
    const playerEqualizer = document.getElementById('playerEqualizer');
    if (playerEqualizer) {
      if (isPlaying) {
        playerEqualizer.classList.add('active');
      } else {
        playerEqualizer.classList.remove('active');
      }
    }
    
    // تحديث الأزرار والموجات داخل كل بطاقة
    const cards = document.querySelectorAll('.song-card');
    cards.forEach(card => {
      const cardId = parseInt(card.getAttribute('data-id'), 10);
      const icon = card.querySelector('.play-overlay-btn i');
      const eq = card.querySelector('.card-equalizer');
      if (icon) {
        if (cardId === currentPlayingSongId && isPlaying) {
          icon.className = 'ri-pause-fill';
          card.classList.add('playing');
          if (eq) eq.classList.add('active');
        } else {
          icon.className = 'ri-play-fill';
          card.classList.remove('playing');
          if (eq) eq.classList.remove('active');
        }
      }
    });
  }

  // أحداث المشغل الرئيسي
  if (mainPlayBtn) {
    mainPlayBtn.addEventListener('click', () => {
      if (currentPlayingSongId === null && songsData.length > 0) {
        playSongById(songsData[0].id);
      } else if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (songsData.length === 0) return;
      const currentIdx = songsData.findIndex(s => s.id === currentPlayingSongId);
      const nextIdx = (currentIdx + 1) % songsData.length;
      playSongById(songsData[nextIdx].id);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (songsData.length === 0) return;
      const currentIdx = songsData.findIndex(s => s.id === currentPlayingSongId);
      const prevIdx = (currentIdx - 1 + songsData.length) % songsData.length;
      playSongById(songsData[prevIdx].id);
    });
  }

  // تحديث شريط التقدم والوقت
  audioPlayer.addEventListener('timeupdate', () => {
    if (!isNaN(audioPlayer.duration) && audioPlayer.duration > 0) {
      const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
      if (totalDurationEl) totalDurationEl.textContent = formatTime(audioPlayer.duration);
    }
  });

  audioPlayer.addEventListener('ended', () => {
    if (nextBtn) nextBtn.click();
  });

  if (progressBar) {
    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const duration = audioPlayer.duration;
      if (duration) {
        audioPlayer.currentTime = (clickX / width) * duration;
      }
    });
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // 4. تجهيز نموذج الطلب السريع بالواتساب
  window.fillOrderForm = function(songTitle, categoryName) {
    const occasionSelect = document.getElementById('orderOccasion');
    const notesInput = document.getElementById('orderNotes');
    const orderSection = document.getElementById('orderSection');

    if (occasionSelect) {
      // مطابقة الفئة
      const options = Array.from(occasionSelect.options);
      const match = options.find(opt => opt.value.includes(categoryName) || categoryName.includes(opt.value));
      if (match) {
        occasionSelect.value = match.value;
      } else {
        occasionSelect.value = 'المناسبات الخاصة';
      }
    }
    
    if (notesInput) {
      notesInput.value = `أرغب في طلب تصميم أغنية جديدة ومميزة مثل أغنية: "${songTitle}"`;
    }

    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (whatsappForm) {
    whatsappForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const senderName = document.getElementById('senderName').value.trim();
      const recipientName = document.getElementById('recipientName').value.trim();
      const occasion = document.getElementById('orderOccasion').value;
      const voicePreference = document.getElementById('voicePreference').value;
      const notes = document.getElementById('orderNotes').value.trim();

      const phone = '201271809591'; // رقم الواتساب الخاص بـ الفنان سامح نبيل

      let message = `مرحباً بك أستاذ سامح نبيل 🎵\nأرغب في طلب تصميم أغنية مخصصة من الموقع:\n\n`;
      message += `👤 *اسم صاحب الطلب:* ${senderName}\n`;
      message += `❤️ *اسم الشخص المهدى إليه:* ${recipientName}\n`;
      message += `🎉 *المناسبة:* ${occasion}\n`;
      message += `🎤 *تفضيل الصوت:* ${voicePreference}\n`;
      if (notes) {
        message += `📝 *التفاصيل والكلمات المطلوبة:* ${notes}\n`;
      }
      message += `\nأتمنى التواصل معي لتحديد التفاصيل والبدء في العمل. شكراً لك!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    });
  }

  // تحديث عدد الأغاني في أزرار التصنيفات
  tabButtons.forEach(btn => {
    const cat = btn.getAttribute('data-category');
    const count = cat === 'all' ? songsData.length : songsData.filter(s => s.category === cat).length;
    const currentText = btn.textContent.trim();
    if (!currentText.includes('(')) {
      btn.innerHTML = `${currentText} <span class="tab-badge">${count}</span>`;
    }
  });

  // تهيئة العرض الأولية
  renderSongs('all');
});
