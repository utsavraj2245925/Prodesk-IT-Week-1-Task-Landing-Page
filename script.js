const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
