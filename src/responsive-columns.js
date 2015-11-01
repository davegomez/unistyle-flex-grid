import breakpoints from './breakpoints';
import { columns } from './constants';
import { getPercentage } from './functions';

/**
 * Generates all the column sizes variations based on the already defined
 * breakpoints for the responsive mobile first behaviour
 * @param {Object} bps - Breakpoints object with the media queries declarations
 * @param {number} count - Quantity of column properties to be generated
 * @returns {Object} -Responsive column system properties
 */
function responsiveColumns(bps, count) {
  const properties = {};

  Object.keys(bps)
    .forEach(bp => {
      for (let index = 1; index <= count; index += 1) {
        if (bps[bp]) {
          properties[`.col-${bp}-${index}`] = {
            [bps[bp]]: {
              flexBasis: getPercentage(index),
              maxWidth: getPercentage(index)
            }
          };
        } else {
          properties[`.col-${bp}-${index}`] = {
            flexBasis: getPercentage(index),
            maxWidth: getPercentage(index)
          };
        }
      }
    });

  return properties;
}

export default responsiveColumns(breakpoints, columns);
