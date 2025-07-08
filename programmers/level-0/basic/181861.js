/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181861
  코딩 기초 트레이닝 - 배열의 원소만큼 추가하기
*/

function solution(arr) {
  return arr.map((n) => new Array(n).fill(n)).flat();
}

const arr = [5, 1, 4];

console.log(solution(arr));
