// const { default: test } = require("node:test");
const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
  const github = "GitHub";
  const e = new Engineer("Foo", 1, "test@test.com", github);
  expect(e.github).toBe(github);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Alice", 1, "test@test.com", "GitHub");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHub";
  const e = new Engineer("Alice", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});