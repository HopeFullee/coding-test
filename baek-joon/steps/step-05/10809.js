// https://www.acmicpc.net/problem/10809

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const str = input.split("");
const alphabets = "abcdefghijklmnopqrstuvwxyz";
const arr = Array(alphabets.length).fill(-1);

str.forEach((s, idx) => {
  const i = alphabets.indexOf(s);
  if (arr[i] < 0) arr[i] = idx;
});

console.log(arr.join(" "));
