// https://www.acmicpc.net/problem/9086

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

input.forEach((tc) => {
  const firstStr = tc[0];
  const lastStr = tc[tc.length - 1];

  console.log(firstStr + lastStr);
});
