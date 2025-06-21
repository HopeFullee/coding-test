/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181873
  코딩 기초 트레이닝 - 특정한 문자를 대문자로 바꾸기
*/

function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

const my_string = "programmers";
const alp = "p";

console.log(solution(my_string, alp));
