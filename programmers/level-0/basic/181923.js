/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181923
  코딩 기초 트레이닝 - 수열과 구간 쿼리 2
*/

function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    const range = arr.slice(s, e + 1);
    const filter = range.filter((v) => k < v);

    if (!filter.length) return -1;

    return Math.min(...filter);
  });
}

const arr = [0, 1, 2, 4, 3];
const queries = [
  [0, 4, 2],
  [0, 3, 2],
  [0, 2, 2],
];

console.log(solution(arr, queries));
