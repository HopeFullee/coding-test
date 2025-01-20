// https://www.acmicpc.net/problem/5597

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input.map(Number);

const arr = Array(30).fill(0);

n.forEach((v) => {
  arr[v - 1]++;
});

arr.forEach((v, idx) => {
  if (v === 0) console.log(idx + 1);
});
