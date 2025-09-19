/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181922
  코딩 기초 트레이닝 - 수열과 구간 쿼리 4
*/

function solution(arr, queries) {
  for (const [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) arr[i]++;
    }
  }

  return arr;
}

const arr = [1, 2, 3];
const queries = [[0, 2, 2]];

console.log(solution(arr, queries));
