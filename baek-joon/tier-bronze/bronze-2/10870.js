/*
  https://www.acmicpc.net/problem/10870
  bronze tier 2 - 피보나치 수 5
*/

// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

input = "0";

function solution(input) {
  if (input === "0") return 0;

  let prev = 0;
  let curr = 1;

  for (let i = 0; i < Number(input) - 1; i++) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
}

console.log(solution(input));
