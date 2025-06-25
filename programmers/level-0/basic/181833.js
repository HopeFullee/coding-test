/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181833
  코딩 기초 트레이닝 - 특별한 이차원 배열 1
*/

function solution(n) {
  const arr = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    arr[i][i]++;
  }

  return arr;
}

const n = 3;

console.log(solution(n));
