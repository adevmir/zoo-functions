const data = require('../data/zoo_data');

const managers = data.employees.map((colab) => colab.managers);

function isManager(id) {
  return managers.some((a) => a.some((b) => b === id) === true);
}

function getRelatedEmployees(managerId) {
  if ((managers.some((a) => a.some((b) => b === managerId) === true)) === true) {
    const colabs = data.employees;
    const colabsRelateds = colabs.filter((a) => a.managers.some((b) => b === managerId));
    return colabsRelateds.map((colab) => `${colab.firstName} ${colab.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
