import { isValid } from './isValid';
import { describe, test, expect } from 'vitest';

describe('isValid', () => {
  test('validates a valid simple expression', () => {
    const exp = '< 1 + 2 > * 5';
    const result = true;
    expect(isValid(exp)).toBe(result);
  });

  test('validates a valid complex expression', () => {
    const exp = '<<1 + 2> * 5> + <6 + 7>';
    const result = true;
    expect(isValid(exp)).toBe(result);
  });

  test('validates an invalid simple expression', () => {
    const exp = '<<1 + 2> * 9';
    const result = false;
    expect(isValid(exp)).toBe(result);
  });

  test('validates an invalid complex expression', () => {
    const exp = '<<1 + 2>> * 5> + <6 + 7>';
    const result = false;
    expect(isValid(exp)).toBe(result);
  });

  test('validates an invalid expression that starts with a closing bracket', () => {
    const exp = '><1 + 2>> * 5 + <6 + 7>';
    const result = false;
    expect(isValid(exp)).toBe(result);
  });

  test('validates an invalid expression of just one opening bracket', () => {
    const exp = '<';
    const result = false;
    expect(isValid(exp)).toBe(result);
  });

  test('validates an invalid expression of just one closing bracket', () => {
    const exp = '>';
    const result = false;
    expect(isValid(exp)).toBe(result);
  });

  (test('validates an empty expression', () => {
    const exp = '';
    const result = true;
    expect(isValid(exp)).toBe(result);
  }),
    test('proper tests which check for the actual condition - bracket order', () => {
      const exp = '><';
      const result = false;
      expect(isValid(exp)).toBe(result);
    }),
    test('s', () => {
      const exp = '>>><';
      const result = false;
      expect(isValid(exp)).toBe(result);
    }),
    test('s', () => {
      const exp = '<<<>';
      const result = false;
      expect(isValid(exp)).toBe(result);
    }),
    test('first good then bad', () => {
      const exp = '<>><';
      const result = false;
      expect(isValid(exp)).toBe(result);
    }));

  test('basic', () => {
    const exp = '<>';
    const result = true;
    expect(isValid(exp)).toBe(result);
  });
});
