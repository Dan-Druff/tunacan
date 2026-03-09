// @ts-check
/// <reference lib="dom" />  
console.log(`HOME PAGE`);
 // Custom cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });
    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    // Animated counters
    function animateCount(el, target, suffix = '') {
      const duration = 1800;
      const start = performance.now();
      const formatted = target >= 1000;
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = Math.floor(eased * target);
        el.textContent = formatted ? (val >= 1000 ? Math.floor(val/1000) + 'k+' : val + '') : val + (progress >= 1 ? '+' : '');
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const statObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const nums = entry.target.querySelectorAll('[data-target]');
          nums.forEach(n => animateCount(n, +n.dataset.target));
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('.about-stats').forEach(el => statObserver.observe(el));

    // Nav scroll effect
    const nav = document.querySelector('nav');
    globalThis.addEventListener('scroll', () => {
      nav.style.backdropFilter = window.scrollY > 40 ? 'blur(10px)' : '';
      nav.style.background = window.scrollY > 40 ? 'rgba(245,237,216,0.85)' : '';
    });