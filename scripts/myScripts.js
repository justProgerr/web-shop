let menu = document.querySelector('#main__menu');
let booster = document.querySelector('#booster');
let close = document.querySelector('#close');

booster.addEventListener('click', function(event) {
    event.preventDefault();

    if (menu.style.display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    };
});

close.addEventListener('click', function(event) {
    event.preventDefault();

    menu.style.display = 'none';
});