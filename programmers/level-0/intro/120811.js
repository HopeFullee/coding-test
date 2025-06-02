/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120811
  코딩테스트 입문 - 중앙값 구하기
*/

function solution(array) {
  array.sort((a, b) => a - b);
  return array[parseInt(array.length / 2)];
}

const array = [1, 2, 7, 10, 11];

console.log(solution(array));
