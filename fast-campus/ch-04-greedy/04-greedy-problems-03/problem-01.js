// https://www.acmicpc.net/problem/13305

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const distanceArr = input[1].split(" ").map(Number);
const gasPriceArr = input[2].split(" ").map(Number);
// 마지막 도시는 주유 필요X
gasPriceArr.pop();

let minGasPrice = gasPriceArr[0];
let minGasMoneySpent = BigInt(0);

distanceArr.forEach((km, idx) => {
  const currGasPrice = gasPriceArr[idx];
  minGasPrice = Math.min(minGasPrice, currGasPrice);

  minGasMoneySpent += BigInt(minGasPrice) * BigInt(km);
});

console.log(minGasMoneySpent.toString());
