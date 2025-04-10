/* 
  www.acmicpc.net/problem/24723
  녹색거탑 - "탑을 정복하고 DEVIEW에 참여해 코딩괴물이 되어보자."
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

console.log(2 ** n);
