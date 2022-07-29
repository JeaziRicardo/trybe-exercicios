const readline = require('readline-sync');

function numAleatorio() {
  const aleatorio = parseInt(Math.random() * 10, 10);

  return aleatorio;
}

function questao() {
  const numero = readline.questionInt('Digite um número inteiro entre 0 e 10 ');
  const aleatorio = numAleatorio();

  return numero === aleatorio
    ? console.log('Parabéns, número correto!') : console.log(`Opa, não foi dessa vez. O número era ${aleatorio}`);
}

function main() {
  questao();

  const resetar = readline.question('Digite "s" para jogar novamente ou qualquer outra tecla para sair ');

  if (resetar !== 's') return console.log('Ok, até a próxima!');

  main();
}

main();
