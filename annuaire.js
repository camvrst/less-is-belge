import './style.scss';

const radioBtn = document.querySelectorAll('.radio-btn');

radioBtn.addEventListener('click', () => {
  radioBtn.classList.toggle('radio-filled');
  alert('toto');
});
