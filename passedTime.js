/**
 * @file passedTime
 * @author nashdev255
 * @brief Get difference between two dates.
 */

/**
 * Returns Today's date according to the format.
 */
const getToday = () => {
  return new Date(
    new Date().getFullYear() + '/' +
    (new Date().getMonth() + 1) + '/' +
    new Date().getDate()
  );
}

/**
 * Calculate the difference between firstDate and secondDate.
 * @param firstDate The date before secondDate.
 * @param secondDate The date after firstDate.
 * @returns Object that can be choosen every unit of time.
 */
const calcDiffTime = (firstDate, secondDate) => {
  const passedMilliSecond = secondDate.getTime() - firstDate.getTime();
  const passedSecond = passedMilliSecond / 1000;
  const passedMinute = passedSecond / 60;
  const passedHour   = passedMinute / 60;
  const passedDay    = passedHour / 24;

  const passedWeek   = passedDay / 7;
  const passedYear   = passedDay / 365;

  return {
    getPassedMilliSecond() { return passedMilliSecond; },
    getPassedSecond() { return passedSecond; },
    getPassedMinute() { return passedMinute; },
    getPassedHour() { return passedHour; },
    getPassedDay() { return passedDay; },
    getPassedWeek() { return passedWeek; },
    getPassedYear() { return passedYear; }
  }
}

export { getToday, calcDiffTime };


/* ----- USE CASE ----- */
// import { getToday, calcDiffTime } from "./passedTime.js";

// const DATE_I_STARTED_PROGRIMMING = new Date('2022/04/08');
// const today = getToday();

// const passedYear = Math.floor(
//   calcDiffTime(
//     DATE_I_STARTED_PROGRIMMING,
//     today
//   ).getPassedYear()
// );

// if(passedYear === 1) {
//   console.log('It seems a year has passed since I started programming!');
// } else {
//   console.log(`It seems ${passedYear} years have passed since I started programming!`);
// }
