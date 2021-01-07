import $ from "jquery";
import { fichesPrat } from "../data/articles";
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

// FICHES

// first 3 articles
let firstContentFiches = "";
for (let i = 0; i < 3; i++) {
  firstContentFiches += `
  <div class="artfp1 w-full lg-w-30">
              <div class="img-fiche${i} bg-img-art"></div>
              <a href='./article-fiche${i}.html' class="lien-fiche${i}"> <h5>${
    fichesPrat[i].titre
  }</h5></a>
              <p>
                ${truncateStr(
                  fichesPrat[i].contenu.p1,
                  200
                )} <br/> <a href='./article-fiche${i}.html' class="lire-suite">Lire la suite</a>
              </p>
            </div>
  `;
  $(".section-fp-1").html(firstContentFiches);
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
`;
$(".section-fp-2").html(secondContentFiche);
