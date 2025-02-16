// https://www.acmicpc.net/problem/1193

/*
  자랑할만한 고티어 문제는 아니지만,
  풀이 해설 없이 혼자만의 힘으로 2시간 가량 투자하여 문제를 풀어보았다.

  그나마 조금씩이라도 코테 공부를 해왔기에 정답을 맞출 수 있었다고 생각한다.
  느리더라도 멈추진 말자! 미래의 나는 이정도 수준의 문제는 30분내로 풀길 바란다!
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const x = Number(input);

let diagonalStep = 0;
let stepSum = 0;

while (stepSum < x) {
  stepSum += ++diagonalStep;
}

const direction = diagonalStep % 2 ? "up" : "down";
const row = direction === "up" ? stepSum - x + 1 : diagonalStep - (stepSum - x);
const col = diagonalStep - (row - 1);

console.log(`${row}/${col}`);
