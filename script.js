import { getToday, calcDiffTime } from "./passedTime.js";

const DATE_I_STARTED_PROGRIMMING = new Date('2022/04/08');
const today = getToday();

const passedYear = calcDiffTime(DATE_I_STARTED_PROGRIMMING, today).getPassedYear();
console.log(Math.floor(passedYear));
