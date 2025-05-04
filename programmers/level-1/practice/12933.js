/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12933
  연습문제 - 정수 내림차순으로 배치하기
*/

function solution(n) {
  const desc = n
    .toString()
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("");

  return Number(desc);
}

const n = 118372;

console.log(solution(n));
