// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let timeoutId; 

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.apply(this, args); 
        }, delay);
    };
}

function logMessage(message) {
    console.log(message);
}

const debouncedLog = debounce(logMessage, 1000);

debouncedLog("Hello"); 
debouncedLog("Hello again"); 