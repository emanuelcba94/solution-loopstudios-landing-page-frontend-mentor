const openMenu = document.querySelector('#header-open-menu');
const mobileMenu = document.querySelector('#header-mobile-menu');
const closeMenu = document.querySelector('#header-close-menu');

openMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('disabled');
})

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('disabled');
})