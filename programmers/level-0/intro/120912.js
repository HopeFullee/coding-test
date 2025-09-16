/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120912
  코딩테스트 입문 - 7의 개수
*/

function solution(array) {
  return array.join("").match(/7/g)?.length || 0;
}

const array = [10, 29];

console.log(solution(array));
