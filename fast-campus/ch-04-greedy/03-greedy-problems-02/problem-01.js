// https://www.acmicpc.net/problem/2839

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input);

let cnt = 0;

// 자작 답안
if (n % 5 === 0) {
  cnt = n / 5;
} else {
  while (n % 5 !== 0 && n > 0) {
    n -= 3;
    cnt++;
  }

  if (n >= 0) cnt += n / 5;
  else cnt = -1;
}

console.log(cnt);

// 강의 답안
let flag = false;

while (n >= 0) {
  if (n == 0 || n % 5 == 0) {
    cnt += n / 5;
    console.log(cnt);
    flag = true;
    break;
  }

  n -= 3;
  cnt += 1;
}

if (!flag) console.log(-1);
