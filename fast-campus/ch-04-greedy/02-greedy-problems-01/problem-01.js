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

const getCoinCount = (targetAmount) => {
  let answer = 0;
  let remainingAmount = targetAmount;

  coinVariations.some((coin) => {
    while (coin <= remainingAmount) {
      remainingAmount -= coin;
      answer++;
    }

    if (remainingAmount === 0) return true;
    else return false;
  });

  return answer;
};

console.log(getCoinCount(targetAmount));
