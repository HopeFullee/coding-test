/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120815
  코딩 기초 트레이닝 - 피자 나눠 먹기 (2)
*/

function solution(n) {
  const slice = 6;
  let i = 1;

  while ((slice * i) % n) {
    i++;
  }

  return i;
}

const n = 10;

console.log(solution(n));
