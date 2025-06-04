/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120851
  코딩테스트 입문 - 숨어있는 숫자의 덧셈 (1)
*/

function solution(my_string) {
  return my_string.match(/\d/g).reduce((a, ch) => a + Number(ch), 0);
}

const my_string = "aAb1B2cC34oOp";

console.log(solution(my_string));
