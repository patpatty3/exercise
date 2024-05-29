const greet = require("./greet");

test("greet function", () => {
  expect(greet("John")).toBe("Hello, John");
  expect(greet("Alice")).toBe("Hello, Alice");
});
