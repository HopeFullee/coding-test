/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120843
  코딩테스트 입문 - 공 던지기
*/

function solution(numbers, k) {
  let record = 0;

  for (let i = 0; i < k - 1; i++) {
    record += 2;

    if (record > numbers.length - 1) {
      record -= numbers.length;
    }
  }

  return numbers[record];
}

const numbers = [1, 2, 3, 4];
const k = 2;

console.log(solution(numbers, k));
