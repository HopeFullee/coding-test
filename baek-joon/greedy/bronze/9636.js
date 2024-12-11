// https://www.acmicpc.net/problem/9636

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

input.forEach((tc) => {
  const max = {
    x: 0,
    y: 0,
  };
  const min = {
    x: 0,
    y: 0,
  };

  [...tc].forEach((signal) => {
    if (signal === "?") {
      max.x += 1;
      max.y += 1;
      min.x -= 1;
      min.y -= 1;
    } else {
      if (signal === "U") {
        max.y += 1;
        min.y += 1;
      } else if (signal === "R") {
        max.x += 1;
        min.x += 1;
      } else if (signal === "D") {
        max.y -= 1;
        min.y -= 1;
      } else if (signal === "L") {
        max.x -= 1;
        min.x -= 1;
      }
    }
  });

  console.log(min.x, min.y, max.x, max.y);
});
