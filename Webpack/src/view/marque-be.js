import $ from 'jquery'; 

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

    $('.contentmarques').html(contentmarques);