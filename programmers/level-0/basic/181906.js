/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181906
  코딩 기초 트레이닝 - 접두사인지 확인하기
*/

function solution(my_string, is_prefix) {
  return Number(my_string.startsWith(is_prefix));
}

function solution2(my_string, is_prefix) {
  const slice = my_string.slice(0, is_prefix.length);
  return slice === is_prefix ? 1 : 0;
}

const my_string = "banana";
const is_prefix = "ban";

console.log(solution(my_string, is_prefix));
console.log(solution2(my_string, is_prefix));
