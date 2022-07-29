const readline = require('readline-sync');

function calcvelociMedia(distancia, tempo) {
  const media = distancia / tempo;

  return media;
}

function main() {
  const distancia = readline.questionInt('Qual a distância percorrida? (em mts) ');
  const tempo = readline.questionInt('Em quanto tempo? (em s) ');

  const media = calcvelociMedia(distancia, tempo);

  console.log(`Trajeto percorrido em média: ${media.toFixed(2)} m/s`);
}

main();