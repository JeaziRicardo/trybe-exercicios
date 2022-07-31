const fs = require('fs').promises;

async function familySimpsons() {
  const read = await fs.readFile('./simpsonFamily.json', 'utf8');

  const simpsons = JSON.parse(read);
  const up = simpsons.filter(({ name }) => name !== 'Nelson Muntz');
  up.push({ "id": "5", "name": "Maggie Simpson" })
  const json = JSON.stringify(up);

  await fs.writeFile('./simpsonFamily.json', json);
}

async function main() {
  await familySimpsons();
}

main();