/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120878
  코딩테스트 입문 - 유한소수 판별하기
*/

function solution(a, b) {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

  const g = gcd(Math.abs(a), Math.abs(b));

  let n = b / g;

  if (n < 0) {
    n *= -1;
  }

  const factors = [];
  let divisor = 2;

  while (divisor * divisor <= n) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  if (n > 1) {
    factors.push(n);
  }

  const isFinite = factors.every((v) => v === 2 || v === 5);

  return isFinite ? 1 : 2;
}

function solution2(a, b) {
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  if (a % b === 0) b = 1;
  return b === 1 ? 1 : 2;
}

const a = 18;
const b = 24;

console.log(solution(a, b));
console.log(solution2(a, b));
