// https://www.acmicpc.net/problem/11651

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const xyArr = input.map((xy) => xy.split(" ").map(Number));

xyArr.sort((a, b) => {
  const objA = { x: a[0], y: a[1] };
  const objB = { x: b[0], y: b[1] };

  if (objA.y === objB.y) return objA.x - objB.x;
  else return objA.y - objB.y;
});

const answer = xyArr.map((xy) => xy.join(" ")).join(" ");

console.log(answer);
