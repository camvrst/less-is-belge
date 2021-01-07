export const renderComment = () => {
  const nom = document.getElementById("nom-comments");
  const prenom = document.getElementById("prenom-comments");
  const email = document.getElementById("email-comments");
  const msg = document.getElementById("msg-comments");
  const btnEnvoyer = document.getElementById("btn-comments");

  btnEnvoyer.disabled = true;

  nom.addEventListener("input", () => {
    if (nom.value) {
      btnEnvoyer.disabled = false;
    } else {
      btnEnvoyer.disabled = true;
    }
  });

  // OVERLAY POP UP FOR MSG SENT

  const overlay = document.getElementById("overlay");

  btnEnvoyer.addEventListener("click", openMoadl);
  function openMoadl(e) {
    e.preventDefault();
    if (document.querySelector("form").checkValidity()) {
      const overlayHTML = `
      <div id="popup" class="popup">
        <span id="btnClose" class="btnClose">&times;</span>
        <h2>Merci pour votre commentaire, ${prenom.value} !</h2>
        <p class="popText">
          Nous l'ajouterons après vérification de sa validité.
        </p>
        <img
          class="w-full"
          src="../assets/img/writing.png"
          alt="Message envoyé"
        />
      </div>
    `;
      overlay.innerHTML = overlayHTML;
      overlay.style.display = "block";
      const btnClose = document.getElementById("btnClose");
      btnClose.addEventListener("click", closeModal);
      function closeModal() {
        overlay.style.display = "none";
      }
      prenom.value = "";
      nom.value = "";
      email.value = "";
      msg.value = "";
    }
  }
};
