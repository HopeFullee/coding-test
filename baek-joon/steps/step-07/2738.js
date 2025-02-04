// https://www.acmicpc.net/problem/2738

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
const half = parseInt(input.length / 2);

const firstHalf = input.slice(0, half);
const secondHalf = input.slice(half);

const sumArr = secondHalf.map((B, idx) => {
  const rowA = firstHalf[idx].split(" ").map(Number);
  const rowB = B.split(" ").map(Number);

  const sumRow = rowA
    .map((num, idx) => {
      return num + rowB[idx];
    })
    .join(" ");

  return sumRow;
});

console.log(sumArr.join("\n"));
