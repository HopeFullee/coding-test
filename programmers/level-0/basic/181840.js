/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181840
  코딩 기초 트레이닝 - 정수 찾기
*/

function solution(num_list, n) {
  return Number(num_list.includes(n));
}

const num_list = [1, 2, 3, 4, 5];
const n = 3;

console.log(solution(num_list, n));
