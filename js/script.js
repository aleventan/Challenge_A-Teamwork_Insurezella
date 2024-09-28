
// Boton para subir a tope
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Mostrar el botón cuando el usuario haga scroll
window.onscroll = function() {
if (document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block"; // Mostrar el botón
} else {
    scrollTopBtn.style.display = "none";  // Ocultar el botón
}
};

// Volver al inicio cuando se haga clic en el botón
scrollTopBtn.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Fadein de imagenes
const fadeInElements = document.querySelectorAll('.fade-in');

// Función para verificar si un elemento está en el viewport
function checkViewport() {
fadeInElements.forEach(el => {
    const rect = el.getBoundingClientRect(); // Obtiene la posición del elemento
    if (rect.top < window.innerHeight) {
    el.style.opacity = 1;                 // Hacer visible el elemento
    el.style.transform = 'translateY(0)'; // Revertir el desplazamiento
    }
});
}

// Llamar a la función al hacer scroll
window.addEventListener('scroll', checkViewport);

// Llamar a la función al cargar la página por si ya hay elementos en el viewport
window.addEventListener('DOMContentLoaded', checkViewport);
