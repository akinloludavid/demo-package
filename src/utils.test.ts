import { describe, it, expect } from 'vitest';
import { addNumbers } from './utils';

describe('testing addNumbers', () => {
  it('should add two numbers correctly', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });
  it('should more than two numbers correctly', () => {
    expect(addNumbers(2, 3, 5, 6, 7)).toBe(23);
  });
});
