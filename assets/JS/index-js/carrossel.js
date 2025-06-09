// CARROSSEL
const banners = [
    {
        img: "./assets/imgs/index-imgs/cell.png",
        alt: "Mais Vendidos",
        text: "Mais Vendidos",
        link: "./produtos.html"
    },
    {
        img: "./assets/imgs/index-imgs/fone.jpg",
        alt: "Produtos",
        text: "Mais Vendidos",
        link: "./produtos.html"
    },
    {
        img: "./assets/imgs/index-imgs/note.jpeg",
        alt: "Mais Vendidos",
        text: "Mais Vendidos",
        link: "./produtos.html"
    },
];

let slideAtual = 0;
let totalSlides = 0;
let intervalo;

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
    });

    atualizarSlides();
    iniciarCarrossel();
}

function atualizarSlides() {
    const container = document.getElementById("carrossel");
    const slides = container.children;
    totalSlides = slides.length;

    container.style.width = `calc(${totalSlides * 100}% + ${totalSlides - 1}rem)`;

    Array.from(slides).forEach(slide => {
        slide.style.width = `calc(${100 / totalSlides}% - 1rem)`; // Subtrai o gap
    });

    mostrarSlide(slideAtual);
}


function mostrarSlide(index) {
    const container = document.getElementById("carrossel");
    container.style.transition = 'transform 0.5s ease';
    container.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
}

function iniciarCarrossel() {
    if (intervalo) {
        clearInterval(intervalo);
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

document.addEventListener('DOMContentLoaded', () => {
    criarBanners(banners);

    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    prev.addEventListener("click", () => {
        slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
        mostrarSlide(slideAtual);
        reiniciarCarrossel();
    });

    next.addEventListener("click", () => {
        slideAtual = (slideAtual + 1) % totalSlides;
        mostrarSlide(slideAtual);
        reiniciarCarrossel();
    });

    window.addEventListener("resize", () => {
        mostrarSlide(slideAtual);
    });
});

// MENU MOBILE
const btn = document.getElementById('menu');
const menu = document.getElementById("mobile-menu");

btn.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
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
});
