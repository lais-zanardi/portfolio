document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) { // Rolagem para baixo
    window.scrollBy(0, 100 * window.innerHeight / 100); // Rola 100vh
  } else { // Rolagem para cima
    window.scrollBy(0, -100 * window.innerHeight / 100); // Rola 100vh para cima
  }
  event.preventDefault(); // Impedir scroll padrão
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // impede que o clique no botão feche o menu
  menu.classList.toggle('active');
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
  // Se o menu estiver aberto e o clique for fora do menu e do botão
  if (
    menu.classList.contains('active') &&
    !menu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    menu.classList.remove('active');
  }
});