function toggleMenu() {
    document.querySelector('.menu-bar-content').classList.toggle('active');
    document.querySelector('.hamburger-menu').classList.toggle('active');
}

function closeMenu() {
    document.querySelector('.menu-bar-content').classList.remove('active');
    document.querySelector('.hamburger-menu').classList.remove('active');
}