/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181908
  코딩 기초 트레이닝 - 접미사인지 확인하기
*/

function solution(my_string, is_suffix) {
  return Number(my_string.endsWith(is_suffix));
}

const my_string = "banana";
const is_suffix = "ana";

console.log(solution(my_string, is_suffix));
