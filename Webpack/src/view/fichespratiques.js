import $ from 'jquery'; 
import {fichesPrat} from '../data/articles'
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

// FICHES

// first 3 articles
let firstContentFiches = '';
for (let i = 0; i < 3; i ++) {
  firstContentFiches += `
  <div class="artfp1 w-full lg-w-30">
              <div class="img-fiche${i} bg-img-art"></div>
              <a href='./article-fiche${i}.html' class="lien-fiche${i}"> <h5>${fichesPrat[i].titre}</h5></a>
              <p>
                ${fichesPrat[i].contenu.p1}
              </p>
            </div>
  `
  $('.section-fp-1').html(firstContentFiches);
}

// 4th big article

const secondContentFiche = `
            <div class="container-img">
              <div class="img-fiche3 bg-img-art"></div>
            </div>
            <div class="para">
              <div class="hr-vert"></div>
              <div class="d-flex items-end">
                <p class="date"><i class="far fa-clock"></i>${fichesPrat[3].date}</p>
                <div class="petit-hr-vert"></div>
                <p class="comments">
                  <i class="fas fa-comment"></i>${fichesPrat[3].commentaires.length} commentaires
                </p>
              </div>
              <h4>${fichesPrat[3].titre}</h4>
              <p>
              ${fichesPrat[3].contenu.p1}
              </p>
              <p>
              ${fichesPrat[3].contenu.p2}
              </p>
              <a href="./article-fiche3.html" class="btnsuite-vert lien-fiche3" 
                >lire la suite</a
              >
            </div>
`
$('.section-fp-2').html(secondContentFiche);

export const contFiches = `
  <div>
      <section class="art-fichesPratiques">
        <article class="petite-fichesPratiques">
          <section class="section-fp-1 d-flex flex-wrap justify-around lg-w-90 w-full>
            <div class="artfp1 lg-w-30 sm-w-full">
              <div class="bg-img-art imgfp1"></div>
              <a href="./article-fiche0.html" class="lien-fiches0"><h5>${fichesPrat[0].titre}</h5></a>
              <p>
              ${fichesPrat[0].contenu.p1}
              </p>
            </div>
            <div class="artfp2 lg-w-20 sm-w-full">
              <div class="imgfp2"></div>
              <a class="lien-fiches1" href="./article-fiche1.html"><h5>${fichesPrat[1].titre}</h5></a>
              <p>
              ${fichesPrat[1].contenu.p1}
              </p>
            </div>
            <div class="artfp3 lg-w-20 sm-w-full">
              <div class="imgfp3 "></div>
              <a class="lien-fiches2" href="./article-fiche2.html"><h5>${fichesPrat[2].titre}</h5></a>
              <p>
              ${fichesPrat[2].contenu.p1}
              </p>
            </div>
          </section>
        </article>
        <article class="grande-fichesPratiques">
          <section class="section-fp-2 d-flex flex-wrap">
            <div class="container-img">
              <div class="img-fp4"></div>
            </div>
            <div class="para">
              <div class="hr-vert"></div>
              <div class="d-flex items-end">
                <p class="date"><i class="far fa-clock"></i>${fichesPrat[3].date}</p>
                <div class="petit-hr-vert"></div>
                <p class="comments">
                  <i class="fas fa-comment"></i> ${fichesPrat[3].commentaires.length} commentaires
                </p>
              </div>
              <h4>${fichesPrat[3].titre}</h4>
              <p>
              ${fichesPrat[3].contenu.p1}
              </p>
              <p>
              ${fichesPrat[3].contenu.p2}
              </p>
              <a href="./article-fiche3.html" class="btnsuite-vert lien-fiches3"
                >lire la suite</a
              >
            </div>
          </section>
        </article>
        <!--
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
      </section> -->
    </div> `
 




//$('.content-fichespratiques').html(contfiches);