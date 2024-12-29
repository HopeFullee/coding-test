// https://www.acmicpc.net/problem/10430

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [A, B, C] = input.split(" ").map(Number);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
