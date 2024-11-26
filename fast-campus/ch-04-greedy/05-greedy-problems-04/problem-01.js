// https://www.acmicpc.net/problem/19939

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const baskets = Number(input[1]);
let balls = Number(input[0]);
let sum = 0;

[...Array(baskets)].forEach((_, idx) => (sum += idx + 1));

if (sum > balls) console.log(-1);
else {
  balls -= sum;
  if (balls % baskets === 0) console.log(baskets - 1);
  else console.log(baskets);
}
