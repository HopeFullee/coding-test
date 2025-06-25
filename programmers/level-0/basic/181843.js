/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181843
  코딩 기초 트레이닝 - 부분 문자열인지 확인하기
*/

function solution(my_string, target) {
  return Number(my_string.includes(target));
}

const my_string = "banana";
const target = "ana";

console.log(my_string, target);
