/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12944
  연습문제 - 평균 구하기
*/

// arr에 int를 다 더하고 arr의 길이만큼 나누면 평균값이 나온다.

function solution(arr) {
  const sum = arr.reduce((acc, num) => acc + num);
  const avg = sum / arr.length;
  return avg;
}

const arr = [1, 2, 3, 4];

console.log(solution(arr));
