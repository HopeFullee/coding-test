// https://www.acmicpc.net/problem/25314

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input) / 4;

const answer = [...Array(n)].reduce((acc) => {
  return acc + "long ";
}, "");

console.log(answer + "int");
