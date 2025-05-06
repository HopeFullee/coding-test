/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12922
  연습문제 - 수박수박수박수박수박수?
*/

function solution(n) {
  const str = "수박".repeat(parseInt(n / 2));

  if (n % 2 === 0) return str;
  else return str + "수";
}

const n = 3;

console.log(solution(n));
