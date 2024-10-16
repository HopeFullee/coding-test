// https://www.acmicpc.net/problem/10818

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const line1 = Number(input[0]);
const line2 = input[1].split(" ").map(Number);

const getHighAndLow = () => {
  let maxNum = line2[0];
  let minNum = line2[0];

  line2.forEach((val) => {
    if (maxNum < val) maxNum = val;
    if (minNum > val) minNum = val;
  });

  console.log(`${minNum} ${maxNum}`);
};

getHighAndLow();
