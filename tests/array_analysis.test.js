import analyze from '../js/array_analysis';

const array = [1, 2, 3, 4, 5];

describe('Should output array analysis with min, max, length and average', () => {
  test('It should return an object', () => {
    expect(typeof (analyze(array))).toBe('object');
  });
  test('It should return the average', () => {
    expect(analyze(array).average).toBe(3);
  });
  test('It should return min', () => {
    expect(analyze(array).min).toBe(1);
  });
  test('It should return max', () => {
    expect(analyze(array).max).toBe(5);
  });
  test('It should return length', () => {
    expect(analyze(array).length).toBe(5);
  });
});
