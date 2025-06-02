/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120583
  코딩테스트 입문 - 중복된 숫자 개수
*/

function solution(array, n) {
  return array.filter((num) => num === n).length;
}

const array = [1, 1, 2, 3, 4, 5];
const n = 1;

console.log(solution(array, n));
