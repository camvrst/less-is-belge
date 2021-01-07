import $ from "jquery";
import {
  lexiqueMat,
  fichesPrat,
  articlesMarques,
  articlesInfos,
} from "../data/articles";
import "../../style.scss";
import { header, footer } from "./view";
import { showFiche } from "../services/articlesimple";
import { renderComment } from "../services/commentaires";

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

// TEMPLATE ARTICLE

showFiche(0);
renderComment();
