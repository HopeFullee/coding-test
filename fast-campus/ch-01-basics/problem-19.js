// https://www.acmicpc.net/problem/11720

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const line2 = input[1].split("").map(Number);

const getSumNum = () => {
  const sum = line2.reduce((acc, val) => acc + val);
  console.log(sum);
};

getSumNum();
