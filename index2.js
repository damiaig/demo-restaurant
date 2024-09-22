function toggleMenu() {
    document.querySelector('.menu-bar-content').classList.toggle('active');
    document.querySelector('.hamburger-menu').classList.toggle('active');
}

function closeMenu() {
    document.querySelector('.menu-bar-content').classList.remove('active');
    document.querySelector('.hamburger-menu').classList.remove('active');
}

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
