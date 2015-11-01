import breakpoints from './breakpoints';
import { columns } from './constants';
import { getPercentage } from './functions';

function responsiveColumns() {
  const properties = {};

  Object.keys(breakpoints)
    .forEach(breakpoint => {
      for (let index = 1; index <= columns; index += 1) {
        if (breakpoints[breakpoint]) {
          properties[`.col-${breakpoint}-${index}`] = {
            [breakpoints[breakpoint]]: {
              flexBasis: getPercentage(index),
              maxWidth: getPercentage(index)
            }
          };
        } else {
          properties[`.col-${breakpoint}-${index}`] = {
            flexBasis: getPercentage(index),
            maxWidth: getPercentage(index)
          };
        }
      }
    });

  return properties;
}

export default responsiveColumns();
