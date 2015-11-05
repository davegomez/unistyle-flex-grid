/* eslint no-undef:0 */

import { assert, expect } from 'chai';
import { getPercentage, spacing } from '../src/functions';

describe('helper functions', () => {
  describe('getPercentage', () => {
    it('should return', () => {
      assert.ok(getPercentage(1, 2));
    });

    it('should return a string', () => {
      assert.isString(getPercentage(1, 2));
    });

    it('should return a string with "%" symbol in it', () => {
      assert.include(getPercentage(1, 2), '%');
    });

    it('should return a string with length > 7', () => {
      assert.isAbove(getPercentage(1, 2).length, 7);
    });

    it('should return a string with length < 11', () => {
      assert.isBelow(getPercentage(1, 2).length, 11);
    });

    it('should return the percentage value for each column position', () => {
      assert.equal('16.66667%', getPercentage(1, 6));
      assert.equal('33.33333%', getPercentage(2, 6));
      assert.equal('50.00000%', getPercentage(3, 6));
      assert.equal('66.66667%', getPercentage(4, 6));
      assert.equal('83.33333%', getPercentage(5, 6));
      assert.equal('100.00000%', getPercentage(6, 6));
    });
  });

  describe('spacing', () => {
    it('should return', () => {
      assert.ok(spacing(24, 'margin', 'vertical'));
    });

    it('should return an object', () => {
      assert.isObject(spacing(24, 'margin', 'vertical'));
    });
  });
});
