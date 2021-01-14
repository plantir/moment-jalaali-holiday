const moment = require("moment-jalaali");
const momentHijri = require("moment-hijri");
const events = require("./events.json");
moment.fn.isHoliday = function () {
  let isHoliday = false;
  let hijriDate = momentHijri(this)
  events.PersianCalendar.forEach((day) => {
    if (day.day === this.jDate() && day.month === this.jMonth()) {
      isHoliday = day.holiday ? true : isHoliday;
    }
  });
  events.HijriCalendar.forEach((day) => {
    if (day.day === hijriDate.iDate() && day.month === hijriDate.iMonth()+1) {
      isHoliday = day.holiday ? true : isHoliday;
    }
  });
  return isHoliday;
};

module.exports = moment;
