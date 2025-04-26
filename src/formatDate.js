'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const arrFromDate = date.split(fromFormat.at(-1));
  let year = '';
  let month = '';
  let day = '';
  const reorderDateArr = [];

  for (let i = 0; i < fromFormat.length; i++) {
    if (fromFormat[i] === 'YYYY') {
      year += arrFromDate[i];
    }

    if (fromFormat[i] === 'YY') {
      if (arrFromDate[i] < 30) {
        year += '20' + arrFromDate[i];
      }

      if (arrFromDate[i] >= 30) {
        year += '19' + arrFromDate[i];
      }
    }

    if (fromFormat[i] === 'MM') {
      month += arrFromDate[i];
    }

    if (fromFormat[i] === 'DD') {
      day += arrFromDate[i];
    }
  }

  for (let j = 0; j < toFormat.length; j++) {
    if (toFormat[j] === 'YYYY') {
      reorderDateArr[j] = year;
    }

    if (toFormat[j] === 'YY') {
      reorderDateArr[j] = year.slice(2);
    }

    if (toFormat[j] === 'MM') {
      reorderDateArr[j] = month;
    }

    if (toFormat[j] === 'DD') {
      reorderDateArr[j] = day;
    }
  }

  const result = reorderDateArr.join(toFormat.at(-1));

  return result;
}

formatDate('2020-02-18', ['YYYY', 'MM', 'DD', '-'], ['YYYY', 'MM', 'DD', '.']);
// '2020.02.18'

formatDate('2020-02-18', ['YYYY', 'MM', 'DD', '-'], ['DD', 'MM', 'YYYY', '.']);
// '18.02.2020'

formatDate('18-02-2020', ['DD', 'MM', 'YYYY', '-'], ['DD', 'MM', 'YY', '/']);
// '18/02/20'

formatDate('20/02/18', ['YY', 'MM', 'DD', '/'], ['YYYY', 'MM', 'DD', '.']);
// '2020.02.18'

formatDate('97/02/18', ['YY', 'MM', 'DD', '/'], ['DD', 'MM', 'YYYY', '.']);
// '18.02.1997'

module.exports = formatDate;
