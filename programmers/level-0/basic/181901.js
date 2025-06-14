/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181901
  코딩 기초 트레이닝 - 배열 만들기 1
*/

function solution(n, k) {
  const ans = [];

  for (let i = k; i <= n; i += k) {
    if (i % k === 0) ans.push(i);
  }

  return ans;
}

const n = 10;
const k = 3;

console.log(solution(n, k));
