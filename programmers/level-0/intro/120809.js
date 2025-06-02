/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120809
  코딩테스트 입문 - 배열 두 배 만들기
*/

function solution(numbers) {
  return numbers.map((n) => n * 2);
}

const numbers = [1, 2, 3, 4, 5];

console.log(solution(numbers));
