/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120893
  코딩테스트 입문 - 대문자와 소문자
*/

function solution(my_string) {
  return [...my_string].reduce((acc, ch) => {
    return ch === ch.toUpperCase()
      ? acc + ch.toLowerCase()
      : acc + ch.toUpperCase();
  }, "");
}

const my_string = "abCdEfghIJ";
console.log(solution(my_string));
