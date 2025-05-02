/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12928
  12928 - 약수의 합
*/

function solution(n) {
  const factorSum = [...Array(n)].reduce((acc, _, idx) => {
    if (n % (idx + 1) === 0) acc += idx + 1;
    return acc;
  }, 0);

  return factorSum;
}

const n = 12;

console.log(solution(n));
