/*
  https://school.programmers.co.kr/learn/courses/30/lessons/161989
  연습문제 - 덧칠하기
*/

function solution(n, m, section) {
  let painted = 0;
  let count = 0;

  section.forEach((sec) => {
    if (painted < sec) {
      painted = sec + m - 1;
      count++;
    }
  });

  return count;
}

const n = 8;
const m = 4;
const section = [2, 3, 6];

console.log(solution(n, m, section));
