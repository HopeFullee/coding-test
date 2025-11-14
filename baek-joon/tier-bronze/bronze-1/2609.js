/*
  https://www.acmicpc.net/problem/1110
  bronze tier 1 - 최대공약수와 최소공배수
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

const input = [24, 18];

// 유클리드 호제법 기얏꿀!!!
const Euclidean = (input) => {
  let a = input[0];
  let b = input[1];

  while (a % b) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  const GCM = b;
  const LCM = (input[0] * input[1]) / b;

  return { GCM, LCM };
};

function solution(input) {
  input.sort((a, b) => b - a);

  const { GCM, LCM } = Euclidean(input);

  return `${GCM}\n` + `${LCM}`;
}

console.log(solution(input));
