// https://www.acmicpc.net/problem/10798

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = Array(Math.max(...input.map((line) => line.length))).fill("");

input.forEach((line) => {
  [...line].forEach((s, idx) => {
    arr[idx] += s;
  });
});

console.log(arr.join(""));
