/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181907
  코딩 기초 트레이닝 - 문자열의 앞의 n글자
*/

function solution(my_string, n) {
  return my_string.slice(0, n);
}

const my_string = "He110W0r1d";
const n = 5;

console.log(solution(my_string, n));
