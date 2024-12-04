// https://www.acmicpc.net/problem/3578

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let targetHoles = Number(input);

let answer = "";

if (targetHoles === 0) answer = "1";
else if (targetHoles === 1) answer = "0";
else {
  const doubleHoles = parseInt(targetHoles / 2);

  if (targetHoles % 2 !== 0) {
    answer = "4";
  }

  [...Array(doubleHoles)].forEach(() => {
    answer += "8";
  });
}

console.log(answer);
