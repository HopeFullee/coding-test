// https://www.acmicpc.net/problem/2501

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [n, k] = input.split(" ").map(Number);

const factors = [...Array(n)].reduce((acc, _, idx) => {
  if (n % (idx + 1) === 0) acc.push(idx + 1);
  return acc;
}, []);

console.log(factors[k - 1] ?? 0);
