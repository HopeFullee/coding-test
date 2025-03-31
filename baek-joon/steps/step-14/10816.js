//www.acmicpc.net/problem/10816

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["10", "6 3 2 10 10 10 -10 -10 7 3", "8", "10 9 -5 2 3 4 5 -10"];

const mArr = input[3].split(" ");

const nObj = input[1].split(" ").reduce((acc, n) => {
  acc[n] ? acc[n]++ : (acc[n] = 1);
  return acc;
}, {});

let result = "";

mArr.forEach((m) => {
  result += nObj[m] ? `${nObj[m]} ` : "0 ";
});

console.log(result.trim());
