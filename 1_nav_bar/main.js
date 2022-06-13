const toogleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const links = document.querySelector('.navbar__links');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    links.classList.toggle('active');
});