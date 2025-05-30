// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

var prompt = require('prompt-sync')();

let numeroAleatorio = Math.round(Math.random() * 100);
let numero;

do {
    console.log(numeroAleatorio)
    numero = Number(prompt("Digite um número: "));

    if(numero > numeroAleatorio) {
        console.log("O número é menor que " + numero);
    } else if(numero < numeroAleatorio) {
        console.log("O número é maior que " + numero);
    }

} while(numero !== numeroAleatorio);

console.log("Você acertou. O número é: " + numeroAleatorio);