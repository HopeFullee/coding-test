// https://www.acmicpc.net/problem/2720

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const testCases = input.map(Number);

const COINS = [25, 10, 5, 1];

const answer = testCases.reduce((acc, change) => {
  let remain = change;

  const usedCoins = COINS.reduce((acc, coin) => {
    const count = parseInt(remain / coin);
    remain %= coin;
    acc.push(count);
    return acc;
  }, []);

  acc.push(usedCoins.join(" "));
  return acc;
}, []);

console.log(answer.join("\n"));
