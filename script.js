const menuActive = document.querySelector('.burgerMenu');
const burger = document.querySelector('.burgerButton');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
