import $ from 'jquery'; 
import {lexiqueMat, fichesPrat, articlesMarques, articlesInfos} from '../data/articles'
import '../../style.scss';

// ONGLETS ARTICLES 

// let nombreArticles = fichesPrat.length + lexiqueMat.length + articlesMarques.length + articlesInfos.length;

export const showFiche = (n) => {
  const articleInHtml = `
  <section>
      <!-- BTN GO UP-->
      <div class="btn-up txt-only-stroke sticky"><a href="#">UP</a></div>
      <div class="articlesingle">
        <section
          class="page_article vert-claire nav-fiches nav-bar d-flex justify-around items-center w-full"
        >
          <nav>
            <ul class="w-90 d-flex">
              <a href="./index.html"><li class="first-li">Accueil</li></a>
              <a href="./articles-generaux.html"><li>Articles</li></a>
              <a href="./fiches-pratiques.html"><li>Fiches pratiques</li></a>
            </ul>
            <h2>${fichesPrat[n].titre}</h2>
            <p>${fichesPrat[n].auteur}</p>
          </nav>
        </section>
        <article>
          <div class="container-image">
            <div class="grande-img img-fiche${n}"></div>
          </div>
          <section class="contenu-article">
            <div class="d-flex items-center justify-around">
              <p class="date"><i class="far fa-clock"></i>${fichesPrat[n].date}</p>
              <div class="petit-hr-vert"></div>
              <p class="comments">
                <i class="fas fa-comment"></i>${fichesPrat[n].commentaires.length} commentaires
              </p>
            </div>
            <p>
            ${fichesPrat[n].contenu.p1}
            </p>
            <span class="txt-divide-right"></span>
            <p>
            ${fichesPrat[n].contenu.p2}
            </p>
            <p>
            ${fichesPrat[n].contenu.p3}
            </p>
            <span class="txt-divide-left"></span>
            <p>
            ${fichesPrat[n].contenu.p4}
            </p>
          </section>
          <div class="d-flex justify-around">
            <div class="image-droite img-fiche${n}">
              <div class="droite"></div>
            </div>
            <div class="image-gauche img-fiche${n}">
              <div class="gauche"></div>
            </div>
          </div>
        </article>
      </div>
    </section>
    <!-- COMMENTAIRES -->
    <section
      class="comments-section w-full lg-w-80 d-flex flex-wrap justify-around"
    >
      <div class="lg-w-40 w-full">
        <h3 class="title-comment">Laisser un commentaire</h3>
        <form action="#" method="POST">
          <div class="d-flex justify-between flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="nom-newsletter">Nom </label>
              <input
                type="text"
                name="nom-comments"
                id="nom-comments"
                required
              />
            </div>
            <div class="d-flex flex-column w-full">
              <label for="prenom-newsletter">Prénom </label>
              <input
                type="text"
                name="prenom-comments"
                id="prenom-comments"
                required
              />
            </div>
          </div>
          <div class="d-flex justify-between items-end flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="email-newsletter">Email </label>
              <input
                type="email"
                name="email-comments"
                id="email-comments"
                required
              />
            </div>
          </div>
          <div class="d-flex justify-between items-end flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="email-newsletter">Commentaire </label>
              <input
                type="text"
                name="msg-comments"
                id="msg-comments"
                required
              />
            </div>
          </div>
          <button class="btn-pages" type="submit" id="btn-comments">
            ajouter
          </button>
        </form>
      </div>
      <div class="lg-w-20 w-full">
        <h3>Partager cet article</h3>
        <div
          class="d-flex lg-justify-between justify-start sm-margin-top social-icons-comments"
        >
          <a
            href="https://www.instagram.com/less.is.belge/?hl=fr"
            target="blank"
            ><i class="fab fa-instagram social-icon"></i
          ></a>
          <a href="#"><i class="fab fa-facebook-f social-icon"></i></a>
          <a href="#"><i class="fab fa-pinterest-p social-icon"></i></a>
          <a href="#"><i class="fas fa-share-alt social-icon"></i></a>
        </div>
        <img
          class="arrow-comment"
          src="../assets/img/arrow1.png"
          alt="Flèche"
        />
      </div>
    </section>
    <section class="posted-comments w-full lg-w-80">
      <h3>Commentaires (${fichesPrat[n].commentaires.length})</h3>
      <span class="hr-vert"></span>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-star-of-life"></i>
        </div>
        <div>
          <h4>${fichesPrat[n].commentaires[0].nom}</h4>
          <p>${fichesPrat[n].commentaires[0].commentaire}</p>
        </div>
      </div>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-fan"></i>
        </div>
        <div>
          <h4>${fichesPrat[n].commentaires[1].nom}</h4>
          <p>${fichesPrat[n].commentaires[1].commentaire}</p>
        </div>
      </div>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-star-of-life"></i>
        </div>
        <div>
          <h4>${fichesPrat[n].commentaires[2].nom}</h4>
          <p>${fichesPrat[n].commentaires[2].commentaire}</p>
        </div>
      </div>
    </section>
    <section class="main-articleSingle"></section>
  `
  $('.contentarticle').html(articleInHtml);
}

showFiche(3);
  
export const showLexique = (n) => {
  let articleInHtml = `
  <section>
      <!-- BTN GO UP-->
      <div class="btn-up txt-only-stroke sticky"><a href="#">UP</a></div>
      <div class="articlesingle">
        <section
          class="page_article vert-claire nav-fiches nav-bar d-flex justify-around items-center w-full"
        >
          <nav>
            <ul class="w-90 d-flex">
              <a href="./index.html"><li class="first-li">Accueil</li></a>
              <a href="./articles-generaux.html"><li>Articles</li></a>
              <a href="./fiches-pratiques.html"><li>Fiches techniques</li></a>
            </ul>
            <h2>${lexiqueMat[n].titre}</h2>
            <p>${lexiqueMat[n].auteur}</p>
          </nav>
        </section>
        <article>
          <div class="container-image">
            <div class="grande-img img-lexique${n}"></div>
          </div>
          <section class="contenu-article">
            <div class="d-flex items-center justify-around">
              <p class="date"><i class="far fa-clock"></i>${lexiqueMat[n].date}</p>
              <div class="petit-hr-vert"></div>
              <p class="comments">
                <i class="fas fa-comment"></i>${lexiqueMat[n].commentaires.length} commentaires
              </p>
            </div>
            <p>
            ${lexiqueMat[n].contenu.p1}
            </p>
            <span class="txt-divide-right"></span>
            <p>
            ${lexiqueMat[n].contenu.p2}
            </p>
            <p>
            ${lexiqueMat[n].contenu.p3}
            </p>
            <span class="txt-divide-left"></span>
            <p>
            ${lexiqueMat[n].contenu.p4}
            </p>
          </section>
          <div class="d-flex justify-around">
            <div class="image-droite img-lexique${n}">
              <div class="droite"></div>
            </div>
            <div class="image-gauche img-lexique${n}">
              <div class="gauche"></div>
            </div>
          </div>
        </article>
      </div>
    </section>
    <!-- COMMENTAIRES -->
    <section
      class="comments-section w-full lg-w-80 d-flex flex-wrap justify-around"
    >
      <div class="lg-w-40 w-full">
        <h3 class="title-comment">Laisser un commentaire</h3>
        <form action="#" method="POST">
          <div class="d-flex justify-between flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="nom-newsletter">Nom </label>
              <input
                type="text"
                name="nom-comments"
                id="nom-comments"
                required
              />
            </div>
            <div class="d-flex flex-column w-full">
              <label for="prenom-newsletter">Prénom </label>
              <input
                type="text"
                name="prenom-comments"
                id="prenom-comments"
                required
              />
            </div>
          </div>
          <div class="d-flex justify-between items-end flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="email-newsletter">Email </label>
              <input
                type="email"
                name="email-comments"
                id="email-comments"
                required
              />
            </div>
          </div>
          <div class="d-flex justify-between items-end flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="email-newsletter">Commentaire </label>
              <input
                type="text"
                name="msg-comments"
                id="msg-comments"
                required
              />
            </div>
          </div>
          <button class="btn-pages" type="submit" id="btn-comments">
            ajouter
          </button>
        </form>
      </div>
      <div class="lg-w-20 w-full">
        <h3>Partager cet article</h3>
        <div
          class="d-flex lg-justify-between justify-start sm-margin-top social-icons-comments"
        >
          <a
            href="https://www.instagram.com/less.is.belge/?hl=fr"
            target="blank"
            ><i class="fab fa-instagram social-icon"></i
          ></a>
          <a href="#"><i class="fab fa-facebook-f social-icon"></i></a>
          <a href="#"><i class="fab fa-pinterest-p social-icon"></i></a>
          <a href="#"><i class="fas fa-share-alt social-icon"></i></a>
        </div>
        <img
          class="arrow-comment"
          src="../assets/img/arrow1.png"
          alt="Flèche"
        />
      </div>
    </section>
    <section class="posted-comments w-full lg-w-80">
      <h3>Commentaires (${lexiqueMat[n].commentaires.length})</h3>
      <span class="hr-vert"></span>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-star-of-life"></i>
        </div>
        <div>
          <h4>${lexiqueMat[n].commentaires[0].nom}</h4>
          <p>${lexiqueMat[n].commentaires[0].commentaire}</p>
        </div>
      </div>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-fan"></i>
        </div>
        <div>
          <h4>${lexiqueMat[n].commentaires[1].nom}</h4>
          <p>${lexiqueMat[n].commentaires[1].commentaire}</p>
        </div>
      </div>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-star-of-life"></i>
        </div>
        <div>
          <h4>${lexiqueMat[n].commentaires[2].nom}</h4>
          <p>${lexiqueMat[n].commentaires[2].commentaire}</p>
        </div>
      </div>
    </section>
    <section class="main-articleSingle"></section>
  `
  $('.contentarticle').html(articleInHtml);
}

export const showInfos = (n) => {
  let articleInHtml = `
  <section>
      <!-- BTN GO UP-->
      <div class="btn-up txt-only-stroke sticky"><a href="#">UP</a></div>
      <div class="articlesingle">
        <section
          class="page_article vert-claire nav-fiches nav-bar d-flex justify-around items-center w-full"
        >
          <nav>
            <ul class="w-90 d-flex">
              <a href="./index.html"><li class="first-li">Accueil</li></a>
              <a href="./articles-generaux.html"><li>Articles</li></a>
              <a href="./fiches-pratiques.html"><li>Fiches techniques</li></a>
            </ul>
            <h2>${articlesInfos[n].titre}</h2>
            <p>${articlesInfos[n].auteur}</p>
          </nav>
        </section>
        <article>
          <div class="container-image">
            <div class="grande-img img-infos${n}"></div>
          </div>
          <section class="contenu-article">
            <div class="d-flex items-center justify-around">
              <p class="date"><i class="far fa-clock"></i>${articlesInfos[n].date}</p>
              <div class="petit-hr-vert"></div>
              <p class="comments">
                <i class="fas fa-comment"></i>${articlesInfos[n].commentaires.length} commentaires
              </p>
            </div>
            <p>
            ${articlesInfos[n].contenu.p1}
            </p>
            <span class="txt-divide-right"></span>
            <p>
            ${articlesInfos[n].contenu.p2}
            </p>
            <p>
            ${articlesInfos[n].contenu.p3}
            </p>
            <span class="txt-divide-left"></span>
            <p>
            ${articlesInfos[n].contenu.p4}
            </p>
          </section>
          <div class="d-flex justify-around">
            <div class="image-droite img-infos${n}">
              <div class="droite"></div>
            </div>
            <div class="image-gauche img-infos${n}">
              <div class="gauche"></div>
            </div>
          </div>
        </article>
      </div>
    </section>
    <!-- COMMENTAIRES -->
    <section
      class="comments-section w-full lg-w-80 d-flex flex-wrap justify-around"
    >
      <div class="lg-w-40 w-full">
        <h3 class="title-comment">Laisser un commentaire</h3>
        <form action="#" method="POST">
          <div class="d-flex justify-between flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="nom-newsletter">Nom </label>
              <input
                type="text"
                name="nom-comments"
                id="nom-comments"
                required
              />
            </div>
            <div class="d-flex flex-column w-full">
              <label for="prenom-newsletter">Prénom </label>
              <input
                type="text"
                name="prenom-comments"
                id="prenom-comments"
                required
              />
            </div>
          </div>
          <div class="d-flex justify-between items-end flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="email-newsletter">Email </label>
              <input
                type="email"
                name="email-comments"
                id="email-comments"
                required
              />
            </div>
          </div>
          <div class="d-flex justify-between items-end flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="email-newsletter">Commentaire </label>
              <input
                type="text"
                name="msg-comments"
                id="msg-comments"
                required
              />
            </div>
          </div>
          <button class="btn-pages" type="submit" id="btn-comments">
            ajouter
          </button>
        </form>
      </div>
      <div class="lg-w-20 w-full">
        <h3>Partager cet article</h3>
        <div
          class="d-flex lg-justify-between justify-start sm-margin-top social-icons-comments"
        >
          <a
            href="https://www.instagram.com/less.is.belge/?hl=fr"
            target="blank"
            ><i class="fab fa-instagram social-icon"></i
          ></a>
          <a href="#"><i class="fab fa-facebook-f social-icon"></i></a>
          <a href="#"><i class="fab fa-pinterest-p social-icon"></i></a>
          <a href="#"><i class="fas fa-share-alt social-icon"></i></a>
        </div>
        <img
          class="arrow-comment"
          src="../assets/img/arrow1.png"
          alt="Flèche"
        />
      </div>
    </section>
    <section class="posted-comments w-full lg-w-80">
      <h3>Commentaires (${articlesInfos[n].commentaires.length})</h3>
      <span class="hr-vert"></span>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-star-of-life"></i>
        </div>
        <div>
          <h4>${articlesInfos[n].commentaires[0].nom}</h4>
          <p>${articlesInfos[n].commentaires[0].commentaire}</p>
        </div>
      </div>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-fan"></i>
        </div>
        <div>
          <h4>${articlesInfos[n].commentaires[1].nom}</h4>
          <p>${articlesInfos[n].commentaires[1].commentaire}</p>
        </div>
      </div>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-star-of-life"></i>
        </div>
        <div>
          <h4>${articlesInfos[n].commentaires[2].nom}</h4>
          <p>${articlesInfos[n].commentaires[2].commentaire}</p>
        </div>
      </div>
    </section>
    <section class="main-articleSingle"></section>
  `
  $('.contentarticle').html(articleInHtml);
}


export const showMarques = (n) => {
  let articleInHtml = `
  <section>
      <!-- BTN GO UP-->
      <div class="btn-up txt-only-stroke sticky"><a href="#">UP</a></div>
      <div class="articlesingle">
        <section
          class="page_article vert-claire nav-fiches nav-bar d-flex justify-around items-center w-full"
        >
          <nav>
            <ul class="w-90 d-flex">
              <a href="./index.html"><li class="first-li">Accueil</li></a>
              <a href="./articles-generaux.html"><li>Articles</li></a>
              <a href="./fiches-pratiques.html"><li>Fiches techniques</li></a>
            </ul>
            <h2>${articlesMarques[n].titre}</h2>
            <p>${articlesMarques[n].auteur}</p>
          </nav>
        </section>
        <article>
          <div class="container-image">
            <div class="grande-img img-belge${n}"></div>
          </div>
          <section class="contenu-article">
            <div class="d-flex items-center justify-around">
              <p class="date"><i class="far fa-clock"></i>${articlesMarques[n].date}</p>
              <div class="petit-hr-vert"></div>
              <p class="comments">
                <i class="fas fa-comment"></i>${articlesMarques[n].commentaires.length} commentaires
              </p>
            </div>
            <p>
            ${articlesMarques[n].contenu.p1}
            </p>
            <span class="txt-divide-right"></span>
            <p>
            ${articlesMarques[n].contenu.p2}
            </p>
            <p>
            ${articlesMarques[n].contenu.p3}
            </p>
            <span class="txt-divide-left"></span>
            <p>
            ${articlesMarques[n].contenu.p4}
            </p>
          </section>
          <div class="d-flex justify-around">
            <div class="image-droite img-belge${n}">
              <div class="droite"></div>
            </div>
            <div class="image-gauche img-belge${n}">
              <div class="gauche"></div>
            </div>
          </div>
        </article>
      </div>
    </section>
    <!-- COMMENTAIRES -->
    <section
      class="comments-section w-full lg-w-80 d-flex flex-wrap justify-around"
    >
      <div class="lg-w-40 w-full">
        <h3 class="title-comment">Laisser un commentaire</h3>
        <form action="#" method="POST">
          <div class="d-flex justify-between flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="nom-newsletter">Nom </label>
              <input
                type="text"
                name="nom-comments"
                id="nom-comments"
                required
              />
            </div>
            <div class="d-flex flex-column w-full">
              <label for="prenom-newsletter">Prénom </label>
              <input
                type="text"
                name="prenom-comments"
                id="prenom-comments"
                required
              />
            </div>
          </div>
          <div class="d-flex justify-between items-end flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="email-newsletter">Email </label>
              <input
                type="email"
                name="email-comments"
                id="email-comments"
                required
              />
            </div>
          </div>
          <div class="d-flex justify-between items-end flex-wrap">
            <div class="d-flex flex-column w-full">
              <label for="email-newsletter">Commentaire </label>
              <input
                type="text"
                name="msg-comments"
                id="msg-comments"
                required
              />
            </div>
          </div>
          <button class="btn-pages" type="submit" id="btn-comments">
            ajouter
          </button>
        </form>
      </div>
      <div class="lg-w-20 w-full">
        <h3>Partager cet article</h3>
        <div
          class="d-flex lg-justify-between justify-start sm-margin-top social-icons-comments"
        >
          <a
            href="https://www.instagram.com/less.is.belge/?hl=fr"
            target="blank"
            ><i class="fab fa-instagram social-icon"></i
          ></a>
          <a href="#"><i class="fab fa-facebook-f social-icon"></i></a>
          <a href="#"><i class="fab fa-pinterest-p social-icon"></i></a>
          <a href="#"><i class="fas fa-share-alt social-icon"></i></a>
        </div>
        <img
          class="arrow-comment"
          src="../assets/img/arrow1.png"
          alt="Flèche"
        />
      </div>
    </section>
    <section class="posted-comments w-full lg-w-80">
      <h3>Commentaires (${articlesMarques[n].commentaires.length})</h3>
      <span class="hr-vert"></span>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-star-of-life"></i>
        </div>
        <div>
          <h4>${articlesMarques[n].commentaires[0].nom}</h4>
          <p>${articlesMarques[n].commentaires[0].commentaire}</p>
        </div>
      </div>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-fan"></i>
        </div>
        <div>
          <h4>${articlesMarques[n].commentaires[1].nom}</h4>
          <p>${articlesMarques[n].commentaires[1].commentaire}</p>
        </div>
      </div>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-star-of-life"></i>
        </div>
        <div>
          <h4>${articlesMarques[n].commentaires[2].nom}</h4>
          <p>${articlesMarques[n].commentaires[2].commentaire}</p>
        </div>
      </div>
    </section>
    <section class="main-articleSingle"></section>
  `
  $('.contentarticle').html(articleInHtml);
}
