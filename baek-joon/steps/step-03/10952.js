// https://www.acmicpc.net/problem/10952

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.pop();

input.forEach((tc) => {
  const [A, B] = tc.split(" ").map(Number);
  console.log(A + B);
});
