// Wait for the HTML elements to load before running the code
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the active classes when the hamburger button is clicked
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
        menuToggle.classList.toggle('open');
    });
});
