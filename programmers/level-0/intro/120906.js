/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120906
  코딩테스트 입문 - 자릿수 더하기
*/

function solution(n) {
  return [...n.toString()].reduce((a, ch) => a + Number(ch), 0);
}

const n = 930211;

console.log(solution(n));
