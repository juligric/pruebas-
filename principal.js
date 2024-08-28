document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("rect1").addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:5501/prguntamasopciones.html"; // Cambia la URL según sea necesario
    });
});

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 5, // Muestra 5 imágenes a la vez
    spaceBetween: 10, // Espacio entre imágenes
    loop: true, // Habilita el loop infinito
    navigation: {
        nextEl: '.swiper-button-next', // Flecha siguiente
        prevEl: '.swiper-button-prev', // Flecha anterior
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    }
});


function mostrarCarrusel() {
    const carrusel = document.querySelector('.swiper-container');


    carrusel.classList.toggle('swiper-container-hidden');
    carrusel.classList.toggle('swiper-container-visible');


    if (carrusel.classList.contains('swiper-container-visible')) {
        swiper.update();
    }
}