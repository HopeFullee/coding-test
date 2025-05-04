/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12912
  연습문제 - 두 정수 사이의 합
*/

function solution(a, b) {
  [a, b] = [a, b].sort((a, b) => a - b);

  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}

const [a, b] = [5, 3];

console.log(solution(a, b));
