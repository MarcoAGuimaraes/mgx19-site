document.addEventListener("DOMContentLoaded", () => {

  // MENU
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  console.log("toggle:", toggle); // debug

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // EMAILJS INIT
  emailjs.init("ln3paXVg4VoRXCS0U");

  // FORM
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_9k04ynr", "template_z2piglm", this)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      }, (error) => {
        alert("Erro ao enviar. Tente novamente.");
        console.log(error);
      });

  });

});