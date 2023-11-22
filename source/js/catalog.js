const container = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');
const showCard = document.querySelector('.showing');
const showButton = document.querySelector('.showing__button');

const fragment = document.createDocumentFragment();

showButton.addEventListener('click', (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    const cloneCard = card.cloneNode(true);
    fragment.append(cloneCard);
  });
  container.append(fragment);
  showCard.remove();
});

