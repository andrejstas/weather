import moment from 'moment';

const kelvinToCelsius = kelvin => {
  return Math.round(kelvin - 273.15);
};
const metersToKm = meters => {
  return Math.round(meters / 1000);
};
const mbarToKPa = meters => {
  return Math.round(meters / 10);
};
const timestampToTime = unix_time => {
  var timestamp = moment.unix(unix_time);
  return timestamp.format('HH:mm:ss');
};
const windDirection = angle => {
  var directions = 8;
  var degree = 360 / directions;
  angle = angle + degree / 2;
  if (angle >= 0 * degree && angle < 1 * degree) return 'N';
  if (angle >= 1 * degree && angle < 2 * degree) return 'NE';
  if (angle >= 2 * degree && angle < 3 * degree) return 'E';
  if (angle >= 3 * degree && angle < 4 * degree) return 'SE';
  if (angle >= 4 * degree && angle < 5 * degree) return 'S';
  if (angle >= 5 * degree && angle < 6 * degree) return 'SW';
  if (angle >= 6 * degree && angle < 7 * degree) return 'W';
  if (angle >= 7 * degree && angle < 8 * degree) return 'NW';
  return 'N';
};

export {
  kelvinToCelsius,
  metersToKm,
  mbarToKPa,
  timestampToTime,
  windDirection
};
