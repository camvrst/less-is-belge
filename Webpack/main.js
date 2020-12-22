import './style.scss';
import $ from 'jquery';
import { header, footer } from './src/view/view';
import { contentarticle} from './src/view/article';
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
// include article
$('.main-articleSingle').html(contentarticle);

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
// faire disparaitre ma pop-up
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


// COMMENTS AIRTABLE

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyz9qFpTI4KwnNyH'
});
var base = new Airtable({apiKey: 'keyz9qFpTI4KwnNyH'}).base('appcrPBEfeSrBcqgL');

base('Comments').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 3,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function(record) {
      console.log('Retrieved', record.get('Nom'));
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});

base('Comments').find('recO6kYtLskcA3J8G', function(err, record) {
  if (err) { console.error(err); return; }
  console.log('Retrieved', record.id);
});