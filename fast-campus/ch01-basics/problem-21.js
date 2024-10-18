// https://www.acmicpc.net/problem/2908

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const getReversedGreater = (input) => {
  const line = input.split(" ");

  const reversedNums = line.map((val) =>
    Number(val.split("").reverse().join(""))
  );

  return Math.max(...reversedNums);
};

console.log(getReversedGreater(input));
