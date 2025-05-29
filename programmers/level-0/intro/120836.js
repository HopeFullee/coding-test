/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120836
  코딩테스트 입문 - 순서쌍의 개수
*/

function solution(n) {
  let count = 0;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) count++;
    else if (n % i === 0) count += 2;
  }

  return count;
}

const n = 100;

console.log(solution(n));
