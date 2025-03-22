// https://www.acmicpc.net/problem/2839

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input);

let count = 0;

while (n > 0) {
  if (n % 5 === 0) {
    count += n / 5;
    break;
  } else {
    n -= 3;
    if (n < 0) count = -1;
    else count++;
  }
}

console.log(count);
