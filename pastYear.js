const DATE_I_STARTED_PROGRIMMING = '2022/04/08';

const dateIstartedPrograminng = new Date(DATE_I_STARTED_PROGRIMMING);
const today = new Date(
  new Date().getFullYear() + '/' +
  new Date().getMonth() + '/' +
  new Date().getDay()
);

const passedMilliSecond = today.getTime() - dateIstartedPrograminng.getTime();
const passedSecond = passedMilliSecond / 1000;
const passedMinute = passedSecond / 60;
const passedHour   = passedMinute / 60;
const passedDay    = passedHour / 24;

const passedWeek   = passedDay / 7;
const passedYear   = passedDay / 365;

console.log(passedYear);
