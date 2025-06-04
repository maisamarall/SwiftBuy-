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

// Parte do carrinho de compras

// assets/JS/carrinho.js

document.addEventListener('DOMContentLoaded', () => {
    const carrinhoItensContainer = document.getElementById('carrinho-itens');
    const resumoProdutosContainer = document.getElementById('resumo-produtos');
    const resumoSubtotalSpan = document.getElementById('resumo-subtotal');
    const resumoTotalSpan = document.getElementById('resumo-total');
    const resumoValorFreteSpan = document.getElementById('resumo-valor-frete');
    const resumoTipoFreteSpan = document.getElementById('resumo-tipo-frete');
    const calcularFreteBtn = document.getElementById('calcular-frete');
    const cepInput = document.getElementById('cep');
    const opcoesFreteDiv = document.getElementById('opcoes-frete');
    const whatsappLink = document.getElementById('whatsapp-link');

    let valorFrete = 0;
    let tipoFrete = '';

    // Função para formatar números como moeda BRL
    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    // Função para calcular o subtotal e total
    const calcularTotais = () => {
        let subtotal = 0;
        document.querySelectorAll('.produto-item').forEach(item => {
            const preco = parseFloat(item.dataset.preco);
            const quantidade = parseInt(item.querySelector('.quantidade-input').value);
            subtotal += preco * quantidade;
        });

        const total = subtotal + valorFrete;

        resumoSubtotalSpan.textContent = formatCurrency(subtotal);
        resumoTotalSpan.textContent = formatCurrency(total);
        updateWhatsappLink(subtotal, total);
    };

    // Função para atualizar os detalhes do produto no resumo da compra
    const atualizarResumoProdutos = () => {
        resumoProdutosContainer.innerHTML = ''; // Limpa o resumo existente
        document.querySelectorAll('.produto-item').forEach(item => {
            const nome = item.dataset.nome;
            const preco = parseFloat(item.dataset.preco);
            const quantidade = parseInt(item.querySelector('.quantidade-input').value);
            const precoTotalItem = preco * quantidade;

            const div = document.createElement('div');
            div.classList.add('flex', 'justify-between', 'text-sm');
            div.innerHTML = `
                <span class="text-gray-700">${nome} (x${quantidade})</span>
                <span class="text-gray-700">${formatCurrency(precoTotalItem)}</span>
            `;
            resumoProdutosContainer.appendChild(div);
        });
    };

    // Função para atualizar o link do WhatsApp
    const updateWhatsappLink = (subtotal, total) => {
        let message = `Olá, gostaria de finalizar meu pedido!\n\nDetalhes do Pedido:\n`;
        document.querySelectorAll('.produto-item').forEach(item => {
            const nome = item.dataset.nome;
            const quantidade = parseInt(item.querySelector('.quantidade-input').value);
            const preco = parseFloat(item.dataset.preco);
            message += `- ${nome} (x${quantidade}) - ${formatCurrency(preco * quantidade)}\n`;
        });

        if (valorFrete > 0) {
            message += `\nFrete (${tipoFrete}): ${formatCurrency(valorFrete)}\n`;
        }
        message += `\nSubtotal: ${formatCurrency(subtotal)}\n`;
        message += `Total Geral: ${formatCurrency(total)}\n\n`;
        message += `Meu CEP para entrega é: ${cepInput.value || 'Não informado'}`;


        const encodedMessage = encodeURIComponent(message);
        whatsappLink.href = `https://wa.me/+5514997837479?text=${encodedMessage}`;
    };

    // --- Listeners de Eventos ---

    // Manipular botões de quantidade e remoção no carrinho
    carrinhoItensContainer.addEventListener('click', (event) => {
        const target = event.target;
        const produtoItem = target.closest('.produto-item');

        if (!produtoItem) return; // Não é um item de produto válido

        const quantidadeInput = produtoItem.querySelector('.quantidade-input');
        const precoItemSpan = produtoItem.querySelector('.preco-item');
        const precoUnitario = parseFloat(produtoItem.dataset.preco);
        let currentQuantity = parseInt(quantidadeInput.value);

        if (target.closest('.decrement-btn')) {
            if (currentQuantity > 1) {
                currentQuantity--;
            }
        } else if (target.closest('.increment-btn')) {
            currentQuantity++;
        } else if (target.closest('.remover-btn')) {
            produtoItem.remove(); // Remove o item do DOM
            calcularTotais();
            atualizarResumoProdutos();
            return; // Sai da função após remover
        }

        quantidadeInput.value = currentQuantity;
        precoItemSpan.textContent = formatCurrency(precoUnitario * currentQuantity);

        calcularTotais();
        atualizarResumoProdutos();
    });

    // Calcular Frete (simulado)
    calcularFreteBtn.addEventListener('click', () => {
        const cep = cepInput.value.replace(/\D/g, ''); // Remove não-dígitos
        if (cep.length === 8) {
            // Simulação de cálculo de frete
            const precoFretePadrao = 15.00;
            const precoFreteExpresso = 25.00;
            const prazoPadrao = "3-5 dias úteis";
            const prazoExpresso = "1-2 dias úteis";

            document.getElementById('valor-frete-padrao').textContent = precoFretePadrao.toFixed(2).replace('.', ',');
            document.getElementById('prazo-padrao').textContent = prazoPadrao;
            document.getElementById('valor-frete-expresso').textContent = precoFreteExpresso.toFixed(2).replace('.', ',');

            opcoesFreteDiv.classList.remove('hidden');

            // Limpa seleção de frete anterior
            document.querySelectorAll('input[name="shipping"]').forEach(radio => radio.checked = false);
            resumoValorFreteSpan.textContent = formatCurrency(0);
            resumoTipoFreteSpan.textContent = '';
            valorFrete = 0; // Zera o frete até um ser selecionado
            calcularTotais(); // Recalcula totais sem frete
        } else {
            alert('Por favor, digite um CEP válido com 8 dígitos.');
            opcoesFreteDiv.classList.add('hidden');
            valorFrete = 0;
            tipoFrete = '';
            resumoValorFreteSpan.textContent = formatCurrency(0);
            resumoTipoFreteSpan.textContent = '';
            calcularTotais();
        }
    });

    // Atualizar frete e totais ao selecionar uma opção de frete
    opcoesFreteDiv.addEventListener('change', (event) => {
        if (event.target.name === 'shipping') {
            valorFrete = parseFloat(event.target.value);
            if (event.target.id === 'standard') {
                tipoFrete = 'Padrão';
            } else if (event.target.id === 'express') {
                tipoFrete = 'Expresso';
            }
            resumoValorFreteSpan.textContent = formatCurrency(valorFrete);
            resumoTipoFreteSpan.textContent = tipoFrete;
            calcularTotais();
        }
    });

    // Formatar CEP enquanto o usuário digita
    cepInput.addEventListener('input', (event) => {
        let value = event.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        if (value.length > 5) {
            value = value.substring(0, 5) + '-' + value.substring(5, 8);
        } else if (value.length > 8) { // Limita a 8 dígitos após a formatação
            value = value.substring(0, 8);
        }
        event.target.value = value;
    });

    // Inicialização ao carregar a página
    calcularTotais();
    atualizarResumoProdutos();
});

// DETALHE DO PRODUTO

console.log("--> DEBUG: script.js foi carregado!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("--> DEBUG: DOMContentLoaded disparado!");

    // --- CÓDIGO PARA A TROCA DE IMAGENS ---
    const mainProductImage = document.getElementById('main-product-image');
    const thumbnailGallery = document.getElementById('thumbnail-gallery');

    if (mainProductImage && thumbnailGallery) {
        console.log("--> DEBUG: mainProductImage e thumbnailGallery ENCONTRADOS!");

        thumbnailGallery.addEventListener('click', function(event) {
            console.log("--> DEBUG: Clique detectado na galeria de miniaturas!");
            const clickedThumbnailDiv = event.target.closest('.thumbnail');
            
            if (clickedThumbnailDiv) {
                const clickedThumbnailImage = clickedThumbnailDiv.querySelector('img');
                if (clickedThumbnailImage) {
                    console.log("--> DEBUG: Miniatura clicada: ", clickedThumbnailImage.src);
                    document.querySelectorAll('.thumbnail').forEach(thumb => {
                        thumb.classList.remove('active-thumbnail');
                    });
                    clickedThumbnailDiv.classList.add('active-thumbnail');
                    mainProductImage.src = clickedThumbnailImage.src;
                    console.log("--> DEBUG: Imagem principal atualizada para: ", mainProductImage.src);
                } else {
                    console.log("--> DEBUG: Não foi possível encontrar a tag <img> dentro da miniatura clicada.");
                }
            } else {
                console.log("--> DEBUG: Clique não foi em uma miniatura válida.");
            }
        });

        const firstThumbnail = thumbnailGallery.querySelector('.thumbnail');
        if (firstThumbnail && !firstThumbnail.classList.contains('active-thumbnail')) {
            firstThumbnail.classList.add('active-thumbnail');
            console.log("--> DEBUG: Adicionada classe active-thumbnail à primeira miniatura.");
        }

    } else {
        console.log("--> DEBUG: mainProductImage ou thumbnailGallery NÃO ENCONTRADOS.");
        if (!mainProductImage) {
            console.log("--> DEBUG: mainProductImage está nulo.");
        }
        if (!thumbnailGallery) {
            console.log("--> DEBUG: thumbnailGallery está nulo.");
        }
    }

    // --- CÓDIGO PARA AUMENTAR/DIMINUIR A QUANTIDADE E ATUALIZAR O PREÇO ---
    const productQuantityInput = document.getElementById('product-quantity-input');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const productPriceDisplay = document.getElementById('product-price'); // Novo: elemento que exibe o preço

    // Verifica se os elementos de quantidade E preço existem
    if (productQuantityInput && incrementBtn && decrementBtn && productPriceDisplay) {
        console.log("--> DEBUG: Elementos de quantidade e preço encontrados!");

        // Pega o preço unitário do atributo data-unit-price
        const unitPrice = parseFloat(productPriceDisplay.dataset.unitPrice); // Converte para número decimal

        // Função para atualizar o preço total
        function updateTotalPrice() {
            const currentQuantity = parseInt(productQuantityInput.value);
            const newTotalPrice = (unitPrice * currentQuantity).toFixed(2); // Multiplica e formata para 2 casas decimais
            
            // Formata para o padrão brasileiro (R$ X.XXX,XX)
            productPriceDisplay.textContent = `R$ ${newTotalPrice.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
            console.log("Preço total atualizado para:", productPriceDisplay.textContent);
        }

        // Adiciona listeners para os botões de quantidade
        incrementBtn.addEventListener('click', function() {
            let currentValue = parseInt(productQuantityInput.value);
            productQuantityInput.value = currentValue + 1;
            updateTotalPrice(); // Chama a função para atualizar o preço
            console.log("Quantidade aumentada para:", productQuantityInput.value);
        });

        decrementBtn.addEventListener('click', function() {
            let currentValue = parseInt(productQuantityInput.value);
            if (currentValue > 1) {
                productQuantityInput.value = currentValue - 1;
                updateTotalPrice(); // Chama a função para atualizar o preço
                console.log("Quantidade diminuída para:", productQuantityInput.value);
            }
        });

        // Opcional: Atualiza o preço assim que a página é carregada, caso a quantidade inicial não seja 1
        updateTotalPrice();

    } else {
        console.log("--> DEBUG: Elementos de quantidade (input, +, -) ou preço NÃO ENCONTRADOS.");
        if (!productQuantityInput) console.log("--> DEBUG: productQuantityInput está nulo.");
        if (!incrementBtn) console.log("--> DEBUG: incrementBtn está nulo.");
        if (!decrementBtn) console.log("--> DEBUG: decrementBtn está nulo.");
        if (!productPriceDisplay) console.log("--> DEBUG: productPriceDisplay está nulo.");
    }
});

