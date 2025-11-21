/*
  https://www.acmicpc.net/problem/4153
  bronze tier 3 - 직각삼각형
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["6 8 10", "25 52 60", "5 12 13", "0 0 0"];

input.pop();

function solution(input) {
  let ans = "";

  input.forEach((tc) => {
    const [A, B, C] = tc
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    const isTriangle = A ** 2 + B ** 2 === C ** 2;
    console.log(isTriangle ? "right" : "wrong");
  });

  return ans;
}

console.log(solution(input));
