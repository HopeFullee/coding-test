/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181889
  코딩 기초 트레이닝 - n개 간격의 원소들
*/

function solution(num_list, n) {
  return num_list.filter((_, idx) => idx % n === 0);
}

const num_list = [4, 2, 6, 1, 7, 6];
const n = 2;

console.log(solution(num_list, n));
