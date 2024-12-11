// https://www.acmicpc.net/problem/9636

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

input.forEach((tc) => {
  const coordinates = {
    ["U"]: 0,
    ["R"]: 0,
    ["D"]: 0,
    ["L"]: 0,
    ["?"]: 0,
  };

  [...tc].forEach((signal) => {
    coordinates[signal] += 1;
  });

  const preXY = [
    coordinates["R"] - coordinates["L"],
    coordinates["U"] - coordinates["D"],
  ];

  const maxXY = preXY.map((pos) => pos + coordinates["?"]).join(" ");
  const minXY = preXY.map((pos) => pos - coordinates["?"]).join(" ");

  console.log(minXY, maxXY);
});

/********************************************************
  아래놈은 map 도 안돌렸는데 3% 더 느리다는 이유를 몰루겠다
********************************************************/
// const input = [
//   'RUL?R?D',
// '????????',
// 'RRRUU',
// ]

// input.forEach((tc) => {
// const coordinates = {
//   ["U"]: 0,
//   ["R"]: 0,
//   ["D"]: 0,
//   ["L"]: 0,
//   ["?"]: 0,
// };

// [...tc].forEach((signal) => {
//   coordinates[signal] += 1;
// });

// const max = {
//   x: coordinates["R"] - coordinates["L"] + coordinates["?"],
//   y: coordinates["U"] - coordinates["D"] + coordinates["?"],
// };

// const min = {
//   x: coordinates["R"] - coordinates["L"] - coordinates["?"],
//   y: coordinates["U"] - coordinates["D"] - coordinates["?"],
// };

// console.log(min.x, min.y, max.x, max.y);
// });

/********************************************************
  처음으로 싸지르고 합격한 똥코트
********************************************************/

// input.forEach((tc) => {
//   const max = {
//     x: 0,
//     y: 0,
//   };
//   const min = {
//     x: 0,
//     y: 0,
//   };

//   [...tc].forEach((signal) => {
//     if (signal === "?") {
//       max.x += 1;
//       max.y += 1;
//       min.x -= 1;
//       min.y -= 1;
//     } else {
//       if (signal === "U") {
//         max.y += 1;
//         min.y += 1;
//       } else if (signal === "R") {
//         max.x += 1;
//         min.x += 1;
//       } else if (signal === "D") {
//         max.y -= 1;
//         min.y -= 1;
//       } else if (signal === "L") {
//         max.x -= 1;
//         min.x -= 1;
//       }
//     }
//   });

//   console.log(min.x, min.y, max.x, max.y);
// });
