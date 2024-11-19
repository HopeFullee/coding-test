// https://www.acmicpc.net/problem/1946

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCases = Number(input[0]);
let groupIdx = 1;

[...Array(testCases)].forEach(() => {
  const n = Number(input[groupIdx]);

  const group = [...Array(n)].map((_, idx) => {
    const curIdx = groupIdx + idx + 1;
    const [x, y] = input[curIdx].split(" ").map(Number);
    return { x, y };
  });

  group.sort((a, b) => a.x - b.x);

  const { passingCount } = group.reduce(
    (acc, { y }) => {
      if (acc.min > y) {
        acc.passingCount++;
        acc.min = y;
      }
      return acc;
    },
    {
      passingCount: 0,
      min: 100001,
    }
  );

  groupIdx += n + 1;
  console.log(passingCount);
});
