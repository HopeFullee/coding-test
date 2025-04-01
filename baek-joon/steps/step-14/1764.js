// https://www.acmicpc.net/problem/1764

/*
  ---------- 소망아 제발 문제좀 단디 읽자 ----------
  또 출력 부분에서 '사전순으로 출력한다' 안봐서 '틀렸습니다' 박혔잖아..
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = [
  "3 4",
  "ohhenrie",
  "charlie",
  "baesangwook",
  "obama",
  "baesangwook",
  "ohhenrie",
  "clinton",
];

const [n, m] = input.shift().split(" ").map(Number);

const nSet = new Set(input.splice(0, n));

let count = 0;
const arr = [];

input.forEach((m) => {
  if (nSet.has(m)) {
    count++;
    arr.push(m);
  }
});

console.log(count);
console.log(arr.sort().join("\n"));
