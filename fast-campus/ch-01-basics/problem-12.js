// https://www.acmicpc.net/problem/2438

const input = require("fs").readFileSync("/dev/stdin").toString();

const line = Number(input);

const printStar = () => {
  [...Array(line)].forEach((_, index) => {
    const starArray = [...Array(index + 1)].map(() => "*");

    console.log(starArray.join(""));
  });
};

printStar();
