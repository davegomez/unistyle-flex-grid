import { gutter } from './constants';
import { spacing } from './functions';

/**
 * Generates the row wrapper property responsible for delivering the global
 * Flexbox properties to the grid
 * @returns {Object} - Property object
 */
export default {
  '.row': {
    ...spacing(`-${gutter}rem`, 'margin', 'horizontal'),
    boxSizing: `border-box`,
    display: `flex`,
    flexDirection: `row`,
    flexWrap: `wrap`
  }
};
