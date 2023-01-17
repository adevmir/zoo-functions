const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      result.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      result.adult += 1;
    } else if (element.age >= 50) {
      result.senior += 1;
    }
  });
  return result;
}

function calculateEntry(entrants) {
  let result = 0;
  if (entrants === undefined || entrants.keys === undefined) {
    return 0;
  }
  const visitants = countEntrants(entrants);
  result += (visitants.child * 20.99);
  result += (visitants.adult * 49.99);
  result += (visitants.senior * 24.99);
  return result;
}

module.exports = { calculateEntry, countEntrants };
