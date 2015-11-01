import breakpoints from './breakpoints';
import { columns } from './constants';
import { getPercentage } from './functions';

function responsiveOffsets() {
  const properties = {};

  Object.keys(breakpoints)
    .forEach(breakpoint => {
      for (let index = 1; index <= columns; index += 1) {
        if (breakpoints[breakpoint]) {
          properties[`.off-${breakpoint}-${index}`] = {
            [breakpoints[breakpoint]]: {
              marginLeft: getPercentage(index)
            }
          };
        } else {
          properties[`.off-${breakpoint}-${index}`] = {
            marginLeft: getPercentage(index)
          };
        }
      }
    });

  return properties;
}

export default responsiveOffsets();