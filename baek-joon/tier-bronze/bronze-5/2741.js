/*
  https://www.acmicpc.net/problem/2741
  bronze tier 5 - N 찍기
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  return [...Array(Number(input))].reduce((a, _, idx) => {
    return a + (idx + 1) + "\n";
  }, "");
}

console.log(solution(input));
