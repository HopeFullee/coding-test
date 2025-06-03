/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181936
  코딩 기초 트레이닝 - 공배수
*/

function solution(number, n, m) {
  return Number(!(number % n || number % m));
}

const number = 60;
const n = 2;
const m = 3;

console.log(solution(number, n, m));
