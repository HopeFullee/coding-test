/*
  https://school.programmers.co.kr/learn/courses/30/lessons/77484
  2021 Dev-Matching: 웹 백엔드 개발자(상반기) - 로또의 최고 순위와 최저 순위
*/

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let match = 0;
  let zeros = 0;

  for (const num of lottos) {
    if (win_nums.includes(num)) match++;
    else if (num === 0) zeros++;
  }

  return [rank[match + zeros], rank[match]];
}

const lottos = [1, 2, 3, 4, 5, 6];
const win_nums = [7, 8, 9, 10, 11, 12];

console.log(solution(lottos, win_nums));
