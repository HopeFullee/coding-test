/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181938
  코딩 기초 트레이닝 - 두 수의 연산값 비교하기
*/

function solution(a, b) {
  return Math.max(Number(a.toString() + b.toString()), 2 * a * b);
}

const a = 2;
const b = 91;

console.log(solution(a, b));
