// https://www.acmicpc.net/problem/14215

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const input = [1, 100, 1];

input.sort((a, b) => a - b);

const [a, b, c] = input;

const sum = a + b;

if (sum > c) console.log(sum + c);
else console.log(sum + (sum - 1));
