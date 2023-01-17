const data = require('../data/zoo_data');

function countAnimalsObj(animal) {
  const animals = data.species;
  let nAnimals = 0;
  const result = {};
  animals.forEach((specie) => {
    specie.residents.forEach((quant) => { nAnimals += 1; });
    result[specie.name] = nAnimals;
    nAnimals = 0;
  });
  return result;
}

function countAnimals(animal) {
  let nAnimals = 0;
  if (animal === undefined) {
    return countAnimalsObj(animal);
  } if (animal.sex === undefined) {
    const animals = data.species;
    const qual = animals.filter((a) => animal.specie === a.name);
    qual[0].residents.forEach((quant) => { nAnimals += 1; });
    return nAnimals;
  } const animals = data.species;
  const qual = animals.filter((a) => animal.specie === a.name);
  const whithSex = qual[0].residents.filter((a) => a.sex === animal.sex);
  whithSex.forEach((quant) => { nAnimals += 1; });
  return nAnimals;
}

module.exports = countAnimals;
