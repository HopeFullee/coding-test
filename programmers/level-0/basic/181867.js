/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181867
  코딩 기초 트레이닝 - x 사이의 개수
*/

function solution(myString) {
  return myString.split("x").map((str) => str.length);
}

const myString = "oxooxoxxox";

console.log(solution(myString));
