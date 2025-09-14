/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181855
  코딩 기초 트레이닝 - 문자열 묶기
*/

function solution(strArr) {
  const hash = new Map();
  strArr.forEach((str) => {
    hash.set(str.length, hash.get(str.length) + 1 || 1);
  });

  return Math.max(...hash.values());
}

const strArr = ["a", "bc", "d", "efg", "hi"];

console.log(solution(strArr));
