let menuIcon = document.querySelector(".menu-icon");
const mobileNav = document.querySelector('.header__site-navigation');

menuIcon.onclick = function() {
    menuIcon.classList.toggle("menu-icon-active");
    mobileNav.classList.toggle('header__site-navigation--active');
}