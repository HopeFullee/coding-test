/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181879
  코딩 기초 트레이닝 - 길이에 따른 연산
*/

function solution(num_list) {
  return num_list.reduce((a, n) => (num_list.length > 10 ? a + n : a * n));
}

const num_list = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1];

console.log(solution(num_list));
