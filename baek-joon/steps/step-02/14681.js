// https://www.acmicpc.net/problem/14681

const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [x, y] = input.map(Number);

if (x >= 0 && y >= 0) console.log(1);
else if (x < 0 && y >= 0) console.log(2);
else if (x < 0 && y < 0) console.log(3);
else console.log(4);
