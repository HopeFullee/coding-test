/*
  https://www.acmicpc.net/problem/2920
  bronze tier 2 - 음계
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// const input = [8, 7, 6, 5, 4, 3, 2, 1];

function solution(input) {
  const asc = [...input].sort((a, b) => a - b);
  const desc = [...input].sort((a, b) => b - a);

  if (asc.join("") === input.join("")) return "ascending";
  if (desc.join("") === input.join("")) return "descending";
  return "mixed";
}

console.log(solution(input));
