const links = document.querySelectorAll('.program__link');
const message = document.querySelector('#work-page').content.querySelector('.work-page').cloneNode(true);

const onLinkClick = (event) => {
  event.preventDefault();
  document.body.appendChild(message);
};

const onMessageClick = (event) => {
  if (event.target === message) {
    message.remove();
  }
};

const onDocumentKeydown = (event) => {
  if (event.key.startsWith('Esc')) {
    message.remove();
  }
};

links.forEach((link) => {
  link.addEventListener('click', onLinkClick);
});

message.addEventListener('click', onMessageClick);
document.addEventListener('keydown', onDocumentKeydown);
