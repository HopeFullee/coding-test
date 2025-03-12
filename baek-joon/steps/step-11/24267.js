// https://www.acmicpc.net/problem/24267

/*
  한시간 + @ 가량 온갖 눈물의 똥꼬쇼로 풀어 보려 했지만 실패했다..
  원인은 시그마 풀이 법을 모르면 풀기 어려운 문제였고 본인은 수포자이다..

  코테 단계를 진행하며 부분 적으로 수학 공부를 하게되는 것에 의미를 두고 버티자.. 
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

(n * (n - 1) * (n - 2)) / 6;

console.log();
console.log(3);
