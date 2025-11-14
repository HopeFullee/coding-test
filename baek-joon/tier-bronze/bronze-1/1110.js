/*
  https://www.acmicpc.net/problem/1110
  bronze tier 1 - 더하기 사이클
*/

// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

input = "55";

function solution(input) {
  input = Number(input);
  const origin = input;
  let count = 0;

  while (true) {
    const a = parseInt(input / 10);
    const b = input % 10;
    const c = (a + b) % 10;

    input = Number(b.toString() + c.toString());
    count++;

    if (origin === input) break;
  }

  return count;
}

console.log(solution(input));
