/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120816
  코딩테스트 입문 - 피자 나눠 먹기 (3)
*/

function solution(slice, n) {
  return Math.ceil(n / slice);
}

const slice = 7;
const n = 10;

console.log(solution(slice, n));
