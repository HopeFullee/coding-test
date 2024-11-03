// https://www.acmicpc.net/problem/2752

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const line = input.split(" ").map(Number);

line.sort((a, b) => {
  return a - b;
});

console.log(...line);
