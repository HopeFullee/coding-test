// https://www.acmicpc.net/problem/1330

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [A, B] = input.split(" ").map(Number);

if (A > B) console.log(">");
else if (A < B) console.log("<");
else console.log("==");
