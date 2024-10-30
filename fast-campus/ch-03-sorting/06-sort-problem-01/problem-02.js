// https://www.acmicpc.net/problem/2750

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numArr = input.map(Number);

numArr.shift();
numArr.sort((a, b) => {
  return a - b;
});

console.log(numArr.join("\n"));
