// https://www.acmicpc.net/problem/2563

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const arr = Array.from({ length: 100 }, () => Array(100).fill(0));

let result = 0;

input.forEach((line) => {
  const [x, y] = line.split(" ").map(Number);

  for (i = x; i < x + 10; i++) {
    for (j = y; j < y + 10; j++) {
      if (++arr[i][j] === 1) result++;
    }
  }
});

console.log(result);
