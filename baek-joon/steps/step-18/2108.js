/* 
  www.acmicpc.net/problem/2108
  단계 1 통계학 - 다양한 통곗값을 구하는 문제
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["3", "0", "0", "-1"];

const n = Number(input.shift());

const nums = input.map(Number).sort((a, b) => a - b);

const getAverage = () => {
  const avg = nums.reduce((a, n) => a + n, 0) / n;
  return Math.round(avg).toString();
};

const getMid = () => {
  const average = nums[(n - 1) / 2];
  return average;
};

const getMode = () => {
  const count = new Array(8001).fill(0);

  nums.forEach((n) => {
    if (n >= 0) count[n]++;
    else count[count.length + n]++;
  });

  const maxCount = Math.max(...count);
  let mode = 0;
  let cnt = 0;

  for (let i = -4000; i < 4001; i++) {
    const countElem = i >= 0 ? count[i] : count[count.length + i];

    if (maxCount === countElem) {
      mode = i;
      cnt++;
      if (cnt === 2) break;
    }
  }

  return mode;
};

const getRange = () => {
  const max = nums[n - 1];
  const min = nums[0];
  return max - min;
};

console.log(getAverage());
console.log(getMid());
console.log(getMode());
console.log(getRange());
