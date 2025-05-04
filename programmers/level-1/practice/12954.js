/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12954
  연습문제 - x만큼 간격이 있는 n개의 숫자
*/

function solution(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

const x = 2;
const n = 5;

console.log(solution(x, n));
