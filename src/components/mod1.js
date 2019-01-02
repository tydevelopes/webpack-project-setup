// Using commonJS
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const square = x => x * x;

// This will export all functions in one object
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  square,
};
