/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181930
  코딩 기초 트레이닝 - 등차수열의 특정한 항만 더하기
*/

function solution(a, d, included) {
  return included.reduce((acc, bool, idx) => {
    if (bool) acc += d * idx + a;
    return acc;
  }, 0);
}

const a = 3;
const d = 4;
const included = [true, false, false, true, true];

console.log(solution(a, d, included));
