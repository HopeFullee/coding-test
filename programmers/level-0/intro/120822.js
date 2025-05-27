/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120822
  코딩테스트 입문 - 뒤집힌 문자열
*/

function solution(my_string) {
  return [...my_string].reverse().join("");
}

const my_string = "jaron";

console.log(solution(my_string));
