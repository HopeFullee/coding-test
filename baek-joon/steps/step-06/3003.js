// https://www.acmicpc.net/problem/3003

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const inputPieces = input.split(" ").map(Number);

const completeSet = [1, 1, 2, 2, 2, 8];

const requiredPieces = completeSet.reduce((acc, count, idx) => {
  const inputPiece = inputPieces[idx];
  acc.push(count - inputPiece);

  return acc;
}, []);

console.log(requiredPieces.join(" "));
