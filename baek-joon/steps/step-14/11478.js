//www.acmicpc.net/problem/11478

// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const input = "ababc";

const s = input;

let set = new Set();

for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j <= s.length; j++) {
    set.add(s.slice(i, j));
  }
}

console.log(set.size);
