// @ts-check
/// <reference lib="dom" />  
console.log(`ABOUT PAGE`);
// Cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    document.addEventListener('mousemove', e => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });
    (function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    })();

    // Nav scroll
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => observer.observe(el));