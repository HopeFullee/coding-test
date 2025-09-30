/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120852
  코딩테스트 입문 - 소인수분해
*/

const getPrimeFactors = (n) => {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
};

function solution(n) {
  return [...new Set(getPrimeFactors(n))];
}

const n = 12;

console.log(solution(n));
