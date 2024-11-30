// https://www.acmicpc.net/problem/2720

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const testCases = input.map(Number);

const answer = testCases.reduce((acc, change) => {
  let remain = change;
  const quarter = parseInt(remain / 25);
  remain %= 25;
  const dime = parseInt(remain / 10);
  remain %= 10;
  const nickel = parseInt(remain / 5);
  remain %= 5;
  const penny = parseInt(remain / 1);

  acc.push(`${quarter} ${dime} ${nickel} ${penny}`);
  return acc;
}, []);

console.log(answer.join("\n"));
