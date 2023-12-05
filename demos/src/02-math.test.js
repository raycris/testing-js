const { sum, divide, multiply } = require('./02-math');

describe('Test for math thing', () => {
  describe('Test for sum', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });

  describe('Test for multiply', () => {
    test('adds 3 * 7 to equal 21', () => {
      const rta = multiply(3, 7);
      expect(rta).toBe(21);
    });
  });

  describe('Test for divide', () => {
    test('should divide', () => {
      expect(divide(20, 5)).toBe(4);
      expect(divide(20, 0)).toBeNull();
      expect(divide(24, 2)).toBe(12);
      expect(divide(14, 2)).toBe(7);
    });
  });
});
