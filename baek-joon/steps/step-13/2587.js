// https://www.acmicpc.net/problem/2587

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);

const avg = input.reduce((a, n) => a + n) / 5;

console.log(avg);
console.log(input[2]);
