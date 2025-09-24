/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181948
  코딩 기초 트레이닝 - 특수문자 출력하기
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log(`!@#$%^&*(\\'"<>?:;`);
});
