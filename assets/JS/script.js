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

document.addEventListener('DOMContentLoaded', () => {
    const acessarInformacoes = document.getElementById("acessarInformacoes");
    const exibirInformacoes = document.getElementById("exibirInformacoes");

    acessarInformacoes.addEventListener('click', () => {
        exibirInformacoes.classList.toggle("hidden");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const acessar = document.getElementById("acessar");
    const exibir = document.getElementById("exibir");

    acessar.addEventListener('click', () => {
        exibir.classList.toggle("hidden");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const editarInformacao = document.getElementById("editar-informacao");
    const formEditar = document.getElementById("form-editar");
    const remover = document.getElementById("remover");

    editarInformacao.addEventListener('click', () => {
        formEditar.classList.toggle("hidden");
    });

    remover.addEventListener('click', () => {
        remover.closest("div");
        formEditar.classList.add("hidden");

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cadastrarProduto = document.getElementById("cadastrar-produtos");
    const formCadastrar = document.getElementById("form-cadastrar");
    const remover = document.getElementById("remover1");

    cadastrarProduto.addEventListener('click', () => {
        formCadastrar.classList.toggle("hidden");
    });

    remover.addEventListener('click', () => {
        remover.closest("div");
        formCadastrar.classList.add("hidden");

    });
});



function mostrarImagem(event, idPreview, input) {
    const arquivo = event.target.files[0];
    const preview = document.getElementById(idPreview);
    const span = input.previousElementSibling;

    if (arquivo) {
        preview.src = URL.createObjectURL(arquivo);
        preview.classList.remove("hidden");
        if (span) span.classList.add("hidden"); 
    }
}

