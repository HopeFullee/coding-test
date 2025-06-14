/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181909
  코딩 기초 트레이닝 - 접미사 배열
*/

function solution(my_string) {
  return [...my_string].map((_, idx) => my_string.slice(idx)).sort();
}

const my_string = "banana";

console.log(solution(my_string));
