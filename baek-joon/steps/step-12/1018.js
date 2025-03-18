// https://www.acmicpc.net/problem/1018

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const compare = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const getMinDiff = (startRow, startCol) => {
  let count = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (input[startRow + i][startCol + j] !== compare[i][j]) {
        count++;
      }
    }
  }

  return Math.min(count, 64 - count);
};

let minResult = 64;

for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    minResult = Math.min(minResult, getMinDiff(i, j));
  }
}

console.log(minResult);
