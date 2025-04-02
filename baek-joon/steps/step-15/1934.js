//www.acmicpc.net/problem/1934

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

input.forEach((tc) => {
  const [a, b] = tc.split(" ").map(Number);

  for (let i = 1; i <= b; i++) {
    if ((a * i) % b === 0) {
      console.log(a * i);
      break;
    }
  }
});
