/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181917
  코딩 기초 트레이닝 - 간단한 논리 연산
*/

function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

const x1 = false;
const x2 = true;
const x3 = false;
const x4 = false;

console.log(solution(x1, x2, x3, x4));
