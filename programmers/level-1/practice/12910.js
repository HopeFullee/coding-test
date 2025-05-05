/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12910
  연습문제 - 나누어 떨어지는 숫자 배열
*/

function solution(arr, divisor) {
  const filtered = arr.filter((n) => n % divisor === 0);
  return filtered.length ? filtered.sort((a, b) => a - b) : [-1];
}

const arr = [5, 9, 7, 10];
const divisor = 5;

console.log(solution(arr, divisor));
