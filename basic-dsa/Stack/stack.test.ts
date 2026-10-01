import { Stack } from './stack';
import { describe, test, expect, beforeEach } from 'vitest';

describe('findNamesOfDuplicates', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('performs a number of valid push and pop operations', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    const popped = stack.pop();
    expect(popped).toBe(5);
  });

  test('performs push and pop operations and peeks at the top of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.peek()).toBe(2);
  });

  test('performs push and pop operations and checks size', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.size()).toBe(1);
  });

  test('performs push and pop operations and checks if empty and it is not', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.isEmpty()).toBeFalsy();
  });

  test('performs push and pop operations and checks if empty and it is', () => {
    stack.push(1);
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  test('tries to pop from an empty stack', () => {
    expect(() => stack.pop()).toThrowError('Stack is empty.');
  });

  test('tries to peek at the top of an empty stack', () => {
    expect(() => stack.peek()).toThrowError('Stack is empty.');
  });
});

