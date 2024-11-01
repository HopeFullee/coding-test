// https://www.acmicpc.net/problem/11004

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const k = input[0].split(" ")[1];
const numArr = input[1].split(" ").map(Number);

numArr.sort((a, b) => {
  return a - b;
});

console.log(numArr[k - 1]);
