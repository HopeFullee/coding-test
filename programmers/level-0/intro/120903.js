/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120903
  코딩테스트 입문 - 배열의 유사도
*/

function solution(s1, s2) {
  const set = new Set(s1);
  return s2.reduce((a, s) => (set.has(s) ? ++a : a), 0);
}

const s1 = ["a", "b", "c"];
const s2 = ["com", "b", "d", "p", "c"];

console.log(solution(s1, s2));
