// https://www.acmicpc.net/problem/11382

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [A, B, C] = input.split(" ").map(Number);

console.log(A + B + C);
