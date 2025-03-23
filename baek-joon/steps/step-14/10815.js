// https://www.acmicpc.net/problem/10815

/*
  중복 카드가 나올 수 있을거란 착각에 set을 사용안했는데
  당연한 결과로 -> 시간초과가 떠버렸다.

  눈을 비비고 다시 입력란을 읽어보니
  "두 숫자 카드에 같은 수가 적혀있는 경우는 없다."
  즉 중복 카드는 없으니 안심하고 set을 활용해도 된다는것..
  
  결론은 set의 has() 활용으로 유니크 key의 값을 호출여
  공간 복잡도를 희생해서 시간 복잡도를 챙겼다.

  *******************문제좀 단디 읽자*********************
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = new Set(input[1].split(" ").map(Number));
const m = input[3].split(" ").map(Number);

let result = "";

m.forEach((card) => {
  if (n.has(card)) {
    result += "1 ";
  } else result += "0 ";
});

console.log(result.trim());
