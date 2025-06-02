/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120813
  코딩테스트 입문 - 짝수는 싫어요
*/

function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }

  return answer;
}

const n = 10;

console.log(solution(n));
