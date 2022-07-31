const fs = require('fs').promises;

async function readAll() {
  const read = await fs.readFile('./simpsons.json', 'utf8');

  const simpsons = JSON.parse(read);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
}

function main() {
  readAll();
}

main();