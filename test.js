const moment = require('./index');
let now = moment('1398/07/27', 'jYYYY/jMM/jDD').is_holiday();
console.log(now);
