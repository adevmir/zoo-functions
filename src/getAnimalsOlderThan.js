const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = data.species;
  const name = specie.find((spec) => spec.name === animal);
  return name.residents.every((a) => a.age >= age);
}

module.exports = getAnimalsOlderThan;
