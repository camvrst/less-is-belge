import $ from "jquery";
import { articlesMarques } from "../data/articles";
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

// MARQUES BELGES

// first 3 articles
let firstContentBelge = "";
for (let i = 0; i < 3; i++) {
  firstContentBelge += `
  <div class="artfp1 w-full lg-w-30">
      <div class="img-belge${i} bg-img-art"></div>
      <a href="./article-marque${i}.html" class="lien-belge${i}"> <h5>${
    articlesMarques[i].titre
  }</h5></a>
      <p>
        ${truncateStr(
          articlesMarques[i].contenu.p1,
          200
        )} <br/> <a href="./article-marque${i}.html" class="lire-suite">Lire la suite</a>
      </p>
  </div>
  `;
  $(".section-belge-1").html(firstContentBelge);
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
              <a href="./article-marque3.html" class="btnsuite-vert lien-belge3" 
                >lire la suite</a
              >
            </div>
`;
$(".section-belge-2").html(secondContentBelge);
