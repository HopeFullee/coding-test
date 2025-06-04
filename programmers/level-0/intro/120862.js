/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120862
  코딩테스트 입문 - 최댓값 만들기 (2)
*/

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  const a = numbers[0] * numbers[1];
  const b = numbers[numbers.length - 1] * numbers[numbers.length - 2];

  return Math.max(a, b);
}

const numbers = [0, -31, 24, 10, 1, 9];

console.log(solution(numbers));
