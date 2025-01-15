// https://www.acmicpc.net/problem/2439

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

let str = "";

[...Array(n)].forEach(() => {
  str += "*";
  console.log(str.padStart(n));
});
