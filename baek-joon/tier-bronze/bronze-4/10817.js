/*
  https://www.acmicpc.net/problem/10817
  bronze tier 4 - 세 수
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

const input = [20, 30, 10];

function solution(input) {
  const [min, mid, max] = input.sort((a, b) => a - b);
  return mid;
}

console.log(solution(input));
