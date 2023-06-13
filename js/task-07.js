const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.setAttribute('min', '16');
fontSizeControl.setAttribute('max', '96');
fontSizeControl.setAttribute('value', '24');

fontSizeControl.addEventListener('input', event => {
  const fontSize = event.currentTarget.value + 'px';
  text.style.fontSize = fontSize;
});
