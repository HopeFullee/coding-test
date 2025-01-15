// https://www.acmicpc.net/problem/10807

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const nums = input[1].split(" ").map(Number);
const target = Number(input[2]);

const targetCount = nums.reduce((acc, num) => {
  if (target === num) acc++;
  return acc;
}, 0);

console.log(targetCount);
