/**
 * @param {number} num - numeric value to format
 * @param {number} decimals - number of decimal places to round to
 * @returns {string} formatted number
 */
export function format(num, decimals = 0) {
  return num.toLocaleString('en-US', {maximumFractionDigits: decimals, useGrouping: true});
}

/**
 * @param {array} array - array to sum values across
 * @param {string} [key] - for object arrays, the property to sum for the object
 */
export function sumArray(array, key) {
  return array.reduce((total, val) => key ? total += val[key] : total += val, 0);
}
