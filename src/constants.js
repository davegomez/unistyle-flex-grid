/**
 * Constant values to be use along the grid sistem including property blocks to
 * extend another ones
 */

import { spacing } from './functions';

export const columns = 12;

export const gutter = 0.5;

export const col = {
  ...spacing(`${gutter}rem`, 'padding', 'horizontal'),
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 0,
  flexShrink: 0
};

export const colFlex = {
  ...col,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: `100%`
};
