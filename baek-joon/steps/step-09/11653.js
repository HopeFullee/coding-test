// https://www.acmicpc.net/problem/11653

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input);

const result = [];
let factor = 2;

while (n > 1) {
  if (n % factor === 0) {
    result.push(factor);
    n = n / factor;
  } else {
    factor++;
  }
}

if (result.length > 0) {
  console.log(result.join("\n"));
}
