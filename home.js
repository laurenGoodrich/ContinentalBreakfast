const navLinks = document.querySelectorAll('nav ul li a');
const currentPage = window.location.pathname;


navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath.endsWith(currentPage)) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
