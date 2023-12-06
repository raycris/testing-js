const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  // Arrange /Given
  beforeEach(() => {
    person = new Person('Raycris', 36.6, 1.8);
  });

  test('should return down', () => {
    // AAA
    // Arrange /Given
    person.weight = 36;
    // Act / When
    const imc = person.calcIMC();
    // Assert / Then
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 66.6;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
