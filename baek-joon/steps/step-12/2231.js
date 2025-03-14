// https://www.acmicpc.net/problem/2231

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

let result = 0;

for (let i = 1; i < n; i++) {
  const split = i.toString().split("").map(Number);
  const sum = i + split.reduce((a, n) => a + n);

  if (sum === n) {
    result = i;
    break;
  }
}

if (result) console.log(result);
else console.log(0);
