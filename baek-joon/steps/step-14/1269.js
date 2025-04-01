//www.acmicpc.net/problem/1269

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["3 5", "1 2 4", "2 3 4 5 6"];

const arrA = input[1].split(" ").map(Number);
const arrB = input[2].split(" ").map(Number);
const setA = new Set(arrA);
const setB = new Set(arrB);

const AB = arrA.filter((a) => {
  return !setB.has(a);
}).length;

const BA = arrB.filter((b) => {
  return !setA.has(b);
}).length;

console.log(AB + BA);
