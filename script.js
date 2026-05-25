fetch("https://dummyjson.com/products/1")
  .then(resposta => resposta.json())
  .then(produto => {

    document.getElementById("tituloProduto").innerText =
      produto.title;

    document.getElementById("precoProduto").innerText =
      "R$ " + produto.price;

    document.getElementById("categoriaProduto").innerText =
      produto.category;

    document.getElementById("descricaoProduto").innerText =
      produto.description;

    document.getElementById("imagemProduto").src =
      produto.thumbnail;
  });

const botao = document.getElementById("btnBuscar");
const campo = document.getElementById("campoBusca");

botao.addEventListener("click", buscarProduto);

function buscarProduto() {

  const termo = campo.value;

  fetch(
   `https://dummyjson.com/products/search?q=${termo}`
  )
    .then(res => res.json())
    .then(dados => {

      const produto = dados.products[0];

      document.getElementById(
        "tituloProduto"
      ).innerText = produto.title;

      document.getElementById(
        "precoProduto"
      ).innerText = "R$ " + produto.price;

      document.getElementById(
        "categoriaProduto"
      ).innerText = produto.category;

      document.getElementById(
        "descricaoProduto"
      ).innerText = produto.description;

      document.getElementById(
        "imagemProduto"
      ).src = produto.thumbnail;
    });
}
