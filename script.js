let menuOpen = false;
let isMobile = window.innerWidth <= 750;

function toggleMenu() {
    if (isMobile) {
        menuOpen = !menuOpen;
        const header = document.querySelector('.header');
        const logo = document.querySelector('.logo');
        const menuIcon = document.querySelector('.menu-icon');
        const menuContainer = document.querySelector('.menu-container');

        header.classList.toggle('menu-open', menuOpen);
        logo.classList.toggle('logo-margin', menuOpen);
        menuIcon.classList.toggle('icon-margin', menuOpen);
        menuContainer.classList.toggle('hidden', !menuOpen);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (isMobile) {
            toggleMenu();
        }
    }
}

window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 750;
    if (!isMobile && menuOpen) {
        toggleMenu();
    }
});