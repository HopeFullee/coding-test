/*
  https://www.acmicpc.net/problem/2742
  bronze tier 5 - 기찍 N
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  return [...Array(Number(input))].reduce((a, _, idx) => {
    return a + (Number(input) - idx) + "\n";
  }, "");
}

console.log(solution(input));
