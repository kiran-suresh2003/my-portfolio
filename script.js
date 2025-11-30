// ===== Theme Toggle =====
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Contact Form (Demo) =====
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out, Kiran will get back to you soon!');
  form.reset();
});