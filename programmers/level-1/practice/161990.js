/*
  https://school.programmers.co.kr/learn/courses/30/lessons/161990
  연습문제 - 바탕화면 정리
*/

function solution(wallpaper) {
  const rowRecord = [];
  const colRecord = [];

  wallpaper.forEach((row, rowIdx) => {
    [...row].forEach((col, colIdx) => {
      if (col === "#") {
        rowRecord.push(rowIdx);
        colRecord.push(colIdx);
      }
    });
  });

  const start = [Math.min(...rowRecord), Math.min(...colRecord)];
  const end = [Math.max(...rowRecord) + 1, Math.max(...colRecord) + 1];

  return [...start, ...end];
}

const wallpaper = [".#...", "..#..", "...#."];

console.log(solution(wallpaper));
