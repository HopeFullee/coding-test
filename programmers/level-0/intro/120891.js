/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120891
  코딩테스트 입문 - 369게임
*/

function solution(order) {
  return order.toString().match(/[369]/g)?.length ?? 0;
}

const order = 1;

console.log(solution(order));
