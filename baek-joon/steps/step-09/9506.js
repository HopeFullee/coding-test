// https://www.acmicpc.net/problem/9506

/* 
  망항놈의 백준 채점 오류 16프로 에서 계속 막힘..

  P.S - 출력에서 완전수가 아닐 시 is NOT perfect. < 에서 맨뒷 부분 (.) 쩜이 안붙은게 문제의 원인이였다
        앞으로 출력부분 진짜 (잘) 읽자....................... 
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.pop();

input.forEach((n) => {
  const factors = [];
  let sumOfFactors = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sumOfFactors += i;
      factors.push(i);
    }
  }

  if (sumOfFactors === n) {
    console.log(`${n} = ${factors.join(" + ")}`);
  } else {
    console.log(`${n} is NOT perfect.`);
  }
});
