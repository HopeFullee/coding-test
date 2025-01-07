// https://www.acmicpc.net/problem/10951

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.forEach((tc) => {
  const [A, B] = tc.split(" ").map(Number);
  console.log(A + B);
});
