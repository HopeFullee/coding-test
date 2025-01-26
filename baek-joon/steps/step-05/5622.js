// https://www.acmicpc.net/problem/5622

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const phone = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

const totalTime = [...input].reduce((acc, str) => {
  Object.entries(phone).some(([key, val]) => {
    if (val.indexOf(str) !== -1) {
      acc += Number(key) + 1;
      return true;
    } else false;
  });
  return acc;
}, 0);

console.log(totalTime);
