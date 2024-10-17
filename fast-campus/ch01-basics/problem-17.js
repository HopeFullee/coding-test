// https://www.acmicpc.net/problem/4344

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const line1 = Number(input[0]);

const getAboveAvgPercentage = () => {
  [...Array(line1)].forEach((_, idx) => {
    const testCase = input[idx + 1].split(" ").map(Number);
    testCase.shift();

    const avgGrade = testCase.reduce((acc, val) => acc + val) / testCase.length;
    const aboveAvgStudents = testCase.filter((val) => avgGrade < val).length;
    const aboveAvgPercentage = (
      (aboveAvgStudents / testCase.length) *
      100
    ).toFixed(3);

    console.log(`${aboveAvgPercentage}%`);
  });
};

getAboveAvgPercentage();
