// https://www.acmicpc.net/problem/1427

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const numArr = input.split("").map(Number);

numArr.sort((a, b) => {
  return b - a;
});

const answer = numArr.join("");

console.log(answer);
