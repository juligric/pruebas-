document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Evita que el enlace redirija
      const submenu = this.nextElementSibling;
      
      // Si el submenú está visible, lo oculta, si no, lo muestra
      submenu.classList.toggle('show-submenu');
    });
  });

  document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;

    // Obtén las burbujas y la imagen
    const burbujas = document.querySelectorAll('.burbuja');
    const planify = document.querySelector('.planify');

    // Aplica la clase 'hidden' al hacer scroll más de 50px
    if (scrollPosition > 50) {
        burbujas.forEach(b => b.classList.add('hidden'));
        planify.classList.add('hidden');
    } else {
        burbujas.forEach(b => b.classList.remove('hidden'));
        planify.classList.remove('hidden');
    }
});
