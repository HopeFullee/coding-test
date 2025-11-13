/*
  https://www.acmicpc.net/problem/34455
  bronze tier 4 - Donut Shop
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["10", "3", "+", "24", "-", "6", "-", "12"];

function solution(input) {
  let remaining = Number(input[0]);
  let operator = "";

  input.splice(0, 2);

  for (const n of input) {
    if (n === "+") {
      operator = "+";
      continue;
    }
    if (n === "-") {
      operator = "-";
      continue;
    }

    switch (operator) {
      case "+":
        remaining += Number(n);
        break;
      case "-":
        remaining -= Number(n);
        break;
    }
  }

  return remaining;
}

console.log(solution(input));
