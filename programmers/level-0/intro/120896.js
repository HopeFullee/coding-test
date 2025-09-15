/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120896
  코딩테스트 입문 - 한 번만 등장한 문자
*/

function solution(s) {
  return s
    .match(/(.)(?<!\1.+)(?!.*\1)/g)
    .sort()
    .join("");
}

const s = "abdc";

console.log(solution(s));
