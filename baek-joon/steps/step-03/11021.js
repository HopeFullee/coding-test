// https://www.acmicpc.net/problem/11021

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

input.forEach((tc, idx) => {
  const [A, B] = tc.split(" ").map(Number);
  console.log(`Case #${idx + 1}: ${A + B}`);
});
