/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181878
  코딩 기초 트레이닝 - 원하는 문자열 찾기
*/

function solution(myString, pat) {
  const regex = new RegExp(pat.toLowerCase(), "g");
  return regex.test(myString.toLowerCase()) ? 1 : 0;
}

const myString = "AbCdEfG";
const pat = "aBc";

console.log(solution(myString, pat));
