/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181945
  코딩 기초 트레이닝 - 문자열 돌리기
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
  [...input].forEach((ch) => console.log(ch));
});
