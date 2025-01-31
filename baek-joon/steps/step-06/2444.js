// https://www.acmicpc.net/problem/2444

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input) * 2 - 1;

let space = Number(input);
let star = -1;

[...Array(n)].forEach((_, idx) => {
  if (parseInt(n / 2) >= idx) {
    star += 2;
    space--;
  } else {
    star -= 2;
    space++;
  }

  console.log(" ".repeat(space) + "*".repeat(star));
});
