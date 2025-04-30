/* 
  www.acmicpc.net/problem/23971
  ZOAC 4
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// const input = [5, 4, 1, 1];

const [h, w, n, m] = input.split(" ").map(Number);

const x = Math.ceil(w / (m + 1));
const y = Math.ceil(h / (n + 1));

console.log(x * y);
