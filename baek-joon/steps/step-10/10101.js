// https://www.acmicpc.net/problem/10101

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((acc, num) => acc + num);

if (sum === 180) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    count = input.filter((num) => num === input[i]).length;
  }

  if (count === 3) console.log("Equilateral");
  else if (count === 2) console.log("Isosceles");
  else if (count === 1) console.log("Scalene");
} else {
  console.log("Error");
}
