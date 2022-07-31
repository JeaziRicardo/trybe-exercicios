const fs = require('fs').promises;

async function getSimpsonById(simpsonId) {
  const read = await fs.readFile('./simpsons.json', 'utf8');

  const simpsons = JSON.parse(read);
  const choceSimpson = simpsons.find(({ id }) => +id === simpsonId);

  if(!choceSimpson) {
    throw new Error('id não encontrado');
  }

  return choceSimpson;

}

async function main() {
  try {
    const simpson = await getSimpsonById(1);
    console.log(simpson);
  } catch(err) {
    console.log(err);
  }
}

main();