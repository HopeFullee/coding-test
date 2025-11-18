/*
  https://www.acmicpc.net/problem/1712
  bronze tier 2 - 손익분기점
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

const input = [2100000000, 9, 10];

function solution(input) {
  const [A, B, C] = input;

  if (B >= C) return -1;

  let salesProfit = C - B;

  return A / salesProfit + 1;
}

console.log(solution(input));
