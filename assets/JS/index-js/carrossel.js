// CARROSSEL
const banners = [
    {
        img: "./assets/imgs/index-imgs/Captura de tela 2025-04-28 162103.png",
        alt: "Mais Acessados",
        text: "Mais Acessados",
        link: "./acessados.html"
    },
    {
        img: "./assets/imgs/index-imgs/Captura de tela 2025-04-28 165902.png",
        alt: "Promoções",
        text: "Promoções",
        link: "./promocoes.html"
    },
    {
        img: "./assets/imgs/index-imgs/Captura de tela 2025-04-28 162103.png",
        alt: "Lançamentos",
        text: "Lançamentos",
        link: "./lancamentos.html"
    }
];


function criarBanners(lista) {
    const container = document.getElementById("carrossel");
    container.innerHTML = "";
  
    lista.forEach(banner => {
      const elemento = document.createElement("a");
      elemento.href = banner.link;
      elemento.className = "relative group flex-shrink-0 w-full";
  
      elemento.innerHTML = `
      <img src="${banner.img}" alt="${banner.alt}" class="w-full object-cover">
      <div class="absolute bottom-0 left-0 w-full h-[20vh] flex items-end px-4 pb-4 transition duration-300 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100">
          <span class="text-white text-lg md:text-base font-bold">${banner.text}</span>
      </div>
      `;
  
      container.appendChild(elemento);
    })
}
criarBanners(banners);


const carrossel = document.getElementById('carrossel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let slideAtual = 0;
const totalSlides = carrossel.children.length;
let intervalo;

function mostrarSlide(index) {
    carrossel.style.transition = 'transform 0.5s ease';
    carrossel.style.transform = `translateX(-${index * 100}%)`;
}

function iniciarCarrossel() {
    if (intervalo) {
        clearInterval(intervalo)
    }
    intervalo = setInterval(() => {
        slideAtual = (slideAtual + 1) % totalSlides;
        mostrarSlide(slideAtual);
    }, 5000);
}

function reiniciarCarrossel() {
    clearInterval(intervalo);
    iniciarCarrossel();
}

next.addEventListener('click', () => {
    slideAtual = (slideAtual + 1) % totalSlides;
    mostrarSlide(slideAtual);
    reiniciarCarrossel();
});

prev.addEventListener('click', () => {
    slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
    mostrarSlide(slideAtual);
    reiniciarCarrossel();
});

window.addEventListener('load', () => {
    iniciarCarrossel();

window.addEventListener('resize', () => {
    mostrarSlide(slideAtual);
});
});

const btn = document.getElementById('menu');
const menu = document.getElementById("mobile-menu");

btn.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        setTimeout(() => {
            menu.classList.add('opacity-100', 'scale-100');
            menu.classList.remove('opacity-0', 'scale-95');
        }, 10);
    } else {
        menu.classList.add('opacity-0', 'scale-95');
        menu.classList.remove('opacity-100', 'scale-100');
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300);
    }
})



    // menu.classList.toggle('hidden');
    // menu.classList.toggle('flex');
    // menu.classList.toggle('flex-col');
    // menu.classList.toggle('gap-4');
    // menu.classList.toggle('mt-4');