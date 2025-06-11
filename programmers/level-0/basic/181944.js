/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181944
  코딩 기초 트레이닝 - 홀짝 구분하기
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  n = input;

  console.log(n % 2 ? n + " is odd" : n + " is even");
});
