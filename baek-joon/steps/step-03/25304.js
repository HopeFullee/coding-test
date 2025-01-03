// https://www.acmicpc.net/problem/25304

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const x = Number(input.shift());
const n = Number(input.shift());

const sum = input.reduce((acc, tc) => {
  const [a, b] = tc.split(" ").map(Number);
  return acc + a * b;
}, 0);

if (x === sum) console.log("Yes");
else console.log("No");
