// https://www.acmicpc.net/problem/3052

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const line = input.map(Number);

const getRemainders = () => {
  const uniqueRemainders = new Set();

  line.forEach((val) => {
    uniqueRemainders.add(val % 42);
  });

  console.log(uniqueRemainders.size);
};

// const getRemainders = () => {
//   const divideNum = 42;
//   const seen = {};

//   const remainders = line.map((val) => val % divideNum);

//   const uniqueRemainders = remainders.filter((val) => {
//     return seen.hasOwnProperty(val) ? false : (seen[val] = true);
//   });

//   console.log(uniqueRemainders.length);
// };

getRemainders();
