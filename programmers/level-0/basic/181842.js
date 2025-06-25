/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181841
  코딩 기초 트레이닝 - 부분 문자열
*/

function solution(str1, str2) {
  return Number(str2.includes(str1));
}

const str1 = "abc";
const str2 = "aabcc";
console.log(solution(str1, str2));
