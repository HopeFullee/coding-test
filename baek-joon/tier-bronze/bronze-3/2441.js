/*
  https://www.acmicpc.net/problem/2441
  bronze tier 3 - 별 찍기 - 4
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()

const input = "5";

function solution(input) {
  return [...Array(Number(input))].reduce((acc, _, idx) => {
    return acc + " ".repeat(idx) + "*".repeat(Number(input) - idx) + "\n";
  }, "");
}

console.log(solution(input));
