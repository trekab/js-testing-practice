const reverseString = require('./reverseString');

test('returns a reversed version of the input string', () => {
  expect(reverseString("hello")).toBe("olleh");
});