/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181924
  코딩 기초 트레이닝 - 수열과 구간 쿼리 3
*/

function solution(arr, queries) {
  for (const [i, j] of queries) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const arr = [0, 1, 2, 3, 4];
const queries = [
  [0, 3],
  [1, 2],
  [1, 4],
];

console.log(solution(arr, queries));
