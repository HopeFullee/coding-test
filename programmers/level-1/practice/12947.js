/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12947
  연습문제 - 하샤드 수
*/

function solution(x) {
  const sum = [...x.toString()].reduce((a, n) => a + Number(n), 0);
  return x % sum === 0;
}

const x = 11;

console.log(solution(x));
