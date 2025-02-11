// https://www.acmicpc.net/problem/2903

/*
  오늘의 교훈 -
   수학 문제 나오자마자 한시간+@ 머리를 굴려봤지만 처참히 실패..
   브론즈3 문제에 애쓰는 본인을 보며 현타가 심하게 왔다.
   
   수포자로 살아왔던 인생을 되돌아보게 되는 계기가 됨.
   늦었다 생각하지 말고 지금 부터라도 기초 수학 지식을 늘리자.
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input);

const result = (2 ** n + 1) ** 2;

console.log(result);
