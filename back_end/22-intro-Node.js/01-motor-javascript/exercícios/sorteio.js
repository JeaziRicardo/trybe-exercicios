const readline = require('readline-sync');

function numAleatorio() {
  const aleatorio = parseInt(Math.random() * 10, 10);

  return aleatorio;
}

function main() {
  const numero = readline.questionInt('Digite um número inteiro entre 0 e 10 ');
  const aleatorio = numAleatorio();

  return numero === aleatorio
    ? console.log('Parabéns, número correto!') : console.log(`Opa, não foi dessa vez. O número era ${aleatorio}`);
}

main();
