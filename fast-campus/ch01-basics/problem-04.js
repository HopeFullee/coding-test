// https://www.acmicpc.net/problem/10869

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const line = input[0].split(" ");

const a = Number(line[0]);
const b = Number(line[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a + b);
