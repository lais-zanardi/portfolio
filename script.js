document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) { // Rolagem para baixo
    window.scrollBy(0, 100 * window.innerHeight / 100); // Rola 100vh
  } else { // Rolagem para cima
    window.scrollBy(0, -100 * window.innerHeight / 100); // Rola 100vh para cima
  }
  event.preventDefault(); // Impedir scroll padrão
});