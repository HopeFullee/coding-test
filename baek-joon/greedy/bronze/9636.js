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

/****************************************************************************************************************
  위에 리펙한 친구에서 굳이? map(iterate)을 돌려서 시간복잡도를 늘릴 필요가 있을까? 
  란 생각에 maping 생량하고 바로 min/max 에 때려박았는데 
  https://jsbench.me/ 성능 벤치 확인 결과 아래 코드는 
  위에 map 돌린 친구보다 3% 가량 느리다고한다??? 왜??

  P.S 3%가 성능상 미미한건 알겠지만 왜 추가적으로 iterate 한놈이 더 빠른건지 이해할 날이 왔으면 좋겠당.. 
****************************************************************************************************************/
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
  처음으로 싸지르고 합격한 똥코드
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
