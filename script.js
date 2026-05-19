// // 1. Requisição Básica (GET)Por padrão, o fetch faz uma requisição GET. 
// // Você precisa converter a resposta para o formato desejado (como json) em um bloco then() encadeado.

// fetch('https://exemplo.com')
//   .then(resposta => {
//     if (!resposta.ok) {
//       throw new Error('Erro na requisição: ' + resposta.status);
//     }
//     return resposta.json();
//   })
//   .then(dados => {
//     console.log(dados);
//   })
//   .catch(erro => console.error('Erro:', erro));

// // 2. Requisição com Async/Await (Recomendado)A sintaxe async/await deixa o código assíncrono mais limpo, parecendo código síncrono. 


// async function buscarDados() {
//     try {
//     const resposta = await fetch('https://exemplo.com');
    
//     if (resposta.ok) {
//       const dados = await resposta.json();
//       console.log(dados);
//     } else {
//       console.error('Erro do servidor:', resposta.status);
//     }
//   } catch (erro) {
//     console.error('Erro de rede:', erro);
//   }
// }
// buscarDados();

// // 3. Enviando Dados (POST)Para enviar dados, é necessário passar um segundo argumento contendo o método, os cabeçalhos (headers) e o corpo da requisição (body).


// async function enviarDados() {
 
//     const novoUsuario = { nome: 'Ana', cargo: 'Desenvolvedora' };

//   const resposta = await fetch('https://exemplo.com', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(novoUsuario)
//   });

//   const dadosSalvos = await resposta.json();
//   console.log('Usuário criado:', dadosSalvos);
// }



//MEU CODIGO

const productId = document.getElementById('productId');
const btnSearch = document.getElementById('btnSearch');
const content = document.getElementById('content');
const img = document.getElementById('img');

const fetchApi = async (id) => {
    const resposta = await fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
    console.log(resposta);
}

// fetchApi(1);


// btnSearch.addEventListener('click',() => {

// })



