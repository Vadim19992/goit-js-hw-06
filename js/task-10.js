const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
    size += 10;
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

controls.addEventListener('click', event => {
  if (event.target.dataset.create) {
    const amount = document.querySelector('#controls input').value;
    createBoxes(amount);
  } else if (event.target.dataset.destroy) {
    destroyBoxes();
  }
});
