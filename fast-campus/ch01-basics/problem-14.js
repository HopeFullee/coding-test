// https://www.acmicpc.net/problem/10818

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const line2 = input[1].split(" ").map(Number);

/*
  공간 복잡도는 v2 보다 좋음
  시간 복잡도는 v2 보다 나쁨
*/
const getMinMaxNumber1 = () => {
  let maxNum = line2[0];
  let minNum = line2[0];

  line2.forEach((val) => {
    if (maxNum < val) maxNum = val;
    if (minNum > val) minNum = val;
  });

  console.log(`${minNum} ${maxNum}`);
};

/*
  공간 복잡도는 v1 보다 나쁨
  시간 복잡도는 v1 보다 좋음

  내장 prototype 함수를 사용하여 clean 함으로 v2 압승
*/
const getMinMaxNumber2 = () => {
  const maxNum = Math.max(...line2);
  const minNum = Math.min(...line2);

  console.log(`${minNum} ${maxNum}`);
};
