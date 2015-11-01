import breakpoints from './breakpoints';
import { columns } from './constants';
import { col } from './constants';

/**
 * Generate a set of grid column classes using a namespace represented by the
 * breakpoints' names for each one of the required number of columns, and adding
 * the column flex properties
 * @param {Object} bps - Breakpoints object with the media queries declarations
 * @param {number} count - Quantity of column properties to be generated
 * @returns {Object} - Column properties object
 */
function baseColumn(bps, count) {
  const properties = {};

  Object.keys(bps)
    .forEach(bp => {
      for (let index = 0; index <= count; index += 1) {
        if (index === 0) {
          properties[`.col-${bp}`] = {
            ...col
          };
        } else {
          properties[`.col-${bp}-${index}`] = {
            ...col
          };
        }
      }
    });

  return properties;
}

export default baseColumn(breakpoints, columns);
