/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181949
  코딩 기초 트레이닝 - 대소문자 바꿔서 출력하기
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
  const reverseCase = [...input].reduce((acc, ch) => {
    if (ch.toUpperCase() === ch) {
      acc += ch.toLowerCase();
    } else {
      acc += ch.toUpperCase();
    }
    return acc;
  }, "");

  console.log(reverseCase);
});
