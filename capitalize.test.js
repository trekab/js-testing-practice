const capitalize = require('./capitalize');

test('turns first character to upper case', () => {
  expect(capitalize("hello")).toBe("Hello");
});