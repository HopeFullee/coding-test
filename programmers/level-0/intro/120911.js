/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120911
  코딩테스트 입문 - 문자열 정렬하기 (2)
*/

function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join("");
}

const my_string = "Bcad";

console.log(solution(my_string));
