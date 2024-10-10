const informacion = {
    "1": [
        { texto: "Parque Tres de febrero, cuadro 1", imagen: "image(1).png" },
        { texto: "Jardin japones, cuadro 2", imagen: "ruta_imagen2_opcion1.jpg" },
        { texto: "Texto para opción 1, cuadro 3", imagen: "ruta_imagen3_opcion1.jpg" },
        { texto: "Texto para opción 1, cuadro 4", imagen: "ruta_imagen4_opcion1.jpg" },
        { texto: "Texto para opción 1, cuadro 5", imagen: "ruta_imagen5_opcion1.jpg" },
        { texto: "Texto para opción 1, cuadro 6", imagen: "ruta_imagen6_opcion1.jpg" }
    ],
    "2": [
        { texto: "Texto para opción 2, cuadro 1", imagen: "ruta_imagen1_opcion2.jpg" },
        { texto: "Texto para opción 2, cuadro 2", imagen: "ruta_imagen2_opcion2.jpg" },
        { texto: "Texto para opción 2, cuadro 3", imagen: "ruta_imagen3_opcion2.jpg" },
        { texto: "Texto para opción 2, cuadro 4", imagen: "ruta_imagen4_opcion2.jpg" },
        { texto: "Texto para opción 2, cuadro 5", imagen: "ruta_imagen5_opcion2.jpg" },
        { texto: "Texto para opción 2, cuadro 6", imagen: "ruta_imagen6_opcion2.jpg" }
    ],
    
    // Agrega más opciones según sea necesario
};

// Función para obtener el valor del parámetro de la URL
function obtenerParametro(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

// Función para actualizar los cuadros en base a la opción seleccionada
function actualizarContenido(opcion) {
    const datos = informacion[opcion];

    if (datos) {
        datos.forEach((dato, index) => {
            // Actualiza el texto y la imagen de cada cuadro
            const imagen = document.getElementById(`imagen${index + 1}`);
            const texto = document.getElementById(`texto${index + 1}`);
            
            imagen.src = dato.imagen; // Establece la URL de la imagen
            texto.textContent = dato.texto; // Establece el texto
        });
    } else {
        console.error("Opción no válida o no encontrada en la información.");
    }
}

// Obtén la opción seleccionada de la URL
const opcionSeleccionada = obtenerParametro('opcion');

// Actualiza el contenido según la opción seleccionada
if (opcionSeleccionada) {
    actualizarContenido(opcionSeleccionada);
}
</script>
