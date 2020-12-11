import './style.scss';
import $ from 'jquery';
import { header, footer } from './src/view/view';
// import axios from 'axios';

/* INCLUDE HEADER AND FOOTER */
const headerHTML = document.querySelector('header');
const footerHTML = document.querySelector('footer.footer');
console.log(headerHTML);

headerHTML.innerHTML = header;
footerHTML.innerHTML = footer;

// ***** NAV BAR ANIMATION ON CLICK RESPONSIVE ***** //

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('toggle');
});
