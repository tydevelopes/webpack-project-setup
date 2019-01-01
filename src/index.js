import style from "./_scss/main.scss";

console.log("Ready to code! yah!!");

const maxMin = (numbers) => {
  let maxNumber = Math.max(...numbers);
  let minNumber = Math.min(...numbers);

  return [maxNumber, minNumber];
}

const nums = [1, 3, -4, 6, 32, 0];

const [max, min] = maxMin(nums);

console.log(`Max: ${max}, Min: ${min}`);
