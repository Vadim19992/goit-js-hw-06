const inputEl = document.querySelector('#validation-input');

function handleInputBlur() {
  const dataLength = Number(inputEl.dataset.length);
  const inputValue = inputEl.value;

  if (inputValue.length === dataLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}

inputEl.addEventListener('blur', handleInputBlur);
