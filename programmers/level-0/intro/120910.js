/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120910
  코딩테스트 입문 - 세균 증식
*/

function solution(n, t) {
  return [...Array(t)].reduce((a) => a * 2, n);
}

function solution2(n, t) {
  return n * Math.pow(2, t);
}

const n = 2;
const t = 10;

console.log(solution(n, t));
console.log(solution2(n, t));
