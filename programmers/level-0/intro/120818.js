/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120818
  코딩테스트 입문 - 옷가게 할인 받기
*/

function solution(price) {
  let discount = 0;

  if (price >= 500000) {
    discount = price * 0.2;
  } else if (price >= 300000) {
    discount = price * 0.1;
  } else if (price >= 100000) {
    discount = price * 0.05;
  }

  return parseInt(price - discount);
}

const price = 100010;

console.log(solution(price));
