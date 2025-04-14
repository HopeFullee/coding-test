/* 
  www.acmicpc.net/problem/11050
  단계 1 약수 - 1과 N 빼고 다 주어졌을 때 N을 찾는 문제
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = [
  "14",
  "14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596",
];

const factors = input[1].split(" ").map(Number);

const max = Math.max(...factors);
const min = Math.min(...factors);

console.log(max * min);
