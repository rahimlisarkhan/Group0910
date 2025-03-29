import { add, subtract } from '../utils/math';

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 2 to equal 4', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('adds negative numbers correctly', () => {
  expect(add(-2, -3)).toBe(-5);
});
