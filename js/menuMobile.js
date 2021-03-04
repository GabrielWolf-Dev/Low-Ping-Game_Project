const btnMenu = document.querySelector('.menuMobile__btnBar');
const btnCloseMenu = document.querySelector('.menu__btnClose');
const linksMobile = document.querySelectorAll('[data-linksMobile]');

const menuNav = document.querySelector('.menuMobile__menu');
const homeLink = document.querySelector('.menu__items--home');
const bgBlack = document.querySelector('.bgBlack');

const linksMenu = {
    about: document.getElementById('about'),
    services: document.getElementById('services'),
    contact: document.getElementById('contact')
};

const { about, services, contact } = linksMenu;


menuNav.classList.add('disable');


btnMenu.addEventListener('click', () => {
    menuNav.classList.remove('disable');

    setTimeout(() => {
        menuNav.classList.add('menuMobile__menu--active');
        bgBlack.classList.add('bgBlack--active');
        btnCloseMenu.focus();

        linksMobile[5].addEventListener('focusout', focusOnlyMenu);
        linkActive(about, services, contact);
    }, 100);
});

function closeMenu() {
    menuNav.classList.remove('menuMobile__menu--active');
    bgBlack.classList.remove('bgBlack--active');
    
    removeEventsListeners();
    btnMenu.focus();
        
    setTimeout(() => {
        menuNav.classList.add('disable');
    }, 500);
} 

btnCloseMenu.addEventListener('click', () => {
    closeMenu();  
});

menuNav.addEventListener('keyup', (event) => {
    if(event.keyCode === 27){
        closeMenu();
    }
});

bgBlack.addEventListener('click', () => {
    closeMenu();
});

function linkActive(...links) {
    links.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
       });
    });
 }


function focusOnlyMenu() {
    linksMobile[0].focus();
}

function removeEventsListeners() {
    linksMobile[5].removeEventListener('focusout', focusOnlyMenu, false);
}