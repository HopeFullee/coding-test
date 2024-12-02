// https://www.acmicpc.net/problem/2810

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = input[1].split("");

const totalSeaters = testCase.length;
const coupleSeats = testCase.filter((seat) => seat === "L").length / 2;

if (coupleSeats <= 1) {
  console.log(totalSeaters);
} else {
  console.log(totalSeaters - coupleSeats + 1);
}
