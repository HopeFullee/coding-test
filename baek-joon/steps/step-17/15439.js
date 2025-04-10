/* 
  www.acmicpc.net/problem/15439
  조건을 만족하는 두 옷의 조합을 세는 문제
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

console.log(n * (n - 1));
