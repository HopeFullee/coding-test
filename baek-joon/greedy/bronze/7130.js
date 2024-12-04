// https://www.acmicpc.net/problem/7130

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const happiness = input[0].split(" ").map(Number);
const fields = Number(input[1]);

let answer = 0;

for (let i = 2; i < fields + 2; i++) {
  const [cows, bees] = input[i].split(" ").map(Number);
  const maxHappiness = Math.max(cows * happiness[0], bees * happiness[1]);
  answer += maxHappiness;
}

console.log(answer);
