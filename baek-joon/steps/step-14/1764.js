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

/*********************************** 처음으로 푼 방법 ***********************************/

// const [n, m] = input.shift().split(" ").map(Number);

// const nSet = new Set(input.splice(0, n));

// const arr = [];

// input.forEach((m) => {
//   if (nSet.has(m)) {
//     arr.push(m);
//   }
// });

// console.log(arr.length);
// console.log(arr.sort().join("\n"));

/*********************************** 멋쟁이 코딩 방법 ***********************************/

const [n, m] = input.shift().split(" ").map(Number);

const nSet = new Set(input.splice(0, n));

const intersect = input.filter((m) => nSet.has(m)).sort();

console.log(intersect.length);
console.log(intersect.join("\n"));
