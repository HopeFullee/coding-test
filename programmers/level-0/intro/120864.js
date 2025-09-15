/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120864
  코딩테스트 입문 - A로 B 만들기
*/

function solution(my_string) {
  // 숫자가 아닌 것들만 /D 스플릿
  return my_string.split(/\D+/g).reduce((a, ch) => a + Number(ch), 0);

  // 숫자만 /digit 매칭
  return my_string.match(/\d+/g)?.reduce((a, ch) => a + Number(ch), 0) || 0;
}

const my_string = "aAb1B2cC34oOp";

console.log(solution(my_string));
