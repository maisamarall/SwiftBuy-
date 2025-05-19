// let bannerCount = 1;

function adicionarBanner() {
    const bannerId = Date.now();
    // const bannerCount = banners.length + 1;
    const container = document.getElementById('banners-container');
    const div = document.createElement('div');
    div.className = "grid md:grid-cols-3 sm:grid-cols-2 gap-6";
    div.id = `banner-${bannerId}`;

    const idInput = `upload-banner-${bannerId}`;

    div.innerHTML = `
        <div class="relative bg-blue-100 hover:bg-blue-200 border-2 border-dashed border-blue-300 rounded-lg flex flex-col items-center justify-center justify-between p-4 h-full cursor-pointer">
            <label for="upload-banner-${bannerId}" class="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                <img id="preview-${bannerId}" class="hidden mb-2 w-full h-auto object-cover rounded-md" />
                <i class="bi bi-upload text-3xl text-blue-600 mb-2"></i>
                <span class="mt-2 text-primary">Selecionar imagem</span>
            </label>
            <input type="file" id="${idInput}" class="hidden">
        </div>
        
        <div class="flex flex-col gap-3">
            <input type="text" class="nome-banner w-full px-3 py-2 rounded border border-gray-300 bg-gray-100 text-sm" placeholder="Nome do Banner">
            <select class="link-banner w-full px-3 py-2 rounded border border-gray-300 bg-white text-sm cursor-pointer">
                <option selected disabled>Redirecionar para página</option>
                <option value="./acessados.html">Mais acessados</option>
                <option value="./promocoes.html">Promoções</option>
                <option value="./lancamentos.html">Lançamentos</option>
                <option value="./produtos.html">Todos os produtos</option>
            </select>
        </div>
        
        <div class="flex justify-end mt-auto">
            <button onclick="removerBanner('banner-${bannerId}')" class="h-10 max-h-10 flex items-center justify-center gap-2 border border-red-500 text-red-500 rounded-md px-3 py-1.5 hover:bg-red-500 hover:text-white transition cursor-pointer">
                <i class="bi bi-trash3"></i> Excluir
            </button>
        </div>

        <button type="button" class="salvar-banner mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">Salvar</button>
    `;

    container.appendChild(div);

    const inputFile = div.querySelector(`#${idInput}`);
    const previewImg = div.querySelector(`#preview-${bannerId}`);
    const nomeInput = div.querySelector(".nome-banner");
    const linkSelect = div.querySelector(".link-banner");
    const btnSalvar = div.querySelector(".salvar-banner");

    let imgSrc = "";

    inputFile.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            imgSrc = URL.createObjectURL(file);
            previewImg.src = imgSrc;
            previewImg.classList.remove("hidden");

            const uploadIcon = div.querySelector(`#${idInput}`).previousElementSibling.querySelector("i");
            const uploadText = div.querySelector(`#${idInput}`).previousElementSibling.querySelector("span");

            if (uploadIcon) uploadIcon.classList.add("hidden"); // Esconde o ícone
            if (uploadText) {
                uploadText.textContent = "Mudar imagem";
                uploadText.classList.remove("text-primary", "text-base");
                uploadText.classList.add("text-xs", "text-gray-500");
            }
        }
    });

    btnSalvar.addEventListener("click", () => {
        const nome = nomeInput.value.trim();
        const link = linkSelect.value;

        if (!imgSrc || !nome || !link) {
            alert("Preencha todos os campos e selecione uma imagem.");
            return;
        }

        banners.push({
            img: imgSrc,
            alt: nome,
            text: nome,
            link: link
        });

        criarBanners(banners); // Atualiza carrossel
        alert("Banner adicionado com sucesso!");
    });
}

function removerBanner(id) {
    const banner = document.getElementById(id);
    if (banner) {
        banner.remove();
    }
}