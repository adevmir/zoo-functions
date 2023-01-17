const data = require('../data/zoo_data');

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  let animalID = '';
  employees.forEach((element) => {
    if (element.id === id) {
      animalID = element.responsibleFor;
    }
  });
  const animalFirst = data.species.find((animal) => animal.id === animalID[0]);
  let result = Object.values(animalFirst.residents[0]);
  animalFirst.residents.forEach((resident) => {
    if (result[2] < resident.age) {
      result = Object.values(resident);
    }
  });
  return result;
}

module.exports = getOldestFromFirstSpecies;
