// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animals = data.species;

function animalMapAll(animalMap) {
  animals.forEach((element) => {
    const local = element.location;
    animalMap[local].push(element.name);
  });
}

function whithNames(animalMap) {
  animals.forEach((element) => {
    const local = element.location;
    const specie = element.name;
    const names = [];
    element.residents.forEach((n) => { names.push(n.name); });
    const objAnimal = { [specie]: names };
    animalMap[local].push(objAnimal);
  });
}

function whithNamesSort(animalMap) {
  animals.forEach((element) => {
    const local = element.location;
    const specie = element.name;
    const names = [];
    element.residents.forEach((n) => { names.push(n.name); });
    const objAnimal = { [specie]: names.sort() };
    animalMap[local].push(objAnimal);
  });
}

function whithNamesSex(animalMap, sex) {
  animals.forEach((element) => {
    const local = element.location;
    const specie = element.name;
    const resident = element.residents;
    const names = [];
    const sexAnimal = resident.filter((s) => s.sex === sex);
    sexAnimal.forEach((n) => { names.push(n.name); });
    const objAnimal = { [specie]: names };
    animalMap[local].push(objAnimal);
  });
}

function whithNamesSortSex(animalMap, sex) {
  animals.forEach((element) => {
    const local = element.location;
    const specie = element.name;
    const resident = element.residents;
    const names = [];
    const sexAnimal = resident.filter((s) => s.sex === sex);
    sexAnimal.forEach((n) => { names.push(n.name); });
    const objAnimal = { [specie]: names.sort() };
    animalMap[local].push(objAnimal);
  });
}

function sortedTrue(animalMap, sex) {
  if (sex === 'female') {
    return whithNamesSortSex(animalMap, 'female');
  } if (sex === 'male') {
    return whithNamesSortSex(animalMap, 'male');
  } if (sex === undefined) {
    return whithNamesSort(animalMap);
  }
}

function sortedUndefined(animalMap, sex) {
  if (sex === 'female') {
    return whithNamesSex(animalMap, 'female');
  } if (sex === 'male') {
    return whithNamesSex(animalMap, 'male');
  } if (sex === undefined) {
    return whithNames(animalMap);
  }
}

function getAnimalMap(options) {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  if (options === undefined || options.includeNames === undefined) {
    animalMapAll(animalMap);
    return animalMap;
  }
  const { sex } = options;
  if (options.sorted === true) {
    sortedTrue(animalMap, sex);
    return animalMap;
  } if (options.sorted === undefined) {
    sortedUndefined(animalMap, sex);
    return animalMap;
  }
}

module.exports = getAnimalMap;
