/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181874
  코딩 기초 트레이닝 - A 강조하기
*/

function solution(myString) {
  return myString
    .replaceAll(/[B-Z]/g, (ch) => ch.toLowerCase())
    .replaceAll("a", "A");
}

function solution2(myString) {
  return myString.toLowerCase().replaceAll("a", "A");
}

const myString = "PrOgRaMmErS";

console.log(solution(myString));
console.log(solution2(myString));
