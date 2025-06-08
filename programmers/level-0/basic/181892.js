/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181892
  코딩 기초 트레이닝 - n 번째 원소부터
*/

function solution(num_list, n) {
  return num_list.slice(n - 1);
}

const num_list = [5, 2, 1, 7, 5];
const n = 2;

console.log(solution(num_list, n));
