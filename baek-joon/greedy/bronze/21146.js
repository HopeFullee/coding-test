// https://www.acmicpc.net/problem/21146

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);

const sum = input.reduce((acc, r) => {
  return acc + Number(r);
}, 0);

const max = (sum + (n - k) * 3) / n;
const min = (sum + (n - k) * -3) / n;

console.log(min, max);
