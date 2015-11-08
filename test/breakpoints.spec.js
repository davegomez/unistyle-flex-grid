/* eslint no-undef:0 */

import { assert, expect } from 'chai';
import setBreakpoints from '../src/breakpoints';

suite('breakpoints', () => {
  let defaultBps;
  let customBps;

  const custom = {
    'extra-small': '',
    small: 1024,
    medium: 1200,
    large: 1600
  };

  setup(() => defaultBps = setBreakpoints());
  setup(() => customBps = setBreakpoints(custom, 'max'));

  test('should be defined', () => {
    assert.ok(defaultBps);
    assert.ok(customBps);
  });

  test('should be an object', () => {
    assert.isObject(defaultBps);
    assert.isObject(customBps);
  });

  test('should have property', () => {
    assert.property(defaultBps, 'xs');
    assert.property(defaultBps, 'sm');
    assert.property(defaultBps, 'md');
    assert.property(defaultBps, 'lg');
    assert.property(customBps, 'extra-small');
    assert.property(customBps, 'small');
    assert.property(customBps, 'medium');
    assert.property(customBps, 'large');
  });

  test('should be a string value', () => {
    assert.isString(defaultBps.xs);
    assert.isString(defaultBps.sm);
    assert.isString(defaultBps.md);
    assert.isString(defaultBps.lg);
    assert.isString(customBps['extra-small']);
    assert.isString(customBps.small);
    assert.isString(customBps.medium);
    assert.isString(customBps.large);
  });

  test('should be an empty string', () => {
    assert.lengthOf(defaultBps.xs, 0);
    assert.lengthOf(customBps['extra-small'], 0);
  });

  test('should have the text in property value', () => {
    assert.include(defaultBps.sm, '768');
    assert.include(defaultBps.md, '992');
    assert.include(defaultBps.lg, '1200');
    assert.include(customBps.small, '1024');
    assert.include(customBps.medium, '1200');
    assert.include(customBps.large, '1600');
    assert.include(customBps.small, 'max-width');
    assert.include(customBps.medium, 'max-width');
    assert.include(customBps.large, 'max-width');
  });
});
