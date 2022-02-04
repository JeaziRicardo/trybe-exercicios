// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//   console.log(groceryList[index]);
// }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let namel of names) {
//   console.log(namel);
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// for (let number of numbers) {
//   console.log(number);
// }

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// for (let soma of numbers) {
//   soma += 1;
//   console.log(soma);
// }

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let soma = 0;
// let médiaAritmética = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index]; 
//   médiaAritmética = soma / numbers.length;
// }
// console.log("Média Aritmética = " + médiaAritmética);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let soma = 0;
// let médiaAritmética = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index]; 
//   médiaAritmética = soma / numbers.length;
// } 
// if (médiaAritmética <= 20) {
//   console.log("valor menor ou igual a 20");
// } else {
//   console.log("valor maior que 20");
// }

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let maior = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > maior) {
//     maior = numbers[index];
//   }
// }
// console.log(maior);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let ímpares = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     ímpares += 1
//   }
// }
// if (ímpares === 0) {
//   console.log("nenhum valor ímpar encontrado");
// } else {
//   console.log(ímpares);
// }

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let menor = numbers[0];
// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < menor) {
//     menor = numbers[index];
//   }
// }
// console.log(menor);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let arr = [];
for (index = 1; index < 26; index += 1) {
  arr.push(index);
}
console.log(arr);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (index = 0; index < arr.length; index += 1) {
  console.log(arr[index] / 2)
}