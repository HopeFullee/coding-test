/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181921
  코딩 기초 트레이닝 - 배열 만들기 2
*/

function solution(l, r) {
  const ans = [];

  if (l % 5) {
    l += 5 - (l % 5);
  }

  for (let i = l; i <= r; i += 5) {
    const match = i.toString().match(/[1-4|6-9]/g);
    if (!match) ans.push(i);
  }

  return ans.length ? ans : [-1];
}

const l = 10;
const r = 20;

console.log(solution(l, r));
