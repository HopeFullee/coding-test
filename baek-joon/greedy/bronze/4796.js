// https://www.acmicpc.net/problem/4796

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.pop();

const answer = input.map((tc, idx) => {
  const [L, P, V] = tc.split(" ").map(Number);
  const leftOver = V % P;

  let days = parseInt(V / P) * L;
  days += leftOver < L ? leftOver : L;

  return `Case ${idx + 1}: ${days}`;
});

console.log(answer.join("\n"));
