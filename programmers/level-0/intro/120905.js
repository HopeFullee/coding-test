/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120905
  코딩테스트 입문 - n의 배수 고르기
*/

function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

const n = 3;
const numlist = [4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(solution(n, numlist));
