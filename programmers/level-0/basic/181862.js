/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181862
  코딩 기초 트레이닝 - 세 개의 구분자
*/

function solution(myStr) {
  // 매치
  return myStr.match(/[^a-c]+/g) || ["EMPTY"];

  // 스플릿
  const split = myStr.split(/[abc]/g).filter((v) => v);
  return split.length ? split : ["EMPTY"];
}

const myStr = "baconlettucetomato";

console.log(solution(myStr));
