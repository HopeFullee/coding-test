/*
  https://school.programmers.co.kr/learn/courses/30/lessons/135808
  연습문제 - 과일 장수
*/

function solution(k, m, score) {
  let sum = 0;

  score.sort((a, b) => a - b);

  while (m <= score.length) {
    sum += Math.min(...score.splice(-m)) * m;
  }

  return sum;
}

const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

console.log(solution(k, m, score));
