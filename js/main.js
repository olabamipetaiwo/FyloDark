const iconLine = document.getElementsByClassName('header__icon__line')[0];
const hamburger = document.getElementsByClassName('header__icon')[0];
const navigation = document.getElementsByClassName('header__nav__list')[0];

hamburger.addEventListener('click', () => {
    iconLine.classList.toggle('close');
    navigation.classList.toggle('show');
});

