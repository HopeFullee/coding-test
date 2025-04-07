/* 
  www.acmicpc.net/problem/12789
  스택을 활용하여 오름차순으로 학생을 빼내는 문제
*/

/*
  2시간 정도의 삽질 결과
  n을 순회하며 순서대로 오름차 순으로 먼저 count 증가로 처리하고
  n 순회 중 순서에서 어긋난 순번은 stack에 집어 넣었다.

  앞전 n 순회를 맞치고 stack에 들어간 못난이들을 따로 최후 순으로 (거꾸로) 순회하여
  이전에 n을 순회하며 증가했던 count 순번에 맞게 페어링 해보았다.
  
  count 와 stack[n] 번째와 동일하면 count 증가처리 하고,
  아니라면 result에 'Sad'를 대입하고 루프를 break; 처리했다.

  위의 로직상과 실제로 유튜브 백준 강의 중 - https://www.youtube.com/watch?v=eFMcJURKo5I
  파이썬 코드이지만 본인의 JS로직과 상당히 비슷했다.

  여러번의 삽질로 '틀렸습니다'를 남발하여 구굴링으로 Node 풀이를 보았다.
  출처: https://lhoiktiv.tistory.com/190

  본인의 소스와는 많이 다른 고도화된 느낌을 받았다.
  스택 자료구조를 완벽히 이해한듯한 느낌의 풀이 방식이었다.
  부러웠다.. 나도 언젠간..
*/

/************************************ 구글링으로 얻은 정답 소스 ************************************/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const totalStudents = Number(input[0]);
const primaryLine = input[1].split(" ").map(Number);
const secondaryLine = [];

let count = 1;
let result = "Nice";

while (count <= totalStudents) {
  if (secondaryLine[secondaryLine.length - 1] === count) {
    secondaryLine.pop();
    count++;
  } else if (primaryLine.length) {
    const curStudent = primaryLine.shift();

    if (curStudent === count) {
      count++;
    } else {
      secondaryLine.push(curStudent);
    }
  } else {
    result = "Sad";
    break;
  }
}

console.log(result);

/************************************ 본인이 작성한 '틀렸습니다' 소스 ************************************/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const students = input[1].split(" ").map(Number);
// const stack = [];
// let count = 1;
// let result = "Nice";

// // n의 오름차 순으로 먼저 처리하고, 오름차에서 어긋나면 stack에 저장
// students.forEach((n) => {
//   if (count === n) count++;
//   else stack.push(n);
// });

// // stack에 저장된 못난이들을 stack 로직인 (Last In First Out) 순으로 count와 비교 처리
// for (let i = stack.length - 1; i >= 0; i--) {
//   if (stack[i] === count) {
//     result = "Nice";
//     count++;
//   } else {
//     result = "Sad";
//     break;
//   }
// }

// console.log(result);
