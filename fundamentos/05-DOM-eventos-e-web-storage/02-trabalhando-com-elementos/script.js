// arquivo script.js

let ondeEstou = document.querySelector('#elementoOndeVoceEsta');

ondeEstou.parentNode.style.color = "green";

document.querySelector('#primeiroFilhoDoFilho').innerText = 'Oi, filho!';

console.log(document.querySelector('#pai').firstChild);

console.log(ondeEstou.previousElementSibling);

console.log(ondeEstou.nextSibling);

console.log(ondeEstou.nextElementSibling);

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling); 