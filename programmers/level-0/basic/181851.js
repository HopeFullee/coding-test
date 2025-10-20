/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181851
  코딩 기초 트레이닝 - 전국 대회 선발 고사
*/

function solution(rank, attendance) {
  const selection = [];

  for (let score = 1; score <= rank.length; score++) {
    const idx = rank.indexOf(score);
    if (attendance[idx]) selection.push(idx);
    if (2 < selection.length) break;
  }

  const [a, b, c] = selection;

  return 10000 * a + 100 * b + c;
}

const rank = [3, 7, 2, 5, 4, 6, 1];
const attendance = [false, true, true, true, true, false, false];

console.log(solution(rank, attendance));
