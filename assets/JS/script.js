document.addEventListener('DOMContentLoaded', () => {

    const acessarInformacoes = document.getElementById("acessarInformacoes");
    const exibirInformacoes = document.getElementById("adm-mobile-form");

    if (acessarInformacoes && exibirInformacoes) {

        acessarInformacoes.addEventListener('click', () => {

            exibirInformacoes.classList.toggle("hidden");
        });
    }

    const acessar = document.getElementById("acessar");
    const exibir = document.getElementById("adm-form");

    if (acessar && exibir) {

        acessar.addEventListener('click', () => {

            exibir.classList.toggle("hidden");
        });
    }

    const editarInformacao = document.getElementById("editar-informacao");
    const formEditar = document.getElementById("form-editar");
    const remover = document.getElementById("remover");

    if (editarInformacao && formEditar) {

        editarInformacao.addEventListener('click', () => {
            formEditar.classList.toggle("hidden");
        });
    }
    if (remover && formEditar) {

        remover.addEventListener('click', () => {

            formEditar.classList.add("hidden");
        });
    }


    const cadastrarProduto = document.getElementById("cadastrar-produtos");
    const formCadastrar = document.getElementById("form-cadastrar");
    const remover1 = document.getElementById("remover1");

    if (cadastrarProduto && formCadastrar) {

        cadastrarProduto.addEventListener('click', () => {

            formCadastrar.classList.toggle("hidden");
        });
    }
    if (remover1 && formCadastrar) {

        remover1.addEventListener('click', () => {

            formCadastrar.classList.add("hidden");
        });
    }

    // Função mostrar imagem ao selecionar arquivo
    window.mostrarImagem = function (event, idPreview, input) {

        const arquivo = event.target.files[0];
        const preview = document.getElementById(idPreview);

        const span = input.previousElementSibling;

        if (arquivo && preview) {

            preview.src = URL.createObjectURL(arquivo);
            preview.classList.remove("hidden");
            if (span) span.classList.add("hidden");
        }
    };

    // Parte do carrinho de compras
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
    const idUsuario = localStorage.getItem('id');

    let valorFrete = 0;
    let tipoFrete = '';

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const calcularTotais = () => {

        let subtotal = 0;

        const produtosCarrinho = localStorage.getItem('meusCarrinhos') ? JSON.parse(localStorage.getItem('meusCarrinhos')) : [];

        produtosCarrinho.forEach(item => {

            if(item.idUsuario !== idUsuario) return;

            const preco = parseFloat(item.preco);
            const quantidade = parseInt(item.quantidade);
            subtotal += preco * quantidade;
        });

        const total = subtotal + valorFrete;

        if (resumoSubtotalSpan) resumoSubtotalSpan.textContent = formatCurrency(subtotal);
        if (resumoTotalSpan) resumoTotalSpan.textContent = formatCurrency(total);

        updateWhatsappLink(subtotal, total);
    };

    const atualizarResumoProdutos = () => {

        if (!resumoProdutosContainer) return;

        resumoProdutosContainer.innerHTML = '';
        document.querySelectorAll('.produto-item').forEach(item => {

            const nome = item.dataset.nome || 'Produto';
            const preco = parseFloat(item.dataset.preco) || 0;

            const quantidade = parseInt(item.querySelector('.quantidade-input').value) || 0;
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

    const updateWhatsappLink = (subtotal, total) => {

        if (!whatsappLink) return;

        const carrinhoLS = JSON.parse(localStorage.getItem('meusCarrinhos') || '[]').filter(item => item.idUsuario === idUsuario);
        let message = 'Olá, gostaria de finalizar meu pedido!\n\nDetalhes do Pedido:\n';

        carrinhoLS.forEach(item => {
            message += `- ${item.nome} (x${item.quantidade}) - ${formatCurrency(item.preco * item.quantidade)}\n`;
        });

        if (valorFrete > 0) {

            message += `\nFrete (${tipoFrete}): ${formatCurrency(valorFrete)}\n`;
        }

        message += `\nSubtotal: ${formatCurrency(subtotal)}\n`;
        message += `Total Geral: ${formatCurrency(total)}\n\n`;
        message += `Meu CEP para entrega é: ${cepInput ? (cepInput.value || 'Não informado') : 'Não informado'}`;

        whatsappLink.href = `https://wa.me/+5514997837479?text=${encodeURIComponent(message)}`;
    };

    if (carrinhoItensContainer) {

        carrinhoItensContainer.addEventListener('click', (event) => {

            const target = event.target;
            const produtoItem = target.closest('.produto-item');

            if (!produtoItem) return;

            const quantidadeInput = produtoItem.querySelector('.quantidade-input');
            const precoItemSpan = produtoItem.querySelector('.preco-item');

            const precoUnitario = parseFloat(produtoItem.dataset.preco) || 0;
            let currentQuantity = parseInt(quantidadeInput.value) || 1;

            if (target.closest('.decrement-btn')) {

        
                if (currentQuantity > 1) currentQuantity--;

            } else if (target.closest('.increment-btn')) {

                currentQuantity++;

            } else if (target.closest('.remover-btn')) {

                produtoItem.remove();
                calcularTotais();
                atualizarResumoProdutos();
                return;
            }

            quantidadeInput.value = currentQuantity;

            if (precoItemSpan) precoItemSpan.textContent = formatCurrency(precoUnitario * currentQuantity);

            calcularTotais();
            atualizarResumoProdutos();
        });
    }

    if (calcularFreteBtn && cepInput && opcoesFreteDiv) {
        calcularFreteBtn.addEventListener('click', () => {
            const cep = cepInput.value.replace(/\D/g, '');
            if (cep.length === 8) {
                const precoFretePadrao = 15.00;
                const precoFreteExpresso = 25.00;
                const prazoPadrao = "3-5 dias úteis";
                const prazoExpresso = "1-2 dias úteis";

                document.getElementById('valor-frete-padrao').textContent = precoFretePadrao.toFixed(2).replace('.', ',');
                document.getElementById('prazo-padrao').textContent = prazoPadrao;
                document.getElementById('valor-frete-expresso').textContent = precoFreteExpresso.toFixed(2).replace('.', ',');

                opcoesFreteDiv.classList.remove('hidden');

                document.querySelectorAll('input[name="shipping"]').forEach(radio => radio.checked = false);
                valorFrete = 0;
                tipoFrete = '';
                if (resumoValorFreteSpan) resumoValorFreteSpan.textContent = formatCurrency(0);
                if (resumoTipoFreteSpan) resumoTipoFreteSpan.textContent = '';
                calcularTotais();
            } else {
                alert('Por favor, digite um CEP válido com 8 dígitos.');
                opcoesFreteDiv.classList.add('hidden');
                valorFrete = 0;
                tipoFrete = '';
                if (resumoValorFreteSpan) resumoValorFreteSpan.textContent = formatCurrency(0);
                if (resumoTipoFreteSpan) resumoTipoFreteSpan.textContent = '';
                calcularTotais();
            }
        });
    }

    const radiosFrete = document.querySelectorAll('input[name="shipping"]');
    radiosFrete.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                valorFrete = parseFloat(radio.dataset.price) || 0;
                tipoFrete = radio.dataset.type || '';
                if (resumoValorFreteSpan) resumoValorFreteSpan.textContent = formatCurrency(valorFrete);
                if (resumoTipoFreteSpan) resumoTipoFreteSpan.textContent = tipoFrete;
                calcularTotais();
            }
        });
    });

    calcularTotais();
    atualizarResumoProdutos();
});
