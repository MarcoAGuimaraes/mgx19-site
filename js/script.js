// LINKS WHATSAPP

const whatsappLinks = {

  mgx19:
    "https://wa.me/5511921187806?text=Olá!%20Vim%20pelo%20site%20da%20%23MGX19%20e%20gostaria%20de%20conhecer%20melhor%20as%20soluções%20digitais.",

  starter:
    "https://wa.me/5511921187806?text=Olá!%20Vim%20pelo%20site%20da%20%23MGX19%20e%20tenho%20interesse%20na%20solução%20Starter.",

  growth:
    "https://wa.me/5511921187806?text=Olá!%20Vim%20pelo%20site%20da%20%23MGX19%20e%20tenho%20interesse%20na%20solução%20Growth.",

  pro:
    "https://wa.me/5511921187806?text=Olá!%20Vim%20pelo%20site%20da%20%23MGX19%20e%20tenho%20interesse%20na%20solução%20Pro.",

  consultoria:
    "https://wa.me/5511921187806?text=Olá!%20Vim%20pelo%20site%20da%20%23MGX19%20e%20tenho%20interesse%20em%20consultoria%20especializada.",

  mareag:
    "https://wa.me/5511921187806?text=Olá!%20Vim%20pelo%20site%20da%20%23Mareag%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.",

  beatriz:
    "https://wa.me/5511921187806?text=Olá!%20Vim%20pelo%20site%20da%20%23BeatrizDV%20e%20gostaria%20de%20mais%20informações."
};


// APLICA LINKS AUTOMATICAMENTE

document.querySelectorAll("[data-whatsapp]")

  .forEach((element) => {

    const key =
      element.dataset.whatsapp;

    if (whatsappLinks[key]) {

      element.href =
        whatsappLinks[key];
    }
});



 

document.querySelectorAll("[data-whatsapp]")

  .forEach((element) => {

    const key =
      element.dataset.whatsapp;

    if (whatsappLinks[key]) {

      element.href =
        whatsappLinks[key];
    }
});


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

  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });




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

// BOTÃO WHATSAPP COM DELAY + ANIMAÇÃO
const whatsappBtn = document.querySelector(".whatsapp-float");

setTimeout(() => {
  if (whatsappBtn) {
    whatsappBtn.classList.add("show");

    // ativa pulse depois da entrada
    setTimeout(() => {
      whatsappBtn.classList.add("pulse");
    }, 500);
  }
}, 3000); // aparece após 3 segundos


 