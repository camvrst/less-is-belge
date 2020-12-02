import './style.scss';

const radioBtns = document.querySelectorAll('.radio-btn');

for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].addEventListener('click', () => {
    radioBtns[i].classList.toggle('radio-filled');
    console.log('toto');
  });
}
