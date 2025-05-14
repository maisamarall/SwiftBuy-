window.addEventListener('scroll', () => {
    const barraSuperior = document.getElementById('barraSuperior');
    if (window.scrollY > 30) {
        barraSuperior.classList.add('fixed', 'top-0');
    }
    else {
        barraSuperior.classList.remove('fixed', 'top-0');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector("voltar");
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector("#barraSuperior").scrollIntoView({ behavior: "smooth" });
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const filtrar = document.getElementById("filtrar");
    const opcoes = document.getElementById("opcoes");
    
    filtrar.addEventListener('click', () => {
        opcoes.classList.toggle("hidden");
    });
});
