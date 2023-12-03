/*
beforeAll(): se ejecuta antes de todas las pruebas.

beforeEach(): se ejecuta antes de cada prueba.

afterEach(): se ejecuta después de cada prueba.

afterAll(): se ejecuta después de todas las pruebas Nota: Todas estas funciones
 se ejecutan dentro del alcance del scope.
*/

describe('Set', () => {
  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    expect(1 + 4).toBe(5);
  });
});

describe('Set 2', () => {
  test('case 3', () => {
    expect(1 + 1).toBe(2);
  });
  test('case 4', () => {
    expect(1 + 4).toBe(5);
  });
});
