const productId = document.getElementById('productId');
const btnSearch = document.getElementById('btnSearch');
const content = document.getElementById('content');
const img = document.getElementById('img');

const fetchApi = async (id) => {
    const resposta = await fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });

    return resposta;
}

btnSearch.addEventListener('click', (event) => {
    event.preventDefault();
    const result = fetchApi(productId.value);
});



