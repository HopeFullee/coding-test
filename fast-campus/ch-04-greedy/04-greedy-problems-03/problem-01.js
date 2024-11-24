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
  // 조건부 if 없이, 현재 currGasPrice 와 기존 minGasPrice 값을 비교해 minGasPrice 갱신
  minGasPrice = Math.min(minGasPrice, currGasPrice);

  minGasMoneySpent += BigInt(minGasPrice) * BigInt(km);
});

console.log(minGasMoneySpent.toString());

/*********************** 
 이전 조건부 형식의 코드 
 ***********************/

// distanceArr.forEach((km, idx) => {
//   const currGasPrice = gasPriceArr[idx];

//   if (minGasPrice > currGasPrice) {
//     minGasPrice = currGasPrice;
//   }

//   minGasMoneySpent += minGasPrice * km;
// });
