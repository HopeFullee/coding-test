/*
  https://school.programmers.co.kr/learn/courses/30/lessons/131128
  연습문제 - 숫자 짝꿍
*/

function solution(X, Y) {
  let answer = "";

  const map = new Map();

  for (const num of X) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of Y) {
    if (!map.get(num)) continue;

    map.set(num, map.get(num) - 1);
    answer += num;
  }

  // 짝궁 숫자가 없어 공백 ('') 이라면 -1 지정.
  answer = [...answer].sort((a, b) => Number(b) - Number(a)).join("") || "-1";

  // 짝궁 숫자가 '0' 만으로 반복된다면 단 1개의 '0' 으로 리턴.
  return Number(answer) === 0 ? "0" : answer;
}

const X = "100";
const Y = "203045";

console.log(solution(X, Y));
