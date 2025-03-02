// https://www.acmicpc.net/problem/3009

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const xArr = [];
const yArr = [];

input.forEach((line) => {
  const [x, y] = line.split(" ").map(Number);
  xArr.push(x);
  yArr.push(y);
});

const xMin = Math.min(...xArr);
const xMax = Math.max(...xArr);
const yMin = Math.min(...yArr);
const yMax = Math.max(...yArr);

console.log((xMax - xMin) * (yMax - yMin));
