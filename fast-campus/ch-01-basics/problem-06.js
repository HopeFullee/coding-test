// https://www.acmicpc.net/problem/9498

const input = require("fs").readFileSync("/dev/stdin").toString();

const gradeCalc = (input) => {
  const grade = Number(input);

  if (grade >= 90) console.log("A");
  else if (grade >= 80) console.log("B");
  else if (grade >= 70) console.log("C");
  else if (grade >= 60) console.log("D");
  else console.log("F");
};

gradeCalc(input);
