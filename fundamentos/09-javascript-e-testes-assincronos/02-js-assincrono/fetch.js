const fetch = require('node-fetch');

const fetchJoke = async () => {
  try {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  }
  catch (error) {
    console.log(`Algo deu errado :( \n${error}`)
  }
}
fetchJoke();

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// }

// fetchJoke();

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

// fetchJoke();

// // Algo deu errado :( 
// // TypeError: Only absolute URLs are supported