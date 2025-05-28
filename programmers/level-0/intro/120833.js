/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120833
  코딩테스트 입문 - 배열 자르기
*/

// slice는 (시작 index 부터, 짜를 index의 미만 (-1) 까지)
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// splice는 (시작 index 부터, 시작 index를 포함한 앞으로 짜를 개수 까지)
function solution2(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}

const numbers = [1, 2, 3, 4, 5];
const num1 = 1;
const num2 = 3;

console.log(solution(numbers, num1, num2));
console.log(solution2(numbers, num1, num2));
