const caeser = require('../js/caeser.js');

describe('Caeser encryption function', () => {
  test('It should encrypt a string given a string and a key', () => {
    expect(caeser('abc', 1)).toBe('bcd');
  });
  test('It should wrap around from z to a', () => {
    expect(caeser('xyz', 1)).toBe('yza');
  });
  test('It should maintain the same case', () => {
    expect(caeser('ABC', 1)).toBe('BCD');
  });
  test('It should retain non alphabet characters', () => {
    expect(caeser('ABC efg', 1)).toBe('BCD fgh');
  });
});
