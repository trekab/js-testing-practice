const capitalize = require('../js/capitalize');

test('turns first character to upper case', () => {
  expect(capitalize("hello")).toBe("Hello");
});
