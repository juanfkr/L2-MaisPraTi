// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

const diasPorMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
    return false;
  }

  let diasNoMes = diasPorMes[mes];
  
  if (mes === 2 && ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)) {
    diasNoMes = 29;
  }

  if (dia > diasNoMes) {
    return false;
  }

  return true;
}

console.log(ehDataValida(33, 12, 2025)); 
console.log(ehDataValida(31, 12, 2025)); 
console.log(ehDataValida(29, 2, 2024)); 
console.log(ehDataValida(29, 2, 2025)); 