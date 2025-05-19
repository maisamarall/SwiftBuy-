function criarNavbar() {
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
              <a href="" class="text-sm font-semibold self-start inline-flex items-center gap-2 border-b-2 border-transparent hover:border-blue-500 transition duration-300">
                  Área do administrador
              </a>
          </div>
          
          <div class="hidden md:flex items-center gap-4 md:ml-20 md:text-[19px] lg:text-[23px] text-gray-300 text-lg mt-2 sm:mt-0">
              <ul class="flex flex-row items-center justify-center gap-4 h-14">
                  <a href="registerAdm.html" class="text-sm font-semibold text-white hover:text-blue-700">
                      Área do administrador
                  </a>
                  <li>
                      <a href="register.html" class="flex items-center justify-center h-full">
                          <i class="bi bi-person transition-transform duration-200 hover:scale-110"></i>
                      </a>
                  </li>
                  <li>
                      <a href="carrinho.html" class="flex items-center justify-center h-full">
                          <i class="bi bi-cart2 transition-transform duration-200 hover:scale-110"></i>
                      </a>
                  </li>
                  <li>
                      <a href="favoritos.html" class="flex items-center justify-center h-full">
                          <i class="bi bi-heart text-xl pt-1 transition-transform duration-200 hover:scale-110"></i>
                      </a>
                  </li>
                  <li class="flex text-center items-center justify-center">
                      <a href="https://wa.me/+5514997837479" class="flex flex-col items-center text-sm text-white transition-transform duration-200 hover:scale-105">
                          <i class="bi bi-whatsapp text-xl"></i>
                          <span>Entre em contato</span>
                      </a>
                  </li>
              </ul>
          </div>
      </nav>
  
      <main>
          <div class="w-full flex items-center justify-center text-gray-100 font-semibold text-sm lg:text-base gap-7 pt-2 pb-2 justify-center bg-gradient-to-r from-slate-800 to-slate-900 shadow-md">
              <a href="acessados.html">
                  <p class="hover:border-b-2 hover:border-full inline-block">Mais acessados</p>
              </a>
              <a href="lancamentos.html">
                  <p class="hover:border-b-2 hover:border-full inline-block">Lançamentos</p>
              </a>
              <a href="promocoes.html">
                  <p class="hover:border-b-2 hover:border-full inline-block">Promoções</p>
              </a>
          </div>
      </nav>
    `;
  
    document.body.insertAdjacentHTML('afterbegin', navHTML)
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

        <div class="mt-100 h-9 bg-gradient-to-r from-gray-900 to-blue-900 shadow-lg border-t-3 border-gray-200 text-sm lg:text-base lg:h-11 text-gray-300 font-semibold">
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
criarRodape();
  
  
function criarCard(produto) {
    return `
    <div class="flex-shrink-0 min-w-[140px] w-[45vw] max-w-[180px] sm:w-[160px] sm:max-w-[200px] lg:w-[180px] lg:max-w-[220px]">
      <div class="relative bg-white text-xs sm:text-sm font-semibold text-gray-700 rounded-lg border-2 border-transparent p-2 h-full flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:border-blue-400">
        <div class="h-[140px] sm:h-[160px] flex items-center justify-center">
          <img src="${produto.imagem}" alt="${produto.nome}" class="max-w-full max-h-full rounded-md object-contain">
        </div>
        <div class="mt-2 px-1">
          <p class="ml-3 mt-4 text-[13px] lg:text-base lg:ml-4">${produto.preco}</p>
          <p class="mb-2 ml-3 mt-2 truncate">${produto.nome}</p>
        </div>
      </div>
    </div>
`; 
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
  
  