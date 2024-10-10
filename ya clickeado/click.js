const imagenesInfo = {
    '1': {
        src: 'descarga (1).jfif',
        titulo: 'bowling',
        descripcion: 'Esta es la descripción de la Imagen 1.'
    },
    '2': {
        src: 'descarga (2).jfif',
        titulo: "scaperoom",
        descripcion: 'Esta es la descripción de la Imagen 2.'
    },
    '3': {
        src: 'descarga (3).jfif',
        titulo: 'Título Imagen 3',
        descripcion: 'Esta es la descripción de la Imagen 3.'
    },
    '4': {
        src: 'descarga (4).jfif',
        titulo: 'Título Imagen 4',
        descripcion: 'Esta es la descripción de la Imagen 4.'
    },
    '5': {
        src: 'descarga (5).jfif',
        titulo: 'Título Imagen 5',
        descripcion: 'Esta es la descripción de la Imagen 5.'
    },
    '6': {
        src: 'descarga (6).jfif',
        titulo: 'Título Imagen 6',
        descripcion: 'Esta es la descripción de la Imagen 6.'
    }
};

// Seleccionamos todas las imágenes que pueden ser clickeadas
const imagenes = document.querySelectorAll('.imagen-click');

// Añadimos un listener para cada imagen
imagenes.forEach(imagen => {
    imagen.addEventListener('click', function() {
        // Obtenemos el data-id de la imagen clickeada
        const id = this.getAttribute('data-id');
        
        // Cambiamos la imagen principal, el título y la descripción basados en el ID
        const info = imagenesInfo[id];
        document.getElementById('imagen-principal').src = info.src;
        document.getElementById('titulo').textContent = info.titulo;
        document.getElementById('descripcion').textContent = info.descripcion;
    });
});
</script>
</body>
</html>