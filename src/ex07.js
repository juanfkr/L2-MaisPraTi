// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function ordenarNomesPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Calça", preco: 100 }
];
console.log(ordenarNomesPorPreco(produtos));