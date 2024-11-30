// https://www.acmicpc.net/problem/1493

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const boxDimensions = input.shift().split(" ").map(Number);
const boxCapacity = boxDimensions.reduce((acc, n) => (acc *= n));
input.shift();

const cubes = input.map((v) => v.split(" ").map(Number));
cubes.sort((a, b) => b[0] - a[0]);

let insertCount = 0;
