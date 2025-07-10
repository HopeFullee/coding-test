/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181868
  코딩 기초 트레이닝 - 공백으로 구분하기 2
*/

function solution(my_string) {
  return my_string.trim().split(/\s+/g);
}

const my_string = " i    love  you";

console.log(solution(my_string));
