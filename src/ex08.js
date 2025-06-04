// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function agruparVendasPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "Bob", total: 200 },
  { cliente: "Ana", total: 50 }
];
console.log(agruparVendasPorCliente(vendas));