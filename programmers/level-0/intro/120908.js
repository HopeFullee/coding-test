/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120908
  코딩테스트 입문 - 문자열안에 문자열
*/

function solution(str1, str2) {
  const regex = new RegExp(`${str2}`, "g");
  return regex.test(str1) ? 1 : 2;
}

function solution2(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

const str1 = "ab6CDE443fgh22iJKlmn1o";
const str2 = "6CD";

console.log(solution(str1, str2));
console.log(solution2(str1, str2));
