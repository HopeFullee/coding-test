/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181926
  코딩 기초 트레이닝 - 수 조작하기 1
*/

function solution(n, control) {
  const dict = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  return [...control].reduce((a, ch) => a + dict[ch], n);
}

const n = 0;
const control = "wsdawsdassw";

console.log(solution(n, control));
