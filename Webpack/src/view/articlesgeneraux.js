import $ from "jquery";
import {
  lexiqueMat,
  fichesPrat,
  articlesInfos,
  articlesMarques,
} from "../data/articles";
import "../../style.scss";
import { header, footer } from "./view";
import { truncateStr } from "../helpers/truncate";

/* INCLUDE HEADER AND FOOTER */
const headerHTML = document.querySelector("header");
const footerHTML = document.querySelector("footer.footer");

headerHTML.innerHTML = header;
footerHTML.innerHTML = footer;

// ***** NAV BAR ANIMATION ON CLICK RESPONSIVE ***** //

const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burgerMenu.classList.toggle("toggle");
});

export const selectFiche = (n) => {
  let selectedFiche = n;
  return selectedFiche;
};

export const contentartgeneraux = `
<div>
<!-- BTN GO UP-->
<div class="btn-up txt-only-stroke sticky"><a href="#" >UP</a></div>
<div class="articlesgeneral">
  <!-- bar de nav pour les articles généraux-->
  <!--fiches articles-->
  <nav
    class="nav-fiches nav-bar d-flex justify-around items-center w-full"
  >
    <ul class="w-90 d-flex justify-around items-center">
    <li><a name="fiches" class="afficher">Fiches pratiques</a></li>
    <li><a href="#lexique" class="cacher">Lexique des matières</a></li>
    <li><a href="#info" class="cacher">Articles informatifs</a></li>
    <li><a href="#marques" class="cacher">Les marques belges</a></li>
    </ul>
  </nav>
  <article class="premiere-fiche">
    <section class="premiere-section d-flex ">
      <div class="container-img">
        <div class="img-fiche3 bg-img-art-gen" ></div>
      </div>
      <div class="para" >
        <div class="hr-vert"></div>
        <div class="d-flex items-end">
          <p class="date"><i class="far fa-clock"></i>${fichesPrat[3].date}</p>
          <div class="petit-hr-vert"></div>
          <p class="comments">
            <i class="fas fa-comment"></i>${
              fichesPrat[3].commentaires.length
            } commentaires
          </p>
        </div>
        <h4>${fichesPrat[3].titre}</h4>
        <p>
        ${fichesPrat[3].contenu.p1}
        </p>
        <p>
        ${fichesPrat[3].contenu.p2}
        </p>
        <a href="./article-fiche3.html" class="btnsuite-vert lien-fiche3">lire la suite</a>
      </div>
    </section>
  </article>
  <article class="deuxieme-fiche">
      <section class="deuxieme-section d-flex justify-around">
        <div class="art1 sm-w-full">
          <div class="img-fiche0 bg-img-art"></div>
          <a href="./article-fiche0.html" class="lien-fiche0""> <h5>${
            fichesPrat[0].titre
          }</h5></a>
          <p>
          ${truncateStr(
            fichesPrat[0].contenu.p1,
            200
          )} <br/> <a class="lire-suite" href="./article-fiche0.html">Lire la suite</a>
          </p>
        </div>
        <div class="art2 sm-w-full">
          <div class="img-fiche1 bg-img-art"></div>
          <a href="./article-fiche1.html" class="lien-fiche1"> <h5>${
            fichesPrat[1].titre
          }</h5></a>
          <p>
          ${truncateStr(
            fichesPrat[1].contenu.p1,
            200
          )} <br/> <a class="lire-suite" href="./article-fiche1.html">Lire la suite</a>
          </p>
        </div>
        <div class="art3 sm-w-full">
          <div class="img-fiche2 bg-img-art"></div>
          <a href="./article-fiche2.html" class="lien-fiche2"> <h5>${
            fichesPrat[2].titre
          }</h5></a>
          <p>
          ${truncateStr(
            fichesPrat[2].contenu.p1,
            200
          )} <br/> <a class="lire-suite" href="./article-fiche2.html">Lire la suite</a>
          </p>
        </div>
      </section>
      <a href="./fiches-pratiques.html" class="btn-pages btn-fiches d-flex justify-around"><button> Voir toutes les fiches pratiques</button></a>
  </article>
   <!--lexique matières-->
   <nav
   class="nav-fiches nav-bar d-flex justify-around items-center w-full"
 >
   <ul class="w-90 d-flex justify-around items-center">
    <li><a href="#fiches" class="cacher">Fiches pratiques</a></li>
    <li><a name="lexique" class="afficher">Lexique des matières</a></li>
    <li><a href="#info" class="cacher">Articles informatifs</a></li>
    <li><a href="#marques" class="cacher">Les marques belges</a></li>
   </ul>
 </nav>
 <article class="premiere-fiche">
   <section class="premiere-section d-flex ">
    <div class="container-img">
      <div class="img-lexique3 bg-img-art-gen" ></div>
    </div>
     <div class="para" >
       <div class="hr-rose"></div>
       <div class="d-flex items-end">
         <p class="date"><i class="far fa-clock"></i>${lexiqueMat[3].date}</p>
         <div class="petit-hr-roseclair"></div>
         <p class="comments">
           <i class="fas fa-comment"></i>${
             lexiqueMat[3].commentaires.length
           } commentaires
         </p>
       </div>
       <h4>${lexiqueMat[3].titre}</h4>
       <p>
       ${lexiqueMat[3].contenu.p1}
       </p>
       <p>
       ${lexiqueMat[3].contenu.p2}
       </p>
       <a href="./article-lexique3.html" class="btnsuite-rose lien-lexique3">lire la suite</a>
     </div>
   </section>
 </article>
 <article class="deuxieme-fiche">
     <section class="deuxieme-section d-flex justify-around">
       <div class="art1 sm-w-full">
        <div class="img-lexique0 bg-img-art" ></div>
         <a href="./article-lexique0.html" class="lien-lexique0"><h5>${
           lexiqueMat[0].titre
         }</h5></a>
         <p>
         ${truncateStr(
           lexiqueMat[0].contenu.p1,
           200
         )} <br/> <a class="lire-suite" href="./article-lexique0.html">Lire la suite</a>
         </p>
       </div>
       <div class="art2 sm-w-full">
        <div class="img-lexique1 bg-img-art" ></div>
        <a href="./article-lexique1.html" class="lien-lexique1"><h5>${
          lexiqueMat[1].titre
        }</h5></a>
         <p>
         ${truncateStr(
           lexiqueMat[1].contenu.p1,
           200
         )} <br/> <a class="lire-suite" href="./article-lexique1.html">Lire la suite</a>
         </p>
       </div>
       <div class="art3 sm-w-full">
        <div class="img-lexique2 bg-img-art" ></div>
        <a href="./article-lexique2.html" class="lien-lexique2"><h5>${
          lexiqueMat[2].titre
        }</h5></a>
         <p>
         ${truncateStr(
           lexiqueMat[2].contenu.p1,
           200
         )} <br/> <a class="lire-suite" href="./article-lexique2.html">Lire la suite</a>
         </p>
       </div>
     </section>
     <a href="./lexique-matiere.html" class="btn-pages btn-lexique d-flex justify-around"><button>Voir tous les articles sur les matières</button> </a>

 </article>
  <!--articles informatifs-->
  <nav
    class="nav-fiches nav-bar d-flex justify-around items-center w-full"
  >
    <ul class="w-90 d-flex justify-around items-center">
      <li><a href="#fiches" class="cacher">Fiches pratiques</a></li>
      <li><a href="#lexique" class="cacher">Lexique des matières</a></li>
      <li><a name="info" class="afficher">Articles informatifs</a></li>
      <li><a href="#marques" class="cacher">Les marques belges</a></li>
    </ul>
  </nav>
  <article class="premiere-fiche">
    <section class="premiere-section d-flex ">
      <div class="container-img">
        <div class="img-infos3 bg-img-art-gen" ></div>
      </div>
      <div class="para" >
        <div class="hr-rosefonce"></div>
        <div class="d-flex items-end">
          <p class="date"><i class="far fa-clock"></i>${
            articlesInfos[3].date
          }</p>
          <div class="petit-hr-rosefonce"></div>
          <p class="comments">
            <i class="fas fa-comment"></i>${
              articlesInfos[3].commentaires.length
            } commentaires
          </p>
        </div>
        <h4>${articlesInfos[3].titre}</h4>
        <p>
        ${articlesInfos[3].contenu.p1}
        </p>
        <p>
        ${articlesInfos[3].contenu.p2}
        </p>
        <a href="./article-infos3.html" class="btnsuite-rosefonce lien-infos3">lire la suite</a>
      </div>
    </section>
  </article>
  <article class="deuxieme-fiche">
      <section class="deuxieme-section d-flex  justify-around">
        <div class="art1 sm-w-full ">
          <div class="img-infos0 bg-img-art" ></div>
          <a href="./article-infos0.html" class="lien-infos0"><h5>${
            articlesInfos[0].titre
          }</h5></a>
          <p>
          ${truncateStr(
            articlesInfos[0].contenu.p1,
            200
          )} <br/> <a class="lire-suite" href="./article-infos0.html">Lire la suite</a>
          </p>
        </div>
        <div class="art2 sm-w-full ">
          <div class="img-infos1 bg-img-art" ></div>
          <a href="./article-infos1.html" class="lien-infos1"><h5>${
            articlesInfos[1].titre
          }</h5></a>
          <p>
          ${truncateStr(
            articlesInfos[1].contenu.p1,
            200
          )} <br/> <a class="lire-suite" href="./article-infos1.html">Lire la suite</a>
          </p>
        </div>
        <div class="art3 sm-w-full ">
          <div class="img-infos2 bg-img-art" ></div>
          <a href="./article-infos2.html" class="lien-infos2"><h5>${
            articlesInfos[2].titre
          }</h5></a>
          <p>
          ${truncateStr(
            articlesInfos[2].contenu.p1,
            200
          )} <br/> <a class="lire-suite" href="./article-infos2.html">Lire la suite</a>
          </p>
        </div>
      </section>
      <a href="./articles-infos.html" class="btn-pages btn-infos d-flex justify-around"><button >Voir tous les articles informatifs</button></a>

  </article>
   <!--Les marques belges-->
   <nav class="nav-fiches nav-bar d-flex justify-around items-center w-full" >
   <ul class="w-90 d-flex justify-around items-center">
     <li><a href="#fiches" class="cacher">Fiches pratiques</a></li>
     <li><a href="#lexique" class="cacher">Lexique des matières</a></li>
     <li><a href="#info" class="cacher">Articles informatifs</a></li>
     <li><a name="marques" class="afficher">Les marques belges</a></li>
   </ul>
 </nav>
 <article class="premiere-fiche">
   <section class="premiere-section d-flex ">
    <div class="container-img">
      <div class="img-belge3 bg-img-art-gen" ></div>
    </div>
     <div class="para" >
       <div class="hr-vertmoyen"></div>
       <div class="d-flex items-end">
         <p class="date"><i class="far fa-clock"></i>${
           articlesMarques[3].date
         }</p>
         <div class="petit-hr-vertmoyen"></div>
         <p class="comments">
           <i class="fas fa-comment"></i>${
             articlesMarques[3].commentaires.length
           } commentaires
         </p>
       </div>
       <h4>${articlesMarques[3].titre}</h4>
       <p>
       ${articlesMarques[3].contenu.p1}
       </p>
       <p>
       ${articlesMarques[3].contenu.p2}
       </p>
       <a href="./article-marque3.html" class="btnsuite-vertmoyen lien-belge3">lire la suite</a>
     </div>
   </section>
 </article>
 <article class="deuxieme-fiche">
     <section class="deuxieme-section d-flex flex-wrap justify-around">
       <div class="art1 sm-w-full ">
        <div class="img-belge0 bg-img-art" ></div>
        <a href="./article-marque0.html" class="lien-belge0"><h5>${
          articlesMarques[0].titre
        }</h5></a>
         <p>
         ${truncateStr(
           articlesMarques[0].contenu.p1,
           200
         )} <br/> <a class="lire-suite" href="./article-marque0.html">Lire la suite</a>
         </p>
       </div>
       <div class="art2 sm-w-full ">
        <div class="img-belge1 bg-img-art" ></div>
        <a href="./article-marque1.html" class="lien-belge1"><h5>${
          articlesMarques[1].titre
        }</h5></a>
         <p>
         ${truncateStr(
           articlesMarques[1].contenu.p1,
           200
         )} <br/> <a class="lire-suite" href="./article-marque1.html">Lire la suite</a>
         </p>
       </div>
       <div class="art3 sm-w-full ">
        <div class="img-belge2 bg-img-art" ></div>
        <a href="./article-marque2.html" class="lien-belge2"><h5>${
          articlesMarques[2].titre
        }</h5></a>
         <p>
         ${truncateStr(
           articlesMarques[2].contenu.p1,
           200
         )} <br/> <a class="lire-suite" href="./article-marque0.html">Lire la suite</a>
         </p>
       </div>
     </section>
     <a href="./articles-marques.html" class="btn-pages btn-marques d-flex justify-around"><button>Voir tous les articles sur les marques belges</button> </a>

 </article>
</div>
`;

$(".main").html(contentartgeneraux);

// CLICK -> LEAD TO ARTICLES

// CLICK ARTICLE SIMPLE
/*
for (let i = 0; i < fichesPrat.length; i++) {
  console.log(i);
  console.log($( `.lien-fiche${i} > h5`));
  $(`.lien-fiche${i} > h5`).on('click', () => {
    console.log('click');
    
    
    //location.href = './article-simple.html';
    console.log('on page now');
    showFiche(i);
    console.log('done');
  })
}
*/

// CLICK ON FP
/*

$('.lien-fiche0 > h5').on('click', () => {
  //location.href = './article-simple.html';
  
},showFiche(0));

$('.lien-fiche1 > h5').on('click', () => {
  //location.href = './article-simple.html';
},showFiche(1));

$('.lien-fiche2 > h5').on('click', () => {
  //location.href = './article-simple.html';
},showFiche(2));

$('.lien-fiche3 > h5').on('click', () => {
  //location.href = './article-simple.html';
},showFiche(3));
*/

/*
$('.lien-fiche3 > h5').on('click', () => {
  location.href = './article-simple.html';
}).then(showFiche(3));

$('.lien-fiche0 > h5').on('click', () => {
  location.href = './article-simple.html';
  window.onload(showFiche(0));
});
$('.lien-fiche3 > h5').on('click', () => {

  //location.href = './article-simple.html';

  showFiche(3);
});
*/
// CLICK ON LEXIQUE

/*
$('.lien-fiche0 > h5').on('click', () => {
  console.log('click');
  location.href = './article-simple.html';
  console.log('on page now');
  
  $('.contentarticle').html(articleInHtml);
  console.log('done');
})
*/
//$('.contentarticle').html(articleInHtml);
