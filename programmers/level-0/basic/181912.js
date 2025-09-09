/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181912
  코딩 기초 트레이닝 - 배열 만들기 5
*/

function solution(intStrs, k, s, l) {
  const arr = [];

  intStrs.forEach((str) => {
    const sliced = Number(str.slice(s, s + l));
    if (k < sliced) arr.push(sliced);
  });

  return arr;
}

const intStrs = ["0123456789", "9876543210", "9999999999999"];
const k = 50000;
const s = 5;
const l = 5;

console.log(solution(intStrs, k, s, l));
