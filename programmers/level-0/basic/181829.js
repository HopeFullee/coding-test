/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181829
  코딩 기초 트레이닝 - 이차원 배열 대각선 순회하기
*/

function solution(board, k) {
  let sum = 0;

  board.forEach((nums, idx) => {
    nums.forEach((n, jdx) => {
      if (idx + jdx <= k) sum += n;
    });
  });

  return sum;
}

const board = [
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];
const k = 2;

console.log(solution(board, k));
