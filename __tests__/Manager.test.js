const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.office).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Alice", 1, "test@email.com", "101");
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = "101";
  const e = new Manager("Alice", 1, "test@email.com", testValue);
  expect(e.getOffice()).toBe(testValue);
});