// crie um algoritmo que retorne o fatorial de 10.
// let fatorial = 1;
// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index
// }
// console.log(fatorial);

// desenvolva um algoritmo que é capaz de inverter uma palavra
// let word = 'trybe';
// let reverseWord = "";
// for (let index = word.length - 1; index >= 0; index -= 1) {
//   console.log(word[index]);
// }

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let biggestWord = array[0];
// let lettestword = array[0]
// for (let index = 1; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length){
//     biggestWord = array[index];
//   }
// }
// for (let index = 1; index < array.length; index += 1) {
//   if (array[index].length < lettestword.length){
//     lettestword = array[index];
//   }
// }
// console.log(biggestWord);
// console.log(lettestword);

// escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let biggestPrimeNumber = 0;
for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}
console.log(biggestPrimeNumber);
