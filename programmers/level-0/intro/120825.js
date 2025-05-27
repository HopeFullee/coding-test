/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120825
  코딩테스트 입문 - 문자 반복 출력하기
*/

function solution(my_string, n) {
  return [...my_string].reduce((a, ch) => a + ch.repeat(n), "");
}

const my_string = "hello";
const n = 3;

console.log(solution(my_string, n));
