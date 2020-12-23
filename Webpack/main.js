import './style.scss';
import $ from 'jquery';
import { header, footer } from './src/view/view';
import {contentarticle} from './src/view/article';
import {contentartgeneraux} from './src/view/articles-generaux';
import {contfiches} from './src/view/fichespratiques';
// import axios from 'axios';

/* INCLUDE HEADER AND FOOTER */
const headerHTML = document.querySelector('header');
const footerHTML = document.querySelector('footer.footer');

headerHTML.innerHTML = header;
footerHTML.innerHTML = footer;

// ***** NAV BAR ANIMATION ON CLICK RESPONSIVE ***** //

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('toggle');
});

// inclus page article-generaux
$('.main').html(contentartgeneraux);
// include article
$('.btnsuite-vert').on('click', () => contentarticle());
$('.go_fiches').on('click', () => contfiches());



// NEWSLETTER INSCRIPTION

// INPUTS FORM
const nomNews = document.getElementById('nom-newsletter');
const prenomNews = document.getElementById('prenom-newsletter');
const btnEnvoyerNews = document.getElementById('btn-newsletter');

btnEnvoyerNews.disabled = true;

nomNews.addEventListener('input', () => {
  if (nomNews.value) {
    btnEnvoyerNews.disabled = false;
  } else {
    btnEnvoyerNews.disabled = true;
  }
});

// OVERLAY POP UP FOR NEWSLETTER

const overlay = document.getElementById('overlay-news');
btnEnvoyerNews.addEventListener('click', openModal);
function openModal(e) {
  e.preventDefault();
  if (document.querySelector('form').checkValidity()) {
    overlay.style.display = 'block';
  }
}

const btnClose = document.getElementById('btnClose');

btnClose.addEventListener('click', closeModal);

function closeModal() {
  overlay.style.display = 'none';
 // formulaire.style.display = 'none';
};


// HOVER ON NAV MENU

$(
  $(".dropdown-article").hover(function() {
    $("dropdown-articles-pc").addClass("active")
  })
)
