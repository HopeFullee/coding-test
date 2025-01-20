// https://www.acmicpc.net/problem/10810

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = [...Array(N)].map((_, idx) => idx + 1);

input.forEach((tc) => {
  const [i, j] = tc.split(" ").map(Number);

  const copy = arr[i - 1];
  arr[i - 1] = arr[j - 1];
  arr[j - 1] = copy;
});

console.log(arr.join(" "));
