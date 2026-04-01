/* ============================================
   FOOD ISLAND — Main JavaScript (Shared)
   Parallax, Navbar, Particles, Scroll Reveals
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Loading Screen ──
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 600);
    });
    // Failsafe: hide loader after 3s regardless
    setTimeout(() => loader.classList.add('hidden'), 3000);
  }

  // ── Navbar Scroll Effect ──
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 60);
    }
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 500);
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // Back to Top click
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Mobile Nav Toggle ──
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Parallax Scrolling ──
  const parallaxElements = [];

  // Collect all parallax backgrounds
  const heroBg = document.getElementById('heroBg');
  if (heroBg) parallaxElements.push({ el: heroBg, speed: 0.4 });

  const pageHeaderBg = document.getElementById('pageHeaderBg');
  if (pageHeaderBg) parallaxElements.push({ el: pageHeaderBg, speed: 0.35 });

  // Generic parallax sections
  document.querySelectorAll('.parallax-bg').forEach(bg => {
    if (bg.id !== 'heroBg' && bg.id !== 'pageHeaderBg') {
      parallaxElements.push({ el: bg, speed: 0.3 });
    }
  });

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    parallaxElements.forEach(({ el, speed }) => {
      const parent = el.parentElement;
      const rect = parent.getBoundingClientRect();
      const parentTop = rect.top + scrollY;
      const parentHeight = rect.height;

      // Only process if section is near viewport
      if (scrollY + windowHeight > parentTop && scrollY < parentTop + parentHeight) {
        const offset = (scrollY - parentTop) * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax(); // Initial call
  }

  // ── Scroll Reveal Animations ──
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger animation for siblings
          const parent = entry.target.parentElement;
          const siblings = parent.querySelectorAll('.reveal, .reveal-left, .reveal-right');
          let delay = 0;

          siblings.forEach(sib => {
            if (sib === entry.target || entry.target.contains(sib)) {
              return;
            }
          });

          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el, index) => {
      // Add stagger delays to sibling reveal elements
      const parent = el.parentElement;
      const revealSiblings = Array.from(parent.children).filter(
        child => child.classList.contains('reveal') ||
                 child.classList.contains('reveal-left') ||
                 child.classList.contains('reveal-right')
      );
      const siblingIndex = revealSiblings.indexOf(el);
      if (siblingIndex > 0) {
        el.style.transitionDelay = `${siblingIndex * 100}ms`;
      }

      revealObserver.observe(el);
    });
  }

  // ── Floating Particles ──
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.width = `${2 + Math.random() * 4}px`;
      particle.style.height = particle.style.width;
      particle.style.animationDuration = `${8 + Math.random() * 12}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.opacity = Math.random() * 0.4;
      particlesContainer.appendChild(particle);
    }
  }

  // ── Smooth Anchor Scrolling ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ── Counter Animation for Hero Stats ──
  function animateCounter(elementId, target, suffix = '') {
    const el = document.getElementById(elementId);
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let current = 0;
          const increment = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = current + suffix;
          }, 30);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(el);
  }

  animateCounter('menuCount', 200, '+');
  animateCounter('yearsCount', 5, '+');

});
