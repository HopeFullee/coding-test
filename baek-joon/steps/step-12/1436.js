// https://www.acmicpc.net/problem/1018

// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// const n = Number(input);

const n = 187;

const s = "666";
let count = 0;
let i = 0;

while (true) {
  if (i.toString().includes(s)) {
    count++;
    if (count === n) break;
  }

  i++;
}

console.log(i);
