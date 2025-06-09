/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120895
  코딩테스트 입문 - 인덱스 바꾸기
*/

function solution(my_string, num1, num2) {
  const arr = [...my_string];

  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];

  return arr.join("");
}

const my_string = "I love you";
const num1 = 3;
const num2 = 6;

console.log(solution(my_string, num1, num2));
