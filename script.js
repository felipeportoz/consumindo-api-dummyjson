// guarda o id do produto que ta na tela
let idAtual = 1;

// pegando os elementos do html
const btnBusca = document.getElementById("btnBuscar");
const inputBusca = document.getElementById("campoBusca");
const btnVoltar = document.getElementById("btnAnterior");
const btnAvancar = document.getElementById("btnProximo");

// carrega o primeiro ao abrir a pagina
carregarProduto(idAtual);

// funcoes dos botoes
btnBusca.addEventListener("click", buscarProduto);

inputBusca.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    buscarProduto();
  }
});

btnVoltar.addEventListener("click", function () {
  if (idAtual > 1) {
    idAtual--;
    carregarProduto(idAtual);
  }
});

btnAvancar.addEventListener("click", function () {
  idAtual++;
  carregarProduto(idAtual);
});

// buscar pelo id na api
function carregarProduto(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (prod) {
      mostrarNaTela(prod);
    })
    .catch(function () {
      alert("Erro ao carregar produto.");
    });
}

// buscar por texto
function buscarProduto() {
  const texto = inputBusca.value;
  
  if (texto === "") {
    alert("Digite um produto.");
    return;
  }

  fetch(`https://dummyjson.com/products/search?q=${texto}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (resultado) {
      if (resultado.products.length === 0) {
        alert("Produto não encontrado.");
        return;
      }

      const item = resultado.products[0];
      idAtual = item.id; // atualiza o id global
      mostrarNaTela(item);
    })
    .catch(function () {
      alert("Erro ao buscar produto.");
    });
}

// joga os dados pro html
function mostrarNaTela(p) {
  document.getElementById("tituloProduto").innerText = p.title;
  document.getElementById("precoProduto").innerText = "R$ " + p.price;
  document.getElementById("categoriaProduto").innerText = p.category;
  document.getElementById("descricaoProduto").innerText = p.description;
  document.getElementById("imagemProduto").src = p.thumbnail;
}
