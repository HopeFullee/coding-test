/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120817
  코딩테스트 입문 - 아이스 아메리카노
*/

function solution(money) {
  const quant = parseInt(money / 5500);
  const change = money % 5500;
  return [quant, change];
}

const money = 5500;

console.log(solution(money));
