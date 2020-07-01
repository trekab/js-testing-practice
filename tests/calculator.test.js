// import calc from '../js/calculator.js'
const calculator = require('../js/calculator.js');

describe('Calculator function for basico ops', () => {
  test('It should add 2 numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test('It should subtract 2 numbers', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });
  test('It should divide 2 numbers', () => {
    expect(calculator.divide(5, 5)).toBe(1);
  });
  test('It should multiply 2 numbers', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });
});
