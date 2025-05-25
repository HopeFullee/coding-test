/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120830
  코딩테스트 입문 - 양꼬치
*/

function solution(n, k) {
  const discount = parseInt(n / 10) * 2000;
  const nCost = n * 12000;
  const kCost = k * 2000;

  return nCost + kCost - discount;
}
