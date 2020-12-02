import './style.scss';
// import $ from 'jquery';
// import axios from 'axios';

// ***** NAV BAR ANIMATION ON CLICK RESPONSIVE ***** //

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('toggle');
});

const radioBtn = document.querySelectorAll('.radio-btn');

radioBtn.addEventListener('click', () => {
  radioBtn.classList.toggle('radio-filled');
});
