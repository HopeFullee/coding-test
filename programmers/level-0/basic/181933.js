/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181933
  코딩 기초 트레이닝 - flag에 따라 다른 값 반환하기
*/

function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

const a = -4;
const b = 7;
const flag = true;

console.log(solution(a, b, flag));
