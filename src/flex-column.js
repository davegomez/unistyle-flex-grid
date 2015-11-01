import breakpoints from './breakpoints';
import { colFlex } from './constants';

function flexColumn() {
  const properties = {};

  Object.keys(breakpoints)
    .forEach(breakpoint => {
      properties[`.col-${breakpoint}`] = {
        ...colFlex
      };
    });

  return properties;
}


export default flexColumn();