// ESTADO DO PRODUTO
let produtoAtual = 1;

// ELEMENTOS
const botaoBuscar = document.getElementById("btnBuscar");
const campo = document.getElementById("campoBusca");

const btnAnterior = document.getElementById("btnAnterior");
const btnProximo = document.getElementById("btnProximo");

// CARREGAR PRIMEIRO PRODUTO
carregarProduto(produtoAtual);

// EVENTOS
// Buscar pelo nome
botaoBuscar.addEventListener("click", buscarProduto);

// Enter no input
campo.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    buscarProduto();
  }
});

// Produto anterior
btnAnterior.addEventListener("click", function () {
  if (produtoAtual > 1) {
    produtoAtual--;
    carregarProduto(produtoAtual);
  }
});

// Próximo produto
btnProximo.addEventListener("click", function () {
  produtoAtual++;
  carregarProduto(produtoAtual);
});

// BUSCAR POR ID
function carregarProduto(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((resposta) => resposta.json())
    .then((produto) => {
      atualizarTela(produto);
    })
    .catch(() => {
      alert("Erro ao carregar produto.");
    });
}

// BUSCAR POR NOME
function buscarProduto() {
  const termo = campo.value;
  if (termo === "") {
    alert("Digite um produto.");
    return;
  }

  fetch(`https://dummyjson.com/products/search?q=${termo}`)
    .then((res) => res.json())
    .then((dados) => {
      if (dados.products.length === 0) {
        alert("Produto não encontrado.");
        return;
      }

      const produto = dados.products[0];

      // importante:
      // atualiza também o ID atual
      produtoAtual = produto.id;

      atualizarTela(produto);
    })
    .catch(() => {
      alert("Erro ao buscar produto.");
    });
}

// ATUALIZA HTML
function atualizarTela(produto) {
  document.getElementById("tituloProduto").innerText = produto.title;

  document.getElementById("precoProduto").innerText = "R$ " + produto.price;

  document.getElementById("categoriaProduto").innerText = produto.category;

  document.getElementById("descricaoProduto").innerText = produto.description;

  document.getElementById("imagemProduto").src = produto.thumbnail;
}
