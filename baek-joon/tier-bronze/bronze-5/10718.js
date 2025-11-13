/*
  https://www.acmicpc.net/problem/8393
  bronze tier 5 - 합
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  return [...Array(Number(input))].reduce((a, _, idx) => a + idx + 1, 0);
}

console.log(solution(input));
