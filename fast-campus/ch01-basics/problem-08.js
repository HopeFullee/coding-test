// https://www.acmicpc.net/problem/2525

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const line1 = input[0].split(" ").map(Number);
const line2 = Number(input[1]);

const timer = () => {
  let hour = line1[0];
  let minute = line1[1];
  let setMin = line2;

  if (minute + setMin < 60) minute += setMin;
  else {
    const calcHour = Math.floor((minute + setMin) / 60) + hour;
    const calcMinute = (minute + setMin) % 60;

    hour = calcHour < 24 ? calcHour : calcHour - 24;
    minute = calcMinute;
  }

  console.log(`${hour} ${minute}`);
};

timer();
