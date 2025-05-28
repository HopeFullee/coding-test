/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120847
  코딩테스트 입문 - 최댓값 만들기(1)
*/

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

const numbers = [0, 31, 24, 10, 1, 9];

console.log(solution(numbers));
