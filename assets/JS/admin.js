const http = axios.create({
    baseURL: "https://localhost:7279/api",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
    },
});
    
function adicionarBanner() {
    const bannerId = Date.now();
    const container = document.getElementById("banners-container");
    const div = document.createElement("div");
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

            if (uploadIcon) uploadIcon.classList.add("hidden");
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
            link: link,
        });

        criarBanners(banners);
        alert("Banner adicionado com sucesso!");
    });
}

function removerBanner(id) {
    const banner = document.getElementById(id);
    if (banner) {
        banner.remove();
    }
}

function preencherFormularioAdm(id = 1) {
    document.getElementById("idEdit").value = localStorage.getItem("idAdm") || "";
    document.getElementById("nomeEdit").value = localStorage.getItem("nomeAdm") || "";
    document.getElementById("emailEdit").value = localStorage.getItem("emailAdm") || "";
    document.getElementById("numeroEdit").value = localStorage.getItem("telefoneAdm") || "";
    document.getElementById("cpfEdit").value = localStorage.getItem("cpfAdm") || "";
}

function editar() {

    const id = document.getElementById("idEdit").value;
    const nome = document.getElementById("nomeEdit").value;
    const email = document.getElementById("emailEdit").value;
    const telefone = document.getElementById("numeroEdit").value;
    const cpf = document.getElementById("cpfEdit").value;

    localStorage.setItem("idAdm", id);
    localStorage.setItem("nomeAdm", nome);
    localStorage.setItem("emailAdm", email);
    localStorage.setItem("telefoneAdm", telefone);
    localStorage.setItem("cpfAdm", cpf);

    const jsonEdicao = {
        id: id,
        nome: nome,
        email: email,
        telefone: telefone,
        cpf: cpf,
    };

    http.put(`/Usuario/${id}?_method=PUT`, jsonEdicao)
        .then(() => {
            alert("Informações atualizadas com sucesso!");
            window.location.href = "area_administrador.html";
        })
        .catch((error) => {
            console.error("Erro ao atualizar informações:", error);
        });
}

function adicionarProduto() {
    const nome = document.getElementById("nomeProduto").value;
    const descricao = document.getElementById("descricaoProduto").value;
    const preco = document.getElementById("precoProduto").value;
    const imagensSplit = document.getElementById("imagensProduto").value.split(",");

    const imagens = imagensSplit.map((url) => ({ urlImagem: url }));

    const jsonCadastroProduto = {
        nome: nome,
        descricao: descricao,
        categoria: "string",
        preco: preco,
        imagemProduto: imagens,
    };

    http.post("/Produto", jsonCadastroProduto)
        .then(() => {
            alert("Produto cadastrado com sucesso!");
            window.location.href = "area_administrador.html";
        })
        .catch((error) => {
            console.error("Erro ao cadastrar produto:", error);
        });
}

function atualizarProduto() {
    const idProduto = document.getElementById("idProduto").value;
    const nome = document.getElementById("nomeProduto").value;
    const descricao = document.getElementById("descricaoProduto").value;
    const preco = document.getElementById("precoProduto").value;
    const imagensSplit = document.getElementById("imagensProduto").value.split(",");

    const imagens = imagensSplit.map((url) => ({ urlImagem: url }));

    const jsonAtualizarProduto = {
        nome: nome,
        descricao: descricao,
        categoria: "string",
        preco: preco,
        imagemProduto: imagens,
    };

    http.put(`/Produto?id=${idProduto}`, jsonAtualizarProduto)
        .then(() => {
            alert(`Produto '${nome}' atualizado com sucesso!`);
            window.location.href = "area_administrador.html";
        })
        .catch((error) => {
            console.error("Erro ao atualizar produto:", error);
        });
}

function excluirProduto(id) {
    if (confirm("Deseja realmente excluir o produto? A ação não terá reversão.")) {
        http.delete(`/Produto/${id}`)
            .then(() => {
                alert("Produto deletado com sucesso!");
                window.location.href = "area_administrador.html";
            })
            .catch((error) => {
                console.error("Erro ao excluir produto:", error);
            });
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("idVisualizar").value = localStorage.getItem("nomeAdm");
    document.getElementById("nomeVisualizar").value = localStorage.getItem("nomeAdm");
    document.getElementById("emailVisualizar").value = localStorage.getItem("emailAdm");
    document.getElementById("numeroVisualizar").value = localStorage.getItem("telefoneAdm");
    document.getElementById("cpfVisualizar").value = localStorage.getItem("cpfAdm");

    document.getElementById("editar-informacao").addEventListener("click", preencherFormularioAdm);

    const nomeVendedor = document.getElementById("nomeVendedorAdm");
    if (nomeVendedor) {
        nomeVendedor.innerHTML = "Bem-vindo(a), " + localStorage.getItem("nomeAdm");
    }

    const editarProduto = document.getElementById("editar-produtos");
    if (editarProduto) {
        editarProduto.addEventListener("click", () => {
            formCadastrar.classList.toggle("hidden");
            document.getElementById("titulo-modal").value = "Editar produto";
        });
    }
});
