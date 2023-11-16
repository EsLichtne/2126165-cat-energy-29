const slider = document.querySelector('.slider');
const button = slider.querySelector('.slider__change-image');

let isActive = false;

button.addEventListener('mousedown', () => {
  isActive = true;
});

slider.addEventListener('mouseup', () => {
  isActive = false;
});

slider.addEventListener('mouseleave', () => {
  isActive = false;
});

button.addEventListener('touchstart', () => {
  isActive = true;
});

slider.addEventListener('touchend', () => {
  isActive = false;
});

slider.addEventListener('touchcancel', () => {
  isActive = false;
});

const renderSlider = (xPosition) => {
  let shift = Math.max(0, Math.min(xPosition, slider.offsetWidth));
  slider.style.setProperty('--cat-width', `${shift}px`);
  button.style.left = `${shift}px`;
};

slider.addEventListener('mousemove', (event) => {
  if (!isActive) {
    return;
  }

  let value = event.pageX;
  value -= slider.getBoundingClientRect().left;
  renderSlider(value);
});

slider.addEventListener('touchmove', (event) => {
  if (!isActive) {
    return;
  }

  let value;

  for (let touch of event.changedTouches) {
    value = touch.pageX;
  }

  value -= slider.getBoundingClientRect().left;
  renderSlider(value);
});
