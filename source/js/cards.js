import {renderOrder} from './modal.js';

const container = document.querySelector('.cards');
const template = document.querySelector('.card').cloneNode(true);
const cards = document.querySelectorAll('.card');
const showButton = document.querySelector('.showing__button');
const showCard = document.querySelector('.showing');
const imageLinks = document.querySelectorAll('.card__image-link');

const renderLinks = () => {
  imageLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
};

const renderCards = (cards, step = 3) => {
  const currentCards = [...cards];

  const onShowButtonClick = (event) => {
    event.preventDefault();

    container.append(...currentCards.splice(0, step));
    showCard.classList.toggle('hidden', !currentCards.length);
    container.insertAdjacentElement('beforeend', showCard);

    renderLinks();
    renderOrder();
  };

  container.replaceChildren();

  showButton.addEventListener('click', onShowButtonClick);
  showButton.click();
}

renderCards(cards);
