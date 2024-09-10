function toggleMenu() {
    const menuContent = document.querySelector('.menu-bar-content');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeButton = document.querySelector('.close-menu');

    menuContent.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');

    // Ensure the close button is shown when the hamburger menu is clicked
    if (menuContent.classList.contains('active')) {
        closeButton.style.display = 'block';
    } else {
        closeButton.style.display = 'none';
    }
}

function closeMenu() {
    const menuContent = document.querySelector('.menu-bar-content');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeButton = document.querySelector('.close-menu');

    menuContent.classList.remove('active');
    hamburgerMenu.classList.remove('active');
    
    // Hide the close button when the menu is closed
    closeButton.style.display = 'none';
}

// Close the menu when any link with the class 'head1' is clicked
document.querySelectorAll('.head1').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});