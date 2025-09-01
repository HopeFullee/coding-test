/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181920
  코딩 기초 트레이닝 - 카운트 업
*/

function solution(start_num, end_num) {
  return Array.from({ length: end_num - start_num + 1 }, () => start_num++);
}

const start_num = 3;
const end_num = 10;

console.log(solution(start_num, end_num));
