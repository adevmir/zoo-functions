// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const specie = data.employees;
  if (employeeName === undefined) {
    return {};
  }
  return specie.find((spec) => spec.firstName === employeeName || spec.lastName === employeeName);
}

module.exports = getEmployeeByName;
