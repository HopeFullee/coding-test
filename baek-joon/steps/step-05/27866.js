// https://www.acmicpc.net/problem/27866

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const str = input[0];
const i = Number(input[1]);

console.log(str[i - 1]);
