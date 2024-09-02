document.addEventListener("DOMContentLoaded", function() {
    // Redirección al hacer clic en el rectángulo
    const rect1 = document.getElementById("rect1");
    if (rect1) {
        rect1.addEventListener("click", function() {
            window.location.href = "http://127.0.0.1:5501/prguntamasopciones.html"; // Cambia la URL según sea necesario
        });
    }

    // Configuración del carrusel Swiper
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 5,           
        spaceBetween: 30,           
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,                 
        loopAdditionalSlides: 5,    
        freeMode: false,            
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

    // Función para mostrar/ocultar el carrusel al hacer clic en un botón de categorías
    function toggleCarrusel() {
        const carrusel = document.querySelector('.swiper-container');
        carrusel.classList.toggle('swiper-container-visible');
        if (carrusel.classList.contains('swiper-container-visible')) {
            swiper.update(); // Actualiza Swiper para asegurar un funcionamiento correcto
        }
    }

    // Asigna la función toggleCarrusel a todos los botones de categorías
    document.querySelectorAll('.categories button').forEach(button => {
        button.addEventListener('click', toggleCarrusel);
    });
});
