/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181935
  코딩 기초 트레이닝 - 홀짝에 따라 다른 값 반환하기
*/

function solution(n) {
  let ans = 0;
  let i = n % 2 ? 1 : 2;

  for (i; i <= n; i += 2) {
    if (n % 2) ans += i;
    else ans += i ** 2;
  }

  return ans;
}

const n = 10;

console.log(solution(n));
