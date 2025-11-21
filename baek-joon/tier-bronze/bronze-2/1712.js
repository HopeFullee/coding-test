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

const input = [1000, 70, 170];

function solution(input) {
  const [A, B, C] = input;

  if (B >= C) return -1;

  let salesProfit = C - B;

  return parseInt(A / salesProfit + 1);
}

console.log(solution(input));
