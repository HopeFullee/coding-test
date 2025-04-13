/* 
  www.acmicpc.net/problem/1010
  다리 놓기 - 벌써 만났습니다.
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["3", "2 2", "1 5", "13 29"];

const factorial = (n) => {
  return [...Array(n)].reduce((acc, _, idx) => {
    return acc * (idx + 1);
  }, 1);
};

for (let i = 1; i < input.length; i++) {
  const [n, k] = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  const binomialCoefficient = Math.round(
    factorial(n) / (factorial(k) * factorial(n - k))
  );

  console.log(binomialCoefficient);
}
