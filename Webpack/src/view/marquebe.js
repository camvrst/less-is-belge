import $ from 'jquery'; 
import {articlesMarques} from '../data/articles'
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

// MARQUES BELGES

// first 3 articles
let firstContentBelge = '';
for (let i = 0; i < 3; i ++) {
  firstContentBelge += `
  <div class="artfp1 w-full lg-w-30">
      <div class="img-belge${i} bg-img-art"></div>
      <a href=# class="lien-belge${i}"> <h5>${articlesMarques[i].titre}</h5></a>
      <p>
        ${articlesMarques[i].contenu.p1}
      </p>
  </div>
  `
  $('.section-belge-1').html(firstContentBelge);
}

// 4th big article

const secondContentBelge = `
            <div class="container-img">
              <div class="img-belge3 bg-img-art"></div>
            </div>
            <div class="para">
              <div class="hr-vert"></div>
              <div class="d-flex items-end">
                <p class="date"><i class="far fa-clock"></i>${articlesMarques[3].date}</p>
                <div class="petit-hr-vert"></div>
                <p class="comments">
                  <i class="fas fa-comment"></i>${articlesMarques[3].commentaires.length} commentaires
                </p>
              </div>
              <h4>${articlesMarques[3].titre}</h4>
              <p>
              ${articlesMarques[3].contenu.p1}
              </p>
              <p>
              ${articlesMarques[3].contenu.p2}
              </p>
              <a href="./article-simple.html" class="btnsuite-vert lien-belge3" 
                >lire la suite</a
              >
            </div>
`
$('.section-belge-2').html(secondContentBelge);


export const contentmarques = `
<div>
      
      <section class="art-fichesPratiques">
        <article class="petite-fichesPratiques">
          <section class="section-fp-1 d-flex flex-wrap justify-around">
            <div class="artfp1">
              <div class="imgfp1"></div>
              <h5>Titre</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                modi doloremque aliquid ipsum sequi possimus.
              </p>
            </div>
            <div class="artfp2">
              <div class="imgfp2"></div>
              <h5>Titre</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                modi doloremque aliquid ipsum sequi possimus.
              </p>
            </div>
            <div class="artfp3">
              <div class="imgfp3"></div>
              <h5>Titre</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                modi doloremque aliquid ipsum sequi possimus.
              </p>
            </div>
          </section>
        </article>
        <article class="grande-fichesPratiques">
          <section class="section-fp-2 d-flex flex-wrap">
            <div class="container-img">
              <div class="img-fp"></div>
            </div>
            <div class="para">
              <div class="hr-vert"></div>
              <div class="d-flex items-end">
                <p class="date"><i class="far fa-clock"></i>12 décembre 2020</p>
                <div class="petit-hr-vert"></div>
                <p class="comments">
                  <i class="fas fa-comment"></i>5 commentaires
                </p>
              </div>
              <h4>Comment entretenir ses vêtements?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam, dicta, magni itaque accusantium libero natus doloremque
                ratione optio deserunt corrupti consequuntur. Laudantium
                accusantium, autem expedita suscipit eum accusamus molestiae
                eaque?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                modi doloremque aliquid ipsum sequi possimus.
              </p>
              <a href="./article-simple.html" class="btnsuite-vert"
                >lire la suite</a
              >
            </div>
          </section>
        </article>
        <section class="art-fichesPratiques">
          <article class="petite-fichesPratiques">
            <section class="section-fp-1 d-flex flex-wrap justify-around">
              <div class="artfp1">
                <div class="imgfp1"></div>
                <h5>Titre</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                  modi doloremque aliquid ipsum sequi possimus.
                </p>
              </div>
              <div class="artfp2">
                <div class="imgfp2"></div>
                <h5>Titre</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                  modi doloremque aliquid ipsum sequi possimus.
                </p>
              </div>
              <div class="artfp3">
                <div class="imgfp3"></div>
                <h5>Titre</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                  modi doloremque aliquid ipsum sequi possimus.
                </p>
              </div>
            </section>
      </section>
    </div>
    `;
