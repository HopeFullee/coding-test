// https://www.acmicpc.net/problem/25206

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const grades = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"];
const scores = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0];

let totalCredit = 0;
let totalScore = 0;

input.forEach((tc) => {
  const [_, credit, grade] = tc.split(" ");

  if (grade !== "P") {
    const scoreIdx = grades.indexOf(grade);

    totalScore += Number(credit) * scores[scoreIdx];
    totalCredit += Number(credit);
  }
});

console.log(totalScore / totalCredit);
