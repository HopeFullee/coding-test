// https://www.acmicpc.net/problem/10998

const input = require("fs").readFileSync("/dev/stdin").toString();

const line = input.split(" ");

const a = Number(line[0]);
const b = Number(line[1]);

console.log(a * b);
