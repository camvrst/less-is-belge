import './style.scss';
import $ from 'jquery';
import { header, footer } from './src/view/view';


/* INCLUDE HEADER AND FOOTER */
const headerHTML = document.querySelector('header');
const footerHTML = document.querySelector('footer.footer');
console.log(headerHTML);

headerHTML.innerHTML = header;
footerHTML.innerHTML = footer;

// ***** NAV BAR ANIMATION ON CLICK RESPONSIVE ***** //

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('toggle');
});

// CONTACT FORM

  // INPUTS FORM
  const nom = document.getElementById('nom');
  const prenom = document.getElementById('prenom');
  const email = document.getElementById('email');
  const msg = document.getElementById('message');
  const btnEnvoyer = document.getElementById('btnPopContact');

  btnEnvoyer.disabled = true;

  nom.addEventListener('input', () => {
    if (nom.value) {
      btnEnvoyer.disabled = false;
    } else {
      btnEnvoyer.disabled = true;
    }
  });

  // OVERLAY POP UP FOR MSG SENT

  const overlay = document.getElementById('overlay');

  btnEnvoyer.addEventListener('click', openMoadl);
  function openMoadl(e) {
    e.preventDefault();
    if (document.querySelector('form').checkValidity()) {
      const overlayHTML = `
        <div id="popup" class="popup">
          <span id="btnClose" class="btnClose">&times;</span>
          <h2>Merci pour votre message, ${prenom.value} !</h2>
          <p class="popText">
            Nous vous répondrons dans les plus bref délais.
          </p>
          <img
            class="w-full"
            src="../assets/img/msg-sent.png"
            alt="Message envoyé"
          />
        </div>
      `
      overlay.innerHTML = overlayHTML;
      overlay.style.display = 'block';
      const btnClose = document.getElementById('btnClose');
      btnClose.addEventListener('click', closeModal);
      function closeModal() {
        overlay.style.display = 'none';
      };
      prenom.value = '';
      nom.value = '';
      email.value = '';
      msg.value = '';
    }
  }


