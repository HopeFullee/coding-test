/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181853
  코딩 기초 트레이닝 - 뒤에서 5등까지
*/

function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}

const num_list = [12, 4, 15, 46, 38, 1, 14];

console.log(solution(num_list));
