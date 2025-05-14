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
    const filtrarAcessados = document.getElementById("filtrar");
    const opcoesAcessados = document.getElementById("opcoes");
    
    filtrarAcessados.addEventListener('click', () => {
        opcoesAcessados.classList.toggle("hidden");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filtrarLancamentos = document.getElementById("filtrar1");
    const opcoesLancamentos = document.getElementById("opcoes1");
    
    filtrarLancamentos.addEventListener('click', () => {
        opcoesLancamentos.classList.toggle("hidden");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filtrarProdutos = document.getElementById("filtrar2");
    const opcoesProdutos = document.getElementById("opcoes2");
    
    filtrarProdutos.addEventListener('click', () => {
        opcoesProdutos.classList.toggle("hidden");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filtrarPromocoes = document.getElementById("filtrar3");
    const opcoesPromocoes = document.getElementById("opcoes3");
    
    filtrarPromocoes.addEventListener('click', () => {
        opcoesPromocoes.classList.toggle("hidden");
    });
});
