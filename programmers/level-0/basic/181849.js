/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181849
  코딩 기초 트레이닝 - 문자열 정수의 합
*/

function solution(num_str) {
  return [...num_str].reduce((a, ch) => a + Number(ch), 0);
}

const num_str = "123456789";

console.log(solution(num_str));
