// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    const topNavbar = document.getElementById('top-navbar');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        mobileMenu.classList.toggle('show');
    });
});
