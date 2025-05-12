/*
  https://school.programmers.co.kr/learn/courses/30/lessons/147355
  연습문제 - 크기가 작은 부분 문자열
*/

function solution(t, p) {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const slice = t.slice(i, i + p.length);
    if (Number(slice) <= Number(p)) count++;
  }

  return count;
}

const t = "3141592";
const p = "271";

console.log(solution(t, p));
