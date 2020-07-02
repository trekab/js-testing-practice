const reverseString = require('../js/reverseString');

test('returns a reversed version of the input string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
