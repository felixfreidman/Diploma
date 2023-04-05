const menuToggler = document.getElementById('MenuToggler');
const headerExpanded = document.querySelector('.header--extended');
console.log(menuToggler);

function manipulateMenu() {
    console.log('clicked');
    menuToggler.classList.toggle('header__menu--opened');
    headerExpanded.classList.toggle('header--opened');
}

function handleClickOutsideBox(event) {
    if (!menuToggler.contains(event.target) && menuToggler.classList.contains('header__menu--opened')) {
        menuToggler.classList.toggle('header__menu--opened');
        headerExpanded.classList.toggle('header--opened');
    }
}

menuToggler.addEventListener('click', manipulateMenu);

document.addEventListener('click', handleClickOutsideBox);