const fs = require('fs').promises;

async function familySimpsons() {
  const read = await fs.readFile('./simpsons.json', 'utf8');

  const simpsons = JSON.parse(read);
  const familyIds = [1, 2, 3, 4];
  const filter = simpsons.filter(({ id }) => familyIds.includes(+id));

  const json = JSON.stringify(filter);

  await fs.writeFile('./simpsonFamily.json', json);
}

async function main() {
  await familySimpsons();
}

main();