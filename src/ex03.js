// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function palavrasUnicas(str) {
    let palavras = str.split(" ");
    let unicas = [];
    
    for (let i = 0; i < palavras.length; i++) {
        let palavraAtual = palavras[i];
        let isUnica = true;
        
        for (let j = 0; j < unicas.length; j++) {
            if (unicas[j] === palavraAtual) {
                isUnica = false;
                break;
            }
        }
        
        if (isUnica) {
            unicas.push(palavraAtual);
        }
    }
    
    return unicas;
}

let texto = "olá olá mundo mundo";
console.log(palavrasUnicas(texto)); // Saída: ["olá", "mundo"]