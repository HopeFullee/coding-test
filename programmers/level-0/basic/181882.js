/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181882
  코딩 기초 트레이닝 - 조건에 맞게 수열 변환하기 1
*/

function solution(arr) {
  return arr.map((n) => {
    if (n > 49 && n % 2 === 0) return n / 2;
    if (n < 50 && n % 2) return n * 2;
    return n;
  });
}

const arr = [1, 2, 3, 100, 99, 98];

console.log(solution(arr));
