import { columns } from './constants';

export function getPercentage(column) {
  const value = column / columns * 100;
  return `${value.toFixed(5)}%`;
}

export function spacing(value, type = 'margin', orientation = 'vertical') {
  return orientation === 'vertical' ?
    {
      [`${type}Top`]: value,
      [`${type}Bottom`]: value
    } :
    {
      [`${type}Left`]: value,
      [`${type}Right`]: value
    };
}
