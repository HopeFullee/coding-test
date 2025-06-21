/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181835
  코딩 기초 트레이닝 - 조건에 맞게 수열 변환하기 3
*/

function solution(arr, k) {
  const isEven = k % 2 === 0;
  return arr.map((n) => (isEven ? n + k : n * k));
}

const arr = [1, 2, 3, 100, 99, 98];
const k = 3;

console.log(solution(arr, k));
