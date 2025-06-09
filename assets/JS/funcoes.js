const http = axios.create({
    baseURL: "https://localhost:7279/api",
    headers: {
        "Content-Type": "application/json"
    },
});

function criarNavbar() {

    const favoritos = JSON.parse(localStorage.getItem("meusFavoritos")) || [];
    let contagemFavoritos = 0;

    if (favoritos.length > 0) {

        favoritos.forEach(item => {
            if (item.id == localStorage.getItem("id")) {
                contagemFavoritos++;
            }
        });
    }

    const meuCarrinho = JSON.parse(localStorage.getItem("meusCarrinhos")) || [];
    let contagemCarrinho = 0;

    if (meuCarrinho.length > 0) {

        let contador = 1;
        meuCarrinho.forEach(item => {


            if (item.idUsuario == localStorage.getItem("id") && item.quantidade > 0) {
                contagemCarrinho += contador;
            }
        });
    }



    const navHTML = `
      <nav class="w-full flex flex-wrap items-center justify-between px-4 sm:px-8 lg:px-16 py-2 bg-gradient-to-r from-gray-900 to-blue-900 shadow-sm fixed top-0 left-0 w-full z-50" id="barraSuperior">
          <div class="flex flex-row items-center gap-2 sm:gap-4 flex-grow">
              <button onclick="toggleMenu()" class="md:hidden text-white text-2xl mr-4">
                  <i class="bi bi-list"></i>
              </button>
  
              <a href="index.html" class="flex-shrink-0">
                  <img src="./assets/imgs/index-imgs/logo.png" alt="Logo" class="filter-slate-400 h-10 sm:h-12 lg:h-16">
              </a>
  
              <div id="desktop-search" class="hidden sm:flex bg-white rounded-full w-full shadow-md mt-2">
                  <div class="flex items-center border rounded-full px-3 py-1 w-full">
                      <input type="text" placeholder="Buscar..." class="flex-grow px-2 py-1 text-black outline-none bg-transparent">
                      <button class="w-7 h-7 flex items-center justify-center rounded-full bg-white text-gray-600 shadow hover:text-blue-700 hover:shadow-lg transition"><i class="bi bi-search"></i></button>
                  </div>
              </div>
          </div>
          
          <a href="https://wa.me/+5514997837479" class=" md:hidden flex flex-col items-center sm:flex-row">
              <i class="bi bi-whatsapp text-white text-lg"></i>
              <p class="text-white lg:inline-block text-[10px] font-semibold lg:mt-1">Entre em contato</p>
          </a>
          
          <div id="mobile-search" class="block sm:hidden bg-white rounded-full w-full shadow-md mt-2">
              <div class="flex items-center border rounded-full px-3">
                  <input type="text" placeholder="Buscar..." class="flex-grow px-2 py-1 text-black outline-none">
                  <button class="text-gray-700"><i class="bi bi-search"></i></button>
              </div>
          </div>
  
          <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-white flex flex-col gap-4 py-4 px-6 shadow-md text-gray-700 z-50">
              <div class="flex flex-col gap-4">
                  <a href="register.html" class="self-start inline-flex items-center gap-2 border-b-2 border-transparent hover:border-blue-500 transition duration-300">
                      <i class="bi bi-person"></i>
                      <span>Conta</span>
                  </a>
                  <a href="favoritos.html" class="self-start inline-flex items-center gap-2 border-b-2 border-transparent hover:border-blue-500 transition duration-300">
                      <i class="bi bi-heart"></i>
                      <span>Favoritos</span>
                  </a>
                  <a href="carrinho.html" class="self-start inline-flex items-center gap-2 border-b-2 border-transparent hover:border-blue-500 transition duration-300">
                      <i class="bi bi-cart2"></i>
                      <span>Carrinho</span>
                  </a>
                  <a href="https://wa.me/+5514997837479" class="self-start inline-flex items-center gap-2 border-b-2 border-transparent hover:border-blue-500 transition duration-300">
                      <i class="bi bi-whatsapp"></i>
                      <span>Contato</span>
                  </a>
              </div>
              <a href="loginAdm.html" id="linkAdmin" class="text-sm font-semibold self-start inline-flex items-center gap-2 border-b-2 border-transparent hover:border-blue-500 transition duration-300">
                  Área do administrador
              </a>
          </div>
          
          <div class="hidden md:flex items-center gap-4 md:ml-20 md:text-[19px] lg:text-[23px] text-gray-300 text-lg mt-2 sm:mt-0">
              <ul class="flex flex-row items-center justify-center gap-4 h-14">
                  <a href="loginAdm.html" class="text-sm font-semibold text-white hover:text-blue-700">
                      Área do administrador
                  </a>
                  <li>
                      <a href="register.html" id="iconPerfil" class="flex items-center justify-center h-full">
                          <i class="bi bi-person transition-transform duration-200 hover:scale-110"></i>
                      </a>
                  </li>
                  <li class="relative">
                    <a href="carrinho.html" class="flex items-center justify-center h-full">
                        <i class="bi bi-cart2 text-xl pt-1 transition-transform duration-200 hover:scale-110"></i>
                        <span id="contadorCarrinho" class="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center hidden"></span>
                    </a>
                  </li>
                  <li class="relative">
                    <a href="favoritos.html" class="flex items-center justify-center h-full">
                        <i class="bi bi-heart text-xl pt-1 transition-transform duration-200 hover:scale-110"></i>
                        <span id="contadorFavoritos" class="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center hidden"></span>
                    </a>
                  </li>
                  
                  <li class="flex text-center items-center justify-center mr-4">
                      <a href="https://wa.me/+5514997837479" class="flex flex-col items-center text-sm text-white transition-transform duration-200 hover:scale-105">
                          <i class="bi bi-whatsapp text-xl"></i>
                          <span></span>
                      </a>
                  </li>
              </ul>
          </div>
      </nav>
  
    <main class="mt-16">
        <div class="w-full flex items-center justify-center text-gray-100 font-semibold text-sm lg:text-base gap-7 pt-2 pb-2 justify-center bg-gradient-to-r from-slate-800 to-slate-900 shadow-md">
            <a href="acessados.html">
                <p class="hover:border-b-2 hover:border-full inline-block">Mais vendidos</p>
            </a>
            <a href="produtos.html">
                <p class="hover:border-b-2 hover:border-full inline-block">Produtos</p>
            </a>
        </div>
    </main>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    const nome = localStorage.getItem("nome");

    if (nome) {

        const iconPerfil = document.getElementById("iconPerfil");
        const linkAdmin = document.getElementById("linkAdmin");

        if (iconPerfil) iconPerfil.style.display = "none";
        if (linkAdmin) linkAdmin.style.display = "none";

        const userDiv = document.createElement("div");
        userDiv.className = "hidden md:flex items-center gap-4 text-white text-sm font-semibold";
        userDiv.id = "usuarioLogado";

        userDiv.innerHTML = `
            <span>Bem-vindo(a), <strong>${nome}</strong></span>
            <button onclick="logout()" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs">Deslogar</button>
        `;

        const navbar = document.getElementById("barraSuperior");

        if (navbar) {

            navbar.appendChild(userDiv);
            userDiv.classList.remove("hidden");
        }
    }

    const contadorFavoritos = document.getElementById("contadorFavoritos");

    if (contadorFavoritos) {
        if (contagemFavoritos > 0) {
            contadorFavoritos.textContent = contagemFavoritos;
            contadorFavoritos.classList.remove("hidden");
        } else {
            contadorFavoritos.classList.add("hidden");
        }
    }

    const contadorCarrinho = document.getElementById("contadorCarrinho");

    if (contadorCarrinho) {

        console.log("Contagem carrinho:", contagemCarrinho);
        if (contagemCarrinho > 0) {
            contadorCarrinho.textContent = contagemCarrinho;
            contadorCarrinho.classList.remove("hidden");
        } else {
            contadorCarrinho.classList.add("hidden");
        }
    }
}

function logout() {

    localStorage.removeItem("id");
    localStorage.removeItem("nome");
    localStorage.removeItem("email");
    localStorage.removeItem("telefone");
    localStorage.removeItem("cpf");
    localStorage.removeItem("tipo");

    location.reload();
}

function criarRodape() {
    const footerHTML = `
      <footer class="w-full text-slate-400 bg-gradient-to-r from-slate-900 to-slate-800 mt-16">

        <div class="fixed z-50 right-4 bottom-4 p-3 h-14 w-14 lg:h-18 lg:w-18 rounded-full shadow-md shadow-gray-600/30 bg-green-600 hover:bg-green-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            <a href="https://wa.me/+5514997837479" class="flex items-center justify-center text-gray-100">
                <span class="text-white text-2xl lg:3xl transition-transform transform hover:scale-125">
                    <i class="bi bi-whatsapp"></i>
                </span>
            </a>
        </div>

        <div class="mt-70 h-9 bg-gradient-to-r from-gray-900 to-blue-900 shadow-lg border-t-3 border-gray-200 text-sm lg:text-base lg:h-11 text-gray-300 font-semibold relative">
            <a href="#" id="voltar" class="flex gap-3 p-2 lg:p-2 justify-center">
                <p>Voltar para o inicio</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 mt-0.5 lg:mt-1 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>
            </a>
        </div>

        <div class="flex gap-7 pt-5 pb-5 justify-center text-[10px] text-s font-semibold sm:gap-14 lg:text-sm lg:pt-13 lg:pb-5 lg:gap-30 ">
            <img src="./assets/imgs/index-imgs/logo.png" alt="Logo" class="mt-3 h-10 filter-slate-400 sm:h-12 sm:mt-0 lg:h-17 lg:mt-0">
           
            <div class="flex flex-col">
                <a href="">
                    <p class="font-bold hover:text-gray-200 hover:border-b-2 hover:border-full inline-block">Suporte</p>
                </a>
                <a href="">
                    <p class="hover:text-gray-200 hover:border-b-2 hover:border-full inline-block">Entre em contato</p>
                </a>
                <a href="">
                    <p class="hover:text-gray-200 hover:border-b-2 hover:border-full inline-block">Perguntas Frequentes (FAQ)</p>
                </a>
                <a href="">
                    <p class="hover:text-gray-200 hover:border-b-2 hover:border-full inline-block">Termos e Condições</p>
                </a>
            </div>

            <div class="flex flex-col">
                <a href="">
                    <p class="hover:text-gray-200 hover:border-b-2 hover:border-full inline-block">Trabalhe conosco</p>
                </a>
                <a href="">
                    <p class="hover:text-gray-200 hover:border-b-2 hover:border-full inline-block">Acessibilidade</p>
                </a>
                <a href="">
                    <p class="hover:text-gray-200 hover:border-b-2 hover:border-full inline-block">Política de Privacidade</p>
                </a>
            </div>
        </div>
        <div class="pt-5 pb-5 text-[12px] lg:text-base text-center border-t border-gray-700 font-bold">
            <p>©2025 SwiftBuy. Todos os direitos reservados.</p>
        </div>
    </footer>
  `;

    document.getElementById("footer-container").innerHTML = footerHTML;
}


function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
}

function scrollLeft(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({
        left: -carousel.offsetWidth * 0.8,
        behavior: "smooth"
    });
}

function scrollRight(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({
        left: carousel.offsetWidth * 0.8,
        behavior: "smooth"
    });
}

//da simone
function cardsNovos(produto) {
    return `
        <div class="w-full lg:mt-10 grid grid-cols-2 px-5 mt-5 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
          <div class="bg-[#F9FAFB] text-[10px] lg:text-[13px] font-semibold text-gray-700 h-45 w-35 lg:h-65 lg:w-45 rounded-md shadow-md hover:border-2 hover:border-blue-400">
            <img src="${produto.imagem}" alt="${produto.nome}" class="w-20 ml-7.5 mt-2 lg:w-30 lg:mt-5">
            <p class="ml-3 mt-4 text-[13px] lg:text-base lg:ml-4">${produto.preco}</p>
            <p class="ml-3 mt-2 lg:ml-4">${produto.descricao}</p>
          </div>
        </div>
      `;
}

function cardFavoritos(produto) {
    return `
        <div class="bg-[#F9FAFB] text-[10px] lg:text-[13px] font-semibold text-gray-700 h-45 w-35 lg:h-65 lg:w-45 rounded-md shadow-md">
            <img src="./assets/imgs/produto10.png" alt="Luva de box" class="w-20 ml-7.5 mt-2 lg:w-30 lg:mt-5">
            <p class="ml-3 mt-4 text-[13px] lg:text-base lg:ml-4">${produto.preco}</p>
            <p class="ml-3 mt-2 lg:ml-4">${produto.descricao}</p>

            <button class="border border-blue-400 rounded-lg h-7 w-14 sm:h-8 sm:w-17 text-blue-400 font-semibold mt-7 ml-11 lg:mt-12 lg:ml-13 text-[13px] hover:text-blue-600 hover:border-blue-600 active:opacity-70">
                Excluir
            </button>
        </div>
    `;
}

async function getProdutos() {

    let page = 1;
    const limite_produtos = 10;

    const categoria = '1';
    const container = document.getElementById("produtos");

    if (container !== null) {

        while (true) {

            const response = await http.get(`/Produto?pagina=${page}&tamanho=${limite_produtos}&categoria=${categoria}`);
            const produtos = response.data;

            if (!produtos || produtos.length === 0) {
                break;
            }

            produtos.forEach(produto => {

                const nomeProduto = encodeURIComponent(produto.nome);
                const precoProduto = produto.preco.toFixed(2).replace('.', ',');

                container.innerHTML += `
                <div class="w-full lg:mt-10 grid grid-cols-2 px-5 mt-5 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
                    <a href="teladetalhe.html?id=${produto.id}&nomeProduto=${nomeProduto}"> 
                        <div class="bg-[#F9FAFB] text-[10px] lg:text-[13px] font-semibold text-gray-700 p-2 h-52 w-35 lg:h-70 lg:w-45 rounded-lg shadow-md border-transparent hover:border-2 hover:border-blue-400">
                            <img src="${produto.imagemProduto[0].urlImagem}" alt="${produto.nome}" class="w-20 h-20 ml-6 mt-2 lg:w-32 lg:h-30 lg:mt-2">
                            <p class="lg:text-[17px] font-bold text-gray-800 lg:ml-4 lg:mt-6 text-[14px] mt-2 ml-3 truncate">${produto.nome}</p>
                            <p class="ml-3 mt-1 text-[13px] lg:text-base lg:ml-4 lg:mt-2 preco">R$ ${precoProduto}</p>
                            <p class="ml-3 mt-2 lg:ml-4 truncate">${produto.descricao}</p>
                        </div>
                    </a>
                </div>
            `;
            });

            page++;
        }
    }

}

async function getProdutosMaisVendidos() {

    const container = document.getElementById("carouselMaisVendidos");
    const response = await http.get(`/Produto/maisVendidos`);
    const produtosMaisVendidos = response.data;

    const gridContainer = document.createElement("div");
    gridContainer.className = "w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-y-5 gap-x-6 px-5";

    if (container !== null) {
        produtosMaisVendidos.forEach(produto => {
            const nomeProduto = encodeURIComponent(produto.nome);
            const precoProduto = produto.preco.toFixed(2).replace('.', ',');

            const card = document.createElement("a");
            card.href = `teladetalhe.html?id=${produto.id}&nomeProduto=${nomeProduto}`;
            card.innerHTML = `
            <div class="bg-[#F9FAFB] text-[10px] lg:text-[13px] font-semibold text-gray-700 p-2 h-52 w-35 lg:h-70 lg:w-45 rounded-lg shadow-md border-2 border-transparent hover:border-2 hover:border-blue-400">
                <img src="${produto.imagemProduto[0].urlImagem}" alt="${produto.nome}" class="w-20 h-20 ml-6 mt-2 lg:w-32 lg:h-30 lg:mt-2">
                <p class="lg:text-[17px] font-bold text-gray-800 lg:ml-4 lg:mt-6 text-[14px] mt-2 ml-3 truncate">${produto.nome}</p>
                <p class="ml-3 mt-1 text-[13px] lg:text-base lg:ml-4 lg:mt-2 preco">R$ ${precoProduto}</p>
                <p class="ml-3 mt-2 lg:ml-4 truncate">${produto.descricao}</p>
            </div>
        `;
            gridContainer.appendChild(card);
        });

        container.appendChild(gridContainer);
    }
}


async function getMeusProdutosFavoritos() {

    const meusProdutosFavoritos = JSON.parse(localStorage.getItem("meusFavoritos")) || [];
    const container = document.getElementById("meus-favoritos");

    if (container !== null) {

        meusProdutosFavoritos.forEach(produto => {

            const nomeProduto = encodeURIComponent(produto.nome);
            const precoProduto = produto.preco.toFixed(2).replace('.', ',');

            container.innerHTML += `
            <div class="bg-[#F9FAFB] text-[10px] lg:text-[13px] font-semibold text-gray-700 p-2 h-70 w-35 lg:h-85 lg:w-45 rounded-lg shadow-md">
                <img src="${produto.imagem}" alt="${produto.nome}" class="w-20 ml-6 mt-2 lg:w-32 lg:h-30 lg:mt-2">
                <p class="lg:text-[17px] font-bold text-gray-800 lg:ml-4 lg:mt-3 text-[14px] mt-2 ml-3 truncate">${produto.nome}</p>
                <p class="ml-3 mt-1 text-[13px] lg:text-base lg:ml-4 lg:mt-2 preco">R$ ${precoProduto}</p>
                <p class="ml-3 mt-2 lg:ml-4 truncate">${produto.descricao}</p>

                <button class="border border-blue-400 rounded-lg h-7 w-14 sm:h-8 sm:w-17 text-blue-400 font-semibold mt-7 ml-9 lg:mt-12 lg:ml-13 text-[13px] hover:text-white hover:bg-blue-400 active:opacity-70" onclick="excluirProdutoFavorito(${produto.id})">
                    Excluir
                </button>


            </div>
        `;
        });
    }



}

async function excluirProdutoFavorito(produtoId) {

    if (confirm("Deseja realmente excluir o produto dos favoritos? A ação não terá reversão!")) {

        const meusProdutosFavoritos = localStorage.getItem("meusFavoritos") || [];

        if (meusProdutosFavoritos.length > 0) {

            const favoritos = JSON.parse(meusProdutosFavoritos);
            const index = favoritos.findIndex(produto => produto.id == produtoId);

            if (index !== -1) {
                favoritos.splice(index, 1);
                localStorage.setItem("meusFavoritos", JSON.stringify(favoritos));
                getMeusProdutosFavoritos();
                location.reload();
            }
        }
    }

}


document.addEventListener("DOMContentLoaded", function () {
    getProdutosMaisVendidos();
    getProdutos();
    criarRodape();
    getMeusProdutosFavoritos();
});

