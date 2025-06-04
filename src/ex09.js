// Escreva duas funções: ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
  return pares.reduce((obj, [chave, valor]) => {
    obj[chave] = valor;
    return obj;
  }, {});
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const pares = [["a", 1], ["b", 2]];
console.log(paresParaObjeto(pares)); 
const obj = { x: 10, y: 20 };
console.log(objetoParaPares(obj));