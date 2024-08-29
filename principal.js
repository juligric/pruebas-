document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("rect1").addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:5501/prguntamasopciones.html"; // Cambia la URL según sea necesario
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
        carrusel.classList.toggle('swiper-container-visible');
        if (carrusel.classList.contains('swiper-container-visible')) {
            swiper.update();}
        }
        document.querySelectorAll('.categories button').forEach(button => {
            button.addEventListener('click', mostrarCarrusel);
        });
    });