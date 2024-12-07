// https://www.acmicpc.net/problem/8321

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k, s] = input[0].split(" ").map(Number);
const screwBoxes = input[1].split(" ").map(Number);

screwBoxes.sort((a, b) => b - a);

let minScrewBoxes = 0;
let requiredScrews = k * s;

screwBoxes.some((amount) => {
  requiredScrews -= amount;
  minScrewBoxes++;

  if (requiredScrews <= 0) return true;
  else return false;
});

console.log(minScrewBoxes);
