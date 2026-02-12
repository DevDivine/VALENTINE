// script.js — dear dea page transitions & romantic interactions

(function() {
  "use strict";

  // ----- PAGES -----
  const pages = {
    1: document.getElementById('page1'),
    2: document.getElementById('page2'),
    3: document.getElementById('page3'),
    4: document.getElementById('page4'),
    5: document.getElementById('page5')
  };

  const dots = document.querySelectorAll('.dot');

  // ----- AUDIO & VIDEO -----
  const bgMusic = document.getElementById("bgMusic");
  const video = document.getElementById("myVideo");
  if (bgMusic) {
  bgMusic.volume = 0.3;   // 30% volume (soft romantic)
}

  // ----- showPage: switches page + updates dots -----
  function showPage(pageNumber) {

    // hide all pages
    Object.values(pages).forEach(p => {
      if (p) p.classList.remove('active');
    });

    // show selected page
    if (pages[pageNumber]) {
      pages[pageNumber].classList.add('active');
    }

    // update dots
    dots.forEach(dot => {
      const dotPage = parseInt(dot.getAttribute('data-page'), 10);
      dot.classList.toggle('active-dot', dotPage === pageNumber);
    });
  }

  // ----- DOT NAVIGATION -----
  dots.forEach(dot => {
    dot.addEventListener('click', function(e) {
      e.stopPropagation();
      const pageNum = parseInt(this.getAttribute('data-page'), 10);
      showPage(pageNum);
    });
  });

  // ----- PAGE 1: Open Envelope -----
  const openBtn = document.getElementById('openEnvelopeBtn');
  if (openBtn) {
    openBtn.addEventListener('click', function(e) {
      e.stopPropagation();

      showPage(2);

      // Start background music
      if (bgMusic) {
        bgMusic.play().catch(() => {});
      }
    });
  }

  // ----- PAGE 2 -> PAGE 3 -----
  const monthsaryBtn = document.getElementById('monthsaryClickBtn');
  if (monthsaryBtn) {
    monthsaryBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showPage(3);
    });
  }

  // ----- PAGE 3 -> PAGE 4 -----
  const loveNextBtn = document.getElementById('loveNextBtn');
  if (loveNextBtn) {
    loveNextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showPage(4);
    });
  }

  // ----- PAGE 4 -> PAGE 5 -----
  const letterNextBtn = document.getElementById('letterNextBtn');
  if (letterNextBtn) {
    letterNextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showPage(5);
    });
  }

  // ----- VIDEO: Pause music when video plays -----
  if (video && bgMusic) {

    video.addEventListener("play", function() {
      bgMusic.pause();
    });

    video.addEventListener("ended", function() {
      bgMusic.play().catch(() => {});
    });
  }

  // ----- RESTART BUTTON -----
  const restartBtn = document.getElementById('restartButton');
  if (restartBtn) {
    restartBtn.addEventListener('click', function(e) {
      e.stopPropagation();

      // Stop music
      if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      }

      // Stop video
      if (video) {
        video.pause();
        video.currentTime = 0;
      }

      showPage(1);
    });
  }

  // ----- Envelope heart click animation -----
  const envelope = document.querySelector('.envelope');
  if (envelope) {
    envelope.addEventListener('click', function() {
      const heart = document.querySelector('.heart-seal');
      if (heart) {
        heart.style.transform = 'translateX(-50%) scale(1.4)';
        setTimeout(() => {
          heart.style.transform = 'translateX(-50%) scale(1)';
        }, 200);
      }
    });
  }

  // ----- INITIAL LOAD -----
  showPage(1);

})();
