const moment = require('moment-jalaali');
const events = require('./events.json');
const { toHijri } = require('hijri-converter');
moment.fn.isHoliday = function() {
  let isHoliday = false;
  let hijriDate = toHijri(this.year(), this.month() + 1, this.date());
  events.PersianCalendar.forEach(day => {
    if (day.day === this.jDate() && day.month === this.jMonth()) {
      isHoliday = day.holiday ? true : isHoliday;
    }
  });
  events.HijriCalendar.forEach(day => {
    if (day.day === hijriDate.hd && day.month === hijriDate.hm) {
      isHoliday = day.holiday ? true : isHoliday;
    }
  });
  return isHoliday;
};

module.exports = moment;
