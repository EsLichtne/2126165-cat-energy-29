const links = document.querySelectorAll('.current-page');

links.forEach((link) => {
  link.setAttribute('title', 'Вы уже здесь');
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});
