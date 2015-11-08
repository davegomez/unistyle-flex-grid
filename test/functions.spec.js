/* eslint no-undef:0 */

import { assert, expect } from 'chai';
import { getPercentage, spacing } from '../src/functions';

suite('helper functions', () => {
  suite('getPercentage', () => {
    test('should return', () => {
      assert.ok(getPercentage(1, 2));
    });

    test('should return a string', () => {
      assert.isString(getPercentage(1, 2));
    });

    test('should return a string with "%" symbol in it', () => {
      assert.include(getPercentage(1, 2), '%');
    });

    test('should return a string with length > 7', () => {
      assert.isAbove(getPercentage(1, 2).length, 7);
    });

    test('should return a string with length < 11', () => {
      assert.isBelow(getPercentage(1, 2).length, 11);
    });

    test('should return the percentage value for each column position', () => {
      assert.equal('16.66667%', getPercentage(1, 6));
      assert.equal('33.33333%', getPercentage(2, 6));
      assert.equal('50.00000%', getPercentage(3, 6));
      assert.equal('66.66667%', getPercentage(4, 6));
      assert.equal('83.33333%', getPercentage(5, 6));
      assert.equal('100.00000%', getPercentage(6, 6));
    });
  });

  suite('spacing', () => {
    let marginObj;
    let paddingObj;

    setup(() => marginObj = spacing(24, 'margin', 'horizontal'));
    setup(() => paddingObj = spacing(24, 'padding', 'vertical'));

    test('should be defined', () => {
      assert.ok(marginObj);
      assert.ok(paddingObj);
    });

    test('should be an object', () => {
      assert.isObject(marginObj);
      assert.isObject(paddingObj);
    });

    test('should have property', () => {
      assert.property(marginObj, 'marginLeft');
      assert.property(marginObj, 'marginRight');
      assert.property(paddingObj, 'paddingTop');
      assert.property(paddingObj, 'paddingBottom');
    });

    test('should have property with value', () => {
      assert.equal(marginObj.marginLeft, 24);
      assert.equal(marginObj.marginRight, 24);
      assert.equal(paddingObj.paddingTop, 24);
      assert.equal(paddingObj.paddingBottom, 24);
    });

    test('should have property value of type number', () => {
      assert.isNumber(marginObj.marginLeft);
      assert.isNumber(marginObj.marginRight);
      assert.isNumber(paddingObj.paddingTop);
      assert.isNumber(paddingObj.paddingBottom);
    });
  });
});
