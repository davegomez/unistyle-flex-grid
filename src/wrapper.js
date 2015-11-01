import { gutter } from './constants';
import { spacing } from './functions';

export default {
  '.row': {
    ...spacing(`-${gutter}rem`, 'margin', 'horizontal'),
    boxSizing: `border-box`,
    display: `flex`,
    flexDirection: `row`,
    flexWrap: `wrap`
  }
};
