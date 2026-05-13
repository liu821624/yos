// Mobile nav
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Auto active menu
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach(link => {
  const href = link.getAttribute('href');
  link.classList.toggle('active', href === current);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const t = document.querySelector(anchor.getAttribute('href'));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
