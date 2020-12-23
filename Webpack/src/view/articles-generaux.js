import $ from 'jquery'; 

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
    <section class="premiere-section d-flex flex-wrap ">
      <div class="container-img">
        <div class="img-premiere" ></div>
      </div>
      <div class="para" >
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
        <a href="./article-simple.html" class="btnsuite-vert">lire la suite</a>
      </div>
    </section>
  </article>
  <article class="deuxieme-fiche">
      <section class="deuxieme-section d-flex flex-wrap justify-around">
        <div class="art1 ">
          <div class="img1" ></div>
          <h5>Titre</h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              modi doloremque aliquid ipsum sequi possimus.
            </p>
        </div>
        <div class="art2 ">
          <div class="img2" ></div>
          <h5>Titre</h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              modi doloremque aliquid ipsum sequi possimus.
            </p>
        </div>
        <div class="art3 ">
          <div class="img3" ></div>
          <h5>Titre</h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              modi doloremque aliquid ipsum sequi possimus.
            </p>
        </div>
      </section>
      <a href="./fiches-pratiques.html" class="btn-pages btn-fiches d-flex justify-around"><button> Voir toutes les fiches pratiques</button></a>
  </article>
   <!--lexique matiéres-->
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
   <section class="premiere-section d-flex flex-wrap ">
    <div class="container-img">
      <div class="img-premiere" ></div>
    </div>
     <div class="para" >
       <div class="hr-rose"></div>
       <div class="d-flex items-end">
         <p class="date"><i class="far fa-clock"></i>12 décembre 2020</p>
         <div class="petit-hr-roseclair"></div>
         <p class="comments">
           <i class="fas fa-comment"></i>5 commentaires
         </p>
       </div>
       <h4>le cotton</h4>
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
       <a href="" class="btnsuite-rose">lire la suite</a>
     </div>
   </section>
 </article>
 <article class="deuxieme-fiche">
     <section class="deuxieme-section d-flex flex-wrap justify-around">
       <div class="art1 ">
        <div class="img1" ></div>
         <h5>Titre</h5>
         <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
             modi doloremque aliquid ipsum sequi possimus.
           </p>
       </div>
       <div class="art2 ">
        <div class="img2" ></div>
         <h5>Titre</h5>
         <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
             modi doloremque aliquid ipsum sequi possimus.
           </p>
       </div>
       <div class="art3 ">
        <div class="img3" ></div>
         <h5>Titre</h5>
         <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
             modi doloremque aliquid ipsum sequi possimus.
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
    <section class="premiere-section d-flex flex-wrap ">
      <div class="container-img">
        <div class="img-premiere" ></div>
      </div>
      <div class="para" >
        <div class="hr-rosefonce"></div>
        <div class="d-flex items-end">
          <p class="date"><i class="far fa-clock"></i>12 décembre 2020</p>
          <div class="petit-hr-rosefonce"></div>
          <p class="comments">
            <i class="fas fa-comment"></i>5 commentaires
          </p>
        </div>
        <h4>Comment consommer ces vêtements de maniére durable?</h4>
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
        <a href="" class="btnsuite-rosefonce">lire la suite</a>
      </div>
    </section>
  </article>
  <article class="deuxieme-fiche">
      <section class="deuxieme-section d-flex flex-wrap justify-around">
        <div class="art1 ">
          <div class="img1" ></div>
          <h5>Titre</h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              modi doloremque aliquid ipsum sequi possimus.
            </p>
        </div>
        <div class="art2 ">
          <div class="img2" ></div>
          <h5>Titre</h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              modi doloremque aliquid ipsum sequi possimus.
            </p>
        </div>
        <div class="art3 ">
          <div class="img3" ></div>
          <h5>Titre</h5>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              modi doloremque aliquid ipsum sequi possimus.
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
   <section class="premiere-section d-flex flex-wrap ">
    <div class="container-img">
      <div class="img-premiere" ></div>
    </div>
     <div class="para" >
       <div class="hr-vertmoyen"></div>
       <div class="d-flex items-end">
         <p class="date"><i class="far fa-clock"></i>12 décembre 2020</p>
         <div class="petit-hr-vertmoyen"></div>
         <p class="comments">
           <i class="fas fa-comment"></i>5 commentaires
         </p>
       </div>
       <h4>Connaissez-vous cette marque belge?</h4>
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
       <a href="" class="btnsuite-vertmoyen">lire la suite</a>
     </div>
   </section>
 </article>
 <article class="deuxieme-fiche">
     <section class="deuxieme-section d-flex flex-wrap justify-around">
       <div class="art1 ">
        <div class="img1" ></div>
         <h5>Titre</h5>
         <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
             modi doloremque aliquid ipsum sequi possimus.
           </p>
       </div>
       <div class="art2 ">
        <div class="img2" ></div>
         <h5>Titre</h5>
         <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
             modi doloremque aliquid ipsum sequi possimus.
           </p>
       </div>
       <div class="art3 ">
        <div class="img3" ></div>
         <h5>Titre</h5>
         <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
             modi doloremque aliquid ipsum sequi possimus.
           </p>
       </div>
     </section>
     <a href="./articles-marques.html" class="btn-pages btn-marques d-flex justify-around"><button>Voir tous les articles sur les marques belges</button> </a>

 </article>
</div>
`;

$('.main').html(contentartgeneraux);
