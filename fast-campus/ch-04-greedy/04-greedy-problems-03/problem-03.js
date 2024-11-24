// https://www.acmicpc.net/problem/11509

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const balloons = input[1].split(" ").map(Number);

let arrowCount = 0;
let quiver = Array(1000001).fill(0);

balloons.forEach((pos, idx) => {
  if (quiver[pos] > 0) {
    quiver[pos]--;
    quiver[pos - 1]++;
  } else {
    arrowCount++;
    quiver[pos - 1]++;
  }
});

console.log(arrowCount);
