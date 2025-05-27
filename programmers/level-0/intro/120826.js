/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120826
  코딩테스트 입문 - 특정 문자 제거하기
*/

function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

function solution2(my_string, letter) {
  return my_string.replace(new RegExp(letter, "g"), "");
}

const my_string = "BCBdbe";
const letter = "B";

console.log(solution(my_string, letter));
console.log(solution2(my_string, letter));
