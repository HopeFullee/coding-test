// https://www.acmicpc.net/problem/8393

const input = require("fs").readFileSync("/dev/stdin").toString();

const line = Number(input);

const sumNumber = () => {
  const sumResult = Array(line)
    .fill(0)
    .reduce((acc, _, idx) => {
      return acc + (idx + 1);
    }, 0);

  console.log(sumResult);
};

sumNumber();
