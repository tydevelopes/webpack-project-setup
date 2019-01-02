// Using ES6 modules
export const add = (x, y) => x + y;
export const subtract = (x, y) => x - y;
export const multiply = (x, y) => x * y;
export const divide = (x, y) => x / y;
export const square = x => x * x;
export default function sum (numbers)  {
  return numbers.reduce((prev, curr) => prev + curr, 0);
};