import $ from 'jquery'; 

export const contentarticle = `
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
            <h2>Titre articles</h2>
            <p>auteur</p>
          </nav>
        </section>
        <article>
          <div class="container-image">
            <div class="grande-img"></div>
          </div>
          <section class="contenu-article">
            <div class="d-flex items-center justify-around">
              <p class="date"><i class="far fa-clock"></i>12 décembre 2020</p>
              <div class="petit-hr-vert"></div>
              <p class="comments">
                <i class="fas fa-comment"></i>5 commentaires
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius
              expedita. Molestiae, enim. Reprehenderit deserunt omnis, nobis
              nisi odit eos a, aperiam, sed eligendi ab odio et autem quo
              facere! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Commodi vel ipsum voluptate et placeat at minus, tenetur ipsa
              laudantium voluptatum facilis corporis eligendi deserunt
              quibusdam, impedit porro nobis maxime sequi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Dolores repellat quisquam rerum
              possimus nam quos amet? Nam ab blanditiis accusamus sint?
              Repudiandae hic beatae voluptates, aspernatur itaque doloremque
              dolores nostrum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Commodi vel ipsum voluptate et placeat at minus,
              tenetur ipsa laudantium voluptatum facilis corporis eligendi
              deserunt quibusdam, impedit porro nobis maxime sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              vel ipsum voluptate et placeat at minus, tenetur ipsa laudantium
              voluptatum facilis corporis eligendi deserunt quibusdam, impedit
              porro nobis maxime sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              repellat quisquam rerum possimus nam quos amet? Nam ab blanditiis
              accusamus sint? Repudiandae hic beatae voluptates, aspernatur
              itaque doloremque dolores nostrum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Commodi vel ipsum voluptate et
              placeat at minus, tenetur ipsa laudantium voluptatum facilis
              corporis eligendi deserunt quibusdam, impedit porro nobis maxime
              sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius
              expedita. Molestiae, enim. Reprehenderit deserunt omnis, nobis
              nisi odit eos a, aperiam, sed eligendi ab odio et autem quo
              facere!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              vel ipsum voluptate et placeat at minus, tenetur ipsa laudantium
              voluptatum facilis corporis eligendi deserunt quibusdam, impedit
              porro nobis maxime sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              repellat quisquam rerum possimus nam quos amet? Nam ab blanditiis
              accusamus sint? Repudiandae hic beatae voluptates, aspernatur
              itaque doloremque dolores nostrum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolores repellat quisquam rerum
              possimus nam quos amet? Nam ab blanditiis accusamus sint?
              Repudiandae hic beatae voluptates, aspernatur itaque doloremque
              dolores nostrum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Commodi vel ipsum voluptate et placeat at minus,
              tenetur ipsa laudantium voluptatum facilis corporis eligendi
              deserunt quibusdam, impedit porro nobis maxime sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              repellat quisquam rerum possimus nam quos amet? Nam ab blanditiis
              accusamus sint? Repudiandae hic beatae voluptates, aspernatur
              itaque doloremque dolores nostrum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Commodi vel ipsum voluptate et
              placeat at minus, tenetur ipsa laudantium voluptatum facilis
              corporis eligendi deserunt quibusdam, impedit porro nobis maxime
              sequi?
            </p>
          </section>

          <div class="d-flex justify-around">
            <div class="image-droite">
              <div class="droite"></div>
            </div>
            <div class="image-gauche">
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
      <h3>Commentaires</h3>
      <span class="hr-vert"></span>
      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-star-of-life"></i>
        </div>
        <div>
          <h4>Fanny</h4>
          <p>Super article !</p>
        </div>
      </div>

      <div class="w-full d-flex items-center comment">
        <div>
          <i class="fas fa-fan"></i>
        </div>
        <div>
          <h4>Fanny</h4>
          <p>Super article !</p>
        </div>
      </div>
    </section>
    <section class="main-articleSingle"></section>
    `;

    //inclus page article
    $('.contentarticle').html(contentarticle);
   