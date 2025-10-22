/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120884
  코딩테스트 입문 - 치킨 쿠폰
*/

function solution(chicken) {
  let service = 0;

  while (parseInt(chicken / 10)) {
    chicken = chicken / 10;
    service += chicken;
  }

  return Math.round(service);
}

const chicken = 1081;

console.log(solution(chicken));
