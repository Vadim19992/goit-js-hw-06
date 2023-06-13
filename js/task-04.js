let counterValue = 0;
const valueEl = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
  counterValue--;
  valueEl.textContent = counterValue;
}

function increment() {
  counterValue++;
  valueEl.textContent = counterValue;
}
