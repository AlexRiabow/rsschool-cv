let BurgerButton = document.querySelector('.burger-menu');
let MobMenu = document.querySelector('.nav-menu');

BurgerButton.addEventListener('click', function() {
    MobMenu.classList.toggle('nav-menu-active');
    BurgerButton.classList.toggle('burger-menu-closed');
});