/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181894
  코딩 기초 트레이닝 - 2의 영역
*/

function solution(arr) {
  const head = arr.indexOf(2);
  const tail = arr.lastIndexOf(2);
  const range = arr.slice(head, tail + 1);

  return range.length ? range : [-1];
}

const arr = [1, 1, 1];

console.log(solution(arr));
