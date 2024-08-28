document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("rect1").addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:5501/prguntamasopciones.html"; // Cambia la URL según sea necesario
    });
});

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 5,            // Muestra 5 imágenes a la vez
    spaceBetween: 30,            // Espacio entre las imágenes en píxeles
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,                  // Activa el loop para que el carrusel sea infinito
    freeMode: false              // Desactiva el modo libre
});
