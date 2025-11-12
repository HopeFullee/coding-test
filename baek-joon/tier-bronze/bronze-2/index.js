/*
  https://www.acmicpc.net/problem/34309
  bronze tier 2 - Mines Motor Company
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["2", "AA", "CC"];

input.shift();

function solution(input) {
  let step = 0;

  for (let i = 0; i < input.length - 1; i++) {
    step += Math.abs(input[i][0].charCodeAt() - input[i + 1][0].charCodeAt());
    step += Math.abs(input[i][1].charCodeAt() - input[i + 1][1].charCodeAt());
  }

  return step;
}

console.log(solution(input));
