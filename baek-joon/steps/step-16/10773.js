/* 
  www.acmicpc.net/problem/10773
  가장 최근에 쓴 수를 지우는 문제
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const stack = [];
let result = 0;

input.forEach((k) => {
  if (Number(k) === 0) {
    stack.pop();
  } else stack.push(Number(k));
});

if (stack.length > 0) {
  result = stack.reduce((a, n) => a + n);
}

console.log(result);
