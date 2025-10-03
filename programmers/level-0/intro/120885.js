/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120885
  코딩테스트 입문 - 이진수 더하기
*/

function solution(bin1, bin2) {
  const sum = parseInt(bin1, 2) + parseInt(bin2, 2);

  return sum.toString(2);
}

const bin1 = "10";
const bin2 = "11";

console.log(solution(bin1, bin2));
