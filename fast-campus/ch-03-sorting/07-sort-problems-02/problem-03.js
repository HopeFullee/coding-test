// https://www.acmicpc.net/problem/1181

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const strArr = [...new Set(input)];

strArr.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  } else {
    return a.length - b.length;
  }
});

const answer = strArr.join("\n");

console.log(answer);
