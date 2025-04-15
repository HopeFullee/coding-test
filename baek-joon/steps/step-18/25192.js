/* 
  www.acmicpc.net/problem/11050
  단계 2 인사성 밝은 곰곰이
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["3", "ENTER", "lms0806", "lms0806"];

let set = new Set();
let emoji = 0;

for (let i = 1; i < input.length; i++) {
  if (input[i] === "ENTER") {
    set.clear();
  } else if (!set.has(input[i])) {
    set.add(input[i]);
    emoji++;
  }
}

console.log(emoji);
