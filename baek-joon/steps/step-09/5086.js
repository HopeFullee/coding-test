// https://www.acmicpc.net/problem/5086

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.pop();

input.forEach((line) => {
  const [a, b] = line.split(" ").map(Number);

  if (a < b) {
    if (b % a === 0) console.log("factor");
    else console.log("neither");
  } else {
    if (a % b === 0) console.log("multiple");
    else console.log("neither");
  }
});
