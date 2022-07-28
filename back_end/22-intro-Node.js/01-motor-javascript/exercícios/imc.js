const readline = require('readline-sync');

function calculaImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);
  
  return imc;
}

function main() {
  const peso = readline.questionInt('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual a sua altura? (em cm)');
  
  const imc = calculaImc(peso, altura);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();