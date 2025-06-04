/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120850
  코딩테스트 입문 - 문자열 정렬하기 (1)
*/

function solution(my_string) {
  return [...my_string]
    .filter((ch) => Number.isInteger(+ch))
    .map(Number)
    .sort((a, b) => a - b);
}

const my_string = "hi12392";

console.log(solution(my_string));
