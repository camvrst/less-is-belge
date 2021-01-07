import $ from "jquery";
import { articlesInfos } from "../data/articles";
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

// ARTICLES INFOS

// MARQUES BELGES

// first 3 articles
let firstContentInfos = "";
for (let i = 0; i < 3; i++) {
  firstContentInfos += `
  <div class="artfp1 w-full lg-w-30">
      <div class="img-infos${i} bg-img-art"></div>
      <a href="./article-infos${i}.html" class="lien-infos${i}"> <h5>${
    articlesInfos[i].titre
  }</h5></a>
      <p>
        ${truncateStr(
          articlesInfos[i].contenu.p1,
          200
        )} <br/>  <a href="./article-infos${i}.html" class="lire-suite">Lire la suite</a>
      </p>
  </div>
  `;
  $(".section-infos-1").html(firstContentInfos);
}

// 4th big article

const secondContentInfos = `
            <div class="container-img">
              <div class="img-infos3 bg-img-art"></div>
            </div>
            <div class="para">
              <div class="hr-vert"></div>
              <div class="d-flex items-end">
                <p class="date"><i class="far fa-clock"></i>${articlesInfos[3].date}</p>
                <div class="petit-hr-vert"></div>
                <p class="comments">
                  <i class="fas fa-comment"></i>${articlesInfos[3].commentaires.length} commentaires
                </p>
              </div>
              <h4>${articlesInfos[3].titre}</h4>
              <p>
              ${articlesInfos[3].contenu.p1}
              </p>
              <p>
              ${articlesInfos[3].contenu.p2}
              </p>
              <a href="./article-infos3.html" class="btnsuite-vert lien-infos3" 
                >lire la suite</a
              >
            </div>
`;
$(".section-infos-2").html(secondContentInfos);
