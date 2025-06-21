/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120904
  코딩 기초 트레이닝 - 숫자 찾기
*/

function solution(num, k) {
  const idx = num.toString().indexOf(k.toString());
  return idx !== -1 ? idx + 1 : -1;
}

function solution2(num, k) {
  return num.toString().indexOf(k.toString()) + 1 || -1;
}

const num = 123456;
const k = 7;

console.log(solution(num, k));
console.log(solution2(num, k));
