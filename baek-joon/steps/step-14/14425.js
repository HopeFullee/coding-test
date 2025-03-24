https://www.acmicpc.net/problem/14425

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const mArr = new Set();

for (let i = 1; i <= n; i++) {
  mArr.add(input[i])
}

let count = 0;

for (let i = n + 1; i <= n + m; i++) {
  const mString = input[i];
  if (mArr.has(mString)) count++;
}

console.log(count);
