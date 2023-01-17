const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const specie = data.species;
  return specie.filter((spec) => ids.some((id) => spec.id === id));
}

module.exports = getSpeciesByIds;
