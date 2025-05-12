/*
  https://school.programmers.co.kr/learn/courses/30/lessons/68935
  월간 코드 챌린지 시즌1 - 3진법 뒤집기
*/

function solution(n) {
  const base3 = n.toString(3).split("").reverse().join("");
  const base10 = parseInt(base3, 3);
  return base10;
}

const n = 45;

console.log(solution(n));
