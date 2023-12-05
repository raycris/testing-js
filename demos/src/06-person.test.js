const Person = require("./06-person");

describe("Test for Person", () => {
  let person;
  beforeEach(() => {
    person = new Person("Raycris", 36.6, 1.8);
  });
  
  test("should return down", () => {
    person.weight = 36;
    const imc = person.calcIMC();
    expect(imc).toBe("down");
  });

  test("should return normal", () => {
    person.weight = 66.6;
    const imc = person.calcIMC();
    expect(imc).toBe("normal");
  });
});
