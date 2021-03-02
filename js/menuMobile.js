const btnMenu = document.querySelector('.menuMobile__btnBar');
const btnCloseMenu = document.querySelector('.menu__btnClose');

const menuNav = document.querySelector('.menuMobile__menu');
const bgBlack = document.querySelector('.bgBlack');

btnMenu.addEventListener('click', () => {
    menuNav.classList.add('menuMobile__menu--active');
    bgBlack.classList.add('bgBlack--active');
});

btnCloseMenu.addEventListener('click', () => {
    menuNav.classList.remove('menuMobile__menu--active');
    bgBlack.classList.remove('bgBlack--active');
});

bgBlack.addEventListener('click', () => {
    menuNav.classList.remove('menuMobile__menu--active');
    bgBlack.classList.remove('bgBlack--active');
});