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

/*
  ------------------------ 처음 풀어본 방법 ------------------------
*/

// input.forEach((tc) => {
//   let leftCnt = 0;

//   for (let i = 0; i < tc.length; i++) {
//     if (leftCnt < 0) {
//       break;
//     } else if (tc[i] === "(") {
//       leftCnt++;
//     } else if (tc[i] === ")") {
//       leftCnt--;
//     }
//   }

//   if (leftCnt === 0) result.push("YES");
//   else result.push("NO");
// });

/*
  ------------------------ 스택 로직으로 풀어본 방법 ------------------------
*/

input.forEach((tc) => {
  const stack = [];

  for (let i = 0; i < tc.length; i++) {
    if (tc[i] === "(") {
      stack.push("(");
    } else if (stack[stack.length - 1] === "(" && tc[i] === ")") {
      stack.pop();
    } else if (tc[i] === ")") {
      // 최초에 ')' 닫힌 과로가 나왔을때를 대비해서 ('EXIT')이라는 의미없는 element 추가
      stack.push("EXIT");
      break;
    }
  }

  if (!stack.length) result.push("YES");
  else result.push("NO");
});

console.log(result.join("\n"));
