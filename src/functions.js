import { columns } from './constants';

/**
 * Use the corresponding column position to calculate its width size in
 * percentages according to the amount of columns needed by the user
 * @param {number} column - Current column position
 * @returns {string} - Column size in percentages
 */
export function getPercentage(column) {
  const value = column / columns * 100;
  return `${value.toFixed(5)}%`;
}

/**
 * Creates uniform margin/padding values based on its orientation
 * @param {number} value - Value for the margin/padding in pixels
 * @param {string} type - Property type margin || padding
 * @param {string} orientation - Property orientation vertical || horizontal
 * @returns {Object} - Property object
 */
export function spacing(value, type = 'margin', orientation = 'vertical') {
  return orientation === 'vertical' ?
    {
      [`${type}Top`]: value,
      [`${type}Bottom`]: value
    } :
    {
      [`${type}Left`]: value,
      [`${type}Right`]: value
    };
}
