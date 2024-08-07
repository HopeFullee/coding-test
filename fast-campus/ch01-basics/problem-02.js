// https://www.acmicpc.net/problem/1000

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const line = input.split(" ");

const a = parseInt(line[0]);
const b = parseInt(line[1]);

console.log(a + b);
