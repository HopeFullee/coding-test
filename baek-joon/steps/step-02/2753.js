// https://www.acmicpc.net/problem/2753

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const year = Number(input);

if (year % 400 === 0) console.log(1);
else if (year % 100 !== 0 && year % 4 === 0) console.log(1);
else console.log(0);
