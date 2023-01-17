const data = require('../data/zoo_data');

const animals = data.species;
const { hours } = data;
const week = Object.keys(hours);
const objHours = {};
const animalsArray = [];
animals.forEach((ani) => animalsArray.push(ani.name));
function getHours() {
  week.forEach((day) => {
    const dh = hours[day];
    const op = dh.open;
    const cl = dh.close;
    if (op === 0 && cl === 0) {
      objHours[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      objHours[day] = { officeHour: `Open from ${op}am until ${cl}pm`, exhibition: [] };
    }
  });
  animals.forEach((animal) => animal.availability.forEach((Aval) => {
    objHours[Aval].exhibition.push(animal.name);
  }));
  return objHours;
}

function getSchedule(scheduleTarget) {
  const scheduleComplete = getHours();
  let result = '';
  if (week.some((dayWeek) => dayWeek === scheduleTarget) === true) {
    result = { [scheduleTarget]: objHours[scheduleTarget] };
    return result;
  } if (animalsArray.some((animal) => animal === scheduleTarget) === true) {
    animals.forEach((animal) => {
      if (animal.name === scheduleTarget) {
        result = animal.availability;
      }
    });
    return result;
  } return scheduleComplete;
}

module.exports = getSchedule;
