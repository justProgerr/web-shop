let menu = document.getElementById('menu');
let burger = document.getElementById('burger');
let close = document.getElementById('close');
let regIcon = document.getElementById('regIcon');
let cartIcon = document.getElementById('cartIcon');
let headerRight = document.querySelector('.header__right');

burger.addEventListener('click', function(event) {
    event.preventDefault();

    if (menu.style.display == 'none') {
        menu.style.display = 'block';
        regIcon.classList.add('reg-icon--active');
        cartIcon.classList.add('cart-icon--active');
        headerRight.classList.add('header__right-active');

    } else {
        menu.style.display = 'none';
        regIcon.classList.remove('reg-icon--active');
        cartIcon.classList.remove('cart-icon--active');
        headerRight.classList.remove('header__right-active');
    };
});

close.addEventListener('click', function(event) {
    event.preventDefault();

    menu.style.display = 'none';
    regIcon.classList.remove('reg-icon--active');
    cartIcon.classList.remove('cart-icon--active');
    headerRight.classList.remove('header__right-active');
});