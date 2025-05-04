/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12931
  연습문제 - 자릿수 더하기
*/

function solution(n) {
  const numArr = n.toString().split("").map(Number);
  const sum = numArr.reduce((acc, num) => acc + num);
  return sum;
}

const n = 987;

console.log(solution(n));
