/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181910
  코딩 기초 트레이닝 - 문자열의 뒤의 n글자
*/

function solution(my_string, n) {
  return my_string.slice(-n);
}

const my_string = "ProgrammerS123";
const n = 11;

console.log(solution(my_string, n));
