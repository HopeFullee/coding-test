/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181930
  코딩 기초 트레이닝 - 주사위 게임 2
*/

function solution(a, b, c) {
  let sumArr = [];
  const dupe = new Set([a, b, c]);

  for (let i = 1; i <= 4 - dupe.size; i++) {
    sumArr.push(a ** i + b ** i + c ** i);
  }

  return sumArr.reduce((a, sum) => a * sum);
}

const a = 4;
const b = 4;
const c = 4;

console.log(solution(a, b, c));
