/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181947
  코딩 기초 트레이닝 - 덧셈식 출력하기
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
}).on("close", function () {
  const [a, b] = input;
  console.log(`${a} + ${b} = ${a + b}`);
});
