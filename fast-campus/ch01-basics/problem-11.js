// https://www.acmicpc.net/problem/2739

const input = require("fs").readFileSync("/dev/stdin").toString();

const line = Number(input);

const multiplicationTable = () => {
  Array(9)
    .fill(line)
    .reduce((acc, val, idx) => {
      acc = val * (idx + 1);

      console.log(`${val} * ${idx + 1} = ${val * (idx + 1)}`);
    }, 0);
};

multiplicationTable();
