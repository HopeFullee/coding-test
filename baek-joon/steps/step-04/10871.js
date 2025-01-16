// https://www.acmicpc.net/problem/10871

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const answer = arr
  .reduce((acc, num) => {
    if (num < X) acc.push(num);
    return acc;
  }, [])
  .join(" ");

console.log(answer);
