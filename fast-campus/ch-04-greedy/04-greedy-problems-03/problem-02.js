// https://www.acmicpc.net/problem/1931

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const schedule = input.map((time) => {
  const [start, end] = time.split(" ").map(Number);
  return { start, end };
});

schedule.sort((a, b) => {
  if (a.end !== b.end) return a.end - b.end;
  else return a.start - b.start;
});

let prevEnd = 0;
let answer = 0;

schedule.forEach(({ start, end }) => {
  if (prevEnd <= start) {
    prevEnd = end;
    answer++;
  }
});

console.log(answer);
