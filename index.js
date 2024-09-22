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

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".call").addEventListener("click", function() {
        window.location.href = "tel:+2348113540848";
    });

    document.querySelector(".mail").addEventListener("click", function() {
        window.location.href = "mailto:damilolaaig@gmail.com";
    });

    document.querySelector(".map").addEventListener("click", function() {
        const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9895025578917!2d7.495764475200375!3d8.973112091086001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0db128431bd9%3A0xbc3654dd83fc2506!2sAbuja%20900110%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1727005730560!5m2!1sen!2sng";
        window.open(mapUrl, '_blank');
    });

// Select the image by its class and add an event listener
document.querySelector(".logo").addEventListener("click", function() {
    // Reload the page when the image is clicked
    location.reload();
});
});

