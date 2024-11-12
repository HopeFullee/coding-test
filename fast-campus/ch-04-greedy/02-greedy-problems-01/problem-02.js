// https://www.acmicpc.net/problem/11047

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const p = input[1].split(" ").map(Number);

p.sort((a, b) => {
  return a - b;
});

const { totalElapsedTime } = p.reduce(
  (acc, time) => {
    acc.eachElapsedTime += time;
    acc.totalElapsedTime += acc.eachElapsedTime;
    return acc;
  },
  {
    eachElapsedTime: 0,
    totalElapsedTime: 0,
  }
);

console.log(totalElapsedTime);
