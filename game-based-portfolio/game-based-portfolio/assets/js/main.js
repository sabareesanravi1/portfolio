/* ============================================================
   SABAREESAN RAVI — Sci-Fi Space Shooter Portfolio
   assets/js/main.js
   ============================================================ */

/* ── 1. CUSTOM CURSOR ── */
(function initCursor() {
  const cur  = document.getElementById('cur');
  const curR = document.getElementById('curR');
  if (!cur || !curR) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  // Ring follows with slight lag
  (function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    curR.style.left = rx + 'px';
    curR.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  // Cursor glow colour on interactive elements
  const interactiveSelector = 'a, button, .btn, .sk-card, .pc, .ac';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      cur.style.background   = '#ff6b00';
      cur.style.transform    = 'translate(-50%,-50%) scale(2.2)';
      cur.style.boxShadow    = '0 0 8px rgba(255,107,0,.9), 0 0 24px rgba(255,107,0,.5)';
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      cur.style.background   = '#00e5ff';
      cur.style.transform    = 'translate(-50%,-50%) scale(1)';
      cur.style.boxShadow    = '0 0 8px rgba(0,229,255,.9), 0 0 24px rgba(0,229,255,.5), 0 0 60px rgba(0,229,255,.15)';
    }
  });
})();


/* ── 2. STAR FIELD ── */
(function initStars() {
  const canvas = document.getElementById('sc');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [];

  function createStars() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;

    stars = Array.from({ length: 240 }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.4 + 0.2,
      vx: (Math.random() - 0.5) * 0.10,
      vy: (Math.random() - 0.5) * 0.10,
      a:  Math.random(),
      va: (Math.random() - 0.5) * 0.004,
      // 15 % orange accent stars, rest cyan
      color: Math.random() < 0.15
        ? 'rgba(255,107,0,'
        : 'rgba(0,229,255,',
    }));
  }

  function drawFrame() {
    ctx.clearRect(0, 0, W, H);

    // Stars
    stars.forEach((s) => {
      s.x += s.vx;
      s.y += s.vy;
      s.a  = Math.max(0.05, Math.min(1, s.a + s.va));
      if (s.x < 0) s.x = W;
      if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H;
      if (s.y > H) s.y = 0;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color + s.a + ')';
      ctx.fill();
    });

    // Occasional shooting star
    if (Math.random() < 0.004) {
      const sx  = Math.random() * W;
      const sy  = Math.random() * (H * 0.5);
      const len = 80 + Math.random() * 120;
      const g   = ctx.createLinearGradient(sx, sy, sx + len, sy + len * 0.3);
      g.addColorStop(0,   'rgba(0,229,255,0)');
      g.addColorStop(0.5, 'rgba(0,229,255,.85)');
      g.addColorStop(1,   'rgba(0,229,255,0)');
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx + len, sy + len * 0.3);
      ctx.strokeStyle = g;
      ctx.lineWidth   = 1.5;
      ctx.stroke();
    }

    requestAnimationFrame(drawFrame);
  }

  createStars();
  drawFrame();
  window.addEventListener('resize', createStars);
})();


/* ── 3. HUD RING PARALLAX ── */
(function initHudParallax() {
  const hud = document.querySelector('.hud');
  if (!hud) return;

  document.addEventListener('mousemove', (e) => {
    const xd = (e.clientX / window.innerWidth  - 0.5) * 16;
    const yd = (e.clientY / window.innerHeight - 0.5) * 16;
    hud.style.transform = `translateY(calc(-50% + ${yd}px)) translateX(${xd}px)`;
  });
})();


/* ── 4. SCROLL-TRIGGERED REVEAL ── */
(function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.sk-card, .pc, .ac, .exp-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'none';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(26px)';
    el.style.transition = `opacity .50s ${i * 0.065}s ease, transform .50s ${i * 0.065}s ease`;
    observer.observe(el);
  });
})();


/* ── 5. ACTIVE NAV LINK HIGHLIGHT ── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          link.style.color      = '';
          link.style.textShadow = '';
        });
        const active = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );
        if (active) {
          active.style.color      = '#00e5ff';
          active.style.textShadow = '0 0 8px rgba(0,229,255,.9), 0 0 24px rgba(0,229,255,.5)';
        }
      }
    });
  }, { threshold: 0.4 });

  sections.forEach((s) => observer.observe(s));
})();
