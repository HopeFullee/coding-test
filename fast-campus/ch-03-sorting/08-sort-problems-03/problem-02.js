// https://www.acmicpc.net/problem/10814

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const userObjArr = input.map((testCase) => {
  const user = testCase.split(" ");
  const age = Number(user[0]);
  const name = user[1];

  return { age, name };
});

userObjArr.sort((a, b) => a.age - b.age);

const answer = userObjArr.reduce((acc, user) => {
  return acc + `${user.age} ${user.name}` + "\n";
}, "");

console.log(answer);
