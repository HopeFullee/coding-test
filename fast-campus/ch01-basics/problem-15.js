// https://www.acmicpc.net/problem/2562

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const line = input.map(Number);

/*
  이전 problem-14 와 유사함
  indexOf 로 idx 구해오는게 clean 한게 맛깔남
*/
const getMaxNumAndIndex = () => {
  const maxNum = Math.max(...line);

  console.log(maxNum);
  console.log(line.indexOf(maxNum) + 1);
};

getMaxNumAndIndex();
