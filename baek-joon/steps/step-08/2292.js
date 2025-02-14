// https://www.acmicpc.net/problem/2292

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input);

let steps = 1;

while (n > 1) {
  n -= 6 * steps;
  steps++;
}

console.log(steps);
