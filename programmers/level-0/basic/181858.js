/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181858
  코딩 기초 트레이닝 - 무작위로 K개의 수 뽑기
*/

function solution(arr, k) {
  const set = new Set(arr);
  return [...set, ...Array.from({ length: k - set.size }).fill(-1)].slice(0, k);
}

const arr = [0, 1, 1, 1, 1];
const k = 4;

console.log(solution(arr, k));
