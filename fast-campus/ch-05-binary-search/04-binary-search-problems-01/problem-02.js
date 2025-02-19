// https://www.acmicpc.net/problem/2805

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["5 20", "4 42 40 26 46"];

const [n, m] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

let start = 0;
let end = trees.reduce((a, v) => Math.max(a, v));

let result = 0;

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let total = 0;

  trees.forEach((v) => {
    if (v > mid) total += v - mid;
  });

  if (total < m) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
