// https://www.acmicpc.net/problem/2480

const input = require("fs").readFileSync("/dev/stdin").toString();

const line = input.split(" ").map(Number);

const throwDice = () => {
  const dupeCount = Object.fromEntries(
    Object.entries(
      line.reduce(function (acc, item) {
        if (item in acc) {
          acc[item]++;
        } else {
          acc[item] = 1;
        }
        return acc;
      }, {})
    ).filter(([_, val]) => val > 1)
  );

  if (Object.keys(dupeCount).length === 0) {
    console.log(Math.max(...line) * 100);
  } else {
    Object.entries(dupeCount).forEach(([key, val]) => {
      if (val === 2) console.log(key * 100 + 1000);
      if (val === 3) console.log(key * 1000 + 10000);
    });
  }
};

throwDice();
