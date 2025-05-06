/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12935
  연습문제 - 제일 작은 수 제거하기
*/

function solution(arr) {
  const set = new Set(arr);
  set.delete(Math.min(...arr));

  return set.size ? [...set] : [-1];
}

const arr = [4, 3, 2, 1];

console.log(solution(arr));
