/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181852
  코딩 기초 트레이닝 - 뒤에서 5등 위로
*/

function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(5);
}

const num_list = [12, 4, 15, 46, 38, 1, 14, 56, 32, 10];

console.log(solution(num_list));
