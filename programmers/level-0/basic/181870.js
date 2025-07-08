/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181870
  코딩 기초 트레이닝 - ad 제거하기
*/

function solution(strArr) {
  return strArr.filter((str) => !str.includes("ad"));
}

const strArr = ["and", "notad", "abcd"];

console.log(solution(strArr));
