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

const start_num = 10;
const end_num = 3;

console.log(solution(start_num, end_num));
