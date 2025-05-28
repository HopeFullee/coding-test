/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120849
  코딩테스트 입문 - 모음 제거
*/

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

const my_string = "nice to meet you";

console.log(solution(my_string));
