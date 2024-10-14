// https://www.acmicpc.net/problem/15552

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const line1 = Number(input[0]);

const printOnce = () => {
  let result = "";

  [...Array(line1)].forEach((_, idx) => {
    const afterLine1 = input[idx + 1].split(" ");
    const a = Number(afterLine1[0]);
    const b = Number(afterLine1[1]);

    result += `${a + b}\n`;
  });

  console.log(result);
};

printOnce();
