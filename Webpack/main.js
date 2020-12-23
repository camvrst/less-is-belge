import './style.scss';
import $ from 'jquery';
import { header, footer } from './src/view/view';
import {contentarticle} from './src/view/article';
import {contentartgeneraux} from './src/view/articles-generaux';
import {contfiches} from './src/view/fichespratiques';
import {continfo} from './src/view/article-info';
import {contentlexique} from './src/view/lexique';
import {contentmarques} from './src/view/marque-be';
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
$('.contentarticle').html(contentarticle);
// inclus page fiches prtaiques
$('.content-fichespratiques').html(contfiches);
// inclus page articles informatifs
$('.continfo').html(continfo);
// inclus page lexique des matiéres
$('.contentlexique').html(contentlexique);
// inclus page marques belges
$('.contentmarques').html(contentmarques);



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
