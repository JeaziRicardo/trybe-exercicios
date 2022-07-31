const fs = require('fs').promises;

async function familySimpsons() {
  const read = await fs.readFile('./simpsonFamily.json', 'utf8');

  const simpsons = JSON.parse(read);
  simpsons.push({ "id": "5", "name": "Nelson Muntz" });
  const json = JSON.stringify(simpsons);

  await fs.writeFile('./simpsonFamily.json', json);
}

async function main() {
  await familySimpsons();
}

main();