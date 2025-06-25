/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181831
  코딩 기초 트레이닝 - 특별한 이차원 배열 2
*/

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== arr[j][i]) return 0;
    }
  }

  return 1;
}

const arr = [
  [5, 192, 33],
  [192, 72, 95],
  [33, 95, 999],
];

console.log(solution(arr));
