/* 
  www.acmicpc.net/problem/28278
  스택의 개념을 익히고 실습하는 문제
*/

/* 
  - 오늘은 교훈 -
  N개로 들어오는 커맨드 마다 각개별로 console.log()를 호출해서 '시간 초과'로 한참 고생했다.
  결론 적으로 최대 (1 ≤ N ≤ 1,000,000) 1백만번 까지의 커맨드를 입력 받을 수 있어서 매 순간
  console.log()를 실행하는 대신 log에 찍혔서야했을 값을 result 배열에 한번에 모아서 
  최후의 log()에 몰아주어 해결할 수 있었다.

  2시간 삽질 이후 참고한 답안지: https://velog.io/@yujunsun0/JS-%EB%B0%B1%EC%A4%80-28278%EB%B2%88-%EC%8A%A4%ED%83%9D
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const input = ["9", "4", "1 3", "1 5", "3", "2", "5", "2", "2", "5"];

input.shift();

const stack = [];
const result = [];

const commands = {
  1: (x) => stack.push(x),
  2: () => {
    if (stack.length !== 0) result.push(stack.pop());
    else result.push(-1);
  },
  3: () => result.push(stack.length),
  4: () => {
    if (stack.length !== 0) result.push(0);
    else result.push(1);
  },
  5: () => {
    if (stack.length !== 0) result.push(stack[stack.length - 1]);
    else result.push(-1);
  },
};

input.forEach((n) => {
  const [cmd, x] = n.split(" ").map(Number);

  if (x !== undefined) {
    commands[cmd](x);
  } else {
    commands[cmd]();
  }
});

console.log(result.join("\n"));
