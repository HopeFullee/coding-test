/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120892
  코딩테스트 입문 - 암호 해독
*/

function solution(cipher, code) {
  return [...cipher].reduce(
    (a, ch, idx) => ((idx + 1) % code ? a : a + ch),
    ""
  );
}

const cipher = "dfjardstddetckdaccccdegk";
const code = 4;

console.log(solution(cipher, code));
