/*
  https://www.acmicpc.net/problem/2475
  bronze tier 5 - 검증수
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

const input = [0, 4, 2, 5, 6];

function solution(input) {
  const sum = input.reduce((acc, n) => acc + n ** 2, 0);
  return sum % 10;
}

console.log(solution(input));
