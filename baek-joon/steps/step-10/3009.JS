// https://www.acmicpc.net/problem/3009

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const xArr = [];
const yArr = [];

input.forEach((line) => {
  const [x, y] = line.split(" ").map(Number);
  xArr.push(x);
  yArr.push(y);
});

let x = 0;
let y = 0;

for (let i = 0; i < input.length; i++) {
  if (xArr.filter((x) => x === xArr[i]).length === 1) x = xArr[i];
  if (yArr.filter((y) => y === yArr[i]).length === 1) y = yArr[i];
}

console.log(x, y);
