/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181940
  코딩 기초 트레이닝 - 문자열 곱하기
*/

function solution(my_string, k) {
  return my_string.repeat(k);
}

const my_string = "string";
const k = 3;

console.log(solution(my_string, k));
