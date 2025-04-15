/* 
  www.acmicpc.net/problem/26069
  단계 3 붙임성 좋은 총총이
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = [
  "12",
  "bnb2011 chansol",
  "chansol chogahui05",
  "chogahui05 jthis",
  "jthis ChongChong",
  "jyheo98 jthis",
  "jyheo98 lms0806",
  "lms0806 pichulia",
  "pichulia pjshwa",
  "pjshwa r4pidstart",
  "r4pidstart swoon",
  "swoon tony9402",
  "tony9402 bnb2011",
];

const set = new Set();

for (let i = 1; i < input.length; i++) {
  const [A, B] = input[i].split(" ");

  if (A === "ChongChong" || B === "ChongChong") {
    set.add(A);
    set.add(B);
  } else if (set.has(A) || set.has(B)) {
    set.add(A);
    set.add(B);
  }
}

console.log(set.size);
