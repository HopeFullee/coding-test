// https://www.acmicpc.net/problem/1157

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const upperCaseArr = [...input].map((s) => s.toUpperCase());
const set = new Set(upperCaseArr);

let prev = 0;
let answer = "";

set.forEach((str) => {
  const letterCount = upperCaseArr.filter((s) => s === str).length;

  if (prev < letterCount) {
    prev = letterCount;
    answer = str;
  } else if (prev === letterCount) {
    answer = "?";
  }
});

console.log(answer);
