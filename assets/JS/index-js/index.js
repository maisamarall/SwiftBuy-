
// CARDS PRODUTOS

const limite_produtos = 12;

criarCard = (produto) => {

    const imagemPrincipal = produto.imagemProduto[0].urlImagem;
    const imagensPorVirgula = produto.imagemProduto.map(imagem => imagem.urlImagem).join(',');

    return `<div class="flex-shrink-0 min-w-[140px] w-[45vw] max-w-[180px] sm:w-[160px] sm:max-w-[200px] lg:w-[180px] lg:max-w-[220px]">
      <div class="relative bg-white text-xs sm:text-sm font-semibold text-gray-700 rounded-lg border-2 border-transparent p-2 h-full flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:border-blue-400">
        <div class="h-[140px] sm:h-[160px] flex items-center justify-center">
          <img src="${imagemPrincipal}" alt="${produto.nome}" class="max-w-full max-h-full rounded-md object-contain">
        </div>
        <div class="mt-2 px-1">
          <p class="ml-3 mt-4 text-[13px] lg:text-base lg:ml-5 truncate">${produto.nome}</p>
          <p class="mb-2 ml-3 mt-2 text-[13px] lg:text-base lg:ml-4 line-clamp-2 truncate">R$${produto.preco}</p>
        </div>
        <div class="flex gap-2 mt-2">
            <button class="text-gray-600 hover:text-gray-800 w-25" onclick="editarProduto('${produto.id}', '${produto.nome}', '${produto.descricao}', '${produto.preco}', '${imagensPorVirgula}')">
                <i class="bi bi-pencil-square"></i>
            </button>
            <button class="text-gray-600 hover:text-gray-800 w-25" onclick="excluirProduto(${produto.id})">
                <i class="bi bi-trash"></i>
            </button>
        </div>
      </div>
    </div>
    `;
}


// window.addEventListener('resize', () => {
//     tamanhoVisivel = calcularTamanhoVisivel();
//     atualizarCarousel();
// });


document.addEventListener("DOMContentLoaded", function () {

    const produtos = getProdutos();

    Promise.resolve(produtos).then(
        (value) => {

            const produtosCards = value.data;

            const carousel = document.getElementById('carouselProdutos');

            if (carousel && Array.isArray(produtosCards)) {

                produtosCards.forEach(produto => {

                    const cardHTML = criarCard(produto);
                    carousel.insertAdjacentHTML('beforeend', cardHTML);
                });
            }

        }
    );


});

function editarProduto(id, titulo, descricao, preco, imagens) {

    const formCadastrar = document.getElementById("form-cadastrar");
    const addProduto = document.getElementById("btnAdicionarProduto");
    const atualizarProduto = document.getElementById("btnEditarProduto");

    formCadastrar.classList.toggle("hidden");
    document.getElementById("titulo-modal").innerHTML = "Editar produto";

    addProduto.classList.add('hidden');
    atualizarProduto.classList.remove('hidden');

    document.getElementById("idProduto").value = id;
    document.getElementById("nomeProduto").value = titulo;
    document.getElementById("descricaoProduto").value = descricao;
    document.getElementById("precoProduto").value = preco;
    document.getElementById("imagensProduto").value = imagens;    
}

function getProdutos(page = 1) {

    return http.get(`/Produto?pagina=${page}&tamanho=${limite_produtos}&categoria=1`);
}