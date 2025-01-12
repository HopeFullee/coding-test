// https://www.acmicpc.net/problem/2439

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

let str = "";

[...Array(n)].forEach(() => {
  str += "*";
  const space = " ".repeat(n - str.length);
  console.log(space + str);
});
