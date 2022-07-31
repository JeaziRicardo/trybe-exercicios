const fs = require('fs').promises;

async function filterSimpsons() {
  const read = await fs.readFile('./simpsons.json', 'utf8');

  const simpsons = JSON.parse(read);
  const filter = simpsons.filter(({ id }) => id !== '10' && id !== '6');

  const json = JSON.stringify(filter);

  await fs.writeFile('./simpsons.json', json);
}

function main() {
  filterSimpsons();
}

main();