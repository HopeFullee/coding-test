//www.acmicpc.net/problem/14425

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const nArr = new Set(input.slice(0, n));

nArr;

let count = 0;

for (let i = n; i < n + m; i++) {
  if (nArr.has(input[i])) count++;
}

console.log(count);
