document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.querySelector('nav .hidden.md\\:flex');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
    });
});
