let carrinho = [];
let total = 0;

function adicionarAoCarrinho(item, preco) {
    carrinho.push({ item, preco });
    total += preco;

    // Atualizar a lista no carrinho
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);

    // Atualizar a lista no carrinho
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho-lista');
    const totalValor = document.getElementById('total-valor');

    // Limpar a lista
    carrinhoLista.innerHTML = '';

    // Adicionar itens ao carrinho
    carrinho.forEach((item, index) => {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <span>${item.item} - R$ ${item.preco.toFixed(2)}</span>
            <button id="remove-item" onclick="removerDoCarrinho(${index})">Remover</button>
        `;

        carrinhoLista.appendChild(listItem);
    });

    // Atualizar o total
    totalValor.textContent = total.toFixed(2);
}
