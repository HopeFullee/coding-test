/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120897
  코딩테스트 입문 - 약수 구하기
*/

function solution(n) {
  let ans = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) ans.push(i);
  }

  return ans;
}

const n = 25;

console.log(solution(n));
