// https://www.acmicpc.net/problem/2864

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const testCase = input.split(" ");

const { min, max } = testCase.reduce(
  (acc, str) => {
    const sixToFive = [...str].map((s) => {
      if (s === "6") return "5";
      else return s;
    });

    const fiveToSix = [...str].map((s) => {
      if (s === "5") return "6";
      else return s;
    });

    acc.min += Number(sixToFive.join(""));
    acc.max += Number(fiveToSix.join(""));
    return acc;
  },
  {
    min: 0,
    max: 0,
  }
);

console.log(min, max);
