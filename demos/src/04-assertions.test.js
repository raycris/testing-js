// Assertions / matchers
test('test obj', () => {
  const data = { name: 'raycris' };
  data.lastname = 'Rao';
  expect(data).toEqual({ name: 'raycris', lastname: 'Rao' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Christian').toMatch(/stian/);
});

test('list/arrays', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(numbers).toContain(3);
});
