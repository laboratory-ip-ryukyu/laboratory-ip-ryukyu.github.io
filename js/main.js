// ── Language Toggle ──
const body = document.body;
const langBtns = document.querySelectorAll('.lang-toggle button');

function setLang(lang) {
  body.classList.remove('lang-ja', 'lang-en');
  body.classList.add('lang-' + lang);
  langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem('lab-lang', lang);
}

langBtns.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

const savedLang = localStorage.getItem('lab-lang') || 'ja';
setLang(savedLang);

// ── Hamburger Menu ──
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));

// Close on link click
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── Publication Filter ──
const filterBtns = document.querySelectorAll('.filter-btn');
const pubItems = document.querySelectorAll('.pub-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    pubItems.forEach(item => {
      if (filter === 'all' || item.dataset.type === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ── Smooth Active Nav ──
const sections = document.querySelectorAll('section[id], div[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + e.target.id ? 'var(--navy)' : '';
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));

// ── Scroll reveal (lightweight) ──
const revealEls = document.querySelectorAll('.research-card, .member-card, .pub-item, .news-item');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// ── Portal cards (demo) ──
document.querySelectorAll('.portal-card[data-url]').forEach(card => {
  card.addEventListener('click', () => {
    alert('🔒 このリンクは内部メンバー専用です。\nThis link is for lab members only.');
  });
});
