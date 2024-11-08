// Variables para el manejo del scroll
let lastScroll = 0;
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const menuToggle = document.createElement('div');

// Configuración del menú 
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '☰';
const nav = document.querySelector('nav');
nav.appendChild(menuToggle);

// Event listener para el menú 
menuToggle.addEventListener('click', () => {
    const ul = nav.querySelector('ul');
    ul.classList.toggle('active');
});

// Función para manejar el scroll
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Manejo del header
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScroll = currentScroll;

    // Animación de las secciones
    sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight * 0.7;
        if (currentScroll > sectionTop) {
            section.classList.add('visible');
        }
    });
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        const ul = nav.querySelector('ul');
        ul.classList.remove('active');

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Animación inicial de las secciones visibles
window.addEventListener('load', () => {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.7) {
            section.classList.add('visible');
        }
    });
});
