/* 
  www.acmicpc.net/problem/10773
  주어진 문자열이 올바른 괄호열인지 판단하는 문제
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["3", "((", "))", "())(()"];

input.shift();

const result = [];

input.forEach((tc) => {
  let leftCnt = 0;

  for (let i = 0; i < tc.length; i++) {
    if (leftCnt < 0) {
      break;
    } else if (tc[i] === "(") {
      leftCnt++;
    } else if (tc[i] === ")") {
      leftCnt--;
    }
  }

  if (leftCnt === 0) result.push("YES");
  else result.push("NO");
});

console.log(result.join("\n"));
