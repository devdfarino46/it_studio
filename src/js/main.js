let openMenuBtn = document.querySelector('.nav__open-btn');
let menu = document.querySelector('.nav__container');


let openedMenu = false
openMenuBtn.addEventListener('click', () => {
    if (openedMenu == false) {
        menu.classList.add('nav__container--opened');
        openMenuBtn.classList.add('nav__open-btn--opened');
        openedMenu = true;
    } else {
        menu.classList.remove('nav__container--opened');
        openMenuBtn.classList.remove('nav__open-btn--opened');
        openedMenu = false;
    }
});


let nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
        nav.classList.add('nav--scrolled');
    } else {
        nav.classList.remove('nav--scrolled');
    }
});