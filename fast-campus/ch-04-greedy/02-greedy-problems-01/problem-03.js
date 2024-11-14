// https://www.acmicpc.net/problem/1541

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const groups = input.split("-");

const answer = groups.reduce((acc, group, idx) => {
  const plusGroup = group
    .split("+")
    .reduce((a, num) => Number(a) + Number(num));

  if (idx === 0) acc = plusGroup;
  else acc -= plusGroup;

  return acc;
}, 0);

console.log(answer);
