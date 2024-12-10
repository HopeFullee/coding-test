// https://www.acmicpc.net/problem/9329

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCases = Number(input[0]);
let tcIndex = 1;

[...Array(testCases)].forEach(() => {
  const n = input[tcIndex].split(" ").map(Number)[0];
  const m = input[tcIndex + n + 1].split(" ").map(Number);

  const totalPrize = [...Array(n)].reduce((acc, _, idx) => {
    const k = input[tcIndex + idx + 1].split(" ").map(Number);
    k.shift();
    const prize = k.pop();

    let minTicket = 101;

    k.forEach((requiredTicket) => {
      const currTicketQuant = m[requiredTicket - 1];
      minTicket = Math.min(currTicketQuant, minTicket);
    });

    return acc + minTicket * prize;
  }, 0);

  tcIndex += n + 2;
  console.log(totalPrize);
});
