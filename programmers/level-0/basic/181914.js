/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181914
  코딩 기초 트레이닝 - 9로 나눈 나머지
*/

function solution(number) {
  const sum = [...number].reduce((a, ch) => a + Number(ch), 0);
  return sum % 9;
}

function solution2(number) {
  return BigInt(number) % 9n;
}

const number = "78720646226947352489";

console.log(solution(number));
console.log(solution2(number));
