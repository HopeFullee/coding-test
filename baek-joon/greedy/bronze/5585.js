// https://www.acmicpc.net/problem/7130

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const price = Number(input);
const COINS = [500, 100, 50, 10, 5, 1];
let remain = 1000 - price;

const coinsCount = COINS.reduce((acc, coin) => {
  const count = parseInt(remain / coin);
  remain %= coin;
  return acc + count;
}, 0);

console.log(coinsCount);
