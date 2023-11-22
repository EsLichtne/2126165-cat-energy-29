import '../vendor/pristine/pristine.min.js';

const form = document.querySelector('.program-selection__form');
const submitButton = document.querySelector('.program-selection__button');
const message = document.querySelector('#success').content.querySelector('.success').cloneNode(true);

const pristine = new Pristine(form, {
  classTo: 'program-selection__item',
  errorTextParent: 'program-selection__item',
  errorTextClass: 'program-selection__error'
});

const setSubmitDisabled = (flag) => {
  submitButton.disabled = flag;
  submitButton.textContent = flag ? 'Отправляю...' : 'Отправить заявку';
};

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (pristine.validate()) {
    setSubmitDisabled(true);
    document.body.appendChild(message);
  }
});

const clearField = () => {
  form.querySelectorAll('input').forEach((field) => {
    field.value = '';
  });

  form.querySelector('textarea').value = 'Расскажите обо всех повадках кота';

  form.querySelectorAll('.radio-input')[0].checked = true;

  form.querySelectorAll('.checkbox-input').forEach((checkbox) => {
    checkbox.checked = false;
  });
};

const onMessageClick = (event) => {
  if (event.target === message.querySelector('.success__button') || event.target === message) {
    setSubmitDisabled(false);
    message.remove();
    clearField();
  }
};

const onDocumentKeydown = (event) => {
  if (event.key.startsWith('Esc')) {
    message.remove();
    clearField();
  }
};

message.addEventListener('click', onMessageClick);
document.addEventListener('keydown', onDocumentKeydown);
