import '../vendor/pristine/pristine.min.js';

const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__button');
const form = document.querySelector('.modal__form');
const orderButtons = document.querySelectorAll('.order-button');

const message = document.querySelector('#popup-message').content.querySelector('.popup-message').cloneNode(true);

const pristine = new Pristine(form, {
  classTo: 'modal__field-wrapper',
  errorClass: 'modal__field-wrapper--error',
  errorTextParent: 'modal__field-wrapper',
  errorTextClass: 'modal__error'
});

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
});

const clearForm = () => {
  form.count.value = '';
};

const hideModal = () => {
  modal.classList.add('hidden');
  clearForm();
  pristine.reset();
  document.body.append(message);
};

const onDocumentKeydown = (event) => {
  if (event.key.startsWith('Esc')) {
    hideModal();
    message.remove();
  }
};

const onModalClick = (event) => {
  event.preventDefault();

  if (pristine.validate() && event.target === modalButton || pristine.validate() && event.target === modal) {
    hideModal();
    document.body.append(message);
    setTimeout(() => {
      message.remove();
    }, 1500);
  }

  if (event.target === modal) {
    hideModal();
    message.remove();
  }
};

const renderOrder = () => {
  modal.addEventListener('click', onModalClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

export {renderOrder};
