// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);

const input = [1, 3, 5];

function solution(input) {
  for (let i = 1; i < input.length; i += 2) {
    const floor = input[i];
    const room = input[i + 1];
    const floorN = Array.from({ length: room }, (_, idx) => idx + 1);

    [...Array(floor)].forEach(() => {
      for (let j = 1; j < room; j++) {
        floorN[j] += floorN[j - 1];
      }
    });

    console.log(floorN[room - 1]);
  }
}

solution(input);
