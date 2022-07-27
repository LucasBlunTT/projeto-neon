const btndropDown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');

function openDropDown(event) {
    event.preventDefault();

    dropdown.classList.toggle('active');

}

btndropDown.addEventListener('click', openDropDown);
dropdown.addEventListener('mouseleave', openDropDown);

const header = document.getElementById('js-header');

function fixedMenu() {
    if (window.pageYOffset > 80) {
        header.classList.add('fixed-menu');
    } else {
        header.classList.remove('fixed-menu');
    }

}

document.addEventListener('scroll', fixedMenu);

const btnMenu = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay');

function openMenuMobile() {
    document.documentElement.classList.add('menu-opened');
}

function closeMenuMobile() {
    document.documentElement.classList.remove('menu-opened');
}

btnMenu.addEventListener('click', openMenuMobile);

overlayMenu.addEventListener('click', closeMenuMobile);