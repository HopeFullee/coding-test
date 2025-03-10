// https://www.acmicpc.net/problem/24265

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

let sum = 0;

for (let i = 1; i < n; i++) {
  sum += n - i;
}

console.log(sum);
console.log(2);
