/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181883
  코딩 기초 트레이닝 - 수열과 구간 쿼리 1
*/

function solution(arr, queries) {
  for (const [s, e] of queries) {
    for (let i = s; i <= e; i++) {
      arr[i]++;
    }
  }

  return arr;
}

const arr = [0, 1, 2, 3, 4];
const queries = [
  [0, 1],
  [1, 2],
  [2, 3],
];

console.log(solution(arr, queries));
