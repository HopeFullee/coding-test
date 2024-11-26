// https://www.acmicpc.net/problem/9009

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const testCases = input.map(Number);

/************************************************
 내가 푼 정답) 
 피보나치 수를 불필요하게 tc n개당 하나씩 
 만들고 있어서 메모리 및 시간 복잡도 면에서 실망스럽다.
************************************************/

testCases.forEach((targetNum) => {
  const fibonacciArr = [1, 1];
  let fiboNum = 0;
  let k = 0;

  while (fiboNum < targetNum) {
    k = fibonacciArr.length - 1;
    fiboNum = fibonacciArr[k - 1] + fibonacciArr[k];

    if (fiboNum > targetNum) break;
    else fibonacciArr.push(fiboNum);
  }

  fibonacciArr.sort((a, b) => b - a);

  const { result } = fibonacciArr.reduce(
    (acc, num) => {
      const sum = num + acc.record;

      if (sum <= targetNum) {
        acc.result.unshift(num);
        acc.record += num;
      }

      return acc;
    },
    {
      result: [],
      record: 0,
    }
  );

  console.log(result.join(" "));
});

/************************************************
 강의 예제 정답) 
 최초 1회 피보나치 수를 최대 10억까지 (문제 입력 1 <= n <= 10억)
 만들어두고 tc n개당 계산에 사용함

 sort 를 안하는 대신 시간 복잡도 조금 절약? 가능해보임
************************************************/

const fibo = [1, 1];
while (fibo[fibo.length - 1] < 1e9)
  fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);

testCases.forEach((targetNum) => {
  const result = [];
  let record = 0;
  let k = fibo.length - 1; // 내림차 sort 를 안하는 대신 가장 큰수의 끝 idx 부터

  while (record < targetNum) {
    const sum = record + fibo[k];

    if (sum <= targetNum) {
      record += fibo[k];
      result.unshift(fibo[k]);
    }

    k--;
  }

  console.log(result.join(" "));
});
