const button = document.getElementById('button');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const result = document.getElementById('result');

function numberChecker(param1, param2) {
  if (!param1 || !param2) {
    throw new Error('Informe os dois valores para realizar a soma');
  }
  else if (isNaN(param1) || isNaN(param2)) {
    throw new Error('Informe apenas números para realizar a soma');
  }
}

function clear() {
  value1.value = '';
  value2.value = '';
}

function sum() {
  try {
    numberChecker(value1.value, value2.value);
    const calc = parseInt(value1.value) + parseInt(value2.value);
    result.innerHTML = `Resultado: ${calc}`;
  } catch (error) {
    result.innerHTML = `Erro: ${error.message}`;
  } finally {
    clear();
  }
}

window.onload = () => {
  button.addEventListener('click', sum);
}
