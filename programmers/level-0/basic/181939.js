/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181939
  코딩 기초 트레이닝 - 더 크게 합치기
*/

function solution(a, b) {
  a = a.toString();
  b = b.toString();

  return Math.max(Number(a + b), Number(b + a));
}

const a = 9;
const b = 91;
