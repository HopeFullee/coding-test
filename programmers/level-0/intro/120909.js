/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120909
  코딩테스트 입문 - 제곱수 판별하기
*/

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

function solution2(n) {
  let sqrt = 0;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) sqrt = i * i;
  }

  return sqrt ? 1 : 2;
}

const n = 976;

console.log(solution(n));
console.log(solution2(n));
