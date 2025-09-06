/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120844
  코딩테스트 입문 - 배열 회전시키기
*/

function solution(numbers, direction) {
  if (direction === "left") {
    numbers.push(numbers.shift());
  } else {
    numbers.unshift(numbers.pop());
  }

  return numbers;
}

const numbers = [1, 2, 3];
const direction = "right";

console.log(solution(numbers, direction));
