const ipad = window.matchMedia('screen and (min-width: 767px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.burger_button');

ipad.addListener(validation);
burgerButton.addEventListener('click', hideShow);

function validation(e) {
  e.matches
    ? burgerButton.addEventListener('click', hideShow)
    : burgerButton.removeEventListener('click', hideShow);
}

function hideShow() {
  menu.classList.contains('is_active')
    ? menu.classList.remove('is_active')
    : menu.classList.add('is_active');
}
