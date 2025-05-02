/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12937
  12937 - 짝수와 홀수
*/

function solution(num) {
  if (num % 2 === 0) return "Even";
  else return "Odd";
}

const num = 3;

console.log(solution(num));
