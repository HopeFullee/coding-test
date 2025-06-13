/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181899
  코딩 기초 트레이닝 - 카운트 다운
*/

function solution(start_num, end_num) {
  const ans = [];

  for (let i = start_num; i >= end_num; i--) {
    ans.push(i);
  }

  return ans;
}

function solution2(start_num, end_num) {
  return [...Array(start_num - end_num + 1)].map((_, idx) => start_num - idx);
}

const start_num = 10;
const end_num = 3;

console.log(solution(start_num, end_num));
console.log(solution2(start_num, end_num));
