/**
 * @file passedTime
 * @author nashdev255
 * @brief Get difference between two dates.
 */

const getToday = () => {
  return new Date(
    new Date().getFullYear() + '/' +
    (new Date().getMonth() + 1) + '/' +
    new Date().getDate()
  );
}

const calcDiffTime = (firstDate, secondDate) => {
  const passedMilliSecond = secondDate.getTime() - firstDate.getTime();
  const passedSecond = passedMilliSecond / 1000;
  const passedMinute = passedSecond / 60;
  const passedHour   = passedMinute / 60;
  const passedDay    = passedHour / 24;

  const passedWeek   = passedDay / 7;
  const passedYear   = passedDay / 365;
}
