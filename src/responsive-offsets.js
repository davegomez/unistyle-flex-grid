import breakpoints from './breakpoints';
import { columns } from './constants';
import { getPercentage } from './functions';

/**
 * Generates all the offset column sizes variations based on the already defined
 * breakpoints for the responsive mobile first behaviour
 * @param {Object} bps - Breakpoints object with the media queries declarations
 * @param {number} count - Quantity of offset column properties to be generated
 * @returns {Object} -Responsive offset column system properties
 */
function responsiveOffsets(bps, count) {
  const properties = {};

  Object.keys(bps)
    .forEach(bp => {
      for (let index = 1; index <= count; index += 1) {
        if (bps[bp]) {
          properties[`.off-${bp}-${index}`] = {
            [bps[bp]]: {
              marginLeft: getPercentage(index)
            }
          };
        } else {
          properties[`.off-${bp}-${index}`] = {
            marginLeft: getPercentage(index)
          };
        }
      }
    });

  return properties;
}

export default responsiveOffsets(breakpoints, columns);