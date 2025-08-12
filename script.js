// Navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Keyboard accessible toggle for navbar menu
menuToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    navLinks.classList.toggle('active');
  }
});

// Dark mode toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load theme preference if saved
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggleBtn.textContent = '☀️';
} else {
  themeToggleBtn.textContent = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    themeToggleBtn.textContent = '☀️';  // sun icon when dark mode is active
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleBtn.textContent = '🌙';  // moon icon when light mode is active
    localStorage.setItem('theme', 'light');
  }
});
