// https://www.acmicpc.net/problem/1085

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [x, y, w, h] = input.split(" ").map(Number);

console.log(Math.min(x, y, w - x, h - y));
