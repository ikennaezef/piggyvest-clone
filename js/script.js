// Toogle nav menu with menu button
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('.nav__main');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
})



// Add shadow to header on page scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('shadow', window.scrollY > 0);
})