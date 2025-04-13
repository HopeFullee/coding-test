/* 
  www.acmicpc.net/problem/2164
  큐를 사용하여 동작을 구현하는 문제
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()

const input = "6";

const cards = [...Array(Number(input))].map((_, idx) => idx + 1).reverse();

for (let i = Number(input) - 1; i > 0; i--) {
  cards.pop();
  const temp = cards.pop();
  cards.unshift(temp);
}

console.log(...cards);
