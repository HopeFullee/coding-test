/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120814
  코딩테스트 입문 - 피자 나눠 먹기 (1)
*/

function solution(n) {
  let answer = 0;

  for (let i = 0; i < n; i += 7) answer++;

  return answer;
}

function solution2(n) {
  return Math.ceil(n / 7);
}

const n = 15;

console.log(solution(n));
console.log(solution2(n));
