//www.acmicpc.net/problem/13241

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [a, b] = input.split(" ").map(BigInt).sort();

for (let i = 1n; i <= a; i++) {
  if ((i * b) % a === BigInt(0)) {
    console.log((i * b).toString());
    break;
  }
}
