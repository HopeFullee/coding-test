/* 
  www.acmicpc.net/problem/18258
  큐의 개념을 익히고 실습하는 문제
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = [
  "15",
  "push 1",
  "push 2",
  "front",
  "back",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "front",
];

input.shift();

const queue = [];
let result = "";

const commands = {
  push: (x) => {
    queue.push(x);
  },
  pop: () => {
    if (!queue.length) result += `-1\n`;
    else result += `${queue.shift()}\n`;
  },
  size: () => {
    result += `${queue.length}\n`;
  },
  empty: () => {
    if (!queue.length) result += `1\n`;
    else result += `0\n`;
  },
  front: () => {
    if (!queue.length) result += `-1\n`;
    else result += `${queue[0]}\n`;
  },
  back: () => {
    if (!queue.length) result += `-1\n`;
    else result += `${queue[queue.length - 1]}\n`;
  },
};

input.forEach((tc) => {
  const [cmd, x] = tc.split(" ");

  if (x !== undefined) {
    commands[cmd](Number(x));
  } else {
    commands[cmd]();
  }
});

console.log(result);
