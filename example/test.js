const moment = require('../index');
let now = moment('1399/08/4', 'jYYYY/jMM/jDD').isHoliday();
console.log(now);
