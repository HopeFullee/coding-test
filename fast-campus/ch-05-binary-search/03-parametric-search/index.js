/*
    - 파라메트릭 서치
        - 최적화 문제를 결정 문제("예" 혹은 "아니오")로 바꾸어 해결하는 기업이다.
            - 예시) 특정한 조건을 만족하는 가장 알맞은 값을 빠르게 찾는 최적화 문제
        - 일반적으로 코딩 테스트에서 파라메트릭 서치 문제는 이진 탐색을 이용하여 해결할 수 있다.
*/

/* 
    아래 예시 문제를 하나 풀어boza
    https://www.acmicpc.net/problem/2512
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);
const m = Number(input[2]);

let result = 0;
let start = 1;
let end = arr.reduce((a, n) => Math.max(a, n));

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let total = 0;

  arr.forEach((v) => (total += Math.min(v, mid)));

  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
