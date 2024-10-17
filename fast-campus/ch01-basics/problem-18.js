// https://www.acmicpc.net/problem/4344

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const line2 = input[1].split(" ").map(Number);

const getCheatedAvgGrade = () => {
  const maxGrade = Math.max(...line2);

  const cheatedGrades = line2.map((val) => (val / maxGrade) * 100);
  const cheatedGradesAvg =
    cheatedGrades.reduce((acc, val) => acc + val) / line2.length;

  console.log(cheatedGradesAvg);
};

getCheatedAvgGrade();
