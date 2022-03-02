const moment = require('../index');
let now = moment('1401/12/17', 'jYYYY/jMM/jDD').isHoliday();
console.log(now);
