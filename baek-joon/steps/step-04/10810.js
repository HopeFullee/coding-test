// https://www.acmicpc.net/problem/10810

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = Array(N).fill(0);

input.forEach((tc) => {
  let [i, j, k] = tc.split(" ").map(Number);

  for (i -= 1; i < j; i++) {
    arr[i] = k;
  }
});

console.log(arr.join(" "));
