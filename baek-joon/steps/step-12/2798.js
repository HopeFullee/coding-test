// https://www.acmicpc.net/problem/2798

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

let max = 0;

for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      const sum = cards[i] + cards[j] + cards[k];

      if (sum <= m && max < sum) max = sum;
    }
  }
}

console.log(max);
