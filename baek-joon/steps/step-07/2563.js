// https://www.acmicpc.net/problem/2563

/*
 2시간 간의 사투 끝에 풀이 해답을 보았다... ㅠㅠ
 출처: https://nahwasa.com/entry/%EB%B0%B1%EC%A4%80-2563-%EC%83%89%EC%A2%85%EC%9D%B4-%EC%9E%90%EB%B0%94-C-C-nodejs-Kotlin-Python-C
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const arr = Array.from({ length: 100 }, () => Array(100).fill(0));

let result = 0;

input.forEach((line) => {
  const [x, y] = line.split(" ").map(Number);

  for (i = x; i < x + 10; i++) {
    for (j = y; j < y + 10; j++) {
      if (++arr[i][j] === 1) result++;
    }
  }
});

console.log(result);
