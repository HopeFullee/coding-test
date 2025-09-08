/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120888
  코딩테스트 입문 - 중복된 문자 제거
*/

function solution(my_string) {
  const set = new Set(my_string);
  return [...set].join("");
}

const my_string = "people";

console.log(solution(my_string));
