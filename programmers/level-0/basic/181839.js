/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181839
  코딩 기초 트레이닝 - 주사위 게임 1
*/

function solution(a, b) {
  if (a % 2 && b % 2) {
    return a ** 2 + b ** 2;
  } else if (a % 2 || b % 2) {
    return 2 * (a + b);
  } else {
    return Math.abs(a - b);
  }
}

const a = 3;
const b = 5;

console.log(solution(a, b));
