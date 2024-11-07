// https://www.acmicpc.net/problem/10814

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const userInfoArr = input.map((val) => {
  return val.split(" ");
});

userInfoArr.sort((a, b) => {
  const userA = { age: Number(a[0]), name: a[1] };
  const userB = { age: Number(b[0]), name: b[1] };

  return userA.age - userB.age;
});

const answer = userInfoArr.map((user) => user.join(" ")).join("\n");

console.log(answer);
