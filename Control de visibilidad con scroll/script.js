// Función que se ejecuta cuando se hace scroll en la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    // Mostrar el botón si se ha hecho scroll más de 20px
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Función para volver al principio de la página
function topFunction() {
    // Para Chrome, Firefox, IE y Opera
    document.documentElement.scrollTop = 0;
}
