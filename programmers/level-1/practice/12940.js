/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12940
  연습문제 - 최대공약수와 최소공배수
*/

const getGCD = (a, b) => {
  return b ? getGCD(b, a % b) : a;
};

const getLCM = (a, b, c) => {
  return (a * b) / c;
};

function solution(n, m) {
  const gcd = getGCD(n, m);
  const lcm = getLCM(n, m, gcd);

  return [gcd, lcm];
}

const n = 10;
const m = 12;

console.log(solution(n, m));
