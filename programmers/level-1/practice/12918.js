/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12918
  연습문제 - 문자열 다루기 기본
*/

function solution(s) {
  return s.length === 4 || s.length === 6 ? !isNaN(s) : false;
}

const s = "123456";

console.log(solution(s));
