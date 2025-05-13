/*
  https://school.programmers.co.kr/learn/courses/30/lessons/86491
  완전탐색 - 최소직사각형
*/

function solution(sizes) {
  const max = { x: 0, y: 0 };

  for (xy of sizes) {
    const [w, h] = [Math.max(...xy), Math.min(...xy)];
    max.x = Math.max(max.x, w);
    max.y = Math.max(max.y, h);
  }

  return max.x * max.y;
}

const sizes = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
];

console.log(solution(sizes));
