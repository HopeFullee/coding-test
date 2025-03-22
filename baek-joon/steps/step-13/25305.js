// https://www.acmicpc.net/problem/25305

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const scores = input[1].split(" ").map(Number);

scores.sort((a, b) => b - a);

console.log(scores[k - 1]);
