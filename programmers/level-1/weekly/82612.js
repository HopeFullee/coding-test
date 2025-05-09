/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12903
  위클리 챌린지 - 부족한 금액 계산하기
*/

function solution(price, money, count) {
  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  return sum > money ? sum - money : 0;
}

const price = 3;
const money = 20;
const count = 4;

console.log(solution(price, money, count));
