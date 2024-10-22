// https://www.acmicpc.net/problem/2675

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const printDupedStr = (input) => {
  const line1 = Number(input[0]);

  [...Array(line1)].forEach((_, idx) => {
    const [r, str] = input[idx + 1].split(" ");

    const dupedStr = [...str].reduce(
      (acc, val) => acc + val.repeat(Number(r)),
      ""
    );

    console.log(dupedStr);
  });
};

const printDupedStr2 = (input) => {
  const line1 = Number(input[0]);

  [...Array(line1)].forEach((_, idx) => {
    const testCase = input[idx + 1].split(" ");
    const r = Number(testCase[0]);
    const strArray = testCase[1].split("");

    const dupedStr = strArray.reduce((acc, val) => acc + val.repeat(r), "");

    console.log(dupedStr);
  });
};

printDupedStr(input);
