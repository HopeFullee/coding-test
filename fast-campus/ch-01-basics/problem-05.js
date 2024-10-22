// https://www.acmicpc.net/problem/2588

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const a = Number(input[0]);
const b = Number(input[1]);

const arrB = b.toString().split("").map(Number);

console.log(a * arrB[2]);
console.log(a * arrB[1]);
console.log(a * arrB[0]);
console.log(a * b);
