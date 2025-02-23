// https://www.acmicpc.net/problem/2501

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [m, n] = input;

let sum = 0;
const primeNumArr = [];

for (let i = m; i <= n; i++) {
  const factors = [];

  for (let j = 1; j <= i; j++) {
    if (i % j === 0) factors.push(j);
  }

  if (factors.length === 2) {
    sum += i;
    primeNumArr.push(i);
  }
}

if (primeNumArr.length !== 0) {
  console.log(sum);
  console.log(primeNumArr[0]);
} else {
  console.log(-1);
}
