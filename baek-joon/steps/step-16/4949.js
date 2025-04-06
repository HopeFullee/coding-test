/* 
  www.acmicpc.net/problem/4949
  위와 같은데 괄호의 종류가 다양해진 문제
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = [
  "So when I die (the [first] I will see in (heaven) is a score list).",
  "[ first in ] ( first out ).",
  "Half Moon tonight (At least it is better than no Moon at all].",
  "A rope may form )( a trail in a maze.",
  "Help( I[m being held prisoner in a fortune cookie factory)].",
  "([ (([( [ ] ) ( ) (( ))] )) ]).",
  ".",
  ".",
];

input.pop();

const result = [];

input.forEach((tc) => {
  const stack = [];

  for (let i = 0; i < tc.length; i++) {
    if (tc[i] === "(" || tc[i] === "[") {
      stack.push(tc[i]);
    } else if (stack[stack.length - 1] === "(" && tc[i] === ")") {
      stack.pop();
    } else if (stack[stack.length - 1] === "[" && tc[i] === "]") {
      stack.pop();
    } else if (tc[i] === ")" || tc[i] === "]") {
      stack.push("EXIT");
      break;
    }
  }

  if (!stack.length) result.push("yes");
  else result.push("no");
});

console.log(result.join("\n"));
