/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120817
  코딩테스트 입문 - 배열의 평균값
*/

function solution(numbers) {
  return (numbers[0] + numbers[numbers.length - 1]) / 2;
}

function solution2(numbers) {
  return numbers.reduce((a, n) => a + n, 0) / numbers.length;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(solution(numbers));
console.log(solution2(numbers));
