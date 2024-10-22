// https://www.acmicpc.net/problem/2884

const input = require("fs").readFileSync("/dev/stdin").toString();

const line = input.split(" ").map(Number);

const timer = (line) => {
  let hour = line[0];
  let minute = line[1];

  if (minute >= 45) {
    minute -= 45;
  } else {
    hour = hour === 0 ? 23 : hour - 1;
    minute += 15;
  }

  console.log(`${hour} ${minute}`);
};

timer(line);
