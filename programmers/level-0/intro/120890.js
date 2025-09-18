/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120890
  코딩테스트 입문 - 가까운 수
*/

function solution(array, n) {
  const set = [...new Set(array)].sort((a, b) => a - b);

  let idx = 0;

  while (set[idx] < n) {
    idx++;
  }

  const prev = set[idx - 1];
  const next = set[idx];

  if (!next) return prev;

  if (n - prev <= next - n) return prev;

  return next;
}

const array = [3, 10, 28];
const n = 20;

console.log(solution(array, n));
