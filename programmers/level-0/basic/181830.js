/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181830
  코딩 기초 트레이닝 - 정사각형으로 만들기
*/

function solution(arr) {
  const rowSize = arr.length;
  const colSize = arr[0].length;
  const diff = Math.abs(rowSize - colSize);

  if (rowSize < colSize) {
    const newRow = Array(diff).fill(Array(colSize).fill(0));
    arr = arr.concat(newRow);
  } else {
    const newCol = Array(diff).fill(0);
    arr = arr.map((col) => col.concat(newCol));
  }

  return arr;
}

const arr = [
  [1, 2],
  [3, 4],
];

console.log(solution(arr));
