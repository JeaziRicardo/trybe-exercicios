// arquivo script.js

let ondeEstou = document.querySelector('#elementoOndeVoceEsta');

ondeEstou.parentNode.style.color = "green";

document.querySelector('#primeiroFilhoDoFilho').innerText = 'Oi, filho!';

console.log(document.querySelector('#pai').firstChild);

console.log(ondeEstou.previousElementSibling);

console.log(ondeEstou.nextSibling);

console.log(ondeEstou.nextElementSibling);

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling); 

// 1. Crie um irmão para `elementoOndeVoceEsta`.
let pai = document.getElementById('pai');
let irmaoElementoOndeEsta = document.createElement('section');
irmaoElementoOndeEsta.id = 'irmaoElementoOndeEsta';
pai.appendChild(irmaoElementoOndeEsta);

// 2. Crie um filho para elementoOndeVoceEsta .
let filhoElementoOndeEsta = document.createElement('section');
filhoElementoOndeEsta.id = 'filhoElementoOndeEsta';
ondeEstou.appendChild(filhoElementoOndeEsta);

// 3. Crie um filho para primeiroFilhoDoFilho .
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

// 4. A partir desse filho criado, acesse terceiroFilho .
document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling;

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
let pai = document.getElementById('pai');
for (let index = 0; index < pai.childNodes.length; index += 1) {
  let element = pai.childNodes[index];
  if (element !== 'elementoOndeVoceEsta' && element !== 'primeiroFilhoDoFilho') {
    element.remove();
  }
}