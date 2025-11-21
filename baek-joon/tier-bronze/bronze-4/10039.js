/*
  https://www.acmicpc.net/problem/10039
  bronze tier 4 - 평균 점수
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);

const input = [10, 65, 100, 30, 95];

function solution() {
  const sum = input.reduce((acc, n) => {
    return (acc += n < 40 ? 40 : n);
  }, 0);

  return sum / 5;
}

console.log(solution(input));
