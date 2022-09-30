var addDays = require("date-fns/addDays");

function addDaysFn(days) {
  let date = addDays(new Date(2020, 08, 22), days);
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear}`;
}

module.exports = addDaysFn;
