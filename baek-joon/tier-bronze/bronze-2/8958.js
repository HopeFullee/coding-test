/*
  https://www.acmicpc.net/problem/8958
  bronze tier 2 - OX퀴즈
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = [
  "5",
  "OOXXOXXOOO",
  "OOXXOOXXOO",
  "OXOXOXOXOXOXOX",
  "OOOOOOOOOO",
  "OOOOXOOOOXOOOOX",
];

input.shift();

function solution(input) {
  let ans = "";

  input.forEach((tc) => {
    let score = 0;
    let combo = 0;

    for (const ch of tc) {
      if (ch === "X") {
        combo = 0;
        continue;
      }
      score += 1 + combo;
      combo++;
    }

    ans += score.toString() + "\n";
  });

  return ans;
}
