/*
  https://www.acmicpc.net/problem/2577
  bronze tier 2 - 숫자의 개수
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const counter = Array(10).fill(0);
  const multi = Number(input[0]) * Number(input[1]) * Number(input[2]);

  [...multi.toString()].forEach((m) => counter[Number(m)]++);

  counter.forEach((v) => console.log(v));
}

solution(input);
