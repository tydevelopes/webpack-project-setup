// ES6 modules
import style from "./_scss/main.scss";
import {add, multiply} from './components/mode2';
import * as calculator from './components/mode2';
import sum from './components/mode2';

console.log("Ready to code! yah!!");

const maxMin = (numbers) => {
  let maxNumber = Math.max(...numbers);
  let minNumber = Math.min(...numbers);
  return [maxNumber, minNumber];
}
const nums = [1, 3, -4, 6, 32, 10];
const [max, min] = maxMin(nums);
console.log(`Max: ${max}, Min: ${min}`);

// CommonJS export
const calc = require('./components/mod1');
console.log(calc.add(3, 4));

// Using imported ES6 modules
console.log(add(2, 10));

console.log(calculator.square(4));

console.log(sum([1, 2, 3, 4, 5]));


