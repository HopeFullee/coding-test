// https://www.acmicpc.net/problem/19532

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [a, b, c, d, e, f] = input.split(" ").map(Number);

for (let i = -999; i <= 999; i++) {
  for (let j = -999; j <= 999; j++) {
    if (a * i + b * j === c && d * i + e * j === f) {
      console.log(i, j);
      break;
    }
  }
}
