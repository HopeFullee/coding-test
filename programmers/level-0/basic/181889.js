/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181889
  코딩 기초 트레이닝 - n 번째 원소까지
*/

function solution(num_list, n) {
  return num_list.slice(0, n);
}

const num_list = [5, 2, 1, 7, 5];
const n = 3;

console.log(solution(num_list, n));
