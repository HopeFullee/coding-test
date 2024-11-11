// https://www.acmicpc.net/problem/11047

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const targetAmount = Number(input.shift().split(" ")[1]);
const coinVariations = input.map(Number);

coinVariations.sort((a, b) => {
  return b - a;
});

coinVariations.some(() => {});
