// https://www.acmicpc.net/problem/18870

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const xCordArr = input[1].split(" ").map(Number);
const uniqueXCordArr = [...new Set(xCordArr)];
const xCordMap = new Map();

uniqueXCordArr.sort((a, b) => {
  return a - b;
});

uniqueXCordArr.forEach((x, idx) => {
  xCordMap.set(x, idx);
});

const answer = xCordArr
  .map((x) => {
    return xCordMap.get(x);
  })
  .join(" ");

console.log(answer);
