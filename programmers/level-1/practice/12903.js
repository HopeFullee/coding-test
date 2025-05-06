/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12903
  연습문제 - 가운데 글자 가져오기
*/

function solution(s) {
  const mid = parseInt(s.length / 2);
  return s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}

const s = "abcde";

console.log(solution(s));
