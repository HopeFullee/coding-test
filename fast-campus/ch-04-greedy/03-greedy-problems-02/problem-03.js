// https://www.acmicpc.net/problem/1789

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const s = Number(input);
let n = 0;
let sum = 0;

while (sum + n + 1 <= s) {
  n++;
  sum += n;
}

console.log(n);
