// https://www.acmicpc.net/problem/1978

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numArray = input.pop().split(" ").map(Number);

let primeNumberCount = 0;

numArray.forEach((num) => {
  const factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }

  if (factors.length === 2) primeNumberCount++;
});

console.log(primeNumberCount);
