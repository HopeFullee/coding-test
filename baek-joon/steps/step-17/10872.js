/* 
  www.acmicpc.net/problem/10872
  팩토리얼 - "팩토리얼은 N개의 물건을 일렬로 나열하는 경우의 수와 같습니다. 조합론에서 자주 만나게 될 것입니다."
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

const res = [...Array(n)].reduce((acc, _, idx) => {
  return acc * (idx + 1);
}, 1);

console.log(res);
