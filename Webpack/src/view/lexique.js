import $ from 'jquery'; 
import {lexiqueMat} from '../data/articles'
import '../../style.scss';
import { header, footer } from './view';


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

// LEXIQUE 

// first 3 articles
let firstContentLexique = '';
for (let i = 0; i < 3; i ++) {
  firstContentLexique += `
  <div class="artfp1 w-full lg-w-30">
      <div class="img-lexique${i} bg-img-art"></div>
      <a href="./article-lexique${i}.html""./article-lexique0.html" class="lien-lexique${i}"> <h5>${lexiqueMat[i].titre}</h5></a>
      <p>
        ${lexiqueMat[i].contenu.p1}
      </p>
  </div>
  `
  $('.section-lexique-1').html(firstContentLexique);
}

// 4th big article

const secondContentLexique = `
            <div class="container-img">
              <div class="img-lexique3 bg-img-art"></div>
            </div>
            <div class="para">
              <div class="hr-vert"></div>
              <div class="d-flex items-end">
                <p class="date"><i class="far fa-clock"></i>${lexiqueMat[3].date}</p>
                <div class="petit-hr-vert"></div>
                <p class="comments">
                  <i class="fas fa-comment"></i>${lexiqueMat[3].commentaires.length} commentaires
                </p>
              </div>
              <h4>${lexiqueMat[3].titre}</h4>
              <p>
              ${lexiqueMat[3].contenu.p1}
              </p>
              <p>
              ${lexiqueMat[3].contenu.p2}
              </p>
              <a href="./article-lexique3.html" class="btnsuite-vert lien-lexique3" 
                >lire la suite</a
              >
            </div>
`
$('.section-lexique-2').html(secondContentLexique);

