/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181884
  코딩 기초 트레이닝 - n보다 커질 때까지 더하기
*/

function solution(numbers, n) {
  let ans = 0;

  for (const num of numbers) {
    if (ans > n) break;
    ans += num;
  }

  return ans;
}

const numbers = [34, 5, 71, 29, 100, 34];
const n = 123;

console.log(solution(numbers, n));
