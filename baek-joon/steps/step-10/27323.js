// https://www.acmicpc.net/problem/27323

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input.map(Number);

console.log(a * b);
