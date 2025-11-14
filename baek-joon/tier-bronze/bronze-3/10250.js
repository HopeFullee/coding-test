/*
  https://www.acmicpc.net/problem/10250
  bronze tier 3 - ACM 호텔
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["2", "6 12 10", "30 50 72"];

function solution(input) {
  for (let i = 1; i < input.length; i++) {
    const [H, W, N] = input[i].split(" ");
    let floor = N % H;
    let room = parseInt(N / H) + 1;

    if (floor === 0) {
      floor = H;
      room--;
    }

    console.log(floor * 100 + room);
  }
}

solution(input);
