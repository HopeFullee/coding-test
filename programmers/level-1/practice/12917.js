/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12917
  연습문제 - 문자열 내림차순으로 배치하기
*/

function solution(s) {
  return [...s]
    .sort((a, b) => {
      if (a < b) {
        return 1;
      } else {
        return -1;
      }
    })
    .join("");
}

function solution2(s) {
  return s.split("").sort().reverse().join("");
}

const s = "Zbcdefg";

console.log(solution(s));

console.log(solution2(s));
