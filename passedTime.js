/**
 * @file passedTime
 * @author nashdev255
 * @brief get difference between two dates
 */

/**
 * @name DATE_I_STARTED_PROGRIMMING
 * Format : yyyy/mm/dd
 */
const DATE_I_STARTED_PROGRIMMING = '2022/04/08';

const getToday = () => {
  return new Date(
    new Date().getFullYear() + '/' +
    (new Date().getMonth() + 1) + '/' +
    new Date().getDate()
  );
}

const dateIstartedPrograminng = new Date(DATE_I_STARTED_PROGRIMMING);
const 

const passedMilliSecond = today.getTime() - dateIstartedPrograminng.getTime();
const passedSecond = passedMilliSecond / 1000;
const passedMinute = passedSecond / 60;
const passedHour   = passedMinute / 60;
const passedDay    = passedHour / 24;

const passedWeek   = passedDay / 7;
const passedYear   = passedDay / 365;
