/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12901
  연습문제 - 2016년
*/

function solution(a, b) {
  const date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

const [a, b] = [5, 24];

console.log(solution(a, b));
