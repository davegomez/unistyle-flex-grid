import breakpoints from './breakpoints';
import { colFlex } from './constants';

/**
 * Generate a set of grid column classes using a namespace represented by the
 * breakpoints' names, and adding the column flex properties
 * @param {Object} bps - Breakpoints object with the media queries declarations
 * @returns {Object} - Column properties object
 */
function flexColumn(bps) {
  const properties = {};

  Object.keys(bps)
    .forEach(bp => {
      properties[`.col-${bp}`] = {
        ...colFlex
      };
    });

  return properties;
}


export default flexColumn(breakpoints);
