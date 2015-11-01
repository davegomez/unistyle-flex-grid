import breakpoints from './breakpoints';
import { columns } from './constants';
import { col } from './constants';

function baseColumn() {
  const properties = {};

  Object.keys(breakpoints)
    .forEach(breakpoint => {
      for (let index = 0; index <= columns; index += 1) {
        if (index === 0) {
          properties[`.col-${breakpoint}`] = {
            ...col
          };
        } else {
          properties[`.col-${breakpoint}-${index}`] = {
            ...col
          };
        }
      }
    });

  return properties;
}

export default baseColumn();