// ── Language Toggle ──
function setLang(lang) {
  document.body.classList.remove('lang-ja', 'lang-en');
  document.body.classList.add('lang-' + lang);
  document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem('lab-lang', lang);
}
document.querySelectorAll('.lang-toggle button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
setLang(localStorage.getItem('lab-lang') || 'ja');

// ── Active Nav Link ──
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === currentPage || (currentPage === '' && href === 'index.html')) a.classList.add('active');
});

// ── Hamburger ──
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── Scroll Reveal ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.news-item, .research-card, .member-card, .pub-item').forEach(el => revealObserver.observe(el));

// ── Publication Filter ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.pub-item').forEach(item => {
      item.style.display = (f === 'all' || item.dataset.type === f) ? '' : 'none';
    });
  });
});

// ── Portal Auth ──
// パスワードはここで設定（将来はサーバーサイドに移行）
const PORTAL_PASSWORD = 'lab2024';

const loginForm     = document.getElementById('portal-login-form');
const portalContent = document.querySelector('.portal-content');
const loginError    = document.querySelector('.login-error');
const logoutBtn     = document.getElementById('portal-logout');

function checkPortalSession() {
  if (sessionStorage.getItem('portal-auth') === 'ok') showPortal();
}
function showPortal() {
  document.querySelector('.portal-login-wrap')?.style && (document.querySelector('.portal-login-wrap').style.display = 'none');
  if (portalContent) portalContent.style.display = 'block';
}

loginForm?.addEventListener('submit', e => {
  e.preventDefault();
  const pw = document.getElementById('portal-pw').value;
  if (pw === PORTAL_PASSWORD) {
    sessionStorage.setItem('portal-auth', 'ok');
    showPortal();
  } else {
    if (loginError) { loginError.style.display = 'block'; loginError.textContent = 'パスワードが正しくありません / Incorrect password'; }
  }
});

logoutBtn?.addEventListener('click', () => {
  sessionStorage.removeItem('portal-auth');
  location.reload();
});

checkPortalSession();
