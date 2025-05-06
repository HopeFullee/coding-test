/*
  https://school.programmers.co.kr/learn/courses/30/lessons/76501
  월간 코드 챌린지 시즌1 - 내적
*/

function solution(a, b) {
  return a.reduce((acc, n, i) => acc + n * b[i], 0);
}

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

console.log(solution(a, b));
