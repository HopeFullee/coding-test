/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181903
  코딩 기초 트레이닝 - qr code
*/

function solution(q, r, code) {
  return [...code].filter((ch, idx) => idx % q === r).join("");
}

const q = 1;
const r = 0;
const code = "programmers";

console.log(solution(q, r, code));
