// https://www.acmicpc.net/problem/10988

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const strArr = input.split("");

const mid = parseInt(strArr.length / 2);

const isPalindrome = [...Array(mid)].every((_, idx) => {
  const leftElem = strArr[idx];
  const rightElem = strArr[strArr.length - (idx + 1)];

  if (leftElem === rightElem) return true;
  else return false;
});

console.log(isPalindrome ? 1 : 0);
