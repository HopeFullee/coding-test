/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12932
  연습문제 - 자연수 뒤집어 배열로 만들기
*/

function solution(n) {
  const reversedNumArr = n.toString().split("").reverse().map(Number);
  return reversedNumArr;
}

const n = 12345;

console.log(solution(n));
