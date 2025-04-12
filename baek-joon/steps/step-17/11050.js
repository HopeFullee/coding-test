/* 
  www.acmicpc.net/problem/11050
  이항 계수 1 - 이항 계수는 N개의 물건 중 K개를 순서 없이 고르는 경우의 수와 같습니다. 이것도 조합론에서 자주 만나게 될 것입니다.
*/

/*
  수포자인 본인은 몇개의 유튜브 수학 강의를 보았지만 이해 할 수 없는 빡대가리라
  똑똑이 천재 재영님이 알려주신 이항 계수 공식으로 해결 할 수 있었다.

  n! / r!(n−r)! 
  factorial(n) / factorial(k) * factorial(n - k)

  고마워요 재영님!!

  P.S - factorial 함수를 memoization 으로 개선해서 시간 복잡도를 줄일 수 있다 !! 
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

const input = [5, 2];

const [n, k] = input;

const factorial = (n) => {
  return [...Array(n)].reduce((acc, _, idx) => {
    return acc * (idx + 1);
  }, 1);
};

const result = factorial(n) / (factorial(k) * factorial(n - k));

console.log(result);
