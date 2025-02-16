// https://www.acmicpc.net/problem/2745

/*
  구현없이 순도 100% 수학 문제는 아무리 머리를 굴려봐도 풀 수 없었다 ㅠㅠ..
  출처: https://www.youtube.com/watch?v=6Eu2j_0s-kk

  
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [a, b, v] = input.split(" ").map(Number);

const div = (v - a) / (a - b);
const hasDecimal = div % 1 !== 0;

const result = hasDecimal ? parseInt(div) + 2 : div + 1;

console.log(result);
