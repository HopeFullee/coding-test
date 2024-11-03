// https://www.acmicpc.net/problem/11650

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const xyArr = input.map((xy) => {
  return xy.split(" ").map(Number);
});

xyArr.sort((a, b) => {
  const objA = { x: a[0], y: a[1] };
  const objB = { x: b[0], y: b[1] };

  if (objA.x === objB.x) {
    return objA.y - objB.y;
  } else {
    return objA.x - objB.x;
  }
});

const answer = xyArr.map((xy) => xy.join(" ")).join("\n");

console.log(answer);
