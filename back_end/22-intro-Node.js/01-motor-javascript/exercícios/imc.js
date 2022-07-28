const MEU_PESO = 125;
const MINHA_ALTURA = 177;

function calculaImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);
  
  return imc;
}

function main() {
  const imc = calculaImc(MEU_PESO, MINHA_ALTURA);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();